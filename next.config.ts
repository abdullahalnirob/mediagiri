import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // alternatively, you could use "domains" (simpler, but less flexible):
    // domains: ["via.placeholder.com"],
  },
};

export default nextConfig;
