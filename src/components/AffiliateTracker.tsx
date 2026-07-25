'use client';
import { useEffect } from 'react';
import { aanbieders } from '@/lib/aanbieders';

// Mirrors the affiliate URL map in src/app/ga/[slug]/route.ts
const affiliateLinks: Record<string, string> = {
  'hellofresh': 'https://hellofreshfr.sjv.io/c/3156055/3896977/45302',
  'foodbag': 'https://www.foodbag.be/foodbox/?tt=19934_2485209_507243_&r=',
  'marley-spoon': 'https://go.adt246.net/t/t?a=1709214807&as=2059394978&t=2&tk=1',
  'factor': 'https://factor-be.sjv.io/c/3156055/3876428/19954',
  'foodprepper': 'https://deals.foodprepper.be/c?c=40691&m=2545927&a=507243&r=&u=',
};

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
      const slug = href.replace('/ga/', '');
      const aanbieder = aanbieders.find(a => a.slug === slug);
      const bestemming = affiliateLinks[slug] ?? aanbieder?.affiliateUrl ?? href;
      window.gtag?.('event', 'affiliate_click', {
        aanbieder: slug,
        pagina: window.location.pathname,
        element_type: 'knop',
        bestemming,
      });
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  return null;
}
