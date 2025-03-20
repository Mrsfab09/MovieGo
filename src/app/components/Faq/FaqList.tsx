import { FaqItem } from "./FaqItem";

interface FaqListProps {
  faqs: { question: string; answer: string }[];
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  onMouseEnter: (index: number) => void;
}

/*
******************************************************
 nazwa funkcji: FaqList
 opis: Komponent wyswietlajacy liste elementow sekcji FAQ
*****************************************************
*/

export function FaqList({
  faqs,
  hoveredIndex,
  setHoveredIndex,
  onMouseEnter,
}: FaqListProps) {
  return (
    <div>
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          faq={faq}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          onMouseEnter={onMouseEnter} // Pass onMouseEnter here
        />
      ))}
    </div>
  );
}
