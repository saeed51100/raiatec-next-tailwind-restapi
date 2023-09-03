/** @type {import("next").NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ["localhost", "test.raiatec.com"], // Add your domains here
    unoptimized: true,
  },
};

module.exports = nextConfig;
