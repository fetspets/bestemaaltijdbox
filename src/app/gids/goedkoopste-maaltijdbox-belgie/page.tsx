import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Goedkoopste maaltijdbox België 2026 — echte prijsvergelijking per week',
  description: 'Welke maaltijdbox is écht het goedkoopst in België? Vergelijk prijs per week (incl. bezorgkost) voor 7 aanbieders. Met rekensom, welkomstdeals en verborgen kosten.',
  alternates: { canonical: 'https://www.bestemaaltijdbox.be/gids/goedkoopste-maaltijdbox-belgie' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost een maaltijdbox gemiddeld per maand in België?',
      acceptedAnswer: { '@type': 'Answer', text: 'Voor een koppel met 3 maaltijden per week betaal je gemiddeld €130–145/maand bij HelloFresh of Marley Spoon (reguliere prijs). Met welkomstkorting (code HELLO85FL: €50 korting op 4 boxen) daalt dat in de eerste maand. Foodbag is duurder: €228/maand aan reguliere prijs.' },
    },
    {
      '@type': 'Question',
      name: 'Is Factor echt de goedkoopste maaltijdbox in België?',
      acceptedAnswer: { '@type': 'Answer', text: 'Factor heeft de laagste prijs per portie (€4,99), maar rekent €6 bezorgkost per levering. Voor 2 personen met 3 maaltijden per week kom je op €35,94/week — duurder dan Carrefour Simply You (€32,28) en vergelijkbaar met HelloFresh (€33,00). Factor levert ook kant-en-klare maaltijden, geen kookbox.' },
    },
    {
      '@type': 'Question',
      name: 'Wat is de goedkoopste maaltijdbox zonder abonnement in België?',
      acceptedAnswer: { '@type': 'Answer', text: 'Carrefour Simply You heeft geen verplicht abonnement. Je bestelt wanneer het uitkomt, zonder wekelijkse verplichting. Met kortingscode BOXNL20 krijg je €20 korting op de eerste bestelling — effectief €12,28 voor de eerste week (2p, 3 maaltijden).' },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is een maaltijdbox goedkoper dan zelf boodschappen doen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Als je regelmatig ingrediënten weggooit, impulsaankopen doet in de supermarkt of regelmatig eten bestelt via Deliveroo — dan is een maaltijdbox al snel goedkoper. De exacte hoeveelheden per recept elimineren verspilling bijna volledig. Reken je ook de kost van boodschappenritten en time mee, dan wordt het voordeel nog groter.' },
    },
  ],
};

const prijsTabel = [
  { naam: 'Factor', slug: 'factor', portie: 4.99, bezorging: 6, weekprijs: 35.94, welkomst: '—', noot: '+ €6 bezorgkost' },
  { naam: 'Carrefour Simply You', slug: 'carrefour-simply-you', portie: 5.38, bezorging: 0, weekprijs: 32.28, welkomst: '€20 korting (BOXNL20)', noot: null },
  { naam: 'HelloFresh', slug: 'hellofresh', portie: 5.50, bezorging: 0, weekprijs: 33.00, welkomst: '€50 korting (code HELLO85FL)', noot: null },
  { naam: 'Marley Spoon', slug: 'marley-spoon', portie: 5.59, bezorging: 0, weekprijs: 33.54, welkomst: '35% korting (automatisch)', noot: null },
  { naam: 'Ekomenu', slug: 'ekomenu', portie: 6.18, bezorging: 0, weekprijs: 37.08, welkomst: '—', noot: null },
  { naam: 'Foodbag', slug: 'foodbag', portie: 9.50, bezorging: 0, weekprijs: 57.00, welkomst: '€60 korting (FOODBAGx60)', noot: null },
  { naam: 'Foodmaker', slug: 'foodmaker', portie: 10.00, bezorging: 0, weekprijs: 60.00, welkomst: '—', noot: null },
];

export default function GoedkoopsteMaaltijdboxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
          {' → '}
          <span style={{ color: 'var(--muted)' }}>Gidsen</span>
          {' → '}
          <strong style={{ color: 'var(--ink)' }}>Goedkoopste maaltijdbox</strong>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
            ✓ Prijzen geverifieerd · april 2026
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 7vw, 40px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            Goedkoopste maaltijdbox België 2026 — echte prijsvergelijking per week
          </h1>
          <div style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.8, maxWidth: 680 }}>
            <p style={{ margin: '0 0 12px' }}>
              De prijs per portie is een misleidende manier om maaltijdboxen te vergelijken. Factor lijkt goedkoopst op €4,99/portie — maar als je de €6 bezorgkost per week optelt, betaal je meer dan bij HelloFresh (€33,00, gratis bezorging). De echte formule:
            </p>
            <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 10, padding: '12px 16px', fontFamily: 'monospace', fontSize: 13, color: '#1B4332', fontWeight: 600, marginBottom: 12 }}>
              weekprijs = (porties × prijs/portie) + bezorgkost
            </div>
            <p style={{ margin: 0 }}>
              We berekenden de weekprijs voor 2 personen met 3 maaltijden (= 6 porties) voor alle 7 aanbieders, inclusief bezorgkost en welkomstdeals. Zo zie je meteen wie écht het voordeligst is.
            </p>
          </div>
        </div>

        {/* Prijstabel */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 8, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Prijsvergelijking: 2 personen, 3 maaltijden/week
          </h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
            Berekening: 6 porties × prijs/portie + bezorgkost. Gesorteerd op weekprijs (laag → hoog).
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, background: 'white', border: '1px solid var(--rule)', borderRadius: 12, overflow: 'hidden' }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  {['Aanbieder', '€/portie', 'Bezorging', '€/week (2p, 3×)', 'Welkomstdeal'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {prijsTabel.map((r, i) => (
                  <tr key={r.slug} style={{ borderBottom: '1px solid var(--rule)', background: i === 1 ? '#F0FDF4' : i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 600 }}>
                      <Link href={`/aanbieder/${r.slug}`} style={{ color: 'var(--ink)', textDecoration: 'none' }}>{r.naam}</Link>
                      {r.noot && <span style={{ display: 'block', fontSize: 11, color: '#DC2626', fontWeight: 400 }}>{r.noot}</span>}
                    </td>
                    <td style={{ padding: '10px 12px' }}>€{r.portie.toFixed(2)}</td>
                    <td style={{ padding: '10px 12px', color: r.bezorging === 0 ? '#16A34A' : '#DC2626', fontWeight: 600 }}>
                      {r.bezorging === 0 ? 'Gratis' : `€${r.bezorging}`}
                    </td>
                    <td style={{ padding: '10px 12px', fontFamily: 'Fraunces, serif', fontWeight: 900, fontSize: 15, color: i < 3 ? '#1B4332' : 'var(--ink)' }}>
                      €{r.weekprijs.toFixed(2)}
                    </td>
                    <td style={{ padding: '10px 12px', fontSize: 12, color: r.welkomst === '—' ? 'var(--muted)' : '#15803D', fontWeight: r.welkomst === '—' ? 400 : 600 }}>
                      {r.welkomst}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8 }}>
            Prijzen zijn richtprijzen — controleer de actuele tarieven op de site van de aanbieder. Weekprijs berekend voor 2 personen, 3 maaltijden, reguliere prijs (zonder welkomstkorting).
          </p>
        </div>

        {/* Top 3 welkomstdeal vs reguliere prijs */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Top 3 goedkoopste — met en zonder welkomstdeal
          </h2>
          <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, marginBottom: 20 }}>
            Welkomstdeals zijn tijdelijk — ze gelden enkel voor nieuwe klanten op de eerste boxen. Hieronder de eerlijke vergelijking: wat betaal je met deal, en wat betaal je daarna?
          </p>
          {[
            {
              rang: 1,
              naam: 'Carrefour Simply You',
              slug: 'carrefour-simply-you',
              badge: '🛒 Goedkoopst op reguliere prijs',
              accent: '#1B4332',
              metDeal: '€12,28 (eerste bestelling met code BOXNL20)',
              naDeal: '€32,28/week (reguliere prijs)',
              uitleg: 'De enige aanbieder zonder verplicht abonnement. Je bestelt wanneer het uitkomt. Met code BOXNL20 (€20 korting) betaal je voor de eerste keer maar €12,28 voor 2 personen en 3 maaltijden. Na die eerste bestelling betaal je €32,28/week — de laagste reguliere weekprijs van alle kookboxen.',
              dealOpmerking: 'Let op: kortingscode BOXNL20 geldt enkel voor nieuwe klanten op de eerste bestelling.',
            },
            {
              rang: 2,
              naam: 'HelloFresh',
              slug: 'hellofresh',
              badge: '💰 Beste welkomstdeal voor kookboxen',
              accent: '#1B4332',
              metDeal: 'Gemiddeld ~€20,50/week over de eerste 4 boxen (€50 korting gespreid: €25+€10+€10+€5)',
              naDeal: '€33,00/week (reguliere prijs)',
              uitleg: 'HelloFresh geeft €50 welkomstkorting via code HELLO85FL, gespreid over de eerste 4 boxen (€25 op box 1, €10 op box 2, €10 op box 3, €5 op box 4). Dat maakt de instapperiode bijzonder voordelig. Na de welkomstperiode stijgt de weekprijs naar €33,00. Gratis bezorging, 40+ recepten per week, wekelijks opzegbaar.',
              dealOpmerking: 'Gebruik code HELLO85FL bij je eerste bestelling · 4 boxen · exclusief voor nieuwe klanten.',
            },
            {
              rang: 3,
              naam: 'Marley Spoon',
              slug: 'marley-spoon',
              badge: '🎯 Beste deal per portie in welkomstperiode',
              accent: '#7C3AED',
              metDeal: '~€21,80/week (35% korting op eerste 5 boxen)',
              naDeal: '€33,54/week (reguliere prijs)',
              uitleg: '35% korting op de eerste 5 boxen maakt Marley Spoon tijdens de welkomstperiode bijzonder voordelig — 5 weken aan gereduceerde prijs. Chef-kwaliteitsrecepten met 40+ keuzes per week. Na de welkomstperiode iets duurder dan HelloFresh. Bezorging enkel in Vlaanderen en Brussel.',
              dealOpmerking: 'Korting automatisch via link · 5 boxen · enkel Vlaanderen & Brussel',
            },
          ].map(({ rang, naam, slug, badge, accent, metDeal, naDeal, uitleg, dealOpmerking }) => (
            <div key={slug} style={{ background: 'white', borderRadius: 16, border: rang === 1 ? '1.5px solid var(--mint)' : '1.5px solid var(--rule)', padding: 24, marginBottom: 16, position: 'relative', overflow: 'hidden' }}>
              {rang === 1 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1B4332, var(--mint))' }} />}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 32, fontWeight: 900, color: rang === 1 ? '#C8EAD8' : 'var(--rule)', lineHeight: 1, flexShrink: 0 }}>{rang}</div>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 2 }}>
                    <span style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 700 }}>{naam}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332' }}>{badge}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <Link href={`/ga/${slug}`} style={{ display: 'block', background: accent, color: 'white', textAlign: 'center', padding: '10px 16px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    Bekijk deal →
                  </Link>
                  <Link href={`/aanbieder/${slug}`} style={{ display: 'block', border: '1.5px solid var(--rule)', textAlign: 'center', padding: '8px 16px', borderRadius: 10, fontWeight: 600, fontSize: 12, textDecoration: 'none', color: 'var(--ink)', whiteSpace: 'nowrap' }}>
                    Lees review
                  </Link>
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: '#4B5563', marginBottom: 14 }}>{uitleg}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#15803D', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 3 }}>Met welkomstdeal</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#14532D' }}>{metDeal}</div>
                </div>
                <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 3 }}>Reguliere prijs</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#78350F' }}>{naDeal}</div>
                </div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 10 }}>⚠️ {dealOpmerking}</div>
            </div>
          ))}
        </div>

        {/* Verborgen kosten */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Verborgen kosten om rekening mee te houden
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              {
                icon: '📦',
                titel: 'Bezorgkost',
                tekst: 'Factor rekent €6 per levering — dat is €24/maand als je wekelijks bestelt. HelloFresh, Foodbag, Marley Spoon, Ekomenu en Carrefour Simply You leveren gratis. Vergelijk altijd de weekprijs inclusief bezorgkost, niet enkel de portieprijs.',
              },
              {
                icon: '📏',
                titel: 'Minimumafname',
                tekst: 'De meeste aanbieders vereisen minimum 2 maaltijden per week. Sommige rekenen een duurdere portieprijs aan als je minder dan het standaardaantal bestelt. Check altijd de minimumbox van je gekozen aanbieder.',
              },
              {
                icon: '📈',
                titel: 'Reguliere prijs na welkomstperiode',
                tekst: 'Welkomstdeals gelden voor nieuwe klanten op de eerste 3–5 boxen. Daarna stijgt de prijs naar het standaardtarief. Plan op voorhand: stel een herinnering in om je abonnement te pauzeren of op te zeggen als je de standaardprijs te hoog vindt.',
              },
              {
                icon: '⏰',
                titel: 'Opzegtermijn',
                tekst: 'HelloFresh, Foodbag en Marley Spoon laten je opzeggen of pauzeren tot 5 dagen voor de volgende levering. Mis je die deadline, dan wordt de volgende box toch verstuurd. Carrefour Simply You heeft geen abonnement — geen opzegtermijn.',
              },
            ].map(({ icon, titel, tekst }) => (
              <div key={titel} style={{ background: 'white', borderRadius: 12, padding: '16px 20px', border: '1px solid var(--rule)', display: 'flex', gap: 14 }}>
                <div style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{icon}</div>
                <div>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{titel}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.7, color: '#4B5563' }}>{tekst}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Veelgestelde vragen over prijs
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
            {faqJsonLd.mainEntity.map(({ name, acceptedAnswer }) => (
              <div key={name} style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{name}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: '#4B5563' }}>{acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusie per situatie */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Wie is écht het goedkoopst — per situatie
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              {
                situatie: 'Goedkoopste kookbox voor een koppel (2p)',
                winnaar: 'Carrefour Simply You',
                slug: 'carrefour-simply-you',
                detail: '€32,28/week (reguliere prijs) of €12,28 de eerste keer met code BOXNL20. Geen abonnement. HelloFresh is een goed alternatief als je meer receptkeuze wil (40+ vs. 10+).',
                color: '#F0FDF4',
                border: '#BBF7D0',
              },
              {
                situatie: 'Goedkoopste kookbox voor een gezin (4p)',
                winnaar: 'HelloFresh',
                slug: 'hellofresh',
                detail: '€66,00/week (4p, 3 maaltijden, 12 porties × €5,50), gratis bezorging. HelloFresh levert als enige voor tot 6 personen. Met welkomstkorting (tot €50) daalt de weekprijs in de eerste 3 boxen.',
                color: '#EEF2FF',
                border: '#C7D2FE',
              },
              {
                situatie: 'Goedkoopste optie voor 1 persoon',
                winnaar: 'HelloFresh',
                slug: 'hellofresh',
                detail: '€16,50/week (1p, 3 maaltijden, 3 porties × €5,50), gratis bezorging. HelloFresh is de enige grote kookbox die levert voor 1 persoon. Factor heeft een lagere portieprijs maar de €6 bezorgkost maakt het voor 1 persoon duurder per portie.',
                color: '#FFF7ED',
                border: '#FED7AA',
              },
              {
                situatie: 'Goedkoopste als je geen abonnement wil',
                winnaar: 'Carrefour Simply You',
                slug: 'carrefour-simply-you',
                detail: 'Geen abonnement, geen opzegtermijn. Bestellen wanneer het uitkomt. Met BOXNL20 (€20 korting) is de eerste bestelling maar €12,28 voor een koppel. Foodmaker en Foodbag werken ook zonder vast abonnement.',
                color: '#F5F3FF',
                border: '#DDD6FE',
              },
            ].map(({ situatie, winnaar, slug, detail, color, border }) => (
              <div key={situatie} style={{ background: color, border: `1px solid ${border}`, borderRadius: 12, padding: '16px 20px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: 4 }}>{situatie}</div>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
                  → <Link href={`/aanbieder/${slug}`} style={{ color: 'var(--ink)', textDecoration: 'none' }}>{winnaar}</Link>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: '#374151', margin: 0 }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <Link href="/" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>← Terug naar alle maaltijdboxen</Link>
      </div>
    </>
  );
}
