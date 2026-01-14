import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      dns: { browser: "./empty.js" },
      net: { browser: "./empty.js" },
      tls: { browser: "./empty.js" },
    },
  },
  serverExternalPackages: ["pg"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
