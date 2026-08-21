import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGids, generateGidsStaticParams, berekenWeekprijs } from '@/lib/gidsen';
import { getAanbieder } from '@/lib/aanbieders';
import { LAATST_BIJGEWERKT } from '@/lib/site';

export async function generateStaticParams() {
  return generateGidsStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGids(slug);
  if (!g) return {};
  const url = `https://bestemaaltijdbox.be/gids/${g.slug}`;
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: g.metaTitle,
      description: g.metaDescription,
      url,
      type: 'article',
      locale: 'nl_BE',
    },
  };
}

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

  // Prijzen komen uit aanbieders.ts; alleen badge, noot en volgorde zijn redactioneel.
  const porties = g.prijsTabel.portiesPerWeek;
  const tabelRijen = g.prijsTabel.rijen.flatMap(rij => {
    const a = getAanbieder(rij.slug);
    if (!a) return [];
    return [{
      ...rij,
      naam: a.naam,
      portie: a.prijsPerPortie,
      bezorging: a.gratisBezorging ? 0 : (a.bezorgkosten ?? 0),
      weekprijs: berekenWeekprijs(a, porties),
      welkomst: a.kortingsCode?.bedragKort ?? '—',
      isActief: a.status === 'active',
    }];
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
          {' → '}
          <strong style={{ color: 'var(--ink)' }}>{g.broodkruimel}</strong>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
            ✓ Prijzen geverifieerd · {LAATST_BIJGEWERKT}
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 7vw, 40px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            {g.titel}
          </h1>
          <div style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.8, maxWidth: 680 }}>
            {g.introParagrafen.map(tekst => (
              <p key={tekst} style={{ margin: '0 0 12px' }}>{tekst}</p>
            ))}
            <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 10, padding: '12px 16px', fontFamily: 'monospace', fontSize: 13, color: '#1B4332', fontWeight: 600, marginBottom: 12 }}>
              {g.formule}
            </div>
            <p style={{ margin: 0 }}>{g.slotIntro}</p>
          </div>
        </div>

        {/* Winnaar-box */}
        <div style={{ background: '#F0FDF4', border: '1.5px solid #52B788', borderRadius: 16, marginBottom: 36, overflow: 'hidden' }}>
          <div style={{ height: 4, background: 'linear-gradient(90deg, #1B4332, #52B788)' }} />
          <div style={{ padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1B4332', marginBottom: 6 }}>{g.winnaar.kop}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: '#14532D', marginBottom: 6 }}>{g.winnaar.naam}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1B4332', marginBottom: 4 }}>{g.winnaar.prijsRegel}</div>
              <div style={{ fontSize: 13, color: '#374151', marginBottom: 12 }}>{g.winnaar.dealRegel}</div>
              <div style={{ fontSize: 12, color: '#6B7280' }}>
                {g.winnaar.alternatiefInleiding}{' '}
                <Link href={`/aanbieder/${g.winnaar.alternatiefSlug}`} style={{ color: '#1B4332', fontWeight: 600, textDecoration: 'underline' }}>
                  {g.winnaar.alternatiefLabel}
                </Link>
              </div>
            </div>
            <Link href={`/ga/${g.winnaar.slug}`} style={{ display: 'block', background: '#1B4332', color: 'white', textAlign: 'center', padding: '14px 28px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, boxShadow: '0 2px 8px rgba(27,67,50,0.18)' }}>
              Bekijk {g.winnaar.naam} →
            </Link>
          </div>
        </div>

        {/* Prijstabel */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 8, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            {g.prijsTabel.kop}
          </h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>{g.prijsTabel.subkop}</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, background: 'white', border: '1px solid var(--rule)', borderRadius: 12, overflow: 'hidden' }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  {['Aanbieder', 'Onze keuze', '€/portie', 'Bezorging', `€/week (2p, 3×)`, 'Welkomstdeal', 'Bekijk'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tabelRijen.map((r, i) => (
                  <tr key={r.slug} style={{ borderBottom: '1px solid var(--rule)', background: i === 0 ? '#F0FDF4' : i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 600 }}>
                      <Link href={`/aanbieder/${r.slug}`} style={{ color: 'var(--ink)', textDecoration: 'none' }}>{r.naam}</Link>
                      {r.noot && <span style={{ display: 'block', fontSize: 11, color: '#D97706', fontWeight: 400 }}>{r.noot}</span>}
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      {r.badge && (
                        <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332', whiteSpace: 'nowrap' }}>
                          {r.badge}
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '10px 12px' }}>vanaf €{r.portie.toFixed(2)}</td>
                    <td style={{ padding: '10px 12px', color: r.bezorging === 0 ? '#16A34A' : '#D97706', fontWeight: 600 }}>
                      {r.bezorging === 0 ? 'Gratis' : `€${r.bezorging}`}
                    </td>
                    <td style={{ padding: '10px 12px', fontFamily: 'Fraunces, serif', fontWeight: 900, fontSize: 15, color: i < 3 ? '#1B4332' : 'var(--ink)' }}>
                      €{r.weekprijs.toFixed(2)}
                    </td>
                    <td style={{ padding: '10px 12px', fontSize: 12, color: r.welkomst === '—' ? 'var(--muted)' : '#15803D', fontWeight: r.welkomst === '—' ? 400 : 600 }}>
                      {r.welkomst}
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      <Link
                        href={r.isActief ? `/ga/${r.slug}` : `/aanbieder/${r.slug}`}
                        style={{
                          display: 'inline-block',
                          background: i === 0 ? '#1B4332' : 'transparent',
                          color: i === 0 ? 'white' : 'var(--ink)',
                          border: i === 0 ? 'none' : '1px solid var(--rule)',
                          padding: '5px 10px',
                          borderRadius: 8,
                          fontSize: 12,
                          fontWeight: 600,
                          textDecoration: 'none',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Bekijk →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8 }}>{g.prijsTabel.voetnoot}</p>
        </div>

        {/* Top 3 welkomstdeal vs reguliere prijs */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            {g.topKeuzes.kop}
          </h2>
          <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.7, marginBottom: 20 }}>{g.topKeuzes.intro}</p>
          {g.topKeuzes.items.map((keuze, idx) => {
            const rang = idx + 1;
            const a = getAanbieder(keuze.slug);
            return (
              <div key={keuze.slug} style={{ background: 'white', borderRadius: 16, border: rang === 1 ? '1.5px solid var(--mint)' : '1.5px solid var(--rule)', padding: 24, marginBottom: 16, position: 'relative', overflow: 'hidden' }}>
                {rang === 1 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1B4332, var(--mint))' }} />}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 32, fontWeight: 900, color: rang === 1 ? '#C8EAD8' : 'var(--rule)', lineHeight: 1, flexShrink: 0 }}>{rang}</div>
                  <div style={{ flex: 1, minWidth: 180 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 2 }}>
                      <span style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 700 }}>{a?.naam ?? keuze.slug}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332' }}>{keuze.badge}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <Link href={`/ga/${keuze.slug}`} style={{ display: 'block', background: keuze.accent, color: 'white', textAlign: 'center', padding: '10px 16px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                      Bekijk deal →
                    </Link>
                    <Link href={`/aanbieder/${keuze.slug}`} style={{ display: 'block', border: '1.5px solid var(--rule)', textAlign: 'center', padding: '8px 16px', borderRadius: 10, fontWeight: 600, fontSize: 12, textDecoration: 'none', color: 'var(--ink)', whiteSpace: 'nowrap' }}>
                      Lees review
                    </Link>
                  </div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#4B5563', marginBottom: 14 }}>{keuze.uitleg}</p>
                <div className="two-col-grid" style={{ gap: 10 }}>
                  <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '10px 12px' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#15803D', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 3 }}>Met welkomstdeal</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#14532D' }}>{keuze.metDeal}</div>
                  </div>
                  <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 8, padding: '10px 12px' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 3 }}>Reguliere prijs</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#78350F' }}>{keuze.naDeal}</div>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 10 }}>⚠️ {keuze.dealOpmerking}</div>
              </div>
            );
          })}
        </div>

        {/* Verborgen kosten */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            {g.verborgenKosten.kop}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {g.verborgenKosten.items.map(({ icon, titel, tekst }) => (
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
            {g.faqKop}
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

        {/* Conclusie per situatie */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            {g.perSituatie.kop}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {g.perSituatie.items.map(({ situatie, winnaarNaam, slug: winnaarSlug, detail, achtergrond, rand }) => (
              <div key={situatie} style={{ background: achtergrond, border: `1px solid ${rand}`, borderRadius: 12, padding: '16px 20px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: 4 }}>{situatie}</div>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
                  → <Link href={`/aanbieder/${winnaarSlug}`} style={{ color: 'var(--ink)', textDecoration: 'none' }}>{winnaarNaam}</Link>
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
