"use client";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full fixed z-30 lg:top-7">
        <div className="  w-full flex justify-between items-center p-3 bg-black text-white lg:rounded-full lg:px-5 lg:w-[90%] lg:mx-auto">
          <div>
            <h4>Logo</h4>
          </div>
          <div className="hidden lg:block">
            <ul className="flex ">
              <li className="px-2">Home</li>
              <li className="px-2">Why Us</li>
              <li className="px-2">Our Impact</li>
              <li className="px-2">Contact</li>
              <li className="px-2">FAQs</li>
            </ul>
          </div>
          <div>
            <button className="bg-white text-black px-3 py-1 rounded-full text-sm">
              Buy Carbon Credits
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
