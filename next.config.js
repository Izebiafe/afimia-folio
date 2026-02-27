/** @type {import('next').NextConfig} */
const nextConfig = {
    // Allow images from any domain (for the blog section using Medium)
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

module.exports = nextConfig;
