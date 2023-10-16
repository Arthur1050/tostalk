/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['cdn.icon-icons.com', 'localhost'],
        minimumCacheTTL: 0
        /*disableStaticImages: true,
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;" */
    },
    experimental: {
        serverActions: true
    },
    compiler: {
        styledComponents: true,
    }
}

module.exports = nextConfig
