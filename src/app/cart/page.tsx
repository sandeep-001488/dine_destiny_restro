"use client";
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Cart = () => {
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();

  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (totalItems == 0) {
      router.push("/menu");
    }
  }, [totalItems, router]);

  const handleCheckout = async () => {
    if (!session) {
      router.push("/");
    } else {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/orders`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              price: totalPrice,
              products,
              status: "Not paid",
              userEmail: session.user.email,
            }),
          }
        );

        const data = await res.json();

        router.push(`/pay/${data.id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
        <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
          {products.map((item) => (
            <div
              className="flex items-center justify-between mb-4 
          "
              key={item.id}
            >
              {item.img && (
                <Image src={item.img} alt="" width={100} height={100} />
              )}
              <div className="">
                <h1 className="uppercase text-xl font-bold">
                  {item.title} x {item.quantity}
                </h1>
                <span>{item.optionTitle}</span>
              </div>
              <h2 className="font-bold">Rs.{item.price}</h2>
              <span
                className="cursor-pointer"
                onClick={() => removeFromCart(item)}
              >
                X
              </span>
            </div>
          ))}
        </div>
        <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
          <div className="flex justify-between">
            <span>Subtotal ({totalItems})</span>
            <span>Rs.{totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Service Cost</span>
            <span>Rs. 0.00</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Cost</span>
            <span className="text-green-500">Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <span>TOTAL(INCL. VAT)</span>
            <span className="text-green-500">Rs.{totalPrice}</span>
          </div>
          <button
            className="bg-red-500 text-white rounded-md w-1/2 self-end"
            onClick={handleCheckout}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
