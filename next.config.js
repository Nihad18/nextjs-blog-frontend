/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'menuu.online'
      },
    ],
  },
};

module.exports = nextConfig;
