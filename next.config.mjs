/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
    domains: ["deepalidesigns.com", "assets-global.website-files.com"],
  },
};

export default nextConfig;
