/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["naszsklep-api.vercel.app", "media.graphassets.com"],
    formats: ["image/avif", "image/webp"],
  },
  rewrites: async () => {
    return [
      {
        source: "/products-old",
        destination: "/products-old/1",
      },
    ];
  },
};

module.exports = nextConfig;
