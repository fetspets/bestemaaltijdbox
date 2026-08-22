import Link from '@/components/TaalLink';

export default function CrowdCooksKortingscode() {
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px 64px' }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 28 }}>
        <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Home</Link>
        {' → '}
        <Link href="/kortingscodes" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Kortingscodes</Link>
        {' → '}
        <strong style={{ color: '#1C1C1C' }}>Crowd Cooks kortingscode</strong>
      </div>

      {/* Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
        ✓ Gecontroleerd geldig 2026
      </div>

      {/* H1 */}
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 900, color: '#1C1C1C', lineHeight: 1.15, marginBottom: 12 }}>
        Crowd Cooks kortingscode 2026 — tot €60 welkomstkorting
      </h1>

      <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.7, marginBottom: 32 }}>
        Met de Crowd Cooks welkomstdeal krijg je <strong>€20 korting in je eerste week</strong> en daarna <strong>€10 korting per week gedurende 4 weken</strong> — samen tot <strong>€60 voordeel</strong>. Geldig voor nieuwe klanten — de korting wordt <strong>automatisch toegepast via onze link</strong>, je hoeft geen code in te voeren.
      </p>

      {/* Deal highlight */}
      <div style={{ background: '#E8F5EE', border: '2px solid #A7DFC0', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#1B4332', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Jouw voordeel</div>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 900, color: '#1B4332', marginBottom: 8 }}>
          tot €60 korting
        </div>
        <div style={{ fontSize: 14, color: '#4B5563' }}>€20 in week 1 + 4× €10 — geen code nodig</div>
      </div>

      {/* CTA */}
      <Link
        href="/ga/crowd-cooks"
        rel="noopener sponsored nofollow"
        style={{ display: 'block', background: '#1B4332', color: 'white', textAlign: 'center', padding: '16px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginBottom: 32 }}
      >
        Activeer tot €60 korting bij Crowd Cooks →
      </Link>

      {/* Stappenplan */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, color: '#1C1C1C' }}>
          Hoe activeer je de korting?
        </h2>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Klik op "Activeer tot €60 korting bij Crowd Cooks" hierboven',
            'Je gaat via onze link naar Crowd Cooks en maakt een account aan',
            'De korting staat al klaar — je hoeft geen code in te voeren',
            'Geniet van €20 korting in week 1 en €10 korting per week gedurende 4 weken (tot €60 totaal)',
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
            'Geldig voor nieuwe Crowd Cooks-klanten',
            '€20 korting op je eerste week',
            '€10 korting per week gedurende 4 weken',
            'Totale besparing tot €60',
            'Automatisch toegepast via onze link — geen code nodig',
            'Bezorging €4,90 op zondag of maandag in België',
          ].map((v, i) => (
            <li key={i} style={{ fontSize: 14, color: '#4B5563' }}>✓ {v}</li>
          ))}
        </ul>
      </div>

      {/* Over Crowd Cooks */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, color: '#1C1C1C' }}>
          Waarom Crowd Cooks?
        </h2>
        <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 12 }}>
          Crowd Cooks is een Belgische kant-en-klare maaltijdservice — geen kookbox, maar verse maaltijden bereid door chefs die je in een paar minuten opwarmt. Elke week kies je uit 12 nieuwe gerechten met royale porties van 450+ gram, 5 dagen houdbaar in de koelkast. De bezorging (€4,90) gebeurt op zondag of maandag en het abonnement is flexibel: pauzeren of annuleren kan met één klik. Ideaal voor drukke professionals, singles en koppels die gezond willen eten zonder kooktijd.
        </p>
        <Link href="/aanbieder/crowd-cooks" style={{ fontSize: 14, fontWeight: 700, color: '#1B4332', textDecoration: 'underline' }}>
          Lees onze volledige Crowd Cooks review →
        </Link>
      </div>

      <Link href="/kortingscodes" style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none' }}>
        ← Alle kortingscodes bekijken
      </Link>
    </div>
  );
}
