"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { MovieCardProps } from "../../../types/movieTypes";

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

export default MovieCard;
