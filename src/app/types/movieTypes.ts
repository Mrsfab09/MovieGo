import { ReactNode } from "react";

/*
******************************************************
 nazwa funkcji: movieTypes
 opis: To plik to przechowywania różnych typów dla filmów
*****************************************************
*/

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
}

export interface FeaturedMovie extends Movie {
  backdropUrl: string;
  rating: number;
  year: number;
  duration: string;
  genres: string[];
  description: string;
}

export interface TrendingMovie extends Movie {
  rating: number;
}

export interface UpcomingMovie extends Movie {
  releaseDate: string;
}

export interface ContinueWatchingMovie extends Movie {
  progress: number;
}

export interface MovieCardProps {
  title: string;
  posterUrl: string;
  rating?: number;
}

export interface MovieRowProps {
  title: string;
  icon: ReactNode;
  movies?: Movie[];
  showAll?: string;
  children: ReactNode;
}

export interface SidebarItemProps {
  icon?: ReactNode;
  label?: string;
  href: string;
  active?: boolean;
  children?: React.ReactNode;
}
