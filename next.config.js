/** @type {import("next").NextConfig} */
const nextConfig = {
  // For create out folder in Static Exports methode. saeed doc.
  // output: 'export',
  images: {
    domains: ["localhost", "test.raiatec.com"], // Add your domains here
    unoptimized: true,
  },
};

module.exports = nextConfig;
