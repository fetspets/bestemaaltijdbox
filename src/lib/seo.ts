import type { Metadata } from 'next';
import { routing, hreflangVoor, ogLocaleVoor, type Locale, type RouteSjabloon } from '@/i18n/routing';
import { getPathname } from '@/i18n/navigation';

/**
 * Centrale SEO-laag.
 *
 * Vóór dit bestand stond de basis-URL 49 keer hardgecodeerd verspreid over
 * 24 bestanden, en had elke pagina zijn eigen metadata-object met zijn eigen
 * canonical-stijl. Eén pagina (de gids) vergat de canonical volledig en erfde
 * daardoor die van de homepage.
 *
 * Alles loopt nu via `buildMetadata`. Dat is ook de plek waar straks
 * `alternates.languages` bijkomt voor de Franse versie: één wijziging hier
 * levert hreflang op elke pagina.
 */

export const SITE_URL = 'https://bestemaaltijdbox.be';
export const SITE_NAAM = 'BesteMaaltijdbox.be';

/**
 * Talen die (nog) niet geïndexeerd mogen worden.
 *
 * Stond tot fase 6 op ['fr'], omdat de Franse pagina's toen nog Nederlandse
 * teksten toonden en dus duplicate content waren. Sinds de vertaling af is,
 * is de lijst leeg en zijn beide talen indexeerbaar. Zet een taal hier terug
 * als je hem tijdelijk uit de index wil halen; de sitemap volgt automatisch.
 */
export const NIET_INDEXEREN: readonly string[] = [];

/** Blijft bestaan voor plekken die geen locale meekrijgen (bv. de root-layout). */
export const STANDAARD_LOCALE = ogLocaleVoor[routing.defaultLocale];

/** Maakt van een pad een absolute URL, met of zonder leidende slash. */
export function absoluteUrl(pad: string): string {
  if (pad.startsWith('http')) return pad;
  return `${SITE_URL}${pad.startsWith('/') ? pad : `/${pad}`}`;
}

export interface MetadataInput {
  /**
   * Pad zonder domein, bv. '/aanbieder/hellofresh'. Alleen nodig als er geen
   * `route` is; met `route` wordt het pad per taal afgeleid, zodat de Franse
   * canonical naar /fr/fournisseur/... wijst en niet naar het Nederlandse pad.
   */
  pad?: string;
  titel: string;
  beschrijving: string;
  /** 'website' voor overzichten, 'article' voor blog, gids en vergelijkingen. */
  type?: 'website' | 'article';
  keywords?: string[];
  /** Absolute of relatieve URL naar een deelafbeelding. */
  afbeelding?: string;
  /** Zet de pagina op noindex, bv. voor nog niet vertaalde content. */
  noindex?: boolean;
  /** Actieve taal. Bepaalt og:locale en de hreflang-verwijzingen. */
  locale?: Locale;
  /**
   * Het interne route-sjabloon, bv. '/aanbieder/[slug]'. Nodig om de
   * vertaalde tegenhanger te vinden; zonder dit wordt hreflang overgeslagen.
   */
  route?: RouteSjabloon;
  /** Parameters voor dat sjabloon, bv. { slug: 'hellofresh' }. */
  params?: Record<string, string>;
}

/**
 * Bouwt canonical, OpenGraph en Twitter in één keer op.
 * Relatieve OG-URL's mogen dankzij `metadataBase` in de root-layout.
 */
export function buildMetadata({
  pad,
  titel,
  beschrijving,
  type = 'website',
  keywords,
  afbeelding,
  noindex,
  locale = routing.defaultLocale,
  route,
  params,
}: MetadataInput): Metadata {
  const hrefVoor = (l: Locale) =>
    getPathname({ locale: l, href: (params ? { pathname: route, params } : route) as never });

  // Met een route is het pad per taal bekend; anders valt hij terug op `pad`.
  const eigenPad = route ? hrefVoor(locale) : pad;
  if (!eigenPad) throw new Error('buildMetadata heeft pad of route nodig');
  const url = absoluteUrl(eigenPad);
  const images = afbeelding ? [{ url: absoluteUrl(afbeelding) }] : undefined;

  // Hreflang kan alleen als we het route-sjabloon kennen; anders zou de
  // verwijzing naar een niet-bestaande vertaling wijzen, wat erger is dan geen
  // hreflang. Pagina's zonder `route` krijgen er dus bewust geen.
  const languages = route
    ? Object.fromEntries([
        ...routing.locales.map(l => [
          hreflangVoor[l],
          absoluteUrl(hrefVoor(l)),
        ]),
        [
          'x-default',
          absoluteUrl(hrefVoor(routing.defaultLocale)),
        ],
      ])
    : undefined;

  return {
    title: titel,
    description: beschrijving,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    // Volgen mag wel: zo vindt Google de vertaalde varianten alvast.
    ...(noindex || NIET_INDEXEREN.includes(locale)
      ? { robots: { index: false, follow: true } }
      : {}),
    openGraph: {
      title: titel,
      description: beschrijving,
      url,
      siteName: SITE_NAAM,
      locale: ogLocaleVoor[locale],
      type,
      ...(images ? { images } : {}),
    },
    twitter: {
      // Een grote kaart zonder afbeelding levert een lege banner op.
      card: images ? 'summary_large_image' : 'summary',
      title: titel,
      description: beschrijving,
      ...(images ? { images } : {}),
    },
  };
}

/* ---------------------------------------------------------------- JSON-LD */

/** Vraag-en-antwoordmarkup. Geeft null terug bij een lege lijst. */
export function faqJsonLd(vragen: Array<{ q: string; a: string }>) {
  if (vragen.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: vragen.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/** Kruimelpad-markup. `pad` is relatief; de homepage hoeft niet meegegeven. */
export function breadcrumbJsonLd(kruimels: Array<{ naam: string; pad: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ naam: 'Home', pad: '/' }, ...kruimels].map((k, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: k.naam,
      item: absoluteUrl(k.pad),
    })),
  };
}

export function articleJsonLd(opties: {
  titel: string;
  beschrijving: string;
  pad: string;
  gepubliceerd?: string;
  gewijzigd?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opties.titel,
    description: opties.beschrijving,
    url: absoluteUrl(opties.pad),
    ...(opties.gepubliceerd ? { datePublished: opties.gepubliceerd } : {}),
    dateModified: opties.gewijzigd ?? opties.gepubliceerd,
    author: { '@type': 'Organization', name: SITE_NAAM },
    publisher: { '@type': 'Organization', name: SITE_NAAM, url: SITE_URL },
  };
}
