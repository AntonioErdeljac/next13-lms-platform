const withPWA = require("next-pwa");

const nextConfig = {
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    // Remove the 'images' property from here
  },
  images: {
    domains: [
      "utfs.io"
    ]
  },
};

module.exports = withPWA(nextConfig);
