"use client";
import Image from "next/image";
import React, { useState } from "react";

const CardsPart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Permanent Carbon Removal",
      bullets: [
        "Permanent: Over 75% of biochar applied is Persistent Aromatic Carbon, locking carbon in soil for thousands of years.",
        "Local & Sustainable: Produced and applied to soil locally, minimizing carbon footprint of carbon sequestering activity.",
        "Verified & Transparent: Fully traceable via Digital MRV and certified by Carbon Standards International (CSI), delivering assured impact.",
      ],
      image: "/cardImg.jpg",
    },
    {
      title: "Empowering Communities",
      bullets: [
        "Livelihoods: Rural youth and women build profitable village-scale biochar businesses, creating dignified local jobs and establishing a vibrant rural economy.",
        "Soil Health: Biochar improves soil moisture and structure and permanently increases fertility by bringing back microbial life in soil for generations.",
        "Farmer Prosperity: Our field trials across diverse zones demonstrate better crop yields & farmer income year after year, with a single application of biochar. Carbon finance makes biochar affordable and accessible to farmers.",
      ],
      image: "/cardImg.jpg",
    },
    {
      title: "Research & Adoption",
      bullets: [
        "Center of Excellence: India’s first biochar COE integrates innovation, training, and outreach to accelerate adoption by farming communities.",
        "Backed by Science: Trials with 144 farmers across 3 districts showed 18–32% yield gains in diverse soils & practices. Partnership with ICAR-CICR.",
        "Innovation: In-situ pyrolysis enables on-farm production of biochar, reducing logistics costs and improving unit economics.",
      ],
      image: "/cardImg.jpg",
    },
    {
      title: "Scale",
      bullets: [
        "Farmer Network: With access to 18 million farmers across 100,000+ villages in 8 states of India through Samunnati and Heartfulness Institute, we’re built for scale.",
        "Afforestation: In 10,200 acres of reforestation with Forests by Heartfulness, biochar has boosted sapling survival to 85–90%.",
        "Collaborative Model: Partnering with ICAR-CICR, Samunnati, Arvind Mills, Pratibha Syntex, and dMRV partners for science, adoption, and transparency.",
        "SDG-aligned: Driving climate action, rural livelihoods, healthy soils, biodiversity and food security.",
      ],
      image: "/cardImg.jpg",
    },
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 lg:py-24 py-12">
        {/* Section Heading */}
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

        {/* About Section */}
        <div className="md:flex md:justify-between w-full md:px-10">
          <article className="block text-gray-700 space-y-6 text-base leading-relaxed md:hidden">
            <p>
              Heartyculture has been applying biochar to soil since 2016 to
              restore barren lands, improve survival rate of saplings in
              afforestation and positively impact agriculture.
            </p>
          </article>
          <article className="hidden md:block md:col-span-8 text-gray-700 space-y-6 text-base lg:text-lg leading-relaxed">
            <p>
              Heartyculture has been applying biochar to soil since 2016 to
              restore barren lands, improve survival rate of saplings in
              afforestation and positively impact agriculture. Our mission is to
              enable youth and women entrepreneurs to set up a biochar business
              in every village of India, empowering local communities to improve
              livelihoods, soil fertility, crop yield and income.
            </p>
            <p>
              A barren land of 1,400 acres near Hyderabad, India with water
              table 1,200 feet below ground and very poor soil conditions has
              been transformed into a green oasis. Heartyculture biochar was
              born from this remarkable success. Today, we have applied biochar
              to 10,000 acres of afforestation and agricultural farms across 8
              states of India, improving sapling survival rate and crop yield.
            </p>
          </article>
        </div>

        {/* Tab Navigation (Desktop + Mobile) */}
        <nav className="w-full md:px-10 py-5 overflow-x-scroll md:overflow-x-hidden">
          <ul className="w-full flex flex-nowrap justify-start gap-4 text-sm sm:text-base md:text-lg font-medium">
            {slides.map((slide, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer px-4 py-1 text-nowrap rounded-full border ${
                  activeIndex === index
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {slide.title}
              </li>
            ))}
          </ul>
        </nav>

        {/* Responsive Card – Only show activeIndex */}
        <div className="relative pt-3 md:px-10">
          <div
            className={`rounded-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 ease-in-out`}
          >
            {/* Text side */}
            <div className="bg-gray-900 text-white md:w-1/2 p-8 space-y-6 flex flex-col justify-center">
              <h3 className="font-serif text-xl md:text-2xl lg:text-3xl mb-4">
                {slides[activeIndex].title}
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed">
                {slides[activeIndex].bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            {/* Image side */}
            <div className="md:w-1/2 h-48 md:h-auto">
              <Image
                src={slides[activeIndex].image}
                alt={slides[activeIndex].title}
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsPart;
