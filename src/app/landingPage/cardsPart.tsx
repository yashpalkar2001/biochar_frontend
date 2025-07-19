"use client";
import Image from "next/image";
import React from "react";

const CardsPart = () => {
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

        {/* Two‑column layout on desktop, stacked on mobile */}
        <div className="md:flex md:justify-between w-full md:px-10">
          {/* Left navigation / sub‑sections – visible only on lg+ */}
          <nav className="hidden md:block w-1/2">
            <ul className="space-y-6 text-lg leading-relaxed">
              <li className="font-medium text-gray-900">
                Permanent Carbon Removal
              </li>
              <li className="text-gray-600 hover:text-gray-900 transition">
                Empowering Communities
              </li>
              <li className="text-gray-600 hover:text-gray-900 transition">
                Research & Adoption
              </li>
              <li className="text-gray-600 hover:text-gray-900 transition">
                Scale
              </li>
            </ul>
          </nav>
          {/* for mobile only  */}
          <article className="block text-gray-700 space-y-6 text-base leading-relaxed md:hidden">
            <p>
              Heartyculture has been applying biochar to soil since 2016 to
              restore barren lands, improve survival rate of saplings in
              afforestation and positively impact agriculture.
            </p>
          </article>

          {/* Copy block */}
          <article className="hidden md:block w-1/2 md:col-span-8 text-gray-700 space-y-6 text-base lg:text-lg leading-relaxed">
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

        {/* Mobile carousel */}
        <div className="md:hidden relative pt-5">
          {/* Horizontally scrollable track */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
            {slides.map((slide) => (
              <article
                key={slide.title}
                className="snap-center shrink-0 w-full mx-[5%] rounded-xl overflow-hidden bg-white"
              >
                {/* TEXT */}
                <div className="bg-gray-900 text-white p-6 space-y-4">
                  <h3 className="font-serif text-lg leading-snug">
                    {slide.title}
                  </h3>
                  <ul className="list-disc pl-4 space-y-2 text-xs leading-relaxed">
                    {slide.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                {/* IMAGE */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </article>
            ))}
          </div>

          {/* Bullet indicators */}
          <div className="flex justify-center gap-2 mt-4 ">
            {slides.map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-gray-400" />
            ))}
          </div>
        </div>

        {/* desktop view from tablet  */}
        <div className="relative pt-5 md:px-10">
          {/* Slides container */}
          <div className="" style={{ scrollBehavior: "smooth" }}>
            <div className="hidden md:flex md:flex-col transition-transform duration-500 ">
              {slides.map((slide, i) => (
                <div
                  key={slide.title}
                  className="min-w-full md:min-w-0 md:w-full px-0 md:px-0 md:py-5 sticky top-14 z-10"
                >
                  <div
                    className={`rounded-xl overflow-hidden flex flex-col md:flex-row 
                  ${i % 2 === 1 ? "md:flex-row-reverse" : ""}
                    `}
                  >
                    {/* Text side */}
                    <div className="bg-gray-900 text-white md:w-1/2 p-8 space-y-6 flex flex-col justify-center">
                      <h3 className="font-serif text-xl md:text-2xl lg:text-3xl mb-4">
                        {slide.title}
                      </h3>
                      <ul className="list-disc pl-5 space-y-3 text-sm md:text-base leading-relaxed">
                        {slide.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Image side */}
                    <div className="md:w-1/2 h-48 md:h-auto">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsPart;
