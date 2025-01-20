/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },{
        protocol: "http",
        hostname: "localhost"
      },
      {
        protocol: "http",
        hostname: "192.168.8.105:3000"
      }
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
