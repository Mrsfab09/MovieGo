"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "../components/Dashboard/Sidebar/Sidebar";
import { NoImage } from "../components/NoImage/NoImage";
interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
}

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  // const [movies, setMovies] = useState<TMDBMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);

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
  }, [API_URL, page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      window.scrollTo(0, 0);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center p-6 bg-neutral-900 rounded-lg border border-neutral-800">
          <h2 className="text-xl font-bold text-red-500 mb-2">Error</h2>
          <p className="text-gray-300">{error}</p>
          <p className="text-gray-400 mt-4">
            Please check your API key or try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="px-4 py-6 md:px-8 flex-1 md:ml-16 bg-neutral-950">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Popular Movies</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-y-4 gap-x-2 md:gap-y-6 md:gap-x-1">
          {/* TODO */}
          {/* <MovieRow
            title="Trending Now"
            icon={<TrendingUp size={20} className="text-red-500" />}
          >
            <div className="grid grid-cols-1 gap-4">
              {trendingMovies.map((movie) => (
                 <MovieCard
                 key={trendingMovies[0].id}
                            title={movie.title}
                            posterUrl={
                              movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                : ""
                            }
                            rating={movie.vote_average.toFixed(1)}
                          />
              ))}
            </div>
          </MovieRow> */}
          {movies.map((movie) => (
            <Link href={`/movies/${movie.id}`} key={movie.id}>
              <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-red-500/20 transition duration-300 h-full w-48">
                <div className="relative w-48 h-72">
                  {movie.poster_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <NoImage />
                  )}
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-md">
                    {movie.vote_average?.toFixed(1)}
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-white truncate">
                    {movie.title}
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    {movie.release_date?.substring(0, 4)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className={`px-4 py-2 rounded-md ${
              page === 1
                ? "bg-neutral-800 text-neutral-500 cursor-not-allowed"
                : "bg-neutral-800 text-white hover:bg-red-500 transition"
            }`}
          >
            Previous
          </button>
          <span className="flex items-center px-4 font-medium">
            Page {page}
          </span>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 rounded-md bg-neutral-800 text-white hover:bg-red-500 transition"
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}
