'use client';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Link from '@/components/TaalLink';
import GesponsordLabel from './GesponsordLabel';

// Per partner een eigen sleutel: wie de Factor-banner wegklikte, ziet de
// banner van een volgende sponsor toch.
const dismissKey = (partner: string) => (partner === 'factor' ? 'factorBannerDismissed' : `sponsorBannerDismissed:${partner}`);

const LOGO: Record<string, { src: string; alt: string; h: number }> = {
  factor: { src: '/logos/factor.svg', alt: 'Factor', h: 15 },
  hellofresh: { src: '/logos/hellofresh.png', alt: 'HelloFresh', h: 18 },
};

// Sitewide gesponsorde banner (Factor, HelloFresh, ...). `active` wordt server-side bepaald
// (src/app/layout.tsx via isSponsoringActief) zodat de looptijd nooit van de
// browserklok afhangt. De client regelt enkel de dismiss-voorkeur (localStorage,
// patroon uit CookieBanner.tsx). Geen code in beeld — de CTA stuurt bezoekers via
// onze affiliate-link zodat de klik telt.
export default function SponsoredBanner({
  active,
  partner = 'factor',
  plaatsing,
}: {
  active: boolean;
  partner?: string;
  plaatsing?: string;
}) {
  const tb = useTranslations('banner');
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try { if (localStorage.getItem(dismissKey(partner)) === '1') setDismissed(true); } catch {}
  }, [partner]);

  if (!active || dismissed || !LOGO[partner]) return null;

  function dismiss() {
    try { localStorage.setItem(dismissKey(partner), '1'); } catch {}
    setDismissed(true);
  }

  const tekst = partner === 'hellofresh'
    ? { pitch: tb('hellofreshPitch'), korting: tb('hellofreshKorting'), rest: tb('hellofreshRest') }
    : { pitch: tb('factorPitch'), korting: tb('factorKorting'), rest: tb('factorRest') };
  const logo = LOGO[partner];

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #ECFCCB 0%, #F7FEE7 100%)',
        color: '#1C1C1C',
        borderBottom: '1px solid #D9F99D',
        padding: '9px 44px 9px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 40,
        minHeight: 44,
        boxSizing: 'border-box',
      }}
    >
      <GesponsordLabel />
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13.5, fontWeight: 600, lineHeight: 1.4, textAlign: 'center' }}>
        <img src={logo.src} alt={logo.alt} style={{ height: logo.h, width: 'auto', display: 'block', flexShrink: 0 }} />
        <span>{tekst.pitch} <strong>{tekst.korting}</strong> {tekst.rest}</span>
      </span>
      <Link
        data-plaatsing={plaatsing ?? `${partner}-banner`}
        href={`/ga/${partner}`}
        rel="noopener sponsored nofollow"
        style={{
          background: '#161616',
          color: 'white',
          padding: '6px 16px',
          borderRadius: 8,
          fontWeight: 700,
          fontSize: 12.5,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        {tb('bekijkDeal')}
      </Link>
      <button
        onClick={dismiss}
        aria-label="Sluiten"
        style={{
          background: 'transparent',
          border: 'none',
          color: '#4B5563',
          cursor: 'pointer',
          fontSize: 20,
          lineHeight: 1,
          padding: '0 4px',
          flexShrink: 0,
          position: 'absolute',
          right: 12,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        ×
      </button>
    </div>
  );
}
