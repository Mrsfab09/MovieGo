import { Box } from "./FeatureBox";

export function Features() {
  return (
    <>
      <div className="relative isolate px-6 lg:px-8 transparent" id="features">
        <div className="mx-auto max-w-7xl py-28 sm:py-32 lg:py-32">
          <div className="text-center max-w-2xl flex flex-col mx-auto sm:mb-8 ">
            <h2 className="text-gray-300 font-semibold tracking-tight text-5xl">
              Innovative Features
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              soluta assumenda accusantium temporibus beatae praesentium
              exercitationem esse fugit expedita nemo.
            </p>
          </div>
          <Box />
        </div>
      </div>
    </>
  );
}
