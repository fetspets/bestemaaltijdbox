import Link from 'next/link';

export const metadata = {
  title: 'Kortingscodes Maaltijdbox België 2026 — Bespaar op je eerste box',
  description: 'Alle actieve kortingscodes voor maaltijdboxen in België. Bespaar op HelloFresh, Foodbag, Marley Spoon en meer. Bijgewerkt april 2026.',
};

const kortingen = [
  {
    slug: 'hellofresh',
    naam: 'HelloFresh',
    logo: '🌿',
    code: null,
    deal: 'Tot €60 korting verspreid over de eerste 3 boxen',
    bedrag: 'Tot €60',
    kleur: '#1B4332',
    beschrijving: 'Geen kortingscode nodig — de korting wordt automatisch toegepast wanneer je via onze link bestelt. Verspreid als: tot €37 op box 1, tot €12 op box 2, tot €5 op box 3. Vervalt 70 dagen na eerste bestelling.',
    voorwaarden: 'Geldig voor nieuwe klanten · Geen code vereist · Eerste 3 boxen · Direct opzegbaar',
    actief: true,
  },
  {
    slug: 'marley-spoon',
    naam: 'Marley Spoon',
    logo: '🌍',
    code: null,
    deal: 'Tot 35% korting verspreid over de eerste 5 boxen',
    bedrag: 'Tot 35%',
    kleur: '#7C3AED',
    beschrijving: 'Geen kortingscode nodig — korting wordt automatisch toegepast via onze link. Verspreid als: 35% + gratis verzending op box 1, 30% op box 2, 10% op box 3, 10% op box 4, 20% op box 5.',
    voorwaarden: 'Geldig voor nieuwe klanten · Geen code vereist · Eerste 5 boxen · Direct opzegbaar',
    actief: true,
  },
  {
    slug: 'foodbag',
    naam: 'Foodbag',
    logo: '🥦',
    code: 'FOODBAGx60',
    deal: '3x €20 korting op je eerste 3 bestellingen',
    bedrag: '€60 totaal',
    kleur: '#1E40AF',
    beschrijving: 'Gebruik code FOODBAGx60 bij je eerste bestelling en krijg 3x €20 korting verspreid over je eerste 3 Foodbag-bestellingen. Totale besparing: €60.',
    voorwaarden: 'Geldig voor nieuwe klanten · Code: FOODBAGx60 · Geldig t.e.m. 01/01/2027 · 3x €20 op de eerste 3 bestellingen',
    actief: true,
  },
  {
    slug: 'factor',
    naam: 'Factor',
    logo: '⚡',
    code: null,
    deal: 'Bekijk de huidige welkomstdeal',
    bedrag: 'Deal',
    kleur: '#7C3AED',
    beschrijving: 'Momenteel geen actieve kortingscode. Bekijk factormeals.be voor de huidige welkomstaanbieding voor nieuwe klanten.',
    voorwaarden: 'Bekijk website voor actuele aanbieding',
    actief: false,
  },
  {
    slug: 'foodmaker',
    naam: 'Foodmaker',
    logo: '👨‍🍳',
    code: null,
    deal: 'Bekijk de huidige welkomstdeal',
    bedrag: 'Deal',
    kleur: '#1B4332',
    beschrijving: 'Momenteel geen actieve kortingscode. Bekijk foodmaker.be voor de huidige welkomstaanbieding.',
    voorwaarden: 'Bekijk website voor actuele aanbieding',
    actief: false,
  },
  {
    slug: 'ekomenu',
    naam: 'Ekomenu',
    logo: '🌱',
    code: null,
    deal: 'Bekijk de huidige welkomstdeal',
    bedrag: 'Deal',
    kleur: '#166534',
    beschrijving: 'Momenteel geen actieve kortingscode. Bekijk de website voor de huidige welkomstaanbieding.',
    voorwaarden: 'Bekijk website voor actuele aanbieding',
    actief: false,
  },
  {
    slug: 'carrefour-simply-you',
    naam: 'Carrefour Simply You',
    logo: '🏪',
    code: 'BOXNL20',
    deal: '€20 korting op je eerste box',
    bedrag: '€20 korting',
    kleur: '#1B4332',
    beschrijving: 'Gebruik code BOXNL20 bij je eerste bestelling op carrefour.be. Geen abonnement nodig, bezorging in heel België inclusief Wallonië.',
    voorwaarden: 'Geldig voor nieuwe klanten · Code BOXNL20 · Geen abonnement vereist',
    actief: true,
  },
];

export default function KortingscodesPagina() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px 64px' }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
        <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
        {' → '}
        <strong style={{ color: 'var(--ink)' }}>Kortingscodes</strong>
      </div>

      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
          🏷️ Bijgewerkt april 2026
        </div>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 42, fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
          Kortingscodes maaltijdbox<br />België 2026
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563', maxWidth: 600 }}>
          Alle actieve kortingscodes en welkomstdeals voor maaltijdboxen in België. We houden deze pagina maandelijks bij zodat je altijd de beste deal krijgt.
        </p>
      </div>

      {/* Actieve deals eerst */}
      <div style={{ marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900 }}>Actieve deals</h2>
        <div style={{ fontSize: 13, color: 'var(--muted)' }}>Bijgewerkt april 2026</div>
      </div>

      {kortingen.filter(k => k.actief).map((k, i) => (
        <div key={k.slug} style={{
          background: 'white', borderRadius: 16, border: '1.5px solid var(--rule)',
          padding: 24, marginBottom: 12, display: 'grid',
          gridTemplateColumns: '48px 1fr auto', gap: 20, alignItems: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          {i === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1B4332, var(--mint))' }} />}
          <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--cream)', border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{k.logo}</div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 700 }}>{k.naam}</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332' }}>✓ Actief</span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: k.kleur, marginBottom: 4 }}>{k.deal}</div>
            <div style={{ fontSize: 13, color: '#4B5563', marginBottom: 4 }}>{k.beschrijving}</div>
            <div style={{ fontSize: 11, color: 'var(--muted)' }}>{k.voorwaarden}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 150 }}>
            <div style={{ textAlign: 'center', padding: '10px', background: 'var(--cream)', borderRadius: 10, fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, color: k.kleur }}>
              {k.bedrag}
            </div>
            <Link href={`/ga/${k.slug}`} style={{ display: 'block', background: k.kleur, color: 'white', textAlign: 'center', padding: '11px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
              Activeer deal →
            </Link>
          </div>
        </div>
      ))}

      {/* Geen actieve code */}
      <div style={{ marginTop: 40, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--rule)' }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, color: 'var(--muted)' }}>Geen actieve kortingscode</h2>
      </div>

      {kortingen.filter(k => !k.actief).map(k => (
        <div key={k.slug} style={{
          background: '#F9F9F9', borderRadius: 12, border: '1px solid var(--rule)',
          padding: 20, marginBottom: 10, display: 'grid',
          gridTemplateColumns: '40px 1fr auto', gap: 16, alignItems: 'center', opacity: 0.8,
        }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'white', border: '1px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{k.logo}</div>
          <div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, marginBottom: 2 }}>{k.naam}</div>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>{k.beschrijving}</div>
          </div>
          <Link href={`/aanbieder/${k.slug}`} style={{ fontSize: 13, fontWeight: 700, color: '#1B4332', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Bekijk review →
          </Link>
        </div>
      ))}

      {/* Info box */}
      <div style={{ marginTop: 48, background: 'white', borderRadius: 16, padding: 28, border: '1px solid var(--rule)' }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12 }}>Hoe gebruik je een kortingscode?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { num: '1', titel: 'Klik op "Activeer deal"', desc: 'Klik op de knop naast de maaltijdbox van je keuze. Je wordt doorgestuurd naar de website.' },
            { num: '2', titel: 'Kies je box', desc: 'Selecteer het aantal personen en maaltijden per week dat je wil ontvangen.' },
            { num: '3', titel: 'Korting wordt toegepast', desc: 'De welkomstkorting wordt automatisch toegepast bij het afrekenen. Geen code nodig.' },
            { num: '4', titel: 'Direct opzegbaar', desc: 'Je zit nergens aan vast. De meeste aanbieders laat je wekelijks opzeggen of pauzeren.' },
          ].map(({ num, titel, desc }) => (
            <div key={num} style={{ display: 'flex', gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#1B4332', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{num}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{titel}</div>
                <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <Link href="/" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>← Terug naar alle maaltijdboxen</Link>
      </div>
    </div>
  );
}
