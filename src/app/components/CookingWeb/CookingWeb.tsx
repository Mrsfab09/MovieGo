import { Hammer, Wrench, HardHat, PaintRoller, Ruler } from "lucide-react";

export function CookingWeb() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-neutral-900">
      {/* Główne pudełko z tłem */}
      <div className="relative bg-neutral-900 rounded-2xl shadow-xl shadow-neutral-800 p-12 min-w-[900px] min-h-[300px] max-w-lg md:max-w-xl text-center flex flex-col items-center justify-center">
        {/* Ikony wokół tekstu z lepszymi animacjami */}
        <Hammer className="absolute -top-12 -left-12 text-blue-500 w-12 h-12 animate-spin-slow" />
        <Wrench className="absolute -top-12 -right-12 text-red-600 w-12 h-12 animate-spin-slow" />
        <HardHat className="absolute bottom-12 -left-12 text-orange-500 w-12 h-12 animate-bounce" />
        <PaintRoller className="absolute bottom-12 -right-12 text-rose-500 w-12 h-12 animate-bounce" />
        <Ruler className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-green-800 w-12 h-12 animate-spin-slow" />

        {/* Gradientowy tekst z cieniami */}
        <h2 className="text-7xl font-extrabold tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent p-6 shadow-2xl rounded-lg opacity-80">
          Cooking Our Website
        </h2>
        <p className="mt-8 text-xl text-gray-300 font-light bg-gradient-to-r p-2 rounded-lg">
          We’re building something awesome. Stay tuned! 🚧
        </p>
      </div>
    </div>
  );
}
