import Link from 'next/link';

export const metadata = {
  title: 'Over Ons — BesteMaaltijdbox.be',
  description: 'Wie zit er achter BesteMaaltijdbox.be? Ontdek hoe we alle Belgische maaltijdboxen uitgebreid onderzochten op basis van gebruikerservaringen, publieke data en eigen analyse.',
};

export default function OverOnsPage() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 20px 64px' }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
        <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
        {' → '}
        <strong style={{ color: 'var(--ink)' }}>Over ons</strong>
      </div>

      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--mint)', marginBottom: 12 }}>ONS VERHAAL</div>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 42, fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
          Waarom BesteMaaltijdbox.be?
        </h1>
        <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #1B4332, var(--mint))', borderRadius: 2, marginBottom: 24 }} />
      </div>

      {/* Verhaal */}
      <div style={{ background: 'white', borderRadius: 16, padding: 32, border: '1px solid var(--rule)', marginBottom: 24 }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>👫</div>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Hoe het begon</h2>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 16 }}>
          BesteMaaltijdbox.be is ontstaan uit een heel simpele vraag: <em>"Welke maaltijdbox is nu eigenlijk de beste voor Belgische gezinnen en koppels?"</em>
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 16 }}>
          Online vonden we vooral vage artikels die niet echt antwoord gaven op de praktische vragen. Wat kost het écht per maand? Kan je makkelijk opzeggen? Is het de moeite voor 2 personen?
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151' }}>
          We besloten het grondig uit te zoeken. We analyseerden alle populaire maaltijdboxen in België — van HelloFresh en Foodbag tot Marley Spoon en kleinere Belgische spelers — op basis van gebruikerservaringen, publieke data, officiële productinformatie en regelmatige vergelijkingen. Het resultaat: een eerlijk, onafhankelijk overzicht dat we regelmatig bijwerken.
        </p>
      </div>

      <div style={{ background: 'white', borderRadius: 16, padding: 32, border: '1px solid var(--rule)', marginBottom: 24 }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>🧪</div>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Hoe we onderzoeken</h2>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 16 }}>
          We beoordelen elke maaltijdbox op 5 criteria: smaak, prijs-kwaliteitsverhouding, flexibiliteit, duurzaamheid en gemak. Onze scores zijn gebaseerd op gebruikerservaringen, publieke reviewdata en officiële productinformatie — en worden regelmatig bijgewerkt.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 16 }}>
          {[
            { icon: '🍽️', titel: 'Smaak', desc: 'Gebaseerd op gebruikerservaringen en reviews' },
            { icon: '💰', titel: 'Prijs-kwaliteit', desc: 'Eerlijke vergelijking van de totale kost' },
            { icon: '🔄', titel: 'Flexibiliteit', desc: 'Hoe makkelijk kan je opzeggen of pauzeren?' },
            { icon: '🌱', titel: 'Duurzaamheid', desc: 'Lokale ingrediënten en verpakking' },
            { icon: '⚡', titel: 'Gemak', desc: 'Bereidingstijd en gebruiksgemak' },
            { icon: '🚚', titel: 'Bezorging', desc: 'Betrouwbaarheid en flexibiliteit van levering' },
          ].map(({ icon, titel, desc }) => (
            <div key={titel} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: 12, background: 'var(--cream)', borderRadius: 10 }}>
              <div style={{ fontSize: 20, flexShrink: 0 }}>{icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{titel}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'white', borderRadius: 16, padding: 32, border: '1px solid var(--rule)', marginBottom: 24 }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>🤝</div>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Onze belofte</h2>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 16 }}>
          BesteMaaltijdbox.be is 100% onafhankelijk. Geen enkele aanbieder betaalt ons om hoger te staan in onze rankings. We verdienen een kleine commissie als je via onze links een abonnement afsluit — maar dit heeft <strong>geen invloed op onze scores of aanbevelingen</strong>.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: '#374151' }}>
          Als een aanbieder slecht scoort bij ons, zeggen we dat gewoon. Onze rankings zijn gebaseerd op eerlijk, onafhankelijk onderzoek — niet op wie het meest betaalt.
        </p>
      </div>

      {/* Contact */}
      <div style={{ background: '#E8F5EE', borderRadius: 16, padding: 28, border: '1px solid #A7DFC0', marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, color: '#1B4332' }}>Contact</h2>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: '#166534', marginBottom: 8 }}>
          Heb je een vraag, opmerking of wil je samenwerken? Stuur ons een mail via:
        </p>
        <div style={{ fontWeight: 700, fontSize: 15, color: '#1B4332' }}>info@bestemaaltijdbox.be</div>
        <p style={{ fontSize: 12, color: '#166534', marginTop: 8 }}>
          We proberen binnen 2 werkdagen te antwoorden.
        </p>
      </div>

      <Link href="/" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>← Terug naar de vergelijking</Link>
    </div>
  );
}
