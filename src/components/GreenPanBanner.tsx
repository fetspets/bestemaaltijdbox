'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SHOW_ON = ['/', '/aanbieder/hellofresh', '/vergelijk/hellofresh-vs-foodbag', '/vergelijk/hellofresh-vs-marley-spoon'];

export default function GreenPanBanner() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !SHOW_ON.includes(pathname)) return null;

  return (
    <div style={{
      background: 'linear-gradient(90deg, #F97316 0%, #FBBF24 100%)',
      color: 'white',
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      flexWrap: 'wrap',
      position: 'relative',
      zIndex: 50,
    }}>
      <span style={{ fontSize: 14, fontWeight: 600, textAlign: 'center', lineHeight: 1.5 }}>
        🍳 Laatste kans: Gratis GreenPan pan bij HelloFresh — deal eindigt 15 juni 2026. Gebruik code <strong>GPBESTE60</strong> en bespaar tot €60.
      </span>
      <Link
        href="/ga/hellofresh"
        style={{
          background: 'white',
          color: '#F97316',
          padding: '7px 16px',
          borderRadius: 8,
          fontWeight: 700,
          fontSize: 13,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        Claim je gratis pan →
      </Link>
      <button
        onClick={() => setDismissed(true)}
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
