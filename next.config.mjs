
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add this for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/buildeasy-ai' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/buildeasy-ai/' : '',
};

export default nextConfig;