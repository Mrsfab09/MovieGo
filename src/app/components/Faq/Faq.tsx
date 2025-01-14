"use client";

import { useState } from "react";

export function Faq() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "01 What is MovieGo",
      answer:
        "Next.js is a React framework for building static and dynamic websites and web applications.",
    },
    {
      question: "02 How much does access to the application cost?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    },
    {
      question: "03 Where can I watch?",
      answer:
        'You can install Next.js by running the command "npx create-next-app@latest".',
    },
    {
      question: "04 How to unsubscribe",
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
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            soluta assumenda accusantium temporibus beatae praesentium
            exercitationem esse fugit expedita nemo.
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-center space-x-8 px-28">
          <div className="w-full md:w-2/3 space-y-4 align-center">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 "
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative group">
                  <h3 className="text-slate-300 text-3xl font-semibold mb-4 transform transition-all duration-500 ease-in-out hover:translate-x-4 group-hover:translate-x-28">
                    {faq.question}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full md:w-2/3 pl-6 mt-6 md:mt-0">
            {hoveredIndex !== null && (
              <div className="w-80 h-96 text-2xl flex-shrink-0 p-6 rotate-3 rounded-lg backdrop-blur-md bg-gradient-to-r from-white/5 to-white/3">
                <p>{faqs[hoveredIndex].answer}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
