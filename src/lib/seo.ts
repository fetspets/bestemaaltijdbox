import type { Metadata } from 'next';

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

/** Voorlopig één taal; fase 3 voegt 'fr' toe. */
export const STANDAARD_LOCALE = 'nl_BE';

/** Maakt van een pad een absolute URL, met of zonder leidende slash. */
export function absoluteUrl(pad: string): string {
  if (pad.startsWith('http')) return pad;
  return `${SITE_URL}${pad.startsWith('/') ? pad : `/${pad}`}`;
}

export interface MetadataInput {
  /** Pad zonder domein, bv. '/aanbieder/hellofresh'. Gebruik '/' voor de homepage. */
  pad: string;
  titel: string;
  beschrijving: string;
  /** 'website' voor overzichten, 'article' voor blog, gids en vergelijkingen. */
  type?: 'website' | 'article';
  keywords?: string[];
  /** Absolute of relatieve URL naar een deelafbeelding. */
  afbeelding?: string;
  /** Zet de pagina op noindex, bv. voor nog niet vertaalde content. */
  noindex?: boolean;
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
}: MetadataInput): Metadata {
  const url = absoluteUrl(pad);
  const images = afbeelding ? [{ url: absoluteUrl(afbeelding) }] : undefined;

  return {
    title: titel,
    description: beschrijving,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: titel,
      description: beschrijving,
      url,
      siteName: SITE_NAAM,
      locale: STANDAARD_LOCALE,
      type,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: 'summary_large_image',
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
