interface FaqItemProps {
  faq: { question: string; answer: string };
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

export function FaqItem({
  faq,
  index,
  hoveredIndex,
  setHoveredIndex,
}: FaqItemProps) {
  return (
    <div
      className="relative sm:drop-shadow-xl p-2 flex flex-row items-center space-x-0 gap-12"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="w-96">
        <h3
          className={`text-slate-300 text-3xl font-semibold transition-all duration-500 ease-in-out ${
            hoveredIndex === index ? "translate-x-12" : ""
          }`}
        >
          {faq.question}
        </h3>
      </div>

      <div
        className={`w-1/2 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 ${
          hoveredIndex === index ? "opacity-100" : ""
        }`}
      >
        <div className="bg-black text-slate-300 p-4 rounded-xl">
          <p className="text-lg">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
