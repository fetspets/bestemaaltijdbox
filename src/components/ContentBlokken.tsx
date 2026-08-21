import Link from 'next/link';
import { getAanbieder } from '@/lib/aanbieders';
import { berekenWeekprijs } from '@/lib/gidsen';
import type { ContentBlok, BlokTabelKolom } from '@/lib/blokken';

const euro = (n: number) => `€${n.toFixed(2).replace('.', ',')}`;

const kopStijl = {
  fontFamily: 'Fraunces, serif',
  fontSize: 'clamp(18px, 4vw, 24px)',
  fontWeight: 900,
  marginBottom: 16,
  paddingBottom: 12,
  borderBottom: '2px solid var(--ink)',
} as const;

/** Waarde van één tabelcel; afgeleide kolommen lezen uit aanbieders.ts. */
function celWaarde(kolom: BlokTabelKolom, slug: string, porties: number): string {
  const a = getAanbieder(slug);
  if (!a) return '—';
  switch (kolom.soort) {
    case 'portie': return `vanaf ${euro(a.prijsPerPortie)}`;
    case 'weekprijs': return euro(berekenWeekprijs(a, porties));
    case 'recepten': return `${a.receptenPerWeek}+`;
    case 'score': return `${a.score.totaal.toFixed(1)}/10`;
    case 'korting': return a.kortingsCode?.bedragKort ?? '—';
    case 'opzeg': return a.opzegTermijn;
    case 'tekst': return kolom.waarden[slug] ?? '—';
  }
}

export default function ContentBlokken({ blokken }: { blokken: ContentBlok[] }) {
  return <>{blokken.map((blok, i) => <Blok key={`${blok.type}-${i}`} blok={blok} />)}</>;
}

export function Blok({ blok }: { blok: ContentBlok }) {
  switch (blok.type) {
    case 'notitie':
      return (
        <div style={{ background: blok.achtergrond, border: `1px solid ${blok.rand}`, borderRadius: 12, padding: 20, marginBottom: 36 }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{blok.kop}</div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: '#374151', margin: 0 }}>
            {blok.regels.map(({ label, tekst }, i) => (
              <span key={label}>
                {i > 0 && <br />}
                <strong>{label}</strong> {tekst}
              </span>
            ))}
          </p>
        </div>
      );

    case 'infokaarten':
      return (
        <div style={{ marginBottom: 36 }}>
          <h2 style={kopStijl}>{blok.kop}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {blok.items.map(({ icon, titel, tekst }) => (
              <div key={titel} style={{ background: 'white', borderRadius: 12, padding: 16, border: '1px solid var(--rule)' }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{titel}</div>
                <div style={{ fontSize: 13, lineHeight: 1.6, color: '#4B5563' }}>{tekst}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'winnaar': {
      const a = getAanbieder(blok.slug);
      if (!a) return null;
      return (
        <div style={{ background: '#F0FDF4', border: '1.5px solid #52B788', borderRadius: 16, marginBottom: 36, overflow: 'hidden' }}>
          <div style={{ height: 4, background: 'linear-gradient(90deg, #1B4332, #52B788)' }} />
          <div style={{ padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1B4332', marginBottom: 6 }}>{blok.kop}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: '#14532D', marginBottom: 6 }}>{a.naam}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1B4332', marginBottom: 4 }}>{blok.prijsRegel}</div>
              <div style={{ fontSize: 13, color: '#374151' }}>{blok.dealRegel}</div>
            </div>
            <Link href={`/ga/${a.slug}`} style={{ display: 'block', background: '#1B4332', color: 'white', textAlign: 'center', padding: '14px 28px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, boxShadow: '0 2px 8px rgba(27,67,50,0.18)' }}>
              {blok.knoptekst}
            </Link>
          </div>
        </div>
      );
    }

    case 'topAanbieders':
      return (
        <div style={{ marginBottom: 36 }}>
          <h2 style={kopStijl}>{blok.kop}</h2>
          {blok.items.map((item, i) => {
            const a = getAanbieder(item.slug);
            if (!a) return null;
            return (
              <div key={item.slug} style={{
                background: 'white', borderRadius: 16, marginBottom: 14,
                border: i === 0 ? '1.5px solid var(--mint)' : '1.5px solid var(--rule)',
                padding: 20, position: 'relative', overflow: 'hidden',
              }}>
                {i === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1B4332, var(--mint))' }} />}

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--cream)', border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 2 }}>
                      <span style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 700 }}>{a.naam}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: item.badgeAchtergrond, color: item.badgeTekst }}>{item.badge}</span>
                      {item.waarschuwing && (
                        <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 100, background: '#FEF3C7', color: '#92400E' }}>{item.waarschuwing}</span>
                      )}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>{item.tagline}</div>
                  </div>
                  <div style={{ textAlign: 'center', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'Fraunces, serif', fontSize: 32, fontWeight: 900, color: '#1B4332', lineHeight: 1 }}>{a.score.totaal.toFixed(1)}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>/10</div>
                  </div>
                </div>

                <p style={{ fontSize: 14, lineHeight: 1.6, color: '#4B5563', marginBottom: 14 }}>{item.waarom}</p>

                <div className="ranking-stats-grid" style={{ marginBottom: 14 }}>
                  {[
                    { val: `vanaf ${euro(a.prijsPerPortie)}`, key: 'Per portie' },
                    { val: euro(berekenWeekprijs(a, 6)), key: 'Per week (2p, 3×)' },
                    { val: `${a.receptenPerWeek}+`, key: 'Recepten/week' },
                    { val: a.gratisBezorging ? 'Gratis' : euro(a.bezorgkosten ?? 0), key: 'Bezorging' },
                  ].map(({ val, key }, idx, arr) => (
                    <div key={key} style={{ padding: '8px 6px', borderRight: idx < arr.length - 1 ? '1px solid var(--rule)' : 'none', textAlign: 'center' }}>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{val}</div>
                      <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 1 }}>{key}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '8px 12px', fontSize: 13, color: '#15803D', marginBottom: 12, fontWeight: 600 }}>
                  🏷️ {item.deal}
                </div>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <Link href={`/ga/${a.slug}`} style={{ flex: 1, minWidth: 160, display: 'block', background: a.merkKleur, color: 'white', textAlign: 'center', padding: '12px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                    Bekijk deal →
                  </Link>
                  <Link href={`/aanbieder/${a.slug}`} style={{ flex: 1, minWidth: 160, display: 'block', border: '1.5px solid var(--rule)', textAlign: 'center', padding: '10px', borderRadius: 10, fontWeight: 600, fontSize: 13, textDecoration: 'none', color: 'var(--ink)' }}>
                    Lees volledige review
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      );

    case 'overigeAanbieders':
      return (
        <div style={{ marginBottom: 36 }}>
          <h2 style={kopStijl}>{blok.kop}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {blok.items.map(({ slug, omschrijving }) => {
              const a = getAanbieder(slug);
              if (!a) return null;
              return (
                <div key={slug} style={{ background: 'white', borderRadius: 12, padding: 16, border: '1px solid var(--rule)', display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700 }}>{a.naam}</span>
                      <span style={{ fontFamily: 'Fraunces, serif', fontSize: 14, fontWeight: 900, color: '#1B4332' }}>{a.score.totaal.toFixed(1)}/10</span>
                      <span style={{ fontSize: 12, color: 'var(--muted)' }}>· vanaf {euro(a.prijsPerPortie)}</span>
                    </div>
                    <p style={{ fontSize: 13, lineHeight: 1.6, color: '#4B5563', margin: 0 }}>{omschrijving}</p>
                  </div>
                  <Link href={`/aanbieder/${slug}`} style={{ fontSize: 13, fontWeight: 600, color: '#1B4332', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
                    Meer info →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      );

    case 'tabel':
      return (
        <div style={{ marginBottom: 36 }}>
          <h2 style={kopStijl}>{blok.kop}</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, background: 'white', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--rule)' }}>
              <thead>
                <tr style={{ background: 'var(--cream)', borderBottom: '2px solid var(--rule)' }}>
                  {['Aanbieder', ...blok.kolommen.map(k => k.kop)].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 700, whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {blok.slugs.map((slug, i) => {
                  const a = getAanbieder(slug);
                  if (!a) return null;
                  return (
                    <tr key={slug} style={{ borderBottom: '1px solid var(--rule)', background: i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 600 }}>
                        <Link href={`/aanbieder/${slug}`} style={{ color: 'var(--ink)', textDecoration: 'none' }}>{a.naam}</Link>
                      </td>
                      {blok.kolommen.map(kolom => {
                        const waarde = celWaarde(kolom, slug, blok.portiesPerWeek);
                        const isLeeg = waarde === '—';
                        const isKorting = kolom.soort === 'korting';
                        return (
                          <td key={kolom.kop} style={{
                            padding: '10px 12px',
                            color: isKorting && !isLeeg ? '#15803D' : isLeeg ? 'var(--muted)' : '#374151',
                            fontWeight: isKorting && !isLeeg ? 600 : 400,
                          }}>
                            {waarde}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>{blok.voetnoot}</p>
          </div>
        </div>
      );

    case 'scenarios':
      return (
        <div style={{ marginBottom: 36 }}>
          <h2 style={kopStijl}>{blok.kop}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {blok.items.map(({ scenario, aanbeveling, slug, uitleg, achtergrond, rand }) => (
              <div key={scenario} style={{ background: achtergrond, border: `1px solid ${rand}`, borderRadius: 12, padding: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: 4 }}>{scenario}</div>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
                  → <Link href={`/aanbieder/${slug}`} style={{ color: 'var(--ink)', textDecoration: 'none' }}>{aanbeveling}</Link>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: '#374151', margin: 0 }}>{uitleg}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 'slotCta':
      return (
        <div style={{ background: '#1B4332', borderRadius: 16, padding: 28, textAlign: 'center', color: 'white', marginBottom: 36 }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 900, marginBottom: 8 }}>{blok.kop}</div>
          <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.85, maxWidth: 480, margin: '0 auto 20px' }}>{blok.tekst}</p>
          <Link href={`/ga/${blok.slug}`} style={{ display: 'inline-block', background: 'white', color: '#1B4332', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            {blok.knoptekst}
          </Link>
          <div style={{ fontSize: 12, opacity: 0.6, marginTop: 10 }}>{blok.subtekst}</div>
        </div>
      );
  }
}
