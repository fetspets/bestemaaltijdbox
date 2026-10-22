'use client';
import { useLocale } from 'next-intl';

export const OPEN_EVENT = 'cookie-instellingen-openen';

export default function CookieInstellingenKnop() {
  const taal = useLocale();
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      style={{ fontSize: 13, color: '#D1D5DB', background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', textDecoration: 'none', font: 'inherit' }}
    >
      {taal === 'fr' ? 'Paramètres des cookies' : 'Cookie-instellingen'}
    </button>
  );
}
