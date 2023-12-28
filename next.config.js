const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/framed-wrapped',
  assetPrefix: '/framed-wrapped/',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join('/framed-wrapped/', "styles")],
  },
};

module.exports = nextConfig;