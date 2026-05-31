import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/ga/', '/api/reveal-code'],
    },
    sitemap: 'https://bestemaaltijdbox.be/sitemap.xml',
  };
}
