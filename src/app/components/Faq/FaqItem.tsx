interface FaqItemProps {
  faq: { question: string; answer: string };
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  onMouseEnter: (index: number) => void;
}

/*
******************************************************
 nazwa funkcji: FaqItem
 opis: Komponent wyswietlajacy pojedynczy element sekcji Faq
*****************************************************
*/

export function FaqItem({
  faq,
  index,
  hoveredIndex,
  onMouseEnter,
}: FaqItemProps) {
  return (
    <div
      className="flex sm:flex-row items-start p-4 mb-4 cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)}
    >
      {/* Column for questions */}
      <div className="w-full sm:w-2/3 space-y-4">
        <div className="relative group">
          <h3
            className={`text-slate-300 text-3xl font-semibold mb-4 transform transition-all duration-500 ease-in-out ${
              hoveredIndex === index ? "translate-x-12" : ""
            }`}
          >
            {faq.question}
          </h3>
        </div>
      </div>
    </div>
  );
}
