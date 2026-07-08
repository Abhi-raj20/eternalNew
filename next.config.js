/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http://localhost:3000",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
