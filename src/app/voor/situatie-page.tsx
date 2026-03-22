import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAanbiedersByFilter, aanbieders } from '@/lib/aanbieders';
import type { Metadata } from 'next';

const situaties: Record<string, {
  titel: string;
  h1: string;
  intro: string;
  uitleg: string;
  icon: string;
  seoTitel: string;
  seoDesc: string;
  faq: { q: string; a: string }[];
}> = {
  koppel: {
    titel: 'Beste maaltijdbox voor koppels',
    h1: 'Beste maaltijdbox voor koppels in België (2026)',
    intro: 'Op zoek naar de beste maaltijdbox voor 2 personen? Wij testten alle Belgische maaltijdboxen specifiek voor koppels en vergeleken prijs, receptvariatie en flexibiliteit.',
    uitleg: 'Een maaltijdbox voor koppels moet de juiste portiegrootte hebben (2 personen), voldoende receptvariatie bieden zodat je niet elke week hetzelfde eet, en makkelijk opzegbaar zijn. HelloFresh wint hier door de enorme keuze van 30+ recepten per week en de lage prijs per portie. Foodbag scoort beter op kwaliteit van lokale ingrediënten maar kost meer.',
    icon: '👫',
    seoTitel: 'Beste Maaltijdbox voor Koppels België 2026 — Top 5 vergeleken',
    seoDesc: 'Welke maaltijdbox is het beste voor 2 personen in België? Wij vergeleken HelloFresh, Foodbag, Marley Spoon en meer. Eerlijke reviews en kortingscodes.',
    faq: [
      { q: 'Welke maaltijdbox is het goedkoopst voor 2 personen?', a: 'HelloFresh is het goedkoopst voor koppels vanaf €5,50 per portie, zeker met de welkomstkorting. Marley Spoon en Foodbag zijn duurder maar bieden hogere kwaliteit.' },
      { q: 'Kan ik een maaltijdbox voor 2 personen makkelijk opzeggen?', a: 'Ja, HelloFresh, Foodbag en Marley Spoon laten je wekelijks opzeggen of pauzeren. Je zit nergens aan vast.' },
      { q: 'Hoeveel maaltijden per week moet ik minimaal bestellen als koppel?', a: 'De meeste aanbieders vragen minimaal 2-3 maaltijden per week. HelloFresh laat je kiezen tussen 2, 3, 4 of 5 maaltijden per week.' },
    ],
  },
  gezin: {
    titel: 'Beste maaltijdbox voor gezinnen',
    h1: 'Beste maaltijdbox voor gezinnen in België (2026)',
    intro: 'Welke maaltijdbox past het beste bij een gezin met kinderen? Wij vergeleken portiegroottes, bereidingstijd en kindvriendelijke recepten van alle Belgische maaltijdboxen.',
    uitleg: 'Voor gezinnen zijn drie dingen cruciaal: voldoende porties (3-5 personen), snelle bereidingstijd zodat het haalbaar is op drukke avonden, en kindvriendelijke recepten. Smartmat wint hier met recepten klaar in 20 minuten en porties voor tot 5 personen. Foodbag is de beste keuze als je lokale Belgische kwaliteit wil voor het hele gezin.',
    icon: '👨‍👩‍👧',
    seoTitel: 'Beste Maaltijdbox voor Gezinnen België 2026 — Snel en lekker',
    seoDesc: 'Welke maaltijdbox is het beste voor gezinnen met kinderen in België? Vergelijk Smartmat, Foodbag, HelloFresh en meer. Grote porties, snelle recepten.',
    faq: [
      { q: 'Welke maaltijdbox is het snelst klaar voor een gezin?', a: 'Smartmat is de snelste met alle recepten klaar in maximaal 20 minuten. Ideaal voor drukke gezinnen met kinderen.' },
      { q: 'Welke maaltijdbox heeft de grootste porties voor gezinnen?', a: 'Foodbag en HelloFresh bieden boxen voor tot 5 personen. Smartmat gaat ook tot 5 personen.' },
      { q: 'Zijn maaltijdboxen kindvriendelijk?', a: 'HelloFresh en Smartmat hebben specifieke kindvriendelijke recepten. Foodbag biedt ook een "Busy Day" lijn met eenvoudige maaltijden.' },
    ],
  },
  vegetarisch: {
    titel: 'Beste vegetarische maaltijdbox',
    h1: 'Beste vegetarische maaltijdbox in België (2026)',
    intro: 'Op zoek naar een maaltijdbox met veel vegetarische of vegan recepten? Wij vergeleken het plantaardige aanbod van alle Belgische maaltijdboxen.',
    uitleg: 'Voor vegetariërs en vegans zijn er grote verschillen tussen de aanbieders. Ekomenu is de beste keuze met 100% biologische ingrediënten en een volledig vegetarisch/vegan menu. Marley Spoon biedt ook uitgebreide vegan opties. HelloFresh heeft meer dan 6 vegetarische recepten per week maar is niet volledig vegetarisch.',
    icon: '🌱',
    seoTitel: 'Beste Vegetarische Maaltijdbox België 2026 — Bio & Vegan opties',
    seoDesc: 'Welke maaltijdbox heeft de beste vegetarische en vegan opties in België? Vergelijk Ekomenu, Marley Spoon, HelloFresh. Biologisch en duurzaam.',
    faq: [
      { q: 'Welke maaltijdbox is volledig vegetarisch in België?', a: 'Ekomenu is de enige volledig vegetarische en vegane maaltijdbox in België met 100% biologische ingrediënten.' },
      { q: 'Heeft HelloFresh vegan opties in België?', a: 'Ja, HelloFresh biedt wekelijks meerdere vegetarische en vegan recepten aan, maar is niet uitsluitend vegetarisch.' },
      { q: 'Welke maaltijdbox is het beste voor biologisch eten?', a: 'Ekomenu en Cirkle zijn de beste keuzes voor biologisch eten. Ekomenu is 100% bio gecertificeerd.' },
    ],
  },
  budget: {
    titel: 'Goedkoopste maaltijdbox in België',
    h1: 'Goedkoopste maaltijdbox in België 2026 — Beste prijs-kwaliteit',
    intro: 'Wil je een maaltijdbox proberen zonder de bank te breken? Wij vergeleken alle Belgische maaltijdboxen op prijs per portie, bezorgkosten en welkomstkorting.',
    uitleg: 'De goedkoopste maaltijdbox is niet altijd de beste deal. Carrefour Simply You kost maar €4,90 per portie maar heeft hogere bezorgkosten (€5,95). HelloFresh lijkt duurder maar met de welkomstkorting van tot €90 is het de eerste weken spotgoedkoop. Delhaize Click&Cook heeft geen abonnement nodig en kost €5,20 per portie met €4,95 bezorgkosten.',
    icon: '💰',
    seoTitel: 'Goedkoopste Maaltijdbox België 2026 — Beste prijs per portie',
    seoDesc: 'Welke maaltijdbox is het goedkoopst in België? Vergelijk Carrefour Simply You, Delhaize Click&Cook, HelloFresh. Inclusief bezorgkosten en kortingscodes.',
    faq: [
      { q: 'Wat is de goedkoopste maaltijdbox per portie in België?', a: 'Carrefour Simply You is de goedkoopste aan €4,90 per portie. Delhaize Click&Cook (€5,20) en HelloFresh met korting zijn ook budgetvriendelijk.' },
      { q: 'Welke maaltijdbox heeft geen bezorgkosten?', a: 'HelloFresh, Foodbag, Marley Spoon, Ekomenu, Smartmat en Cirkle bieden gratis bezorging. Delhaize (€4,95) en Carrefour (€5,95) rekenen bezorgkosten aan.' },
      { q: 'Kan ik een maaltijdbox eenmalig bestellen zonder abonnement?', a: 'Ja, Foodbag, Delhaize Click&Cook en Carrefour Simply You laten je eenmalig bestellen zonder abonnement.' },
    ],
  },
  bio: {
    titel: 'Beste biologische maaltijdbox',
    h1: 'Beste biologische maaltijdbox in België (2026)',
    intro: 'Wil je bewust eten met biologische ingrediënten? Wij vergeleken alle duurzame maaltijdboxen in België op biologische certificering, verpakking en CO2-impact.',
    uitleg: 'Voor wie biologisch wil eten zijn er twee uitstekende opties in België. Ekomenu is de meest complete biologische maaltijdbox met 100% bio gecertificeerde ingrediënten, composteerbare verpakking en een CO2-footprint tracker. Cirkle gaat nog een stap verder met volledig herbruikbare verpakkingen die bij elke levering worden teruggenomen.',
    icon: '🌿',
    seoTitel: 'Beste Biologische Maaltijdbox België 2026 — 100% Bio & Duurzaam',
    seoDesc: 'Welke maaltijdbox gebruikt biologische ingrediënten in België? Vergelijk Ekomenu en Cirkle. Duurzaam, zero waste en lekker eten.',
    faq: [
      { q: 'Welke maaltijdbox is 100% biologisch in België?', a: 'Ekomenu is de enige 100% biologisch gecertificeerde maaltijdbox in België. Alle ingrediënten zijn bio en de verpakking is composteerbaar.' },
      { q: 'Wat is de meest duurzame maaltijdbox in België?', a: 'Cirkle is de meest duurzame met volledig herbruikbare verpakkingen. Ekomenu scoort het hoogst op biologische certificering.' },
      { q: 'Is een biologische maaltijdbox duurder?', a: 'Ja, bio maaltijdboxen kosten meer. Ekomenu kost €7,00 per portie en Cirkle €6,80, tegenover €5,50 voor HelloFresh.' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(situaties).map(s => ({ situatie: s }));
}

export async function generateMetadata({ params }: { params: Promise<{ situatie: string }> }): Promise<Metadata> {
  const { situatie } = await params;
  const s = situaties[situatie];
  if (!s) return {};
  return {
    title: s.seoTitel,
    description: s.seoDesc,
    alternates: { canonical: `https://www.bestemaaltijdbox.be/voor/${situatie}` },
  };
}

const accentColors: Record<string, string> = {
  hellofresh: '#1B4332', foodbag: '#1E40AF', 'marley-spoon': '#7C3AED',
};

export default async function SituatiePage({ params }: { params: Promise<{ situatie: string }> }) {
  const { situatie } = await params;
  const s = situaties[situatie];
  if (!s) notFound();

  const gefilterd = getAanbiedersByFilter(situatie);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px 64px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>
        <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
        {' → '}
        <strong style={{ color: 'var(--ink)' }}>{s.titel}</strong>
      </div>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 6vw, 42px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
          {s.h1}
        </h1>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 680, marginBottom: 20 }}>{s.intro}</p>
        <div style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)', maxWidth: 680 }}>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', margin: 0 }}>{s.uitleg}</p>
        </div>
      </div>

      {/* Rankings */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 12, borderBottom: '2px solid var(--ink)', flexWrap: 'wrap', gap: 8 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900 }}>
          Onze top {gefilterd.length} aanbevelingen
        </h2>
        <div style={{ fontSize: 13, color: 'var(--muted)' }}>{gefilterd.length} aanbieders gevonden</div>
      </div>

      {gefilterd.map((a, i) => {
        const accent = accentColors[a.slug] || '#1B4332';
        return (
          <div key={a.slug} style={{
            background: 'white', borderRadius: 16, marginBottom: 14,
            border: i === 0 ? '1.5px solid var(--mint)' : '1.5px solid var(--rule)',
            padding: 20, position: 'relative', overflow: 'hidden',
          }}>
            {i === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1B4332, var(--mint))' }} />}

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--cream)', border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{a.logo}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 2 }}>
                  <span style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 700 }}>{a.naam}</span>
                  {i === 0 && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332' }}>⭐ Beste keuze</span>}
                  {a.belgisch && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: '#DBEAFE', color: '#1E40AF' }}>🇧🇪 Belgisch</span>}
                  {a.bio && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: '#FEF3C7', color: '#92400E' }}>🌿 Bio</span>}
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>{a.tagline}</div>
              </div>
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 32, fontWeight: 900, color: '#1B4332', lineHeight: 1 }}>{a.score.totaal.toFixed(1)}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>/10</div>
              </div>
            </div>

            <div style={{ fontSize: 14, lineHeight: 1.6, color: '#4B5563', marginBottom: 14 }}>{a.beschrijving}</div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--rule)', borderRadius: 10, overflow: 'hidden', fontSize: 12, marginBottom: 14 }}>
              {[
                { val: `€${a.prijsPerPortie.toFixed(2)}`, key: 'Per portie' },
                { val: `${a.receptenPerWeek}+`, key: 'Recepten/week' },
                { val: a.gratisBezorging ? 'Gratis' : `€${a.bezorgkosten}`, key: 'Bezorging' },
              ].map(({ val, key }) => (
                <div key={key} style={{ padding: '8px 6px', borderRight: '1px solid var(--rule)', textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{val}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 1 }}>{key}</div>
                </div>
              ))}
            </div>

            <Link href={`/ga/${a.slug}`} style={{ display: 'block', background: accent, color: 'white', textAlign: 'center', padding: '12px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', marginBottom: 8 }}>
              {a.kortingsCode ? `Activeer ${a.kortingsCode.bedrag} →` : `Bekijk ${a.naam} →`}
            </Link>
            <Link href={`/aanbieder/${a.slug}`} style={{ display: 'block', border: '1.5px solid var(--rule)', textAlign: 'center', padding: '10px', borderRadius: 10, fontWeight: 600, fontSize: 13, textDecoration: 'none', color: 'var(--ink)' }}>
              Lees volledige review
            </Link>
          </div>
        );
      })}

      {/* FAQ */}
      <div style={{ marginTop: 40, marginBottom: 40 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
          Veelgestelde vragen
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {s.faq.map(({ q, a }) => (
            <div key={q} style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)' }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{q}</div>
              <div style={{ fontSize: 14, lineHeight: 1.7, color: '#4B5563' }}>{a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Andere categorieën */}
      <div style={{ background: 'white', borderRadius: 16, padding: 24, border: '1px solid var(--rule)', marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 900, marginBottom: 14 }}>Bekijk andere categorieën</h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {Object.entries(situaties).filter(([key]) => key !== situatie).map(([key, val]) => (
            <Link key={key} href={`/voor/${key}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 16px', borderRadius: 100, border: '1.5px solid var(--rule)',
              textDecoration: 'none', color: 'var(--ink)', fontSize: 13, fontWeight: 600,
              background: 'var(--cream)',
            }}>
              {val.icon} {val.titel}
            </Link>
          ))}
        </div>
      </div>

      <Link href="/" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>← Terug naar alle maaltijdboxen</Link>
    </div>
  );
}
