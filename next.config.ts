import type { NextConfig } from "next";

const repo = "usefull-things-437-text";

const nextConfig: NextConfig = {
    /* config options here */
    devIndicators: false,

    output: "export",
    basePath: process.env.NODE_ENV === "production" ? `/${repo}` : "",
    assetPrefix: process.env.NODE_ENV === "production" ? `/${repo}/` : "",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
