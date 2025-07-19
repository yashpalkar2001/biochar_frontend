"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* <div className="relative w-full  border-2"> */}
      <div></div>
      <Image
        src="/hero.jpg"
        alt="hero img"
        width={100}
        height={500}
        className="w-full h-[65vh] object-cover md:h-full"
      />
      {/* </div> */}
      {/* for mobile view */}
      <div className="bg-black px-4 py-10 font-serif md:hidden">
        <h1 className="text-[1.5rem] text-white w-[50%]">
          Carbon to Community with Biochar
        </h1>
        <p className="text-[0.8rem] text-white w-[50%] py-4">
          As carbon emissions rise, rural livelihoods vanish. Two crises. One
          solution.
        </p>
        <div className="pt-5">
          <button className="bg-white text-black px-3 py-1 rounded-full text-sm">
            Buy Carbon Credits
          </button>
        </div>
      </div>

      {/* for website view */}
      <div className="hidden font-serif px-4 py-10 md:block absolute top-14 left-4 lg:top-[17%] lg:left-[6%] xl:top-[24%]">
        <h1 className="text-[2.5rem] text-white w-[70%] xl:text-[3.5rem]">
          Carbon to Community with Biochar
        </h1>
        <p className="text-[0.8rem] text-white w-[50%] py-4 xl:text-[1.8rem]">
          As carbon emissions rise, rural livelihoods vanish. Two crises. One
          solution.
        </p>
        <div className="pt-5">
          <button className="bg-white text-black px-3 py-1 rounded-full text-sm xl:text-[1.2rem] xl:px-7 xl:py-3">
            Buy Carbon Credits
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
