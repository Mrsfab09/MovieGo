"use client";

import { useState, useRef } from "react";

export function Faq() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: "What is MovieGo?",
      answer:
        "Next.js is a React framework for building static and dynamic websites and web applications.",
    },
    {
      question: "How much does access to the application cost?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    },
    {
      question: "Where can I watch?",
      answer:
        'You can install Next.js by running the command "npx create-next-app@latest".',
    },
    {
      question: "How to unsubscribe?",
      answer:
        'Install Tailwind by running "npm install -D tailwindcss postcss autoprefixer".',
    },
  ];

  // A function that changes the question in a responsive view
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      setMobileIndex(newIndex);
    }
  };

  return (
    <div className="relative isolate px-6 lg:px-8">
      <div
        className="relative mx-auto max-w-7xl py-28 sm:py-32 lg:py-32 mb-32"
        id="faq"
      >
        <div className="text-center max-w-2xl flex flex-col mx-auto sm:mb-8">
          <h2 className="text-gray-300 font-semibold tracking-tight text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            soluta assumenda accusantium temporibus beatae praesentium
            exercitationem esse fugit expedita nemo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between px-8 sm:px-28 items-start">
          {/* Question */}
          <div className="w-full sm:w-1/2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3
                  className={`text-slate-300 text-3xl font-semibold mb-4 transition-all duration-500 ease-in-out sm:block hidden 
                    ${hoveredIndex === index ? "translate-x-12" : ""}`}
                >
                  {faq.question}
                </h3>
              </div>
            ))}
          </div>

          {/* Carousel in resposive view */}
          <div className="w-full sm:w-[32rem] max-w-lg sm:max-w-[40rem]">
            <div className="relative sm:drop-shadow-xl h-96 overflow-hidden rounded-xl bg-[#3d3c3d1c] sm:rotate-3">
              {/* Carousel */}
              <div
                ref={scrollRef}
                className="flex sm:block overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full"
                onScroll={handleScroll}
              >
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full snap-center p-8 flex flex-col items-center text-white text-xl opacity-90 rounded-xl bg-[#0303034f] gap-8"
                  >
                    <h3 className="font-bold">{faq.question}</h3>
                    <p className="text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {faqs.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    mobileIndex === index
                      ? "bg-red-500 scale-125"
                      : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
