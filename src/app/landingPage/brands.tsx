"use client";
import React from "react";
import Image from "next/image";

const Brands = () => {
  const logos = [
    "/brand.png",
    "/brand.png",
    "/brand.png",
    "/brand.png",
    "/brand.png",
    "/brand.png",
  ];
  return (
    <>
      <section className="bg-[#08141f] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Tagline */}
          <p className="text-center text-xs uppercase tracking-wider text-gray-400 mb-10">
            Loved and supported by
          </p>

          {/* Logos */}
          <div
            className="grid grid-cols-2 gap-8 items-center justify-items-center
                      md:flex md:justify-between md:space-x-12"
          >
            {logos.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Partner logo"
                width={120}
                height={40}
                className="h-6 w-auto"
              />
            ))}
          </div>

          {/* Bullet indicators (static example) */}
          <div className="flex justify-center mt-10 space-x-2 md:hidden">
            {[0, 1, 2].map((d) => (
              <span key={d} className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
