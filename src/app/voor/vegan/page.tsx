import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beste vegan maaltijdbox België 2026 — eerlijk vergeleken',
  description: 'Op zoek naar een vegan maaltijdbox in België? Vergelijk Ekomenu (100% vegan & bio) met HelloFresh, Foodbag en Marley Spoon. Eerlijk, zonder testclaims.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/voor/vegan' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een vegan maaltijdbox en een vegetarische maaltijdbox?',
      acceptedAnswer: { '@type': 'Answer', text: 'Een vegan maaltijdbox bevat geen enkele dierlijke producten — geen vlees, vis, eieren of zuivel. Een vegetarische maaltijdbox sluit vlees en vis uit, maar kan nog wel eieren, kaas of melk bevatten. In België is Ekomenu de enige aanbieder met een volledig vegan en biologisch aanbod. HelloFresh, Foodbag en Marley Spoon bieden vegetarische receptopties maar zijn geen vegan boxen.' },
    },
    {
      '@type': 'Question',
      name: 'Bestaat er een 100% vegan maaltijdbox in België?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Ekomenu is de enige aanbieder in België met een volledig plantaardig en biologisch aanbod. Alle ingrediënten zijn 100% bio-gecertificeerd en er worden geen dierlijke producten gebruikt. De andere aanbieders — HelloFresh, Foodbag en Marley Spoon — hebben vegetarische recepten in hun assortiment, maar zijn geen exclusief vegan boxen.' },
    },
    {
      '@type': 'Question',
      name: 'Is een vegan maaltijdbox duurder dan een gewone maaltijdbox?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ekomenu kost €6,18 per portie — iets meer dan HelloFresh (€5,50) of Marley Spoon (€5,59). Het hogere tarief weerspiegelt het 100% biologische aanbod. Foodbag is met €9,50 per portie de duurste optie. Als je vegan wil eten via een andere aanbieder zoals HelloFresh, betaal je de reguliere prijs maar heb je een beperktere keuze aan vegan-geschikte recepten.' },
    },
  ],
};

const top4 = [
  {
    slug: 'ekomenu',
    naam: 'Ekomenu',
    logo: '/logos/ekomenu.png',
    score: 7.6,
    prijsPortie: '€6,18',
    weekprijs: '€37,08',
    recepten: '20–25',
    bezorging: 'Gratis',
    badge: '🌱 100% Vegan & Bio',
    badgeColor: '#E8F5EE',
    badgeText: '#1B4332',
    accent: '#1B4332',
    tagline: 'Enige 100% vegan en biologische maaltijdbox in België',
    waarom: 'Ekomenu is de enige aanbieder in België die volledig vegan én 100% biologisch is. Alle ingrediënten komen van gecertificeerde biologische boerderijen — geen dierlijke producten, geen pesticiden. Voor wie echt vegan wil eten zonder compromissen is dit de logische keuze. Er is geen actieve kortingscode, maar op hun site staat vaak een welkomstaanbieding voor nieuwe klanten.',
    isVegan100: true,
    deal: 'Welkomstaanbieding beschikbaar op hun site — check ekomenu.be voor de actuele actie',
    dealColor: '#1B4332',
  },
  {
    slug: 'hellofresh',
    naam: 'HelloFresh',
    logo: '/logos/hellofresh.png',
    score: 8.4,
    prijsPortie: '€5,50',
    weekprijs: '€33,00',
    recepten: '40+',
    bezorging: 'Gratis',
    badge: '⭐ Hoogste score',
    badgeColor: '#DBEAFE',
    badgeText: '#1E40AF',
    accent: '#1E40AF',
    tagline: 'Vegetarische receptopties — niet 100% vegan',
    waarom: 'HelloFresh heeft wekelijks een selectie vegetarische recepten in zijn aanbod van 40+ maaltijden. Handig als je af en toe vegan of vegetarisch wil koken maar niet elke dag. Let op: HelloFresh is geen vegan box — de meeste recepten bevatten vlees of vis. Je kiest zelf welke recepten je wil, maar het assortiment is niet uitsluitend plantaardig.',
    isVegan100: false,
    deal: 'Tot €60 korting automatisch via link — geen code nodig',
    dealColor: '#1E40AF',
  },
  {
    slug: 'foodbag',
    naam: 'Foodbag',
    logo: '/logos/foodbag.png',
    score: 8.1,
    prijsPortie: '€9,50',
    weekprijs: '€57,00',
    recepten: '40+',
    bezorging: 'Gratis',
    badge: '🇧🇪 Belgisch',
    badgeColor: '#FEF9C3',
    badgeText: '#854D0E',
    accent: '#854D0E',
    tagline: '"Veggie" als één van 5 kookstijlen — niet 100% vegan',
    waarom: 'Foodbag biedt 5 kookstijlen waaronder een "veggie"-lijn. Die lijn bevat plantaardige en vegetarische maaltijden, maar Foodbag is geen vegan box — de andere kookstijlen bevatten vlees en vis. Als je bewust Belgisch én veggie wil eten, is de Foodbag veggie-lijn een optie. Wel de duurste aanbieder in dit overzicht.',
    isVegan100: false,
    deal: '€60 korting — gebruik code FOODBAGx60 bij afrekenen (3× €20)',
    dealColor: '#854D0E',
  },
  {
    slug: 'marley-spoon',
    naam: 'Marley Spoon',
    logo: '/logos/marley-spoon.png',
    score: 7.9,
    prijsPortie: '€5,59',
    weekprijs: '€33,54',
    recepten: '40+',
    bezorging: 'Gratis',
    badge: '👨‍🍳 Chef-recepten',
    badgeColor: '#F3E8FF',
    badgeText: '#7C3AED',
    accent: '#7C3AED',
    tagline: 'Vegetarische opties beschikbaar — niet 100% vegan',
    waarom: 'Marley Spoon heeft vegetarische recepten in zijn weekmenu, maar is geen vegan box. De recepten zijn kwalitatief en uitgebreider dan bij andere aanbieders — meer technieken, mooiere presentatie. Als je ocasioneel vegetarisch wil koken en houdt van iets meer culinaire uitdaging, is dit een optie. Let op: enkel bezorging in Vlaanderen en Brussel.',
    isVegan100: false,
    deal: 'Tot 35% korting automatisch via link — geldig op eerste 5 boxen',
    dealColor: '#7C3AED',
  },
];

export default function VeganPage() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>
        <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
        {' → '}
        <Link href="/voor" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Voor wie</Link>
        {' → '}
        <strong style={{ color: 'var(--ink)' }}>Vegan</strong>
      </div>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>🌱</div>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 6vw, 42px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
          Beste vegan maaltijdbox België 2026 — eerlijk vergeleken
        </h1>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 680, marginBottom: 20 }}>
          Plantaardig eten groeit snel in België — maar welke maaltijdbox past écht bij een vegan leefstijl?
        </p>
        <div style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)', maxWidth: 680 }}>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', margin: 0 }}>
            Steeds meer Belgen kiezen voor een plantaardig dieet — uit gezondheidsoverwegingen, duurzaamheid of ethische keuzes. Maaltijdboxen kunnen daarbij helpen: minder plannen, minder voedselverspilling, meer variatie. Maar niet elke aanbieder is geschikt voor vegans. In dit overzicht vergelijken we de 4 relevante aanbieders in België — eerlijk, zonder overdreven claims. Ekomenu is de enige 100% vegan box. De anderen hebben vegetarische opties, maar zijn geen vegan boxen.
          </p>
        </div>
      </div>

      {/* Belangrijk onderscheid */}
      <div style={{ background: '#FEF3C7', border: '1px solid #FCD34D', borderRadius: 12, padding: 20, marginBottom: 36 }}>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>
          ⚠️ Belangrijk onderscheid: 100% vegan vs. vegan opties
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: '#374151', margin: 0 }}>
          <strong>100% vegan box:</strong> Ekomenu levert uitsluitend plantaardige, biologische maaltijden. Geen vlees, geen vis, geen zuivel, geen eieren — nooit.<br />
          <strong>Aanbieders met vegan/vegetarische opties:</strong> HelloFresh, Foodbag en Marley Spoon zijn <em>geen</em> vegan boxen. Ze hebben vegetarische recepten in hun assortiment, maar hun standaardaanbod bevat vlees en vis. Je kan bij deze aanbieders kiezen voor vegetarische maaltijden, maar dat vraagt actieve selectie elke week — en volledig vegan is niet altijd gegarandeerd.
        </p>
      </div>

      {/* Top 4 uitgewerkt */}
      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
          Top 4 aanbieders voor vegan eters
        </h2>
        {top4.map((a, i) => (
          <div key={a.slug} style={{
            background: 'white', borderRadius: 16, marginBottom: 14,
            border: i === 0 ? '1.5px solid var(--mint)' : '1.5px solid var(--rule)',
            padding: 20, position: 'relative', overflow: 'hidden',
          }}>
            {i === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1B4332, var(--mint))' }} />}

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--cream)', border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 2 }}>
                  <span style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 700 }}>{a.naam}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: a.badgeColor, color: a.badgeText }}>{a.badge}</span>
                  {!a.isVegan100 && (
                    <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: '#FEF3C7', color: '#92400E' }}>⚠️ Niet 100% vegan</span>
                  )}
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>{a.tagline}</div>
              </div>
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 32, fontWeight: 900, color: '#1B4332', lineHeight: 1 }}>{a.score.toFixed(1)}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>/10</div>
              </div>
            </div>

            <p style={{ fontSize: 14, lineHeight: 1.6, color: '#4B5563', marginBottom: 14 }}>{a.waarom}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '1px solid var(--rule)', borderRadius: 10, overflow: 'hidden', fontSize: 12, marginBottom: 14 }}>
              {[
                { val: a.prijsPortie, key: 'Per portie' },
                { val: a.weekprijs, key: 'Per week (2p, 3×)' },
                { val: a.recepten, key: 'Recepten/week' },
                { val: a.bezorging, key: 'Bezorging' },
              ].map(({ val, key }, idx, arr) => (
                <div key={key} style={{ padding: '8px 6px', borderRight: idx < arr.length - 1 ? '1px solid var(--rule)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{val}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 1 }}>{key}</div>
                </div>
              ))}
            </div>

            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '8px 12px', fontSize: 13, color: '#15803D', marginBottom: 12, fontWeight: 600 }}>
              🏷️ {a.deal}
            </div>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Link href={`/ga/${a.slug}`} style={{ flex: 1, minWidth: 160, display: 'block', background: a.accent, color: 'white', textAlign: 'center', padding: '12px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                Bekijk aanbieder →
              </Link>
              <Link href={`/aanbieder/${a.slug}`} style={{ flex: 1, minWidth: 160, display: 'block', border: '1.5px solid var(--rule)', textAlign: 'center', padding: '10px', borderRadius: 10, fontWeight: 600, fontSize: 13, textDecoration: 'none', color: 'var(--ink)' }}>
                Lees volledige review
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Vergelijkingstabel */}
      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
          Vergelijkingstabel: 4 aanbieders voor vegan eters
        </h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, background: 'white', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--rule)' }}>
            <thead>
              <tr style={{ background: 'var(--cream)', borderBottom: '2px solid var(--rule)' }}>
                {['Aanbieder', '€/portie', 'Vegan aanbod', 'Score', 'Korting'].map((h) => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 700, whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { naam: 'Ekomenu', portie: '€6,18', vegan: '100% vegan & bio ✓', score: '7.6/10', korting: 'Welkomstaanbieding op site' },
                { naam: 'HelloFresh', portie: '€5,50', vegan: 'Vegetarische opties', score: '8.4/10', korting: 'Tot €60 (automatisch)' },
                { naam: 'Foodbag', portie: '€9,50', vegan: '"Veggie" kookstijl', score: '8.1/10', korting: '€60 — code FOODBAGx60' },
                { naam: 'Marley Spoon', portie: '€5,59', vegan: 'Vegetarische opties', score: '7.9/10', korting: 'Tot 35% (automatisch)' },
              ].map((r, i) => (
                <tr key={r.naam} style={{ borderBottom: '1px solid var(--rule)', background: i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 600 }}>{r.naam}</td>
                  <td style={{ padding: '10px 12px' }}>{r.portie}</td>
                  <td style={{ padding: '10px 12px', color: r.vegan.startsWith('100%') ? '#15803D' : '#374151', fontWeight: r.vegan.startsWith('100%') ? 700 : 400 }}>{r.vegan}</td>
                  <td style={{ padding: '10px 12px' }}>{r.score}</td>
                  <td style={{ padding: '10px 12px', color: '#15803D', fontWeight: 600 }}>{r.korting}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>Prijzen zijn richtprijzen — controleer de actuele tarieven op de site van de aanbieder.</p>
        </div>
      </div>

      {/* Voor wie is welke optie */}
      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
          Voor wie is welke optie?
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            {
              scenario: 'Je wil 100% vegan eten zonder compromissen',
              aanbeveling: 'Ekomenu',
              slug: 'ekomenu',
              uitleg: 'Ekomenu is de enige aanbieder in België die volledig vegan én biologisch is. Je hoeft niet te filteren of op te letten — het hele assortiment is plantaardig. Check hun site voor de actuele welkomstaanbieding.',
              color: '#E8F5EE',
              border: '#BBF7D0',
            },
            {
              scenario: 'Je wil af en toe vegan koken, niet elke dag',
              aanbeveling: 'HelloFresh',
              slug: 'hellofresh',
              uitleg: 'HelloFresh biedt 40+ recepten per week, waaronder vegetarische opties. Je kiest elke week zelf welke maaltijden je wil — zo eet je 2 of 3 keer per week plantaardig zonder vast te zitten aan een vegan box. Met tot €60 welkomstkorting ook de voordeligste instap.',
              color: '#DBEAFE',
              border: '#BFDBFE',
            },
            {
              scenario: 'Je wil Belgisch én veggie, en je budget is ruimer',
              aanbeveling: 'Foodbag',
              slug: 'foodbag',
              uitleg: 'Foodbag heeft een aparte "veggie"-kookstijl met Belgische ingrediënten van lokale boerderijen. De prijs is hoger (€9,50/portie), maar de versheid en lokale herkomst zijn merkbaar. Met code FOODBAGx60 krijg je €60 korting op je eerste bestellingen.',
              color: '#FEF3C7',
              border: '#FCD34D',
            },
          ].map(({ scenario, aanbeveling, slug, uitleg, color, border }) => (
            <div key={slug} style={{ background: color, border: `1px solid ${border}`, borderRadius: 12, padding: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: 4 }}>{scenario}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, marginBottom: 6 }}>→ {aanbeveling}</div>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: '#374151', margin: 0 }}>{uitleg}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
          Veelgestelde vragen over vegan maaltijdboxen
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { q: 'Wat is het verschil tussen een vegan maaltijdbox en een vegetarische maaltijdbox?', a: 'Een vegan maaltijdbox bevat geen enkele dierlijke producten — geen vlees, vis, eieren of zuivel. Een vegetarische maaltijdbox sluit vlees en vis uit, maar kan nog wel eieren, kaas of melk bevatten. In België is Ekomenu de enige aanbieder met een volledig vegan en biologisch aanbod. HelloFresh, Foodbag en Marley Spoon bieden vegetarische receptopties maar zijn geen vegan boxen.' },
            { q: 'Bestaat er een 100% vegan maaltijdbox in België?', a: 'Ja. Ekomenu is de enige aanbieder in België met een volledig plantaardig en biologisch aanbod. Alle ingrediënten zijn 100% bio-gecertificeerd en er worden geen dierlijke producten gebruikt. De andere aanbieders — HelloFresh, Foodbag en Marley Spoon — hebben vegetarische recepten in hun assortiment, maar zijn geen exclusief vegan boxen.' },
            { q: 'Is een vegan maaltijdbox duurder dan een gewone maaltijdbox?', a: 'Ekomenu kost €6,18 per portie — iets meer dan HelloFresh (€5,50) of Marley Spoon (€5,59). Het hogere tarief weerspiegelt het 100% biologische aanbod. Foodbag is met €9,50 per portie de duurste optie. Als je vegan wil eten via een andere aanbieder zoals HelloFresh, betaal je de reguliere prijs maar heb je een beperktere keuze aan vegan-geschikte recepten.' },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)' }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{q}</div>
              <div style={{ fontSize: 14, lineHeight: 1.7, color: '#4B5563' }}>{a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Afsluitende CTA */}
      <div style={{ background: '#1B4332', borderRadius: 16, padding: 28, textAlign: 'center', color: 'white' }}>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 900, marginBottom: 8 }}>
          Klaar om vegan te koken met een maaltijdbox?
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.85, maxWidth: 480, margin: '0 auto 20px' }}>
          Voor een echte vegan box kies je Ekomenu — de enige 100% plantaardige en biologische aanbieder in België. Check hun site voor de actuele welkomstaanbieding voor nieuwe klanten.
        </p>
        <Link href="/ga/ekomenu" style={{ display: 'inline-block', background: 'white', color: '#1B4332', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
          Bekijk Ekomenu →
        </Link>
        <div style={{ fontSize: 12, opacity: 0.6, marginTop: 10 }}>100% vegan · 100% biologisch · welkomstaanbieding beschikbaar</div>
      </div>

      {/* Andere categorieën */}
      <div style={{ background: 'white', borderRadius: 16, padding: 24, border: '1px solid var(--rule)', marginTop: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 900, marginBottom: 14 }}>Bekijk andere categorieën</h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[
            { href: '/voor/vegetarisch', label: '🥦 Vegetarisch' },
            { href: '/voor/bio', label: '🌿 Bio' },
            { href: '/voor/koppel', label: '👫 Koppel' },
            { href: '/voor/gezin', label: '👨‍👩‍👧 Gezin' },
            { href: '/voor/budget', label: '💰 Budget' },
            { href: '/voor/singles', label: '🧑 Singles' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ fontSize: 13, fontWeight: 600, padding: '6px 12px', borderRadius: 100, border: '1px solid var(--rule)', textDecoration: 'none', color: 'var(--ink)' }}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
