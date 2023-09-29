/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        serverActions: true
    },
    compiler: {
        styledComponents: true,
    }
}

module.exports = nextConfig
