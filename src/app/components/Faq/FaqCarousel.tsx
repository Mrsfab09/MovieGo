import { RefObject } from "react";

interface FaqCarouselProps {
  faqs: { question: string; answer: string }[];
  mobileIndex: number;
  scrollRef: RefObject<HTMLDivElement | null>;
  handleScroll: () => void;
}

export function FaqCarousel({
  faqs,
  mobileIndex,
  scrollRef,
  handleScroll,
}: FaqCarouselProps) {
  return (
    <div className="w-full sm:w-[32rem] max-w-lg sm:max-w-[40rem]">
      <div className="relative sm:drop-shadow-xl h-96 overflow-hidden rounded-xl bg-[#3d3c3d1c] sm:rotate-3">
        {/* Karuzela */}
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

      {/* Kropki */}
      <div className="flex justify-center mt-4 space-x-2">
        {faqs.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              mobileIndex === index ? "bg-red-500 scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
