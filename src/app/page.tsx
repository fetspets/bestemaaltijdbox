'use client';
import { useState } from 'react';
import Link from 'next/link';
import { aanbieders, getAanbiedersByFilter } from '@/lib/aanbieders';

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

const filterLabels: Record<string, string> = {
  alle: '🏆 Alle boxen',
  koppel: '👫 Voor koppels',
  gezin: '👨‍👩‍👧 Voor gezinnen',
  vegetarisch: '🌱 Vegetarisch',
  budget: '💰 Budget',
  bio: '🌿 Biologisch',
};

const accentColors: Record<string, string> = {
  hellofresh: '#1B4332',
  foodbag: '#1E40AF',
  'marley-spoon': '#7C3AED',
};

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('alle');
  const gefilterd = activeFilter === 'alle' ? aanbieders : getAanbiedersByFilter(activeFilter);
  const top3 = gefilterd.slice(0, 3);
  const rest = gefilterd.slice(3);

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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

        {/* FILTER TABS */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Filter op situatie</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {Object.entries(filterLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                style={{
                  padding: '9px 18px', borderRadius: 100, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  border: '1.5px solid', transition: 'all 0.15s',
                  background: activeFilter === key ? '#1B4332' : 'white',
                  borderColor: activeFilter === key ? '#1B4332' : 'var(--rule)',
                  color: activeFilter === key ? 'white' : 'var(--muted)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION HEADER */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, paddingBottom: 16, borderBottom: '2px solid var(--ink)' }}>
          <h2 style={{ fontSize: 28, fontWeight: 900 }}>Onze rankings</h2>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>Bijgewerkt maart 2026 · {gefilterd.length} aanbieders</div>
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: '2px solid var(--ink)' }}>
            <h2 style={{ fontSize: 26, fontWeight: 900 }}>Alle boxen vergeleken</h2>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>9 aanbieders · gesorteerd op score</div>
          </div>
          <div className="table-wrap">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  {['#', 'Aanbieder', 'Score', 'Prijs/portie', 'Recepten', 'Bezorging', 'Belgisch', ''].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {aanbieders.map((a, i) => (
                  <tr key={a.slug} style={{ borderBottom: '1px solid var(--rule)', background: i === 0 ? '#F0FDF4' : 'white' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 800, color: i === 0 ? '#1B4332' : 'var(--muted)' }}>#{a.ranking}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
                        <span>{a.logo}</span>{a.naam}
                      </div>
                    </td>
                    <td style={{ padding: '12px 16px', fontWeight: 800, color: '#1B4332' }}>{a.score.totaal.toFixed(1)}</td>
                    <td style={{ padding: '12px 16px' }}>€{a.prijsPerPortie.toFixed(2)}</td>
                    <td style={{ padding: '12px 16px' }}>{a.receptenPerWeek}+</td>
                    <td style={{ padding: '12px 16px', color: a.gratisBezorging ? '#16A34A' : '#DC2626', fontWeight: 600 }}>
                      {a.gratisBezorging ? '✓ Gratis' : `€${a.bezorgkosten}`}
                    </td>
                    <td style={{ padding: '12px 16px' }}>{a.belgisch ? '🇧🇪' : '—'}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <Link href={`/aanbieder/${a.slug}`} style={{ color: '#1B4332', fontWeight: 700, textDecoration: 'none', fontSize: 12 }}>Review →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
}
/ /   r e b u i l d  
 / /   r e b u i l d  
 