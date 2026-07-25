import Link from 'next/link';
import { getAanbieder } from '@/lib/aanbieders';
import type { FactorVergelijking } from '@/lib/factorVergelijkingen';
import GesponsordLabel from '@/components/GesponsordLabel';

const FACTOR_ACCENT = '#B45309';
const kookboxAccent: Record<string, string> = {
  hellofresh: '#1B4332',
  foodbag: '#1E40AF',
  'marley-spoon': '#7C3AED',
};

// Gedeelde render voor de gesponsorde Factor-vs-kookbox-pagina's.
// Eerlijke "hangt af van of je wil koken"-opzet — geen valse winnaar-claim.
export default function FactorVergelijkingPagina({ data }: { data: FactorVergelijking }) {
  const factor = getAanbieder('factor')!;
  const kookbox = getAanbieder(data.kookboxSlug)!;
  const accent = kookboxAccent[data.kookboxSlug] ?? '#1B4332';
  const canonical = `https://bestemaaltijdbox.be/vergelijk/${data.slug}`;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bestemaaltijdbox.be' },
      { '@type': 'ListItem', position: 2, name: 'Vergelijk', item: 'https://bestemaaltijdbox.be/vergelijk' },
      { '@type': 'ListItem', position: 3, name: `Factor vs ${kookbox.naam}`, item: canonical },
    ],
  };

  const tabel: Array<[string, string, string]> = [
    ['Bereidingswijze', 'Kant-en-klaar (opwarmen)', 'Zelf koken'],
    ['Kooktijd', '2–3 min', data.kookboxKooktijd],
    ['Prijs per portie', `v.a. €${factor.prijsPerPortie.toFixed(2).replace('.', ',')}`, `v.a. €${kookbox.prijsPerPortie.toFixed(2).replace('.', ',')}`],
    ['Bezorging', factor.gratisBezorging ? 'Gratis' : `€${factor.bezorgkosten?.toFixed(2).replace('.', ',')}`, kookbox.gratisBezorging ? 'Gratis' : `€${kookbox.bezorgkosten?.toFixed(2).replace('.', ',')}`],
    ['Recepten per week', `${factor.receptenPerWeek}`, `${kookbox.receptenPerWeek}+`],
    ['Levergebied', 'Heel België', data.kookboxLevergebied],
    ['Onze score', `${factor.score.totaal.toFixed(1)}/10`, `${kookbox.score.totaal.toFixed(1)}/10`],
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
          {' → '}
          <span style={{ color: 'var(--muted)' }}>Vergelijk</span>
          {' → '}
          <strong style={{ color: 'var(--ink)' }}>Factor vs {kookbox.naam}</strong>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
            ✓ Onafhankelijk vergeleken · 2026
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 7vw, 42px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            Factor vs {kookbox.naam}: opwarmen of zelf koken?
          </h1>
          {data.intro.map((p, i) => (
            <p key={i} style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 680, marginBottom: 12 }}>{p}</p>
          ))}
        </div>

        {/* Sponsor-disclosure */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 10, padding: '10px 14px', marginBottom: 32 }}>
          <GesponsordLabel />
          <span style={{ fontSize: 13, color: '#92400E', lineHeight: 1.5 }}>
            Deze pagina kwam tot stand in samenwerking met Factor. Onze scores en rangschikking blijven onafhankelijk — {kookbox.naam} scoort in onze test hoger dan Factor.
          </span>
        </div>

        {/* Score-overzicht */}
        <div className="two-col-grid" style={{ marginBottom: 36 }}>
          {[{ a: factor, ac: FACTOR_ACCENT }, { a: kookbox, ac: accent }].map(({ a, ac }) => (
            <div key={a.slug} style={{ background: 'white', borderRadius: 16, border: `2px solid ${ac}`, padding: 24, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: ac }} />
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                <img src={a.logo} alt={a.naam} style={{ height: a.slug === 'factor' ? 22 : 48, width: 'auto', maxWidth: 120, objectFit: 'contain' }} />
              </div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 4 }}>{a.naam}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 40, fontWeight: 900, color: ac, lineHeight: 1 }}>{a.score.totaal.toFixed(1)}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>/10 totaalscore</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: ac }}>v.a. €{a.prijsPerPortie.toFixed(2).replace('.', ',')}/portie</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{a.tagline}</div>
            </div>
          ))}
        </div>

        {/* Snel overzicht */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>Snel overzicht</h2>
          <div style={{ borderRadius: 12, overflowX: 'auto', border: '1.5px solid var(--rule)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Kenmerk</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Factor</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{kookbox.naam}</th>
                </tr>
              </thead>
              <tbody>
                {tabel.map(([k, f, kb], i) => (
                  <tr key={k} style={{ borderBottom: '1px solid var(--rule)', background: i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700 }}>{k}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>{f}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>{kb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 8 }}>Prijzen zijn richtprijzen en kunnen wijzigen. Reken je werkelijke weekprijs: portieprijs × porties + bezorgkost − welkomstkorting.</p>
        </div>

        {/* Kies Factor als */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>Kies Factor als…</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {data.kiesFactorAls.map((item) => (
              <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.6, color: '#4B5563', background: 'white', border: '1px solid var(--rule)', borderRadius: 8, padding: '12px 16px' }}>
                <span style={{ color: FACTOR_ACCENT, fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
              </li>
            ))}
          </ul>
        </div>

        {/* Kies kookbox als */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>Kies {kookbox.naam} als…</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {data.kiesKookboxAls.map((item) => (
              <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.6, color: '#4B5563', background: 'white', border: '1px solid var(--rule)', borderRadius: 8, padding: '12px 16px' }}>
                <span style={{ color: accent, fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
              </li>
            ))}
          </ul>
        </div>

        {/* Verdict */}
        <div style={{ background: 'white', borderRadius: 16, border: `1.5px solid ${FACTOR_ACCENT}`, padding: 28, marginBottom: 40, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: FACTOR_ACCENT }} />
          <div style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#FEF3C7', color: '#92400E', display: 'inline-block', marginBottom: 12 }}>⚖️ Ons verdict</div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 10 }}>Factor of {kookbox.naam} — het hangt af van jou</h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563', marginBottom: 20 }}>{data.verdictTekst}</p>
          <div className="two-col-grid" style={{ gap: 12 }}>
            <Link href="/ga/factor" rel="noopener sponsored nofollow" style={{ display: 'block', background: FACTOR_ACCENT, color: 'white', textAlign: 'center', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              Bekijk Factor →
            </Link>
            <Link href={`/ga/${kookbox.slug}`} rel="noopener sponsored nofollow" style={{ display: 'block', background: 'white', color: accent, textAlign: 'center', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: `2px solid ${accent}` }}>
              Bekijk {kookbox.naam} →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>Veelgestelde vragen</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {data.faq.map(({ q, a }) => (
              <div key={q} style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{q}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: '#4B5563' }}>{a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer links */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', paddingTop: 24, borderTop: '1px solid var(--rule)' }}>
          <Link href="/" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>← Bekijk alle maaltijdboxen</Link>
          <Link href="/aanbieder/factor" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>Volledige Factor review →</Link>
          <Link href={`/aanbieder/${kookbox.slug}`} style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>Volledige {kookbox.naam} review →</Link>
        </div>
      </div>
    </>
  );
}
