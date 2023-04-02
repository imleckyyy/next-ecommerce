/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
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
