/** @type {import('next').NextConfig} */

// disable eslint
// disable type check
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },

    typescript: {
        ignoreBuildErrors: true,
    },
}


module.exports = nextConfig
