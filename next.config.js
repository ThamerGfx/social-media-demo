/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "cloudflare-ipfs.com",
      "iplpgvzabpsu1dss.public.blob.vercel-storage.com",
    ],
  },
};

module.exports = nextConfig;
