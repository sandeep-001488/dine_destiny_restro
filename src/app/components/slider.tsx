"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Where Every Bite Crackles with Flavor",
    image: "/burgers.jpg",
  },
  {
    id: 2,
    title: "Fresh, Flawless, and Crisp on the Finish",
    image: "/pastas.jpg",
  },
  {
    id: 3,
    title: "Bold Flavors, Crispy Bites, Pure Happiness",
    image: "/pizzas.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="mt-1 flex flex-col h-[calc(100vh-6rem)] lg:flex-row md:h-[calc(100vh-9rem)] bg-fuchsia-50">
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full lg:w-1/2">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      <div className="w-full  flex-1 relative lg:h-full lg:w-1/2">
        <Image
          src={data[currentSlide].image}
          alt="slide1"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
