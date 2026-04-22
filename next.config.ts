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
      // Verwijderde gidsen → bijbehorende /voor/ pagina's
      {
        source: '/gids/maaltijdbox-voor-gezinnen',
        destination: '/voor/gezin',
        permanent: true,
      },
      {
        source: '/gids/beste-maaltijdbox-voor-singles',
        destination: '/voor/singles',
        permanent: true,
      },
      {
        source: '/gids/beste-biologische-maaltijdbox-belgie',
        destination: '/voor/bio',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
