/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  cacheOnFrontendNav: 'true',
  aggressiveFrontEndNavCaching: 'true',
  reloadOnOnline: 'true',
  swcMinify: 'true',
  disable: 'false',
  workboxOptions: {
    disableDevLogs: true,
  },
})

const nextConfig = {
  images: {
    domains: [
      "utfs.io"
    ]
  }
};

module.exports = withPWA(nextConfig);
