import Image from "next/image";

export function FeatureBox() {
  const descriptions = [
    {
      src: "./adjustments.svg",
      color: "red",
      title: "Personalized Recommendations",
      desc: "An intelligent algorithm analyzes your favorite genres, actors and movies to recommend the perfect titles",
    },
    {
      src: "./marathon.svg",
      color: "red",
      title: "Marathon Mode",
      desc: 'Automatic selection of new movies for themed nights, e.g. "Marvel Marathon" or "Horror Night".',
    },
    {
      src: "./presentation.svg",
      color: "red",
      title: "Interactive Reviews",
      desc: "Users can rate individual elements of a film (plot, special effects, acting) and generate their own statistics. Additional feature: Compare opinions with other users.",
    },
    {
      src: "./calendar2.svg",
      color: "red",
      title: "Dynamic Premier Calendar",
      desc: "You always know what's worth watching - our calendar automatically adjusts premieres to your preferences. Additional features: Notifications about premieres in cinemas and on streaming platforms.",
    },
    {
      src: "./clipboard.svg",
      color: "red",
      title: "Quizzes and Movie Games",
      desc: "Test your knowledge about cinema by solving quizzes or playing interactive games with prizes, e.g. free access to selected films.",
    },
    {
      src: "./chart.svg",
      title: "News Guide",
      desc: "Always stay up to date! Discover the latest cinema releases and upcoming blockbusters with MovieGo.",
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
