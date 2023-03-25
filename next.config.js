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
        source: "/products-ssr",
        destination: "/products-ssr/1",
      },
    ];
  },
};

module.exports = nextConfig;
