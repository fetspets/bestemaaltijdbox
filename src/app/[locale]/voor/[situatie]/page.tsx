import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAanbiedersByFilter } from '@/lib/aanbieders';
import type { Locale } from '@/i18n/routing';
import { generateSituatieStaticParams } from '@/lib/situaties';
import { situatiesVoor, situatieVoor } from '@/lib/teksten';
import { buildMetadata } from '@/lib/seo';
import ContentBlokken from '@/components/ContentBlokken';

export async function generateStaticParams() {
  return generateSituatieStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ situatie: string; locale: string }> }): Promise<Metadata> {
  const { situatie, locale } = await params;
  const s = situatieVoor(situatie, locale as Locale);
  if (!s) return {};
  return buildMetadata({
    locale: locale as Locale,
    route: '/voor/[situatie]',
    params: { situatie },
    pad: `/voor/${situatie}`,
    titel: s.seoTitel,
    beschrijving: s.seoDesc,
  });
}

const accentColors: Record<string, string> = {
  hellofresh: '#1B4332', foodbag: '#1E40AF', 'marley-spoon': '#7C3AED',
};

export default async function SituatiePage({ params }: { params: Promise<{ situatie: string; locale: string }> }) {
  const { situatie, locale } = await params;
  const taal = locale as Locale;
  const s = situatieVoor(situatie, taal);
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
        <ContentBlokken blokken={s.blokken} />
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
                    { val: `vanaf €${a.prijsPerPortie.toFixed(2).replace('.', ',')}`, key: 'Per portie' },
                    { val: `${a.receptenPerWeek}+`, key: 'Recepten/week' },
                    { val: a.gratisBezorging ? 'Gratis' : `€${(a.bezorgkosten ?? 0).toFixed(2).replace('.', ',')}`, key: 'Bezorging' },
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
          {Object.entries(situatiesVoor(taal)).filter(([key]) => key !== situatie).map(([key, val]) => (
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
