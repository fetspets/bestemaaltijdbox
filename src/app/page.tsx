'use client';
import { useState } from 'react';
import Link from 'next/link';
import { aanbieders } from '@/lib/aanbieders';
import Quiz from '@/components/Quiz';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Beste Maaltijdbox België 2026',
  description: 'Onafhankelijke vergelijking van maaltijdboxen in België',
  numberOfItems: 7,
  itemListElement: aanbieders.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: a.naam,
    url: `https://bestemaaltijdbox.be/aanbieder/${a.slug}`,
  })),
};

function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(code); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };
  return (
    <div style={{ background: 'var(--red-light)', border: '1.5px dashed var(--red-border)', borderRadius: 8, padding: '10px 12px', textAlign: 'center' }}>
      <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>Kortingscode</div>
      <div style={{ fontFamily: 'monospace', fontSize: 18, fontWeight: 900, color: 'var(--red)', marginBottom: 8 }}>{code}</div>
      <button onClick={handleCopy} style={{
        width: '100%', padding: '8px', borderRadius: 6, cursor: 'pointer',
        fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 12,
        background: copied ? '#F0FDF4' : 'white',
        color: copied ? '#16A34A' : 'var(--red)',
        border: copied ? '1px solid #86EFAC' : '1px solid var(--red-border)',
        transition: 'all 0.2s',
      }}>
        {copied ? '✓ Gekopieerd!' : '📋 Kopieer code'}
      </button>
    </div>
  );
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>{label}</div>
      <div className="score-bar"><div className="score-bar-fill" style={{ width: `${value * 10}%` }} /></div>
      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--green)', marginTop: 3 }}>{value}</div>
    </div>
  );
}

const accentColors: Record<string, string> = {
  hellofresh: '#1B4332', foodbag: '#1E40AF', 'marley-spoon': '#7C3AED',
};

export default function HomePage() {
  const top3 = aanbieders.slice(0, 3);
  const rest = aanbieders.slice(3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Wat is de goedkoopste maaltijdbox in België?', acceptedAnswer: { '@type': 'Answer', text: 'Carrefour Simply You is een budgetvriendelijke optie met een lage prijs per portie, zonder verplicht abonnement. Factor heeft ook een lage instapprijs maar rekent bezorgkosten aan.' }},
          { '@type': 'Question', name: 'Kan ik een maaltijdbox makkelijk opzeggen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, de meeste maaltijdboxen zijn wekelijks opzegbaar via app of website. HelloFresh vraagt 5 dagen op voorhand, Foodbag en Marley Spoon ook wekelijks. Carrefour Simply You en Foodmaker hebben geen abonnement.' }},
          { '@type': 'Question', name: 'Welke maaltijdbox is het beste voor gezinnen?', acceptedAnswer: { '@type': 'Answer', text: 'Foodbag is onze keuze voor gezinnen: lokale ingrediënten en snelle recepten voor 2-5 personen.' }},
        ]
      }) }} />

      {/* HERO */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px 24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
          ✓ Onafhankelijk getest · april 2026
        </div>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 8vw, 52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 12 }}>
          De beste maaltijdbox<br />in <span style={{ color: 'var(--mint)' }}>België</span>
        </h1>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 20, maxWidth: 560 }}>
          Welke maaltijdbox is echt de moeite waard in België? Wij testten 7 aanbieders gedurende 4 weken — op prijs, smaak, gemak en duurzaamheid. Eerlijke scores, geen betaalde posities.
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
          {[['7', 'boxen getest'], ['4', 'weken getest'], ['2026', 'bijgewerkt']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 28, fontWeight: 900, color: '#1B4332' }}>{num}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Trust card */}
        <div style={{ background: 'white', borderRadius: 16, padding: 20, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid var(--rule)', marginBottom: 32 }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Waarom onze rankings vertrouwen?</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[['🧪', 'Elke box 4 weken getest'], ['💰', 'Zelf betaald'], ['🔄', 'Maandelijks bijgewerkt'], ['🇧🇪', 'Focus op België']].map(([icon, text]) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: '#E8F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>{icon}</div>
                {text}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, padding: '8px 10px', background: 'var(--cream)', borderRadius: 8, fontSize: 11, color: 'var(--muted)', textAlign: 'center', border: '1px solid var(--rule)' }}>
            ⚡ Affiliate disclosure: kleine commissie via onze links, zonder meerprijs voor jou.
          </div>
        </div>

        {/* SECTION HEADER */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: '2px solid var(--ink)', flexWrap: 'wrap', gap: 8 }}>
          <h2 style={{ fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 900 }}>Onze rankings</h2>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>Bijgewerkt april 2026 · 7 aanbieders</div>
        </div>

        {/* TOP 3 CARDS */}
        {top3.map((a, i) => {
          const accent = accentColors[a.slug] || '#1B4332';
          return (
            <div key={a.slug} className={`ranking-card${i === 0 ? ' top' : ''}`} style={{ marginBottom: 16 }}>
              <div style={{ padding: '20px 20px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 12 }}>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 40, fontWeight: 900, color: i === 0 ? '#C8EAD8' : 'var(--rule)', lineHeight: 1, flexShrink: 0 }}>{a.ranking}</div>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--cream)', border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0, overflow: 'hidden' }}>
                    {a.logo.startsWith('/')
                      ? <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
                      : a.logo}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 2 }}>
                      <span style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 700 }}>{a.naam}</span>
                      {i === 0 && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332', whiteSpace: 'nowrap' }}>⭐ Beste keuze</span>}
                      {a.belgisch && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: '#DBEAFE', color: '#1E40AF' }}>🇧🇪</span>}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>{a.tagline}</div>
                  </div>
                  <div style={{ textAlign: 'center', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'Fraunces, serif', fontSize: 32, fontWeight: 900, color: '#1B4332', lineHeight: 1 }}>{a.score.totaal.toFixed(1)}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>/10</div>
                  </div>
                </div>

                <div style={{ fontSize: 14, lineHeight: 1.6, color: '#4B5563', marginBottom: 14 }}>{a.beschrijving}</div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '1px solid var(--rule)', borderRadius: 10, overflow: 'hidden', fontSize: 12, marginBottom: 12 }}>
                  {[
                    { val: a.score.totaal.toFixed(1), key: 'Score' },
                    { val: `v.a. €${a.prijsPerPortie.toFixed(2)}`, key: 'Per portie' },
                    { val: `${a.receptenPerWeek}+`, key: 'Recepten' },
                    { val: a.gratisBezorging ? 'Gratis' : `€${a.bezorgkosten}`, key: 'Bezorging' },
                  ].map(({ val, key }) => (
                    <div key={key} style={{ padding: '8px 6px', borderRight: '1px solid var(--rule)', textAlign: 'center' }}>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{val}</div>
                      <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 1 }}>{key}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                  {a.kenmerken?.slice(0, 3).map(k => (
                    <span key={k} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 6, fontWeight: 600, background: '#F3F4F6', color: '#6B7280' }}>{k}</span>
                  ))}
                </div>

                <Link href={`/ga/${a.slug}`} style={{ display: 'block', background: accent, color: 'white', textAlign: 'center', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', marginBottom: 8 }}>
                  {a.kortingsCode ? `Activeer ${a.kortingsCode.bedrag} →` : `Bekijk ${a.naam} →`}
                </Link>
                {a.kortingsCode && <CopyCodeButton code={a.kortingsCode.code} />}
                <Link href={`/aanbieder/${a.slug}`} style={{ display: 'block', border: '1.5px solid var(--rule)', textAlign: 'center', padding: '11px', borderRadius: 10, fontWeight: 600, fontSize: 13, textDecoration: 'none', color: 'var(--ink)', marginTop: 8 }}>
                  Lees volledige review
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, padding: '14px 20px 20px', borderTop: '1px solid var(--rule)' }}>
                <ScoreBar label="Smaak" value={a.score.smaak} />
                <ScoreBar label="Prijs" value={a.score.prijsKwaliteit} />
                <ScoreBar label="Flex." value={a.score.flexibiliteit} />
                <ScoreBar label="Duurzaam" value={a.score.duurzaamheid} />
                <ScoreBar label="Gemak" value={a.score.gemak} />
              </div>
            </div>
          );
        })}

        {/* MICRO-CONVERSION TIP */}
        <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 10, padding: '10px 14px', fontSize: 12, color: '#92400E', marginBottom: 8 }}>
          💡 <strong>Tip:</strong> Welkomstdeals zijn alleen geldig voor nieuwe klanten en zijn beschikbaar voor beperkte tijd.
        </div>

        {/* REST (#4+) */}
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '24px 0 12px' }}>Overige aanbieders</div>
        {rest.map(a => (
          <div key={a.slug} className="small-card" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, padding: '14px 16px' }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 28, fontWeight: 900, color: 'var(--rule)', lineHeight: 1, flexShrink: 0, minWidth: 28 }}>{a.ranking}</div>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--cream)', border: '1px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0, overflow: 'hidden' }}>
              {a.logo.startsWith('/')
                ? <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 3 }} />
                : a.logo}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700 }}>{a.naam} {a.belgisch && '🇧🇪'}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>v.a. €{a.prijsPerPortie.toFixed(2)}/portie</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#E8F5EE', borderRadius: 100, padding: '3px 10px', fontSize: 12, fontWeight: 700, color: '#1B4332' }}>{a.score.totaal.toFixed(1)} ★</div>
              <Link href={`/aanbieder/${a.slug}`} style={{ fontSize: 12, fontWeight: 700, color: '#1B4332', textDecoration: 'none' }}>Review →</Link>
            </div>
          </div>
        ))}

        {/* QUIZ */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: '2px solid var(--ink)' }}>
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 28px)', fontWeight: 900 }}>Welke maaltijdbox past bij jou?</h2>
          </div>
          <p style={{ fontSize: 14, color: '#4B5563', marginBottom: 16, lineHeight: 1.6 }}>
            Twijfel je welke maaltijdbox het beste bij jou past? Doe onze korte test van 5 vragen en ontdek jouw persoonlijke aanbeveling.
          </p>
          <Quiz />
        </div>

        {/* VERGELIJKINGSTABEL */}
        <div style={{ marginTop: 48, marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, paddingBottom: 14, borderBottom: '2px solid var(--ink)', flexWrap: 'wrap', gap: 8 }}>
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 900 }}>Vergelijk alle maaltijdboxen</h2>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>7 aanbieders</div>
          </div>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>Overzicht van prijzen, bezorging, flexibiliteit en meer — bijgewerkt april 2026.</p>
          <div className="table-wrap" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, minWidth: 700 }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  {['Aanbieder', 'Score', 'Prijs/portie', 'Min. recepten', 'Bezorgkost', '🇧🇪', 'Leverdag', 'Tijdstip', 'Los bestellen', 'Beste voor', ''].map(h => (
                    <th key={h} style={{ padding: '10px 10px', textAlign: 'left', fontWeight: 600, fontSize: 10, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {aanbieders.map((a, i) => {
                  const bezorgLabel = a.gratisBezorging ? 'Gratis' : `€${a.bezorgkosten}`;
                  const bezorgGratis = a.gratisBezorging;
                  return (
                  <tr key={a.slug} style={{ borderBottom: '1px solid var(--rule)', background: i === 0 ? '#F0FDF4' : 'white' }}>
                    <td style={{ padding: '10px 10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600, whiteSpace: 'nowrap' }}>
                        <div style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                          {a.logo.startsWith('/')
                            ? <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            : <span>{a.logo}</span>}
                        </div>
                        {a.naam}
                      </div>
                    </td>
                    <td style={{ padding: '10px 10px', fontWeight: 800, color: '#1B4332' }}>{a.score.totaal}</td>
                    <td style={{ padding: '10px 10px' }}>v.a. €{a.prijsPerPortie.toFixed(2).replace('.', ',')}</td>
                    <td style={{ padding: '10px 10px', textAlign: 'center' }}>{a.minMaaltijdenPerWeek === 1 ? '—' : `${a.minMaaltijdenPerWeek}/week`}</td>
                    <td style={{ padding: '10px 10px', color: bezorgGratis ? '#16A34A' : '#DC2626', fontWeight: 600 }}>{bezorgLabel}</td>
                    <td style={{ padding: '10px 10px', textAlign: 'center' }}>{a.belgisch ? '🇧🇪' : '—'}</td>
                    <td style={{ padding: '10px 10px', textAlign: 'center', color: a.leverdag ? '#16A34A' : '#DC2626', fontWeight: 700 }}>{a.leverdag ? '✓' : '✗'}</td>
                    <td style={{ padding: '10px 10px', textAlign: 'center', color: a.tijdstip ? '#16A34A' : '#DC2626', fontWeight: 700 }}>{a.tijdstip ? '✓' : '✗'}</td>
                    <td style={{ padding: '10px 10px', textAlign: 'center', color: a.losBestellenMogelijk ? '#16A34A' : '#DC2626', fontWeight: 700 }}>{a.losBestellenMogelijk ? '✓' : '✗'}</td>
                    <td style={{ padding: '10px 10px', fontSize: 11, color: '#374151', whiteSpace: 'nowrap' }}>{a.besteVoor}</td>
                    <td style={{ padding: '10px 10px' }}>
                      <Link href={`/aanbieder/${a.slug}`} style={{ color: '#1B4332', fontWeight: 700, textDecoration: 'none', fontSize: 11, whiteSpace: 'nowrap' }}>Review →</Link>
                    </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 8, fontSize: 11, color: 'var(--muted)' }}>
            ✓ = mogelijk · ✗ = niet mogelijk · 🇧🇪 = Belgische ingrediënten · Prijzen zijn richtprijzen en kunnen variëren per formule en promotie. Raadpleeg de website van de aanbieder voor de meest actuele prijzen en aanbiedingen.
          </div>
        </div>

        {/* VERGELIJKINGEN & GIDSEN */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: '2px solid var(--ink)', flexWrap: 'wrap', gap: 8 }}>
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 900 }}>Vergelijkingen & Gidsen</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
            {[
              { href: '/vergelijk/hellofresh-vs-foodbag', icon: '⚖️', label: 'HelloFresh vs Foodbag', sub: 'Welke is goedkoper en beter?' },
              { href: '/vergelijk/hellofresh-vs-marley-spoon', icon: '⚖️', label: 'HelloFresh vs Marley Spoon', sub: 'Prijs vs culinaire kwaliteit' },
              { href: '/gids/maaltijdbox-voor-gezinnen', icon: '👨‍👩‍👧', label: 'Beste maaltijdbox voor gezinnen', sub: 'Top 3 voor grote porties & snelle recepten' },
              { href: '/gids/goedkoopste-maaltijdbox-belgie', icon: '💰', label: 'Goedkoopste maaltijdbox', sub: 'Prijsvergelijking inclusief welkomstdeals' },
            ].map(({ href, icon, label, sub }) => (
              <Link key={href} href={href} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'white', borderRadius: 12, border: '1px solid var(--rule)', padding: '16px 18px', textDecoration: 'none', color: 'var(--ink)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: '#E8F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{sub}</div>
                </div>
                <div style={{ marginLeft: 'auto', color: 'var(--muted)', fontSize: 16, flexShrink: 0 }}>→</div>
              </Link>
            ))}
          </div>
        </div>

        {/* UITLEG SECTIE */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            <div style={{ background: 'white', borderRadius: 16, padding: 24, border: '1px solid var(--rule)' }}>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Hoe werkt een maaltijdbox?</h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563', marginBottom: 10 }}>Een maaltijdbox is een wekelijkse bezorgservice waarbij je alle ingrediënten en recepten krijgt om thuis te koken. Je kiest hoeveel porties en maaltijden je wil per week, en alles wordt vers geleverd aan je deur.</p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563', marginBottom: 10 }}>Het grote voordeel: je hoeft niet meer na te denken over wat je kookt, de boodschappen zijn al gedaan, en je verspilt minder voedsel omdat alles exact afgemeten wordt geleverd.</p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563' }}>De meeste maaltijdboxen in België werken op abonnementsbasis, maar zijn vrij opzegbaar. Je betaalt gemiddeld €5 tot €10 per portie afhankelijk van de aanbieder en het gekozen plan. We updaten deze pagina regelmatig op basis van nieuwe ervaringen en actuele informatie.</p>
            </div>
            <div style={{ background: 'white', borderRadius: 16, padding: 24, border: '1px solid var(--rule)' }}>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 14 }}>Voor wie is een maaltijdbox geschikt?</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: '👫', title: 'Koppels', desc: 'HelloFresh en Foodbag zijn de populairste keuzes voor 2 personen.' },
                  { icon: '👨‍👩‍👧', title: 'Gezinnen', desc: 'Foodbag en HelloFresh: grote porties en snelle recepten voor het hele gezin.' },
                  { icon: '🌱', title: 'Vegetariërs', desc: 'Ekomenu (100% bio) en Marley Spoon bieden de meeste vegan opties.' },
                  { icon: '💰', title: 'Budget', desc: 'Carrefour Simply You (lage prijs/portie, geen abonnement) is een budgetvriendelijke optie.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>{icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 1 }}>{title}</div>
                      <div style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: '2px solid var(--ink)' }}>
            <h2 style={{ fontSize: 'clamp(18px, 4vw, 28px)', fontWeight: 900 }}>Veelgestelde vragen</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
            {[
              { q: 'Wat is de goedkoopste maaltijdbox in België?', a: 'Carrefour Simply You is een budgetvriendelijke optie met een lage prijs per portie, zonder verplicht abonnement en met bezorging in heel België. Factor heeft ook een lage instapprijs maar rekent bezorgkosten aan.' },
              { q: 'Kan ik een maaltijdbox makkelijk opzeggen?', a: 'Je kan je abonnement meestal flexibel pauzeren of stopzetten, vaak tot enkele dagen voor de volgende levering. HelloFresh vraagt 5 dagen op voorhand, Foodbag en Marley Spoon ook wekelijks. Carrefour Simply You en Foodmaker hebben geen abonnement. De exacte voorwaarden verschillen per aanbieder.' },
              { q: 'Welke maaltijdbox is het beste voor gezinnen?', a: 'Foodbag is onze keuze voor gezinnen: lokale ingrediënten en snelle recepten voor 2-5 personen.' },
              { q: 'Zijn maaltijdboxen goedkoper dan zelf boodschappen doen?', a: 'Niet altijd, maar ze besparen je tijd en voedselverspilling. Maaltijdboxen kosten doorgaans meer per portie dan zelf boodschappen doen, maar je verspilt nauwelijks voedsel omdat alles exact afgemeten wordt geleverd.' },
              { q: 'Welke maaltijdbox heeft de beste vegetarische opties?', a: 'Ekomenu is de beste keuze voor vegetariërs met 100% biologische ingrediënten. Marley Spoon en HelloFresh bieden ook veel vegetarische menus.' },
              { q: 'Hoe lang van tevoren moet ik bestellen?', a: 'De meeste aanbieders vragen 3–5 dagen op voorhand. HelloFresh vraagt 5 dagen voor de gewenste leverdag, Foodbag en Marley Spoon doorgaans 4–5 werkdagen. Beschikbare leverdagen en regio\'s kunnen per aanbieder verschillen — Marley Spoon levert bijvoorbeeld niet in Wallonië.' },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 14, fontWeight: 700, marginBottom: 8, color: 'var(--ink)' }}>{q}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: '#4B5563' }}>{a}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}