import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the tracing root to this project so Next doesn't scan parent directories.
  outputFileTracingRoot: path.join(__dirname),
  images: {
    // All media is served locally from /public/images — no external CDN dependency.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
