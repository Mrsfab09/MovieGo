import Image from "next/image";

export function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-28 -z-1 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff433dea] to-[#ff433d7c] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="flex justify-center p-5">
        <Image
          width={1100}
          height={500}
          src={"/assets/movies_resized.png"}
          className="rounded-lg border border-slate-400 mt-8 w-full sm:w-auto"
          alt={"cinema"}
        />
      </div>
      <div className="mx-auto max-w-2xl py-20 sm:py-20 lg:py-20">
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-300 sm:text-7xl">
            Your movies and series in one place
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Access all your favorite movies and TV shows in one seamless
            platform. Stream endless entertainment whenever you want, with
            everything organized and ready to enjoy
          </p>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center mt-10">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-100 ring-1 ring-gray-100/10 hover:ring-gray-200/20">
              From just 33$ per month.{""}
              <span className="ml-2">
                <a href="#" className="font-semibold text-[#ff433dea]">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff433dea] to-[#ff433d7c] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
