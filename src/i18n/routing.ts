import { defineRouting } from 'next-intl/routing';

/**
 * Tweetalige routing voor één Belgisch domein.
 *
 * `localePrefix: 'as-needed'` is de kern van de nul-redirect-strategie:
 * Nederlands is de standaardtaal en krijgt GEEN prefix, dus
 * /aanbieder/hellofresh blijft letterlijk wat het was. Alleen Frans krijgt
 * /fr/ ervoor. Er verandert daardoor niets aan URL's die vandaag ranken.
 *
 * De Franse paden zijn geen vertalingen van de Nederlandse maar eigen
 * zoekwoorden: Franstalige Belgen zoeken op "box repas", niet op een
 * vertaling van "maaltijdbox". Deze paden liggen na lancering vast, dus
 * wijzig ze niet zonder redirect.
 */
export const routing = defineRouting({
  locales: ['nl', 'fr'],
  defaultLocale: 'nl',
  localePrefix: 'as-needed',
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/kortingscodes': {
      nl: '/kortingscodes',
      fr: '/codes-promo',
    },
    '/kortingscode/[slug]': {
      nl: '/kortingscode/[slug]',
      fr: '/code-promo/[slug]',
    },
    '/aanbieder/[slug]': {
      nl: '/aanbieder/[slug]',
      fr: '/fournisseur/[slug]',
    },
    '/vergelijk/[slug]': {
      nl: '/vergelijk/[slug]',
      fr: '/comparatif/[slug]',
    },
    '/voor/[situatie]': {
      nl: '/voor/[situatie]',
      fr: '/pour/[situatie]',
    },
    '/gids/[slug]': {
      nl: '/gids/[slug]',
      fr: '/guide/[slug]',
    },
    '/blog': {
      nl: '/blog',
      fr: '/blog',
    },
    '/blog/[slug]': {
      nl: '/blog/[slug]',
      fr: '/blog/[slug]',
    },
    '/over-ons': {
      nl: '/over-ons',
      fr: '/a-propos',
    },
    '/privacy': {
      nl: '/privacy',
      fr: '/confidentialite',
    },
    '/voorwaarden': {
      nl: '/voorwaarden',
      fr: '/conditions',
    },
  },
});

export type Locale = (typeof routing.locales)[number];

/** De interne route-sjablonen, bv. '/aanbieder/[slug]'. */
export type RouteSjabloon = keyof typeof routing.pathnames;

/** Taalcode zoals hreflang en og:locale die verwachten. */
export const hreflangVoor: Record<Locale, string> = {
  nl: 'nl-BE',
  fr: 'fr-BE',
};

export const ogLocaleVoor: Record<Locale, string> = {
  nl: 'nl_BE',
  fr: 'fr_BE',
};
