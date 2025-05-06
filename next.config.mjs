/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        url: 'http://localhost:4000/',
        weburl: 'http://localhost:3000',
        imageUrl: 'http://localhost:4000/',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
