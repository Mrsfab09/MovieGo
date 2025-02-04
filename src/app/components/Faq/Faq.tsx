"use client";

import { useState } from "react";

export function Faq() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const mouseEnter = (index: number) => {
    setHoveredIndex(index), setActiveIndex(index);
  };

  const faqs = [
    {
      question: "What is MovieGo ?",
      answer:
        "Next.js is a React framework for building static and dynamic websites and web applications.",
    },
    {
      question: "How much does access to the application cost ?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    },
    {
      question: "Where can I watch ?",
      answer:
        'You can install Next.js by running the command "npx create-next-app@latest".',
    },
    {
      question: "How to unsubscribe ?",
      answer:
        'Install Tailwind by running "npm install -D tailwindcss postcss autoprefixer".',
    },
  ];

  return (
    <div className="relative isolate px-6 lg:px-8 transparent">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-28 -z-1 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff433dc9] to-[#ff433d7c] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        className="relative mx-auto max-w-7xl py-28 sm:py-32 lg:py-32 mb-32"
        id="faq"
      >
        <div className="text-center max-w-2xl flex flex-col mx-auto sm:mb-8">
          <h2 className="text-gray-300 font-semibold tracking-tight text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-8 mb-12 text-pretty text-lg font-medium text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            soluta assumenda accusantium temporibus beatae praesentium
            exercitationem esse fugit expedita nemo.
          </p>
        </div>
        {/* Boxy widoczne i wyśrodkowane w widoku responsywnym */}
        <div className="flex flex-col sm:flex-row justify-between px-8 sm:px-28 items-start">
          {/* Kolumna z pytaniami */}
          <div className="w-full sm:w-1/2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 hidden sm:block"
                onMouseEnter={() => mouseEnter(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-slate-300 text-3xl font-semibold mb-4 transition-all duration-500">
                  {faq.question}
                </h3>
              </div>
            ))}
          </div>

          {/* Kolumna z odpowiedziami */}
          <div className="w-full flex justify-center">
            <div className="w-full sm:w-[32rem] max-w-lg sm:max-w-[40rem]">
              <div className="relative drop-shadow-xl h-96 overflow-hidden rounded-xl bg-[#3d3c3d1c] sm:rotate-3">
                <div className="absolute flex flex-col items-center text-white text-xl z-[1] opacity-90 rounded-xl inset-0.5 bg-[#0303034f] p-8 gap-8">
                  <h3 className="font-bold">
                    {hoveredIndex !== null
                      ? faqs[hoveredIndex].question
                      : faqs[activeIndex].question}
                  </h3>
                  <p className="text-slate-300">
                    {hoveredIndex !== null
                      ? faqs[hoveredIndex].answer
                      : faqs[activeIndex].answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
