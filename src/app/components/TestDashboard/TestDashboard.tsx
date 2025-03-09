"use client";

import React, { useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import {
  Play,
  Star,
  Clock,
  Heart,
  Calendar,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

// Import your Navbar component
// import Navbar from "./Navbar";

// TypeScript interfaces
interface Movie {
  id: number;
  title: string;
  posterUrl: string;
}

interface FeaturedMovie extends Movie {
  backdropUrl: string;
  rating: number;
  year: number;
  duration: string;
  genres: string[];
  description: string;
}

interface TrendingMovie extends Movie {
  rating: number;
}

interface UpcomingMovie extends Movie {
  releaseDate: string;
}

interface ContinueWatchingMovie extends Movie {
  progress: number;
}

interface MovieCardProps {
  title: string;
  posterUrl: string;
  rating?: number;
}

interface MovieRowProps {
  title: string;
  icon: ReactNode;
  movies?: Movie[];
  showAll?: string;
  children: ReactNode;
}

///assets/movies_resized.png
// Mock data for featured movie
const featuredMovie: FeaturedMovie = {
  id: 1,
  title: "Dune: Part Two",
  posterUrl: "/assets/movies_resized.png", // Replace with actual movie poster
  backdropUrl: "/assets/movies_resized.png", // Replace with actual backdrop
  rating: 8.7,
  year: 2024,
  duration: "166 min",
  genres: ["Sci-Fi", "Adventure", "Drama"],
  description:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
};

// Mock data for trending movies
const trendingMovies: TrendingMovie[] = [
  {
    id: 1,
    title: "The Batman",
    posterUrl: "/assets/movies_resized.png",
    rating: 8.2,
  },
  {
    id: 2,
    title: "Everything Everywhere All at Once",
    posterUrl: "/assets/movies_resized.png",
    rating: 8.9,
  },
  {
    id: 3,
    title: "Top Gun: Maverick",
    posterUrl: "/assets/movies_resized.png",
    rating: 8.3,
  },
  {
    id: 4,
    title: "The Killer",
    posterUrl: "/assets/movies_resized.png",
    rating: 7.8,
  },
  {
    id: 5,
    title: "Poor Things",
    posterUrl: "/assets/movies_resized.png",
    rating: 8.5,
  },
];

// Mock data for upcoming movies
const upcomingMovies: UpcomingMovie[] = [
  {
    id: 6,
    title: "Kingdom of the Planet of the Apes",
    posterUrl: "/assets/movies_resized.png",
    releaseDate: "May 10, 2025",
  },
  {
    id: 7,
    title: "Gladiator II",
    posterUrl: "/assets/movies_resized.png",
    releaseDate: "November 22, 2024",
  },
  {
    id: 8,
    title: "Furiosa",
    posterUrl: "/assets/movies_resized.png",
    releaseDate: "May 24, 2024",
  },
];

// Mock data for continue watching
const continueWatching: ContinueWatchingMovie[] = [
  {
    id: 9,
    title: "Oppenheimer",
    posterUrl: "/assets/movies_resized.png",
    progress: 65,
  },
  {
    id: 10,
    title: "The Fall Guy",
    posterUrl: "/assets/movies_resized.png",
    progress: 30,
  },
];

const MovieCard: React.FC<MovieCardProps> = ({ title, posterUrl, rating }) => (
  <div className="relative group">
    <div className="w-full aspect-[2/3] relative rounded-lg overflow-hidden">
      <Image
        src={posterUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
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

const MovieRow: React.FC<MovieRowProps> = ({
  title,
  icon,
  movies,
  showAll,
  children,
}) => (
  <section className="mb-8">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        {icon}
        <h2 className="text-lg font-bold ml-2">{title}</h2>
      </div>
      {showAll && (
        <Link
          href={showAll}
          className="text-sm text-blue-500 hover:text-blue-600 flex items-center"
        >
          View All <ChevronRight size={16} />
        </Link>
      )}
    </div>
    {children}
  </section>
);

const Dashboard: React.FC = () => {
  const { isLoaded, user } = useUser();

  return (
    <>
      <main className="pt-16 pb-8 bg-neutral-950 text-white min-h-screen">
        {/* Featured Movie */}
        <section className="relative h-96 mb-8">
          <div className="absolute inset-0">
            <Image
              src={featuredMovie.backdropUrl}
              alt={featuredMovie.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-end pb-10">
            <div className="md:flex md:items-end">
              <div className="hidden md:block w-48 h-72 rounded-lg overflow-hidden shadow-lg mr-6 flex-shrink-0">
                <Image
                  src={featuredMovie.posterUrl}
                  alt={featuredMovie.title}
                  width={192}
                  height={288}
                  className="object-cover"
                />
              </div>
              <div className="max-w-lg">
                <h1 className="text-3xl font-bold mb-2">
                  {featuredMovie.title}
                </h1>
                <div className="flex flex-wrap items-center text-sm text-gray-300 mb-4">
                  <div className="flex items-center mr-4">
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <span>{featuredMovie.rating}</span>
                  </div>
                  <span className="mr-4">{featuredMovie.year}</span>
                  <span className="mr-4">{featuredMovie.duration}</span>
                  <div>{featuredMovie.genres.join(", ")}</div>
                </div>
                <p className="text-gray-400 mb-6">
                  {featuredMovie.description}
                </p>
                <div className="flex space-x-3">
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md flex items-center">
                    <Play size={18} className="mr-2" />
                    Watch Now
                  </button>
                  <button className="bg-transparent border border-white/30 hover:bg-white/10 px-4 py-2 rounded-md flex items-center">
                    <Clock size={18} className="mr-2" />
                    Add to Watchlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4">
          {/* Continue Watching (only if user is logged in) */}
          {isLoaded && user && continueWatching.length > 0 && (
            <MovieRow
              title="Continue Watching"
              icon={<Play size={20} className="text-blue-500" />}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {continueWatching.map((movie) => (
                  <div key={movie.id} className="relative">
                    <MovieCard
                      title={movie.title}
                      posterUrl={movie.posterUrl}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                      <div
                        className="h-full bg-blue-600"
                        style={{ width: `${movie.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </MovieRow>
          )}

          {/* Trending Movies */}
          <MovieRow
            title="Trending Now"
            icon={<TrendingUp size={20} className="text-red-500" />}
            showAll="/movies?category=trending"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {trendingMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  posterUrl={movie.posterUrl}
                  rating={movie.rating}
                />
              ))}
            </div>
          </MovieRow>

          {/* Upcoming Movies */}
          <MovieRow
            title="Coming Soon"
            icon={<Calendar size={20} className="text-purple-500" />}
            showAll="/upcoming"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {upcomingMovies.map((movie) => (
                <div key={movie.id} className="relative">
                  <MovieCard title={movie.title} posterUrl={movie.posterUrl} />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs py-1 px-2 rounded-md">
                    {movie.releaseDate}
                  </div>
                </div>
              ))}
            </div>
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
                  <Heart size={40} className="text-neutral-700 mx-auto mb-4" />
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
    </>
  );
};

export default Dashboard;
