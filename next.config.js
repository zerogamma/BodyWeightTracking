/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: { styledComponents: true },
  env: {
    AMPLIFY_STORAGE_TABLES: '{ "BodyInfo": "BodyInfo" }',
    AMPLIFY_STORAGE_REGION: 'us-east-1',
    AWS_ACCESS_KEY_ID: 'AKIAYHFP3ONZT4TFUBHD',
    AWS_SECRET_ACCESS_KEY: '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',
  },
};

module.exports = nextConfig;
