/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  output: 'standalone',
  rewrites: async () => [
    {
      source: ":size/:custom/P-/:symbolcode/False/NONE",
      destination: "/api/symbol/:symbolcode?size=:size",
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
