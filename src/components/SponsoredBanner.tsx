'use client';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import GesponsordLabel from './GesponsordLabel';

const DISMISS_KEY = 'factorBannerDismissed';

// Sitewide gesponsorde Factor-banner. `active` wordt server-side bepaald
// (src/app/layout.tsx via isSponsoringActief) zodat de looptijd nooit van de
// browserklok afhangt. De client regelt enkel de dismiss-voorkeur (localStorage,
// patroon uit CookieBanner.tsx). Geen code in beeld — de CTA stuurt bezoekers via
// onze affiliate-link zodat de klik telt.
export default function SponsoredBanner({ active }: { active: boolean }) {
  const tb = useTranslations('banner');
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY) === '1') setDismissed(true);
  }, []);

  if (!active || dismissed) return null;

  function dismiss() {
    try { localStorage.setItem(DISMISS_KEY, '1'); } catch {}
    setDismissed(true);
  }

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
        <img src="/logos/factor.svg" alt="Factor" style={{ height: 15, width: 'auto', display: 'block', flexShrink: 0 }} />
        <span>{tb('factorPitch')} <strong>40% korting</strong> op je eerste box.</span>
      </span>
      <Link
        href="/ga/factor"
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
        Bekijk de deal →
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
