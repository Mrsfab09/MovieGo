"use client";
import { useState, useRef } from "react";
import { FaqHeader } from "./FaqHeader";
import { FaqList } from "./FaqList";
import { FaqCarousel } from "./FaqCarousel";
import { faqs } from "../../data/faqData";

export function Faq() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      setMobileIndex(Math.round(scrollLeft / width));
    }
  };

  return (
    <div className="relative isolate px-6 lg:px-8">
      <div
        className="relative mx-auto max-w-7xl py-28 sm:py-32 lg:py-32 mb-32"
        id="faq"
      >
        {/* Nagłówek FAQ */}
        <FaqHeader />

        <div className="flex flex-col sm:flex-row justify-between px-8 sm:px-28 items-start">
          {/* Widoczny tylko na desktopie */}
          <div className="hidden sm:block w-1/2">
            <FaqList
              faqs={faqs}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          </div>

          {/* Widoczny tylko na mobilnych urządzeniach */}
          <div className="sm:hidden w-full">
            <FaqCarousel
              faqs={faqs}
              mobileIndex={mobileIndex}
              scrollRef={scrollRef}
              handleScroll={handleScroll}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
