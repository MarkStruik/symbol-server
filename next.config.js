/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  output: 'standalone',
  rewrites: async () => [
    {
      source: "/:size/custom/:status/:symbolcode/False/NONE",
      destination: "http://localhost/ServerSymbology/ServerSymbology.svc/:size/custom/:status/:symbolcode/False/NONE",
    },
    {
      source: "/:size/:custom/:status/:symbolcode/False/NONE",
      destination: "/api/symbol/:symbolcode?size=:size&staffComments=:status",
    },
    {
      source: "/:symbolcode",
      destination: "/api/symbol/:symbolcode",
    },
    {
      source: "/",
      destination: "/api/symbol/SFG-UCI---",
    },
  ],
};

module.exports = nextConfig;
