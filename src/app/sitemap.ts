import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bestemaaltijdbox.be';
  const aanbieders = [
    'hellofresh', 'foodbag', 'marley-spoon',
    'ekomenu', 'delhaize-click-cook',
    'carrefour-simply-you', 'cirkle',
  ];
  const situaties = ['koppel', 'gezin', 'vegetarisch', 'budget', 'bio'];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/kortingscodes`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/over-ons`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    ...aanbieders.map(slug => ({
      url: `${baseUrl}/aanbieder/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...situaties.map(s => ({
      url: `${baseUrl}/voor/${s}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
