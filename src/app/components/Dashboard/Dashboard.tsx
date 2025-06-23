"use client";

import { useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Play, TrendingUp, Calendar, Heart, Menu } from "lucide-react";

import { Sidebar } from "./Sidebar/Sidebar";
import MovieCard from "./MovieDisplay/MovieCard";
import MovieRow from "./MovieDisplay/MovieRow";
import { FeaturedMovie } from "./MovieDisplay/FeaturedMovie";

import {
  featuredMovie,
  trendingMovies,
  upcomingMovies,
  continueWatching,
} from "../../data/mockData";
import Image from "next/image";

export function Dashboard() {
  const { isLoaded, user } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 md:ml-16">
        <div className="md:hidden z-30 flex items-center justify-center px-4 py-2 bg-neutral-950">
          <Image
            width={200}
            height={100}
            src={"/assets/logoGo.png"}
            alt="movie logo"
            className="object-contain h-14 w-auto"
          />
        </div>

        <main className="pt-1 pb-8 bg-neutral-950 text-white min-h-screen">
          {/* Featured Movie */}
          <FeaturedMovie movie={featuredMovie} />

          <div className="max-w-7xl mx-auto px-4">
            {/* Continue Watching (only if user is logged in) */}
            {isLoaded && user && continueWatching.length > 0 && (
              <MovieRow
                title="Continue Watching"
                icon={<Play size={20} className="text-red-500" />}
              >
                Under construction
                {/* {continueWatching.map((movie) => (
                  <div key={movie.id} className="relative">
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                      <div
                        className="h-full bg-red-600"
                        style={{ width: `${movie.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))} */}
              </MovieRow>
            )}

            {/* Trending Movies */}
            <MovieRow
              title="Trending Now"
              icon={<TrendingUp size={20} className="text-red-500" />}
            >
              <div className="grid grid-cols-1 gap-4">
                {trendingMovies.map((movie) => (
                  <MovieCard key={trendingMovies[0].id} />
                ))}
              </div>
            </MovieRow>

            {/* Upcoming Movies */}
            <MovieRow
              title="Coming Soon"
              icon={<Calendar size={20} className="text-purple-500" />}
              showAll="/movies?category=upcoming"
            >
              Under construction
              {/* {upcomingMovies.map((movie) => (
                <div key={movie.id} className="relative">
                  <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs py-1 px-2 rounded-md">
                    {movie.releaseDate}
                  </div>
                </div>
              ))} */}
            </MovieRow>

            {/* My List (only if user is logged in) */}
            {isLoaded && user && (
              <MovieRow
                title="My List"
                icon={<Heart size={20} className="text-pink-500" />}
                showAll="/favorites"
              >
                <div className="flex items-center justify-center h-48 bg-neutral-900 rounded-lg">
                  <div className="text-center p-6">
                    <Heart
                      size={40}
                      className="text-neutral-700 mx-auto mb-4"
                    />
                    <p className="text-neutral-400">
                      Your favorites list is empty
                    </p>
                    <Link
                      href="/movies"
                      className="mt-3 inline-block text-sm text-blue-500 hover:text-blue-400"
                    >
                      Discover movies to add
                    </Link>
                  </div>
                </div>
              </MovieRow>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
