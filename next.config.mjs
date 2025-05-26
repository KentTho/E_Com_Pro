/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com", // Fix the typo here
            },
        ],
    },
};

export default nextConfig;
