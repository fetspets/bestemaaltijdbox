'use client';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function RevealComponent() {
  function handleClick() {
    window.gtag?.('event', 'affiliate_click', {
      aanbieder: 'hellofresh',
      pagina: window.location.pathname,
      element_type: 'knop',
      bestemming: 'https://hellofreshfr.sjv.io/c/3156055/3896977/45302',
    });
    window.open('/ga/hellofresh', '_blank', 'noopener');
  }

  return (
    <div style={{ maxWidth: 480, margin: '0 auto' }}>
      <div style={{
        background: '#F0FDF4',
        border: '2px solid #52B788',
        borderRadius: 20,
        padding: '32px 28px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#52B788', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
          Geen code nodig
        </div>
        <div style={{
          fontFamily: 'Fraunces, serif',
          fontSize: 'clamp(18px, 5vw, 24px)',
          fontWeight: 900,
          color: '#1B4332',
          lineHeight: 1.3,
          marginBottom: 8,
        }}>
          Gratis GreenPan™ + tot €60 korting
        </div>
        <p style={{ fontSize: 13, color: '#4B5563', marginBottom: 20, lineHeight: 1.6 }}>
          Korting wordt automatisch toegepast via onze link — geen code nodig.<br />
          Geldig t.e.m. 15 juni 2026.
        </p>
        <button
          onClick={handleClick}
          style={{
            display: 'block',
            width: '100%',
            background: '#1B4332',
            color: 'white',
            border: 'none',
            borderRadius: 12,
            padding: '15px 20px',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 16,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          Activeer deal &amp; ga naar HelloFresh →
        </button>
        <p style={{ fontSize: 12, color: '#6B7280', marginTop: 10, lineHeight: 1.5 }}>
          Korting wordt automatisch verdeeld over je eerste boxen
        </p>
      </div>

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
