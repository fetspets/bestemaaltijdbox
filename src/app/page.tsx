'use client';
import { useState } from 'react';
import Link from 'next/link';
import { aanbieders } from '@/lib/aanbieders';


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Beste Maaltijdbox België 2026',
  description: 'Onafhankelijke vergelijking van maaltijdboxen in België',
  numberOfItems: 9,
  itemListElement: aanbieders.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: a.naam,
    url: `https://www.bestemaaltijdbox.be/aanbieder/${a.slug}`,
  })),
};

function CopyCodeButton({ code, url }: { code: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };
  return (
    <div style={{ background: 'var(--red-light)', border: '1.5px dashed var(--red-border)', borderRadius: 8, padding: '10px 12px', textAlign: 'center' }}>
      <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>Kortingscode</div>
      <div style={{ fontFamily: 'monospace', fontSize: 18, fontWeight: 900, color: 'var(--red)', marginBottom: 8 }}>{code}</div>
      <button
        onClick={handleCopy}
        style={{
          width: '100%', padding: '8px', borderRadius: 6, cursor: 'pointer',
          fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 12,
          background: copied ? '#F0FDF4' : 'white',
          color: copied ? '#16A34A' : 'var(--red)',
          border: copied ? '1px solid #86EFAC' : '1px solid var(--red-border)',
          transition: 'all 0.2s',
        }}
      >
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
  hellofresh: '#1B4332',
  foodbag: '#1E40AF',
  'marley-spoon': '#7C3AED',
};

export default function HomePage() {
 const top3 = aanbieders.slice(0, 3);
const rest = aanbieders.slice(3);

  return (
    <>
      {/* JSON-LD */}

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Wat is de goedkoopste maaltijdbox in België?', acceptedAnswer: { '@type': 'Answer', text: 'Carrefour Simply You is de goedkoopste optie aan €4,90 per portie.' }},
        { '@type': 'Question', name: 'Kan ik een maaltijdbox makkelijk opzeggen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, de meeste maaltijdboxen zijn wekelijks opzegbaar via app of website.' }},
        { '@type': 'Question', name: 'Welke maaltijdbox is het beste voor gezinnen?', acceptedAnswer: { '@type': 'Answer', text: 'Smartmat is onze #1 keuze voor gezinnen met snelle recepten klaar in 20 minuten.' }},
      ]
    }) }} />
     {/* TOPBAR */}
      <div style={{ background: '#1B4332', color: 'white', textAlign: 'center', padding: '10px 16px', fontSize: 13, fontWeight: 500 }}>
        🔥 <strong>Deze week:</strong> Grote kortingen op HelloFresh, Foodbag en Marley Spoon —{' '}
        <Link href="/kortingscodes" style={{ color: '#95D5B2', fontWeight: 700 }}>Bekijk alle codes →</Link>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>

        {/* HERO */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(280px, 55%, 640px) 1fr',
          gap: 48,
          padding: '48px 0 40px',
          alignItems: 'start',
        }}>
          {/* Hero left */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100,
              padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16,
            }}>
              ✓ Onafhankelijk getest · maart 2026
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 14 }}>
              De beste<br />maaltijdbox<br />in <span style={{ color: 'var(--mint)' }}>België</span>
            </h1>
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 24, maxWidth: 500 }}>
              We kochten en testten alle 9 maaltijdboxen gedurende 4 weken. Eerlijke rankings op basis van smaak, prijs en gemak — geen betaalde posities.
            </p>
            <div style={{ display: 'flex', gap: 28 }}>
              {[['9', 'boxen getest'], ['4', 'weken getest'], ['2.400+', 'reviews']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 28, fontWeight: 900, color: '#1B4332' }}>{num}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust card */}
          <div style={{ background: 'white', borderRadius: 20, padding: 24, boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid var(--rule)' }}>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 17, fontWeight: 700, marginBottom: 16 }}>Waarom onze rankings vertrouwen?</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['🧪', 'Elke box 4 weken getest'], ['💰', 'Zelf betaald, niet gesponsord'], ['🔄', 'Maandelijks bijgewerkt'], ['🇧🇪', 'Focus op Belgische markt']].map(([icon, text]) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: '#E8F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{icon}</div>
                  {text}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, padding: '10px 12px', background: 'var(--cream)', borderRadius: 10, fontSize: 11, color: 'var(--muted)', textAlign: 'center', border: '1px solid var(--rule)' }}>
              ⚡ Affiliate disclosure: kleine commissie via onze links, zonder meerprijs voor jou.
            </div>
          </div>
        </div>

        {/* SECTION HEADER */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, paddingBottom: 16, borderBottom: '2px solid var(--ink)' }}>
          <h2 style={{ fontSize: 28, fontWeight: 900 }}>Onze rankings</h2>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>Bijgewerkt maart 2026 · {aanbieders.length} aanbieders</div>
        </div>

        {/* TOP 3 CARDS */}
        {top3.map((a, i) => {
          const accent = accentColors[a.slug] || '#1B4332';
          return (
            <div key={a.slug} className={`ranking-card${i === 0 ? ' top' : ''}`}>
              {/* Card body */}
              <div style={{ padding: '24px 28px', display: 'grid', gridTemplateColumns: '52px 52px 1fr auto', gap: 18, alignItems: 'start' }}>
                {/* Rank */}
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 52, fontWeight: 900, color: i === 0 ? '#C8EAD8' : 'var(--rule)', lineHeight: 1, marginTop: -4 }}>{a.ranking}</div>
                {/* Logo */}
                <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--cream)', border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>{a.logo}</div>
                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 700 }}>{a.naam}</span>
                    {i === 0 && <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332' }}>⭐ Beste keuze</span>}
                    {a.belgisch && <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#DBEAFE', color: '#1E40AF' }}>🇧🇪 Belgisch</span>}
                    {a.bio && <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#FEF3C7', color: '#92400E' }}>🌿 Bio</span>}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 8 }}>{a.tagline}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.6, color: '#4B5563', marginBottom: 14 }}>{a.beschrijving}</div>
                  {/* Specs row */}
                  <div style={{ display: 'flex', border: '1px solid var(--rule)', borderRadius: 10, overflow: 'hidden', fontSize: 13, marginBottom: 12 }}>
                    {[
                      { val: a.score.totaal.toFixed(1), key: 'Score' },
                      { val: `€${a.prijsPerPortie.toFixed(2)}`, key: 'Per portie' },
                      { val: `${a.receptenPerWeek}+`, key: 'Recepten/week' },
                      { val: a.gratisBezorging ? 'Gratis' : `€${a.bezorgkosten}`, key: 'Bezorging' },
                    ].map(({ val, key }) => (
                      <div key={key} style={{ flex: 1, padding: '10px 12px', borderRight: '1px solid var(--rule)', textAlign: 'center' }}>
                        <div style={{ fontWeight: 700, fontSize: 15 }}>{val}</div>
                        <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{key}</div>
                      </div>
                    ))}
                  </div>
                  {/* Tags */}
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {a.kenmerken?.slice(0, 3).map(k => (
                      <span key={k} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 6, fontWeight: 600, background: '#F3F4F6', color: '#6B7280' }}>{k}</span>
                    ))}
                  </div>
                </div>
                {/* Right sidebar */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 176 }}>
                  <div style={{ textAlign: 'center', padding: 16, background: 'var(--cream)', borderRadius: 12, border: '1.5px solid var(--rule)' }}>
                    <div style={{ fontFamily: 'Fraunces, serif', fontSize: 42, fontWeight: 900, color: '#1B4332', lineHeight: 1 }}>{a.score.totaal.toFixed(1)}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>/10</div>
                    <div style={{ color: '#F59E0B', fontSize: 13, marginTop: 2 }}>{'★'.repeat(Math.round(a.score.totaal / 2))}{'☆'.repeat(5 - Math.round(a.score.totaal / 2))}</div>
                  </div>
                  <Link href={`/ga/${a.slug}`} className="btn-primary" style={{ background: accent }}>
                    {a.kortingsCode ? `Activeer ${a.kortingsCode.bedrag} →` : `Bekijk ${a.naam} →`}
                  </Link>
                  {a.kortingsCode && (
                    <CopyCodeButton code={a.kortingsCode.code} url={`/ga/${a.slug}`} />
                  )}
                  <Link href={`/aanbieder/${a.slug}`} className="btn-outline">Lees volledige review</Link>
                </div>
              </div>
              {/* Score bars */}
              {i === 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, padding: '16px 28px 24px', borderTop: '1px solid var(--rule)' }}>
                  <ScoreBar label="Smaak" value={a.score.smaak} />
                  <ScoreBar label="Prijs/kwal." value={a.score.prijsKwaliteit} />
                  <ScoreBar label="Flexibiliteit" value={a.score.flexibiliteit} />
                  <ScoreBar label="Duurzaamheid" value={a.score.duurzaamheid} />
                  <ScoreBar label="Gemak" value={a.score.gemak} />
                </div>
              )}
            </div>
          );
        })}

        {/* REST (#4+) */}
        {rest.length > 0 && (
          <>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '24px 0 12px' }}>Overige aanbieders</div>
            {rest.map(a => (
              <div key={a.slug} className="small-card" style={{ display: 'grid', gridTemplateColumns: '44px 44px 1fr auto', gap: 14, alignItems: 'center' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 34, fontWeight: 900, color: 'var(--rule)', lineHeight: 1 }}>{a.ranking}</div>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--cream)', border: '1px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{a.logo}</div>
                <div>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 17, fontWeight: 700, marginBottom: 2 }}>{a.naam}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>{a.tagline} {a.belgisch && '· 🇧🇪'}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900 }}>€{a.prijsPerPortie.toFixed(2)}<span style={{ fontSize: 11, fontWeight: 400, color: 'var(--muted)' }}>/portie</span></div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#E8F5EE', borderRadius: 100, padding: '3px 10px', fontSize: 12, fontWeight: 700, color: '#1B4332' }}>{a.score.totaal.toFixed(1)} ★</div>
                  <Link href={`/aanbieder/${a.slug}`} style={{ fontSize: 13, fontWeight: 700, color: '#1B4332', textDecoration: 'none' }}>Review →</Link>
                </div>
              </div>
            ))}
          </>
        )}

              {/* VERGELIJKINGSTABEL */}
        <div style={{ marginTop: 48, marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, paddingBottom: 14, borderBottom: '2px solid var(--ink)' }}>
            <h2 style={{ fontSize: 26, fontWeight: 900 }}>Vergelijk alle maaltijdboxen in België</h2>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>9 aanbieders · gesorteerd op score</div>
          </div>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>Overzicht van prijzen, bezorging, flexibiliteit en meer — bijgewerkt maart 2026.</p>
          <div className="table-wrap" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, minWidth: 900 }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Aanbieder</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Score</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Prijs/portie</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Min. recepten</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Bezorgkost</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>🇧🇪 Lokaal</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    <div>Leverdag</div>
                    <div style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, fontSize: 10, opacity: 0.75 }}>zelf kiezen</div>
                  </th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    <div>Tijdstip</div>
                    <div style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, fontSize: 10, opacity: 0.75 }}>zelf kiezen</div>
                  </th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    <div>Los bestellen</div>
                    <div style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, fontSize: 10, opacity: 0.75 }}>geen abo nodig</div>
                  </th>
                  <th style={{ padding: '10px 12px' }}></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { slug: 'hellofresh',          naam: 'HelloFresh',      logo: '🌿', score: 8.4, prijs: 'v.a. €5,50', minRecepten: 3, bezorg: 'v.a. gratis', lokaal: false, leverdag: true,  tijdstip: true,  los: false },
                  { slug: 'foodbag',             naam: 'Foodbag',         logo: '🥦', score: 8.1, prijs: 'v.a. €9,50', minRecepten: 2, bezorg: 'Gratis',      lokaal: true,  leverdag: true,  tijdstip: false, los: true  },
                  { slug: 'marley-spoon',        naam: 'Marley Spoon',    logo: '🌍', score: 7.9, prijs: 'v.a. €8,67', minRecepten: 2, bezorg: 'Gratis',      lokaal: false, leverdag: true,  tijdstip: false, los: false },
                  { slug: '15gram',              naam: '15gram',          logo: '👨‍🍳', score: 7.8, prijs: 'v.a. €7,50', minRecepten: 2, bezorg: 'Gratis',      lokaal: true,  leverdag: false, tijdstip: false, los: false },
                  { slug: 'ekomenu',             naam: 'Ekomenu',         logo: '🌱', score: 7.6, prijs: 'v.a. €7,00', minRecepten: 2, bezorg: 'Gratis',      lokaal: false, leverdag: true,  tijdstip: false, los: false },
                  { slug: 'smartmat',            naam: 'Smartmat',        logo: '⚡', score: 7.3, prijs: 'v.a. €5,80', minRecepten: 3, bezorg: 'Gratis',      lokaal: true,  leverdag: false, tijdstip: false, los: true  },
                  { slug: 'delhaize-click-cook', naam: 'Delhaize C&C',    logo: '🛒', score: 7.0, prijs: 'v.a. €5,20', minRecepten: 1, bezorg: '€4,95',       lokaal: true,  leverdag: true,  tijdstip: true,  los: true  },
                  { slug: 'carrefour-simply-you',naam: 'Carrefour SY',    logo: '🏪', score: 6.8, prijs: 'v.a. €4,90', minRecepten: 1, bezorg: '€5,95',       lokaal: true,  leverdag: true,  tijdstip: false, los: true  },
                  { slug: 'cirkle',              naam: 'Cirkle',          logo: '♻️', score: 7.2, prijs: 'v.a. €6,80', minRecepten: 2, bezorg: 'Gratis',      lokaal: true,  leverdag: false, tijdstip: false, los: false },
                ].map((a, i) => (
                  <tr key={a.slug} style={{ borderBottom: '1px solid var(--rule)', background: i === 0 ? '#F0FDF4' : 'white' }}>
                    <td style={{ padding: '10px 12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
                        <span>{a.logo}</span>{a.naam}
                      </div>
                    </td>
                    <td style={{ padding: '10px 12px', fontWeight: 800, color: '#1B4332' }}>{a.score}</td>
                    <td style={{ padding: '10px 12px', fontWeight: 600 }}>{a.prijs}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center' }}>{a.minRecepten === 1 ? <span style={{ color: 'var(--muted)' }}>—</span> : `${a.minRecepten}/week`}</td>
                    <td style={{ padding: '10px 12px', color: a.bezorg === 'Gratis' || a.bezorg === 'v.a. gratis' ? '#16A34A' : '#DC2626', fontWeight: 600 }}>{a.bezorg}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                      {a.lokaal ? '🇧🇪' : <span style={{ color: 'var(--muted)' }}>—</span>}
                    </td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', color: a.leverdag ? '#16A34A' : '#DC2626', fontWeight: 700 }}>
                      {a.leverdag ? '✓' : '✗'}
                    </td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', color: a.tijdstip ? '#16A34A' : '#DC2626', fontWeight: 700 }}>
                      {a.tijdstip ? '✓' : '✗'}
                    </td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', color: a.los ? '#16A34A' : '#DC2626', fontWeight: 700 }}>
                      {a.los ? '✓' : '✗'}
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      <Link href={`/aanbieder/${a.slug}`} style={{ color: '#1B4332', fontWeight: 700, textDecoration: 'none', fontSize: 12, whiteSpace: 'nowrap' }}>Review →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 8, fontSize: 11, color: 'var(--muted)' }}>
            ✓ = mogelijk · ✗ = niet mogelijk · 🇧🇪 = Belgische ingrediënten · Prijzen zijn richtprijzen, controleer steeds de website voor de actuele prijs.
          </div>
        </div>


        {/* UITLEG SECTIE */}
        <div style={{ marginTop: 48, marginBottom: 48 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            
            {/* Hoe werkt het */}
            <div style={{ background: 'white', borderRadius: 16, padding: 32, border: '1px solid var(--rule)' }}>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, marginBottom: 16 }}>
                Hoe werkt een maaltijdbox?
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563', marginBottom: 12 }}>
                Een maaltijdbox is een wekelijkse bezorgservice waarbij je alle ingrediënten en recepten krijgt om thuis te koken. Je kiest hoeveel porties en maaltijden je wil per week, en alles wordt vers geleverd aan je deur.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563', marginBottom: 12 }}>
                Het grote voordeel: je hoeft niet meer na te denken over wat je kookt, de boodschappen zijn al gedaan, en je verspilt minder voedsel omdat alles exact afgemeten wordt geleverd.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563' }}>
                De meeste maaltijdboxen in België werken op abonnementsbasis, maar zijn vrij opzegbaar. Je betaalt gemiddeld €5 tot €7,50 per portie, wat vergelijkbaar is met zelf boodschappen doen voor een gevarieerde maaltijd.
              </p>
            </div>

            {/* Voor wie */}
            <div style={{ background: 'white', borderRadius: 16, padding: 32, border: '1px solid var(--rule)' }}>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, marginBottom: 16 }}>
                Voor wie is een maaltijdbox geschikt?
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: '👫', title: 'Koppels', desc: 'Ideaal voor 2 personen die weinig tijd hebben maar wel lekker willen eten. HelloFresh en Foodbag zijn de populairste keuzes.' },
                  { icon: '👨‍👩‍👧', title: 'Gezinnen', desc: 'Voor 3-5 personen zijn Smartmat en Foodbag de beste keuze door grote porties en snelle recepten (klaar in 20 min).' },
                  { icon: '🌱', title: 'Vegetariërs', desc: 'Ekomenu (100% bio) en Marley Spoon bieden de meeste vegetarische en vegan opties.' },
                  { icon: '💰', title: 'Budgetbewuste kokers', desc: 'Carrefour Simply You (€4,90/portie) en Delhaize Click&Cook (€5,20/portie) zijn de goedkoopste opties.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{title}</div>
                      <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ SECTIE */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, paddingBottom: 16, borderBottom: '2px solid var(--ink)' }}>
            <h2 style={{ fontSize: 28, fontWeight: 900 }}>Veelgestelde vragen</h2>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>6 vragen</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              {
                q: 'Wat is de goedkoopste maaltijdbox in België?',
                a: 'Carrefour Simply You is de goedkoopste optie aan €4,90 per portie. Delhaize Click&Cook (€5,20) en HelloFresh met kortingscode (vanaf €3,50 in de eerste weken) zijn ook budgetvriendelijk.'
              },
              {
                q: 'Kan ik een maaltijdbox makkelijk opzeggen?',
                a: 'Ja, de meeste maaltijdboxen zijn wekelijks opzegbaar. HelloFresh, Foodbag en Marley Spoon laten je tot 5 dagen voor levering pauzeren of opzeggen via de app of website.'
              },
              {
                q: 'Welke maaltijdbox is het beste voor gezinnen?',
                a: 'Smartmat is onze #1 keuze voor gezinnen: snelle recepten klaar in 20 minuten, grote porties voor 2-5 personen, en een goede prijs-kwaliteitsverhouding aan €5,80 per portie.'
              },
              {
                q: 'Zijn maaltijdboxen echt goedkoper dan zelf boodschappen doen?',
                a: 'Niet altijd, maar ze besparen je tijd en voedselverspilling. Je betaalt €5-7,50 per portie tegenover €3-5 bij zelf winkelen. Het voordeel is dat alles exact afgemeten is en je nooit ingrediënten overhoudt.'
              },
              {
                q: 'Welke maaltijdbox heeft de beste vegetarische opties?',
                a: 'Ekomenu is de beste keuze voor vegetariërs en vegans met 100% biologische ingrediënten. Marley Spoon en HelloFresh bieden ook uitgebreide vegetarische menus met 6+ opties per week.'
              },
              {
                q: 'Hoe lang van tevoren moet ik bestellen?',
                a: 'De meeste aanbieders vragen je bestellingen 3-5 dagen op voorhand te plaatsen. HelloFresh en Foodbag leveren in heel België, meestal op dinsdag tot zaterdag. Je kan de leverdag zelf kiezen.'
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: 'white', borderRadius: 12, padding: 24, border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700, marginBottom: 10, color: 'var(--ink)' }}>
                  {q}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: '#4B5563' }}>{a}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}