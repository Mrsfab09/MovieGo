import Image from "next/image";

export function Box() {
  const descriptions = [
    {
      src: "./adjustments.svg",
      color: "red",
      title: "Personalizowane Rekomendacje",
      desc: "Inteligentny algorytm analizuje Twoje ulubione gatunki, aktorów i filmy, by polecać Ci idealne tytuły",
    },
    {
      src: "./marathon.svg",
      color: "red",
      title: "Tryb Maratonu",
      desc: "Funkcja automatycznego dobierania kolejnych filmów na wieczory tematyczne, np. „Marvel Marathon” lub „Horror Night”.",
    },
    {
      src: "./presentation.svg",
      color: "red",
      title: "Interaktywne Recenzje",
      desc: "Użytkownicy mogą oceniać poszczególne elementy filmu (fabuła, efekty specjalne, aktorstwo) i generować własne statystyki. Funkcja dodatkowa: Porównywanie opinii z innymi użytkownikami.",
    },
    {
      src: "./calendar2.svg",
      color: "red",
      title: "Dynamiczny Kalendarz Premier",
      desc: "Zawsze wiesz, co warto obejrzeć – nasz kalendarz automatycznie dopasowuje premiery do Twoich preferencji. Funkcje dodatkowe: Powiadomienia o premierach w kinach i na platformach streamingowych.",
    },
    {
      src: "./clipboard.svg",
      color: "red",
      title: "Quizy i Gry Filmowe",
      desc: "Testuj swoją wiedzę o kinie, rozwiązując quizy lub grając w interaktywne gry z nagrodami, np. darmowym dostępem do wybranych filmów.",
    },
    {
      src: "./chart.svg",
      title: "Przewodnik Po Nowościach",
      desc: "Bądź zawsze na bieżąco! Odkrywaj najnowsze premiery kinowe oraz nadchodzące hity z przewodnikiem MovieGo.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6 p-6">
      {descriptions.map((item, index) => (
        <div
          key={index}
          className={`${
            index % 5 === 0
              ? "backdrop-blur-md bg-gradient-to-b from-[#ff433d0e] to-[#ff433d34]"
              : "backdrop-blur-md bg-gradient-to-r from-white/10 to-white/5"
          } p-6 rounded-lg border ${
            index % 2 === 0 ? "border-white/25" : "border-white/20"
          } shadow-lg min-h-[300px] flex flex-col`}
        >
          <div className="inline-flex">
            <div className="bg-black/20 p-3 rounded-2xl mb-3 shadow-[0px_5px_20px_#00000013,inset_4px_4px_20px_#00000036,inset_8px_8px_30px_#00000047]">
              <Image
                className="opacity-50"
                src={item.src}
                width={35}
                height={35}
                alt="image"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="relative">
              <h3 className="text-[25px] text-white font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-400 mt-2 text-lg flex-grow">
                {item.desc}
              </p>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg shadow-inner"></div>
        </div>
      ))}
    </div>
  );
}
