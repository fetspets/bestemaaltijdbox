import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { aanbieders } from '@/lib/aanbieders';
import { situaties } from '@/lib/situaties';
import { vergelijkingen } from '@/lib/vergelijkingen';
import { factorVergelijkingen } from '@/lib/factorVergelijkingen';
import { gidsen } from '@/lib/gidsen';
import { blogPosts } from '@/lib/blog';

/**
 * Afgeleid uit de databestanden in plaats van uit handmatige sluglijsten.
 *
 * De vorige versie had zes lijsten die naast vijf databestanden bijgehouden
 * moesten worden en daar al van afweken: /voor/vegan en de maaltijdcheques-blog
 * ontbraken, terwijl de stopgezette Carrefour er nog in stond.
 */

// Slugs met een eigen /kortingscode/<slug>-pagina.
const kortingscodePaginas = ['hellofresh', 'foodbag', 'factor', 'foodprepper', 'crowd-cooks'];

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date();
  const entry = (
    pad: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'
  ) => ({ url: `${SITE_URL}${pad}`, lastModified: nu, changeFrequency, priority });

  return [
    entry('', 1, 'weekly'),
    entry('/kortingscodes', 0.9, 'weekly'),
    entry('/blog', 0.7, 'weekly'),
    entry('/over-ons', 0.5),
    entry('/privacy', 0.3),
    entry('/voorwaarden', 0.3),

    // Stopgezette aanbieders horen niet in de sitemap.
    ...aanbieders
      .filter(a => a.status === 'active')
      .map(a => entry(`/aanbieder/${a.slug}`, 0.8)),

    ...Object.keys(situaties).map(s => entry(`/voor/${s}`, 0.7)),

    ...vergelijkingen.map(v => entry(`/vergelijk/${v.slug}`, 0.85)),
    ...factorVergelijkingen.map(v => entry(`/vergelijk/${v.slug}`, 0.85)),

    ...gidsen.map(g => entry(`/gids/${g.slug}`, 0.8)),
    ...blogPosts.map(p => entry(`/blog/${p.slug}`, 0.6)),
    ...kortingscodePaginas.map(s => entry(`/kortingscode/${s}`, 0.8)),
  ];
}
