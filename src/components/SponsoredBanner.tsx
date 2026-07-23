'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import GesponsordLabel from './GesponsordLabel';

const DISMISS_KEY = 'factorBannerDismissed';

// Sitewide gesponsorde banner. `active` wordt server-side bepaald
// (src/app/layout.tsx via isSponsoringActief) zodat de looptijd nooit van de
// browserklok afhangt. De client regelt enkel de dismiss-voorkeur (localStorage,
// patroon uit CookieBanner.tsx).
export default function SponsoredBanner({
  active,
  code,
}: {
  active: boolean;
  code: string;
}) {
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
        background: 'linear-gradient(90deg, #5B21B6 0%, #7C3AED 100%)',
        color: 'white',
        padding: '9px 44px 9px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 60,
        minHeight: 42,
        boxSizing: 'border-box',
      }}
    >
      <GesponsordLabel variant="op-donker" />
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 600, textAlign: 'center', lineHeight: 1.4 }}>
        <span style={{ display: 'inline-flex', width: 24, height: 24, borderRadius: 6, background: 'white', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
          <img src="/logos/factor.svg" alt="Factor" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 3 }} />
        </span>
        <span>Factor — kant-en-klare chef-maaltijden zonder koken. Code <strong>{code}</strong>: 40% korting op je eerste box.</span>
      </span>
      <Link
        href="/ga/factor"
        rel="noopener sponsored nofollow"
        style={{
          background: 'white',
          color: '#5B21B6',
          padding: '6px 14px',
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
          color: 'rgba(255,255,255,0.85)',
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
