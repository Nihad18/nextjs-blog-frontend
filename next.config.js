/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'menuu.online',
        pathname: '/uploads/**',
      },
    ],
    domains: ["menuu.online"],
  },
};

module.exports = nextConfig;
