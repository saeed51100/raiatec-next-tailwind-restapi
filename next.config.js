/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raiatec.com"
      }
    ]
  }
};

module.exports = nextConfig;
