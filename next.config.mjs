/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/buildeasy-ai',
  assetPrefix: '/buildeasy-ai/',  
};

export default nextConfig;