/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["naszsklep-api.vercel.app"],
    formats: ["image/avif", "image/webp"],
  },
  rewrites: async () => {
    return [
      {
        source: "/products-csr",
        destination: "/products-csr/1",
      },
      {
        source: "/products",
        destination: "/products/1",
      },
    ];
  },
};

module.exports = nextConfig;
