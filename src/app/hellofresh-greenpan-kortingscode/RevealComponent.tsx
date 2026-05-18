'use client';
import { useState } from 'react';

type State = 'idle' | 'loading' | 'revealed' | 'error';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function RevealComponent() {
  const [state, setState] = useState<State>('idle');
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);

  async function handleReveal() {
    if (state === 'loading' || state === 'revealed') return;
    setState('loading');

    // 1. Affiliateklik EERST zodat de cookie geplaatst wordt vóór code-weergave
    window.gtag?.('event', 'affiliate_click', {
      aanbieder: 'hellofresh',
      pagina: window.location.pathname,
      element_type: 'knop',
      bestemming: 'https://hellofreshfr.sjv.io/c/3156055/3896977/45302',
    });
    window.open('/ga/hellofresh', '_blank', 'noopener');

    // 2. Dan pas de code ophalen van de server
    try {
      const res = await fetch('/api/reveal-code?campaign=hellofresh-greenpan');
      if (!res.ok) throw new Error('fetch failed');
      const data = await res.json();
      setCode(data.code ?? '');
      setState('revealed');
      // 3. Analytics event
      window.gtag?.('event', 'code_revealed', { event_label: 'hellofresh_greenpan' });
    } catch {
      setState('error');
    }
  }

  async function handleCopy() {
    try { await navigator.clipboard.writeText(code); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div style={{ maxWidth: 480, margin: '0 auto' }}>
      {state !== 'revealed' && (
        <div style={{
          background: '#F0FDF4',
          border: '2px dashed #86EFAC',
          borderRadius: 20,
          padding: '32px 28px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
            Jouw HelloFresh kortingscode
          </div>
          {/* Gemaskeerde code — nooit de echte code in de HTML */}
          <div style={{
            fontFamily: 'monospace',
            fontSize: 'clamp(28px, 7vw, 44px)',
            fontWeight: 900,
            color: '#1B4332',
            letterSpacing: '0.1em',
            marginBottom: 20,
            userSelect: 'none',
          }}>
            GP•••••••
          </div>
          <button
            onClick={handleReveal}
            disabled={state === 'loading'}
            style={{
              display: 'block',
              width: '100%',
              background: state === 'loading' ? '#6B7280' : '#1B4332',
              color: 'white',
              border: 'none',
              borderRadius: 12,
              padding: '15px 20px',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 16,
              cursor: state === 'loading' ? 'default' : 'pointer',
              transition: 'background 0.2s',
            }}
          >
            {state === 'loading' ? 'Even geduld…' : 'Toon code & ga naar HelloFresh →'}
          </button>
          <p style={{ fontSize: 12, color: '#6B7280', marginTop: 10, lineHeight: 1.5 }}>
            We openen HelloFresh in een nieuw tabblad en tonen je code
          </p>
          {state === 'error' && (
            <p style={{ fontSize: 13, color: '#C0392B', marginTop: 8 }}>
              Ophalen mislukt. Probeer het opnieuw of ga direct naar{' '}
              <a href="/ga/hellofresh" target="_blank" rel="noopener sponsored nofollow" style={{ color: '#C0392B' }}>
                HelloFresh
              </a>.
            </p>
          )}
        </div>
      )}

      {state === 'revealed' && (
        <div style={{
          background: '#F0FDF4',
          border: '2px solid #52B788',
          borderRadius: 20,
          padding: '32px 28px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#52B788', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
            Jouw kortingscode
          </div>
          <div style={{
            fontFamily: 'monospace',
            fontSize: 'clamp(28px, 7vw, 44px)',
            fontWeight: 900,
            color: '#1B4332',
            letterSpacing: '0.1em',
            marginBottom: 20,
          }}>
            {code}
          </div>
          <button
            onClick={handleCopy}
            style={{
              display: 'block',
              width: '100%',
              background: copied ? '#DCFCE7' : 'white',
              color: copied ? '#16A34A' : '#1B4332',
              border: copied ? '2px solid #86EFAC' : '2px solid #A7DFC0',
              borderRadius: 12,
              padding: '13px 20px',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer',
              transition: 'all 0.2s',
              marginBottom: 12,
            }}
          >
            {copied ? '✓ Gekopieerd!' : '📋 Kopieer code'}
          </button>
          <p style={{ fontSize: 13, color: '#16A34A', fontWeight: 600, lineHeight: 1.5 }}>
            ✅ HelloFresh is geopend in een nieuw tabblad. Plak deze code bij het afrekenen.
          </p>
        </div>
      )}

      <noscript>
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <a
            href="/ga/hellofresh"
            rel="noopener sponsored nofollow"
            style={{ fontWeight: 700, color: '#1B4332', fontSize: 16 }}
          >
            Bekijk de aanbieding bij HelloFresh →
          </a>
        </div>
      </noscript>
    </div>
  );
}
