/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ["page.tsx"],
};

module.exports = nextConfig;
