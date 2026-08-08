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
        Met de exclusieve Factor welkomstdeal bespaar je <strong>40% op je eerste box</strong> en nog eens <strong>25% op elk van de volgende vijf boxen</strong>. Geldig voor nieuwe klanten — de korting wordt <strong>automatisch toegepast via onze link</strong>, je hoeft geen code in te voeren.
      </p>

      {/* Deal highlight */}
      <div style={{ background: '#F5F3FF', border: '2px solid #C4B5FD', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Jouw voordeel</div>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 900, color: '#7C3AED', marginBottom: 8 }}>
          40% + 25%
        </div>
        <div style={{ fontSize: 14, color: '#4B5563' }}>40% op je eerste box + 25% op de volgende vijf — geen code nodig</div>
      </div>

      {/* CTA */}
      <Link
        href="/ga/factor"
        rel="noopener sponsored nofollow"
        style={{ display: 'block', background: '#7C3AED', color: 'white', textAlign: 'center', padding: '16px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginBottom: 32 }}
      >
        Activeer 40% korting bij Factor →
      </Link>

      {/* Stappenplan */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, color: '#1C1C1C' }}>
          Hoe activeer je de korting?
        </h2>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Klik op "Activeer 40% korting bij Factor" hierboven',
            'Je gaat via onze link naar Factor en maakt een account aan',
            'De korting staat al klaar — je hoeft geen code in te voeren',
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
