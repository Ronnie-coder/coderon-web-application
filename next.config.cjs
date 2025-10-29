// next.config.cjs

// CORRECTIVE ACTION: Revert from 'import' to 'require' for CommonJS
const createMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 80, 90],
  },
};

const withMDX = createMDX({
  // Add MDX options here, if needed.
});

// CORRECTIVE ACTION: Revert from 'export default' to 'module.exports' for CommonJS
module.exports = withMDX(nextConfig);