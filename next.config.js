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
        {
        protocol: "https",
        hostname: "www.fmb.org.uk",
        pathname: "/assets/img/logo/**",
      }
    ],
  },
};

module.exports = nextConfig;
