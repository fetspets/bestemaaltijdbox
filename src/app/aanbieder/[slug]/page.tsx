import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAanbieder, aanbieders, actieveAanbieders } from '@/lib/aanbieders';

export async function generateStaticParams() {
  return aanbieders.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getAanbieder(slug);
  if (!a) return {};
  const title = a.seoTitle ?? `${a.naam} review (2026): ${a.score.totaal}/10 — voor wie is het écht?`;
  const description = a.seoDescription ?? `Onze eerlijke ${a.naam} review op basis van echte gebruikerservaringen en onafhankelijk onderzoek. Smaak, prijs, flexibiliteit en voor wie het past.`;
  return {
    title,
    description,
    alternates: { canonical: `https://bestemaaltijdbox.be/aanbieder/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://bestemaaltijdbox.be/aanbieder/${slug}`,
      type: 'article',
      locale: 'nl_BE',
    },
  };
}

const scoreLabels: Record<string, string> = {
  smaak: 'Smaak',
  prijsKwaliteit: 'Prijs-kwaliteit',
  flexibiliteit: 'Flexibiliteit',
  duurzaamheid: 'Duurzaamheid',
  gemak: 'Gemak',
};

export default async function AanbiederPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getAanbieder(slug);
  if (!a) notFound();

  const baseUrl = 'https://bestemaaltijdbox.be';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: `${a.naam} Review België 2026`,
    reviewBody: a.uitgebreideReview.intro,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: a.score.totaal,
      bestRating: 10,
      worstRating: 1,
    },
    author: { '@type': 'Organization', name: 'BesteMaaltijdbox.be' },
    itemReviewed: {
      '@type': 'Product',
      name: a.naam,
      description: a.beschrijving,
      brand: { '@type': 'Brand', name: a.naam },
      image: a.logo.startsWith('/') ? `${baseUrl}${a.logo}` : `${baseUrl}/logo.png`,
      offers: {
        '@type': 'Offer',
        price: a.prijsPerPortie,
        priceCurrency: 'EUR',
        availability: a.status === 'active' ? 'https://schema.org/InStock' : 'https://schema.org/Discontinued',
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: a.gratisBezorging ? 0 : a.bezorgkosten,
            currency: 'EUR',
          },
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressCountry: 'BE',
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' },
            transitTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 3, unitCode: 'DAY' },
          },
        },
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          applicableCountry: 'BE',
          returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
        },
      },
    },
  };

  const accentColor = ({ hellofresh: '#1B4332', foodbag: '#1E40AF', 'marley-spoon': '#7C3AED', foodprepper: '#2D6A4F' } as Record<string, string>)[a.slug] || '#1B4332';

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bestemaaltijdbox.be' },
      { '@type': 'ListItem', position: 2, name: 'Aanbieders', item: 'https://bestemaaltijdbox.be/aanbieder' },
      { '@type': 'ListItem', position: 3, name: a.naam, item: `https://bestemaaltijdbox.be/aanbieder/${a.slug}` },
    ],
  };

  const faqLd = a.uitgebreideReview.faq && a.uitgebreideReview.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: a.uitgebreideReview.faq.map(f => ({
      '@type': 'Question',
      name: f.vraag,
      acceptedAnswer: { '@type': 'Answer', text: f.antwoord },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      {/* Breadcrumb */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--rule)', padding: '10px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', fontSize: 13, color: 'var(--muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            {' → '}
            <Link href="/aanbieder" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Aanbieders</Link>
            {' → '}
            <strong style={{ color: 'var(--ink)' }}>{a.naam}</strong>
          </div>
          <span className="hide-mobile" style={{ fontSize: 12 }}>Bijgewerkt: juni 2026</span>
        </div>
      </div>

      <div className="page-grid" style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px 64px' }}>

        {/* MAIN CONTENT */}
        <div>
          {/* Header */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--mint)', marginBottom: 8 }}>REVIEW</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10 }}>
              <div style={{ width: 64, height: 64, borderRadius: 16, background: 'var(--cream)', border: '2px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34 }}>
                {a.logo.startsWith('/') ? <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }} /> : a.logo}
              </div>
              <div>
                <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 38, fontWeight: 900, margin: 0, lineHeight: 1 }}>{a.naam}</h1>
                <p style={{ fontSize: 15, color: 'var(--muted)', margin: '4px 0 0' }}>{a.tagline}</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'var(--muted)', flexWrap: 'wrap' }}>
              <span>Door <strong style={{ color: 'var(--ink)' }}>Redactie BesteMaaltijdbox</strong></span>
              <span>·</span><span>Bijgewerkt <strong style={{ color: 'var(--ink)' }}>juni 2026</strong></span>
              <span>·</span><span>Gebaseerd op <strong style={{ color: 'var(--ink)' }}>gebruikersdata & onderzoek</strong></span>
              {a.status === 'active'
                ? <><span>·</span><span>Ranking: <strong style={{ color: '#1B4332' }}>#{a.ranking} van {actieveAanbieders.length}</strong></span></>
                : <><span>·</span><span><strong style={{ color: '#B45309' }}>Stopgezet — niet meer beschikbaar</strong></span></>}
            </div>
          </div>

          {/* Stopgezet / tijdelijk-onbeschikbaar banner (status-gedreven) */}
          {a.status !== 'active' && (
            <div style={{ background: '#FEF3C7', border: '1.5px solid #F59E0B', borderRadius: 12, padding: '16px 20px', marginBottom: 24, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: '#92400E' }}>
                <strong>{a.status === 'discontinued' ? 'Stopgezet' : 'Tijdelijk niet beschikbaar'}:</strong> {a.statusNotitie ?? `${a.naam} is momenteel niet beschikbaar.`} Bekijk hieronder onze aanbevolen alternatieven.
              </p>
            </div>
          )}

          {/* Score box */}
          <div style={{ background: 'white', border: '1.5px solid var(--mint)', borderRadius: 16, padding: 24, marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1B4332, var(--mint))' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700 }}>Onze beoordeling</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span style={{ fontFamily: 'Fraunces, serif', fontSize: 52, fontWeight: 900, color: '#1B4332', lineHeight: 1 }}>{a.score.totaal.toFixed(1)}</span>
                <span style={{ fontSize: 20, color: 'var(--muted)' }}>/10</span>
              </div>
            </div>
            <div className="score-grid">
              {Object.entries(scoreLabels).map(([key, label]) => {
                const val = a.score[key as keyof typeof a.score] as number;
                return (
                  <div key={key}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 5 }}>
                      <span style={{ color: 'var(--muted)', fontWeight: 500 }}>{label}</span>
                      <span style={{ fontWeight: 700, color: '#1B4332' }}>{val}</span>
                    </div>
                    <div className="score-bar"><div className="score-bar-fill" style={{ width: `${val * 10}%` }} /></div>
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: 14, fontSize: 11, color: 'var(--muted)', lineHeight: 1.5 }}>
              De totaalscore is ons redactionele eindoordeel — geen rekenkundig gemiddelde van de subscores hierboven.
            </div>
          </div>

          {/* Specs grid */}
          <div className="specs-grid">
            {[
              { icon: '💰', label: 'Prijs per portie', val: a.prijsPerPortieLabel ?? `vanaf €${a.prijsPerPortie.toFixed(2)}` },
              { icon: '📋', label: 'Recepten per week', val: `${a.receptenPerWeek}+` },
              { icon: '🚚', label: 'Bezorging', val: a.gratisBezorging ? '✓ Gratis' : `€${a.bezorgkosten}` },
              { icon: '👥', label: 'Personen', val: `${a.minPersonen}–${a.maxPersonen}` },
              { icon: '📅', label: 'Opzegbaar', val: a.opzegTermijn },
              { icon: '🇧🇪', label: 'Belgisch', val: a.belgisch ? '✓ Ja' : 'Nee' },
            ].map(({ icon, label, val }) => (
              <div key={label} style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ fontSize: 20, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 1 }}>{label}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: val.startsWith('✓') ? '#16A34A' : val.startsWith('€') ? '#D97706' : 'var(--ink)' }}>{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Kenmerken */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
            {a.kenmerken.map(k => (
              <span key={k} style={{ fontSize: 12, padding: '5px 12px', borderRadius: 100, fontWeight: 600, background: '#E8F5EE', color: '#1B4332', border: '1px solid #A7DFC0' }}>{k}</span>
            ))}
          </div>

          {/* Intro */}
          <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: 12, padding: 24, marginBottom: 24 }}>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#166534', margin: 0, fontStyle: 'italic' }}>{a.uitgebreideReview.intro}</p>
          </div>

          {/* Hero CTA */}
          {a.ctaTekst && a.kortingsCode && (
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <Link href={`/ga/${a.slug}`} style={{ display: 'inline-block', background: accentColor, color: 'white', padding: '14px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                {a.ctaTekst} →
              </Link>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>
                Korting wordt automatisch toegepast via onze link — geen code nodig.
              </div>
            </div>
          )}

          {/* Prijstabel */}
          {a.uitgebreideReview.prijsTabel && (
            <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 12, padding: 24, marginBottom: 24 }}>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 8 }}>Wat kost {a.naam} per maand in België?</h2>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 12 }}>Welkomstdeal (2 personen / 3 maaltijden/week) — automatisch via de link, geen code nodig:</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                  <thead>
                    <tr style={{ background: 'var(--cream)' }}>
                      {['Box', 'Normale prijs', 'Korting', 'Jij betaalt', 'Besparing'].map(h => (
                        <th key={h} style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid var(--rule)', fontWeight: 700, color: 'var(--ink)', whiteSpace: 'nowrap' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {a.uitgebreideReview.prijsTabel.map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? 'white' : '#FAFAFA', fontWeight: row.box === 'Totaal' ? 700 : 400 }}>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid var(--rule)' }}>{row.box}</td>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid var(--rule)', textDecoration: row.box === 'Totaal' ? 'line-through' : 'none', color: row.box === 'Totaal' ? 'var(--muted)' : 'inherit' }}>{row.normaal}</td>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid var(--rule)' }}>{row.korting}</td>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid var(--rule)', color: '#16A34A', fontWeight: 700 }}>{row.betaal}</td>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid var(--rule)' }}>{row.besparing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {a.uitgebreideReview.prijsUitleg && (
                <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', margin: '16px 0' }}>{a.uitgebreideReview.prijsUitleg}</p>
              )}
              {a.ctaTekst2 && (
                <div style={{ textAlign: 'center' }}>
                  <Link href={`/ga/${a.slug}`} style={{ display: 'inline-block', background: accentColor, color: 'white', padding: '12px 24px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                    {a.ctaTekst2} →
                  </Link>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>Opzegbaar na je eerste box.</div>
                </div>
              )}
            </div>
          )}

          {/* Testervaring */}
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 12, paddingBottom: 10, borderBottom: '2px solid var(--ink)' }}>
              Onze bevindingen
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151' }}>{a.uitgebreideReview.testervaring}</p>
          </div>

          {/* Pros & Cons */}
          <div className="pros-cons-grid">
            <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: 12, padding: 20 }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, color: '#15803D', marginBottom: 12 }}>✓ Voordelen</div>
              {a.pros.map(p => (
                <div key={p} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#166534', marginBottom: 6 }}>
                  <span style={{ color: '#16A34A', fontWeight: 700, flexShrink: 0 }}>✓</span>{p}
                </div>
              ))}
            </div>
            <div style={{ background: '#FFF5F5', border: '1px solid #FCA5A5', borderRadius: 12, padding: 20 }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, color: '#B91C1C', marginBottom: 12 }}>✗ Nadelen</div>
              {a.cons.map(c => (
                <div key={c} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#7F1D1D', marginBottom: 6 }}>
                  <span style={{ color: '#EF4444', fontWeight: 700, flexShrink: 0 }}>✗</span>{c}
                </div>
              ))}
            </div>
          </div>

          {/* Voor wie */}
          <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 12, padding: 24, marginBottom: 24 }}>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12 }}>Voor wie is {a.naam} geschikt?</h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', margin: a.uitgebreideReview.nietGeschiktVoor ? '0 0 20px' : 0 }}>{a.uitgebreideReview.voorWie}</p>
            {a.uitgebreideReview.nietGeschiktVoor && (
              <>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, marginBottom: 10, color: '#B91C1C' }}>Voor wie is {a.naam} niet de juiste keuze?</h3>
                {a.uitgebreideReview.nietGeschiktVoor.map((punt, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#374151', marginBottom: 8, lineHeight: 1.6 }}>
                    <span style={{ color: '#EF4444', fontWeight: 700, flexShrink: 0 }}>✗</span>
                    <span>{punt}</span>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Hoe werkt het */}
          <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 12, padding: 24, marginBottom: 24 }}>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12 }}>Hoe werkt {a.naam} in België?</h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', margin: 0 }}>{a.uitgebreideReview.hoeWerktHet}</p>
          </div>

          {/* Vergelijking */}
          <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 12, padding: 24, marginBottom: 24 }}>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12 }}>{a.naam} vs. de concurrentie</h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', margin: 0 }}>{a.uitgebreideReview.vergelijking}</p>
          </div>

          {/* Eindoordeel */}
          <div style={{ background: 'var(--cream)', border: '2px solid #1B4332', borderRadius: 12, padding: 24, marginBottom: 28 }}>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, color: '#1B4332' }}>Ons eindoordeel</h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', margin: '0 0 16px' }}>{a.uitgebreideReview.eindoordeel}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 48, fontWeight: 900, color: '#1B4332', lineHeight: 1 }}>{a.score.totaal.toFixed(1)}</div>
              <div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>Onze score</div>
                <div style={{ color: '#F59E0B', fontSize: 18 }}>{'★'.repeat(Math.round(a.score.totaal / 2))}{'☆'.repeat(5 - Math.round(a.score.totaal / 2))}</div>
              </div>
              {a.status === 'active' && (
                <Link href={`/ga/${a.slug}`} style={{ marginLeft: 'auto', background: accentColor, color: 'white', padding: '12px 24px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                  {a.ctaTekst ? `${a.ctaTekst} →` : a.kortingsCode?.code ? `Activeer ${a.kortingsCode.bedrag} →` : a.kortingsCode ? `Claim ${a.kortingsCode.bedrag} →` : `Bezoek ${a.naam} →`}
                </Link>
              )}
            </div>
          </div>

          {/* FAQ */}
          {a.uitgebreideReview.faq && (
            <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16 }}>Veelgestelde vragen over {a.naam}</h2>
              {a.uitgebreideReview.faq.map((item, i) => (
                <div key={i} style={{ marginBottom: i < a.uitgebreideReview.faq!.length - 1 ? 20 : 0 }}>
                  <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 700, marginBottom: 6, color: 'var(--ink)' }}>{item.vraag}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', margin: 0 }}>{item.antwoord}</p>
                </div>
              ))}
            </div>
          )}

          {/* Alternatieven voor stopgezette aanbieders */}
          {a.status !== 'active' && (
            <div style={{ background: 'white', border: '1px solid var(--rule)', borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 8 }}>
                Op zoek naar een maaltijdbox zonder abonnement?
              </h2>
              <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20, lineHeight: 1.7 }}>
                Net zoals Carrefour Simply You werken deze aanbieders zonder verplicht abonnement — je bestelt wanneer je wil.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                {[
                  { slug: 'foodprepper', naam: 'Foodprepper', sub: 'Klaar in 15 min · geen abonnement · Monizze/Pluxee/Edenred' },
                  { slug: 'foodmaker', naam: 'Foodmaker', sub: 'Chef-kwaliteit · geen abonnement · v.a. €10/portie' },
                  { slug: 'foodbag', naam: 'Foodbag', sub: 'Belgische ingrediënten · eenmalig bestellen mogelijk' },
                ].map(alt => (
                  <Link key={alt.slug} href={`/ga/${alt.slug}`} style={{ display: 'block', background: 'var(--cream)', border: '1px solid var(--rule)', borderRadius: 10, padding: '16px', textDecoration: 'none', color: 'var(--ink)' }}>
                    <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{alt.naam} →</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{alt.sub}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link href="/" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>← Terug naar alle maaltijdboxen</Link>
        </div>

        {/* STICKY SIDEBAR */}
        <div className="page-grid-sidebar" style={{ position: 'sticky', top: 80 }}>
          <div style={{ background: 'white', border: '1.5px solid var(--rule)', borderRadius: 16, padding: 24, boxShadow: '0 4px 24px rgba(0,0,0,.08)', marginBottom: 16 }}>
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <div style={{ width: 72, height: 72, margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44 }}>
                {a.logo.startsWith('/') ? <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : a.logo}
              </div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900 }}>{a.naam}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>{a.tagline}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 52, fontWeight: 900, color: '#1B4332', lineHeight: 1 }}>{a.score.totaal.toFixed(1)}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4 }}>/10</div>
              <div style={{ color: '#F59E0B', fontSize: 14 }}>{'★'.repeat(Math.round(a.score.totaal / 2))}{'☆'.repeat(5 - Math.round(a.score.totaal / 2))}</div>
            </div>

            <div style={{ marginBottom: 16 }}>
              {[
                ['Prijs/portie', a.prijsPerPortieLabel ?? `vanaf €${a.prijsPerPortie.toFixed(2)}`],
                ['Populaire box', `€${a.prijsPopulaireBox.toFixed(2)}/week`],
                ['Recepten/week', `${a.receptenPerWeek}+`],
                ['Personen', `${a.minPersonen}–${a.maxPersonen}`],
                ['Opzegbaar', a.opzegTermijn],
                ['Belgisch', a.belgisch ? '🇧🇪 Ja' : 'Nee'],
                ['Vegetarisch', a.vegetarisch ? '✓ Ja' : 'Nee'],
                ['Biologisch', a.bio ? '✓ Ja' : 'Nee'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--rule)', fontSize: 13 }}>
                  <span style={{ color: 'var(--muted)' }}>{k}</span>
                  <span style={{ fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>

            {a.gratisBezorging ? (
              <div style={{ textAlign: 'center', fontSize: 13, color: '#16A34A', fontWeight: 600, marginBottom: 12 }}>✓ Gratis bezorging inbegrepen</div>
            ) : a.bezorgkosten ? (
              <div style={{ textAlign: 'center', fontSize: 13, color: '#D97706', fontWeight: 600, marginBottom: 12 }}>+ €{a.bezorgkosten} bezorgkost per levering</div>
            ) : null}

            {a.status === 'active' && (
              <Link href={`/ga/${a.slug}`} style={{ display: 'block', background: accentColor, color: 'white', textAlign: 'center', padding: '14px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', marginBottom: 4 }}>
                {a.ctaTekst ? `${a.ctaTekst} →` : a.kortingsCode ? `Activeer ${a.kortingsCode.bedrag} →` : `Bezoek ${a.naam} →`}
              </Link>
            )}
            {a.ctaSubtekst && (
              <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--muted)', marginBottom: 10 }}>{a.ctaSubtekst}</div>
            )}

            {a.kortingsCode && (
              <div style={{ background: '#F0FDF4', border: '1.5px solid #86EFAC', borderRadius: 8, padding: '10px 12px', textAlign: 'center', marginBottom: 10 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#166534' }}>{a.kortingsCode.bedrag}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>{a.kortingsCode.beschrijving}</div>
              </div>
            )}

            <Link href="/" style={{ display: 'block', border: '1.5px solid var(--rule)', textAlign: 'center', padding: '11px', borderRadius: 10, fontWeight: 600, fontSize: 13, textDecoration: 'none', color: 'var(--ink)' }}>
              ← Alle maaltijdboxen vergelijken
            </Link>

            <div style={{ marginTop: 14, fontSize: 11, color: 'var(--muted)', textAlign: 'center', lineHeight: 1.5 }}>
              Affiliate disclosure: kleine commissie via onze links, zonder meerprijs voor jou.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
