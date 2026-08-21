'use client';
import { useEffect } from 'react';
import { getAanbieder } from '@/lib/aanbieders';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function AffiliateTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
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

      window.gtag?.('event', 'affiliate_click', {
        aanbieder: slug,
        pagina: window.location.pathname,
        element_type: 'knop',
        campagne: campagne ?? 'standaard',
        bestemming,
      });
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  return null;
}
