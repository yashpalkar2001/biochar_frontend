import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* <div className="relative w-full  border-2"> */}
      <Image
        src="/hero.jpg"
        alt="hero img"
        width={100}
        height={50}
        className="w-full h-%] "
      />
      {/* </div> */}

      <div className="bg-black border-2 border-red-400 px-4 py-6">
        <h1 className="text-[1.8rem] text-white">
          Carbon to Community with Biochar
        </h1>
        <p className="text-[0.8rem] text-white">
          As carbon emissions rise, rural livelihoods vanish. Two crises. One
          solution.
        </p>
        <div className="pt-5">
          <button className="bg-white text-black px-3 py-1 rounded-full text-sm">
            Buy Carbon Credits
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
