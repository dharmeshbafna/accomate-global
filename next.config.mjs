const securityHeaders = [
    {
        key: 'Content-Security-Policy',
        value: `
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:;
            style-src 'self' 'unsafe-inline' https:;
            img-src 'self' data: blob: https:;
            font-src 'self' data: https:;
            connect-src 'self' https:;
            frame-src 'self' https:;
            frame-ancestors 'none';
        `.replace(/\n/g, ''),
    },
    {
        key: 'X-Frame-Options',
        value: 'DENY',
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload',
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            },
        ];
    },
};

export default nextConfig;
