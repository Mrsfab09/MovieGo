import { Sidebar } from "@/app/components/Dashboard/Sidebar/Sidebar";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function MovieDetails({ params }: PageProps) {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`
  );

  if (!res.ok) {
    return notFound();
  }

  const movie = await res.json();

  return (
    <>
      <Sidebar />
      <div className="p-6 flex flex-col items-center">
        <div className="relative w-64 h-96 mb-4">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center w-96">
          <h1 className="text-2xl font-bold text-white mb-4">{movie.title}</h1>
          <p className="text-gray-300">{movie.overview}</p>
          <p className="text-gray-400 mt-2">
            Ocena: {movie.vote_average.toFixed(1)} | Premiera:{" "}
            {movie.release_date}
          </p>
        </div>
      </div>
    </>
  );
}
