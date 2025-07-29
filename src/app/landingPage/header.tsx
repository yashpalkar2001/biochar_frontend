"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full fixed z-30 lg:top-7">
        <div className="w-full flex justify-between items-center py-2 bg-white lg:rounded-full lg:px-5 lg:w-[95%] lg:mx-auto">
          <div className="py-1">
            <Image
              src={"/Logos/logo.png"}
              alt={"logo"}
              width={120}
              height={70}
            />
          </div>
          <div className="hidden lg:block">
            <ul className="flex font-bold">
              <li className="px-3">Home</li>
              <li className="px-3">
                <Link href="#whyUs">Why Us</Link>
              </li>
              <li className="px-3">
                <Link href="#ourImpact">Our Impact</Link>
              </li>
              <li className="px-3">
                <Link href="#formForId">Contact</Link>
              </li>
              <li className="px-3">
                <Link href="#FAQs">FAQs</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm">
              <Link href="#formForId">Buy Carbon Credits</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
