"use client";

import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { NoImage } from "../../NoImage/NoImage";

interface MovieCardProps {
  title: string;
  posterUrl: string;
  rating?: string;
}

interface TMDBMovie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
}

/*
******************************************************
 nazwa funkcji: MovieGrid
 opis: Komponent wyswietlajacy siatke układu filmów 
*****************************************************
*/

const MovieGrid: React.FC = () => {
  const [movies, setMovies] = useState<TMDBMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "An unknown error occurred";
        setError(errorMessage);
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [API_KEY]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <p className="text-red-500">Error loading movies: {error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {movies.slice(0, 6).map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id}>
          <MovieCard
            title={movie.title}
            posterUrl={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : ""
            }
            rating={movie.vote_average.toFixed(1)}
          />
        </Link>
      ))}
    </div>
  );
};

/*
******************************************************
 nazwa funkcji: MovieCard
 opis: Komponent wyswietlajacy pojedynczy film w siatce
*****************************************************
*/

const MovieCard: React.FC<MovieCardProps> = ({ title, posterUrl, rating }) => (
  <div className="relative group">
    <div className="w-full aspect-[2/3] relative rounded-lg overflow-hidden border border-neutral-900">
      {posterUrl ? (
        <Image
          src={posterUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <NoImage />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-sm font-medium text-white truncate">{title}</h3>
          {rating && (
            <div className="flex items-center mt-1">
              <Star size={14} className="text-yellow-400" />
              <span className="text-xs text-white ml-1">{rating}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export { MovieCard, MovieGrid };
export default MovieGrid;
