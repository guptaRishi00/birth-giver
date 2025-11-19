import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      {
        hostname: "delightful-trust-ed829e5176.media.strapiapp.com",
        protocol: "https",
      },
    ],
  },

  /* other config options here */
};

export default nextConfig;
