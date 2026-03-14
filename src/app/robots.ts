import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/ga/',
    },
    sitemap: 'https://www.bestemaaltijdbox.be/sitemap.xml',
  };
}
