import type { NextConfig } from 'next';
const config: NextConfig = { poweredByHeader: false, distDir: process.env.NEXT_DIST_DIR || (process.env.NODE_ENV==='development'?'.next-dev':'.next') };
export default config;
