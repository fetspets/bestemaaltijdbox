'use client';
import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { getAanbieder } from '@/lib/aanbieders';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Stuurt één GA4-event per klik op een /ga/-link.
 *
 * Drie dingen die eerder ontbraken:
 *  - `taal`: zonder dat kun je niet zien of de Franse versie iets oplevert,
 *    en dat is precies de vraag die het tweetaligheidstraject moet beantwoorden.
 *  - `plaatsing`: kwam uit een hardgecodeerde 'knop', waardoor banner, tabel,
 *    quiz en tekstlink in GA4 niet van elkaar te scheiden waren. Elementen
 *    geven dat nu mee via data-plaatsing.
 *  - `auxclick`: een middenklik (nieuw tabblad) vuurt geen 'click' en werd dus
 *    helemaal niet geteld.
 */
export default function AffiliateTracker() {
  const taal = useLocale();

  useEffect(() => {
    const verstuur = (e: MouseEvent) => {
      // Bij auxclick alleen de middelste knop; rechtsklik opent een contextmenu.
      if (e.type === 'auxclick' && e.button !== 1) return;

      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="/ga/"]');
      if (!link) return;

      const href = link.getAttribute('href') ?? '';
      // href kan een querystring dragen (/ga/foodprepper?c=cta); die hoort
      // niet bij de slug.
      const [pad, query] = href.split('?');
      const slug = pad.replace('/ga/', '');
      const campagne = new URLSearchParams(query ?? '').get('c');

      const aanbieder = getAanbieder(slug);
      const bestemming =
        (campagne && aanbieder?.affiliateCampagnes?.[campagne]) ??
        aanbieder?.affiliateUrl ??
        href;

      // Het dichtstbijzijnde element dat zijn plaatsing declareert wint;
      // zonder declaratie valt het terug op 'onbekend' in plaats van te doen
      // alsof elke klik een knop is.
      const plaatsing =
        link.getAttribute('data-plaatsing') ??
        link.closest('[data-plaatsing]')?.getAttribute('data-plaatsing') ??
        'onbekend';

      // Niet elke /ga/-link verdient geld: foodmaker, ekomenu en de stopgezette
      // Carrefour gaan naar een gewone merkpagina zonder affiliate-parameters.
      // Die apart houden voorkomt opgeblazen klikcijfers.
      const monetair = Boolean(aanbieder?.affiliateUrl?.includes('?') || aanbieder?.affiliateUrl?.includes('/c/'));

      window.gtag?.('event', 'affiliate_click', {
        aanbieder: slug,
        taal,
        pagina: window.location.pathname,
        plaatsing,
        campagne: campagne ?? 'standaard',
        monetair,
        bestemming,
        // Zorgt dat het event vertrekt vóór de navigatie de pagina afbreekt.
        transport_type: 'beacon',
      });
    };

    document.addEventListener('click', verstuur);
    document.addEventListener('auxclick', verstuur);
    return () => {
      document.removeEventListener('click', verstuur);
      document.removeEventListener('auxclick', verstuur);
    };
  }, [taal]);

  return null;
}
