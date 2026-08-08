import Link from 'next/link';

export default function FactorKortingscode() {
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px 64px' }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 28 }}>
        <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Home</Link>
        {' → '}
        <Link href="/kortingscodes" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Kortingscodes</Link>
        {' → '}
        <strong style={{ color: '#1C1C1C' }}>Factor kortingscode</strong>
      </div>

      {/* Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
        ✓ Gecontroleerd geldig 2026
      </div>

      {/* H1 */}
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 900, color: '#1C1C1C', lineHeight: 1.15, marginBottom: 12 }}>
        Factor kortingscode 2026 — 40% korting op je eerste box
      </h1>

      <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.7, marginBottom: 32 }}>
        Met de exclusieve Factor kortingscode <strong>BESTE40</strong> bespaar je <strong>40% op je eerste box</strong> en nog eens <strong>25% op elk van de volgende vijf boxen</strong>. Geldig voor nieuwe klanten via onderstaande link.
      </p>

      {/* Code box */}
      <div style={{ background: '#F5F3FF', border: '2px dashed #C4B5FD', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Jouw kortingscode</div>
        <div style={{ fontFamily: 'monospace', fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 900, color: '#7C3AED', letterSpacing: '0.05em', marginBottom: 16 }}>
          BESTE40
        </div>
        <button
          onClick={handleCopy}
          style={{
            padding: '12px 32px', borderRadius: 10, cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 14,
            background: copied ? '#F5F3FF' : 'white',
            color: copied ? '#7C3AED' : '#7C3AED',
            border: copied ? '2px solid #C4B5FD' : '2px solid #C4B5FD',
            transition: 'all 0.2s',
          }}
        >
          {copied ? '✓ Gekopieerd!' : '📋 Kopieer code'}
        </button>
      </div>

      {/* CTA */}
      <Link
        href="/ga/factor"
        style={{ display: 'block', background: '#7C3AED', color: 'white', textAlign: 'center', padding: '16px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginBottom: 32 }}
      >
        Activeer 40% korting bij Factor →
      </Link>

      {/* Stappenplan */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, color: '#1C1C1C' }}>
          Hoe gebruik je de code?
        </h2>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Kopieer de code BESTE40 via de knop hierboven',
            'Klik op "Activeer 40% korting bij Factor" en maak een account aan',
            'De korting wordt automatisch toegepast via de link — de code BESTE40 kan je desgewenst ook handmatig invoeren bij het afrekenen',
            'Geniet van 40% korting op je eerste box én 25% korting op elk van de volgende vijf boxen',
          ].map((stap, i) => (
            <li key={i} style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.6 }}>
              <strong style={{ color: '#1C1C1C' }}>Stap {i + 1}:</strong> {stap}
            </li>
          ))}
        </ol>
      </div>

      {/* Deal details */}
      <div style={{ background: 'white', border: '1.5px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 32 }}>
        <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 800, marginBottom: 12, color: '#1C1C1C' }}>Voorwaarden</h3>
        <ul style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            'Geldig voor nieuwe Factor-klanten',
            '40% korting op je eerste box',
            '25% korting op elk van de volgende vijf boxen',
            'Korting automatisch toegepast via de link — code BESTE40 ook handmatig mogelijk',
            'Flexibel abonnement — wekelijks aanpasbaar of te pauzeren',
            'Bezorging in heel België (bezorgkosten €6)',
          ].map((v, i) => (
            <li key={i} style={{ fontSize: 14, color: '#4B5563' }}>✓ {v}</li>
          ))}
        </ul>
      </div>

      {/* Over Factor */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, color: '#1C1C1C' }}>
          Waarom Factor?
        </h2>
        <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 12 }}>
          Factor (van de HelloFresh Group) is geen klassieke kookbox — het zijn kant-en-klare chef-maaltijden die je in 2–3 minuten opwarmt in de magnetron. Met 18 gerechten per week en 5 dieetstijlen (waaronder High-Protein en Calorie-Conscious) is Factor ideaal voor drukke professionals en sporters die gezond willen eten zonder kooktijd. Bezorging elke week op zondag of maandag in heel België.
        </p>
        <Link href="/aanbieder/factor" style={{ fontSize: 14, fontWeight: 700, color: '#7C3AED', textDecoration: 'underline' }}>
          Lees onze volledige Factor review →
        </Link>
      </div>

      <Link href="/kortingscodes" style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none' }}>
        ← Alle kortingscodes bekijken
      </Link>
    </div>
  );
}
