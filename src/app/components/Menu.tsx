"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./cartIcon";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Menu",
      url: "/menu",
    },
    {
      id: 3,
      title: "Working Hours",
      url: "/",
    },
    {
      id: 4,
      title: "Contact",
      url: "/",
    },
  ];
  const user = false;
  return (
    <>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div
          className="bg-red-500 flex items-center justify-center absolute flex-col gap-8
      z-10 left-0 text-white top-24 h-[calc(100vh-6rem)] text-3xl"
        >
          {links.map(({ id, title, url }) => (
            <Link href={url} key={id} onClick={() => setOpen(false)}>
              {title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </>
  );
};

export default Sidebar;
