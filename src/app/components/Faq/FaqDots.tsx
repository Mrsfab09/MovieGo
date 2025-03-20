interface FaqDotsProps {
  count: number;
  activeIndex: number;
}

/*
******************************************************
 nazwa funkcji: FaqDots
 opis: Komponent wyswietlajacy kropki potrzebne do widku mobilnego FaqCarousel
*****************************************************
*/

export function FaqDots({ count, activeIndex }: FaqDotsProps) {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            activeIndex === index ? "bg-red-500 scale-125" : "bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
}
