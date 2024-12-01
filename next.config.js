const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();
const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

module.exports = withVercelToolbar(withNextIntl(nextConfig));
