module.exports = {
  experimental: {
    clerk: true,
  },
  images: {
    domains: ["image.tmdb.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
// "dev": "NODE_OPTIONS='--inspect' next dev",
