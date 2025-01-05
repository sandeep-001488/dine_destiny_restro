import React from "react";
import Image from "next/image";
import Price from "@/app/components/price";
import { ProductType } from "@/types/types";
import DeleteButton from "@/app/components/DeleteButton";

const getData = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("failed to get data for category");
  }
  return res.json();
};

type Params = Promise<{ id: string }>;

const Product = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const singleProduct: ProductType = await getData(id);

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center relative">
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      <div className="h-1/2 flex flex-col text-red-500 gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl  ">
          {singleProduct.title}{" "}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price product={singleProduct} />
      </div>
      <DeleteButton id={singleProduct.id} />
    </div>
  );
};

export default Product;
