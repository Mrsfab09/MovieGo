"use client";

import { useState, useRef } from "react";
import { FaqHeader } from "./FaqHeader";
import { FaqList } from "./FaqList";
import { FaqCarousel } from "./FaqCarousel";
import { faqs } from "../../data/faqData";

export function Faq() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      setMobileIndex(Math.round(scrollLeft / width));
    }
  };

  // Function to handle the hover state
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index); // Keep the hovered index
  };

  return (
    <div className="relative isolate px-6 lg:px-8">
      <div
        className="relative mx-auto max-w-7xl py-28 sm:py-32 lg:py-32 mb-32"
        id="faq"
      >
        <FaqHeader />

        <div className="flex flex-col sm:flex-row justify-between px-8 sm:px-28 items-start p-6 mt-[100px]">
          <div className="hidden sm:block w-1/2">
            <FaqList
              faqs={faqs}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              onMouseEnter={handleMouseEnter}
            />
          </div>

          <div className="sm:hidden w-full">
            <FaqCarousel
              faqs={faqs}
              mobileIndex={mobileIndex}
              scrollRef={scrollRef}
              handleScroll={handleScroll}
            />
          </div>

          {/* Box on the right */}
          <div className="sm:w-1/2 w-full sm:block mt-6 sm:mt-0 pl-6">
            {hoveredIndex !== null && (
              <div className="w-96 relative drop-shadow-xl h-96 overflow-hidden rounded-xl bg-[#3d3c3d1c] rotate-0 sm:rotate-3 hidden sm:block">
                <div className="absolute flex flex-col items-center text-white text-xl z-[1] opacity-90 rounded-xl inset-0.5 bg-[#0303034f] p-8 gap-8">
                  <h3 className="font-bold">{faqs[hoveredIndex].question}</h3>
                  <p className="text-slate-300">{faqs[hoveredIndex].answer}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
