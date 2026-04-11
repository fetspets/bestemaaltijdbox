'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  function accept(type: 'all' | 'minimal') {
    localStorage.setItem('cookieConsent', type);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      background: 'white',
      borderTop: '3px solid var(--green)',
      boxShadow: '0 -4px 24px rgba(0,0,0,0.1)',
      padding: '16px 20px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <p style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.6, margin: 0, flex: 1, minWidth: 240 }}>
          🍪 We gebruiken cookies voor analytics (Google Analytics) en affiliate tracking zodat we de site kunnen verbeteren.{' '}
          <Link href="/privacy" style={{ color: 'var(--green)', fontWeight: 600, textDecoration: 'underline' }}>Meer info</Link>
        </p>
        <div style={{ display: 'flex', gap: 10, flexShrink: 0, flexWrap: 'wrap' }}>
          <button
            onClick={() => accept('minimal')}
            style={{
              padding: '9px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer',
              background: 'white', border: '1.5px solid var(--rule)', color: 'var(--ink)',
            }}
          >
            Alleen functioneel
          </button>
          <button
            onClick={() => accept('all')}
            style={{
              padding: '9px 16px', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer',
              background: 'var(--green)', border: 'none', color: 'white',
            }}
          >
            Accepteer alle cookies
          </button>
        </div>
      </div>
    </div>
  );
}
