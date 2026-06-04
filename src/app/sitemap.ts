import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bestemaaltijdbox.be';
  const aanbieders = [
    'hellofresh', 'foodbag', 'marley-spoon',
    'foodprepper', 'ekomenu', 'carrefour-simply-you', 'factor', 'foodmaker',
    'crowd-cooks',
  ];
  const situaties = ['koppel', 'gezin', 'vegetarisch', 'budget', 'bio', 'singles'];
  const vergelijkingen = [
    'hellofresh-vs-foodbag', 'hellofresh-vs-marley-spoon',
    'foodbag-vs-marley-spoon', 'hellofresh-vs-ekomenu', 'hellofresh-vs-carrefour',
    'foodprepper-vs-foodbag', 'foodprepper-vs-hellofresh',
    'crowd-cooks-vs-factor',
  ];
  const gidsen = ['goedkoopste-maaltijdbox-belgie'];
  const blogSlugs = [
    'maaltijdbox-zonder-abonnement-belgie',
    'maaltijdbox-of-zelf-koken-belgie',
    'hoe-maaltijdbox-opzeggen-belgie',
    'vegetarisch-koken-maaltijdbox',
    'maaltijdbox-starten-beginners',
  ];
  const kortingscodes = ['hellofresh', 'foodbag', 'factor', 'foodprepper', 'crowd-cooks'];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/kortingscodes`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hellofresh-greenpan-kortingscode`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/over-ons`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/voorwaarden`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
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
    ...vergelijkingen.map(slug => ({
      url: `${baseUrl}/vergelijk/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...gidsen.map(slug => ({
      url: `${baseUrl}/gids/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...kortingscodes.map(slug => ({
      url: `${baseUrl}/kortingscode/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    ...blogSlugs.map(slug => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
