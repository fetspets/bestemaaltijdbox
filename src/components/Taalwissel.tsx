'use client';
import NextLink from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { routing, hreflangVoor, type Locale } from '@/i18n/routing';
import { lokaliseerPad } from '@/i18n/paden';

const labels: Record<Locale, string> = {
  nl: 'Nederlands',
  fr: 'Français',
};

/**
 * Wisselt naar de andere taalversie van dezelfde pagina.
 *
 * Belangrijk voor hreflang-consistentie: Google verwacht dat de talen naar
 * elkaar verwijzen. De link gaat naar de vertaalde variant van het huidige
 * pad, niet naar de homepage — anders verliest de bezoeker zijn plek.
 */
export default function Taalwissel() {
  const huidig = useLocale() as Locale;
  const pathname = usePathname() ?? '/';
  const ander = routing.locales.find(l => l !== huidig) ?? routing.defaultLocale;

  // usePathname bevat de prefix van de actieve taal; strip die eerst zodat
  // lokaliseerPad met een schoon Nederlands pad kan werken.
  const zonderPrefix =
    huidig === routing.defaultLocale ? pathname : pathname.replace(new RegExp(`^/${huidig}`), '') || '/';

  // Het pad staat in de taal van de huidige pagina; voor Frans moeten de
  // segmenten eerst terug naar het Nederlands voordat we ze opnieuw vertalen.
  const nlPad = huidig === routing.defaultLocale ? zonderPrefix : naarNederlands(zonderPrefix);
  const doel = lokaliseerPad(nlPad, ander);

  return (
    <NextLink
      href={doel}
      hrefLang={hreflangVoor[ander]}
      aria-label={`Naar de ${labels[ander]}e versie`}
      style={{
        padding: '5px 10px',
        fontSize: 12,
        fontWeight: 700,
        color: 'var(--ink)',
        textDecoration: 'none',
        border: '1.5px solid var(--rule)',
        borderRadius: 100,
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
    >
      {ander.toUpperCase()}
    </NextLink>
  );
}

/** Franse segmenten terug naar hun Nederlandse tegenhanger. */
const terug: Record<string, string> = {
  fournisseur: 'aanbieder',
  comparatif: 'vergelijk',
  'code-promo': 'kortingscode',
  'codes-promo': 'kortingscodes',
  pour: 'voor',
  guide: 'gids',
  'a-propos': 'over-ons',
  confidentialite: 'privacy',
  conditions: 'voorwaarden',
};

function naarNederlands(pad: string): string {
  const delen = pad.slice(1).split('/').filter(Boolean);
  if (delen.length === 0) return '/';
  delen[0] = terug[delen[0]] ?? delen[0];
  return '/' + delen.join('/');
}
