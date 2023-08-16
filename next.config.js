/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: { styledComponents: true },
  env: {
    AMPLIFY_STORAGE_TABLES: { BodyInfo: 'BodyInfo' },
    AMPLIFY_STORAGE_REGION: 'us-east-1',
  },
};

module.exports = nextConfig;
