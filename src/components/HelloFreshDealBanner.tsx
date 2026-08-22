'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from '@/components/TaalLink';

const SHOW_ON = ['/', '/aanbieder/hellofresh', '/vergelijk/hellofresh-vs-foodbag', '/vergelijk/hellofresh-vs-marley-spoon'];

export default function HelloFreshDealBanner() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !SHOW_ON.includes(pathname)) return null;

  return (
    <div style={{
      background: 'linear-gradient(90deg, #1B4332 0%, #2D6A4F 100%)',
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
        🥗 HelloFresh-deal: tot €60 korting op je eerste 3 boxen — automatisch via onze link, geen code nodig.
      </span>
      <Link
        data-plaatsing="hellofresh-banner"
        href="/ga/hellofresh"
        rel="noopener sponsored nofollow"
        style={{
          background: 'white',
          color: '#1B4332',
          padding: '7px 16px',
          borderRadius: 8,
          fontWeight: 700,
          fontSize: 13,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        Bekijk de deal →
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
