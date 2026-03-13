import Link from 'next/link';
import { aanbieders, getTopAanbieders } from '@/lib/aanbieders';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beste Maaltijdbox België 2026 — Onafhankelijke Vergelijking',
  description:
    'We testten alle 9 maaltijdboxen in België. Onze eerlijke rankings op basis van smaak, prijs en gemak. Inclusief kortingscodes.',
};

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="score-bar">
      <div className="score-bar-fill" style={{ width: `${score * 10}%` }} />
    </div>
  );
}

function TagBadge({ tag }: { tag: string }) {
  const isBeigisch = tag.includes('🇧🇪');
  const isBio = tag.includes('🌿') || tag.includes('Bio');
  return (
    <span
      style={{
        fontFamily: 'Outfit, sans-serif',
        fontSize: '11px',
        fontWeight: 700,
        padding: '3px 10px',
        borderRadius: '3px',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.05em',
        background: isBeigisch ? '#d1fae5' : isBio ? '#dcfce7' : '#fef3c7',
        color: isBeigisch ? '#065f46' : isBio ? '#166534' : '#92400e',
      }}
    >
      {tag}
    </span>
  );
}

export default function HomePage() {
  const top = getTopAanbieders(3);
  const rest = aanbieders
    .sort((a, b) => a.ranking - b.ranking)
    .slice(3);

  return (
    <div style={{ background: 'var(--paper)' }}>

      {/* ── HERO ── */}
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-8">
        <div
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          Onafhankelijke vergelijking
          <span style={{ flex: 1, height: '1px', background: 'var(--rule)' }} />
        </div>

        <h1
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}
        >
          De beste maaltijdbox in België (2026)
        </h1>

        {/* Meta bar */}
        <div
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '13px',
            color: 'var(--muted)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            padding: '14px 0',
            borderTop: '1px solid var(--rule)',
            borderBottom: '1px solid var(--rule)',
            marginBottom: '20px',
          }}
        >
          <span>Door <strong style={{ color: 'var(--ink)' }}>Redactie BesteMaaltijdbox</strong></span>
          <span>•</span>
          <span>Bijgewerkt <strong style={{ color: 'var(--ink)' }}>maart 2026</strong></span>
          <span>•</span>
          <span><strong style={{ color: 'var(--ink)' }}>9 aanbieders</strong> getest</span>
          <span>•</span>
          <span><strong style={{ color: 'var(--ink)' }}>4 weken</strong> getest</span>
        </div>

        <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '16px', lineHeight: 1.75, color: '#333', marginBottom: '24px' }}>
          We kochten en testten alle grote maaltijdboxen die in België beschikbaar zijn gedurende vier weken.
          Onze rankings zijn gebaseerd op smaak, prijs-kwaliteitsverhouding, bezorging en flexibiliteit —
          niet op betaalde posities.
        </p>

        {/* TOC */}
        <div
          style={{
            background: 'white',
            border: '2px solid var(--ink)',
            padding: '20px 24px',
            marginBottom: '32px',
          }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
            In dit artikel
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {aanbieders.sort((a, b) => a.ranking - b.ranking).map((a) => (
              <Link
                key={a.slug}
                href={`#${a.slug}`}
                style={{ display: 'flex', gap: '10px', alignItems: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: '#333', textDecoration: 'none' }}
                className="hover:text-red-700"
              >
                <span style={{ fontWeight: 800, color: 'var(--accent)', minWidth: '24px' }}>#{a.ranking}</span>
                <span>{a.naam}</span>
                <span style={{ color: 'var(--muted)', fontSize: '12px' }}>— {a.beschrijving.split('.')[0]}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── SITUATIE FILTER ── */}
      <div style={{ background: 'white', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: '20px 0', marginBottom: '0' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 600, marginBottom: '12px', color: 'var(--muted)' }}>
            Snel filteren op jouw situatie:
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { href: '/voor/koppel', label: '👫 Voor koppels' },
              { href: '/voor/gezin', label: '👨‍👩‍👧 Voor gezinnen' },
              { href: '/voor/vegetariers', label: '🌱 Vegetarisch' },
              { href: '/voor/budget', label: '💰 Beste budget' },
              { href: '/voor/bio', label: '🌿 Biologisch' },
            ].map((f) => (
              <Link
                key={f.href}
                href={f.href}
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '8px 16px',
                  border: '2px solid var(--rule)',
                  borderRadius: '4px',
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  background: 'var(--paper)',
                }}
                className="hover:border-red-700 hover:text-red-700 transition-colors"
              >
                {f.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── TOP PICK (#1) ── */}
      <div className="max-w-3xl mx-auto px-6 mt-10">
        {top[0] && (
          <div
            id={top[0].slug}
            style={{
              background: 'white',
              border: '3px solid var(--ink)',
              padding: '32px',
              position: 'relative',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-14px',
                left: '24px',
                background: 'var(--accent)',
                color: 'white',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '4px 14px',
              }}
            >
              ⭐ Onze #1 keuze
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Rank + logo */}
              <div className="flex md:flex-col items-center gap-4">
                <div className="rank-number">1</div>
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    background: '#f5f5f5',
                    border: '2px solid var(--rule)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '36px',
                  }}
                >
                  {top[0].logo}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2">
                <h2
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    marginBottom: '4px',
                  }}
                >
                  {top[0].naam}
                </h2>
                <div
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '10px',
                  }}
                >
                  Beste keuze voor de meeste Belgen
                </div>
                <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '15px', lineHeight: 1.65, color: '#444', marginBottom: '16px' }}>
                  {top[0].beschrijving}
                </p>

                {/* Specs row */}
                <div
                  style={{
                    display: 'flex',
                    border: '1px solid var(--rule)',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    fontFamily: 'Outfit, sans-serif',
                    marginBottom: '16px',
                  }}
                >
                  {[
                    { val: top[0].score.toFixed(1), key: 'Score' },
                    { val: `€${top[0].prijsPerPortie.toFixed(2)}`, key: 'Per portie' },
                    { val: `${top[0].aantalRecepten}+`, key: 'Recepten/week' },
                    { val: top[0].bezorging === 'gratis' ? 'Gratis' : `€${top[0].bezorgkost}`, key: 'Bezorging' },
                  ].map((s, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        padding: '10px 12px',
                        borderRight: i < 3 ? '1px solid var(--rule)' : 'none',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: '16px' }}>{s.val}</div>
                      <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{s.key}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a href={`/ga/${top[0].slug}`} className="btn-affiliate" target="_blank" rel="noopener noreferrer nofollow">
                    Probeer {top[0].naam} →
                  </a>
                  {top[0].kortingscode && (
                    <div className="code-pill">
                      Code: <strong>{top[0].kortingscode}</strong> — {top[0].kortingBedrag}
                    </div>
                  )}
                  <Link href={`/aanbieder/${top[0].slug}`} className="btn-secondary">
                    Lees onze volledige review
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── RANKINGS #2 en #3 ── */}
      <div className="max-w-3xl mx-auto px-6 mb-2">
        {top.slice(1).map((a) => (
          <div
            key={a.slug}
            id={a.slug}
            style={{
              display: 'grid',
              gridTemplateColumns: '56px 64px 1fr',
              gap: '20px',
              padding: '28px 0',
              borderBottom: '1px solid var(--rule)',
              alignItems: 'start',
            }}
          >
            <div className="rank-number" style={{ fontSize: '48px' }}>{a.ranking}</div>
            <div
              style={{
                width: '56px',
                height: '56px',
                background: '#f5f5f5',
                border: '1px solid var(--rule)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
              }}
            >
              {a.logo}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700 }}>{a.naam}</h2>
                {a.tags.slice(0, 1).map((t) => <TagBadge key={t} tag={t} />)}
              </div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 600, color: 'var(--muted)', marginBottom: '8px' }}>
                {a.tagline}
              </div>
              <p style={{ fontFamily: 'Source Serif 4, serif', fontSize: '14px', lineHeight: 1.65, color: '#444', marginBottom: '12px' }}>
                {a.beschrijving}
              </p>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '13px', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 800, fontSize: '18px' }}>€{a.prijsPerPortie.toFixed(2)}/portie</span>
                <span style={{ color: '#f59e0b' }}>{'★'.repeat(Math.round(a.score / 2))}{'☆'.repeat(5 - Math.round(a.score / 2))}</span>
                <span style={{ color: 'var(--muted)' }}>Score: {a.score}</span>
                {a.kortingscode && (
                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Code: {a.kortingscode}</span>
                )}
                <Link
                  href={`/aanbieder/${a.slug}`}
                  style={{ marginLeft: 'auto', color: 'var(--accent)', fontWeight: 700, textDecoration: 'none' }}
                >
                  Lees review →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── RANKINGS #4-9 ── */}
      <div className="max-w-3xl mx-auto px-6 mb-12">
        {rest.map((a) => (
          <div
            key={a.slug}
            id={a.slug}
            style={{
              display: 'grid',
              gridTemplateColumns: '56px 64px 1fr',
              gap: '20px',
              padding: '24px 0',
              borderBottom: '1px solid var(--rule)',
              alignItems: 'start',
            }}
          >
            <div className="rank-number" style={{ fontSize: '40px' }}>{a.ranking}</div>
            <div
              style={{
                width: '48px',
                height: '48px',
                background: '#f5f5f5',
                border: '1px solid var(--rule)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}
            >
              {a.logo}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700 }}>{a.naam}</h3>
                {a.belgisch && <TagBadge tag="🇧🇪 Belgisch" />}
              </div>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', lineHeight: 1.6, color: '#555', marginBottom: '10px' }}>
                {a.beschrijving}
              </p>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '13px', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 700 }}>€{a.prijsPerPortie.toFixed(2)}/portie</span>
                <span style={{ color: 'var(--muted)' }}>Score: {a.score}</span>
                <Link
                  href={`/aanbieder/${a.slug}`}
                  style={{ marginLeft: 'auto', color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: '13px' }}
                >
                  Bekijk review →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── VERGELIJKINGSTABEL ── */}
      <div style={{ background: 'white', borderTop: '3px solid var(--ink)', borderBottom: '1px solid var(--rule)', padding: '48px 0' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '32px',
              fontWeight: 900,
              marginBottom: '8px',
            }}
          >
            Alle maaltijdboxen vergeleken
          </h2>
          <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '14px', color: 'var(--muted)', marginBottom: '24px' }}>
            Overzicht van alle 9 aanbieders op de belangrijkste criteria
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Outfit, sans-serif', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                  {['Aanbieder', 'Score', 'Prijs/portie', 'Recepten', 'Bezorging', 'Belgisch', ''].map((h) => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {aanbieders.sort((a, b) => a.ranking - b.ranking).map((a, i) => (
                  <tr
                    key={a.slug}
                    style={{
                      borderBottom: '1px solid var(--rule)',
                      background: i === 0 ? '#fff9f8' : 'transparent',
                    }}
                  >
                    <td style={{ padding: '12px', fontWeight: i === 0 ? 700 : 400 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent)', minWidth: '20px' }}>#{a.ranking}</span>
                        <span>{a.logo}</span>
                        <span>{a.naam}</span>
                      </div>
                    </td>
                    <td style={{ padding: '12px', fontWeight: 700, color: a.score >= 8 ? 'var(--accent)' : 'var(--ink)' }}>{a.score}</td>
                    <td style={{ padding: '12px' }}>€{a.prijsPerPortie.toFixed(2)}</td>
                    <td style={{ padding: '12px' }}>{a.aantalRecepten}+</td>
                    <td style={{ padding: '12px', color: a.bezorging === 'gratis' ? '#16a34a' : 'var(--muted)' }}>
                      {a.bezorging === 'gratis' ? '✓ Gratis' : `€${a.bezorgkost}`}
                    </td>
                    <td style={{ padding: '12px' }}>{a.belgisch ? '🇧🇪' : '—'}</td>
                    <td style={{ padding: '12px' }}>
                      <Link
                        href={`/aanbieder/${a.slug}`}
                        style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: '12px', whiteSpace: 'nowrap' }}
                      >
                        Review →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
