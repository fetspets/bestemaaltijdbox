import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAanbiedersByFilter, getAanbieder } from '@/lib/aanbieders';
import { berekenWeekprijs } from '@/lib/gidsen';
import {
  situaties,
  getSituatie,
  generateSituatieStaticParams,
  type SituatieBlok,
  type SituatieTabelKolom,
} from '@/lib/situaties';

export async function generateStaticParams() {
  return generateSituatieStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ situatie: string }> }): Promise<Metadata> {
  const { situatie } = await params;
  const s = getSituatie(situatie);
  if (!s) return {};
  const url = `https://bestemaaltijdbox.be/voor/${situatie}`;
  return {
    title: s.seoTitel,
    description: s.seoDesc,
    alternates: { canonical: url },
    openGraph: {
      title: s.seoTitel,
      description: s.seoDesc,
      url,
      type: 'website',
      locale: 'nl_BE',
    },
  };
}

const accentColors: Record<string, string> = {
  hellofresh: '#1B4332', foodbag: '#1E40AF', 'marley-spoon': '#7C3AED',
};

const euro = (n: number) => `€${n.toFixed(2).replace('.', ',')}`;

/** Waarde van één tabelcel; afgeleide kolommen lezen uit aanbieders.ts. */
function celWaarde(kolom: SituatieTabelKolom, slug: string, porties: number): string {
  const a = getAanbieder(slug);
  if (!a) return '—';
  switch (kolom.soort) {
    case 'portie': return `vanaf ${euro(a.prijsPerPortie)}`;
    case 'weekprijs': return euro(berekenWeekprijs(a, porties));
    case 'recepten': return `${a.receptenPerWeek}+`;
    case 'score': return `${a.score.totaal.toFixed(1)}/10`;
    case 'korting': return a.kortingsCode?.bedragKort ?? '—';
    case 'tekst': return kolom.waarden[slug] ?? '—';
  }
}

function Blok({ blok }: { blok: SituatieBlok }) {
  const kopStijl = { fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' } as const;

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

    case 'topAanbieders':
      return (
        <div style={{ marginBottom: 36 }}>
          <h2 style={kopStijl}>{blok.kop}</h2>
          {blok.items.map((item, i) => {
            const a = getAanbieder(item.slug);
            if (!a) return null;
            const porties = 6;
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
                    { val: euro(berekenWeekprijs(a, porties)), key: 'Per week (2p, 3×)' },
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

export default async function SituatiePage({ params }: { params: Promise<{ situatie: string }> }) {
  const { situatie } = await params;
  const s = getSituatie(situatie);
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
          {s.uitlegParagraphs ? s.uitlegParagraphs.map((p, i) => (
            <p key={i} style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', margin: i > 0 ? '12px 0 0' : 0 }} dangerouslySetInnerHTML={{ __html: p }} />
          )) : (
            <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', margin: 0 }}>{s.uitleg}</p>
          )}
        </div>
      </div>

      {/* Uitgewerkte situaties brengen hun eigen opbouw mee; de rest krijgt de
          standaardranglijst uit aanbieders.ts. */}
      {s.blokken ? (
        s.blokken.map((blok, i) => <Blok key={`${blok.type}-${i}`} blok={blok} />)
      ) : (
        <>
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
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--cream)', border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0, overflow: 'hidden' }}>
                    {a.logo.startsWith('/')
                      // eslint-disable-next-line @next/next/no-img-element
                      ? <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
                      : a.logo}
                  </div>
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

                <div className="three-col-stats-grid" style={{ border: '1px solid var(--rule)', borderRadius: 10, overflow: 'hidden', fontSize: 12, marginBottom: 14 }}>
                  {[
                    { val: `vanaf ${euro(a.prijsPerPortie)}`, key: 'Per portie' },
                    { val: `${a.receptenPerWeek}+`, key: 'Recepten/week' },
                    { val: a.gratisBezorging ? 'Gratis' : euro(a.bezorgkosten ?? 0), key: 'Bezorging' },
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
        </>
      )}

      {/* Wanneer niet geschikt */}
      {s.nietGeschiktAls.length > 0 && (
        <div style={{ background: '#FFF5F4', border: '1px solid var(--red-border)', borderRadius: 12, padding: '16px 20px', marginBottom: 32 }}>
          <div style={{ fontWeight: 700, marginBottom: 10, color: 'var(--red)', fontSize: 14 }}>⚠️ Wanneer is een maaltijdbox minder geschikt?</div>
          <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {s.nietGeschiktAls.map((item, i) => (
              <li key={i} style={{ fontSize: 13, lineHeight: 1.6, color: '#374151' }}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* FAQ */}
      <div style={{ marginTop: 40, marginBottom: 40 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
          {s.faqKop ?? 'Veelgestelde vragen'}
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
