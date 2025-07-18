"use client";
import Image from "next/image";
import { useState } from "react";
import { FaQuinscape } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const interestOptions = [
  "Offset Emissions",
  "Explore Partnership",
  "Support Farmers",
  "Join as a Volunteer",
  "Other",
];

const faqs = [
  {
    question: "How does biochar help fight climate change?",
    answer:
      "Biochar is a stable form of carbon produced by heating biomass in low-oxygen conditions. When applied to soil, it improves health and locks carbon for thousands of years, preventing its return to the atmosphere.",
  },
  {
    question: "What are biochar carbon credits?",
    answer:
      "Each carbon credit represents the removal of one ton of CO₂. Heartyculture credits are certified and traceable through digital MRV.",
  },
  {
    question: "Who produces the biochar in your project?",
    answer:
      "We work with rural entrepreneurs and farmers who use sustainable methods to produce biochar from farm residue.",
  },
  {
    question: "How does biochar benefit farmers?",
    answer:
      "It improves fertility, water retention, crop yield, and income. We aim to provide biochar free to farmers via carbon credit purchases.",
  },
  {
    question: "Who produces the biochar in your project?",
    answer:
      "We work with rural entrepreneurs and farmers who use sustainable methods to produce biochar from farm residue.",
  },
  {
    question: "How does biochar benefit farmers?",
    answer:
      "It improves fertility, water retention, crop yield, and income. We aim to provide biochar free to farmers via carbon credit purchases.",
  },
];

export default function FormAndFaq() {
  const [selected, setSelected] = useState<string[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (label: string) =>
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );

  return (
    <section className="">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-12">
        {/* ─────── Image (above on mobile, left on desktop) ─────── */}
        <div className="relative md:col-span-6">
          <Image
            src="/cardImg.jpg" // ↖ replace with real path
            alt="Green landscape"
            width={1600}
            height={900}
            className="w-full h-72 sm:h-96 md:h-full object-cover"
          />

          {/* Optional badge */}
          <span className="hidden lg:block absolute top-6 left-6 bg-black text-white text-xs px-3 py-1 rounded">
            Back in 2023
          </span>
        </div>

        {/* ─────── Form ─────── */}
        <div className="md:col-span-6 px-6 py-10 flex flex-col items-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-2">
            Create impact today
          </h2>

          <form className="w-full max-w-md border border-gray-300 bg-white rounded-xl p-3 space-y-6 ">
            {/* Name */}
            <label className="block">
              <span className="text-xs font-medium">Full Name*</span>

              <div className="mt-1 relative flex items-center">
                <span className="absolute left-3 text-gray-500">
                  <MdOutlineMailOutline />
                </span>
                <input
                  type="text"
                  required
                  placeholder="Karbon Karma"
                  className="pl-10 pr-3 w-full rounded border py-2 placeholder:text-sm border-gray-300 focus:ring-gray-800 focus:border-gray-800 text-sm"
                />
              </div>
            </label>

            {/* Email */}
            <label className="block">
              <span className="text-xs font-medium">Enter your email*</span>

              <div className="mt-1 relative flex items-center">
                <span className="absolute left-3 text-gray-500">
                  <MdOutlineMailOutline />
                </span>
                <input
                  type="email"
                  required
                  placeholder="hello@carbon.co"
                  className="pl-10 pr-3 w-full rounded border py-2 placeholder:text-sm border-gray-300 focus:ring-gray-800 focus:border-gray-800 text-sm"
                />
              </div>
            </label>

            {/* Interests */}
            <div>
              <span className="text-xs font-medium">Interests*</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {interestOptions.map((label) => {
                  const active = selected.includes(label);
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => toggle(label)}
                      className={`px-4 py-2 rounded text-xs border
                        ${
                          active
                            ? "bg-black text-white border-black"
                            : "bg-white text-gray-800 border-gray-300"
                        }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <label className="block">
              <span className="text-xs font-medium">Inquiry message</span>
              <textarea
                rows={1}
                className="mt-2 w-full rounded border py-1 border-gray-300 focus:ring-gray-800 focus:border-gray-800 text-sm resize-none"
              />
            </label>

            {/* Actions */}
            <div className="flex justify-center items-center gap-2">
              <button
                type="reset"
                className="px-6 py-2 rounded-full border border-gray-400 text-gray-700 text-sm"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-[#123955] text-white text-sm hover:bg-gray-800"
              >
                Transform carbon
              </button>
            </div>
          </form>
        </div>
      </div>
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-10">
          FAQs
        </h2>

        {/* Mobile Accordion View */}
        <div className="md:hidden bg-white rounded-xl border-2 border-gray-300 divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-5 py-4 font-serif text-base text-gray-900"
              >
                {faq.question}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-12 text-gray-800 px-7">
          {faqs.map((faq, i) => (
            <div key={i} className="flex flex-col gap-4">
              <FaQuinscape className=" text-2xl" />
              <h4 className="font-serif text-lg">{faq.question}</h4>
              <p className="text-sm leading-relaxed text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
