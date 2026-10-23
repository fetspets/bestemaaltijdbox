'use client';
import { useTranslations } from 'next-intl';

import { useState, useEffect } from 'react';
import Link from '@/components/TaalLink';
import { CONSENT_EVENT } from '@/components/ConsentScripts';
import { OPEN_EVENT } from '@/components/CookieInstellingenKnop';

export default function CookieBanner() {
  const t = useTranslations('cookies');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const controleer = () => {
      let consent: string | null = null;
      try { consent = localStorage.getItem('cookieConsent'); } catch { /* geblokkeerd */ }
      if (!consent) setVisible(true);
    };
    controleer();
    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  function accept(type: 'all' | 'minimal') {
    let vorige: string | null = null;
    try {
      vorige = localStorage.getItem('cookieConsent');
      localStorage.setItem('cookieConsent', type);
    } catch { /* keuze geldt dan enkel voor dit bezoek */ }
    setVisible(false);
    // Van "alles" naar "functioneel": geladen scripts verdwijnen pas na herladen.
    if (vorige === 'all' && type === 'minimal') {
      window.location.reload();
      return;
    }
    window.dispatchEvent(new Event(CONSENT_EVENT));
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
        <p style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.6, margin: 0, flex: '1 1 240px', minWidth: 0 }}>
          {t('tekst')}{' '}
          <Link href="/privacy" style={{ color: 'var(--green)', fontWeight: 600, textDecoration: 'underline' }}>{t('meerInfo')}</Link>
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', maxWidth: '100%' }}>
          <button
            onClick={() => accept('minimal')}
            style={{
              padding: '9px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer',
              background: 'white', border: '1.5px solid var(--rule)', color: 'var(--ink)',
            }}
          >
            {t('alleenFunctioneel')}
          </button>
          <button
            onClick={() => accept('all')}
            style={{
              padding: '9px 16px', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer',
              background: 'var(--green)', border: 'none', color: 'white',
            }}
          >
            {t('alleAccepteren')}
          </button>
        </div>
      </div>
    </div>
  );
}
