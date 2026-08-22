import { routing } from './routing';

/**
 * Vertaalt een Nederlands intern pad naar de variant van de gevraagde taal.
 *
 * De codebase bouwt links als gewone strings (`/aanbieder/${slug}`), niet als
 * getypeerde route-objecten. Zonder deze vertaling zou elke link op een Franse
 * pagina de bezoeker terugsturen naar het Nederlands — wat vóór deze functie
 * ook gebeurde: alle 36 interne links op /fr wezen naar NL-URL's.
 *
 * Nederlands is de standaardtaal zonder prefix, dus daar gebeurt niets.
 */
const segmentPerTaal: Record<string, Record<string, string>> = {
  fr: {
    aanbieder: 'fournisseur',
    vergelijk: 'comparatif',
    kortingscode: 'code-promo',
    kortingscodes: 'codes-promo',
    voor: 'pour',
    gids: 'guide',
    'over-ons': 'a-propos',
    privacy: 'confidentialite',
    voorwaarden: 'conditions',
    // blog heet in beide talen 'blog'
  },
};

/** Paden die nooit een taalprefix mogen krijgen. */
const ongewijzigd = ['/ga/', '/api/', '/_next/'];

export function lokaliseerPad(pad: string, locale: string): string {
  if (locale === routing.defaultLocale) return pad;
  if (!pad.startsWith('/')) return pad;
  if (pad.startsWith(`/${locale}`)) return pad;
  if (ongewijzigd.some(p => pad.startsWith(p))) return pad;

  // Query en hash blijven ongemoeid.
  const scheiding = pad.search(/[?#]/);
  const kaal = scheiding === -1 ? pad : pad.slice(0, scheiding);
  const staart = scheiding === -1 ? '' : pad.slice(scheiding);

  const delen = kaal.slice(1).split('/').filter(Boolean);
  if (delen.length === 0) return `/${locale}${staart}`;

  const vertaling = segmentPerTaal[locale] ?? {};
  delen[0] = vertaling[delen[0]] ?? delen[0];
  return `/${locale}/${delen.join('/')}${staart}`;
}
