import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maaltijdbox voor 2 personen België 2026 – Top 6 vergeleken',
  description: 'Welke maaltijdbox past het beste bij jullie als koppel? Vergelijk prijs, receptvariatie en deals voor 2 personen in België. Met echte kortingscodes.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/voor/koppel' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel maaltijden per week is realistisch als koppel?',
      acceptedAnswer: { '@type': 'Answer', text: 'De meeste koppels starten met 3 maaltijden per week — dat dekt de drukke doordeweekse avonden en laat ruimte voor een restaurantje of zelf iets klaarmaken in het weekend. Je kan altijd aanpassen of een week pauzeren.' },
    },
    {
      '@type': 'Question',
      name: 'Welke maaltijdbox is het goedkoopst voor 2 personen?',
      acceptedAnswer: { '@type': 'Answer', text: 'HelloFresh met welkomstkorting (tot €50) is de goedkoopste optie voor koppels in de eerste weken. Carrefour Simply You (€32,28/week met code BOXNL20) is een goede keuze zonder abonnement.' },
    },
    {
      '@type': 'Question',
      name: 'Kunnen we als koppel wekelijks pauzeren of opzeggen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. HelloFresh, Foodbag en Marley Spoon laten je wekelijks pauzeren of opzeggen. Foodbag en Carrefour Simply You hebben zelfs geen verplicht abonnement — je bestelt wanneer je wil.' },
    },
    {
      '@type': 'Question',
      name: 'Is een maaltijdbox duurder dan gewone boodschappen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Per portie betaal je iets meer, maar je verspilt nauwelijks voedsel omdat alles exact afgemeten wordt geleverd. Koppels die regelmatig restjes weggooien of impulsaankopen doen, betalen in de praktijk niet veel meer.' },
    },
  ],
};

const top3 = [
  {
    slug: 'hellofresh',
    naam: 'HelloFresh',
    logo: '/logos/hellofresh.png',
    score: 8.4,
    prijsPortie: '€5,50',
    weekprijs: '€33,00',
    recepten: '40+',
    bezorging: 'Gratis',
    badge: '⭐ Beste keuze',
    badgeColor: '#E8F5EE',
    badgeText: '#1B4332',
    accent: '#1B4332',
    tagline: 'Marktleider — sterkste prijs-kwaliteitverhouding',
    waarom: 'Met 40+ recepten per week komen koppels zelden twee keer hetzelfde op tafel. HelloFresh is flexibel — pauzeren of opzeggen kan tot 5 dagen voor levering. De grote keuze maakt het ook makkelijk om rekening te houden met elkaars voorkeuren.',
    deal: 'tot €50 korting — automatisch via link, geen code nodig',
    dealColor: '#1B4332',
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
    badgeColor: '#DBEAFE',
    badgeText: '#1E40AF',
    accent: '#1E40AF',
    tagline: 'Lokale Belgische ingrediënten — top smaakscore',
    waarom: 'Koppels die bewust Belgisch willen eten kiezen Foodbag. De ingrediënten komen van lokale boerderijen — dat merk je aan de versheid. Met 5 kookstijlen (waaronder de Sana-lijn van Sandra Bekkari) vinden ook veeleisende eters hun gading.',
    deal: '€60 korting — gebruik code FOODBAGx60 bij afrekenen (3× €20)',
    dealColor: '#1E40AF',
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
    tagline: 'Chef-kwaliteit — samen koken als avondactiviteit',
    waarom: 'Voor koppels die van koken genieten en er 45-60 minuten voor willen nemen. De recepten zijn uitgebreider dan bij HelloFresh — meer technieken, kwalitatievere kruidenmixen. Ideaal als samen koken quality time is. Let op: enkel bezorging in Vlaanderen en Brussel.',
    deal: '35% korting — automatisch via link, geldig op eerste 5 boxen',
    dealColor: '#7C3AED',
  },
];

const overige3 = [
  {
    slug: 'ekomenu',
    naam: 'Ekomenu',
    score: 7.6,
    prijsPortie: '€6,18',
    weekprijs: '€37,08',
    omschrijving: 'De enige 100% biologische maaltijdbox in België — ideaal voor koppels met een milieubewuste leefstijl. Enkel bezorging in Vlaanderen en Brussel, geen actieve kortingscode.',
  },
  {
    slug: 'factor',
    naam: 'Factor',
    score: 7.5,
    prijsPortie: '€4,99',
    weekprijs: '€35,94 (incl. €6 bezorgkost)',
    omschrijving: 'Kant-en-klare chef-maaltijden die je enkel opwarmt — geen koken vereist. Handig voor drukke avonden, maar je mist het kookplezier van een klassieke maaltijdbox.',
  },
  {
    slug: 'carrefour-simply-you',
    naam: 'Carrefour Simply You',
    score: 6.8,
    prijsPortie: '€5,38',
    weekprijs: '€32,28',
    omschrijving: 'Geen abonnement nodig — je bestelt wanneer het uitkomt. Met kortingscode BOXNL20 ontvangen nieuwe klanten €20 korting op de eerste bestelling.',
  },
];

export default function KoppelPage() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>
        <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
        {' → '}
        <Link href="/voor" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Voor wie</Link>
        {' → '}
        <strong style={{ color: 'var(--ink)' }}>Koppels</strong>
      </div>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>👫</div>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 6vw, 42px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
          Maaltijdbox voor 2 personen in België (2026): welke past bij jullie?
        </h1>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 680, marginBottom: 20 }}>
          Samen koken is meer dan een maaltijd bereiden — het is quality time. Maar welke maaltijdbox past écht bij jullie ritme als koppel?
        </p>
        <div style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)', maxWidth: 680 }}>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', margin: 0 }}>
            Een maaltijdbox voor 2 personen lost drie concrete problemen op: je hoeft niet elke week boodschappen te doen, je eet gevarieerder zonder lang na te denken wat je kookt, en je verspilt bijna niets omdat alles exact afgemeten wordt geleverd. We vergeleken alle 6 aanbieders die geschikt zijn voor koppels in België — op prijs, receptvariatie, flexibiliteit en de actuele deals. Zo kies je meteen de juiste.
          </p>
        </div>
      </div>

      {/* Wat telt voor koppels */}
      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
          Wat telt voor koppels?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
          {[
            { icon: '💶', titel: 'Prijs voor 2', tekst: 'Reken met 6 porties per week (2 personen × 3 maaltijden). Dat loopt snel op: van €33 bij HelloFresh tot €57 bij Foodbag.' },
            { icon: '📦', titel: 'Minimumafname', tekst: 'De meeste aanbieders vereisen minimum 2 maaltijden per week. Foodbag en Carrefour zijn flexibeler — geen verplicht abonnement.' },
            { icon: '🍽️', titel: 'Receptvariatie', tekst: 'Koppels vervelen sneller dan singles. Kies een aanbieder met 40+ recepten per week zodat je nooit twee keer hetzelfde eet.' },
            { icon: '🔀', titel: 'Flexibiliteit', tekst: 'Kunnen jullie makkelijk pauzeren of een week overslaan? HelloFresh, Foodbag en Marley Spoon laten je tot 5 dagen voor levering aanpassen.' },
          ].map(({ icon, titel, tekst }) => (
            <div key={titel} style={{ background: 'white', borderRadius: 12, padding: 16, border: '1px solid var(--rule)' }}>
              <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{titel}</div>
              <div style={{ fontSize: 13, lineHeight: 1.6, color: '#4B5563' }}>{tekst}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Top 3 uitgewerkt */}
      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
          Top 3 aanbevelingen voor koppels
        </h2>
        {top3.map((a, i) => (
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
                Bekijk deal →
              </Link>
              <Link href={`/aanbieder/${a.slug}`} style={{ flex: 1, minWidth: 160, display: 'block', border: '1.5px solid var(--rule)', textAlign: 'center', padding: '10px', borderRadius: 10, fontWeight: 600, fontSize: 13, textDecoration: 'none', color: 'var(--ink)' }}>
                Lees volledige review
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Overige 3 */}
      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
          Overige aanbieders voor koppels
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {overige3.map((a) => (
            <div key={a.slug} style={{ background: 'white', borderRadius: 12, padding: 16, border: '1px solid var(--rule)', display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700 }}>{a.naam}</span>
                  <span style={{ fontFamily: 'Fraunces, serif', fontSize: 14, fontWeight: 900, color: '#1B4332' }}>{a.score.toFixed(1)}/10</span>
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}>· {a.prijsPortie}/portie</span>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: '#4B5563', margin: 0 }}>{a.omschrijving}</p>
              </div>
              <Link href={`/aanbieder/${a.slug}`} style={{ fontSize: 13, fontWeight: 600, color: '#1B4332', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
                Meer info →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Vergelijkingstabel */}
      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
          Vergelijkingstabel: 6 aanbieders voor koppels
        </h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, background: 'white', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--rule)' }}>
            <thead>
              <tr style={{ background: 'var(--cream)', borderBottom: '2px solid var(--rule)' }}>
                {['Aanbieder', '€/portie', '€/week (2p, 3×)', 'Recepten/week', 'Korting'].map((h) => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 700, whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { naam: 'HelloFresh', portie: '€5,50', week: '€33,00', recepten: '40+', korting: 'tot €50 (automatisch)' },
                { naam: 'Foodbag', portie: '€9,50', week: '€57,00', recepten: '40+', korting: '€60 — code FOODBAGx60' },
                { naam: 'Marley Spoon', portie: '€5,59', week: '€33,54', recepten: '40+', korting: '35% (automatisch)' },
                { naam: 'Ekomenu', portie: '€6,18', week: '€37,08', recepten: '20–25', korting: '—' },
                { naam: 'Factor', portie: '€4,99', week: '€35,94 ²', recepten: '18', korting: '—' },
                { naam: 'Carrefour Simply You', portie: '€5,38', week: '€32,28', recepten: '10+', korting: '€20 — code BOXNL20' },
              ].map((r, i) => (
                <tr key={r.naam} style={{ borderBottom: '1px solid var(--rule)', background: i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 600 }}>{r.naam}</td>
                  <td style={{ padding: '10px 12px' }}>{r.portie}</td>
                  <td style={{ padding: '10px 12px' }}>{r.week}</td>
                  <td style={{ padding: '10px 12px' }}>{r.recepten}</td>
                  <td style={{ padding: '10px 12px', color: r.korting === '—' ? 'var(--muted)' : '#15803D', fontWeight: r.korting === '—' ? 400 : 600 }}>{r.korting}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>² Inclusief €6 bezorgkost. Prijzen zijn richtprijzen — controleer de actuele tarieven op de site van de aanbieder.</p>
        </div>
      </div>

      {/* Welke kies jij */}
      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
          Welke kies jij?
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            {
              scenario: 'Jullie willen maximaal voordeel',
              aanbeveling: 'HelloFresh',
              slug: 'hellofresh',
              uitleg: 'Met tot €50 welkomstkorting betaal je de eerste weken maar €5–6/avond voor twee. Na de kortingsperiode is HelloFresh nog steeds een van de goedkoopste kookboxen in België.',
              color: '#E8F5EE',
              border: '#BBF7D0',
            },
            {
              scenario: 'Jullie willen écht genieten van het koken',
              aanbeveling: 'Marley Spoon of Foodbag',
              slug: 'marley-spoon',
              uitleg: 'Marley Spoon voor wie van culinaire uitdaging houdt (chef-recepten, 45–60 min). Foodbag als je ook lokale Belgische kwaliteit wil — de versheid van de ingrediënten is merkbaar beter.',
              color: '#F3E8FF',
              border: '#DDD6FE',
            },
            {
              scenario: 'Jullie kiezen bewust Belgisch',
              aanbeveling: 'Foodbag',
              slug: 'foodbag',
              uitleg: 'Foodbag werkt uitsluitend met Belgische en lokale ingrediënten van boerderijen in de buurt. Met de FOODBAGx60 code (3× €20) is de instapprijs ook voor budgetbewuste koppels draaglijk.',
              color: '#DBEAFE',
              border: '#BFDBFE',
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
          Veelgestelde vragen voor koppels
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { q: 'Hoeveel maaltijden per week is realistisch als koppel?', a: 'De meeste koppels starten met 3 maaltijden per week — dat dekt de drukke doordeweekse avonden en laat ruimte voor een restaurantje of zelf iets klaarmaken in het weekend. Je kan altijd aanpassen of een week pauzeren.' },
            { q: 'Welke maaltijdbox is het goedkoopst voor 2 personen?', a: 'HelloFresh met welkomstkorting (tot €50) is de goedkoopste optie voor koppels in de eerste weken. Carrefour Simply You (€32,28/week met code BOXNL20) is een goede keuze zonder abonnement.' },
            { q: 'Kunnen we als koppel wekelijks pauzeren of opzeggen?', a: 'Ja. HelloFresh, Foodbag en Marley Spoon laten je wekelijks pauzeren of opzeggen. Foodbag en Carrefour Simply You hebben zelfs geen verplicht abonnement — je bestelt wanneer je wil.' },
            { q: 'Is een maaltijdbox duurder dan gewone boodschappen?', a: 'Per portie betaal je iets meer, maar je verspilt nauwelijks voedsel omdat alles exact afgemeten wordt geleverd. Koppels die regelmatig restjes weggooien of impulsaankopen doen, betalen in de praktijk niet veel meer.' },
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
          Klaar om te beginnen?
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.85, maxWidth: 480, margin: '0 auto 20px' }}>
          HelloFresh is de meest gekozen maaltijdbox voor koppels in België. Met tot €50 welkomstkorting is het ook meteen de voordeligste manier om te starten — geen code nodig, korting wordt automatisch toegepast.
        </p>
        <Link href="/ga/hellofresh" style={{ display: 'inline-block', background: 'white', color: '#1B4332', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
          Activeer tot €50 korting bij HelloFresh →
        </Link>
        <div style={{ fontSize: 12, opacity: 0.6, marginTop: 10 }}>Automatisch via link · geen code nodig · direct opzegbaar</div>
      </div>

      {/* Andere categorieën */}
      <div style={{ background: 'white', borderRadius: 16, padding: 24, border: '1px solid var(--rule)', marginTop: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 900, marginBottom: 14 }}>Bekijk andere categorieën</h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[
            { href: '/voor/gezin', label: '👨‍👩‍👧 Gezin' },
            { href: '/voor/vegetarisch', label: '🌱 Vegetarisch' },
            { href: '/voor/budget', label: '💰 Budget' },
            { href: '/voor/singles', label: '🧑 Singles' },
            { href: '/voor/bio', label: '🌿 Bio' },
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
