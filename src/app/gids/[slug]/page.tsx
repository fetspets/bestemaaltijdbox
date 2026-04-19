import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGids, generateGidsStaticParams } from '@/lib/gidsen';
import { getAanbieder, aanbieders } from '@/lib/aanbieders';

export async function generateStaticParams() {
  return generateGidsStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGids(slug);
  if (!g) return {};
  return {
    title: g.metaTitle,
    description: g.metaDescription,
  };
}

const accentColors: Record<string, string> = {
  hellofresh: '#1B4332',
  foodbag: '#1E40AF',
  'marley-spoon': '#7C3AED',
  ekomenu: '#166534',
  'carrefour-simply-you': '#1B4332',
  factor: '#7C3AED',
  foodmaker: '#1B4332',
};

export default async function GidsPagina({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGids(slug);
  if (!g) notFound();

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: g.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const tabelAanbieders = g.tabelSlugs.map(s => getAanbieder(s)).filter(Boolean) as NonNullable<ReturnType<typeof getAanbieder>>[];

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
          <strong style={{ color: 'var(--ink)' }}>{g.titel}</strong>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
            ✓ Onafhankelijk getest · april 2026
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 7vw, 42px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            {g.titel}
          </h1>
          <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.8, maxWidth: 640 }}>{g.intro}</p>
        </div>

        {/* Aanbevelingen */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Onze top {g.aanbevelingen.length}
          </h2>
          {g.aanbevelingen.map((rec, i) => {
            const a = getAanbieder(rec.slug);
            if (!a) return null;
            const accent = accentColors[a.slug] || '#1B4332';
            return (
              <div key={rec.slug} style={{
                background: 'white', borderRadius: 16, border: '1.5px solid var(--rule)',
                padding: 24, marginBottom: 16, position: 'relative', overflow: 'hidden',
              }}>
                {i === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, #1B4332, var(--mint))` }} />}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 200 }}>
                    <div style={{ fontFamily: 'Fraunces, serif', fontSize: 32, fontWeight: 900, color: i === 0 ? '#C8EAD8' : 'var(--rule)', lineHeight: 1, flexShrink: 0 }}>{i + 1}</div>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--cream)', border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0, overflow: 'hidden' }}>
                      {a.logo.startsWith('/') ? <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} /> : a.logo}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 2 }}>
                        <span style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 700 }}>{a.naam}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332' }}>{rec.badge}</span>
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--muted)' }}>v.a. €{a.prijsPerPortie.toFixed(2)}/portie · Score: {a.score.totaal.toFixed(1)}/10</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 160 }}>
                    <Link href={`/ga/${a.slug}`} style={{ display: 'block', background: accent, color: 'white', textAlign: 'center', padding: '11px 16px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                      Bekijk {a.naam} →
                    </Link>
                    <Link href={`/aanbieder/${a.slug}`} style={{ display: 'block', border: '1.5px solid var(--rule)', textAlign: 'center', padding: '9px 16px', borderRadius: 10, fontWeight: 600, fontSize: 12, textDecoration: 'none', color: 'var(--ink)', whiteSpace: 'nowrap' }}>
                      Lees review
                    </Link>
                  </div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#4B5563', marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--rule)' }}>{rec.reden}</p>
              </div>
            );
          })}
        </div>

        {/* Vergelijkingstabel */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Snel overzicht
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, minWidth: 500 }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  {['Aanbieder', 'Score', 'Prijs/portie', 'Bezorging', '🇧🇪', ''].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 10, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tabelAanbieders.map((a, i) => (
                  <tr key={a.slug} style={{ borderBottom: '1px solid var(--rule)', background: i === 0 ? '#F0FDF4' : 'white' }}>
                    <td style={{ padding: '10px 12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
                        <div style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                          {a.logo.startsWith('/') ? <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : <span>{a.logo}</span>}
                        </div>
                        {a.naam}
                      </div>
                    </td>
                    <td style={{ padding: '10px 12px', fontWeight: 800, color: '#1B4332' }}>{a.score.totaal.toFixed(1)}</td>
                    <td style={{ padding: '10px 12px' }}>v.a. €{a.prijsPerPortie.toFixed(2)}</td>
                    <td style={{ padding: '10px 12px', color: a.gratisBezorging ? '#16A34A' : '#DC2626', fontWeight: 600 }}>
                      {a.gratisBezorging ? 'Gratis' : `€${a.bezorgkosten}`}
                    </td>
                    <td style={{ padding: '10px 12px', textAlign: 'center' }}>{a.belgisch ? '🇧🇪' : '—'}</td>
                    <td style={{ padding: '10px 12px' }}>
                      <Link href={`/aanbieder/${a.slug}`} style={{ color: '#1B4332', fontWeight: 700, textDecoration: 'none', fontSize: 11, whiteSpace: 'nowrap' }}>Review →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Uitleg blokken per situatie */}
        {g.uitlegBlokken && g.uitlegBlokken.length > 0 && (
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
              Per situatie: wat is de goedkoopste keuze?
            </h2>
            {g.uitlegBlokken.map(blok => (
              <div key={blok.titel} style={{ marginBottom: 16, padding: '20px 24px', border: '1.5px solid var(--rule)', borderRadius: 12, background: 'white' }}>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 17, fontWeight: 800, marginBottom: 8, color: 'var(--ink)' }}>{blok.titel}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: '#4B5563', margin: 0 }}>{blok.tekst}</p>
              </div>
            ))}
          </div>
        )}

        {/* FAQ */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Veelgestelde vragen
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
            {g.faq.map(({ q, a }) => (
              <div key={q} style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{q}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: '#4B5563' }}>{a}</div>
              </div>
            ))}
          </div>
        </div>

        <Link href="/" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>← Terug naar alle maaltijdboxen</Link>
      </div>
    </>
  );
}
