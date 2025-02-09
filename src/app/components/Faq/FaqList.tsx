import { FaqItem } from "./FaqItem";

interface FaqListProps {
  faqs: { question: string; answer: string }[];
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

export function FaqList({ faqs, hoveredIndex, setHoveredIndex }: FaqListProps) {
  return (
    <div className="w-full">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          faq={faq}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
}
