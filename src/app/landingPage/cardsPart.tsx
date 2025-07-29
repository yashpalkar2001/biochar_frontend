"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  title: string;
  bullets: string[];
  images: string[];
}
const CardsPart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: Slide[] = [
    {
      title: "Permanent Carbon Removal",
      bullets: [
        "Permanent: Over 75% of biochar applied is Persistent Aromatic Carbon, locking carbon in soil for thousands of years.",
        "Local & Sustainable: Produced and applied to soil locally, minimizing carbon footprint of carbon sequestering activity.",
        "Verified & Transparent: Fully traceable via Digital MRV and certified by Carbon Standards International (CSI), delivering assured impact.",
      ],
      images: ["/CardsImg/card1.png", "/CardsImg/card2.jpg"],
    },
    {
      title: "Empowering Communities",
      bullets: [
        "Livelihoods: Rural youth and women build profitable village-scale biochar businesses, creating dignified local jobs and establishing a vibrant rural economy.",
        "Soil Health: Biochar improves soil moisture and structure and permanently increases fertility by bringing back microbial life in soil for generations.",
        "Farmer Prosperity: Our field trials across diverse zones demonstrate better crop yields & farmer income year after year, with a single application of biochar. Carbon finance makes biochar affordable and accessible to farmers.",
      ],
      images: [
        "/CardsImg/card3.jpg",
        "/CardsImg/card4.jpg",
        "/CardsImg/card5.png",
        "/CardsImg/card6.png",
      ],
    },
    {
      title: "Research & Adoption",
      bullets: [
        "Center of Excellence: India’s first biochar COE integrates innovation, training, and outreach to accelerate adoption by farming communities.",
        "Backed by Science: Trials with 144 farmers across 3 districts showed 18–32% yield gains in diverse soils & practices. Partnership with ICAR-CICR.",
        "Innovation: In-situ pyrolysis enables on-farm production of biochar, reducing logistics costs and improving unit economics.",
      ],
      images: ["/CardsImg/card7.png", "/CardsImg/card8.png"],
    },
    {
      title: "Scale",
      bullets: [
        "Farmer Network: With access to 18 million farmers across 100,000+ villages in 8 states of India through Samunnati and Heartfulness Institute, we’re built for scale.",
        "Afforestation: In 10,200 acres of reforestation with Forests by Heartfulness, biochar has boosted sapling survival to 85–90%.",
        "Collaborative Model: Partnering with ICAR-CICR, Samunnati, Arvind Mills, Pratibha Syntex, and dMRV partners for science, adoption, and transparency.",
        "SDG-aligned: Driving climate action, rural livelihoods, healthy soils, biodiversity and food security.",
      ],
      images: ["/cardImg.jpg"],
    },
  ];

  return (
    <section id="whyUs" className="max-w-7xl mx-auto px-4 lg:py-24 py-12">
      <div className="text-center mb-10 lg:mb-16">
        <p className="text-sm lg:text-base font-light tracking-wide text-gray-500 mb-4">
          What sets HeartyCulture Biochar apart?
        </p>
        <h2 className="font-semibold text-2xl md:text-3xl md:font-normal px-[10%] lg:text-5xl leading-tight">
          Permanent carbon removal that drives
          <br className="hidden lg:block" />
          real community impact
        </h2>
      </div>

      {/* Tab Navigation */}
      <nav className="w-full flex flex-wrap justify-center gap-4 md:gap-6 py-5 mb-10">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-full text-sm md:text-base transition-all border ${
              activeIndex === index
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-600 hover:text-black border-gray-300"
            }`}
          >
            {slide.title}
          </button>
        ))}
      </nav>

      {/* Card Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row gap-6 rounded-xl overflow-hidden"
        >
          {/* Text side */}
          <div className="bg-gray-900 text-white md:w-1/2 p-8 space-y-6 flex flex-col justify-center">
            <h3 className="font-serif text-2xl lg:text-3xl mb-4">
              {slides[activeIndex].title}
            </h3>
            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed">
              {slides[activeIndex].bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Image Grid */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
            {slides[activeIndex].images.map((img, i) => (
              <div
                key={i}
                className="w-full h-[250px] relative overflow-hidden rounded-xl shadow"
              >
                <Image
                  src={img}
                  alt={`${slides[activeIndex].title} - image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default CardsPart;
