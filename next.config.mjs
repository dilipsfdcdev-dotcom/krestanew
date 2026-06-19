/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Use the system trust store when fetching Google Fonts at build time
    // (some sandboxed/CI environments don't trust the bundled CA set).
    turbopackUseSystemTlsCerts: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
