import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { routing, hreflangVoor, type Locale, type RouteSjabloon } from '@/i18n/routing';
import { getPathname } from '@/i18n/navigation';
import { aanbieders } from '@/lib/aanbieders';
import { situaties } from '@/lib/situaties';
import { vergelijkingen } from '@/lib/vergelijkingen';
import { factorVergelijkingen } from '@/lib/factorVergelijkingen';
import { gidsen } from '@/lib/gidsen';
import { blogPosts } from '@/lib/blog';

/**
 * Afgeleid uit de databestanden, en tweetalig.
 *
 * Elke pagina komt één keer per taal voor, met een `alternates.languages`-blok
 * dat naar de andere taal verwijst. Google leest dat als hreflang-signaal, net
 * als de link-tags in de <head>.
 */

// Slugs met een eigen /kortingscode/<slug>-pagina.
const kortingscodePaginas = ['hellofresh', 'foodbag', 'factor', 'foodprepper', 'crowd-cooks'];

type Ingang = { route: RouteSjabloon; params?: Record<string, string>; priority: number; frequentie?: MetadataRoute.Sitemap[number]['changeFrequency'] };

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date();

  const ingangen: Ingang[] = [
    { route: '/', priority: 1, frequentie: 'weekly' },
    { route: '/kortingscodes', priority: 0.9, frequentie: 'weekly' },
    { route: '/blog', priority: 0.7, frequentie: 'weekly' },
    { route: '/over-ons', priority: 0.5 },
    { route: '/privacy', priority: 0.3 },
    { route: '/voorwaarden', priority: 0.3 },

    // Stopgezette aanbieders horen niet in de sitemap.
    ...aanbieders
      .filter(a => a.status === 'active')
      .map(a => ({ route: '/aanbieder/[slug]' as const, params: { slug: a.slug }, priority: 0.8 })),

    ...Object.keys(situaties).map(s => ({ route: '/voor/[situatie]' as const, params: { situatie: s }, priority: 0.7 })),

    ...vergelijkingen.map(v => ({ route: '/vergelijk/[slug]' as const, params: { slug: v.slug }, priority: 0.85 })),
    ...factorVergelijkingen.map(v => ({ route: '/vergelijk/[slug]' as const, params: { slug: v.slug }, priority: 0.85 })),

    ...gidsen.map(g => ({ route: '/gids/[slug]' as const, params: { slug: g.slug }, priority: 0.8 })),
    ...blogPosts.map(p => ({ route: '/blog/[slug]' as const, params: { slug: p.slug }, priority: 0.6 })),
    ...kortingscodePaginas.map(s => ({ route: '/kortingscode/[slug]' as const, params: { slug: s }, priority: 0.8 })),
  ];

  const urlVoor = (route: RouteSjabloon, locale: Locale, params?: Record<string, string>) =>
    SITE_URL + getPathname({ locale, href: (params ? { pathname: route, params } : route) as never });

  return ingangen.flatMap(({ route, params, priority, frequentie = 'monthly' }) =>
    routing.locales.map(locale => ({
      url: urlVoor(route, locale, params),
      lastModified: nu,
      changeFrequency: frequentie,
      priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map(l => [hreflangVoor[l], urlVoor(route, l, params)])
        ),
      },
    }))
  );
}
