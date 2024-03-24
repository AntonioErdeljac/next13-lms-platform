const withPWA = require("next-pwa");

const nextConfig = {
  images: {
    domains: [
      "utfs.io"
    ]
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
};

module.exports = withPWA(nextConfig);
