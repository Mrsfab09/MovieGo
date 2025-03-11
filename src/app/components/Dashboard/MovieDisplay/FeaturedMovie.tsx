"use client";

import React from "react";
import Image from "next/image";
import { Play, Star, Clock } from "lucide-react";
import { FeaturedMovie as FeaturedMovieType } from "../../../types/movieTypes";

interface FeaturedMovieProps {
  movie: FeaturedMovieType;
}

export function FeaturedMovie({ movie }: FeaturedMovieProps) {
  return (
    <section className="relative h-96 mb-8">
      <div className="absolute inset-0">
        <Image
          src={movie.backdropUrl}
          alt={movie.title}
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
              src={movie.posterUrl}
              alt={movie.title}
              width={192}
              height={288}
              className="object-cover"
            />
          </div>
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-gray-300 mb-4">
              <div className="flex items-center mr-4">
                <Star size={16} className="text-yellow-400 mr-1" />
                <span>{movie.rating}</span>
              </div>
              <span className="mr-4">{movie.year}</span>
              <span className="mr-4">{movie.duration}</span>
              <div>{movie.genres.join(", ")}</div>
            </div>
            <p className="text-gray-400 mb-6">{movie.description}</p>
            <div className="flex space-x-3">
              <button className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-md flex items-center">
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
  );
}
