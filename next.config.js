/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dodopizza.azureedge.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
