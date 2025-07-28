"use client";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full fixed z-30 lg:top-7">
        <div className="  w-full flex justify-between items-center py-1 bg-white lg:rounded-full lg:px-5 lg:w-[95%] lg:mx-auto">
          <div className="">
            <Image
              src={"/Logos/logo.png"}
              alt={"logo"}
              width={80}
              height={50}
            />
          </div>
          <div className="hidden lg:block">
            <ul className="flex font-bold">
              <li className="px-3">Home</li>
              <li className="px-3">Why Us</li>
              <li className="px-3">Our Impact</li>
              <li className="px-3">Contact</li>
              <li className="px-3">FAQs</li>
            </ul>
          </div>
          <div>
            <button className="bg-black text-white px-3 py-1 rounded-full text-sm">
              <a href="#formForId">Buy Carbon Credits</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
