import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www naar niet-www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.bestemaaltijdbox.be' }],
        destination: 'https://bestemaaltijdbox.be/:path*',
        permanent: true,
      },
      // Oude aanbieders doorsturen naar Foodbag
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
