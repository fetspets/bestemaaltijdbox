import Link from 'next/link';

export default function FoodprepperKortingscode() {
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px 64px' }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 28 }}>
        <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Home</Link>
        {' → '}
        <Link href="/kortingscodes" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Kortingscodes</Link>
        {' → '}
        <strong style={{ color: '#1C1C1C' }}>Foodprepper kortingscode</strong>
      </div>

      {/* Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
        ✓ Gecontroleerd geldig t.e.m. 01/01/2027
      </div>

      {/* H1 */}
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 900, color: '#1C1C1C', lineHeight: 1.15, marginBottom: 12 }}>
        Foodprepper kortingscode – bespaar tot €45 op je eerste bestellingen
      </h1>

      <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.7, marginBottom: 32 }}>
        Met de Foodprepper kortingscode <strong>FOODPREPX45</strong> krijg je 3x €15 korting op je eerste drie bestellingen. Totale besparing: <strong>€45</strong>. Exclusief voor nieuwe klanten.
      </p>

      {/* Code box */}
      <div style={{ background: '#FFF7ED', border: '2px dashed #FED7AA', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Jouw kortingscode</div>
        <div style={{ fontFamily: 'monospace', fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 900, color: '#EA580C', letterSpacing: '0.05em', marginBottom: 16 }}>
          FOODPREPX45
        </div>
        <button
          onClick={handleCopy}
          style={{
            padding: '12px 32px', borderRadius: 10, cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 14,
            background: copied ? '#F0FDF4' : 'white',
            color: copied ? '#16A34A' : '#EA580C',
            border: copied ? '2px solid #86EFAC' : '2px solid #FED7AA',
            transition: 'all 0.2s',
          }}
        >
          {copied ? '✓ Gekopieerd!' : '📋 Kopieer code'}
        </button>
        <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 12 }}>
          Geldig voor nieuwe klanten. Controleer geldigheid op foodprepper.be.
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/ga/foodprepper"
        style={{ display: 'block', background: '#EA580C', color: 'white', textAlign: 'center', padding: '16px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginBottom: 32 }}
      >
        €15 korting op de eerste 3 bestellingen →
      </Link>

      {/* Stappenplan */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, color: '#1C1C1C' }}>
          Hoe gebruik je de kortingscode?
        </h2>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Ga naar foodprepper.be via de knop hierboven',
            'Stel je weekmenu samen',
            'Vul FOODPREPX45 in bij het afrekenen',
            'Geniet van €15 korting — geldt voor je eerste 3 bestellingen',
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
            'Geldig voor nieuwe Foodprepper-klanten',
            '3x €15 korting verspreid over de eerste 3 bestellingen',
            'Geldig t.e.m. 01/01/2027',
            'Niet combineerbaar met andere acties',
            'Geen verplicht abonnement — bestel wanneer je wil',
            'Gratis levering in Vlaanderen en Brussel',
          ].map((v, i) => (
            <li key={i} style={{ fontSize: 14, color: '#4B5563' }}>✓ {v}</li>
          ))}
        </ul>
      </div>

      {/* Over Foodprepper */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, color: '#1C1C1C' }}>
          Wat is Foodprepper?
        </h2>
        <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 12 }}>
          Foodprepper is de snelste maaltijdbox van België — maaltijden staan in 15 minuten op tafel dankzij voorgesneden en voorbereide ingrediënten. Ideaal voor drukke avonden en gezinnen die weinig tijd hebben om uitgebreid te koken.
        </p>
        <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 12 }}>
          De box wordt bezorgd met gratis levering, werkt zonder verplicht abonnement en gebruikt Belgische ingrediënten. Je kiest zelf wanneer je bestelt — wekelijks of eenmalig.
        </p>
        <Link href="/aanbieder/foodprepper" style={{ fontSize: 14, fontWeight: 700, color: '#EA580C', textDecoration: 'underline' }}>
          Lees onze volledige Foodprepper review →
        </Link>
      </div>

      <Link href="/kortingscodes" style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none' }}>
        ← Alle kortingscodes bekijken
      </Link>
    </div>
  );
}
