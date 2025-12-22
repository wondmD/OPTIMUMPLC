import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack root to this workspace to avoid parent lockfile inference
  turbopack: {
    root: __dirname,
  },
  webpack: (config) => {
    // Keep module resolution anchored in this project for CSS/postcss/tailwind
    config.resolve.modules = [path.resolve(__dirname, "node_modules"), ...(config.resolve.modules || [])];
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
