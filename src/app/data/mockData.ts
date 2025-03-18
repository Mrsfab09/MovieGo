import {
  FeaturedMovie,
  TrendingMovie,
  UpcomingMovie,
  ContinueWatchingMovie,
} from "../types/movieTypes";

// Mock data for featured movie
export const featuredMovie: FeaturedMovie = {
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
export const trendingMovies: TrendingMovie[] = [
  {
    id: 1,
    title: "The Batman",
    posterUrl: "/assets/movies_resized.png",
    rating: 8.2,
  },
];

// Mock data for upcoming movies
export const upcomingMovies: UpcomingMovie[] = [
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
export const continueWatching: ContinueWatchingMovie[] = [
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
