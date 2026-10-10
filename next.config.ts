
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },

  cacheComponents: true,
  partialPrefetching: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/images/**",
      },
    ],
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
