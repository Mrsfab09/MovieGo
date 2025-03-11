"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MovieRowProps } from "../../../types/movieTypes";

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
          className="text-sm text-red-500 hover:text-red-600 flex items-center"
        >
          View All <ChevronRight size={16} />
        </Link>
      )}
    </div>
    {children}
  </section>
);

export default MovieRow;
