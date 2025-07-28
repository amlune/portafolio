import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    basePath: isProd ? '/portafolio' : '',
    assetPrefix: isProd ? '/portafolio/' : '',
    images: {
        unoptimized: true, 
    },
};

export default nextConfig;
