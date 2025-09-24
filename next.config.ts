import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nutritionsource.hsph.harvard.edu",
      },
    ],
  },
};

export default nextConfig;
