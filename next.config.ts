module.exports = {
  experimental: {
    clerk: true,
  },
  images: {
    domains: ["image.tmdb.org", "media.themoviedb.org", "img.clerk.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com", // This domain is for Unsplash if you're using it elsewhere
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org", // Ensure both tmdb image domains are included
      },
      {
        protocol: "https",
        hostname: "media.themoviedb.org", // Ensure this is added as well
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // This domain is for Unsplash if you're using it elsewhere
      },
    ],
  },
};
