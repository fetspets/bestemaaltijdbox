import Link from 'next/link';

export default function FoodbagKortingscode() {
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px 64px' }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 28 }}>
        <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Home</Link>
        {' → '}
        <Link href="/kortingscodes" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Kortingscodes</Link>
        {' → '}
        <strong style={{ color: '#1C1C1C' }}>Foodbag kortingscode</strong>
      </div>

      {/* Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
        ✓ Gecontroleerd geldig t.e.m. 01/01/2027
      </div>

      {/* H1 */}
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 900, color: '#1C1C1C', lineHeight: 1.15, marginBottom: 12 }}>
        Foodbag kortingscode 2026 — €60 korting op je eerste 3 bestellingen
      </h1>

      <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.7, marginBottom: 32 }}>
        Met de Foodbag welkomstdeal krijg je 3x €20 korting op je eerste drie bestellingen. Totale besparing: <strong>€60</strong>. Exclusief voor nieuwe klanten — de korting wordt <strong>automatisch toegepast via onze link</strong>, je hoeft geen code in te voeren.
      </p>

      {/* Deal highlight */}
      <div style={{ background: '#EFF6FF', border: '2px solid #BFDBFE', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#1E40AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Jouw voordeel</div>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 900, color: '#1E40AF', marginBottom: 8 }}>
          €60 korting
        </div>
        <div style={{ fontSize: 14, color: '#4B5563' }}>3x €20 over je eerste 3 bestellingen — geen code nodig</div>
      </div>

      {/* CTA */}
      <Link
        href="/ga/foodbag"
        rel="noopener sponsored nofollow"
        style={{ display: 'block', background: '#1E40AF', color: 'white', textAlign: 'center', padding: '16px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginBottom: 32 }}
      >
        Activeer €60 korting bij Foodbag →
      </Link>

      {/* Stappenplan */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, color: '#1C1C1C' }}>
          Hoe activeer je de korting?
        </h2>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Klik op "Activeer €60 korting bij Foodbag" hierboven',
            'Je gaat via onze link naar Foodbag en maakt een account aan',
            'De korting staat al klaar — je hoeft geen code in te voeren',
            'De €20 korting wordt automatisch toegepast op je eerste 3 bestellingen',
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
            'Geldig voor nieuwe Foodbag-klanten',
            '3x €20 korting verspreid over de eerste 3 bestellingen',
            'Geldig t.e.m. 01/01/2027',
            'Niet combineerbaar met andere acties',
            'Bezorging gratis in heel België',
          ].map((v, i) => (
            <li key={i} style={{ fontSize: 14, color: '#4B5563' }}>✓ {v}</li>
          ))}
        </ul>
      </div>

      {/* Over Foodbag */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, color: '#1C1C1C' }}>
          Waarom Foodbag?
        </h2>
        <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 12 }}>
          Foodbag is een 100% Belgische maaltijdbox met lokale ingrediënten van Belgische boerderijen. Eigendom van Colruyt Group. Met 20+ recepten per week, 5 kookstijlen en gratis bezorging in heel België is het een van de meest populaire keuzes voor Belgische gezinnen en koppels.
        </p>
        <Link href="/aanbieder/foodbag" style={{ fontSize: 14, fontWeight: 700, color: '#1B4332', textDecoration: 'underline' }}>
          Lees onze volledige Foodbag review →
        </Link>
      </div>

      <Link href="/kortingscodes" style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none' }}>
        ← Alle kortingscodes bekijken
      </Link>
    </div>
  );
}
