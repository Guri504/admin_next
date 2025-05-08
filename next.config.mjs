/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        url: 'https://fitness-backend-ys6d.onrender.com/',
        weburl: 'http://localhost:3000',
        imageUrl: 'https://fitness-backend-ys6d.onrender.com/',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'fitness-backend-ys6d.onrender.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
