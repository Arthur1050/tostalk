/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['cdn.icon-icons.com']
    },
    experimental: {
        serverActions: true
    },
    compiler: {
        styledComponents: true,
    }
}

module.exports = nextConfig
