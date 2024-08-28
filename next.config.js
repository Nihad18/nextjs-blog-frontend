/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "menuu.online",
        // port: "8000",
        // pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
