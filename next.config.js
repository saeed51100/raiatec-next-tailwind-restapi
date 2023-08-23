/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    domains: ["raiatec.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raiatec.com"
      }
    ]
  }
};

module.exports = nextConfig;
