import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/aanbieder/smartmat',
        destination: '/aanbieder/foodbag',
        permanent: true,
      },
      {
        source: '/aanbieder/15gram',
        destination: '/aanbieder/foodbag',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
