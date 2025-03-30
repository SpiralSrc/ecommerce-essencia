"use client";

import { Category } from "@prisma/client";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

interface CategoryProps {
  categories: Category[];
}

const HeroSlider = ({ categories }: CategoryProps) => {
  const [activeImage, setActiveImage] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveImage((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  }, [categories.length]);

  const prevSlide = useCallback(() => {
    setActiveImage((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  }, [categories.length]);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [activeImage, nextSlide]); //

  return (
    <div className="relative w-full h-full flex justify-center items-center p-20">
      {categories.map((cat, id) => (
        <div
          key={cat.id}
          className={`${
            id === activeImage
              ? "relative opacity-100 w-full h-full transition-all duration-500 ease-in-out group"
              : "opacity-0"
          }`}
        >
          {/* Left Arrow */}
          <ArrowBigLeft
            onClick={prevSlide}
            size={50}
            className="absolute top-[45%] left-1 xs:left-6 cursor-pointer select-none z-[2] p-3 rounded-full transition-all duration-500 ease-in-out group-hover:shadow-xl group-hover:backdrop-blur-md group-hover:bg-teal-400/20"
            aria-label="Previous slide"
          />

          {/* Image */}
          <div className="w-full h-full flex">
            <Image
              src={cat.bannerUrl}
              alt={`Image for ${cat.name}`}
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>

          {/* Right Arrow */}
          <ArrowBigRight
            onClick={nextSlide}
            size={50}
            className="absolute top-[45%] right-1 xs:right-6 cursor-pointer select-none z-[2] p-3 rounded-full transition-all duration-700 ease-in-out group-hover:shadow-xl group-hover:backdrop-blur-md group-hover:bg-teal-400/20"
            aria-label="Next slide"
          />

          {/* Category Name */}
          <div className="absolute bottom-4 left-6 text-white font-bold text-lg">
            {cat.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
