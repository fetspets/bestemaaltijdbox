import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maaltijdbox zonder abonnement in België 2026 — opties vergeleken',
  description: 'Geen abonnement maar toch een maaltijdbox? Bekijk welke Belgische aanbieders leveren zonder vast contract. Vergelijk prijs en bespaar.',
  alternates: { canonical: 'https://bestemaaltijdbox.be/blog/maaltijdbox-zonder-abonnement-belgie' },
  openGraph: {
    title: 'Maaltijdbox zonder abonnement in België 2026 — opties vergeleken',
    description: 'Geen abonnement maar toch een maaltijdbox? Bekijk welke Belgische aanbieders leveren zonder vast contract. Vergelijk prijs en bespaar.',
    url: 'https://bestemaaltijdbox.be/blog/maaltijdbox-zonder-abonnement-belgie',
    type: 'article',
    locale: 'nl_BE',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welke maaltijdbox heeft geen abonnement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foodprepper en Foodmaker werken volledig zonder verplicht abonnement — je bestelt wanneer het jou uitkomt, zonder wekelijkse verplichting of opzegtermijn. Foodbag laat je ook los bestellen: je kiest zelf wanneer je een box plaatst, zonder je vast in te schrijven op een wekelijks schema.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een maaltijdbox eenmalig bestellen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Bij Foodprepper en Foodmaker is een eenmalige bestelling standaard mogelijk — geen abonnement, geen opzegtermijn. Ook bij Foodbag kun je los bestellen zonder vast contract. Zo probeer je een maaltijdbox risicovrij, zonder langetermijnverplichting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de goedkoopste maaltijdbox zonder abonnement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foodprepper is de goedkoopste kookbox zonder abonnement: vanaf €6,50/portie, gratis bezorging in Vlaanderen en Brussel. Nieuwe klanten besparen tot €45 (3× €15 op de eerste 3 bestellingen), automatisch toegepast via onze link. Foodbag kost €9,50/portie maar biedt €60 korting via onze link en bezorgt in heel België inclusief Wallonië.',
      },
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Maaltijdbox zonder abonnement in België 2026 — welke opties zijn er?',
  description: 'Geen abonnement maar toch een maaltijdbox? Bekijk welke Belgische aanbieders leveren zonder vast contract.',
  url: 'https://bestemaaltijdbox.be/blog/maaltijdbox-zonder-abonnement-belgie',
  dateModified: '2026-06-01',
  inLanguage: 'nl-BE',
  publisher: {
    '@type': 'Organization',
    name: 'BesteMaaltijdbox.be',
    url: 'https://bestemaaltijdbox.be',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bestemaaltijdbox.be' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://bestemaaltijdbox.be/blog' },
    { '@type': 'ListItem', position: 3, name: 'Maaltijdbox zonder abonnement', item: 'https://bestemaaltijdbox.be/blog/maaltijdbox-zonder-abonnement-belgie' },
  ],
};

const vergelijkingsTabel = [
  {
    naam: 'Foodbag',
    slug: 'foodbag',
    affiliateSlug: 'foodbag',
    abonnement: 'Los bestellen mogelijk',
    portie: '€9,50',
    bezorging: 'Gratis',
    korting: '€60 via onze link',
    badge: '🏆 Beste keuze',
  },
  {
    naam: 'Foodprepper',
    slug: 'foodprepper',
    affiliateSlug: 'foodprepper',
    abonnement: 'Geen abo vereist',
    portie: 'vanaf €6,50',
    bezorging: 'Gratis',
    korting: '€45 via onze link',
    badge: '💰 Goedkoopst',
  },
  {
    naam: 'Foodmaker',
    slug: 'foodmaker',
    affiliateSlug: null,
    abonnement: 'Geen abo vereist',
    portie: '€10,00',
    bezorging: 'Gratis',
    korting: '—',
    badge: null,
  },
];

const aanbieders = [
  {
    rang: 1,
    naam: 'Foodbag',
    slug: 'foodbag',
    ctaHref: '/ga/foodbag',
    kortingsBedrag: '3× €20 korting op eerste 3 bestellingen',
    portie: '€9,50/portie',
    badge: '🏆 Beste keuze zonder abo',
    uitleg: 'Foodbag is de #2 maaltijdbox in België, eigendom van de Colruyt Group. Met 100% lokale Belgische ingrediënten, 5 kookstijlen (waaronder Sana van Sandra Bekkari) en gratis bezorging in heel België — inclusief Wallonië — is het de meest complete keuze als je af en toe los wil bestellen. Je hebt geen vast abonnement nodig: je plaatst een bestelling wanneer het jou uitkomt. Via onze link krijg je 3× €20 korting op je eerste 3 bestellingen (in totaal €60 voordeel), automatisch toegepast — geen code nodig.',
    kenmerken: ['🇧🇪 Lokale Belgische ingrediënten', '✓ Gratis bezorging heel België', '✓ Los bestellen mogelijk', '5 kookstijlen incl. Sana'],
    ctaTekst: 'Bekijk Foodbag →',
    ctaTekst2: 'Lees review',
  },
  {
    rang: 2,
    naam: 'Foodprepper',
    slug: 'foodprepper',
    ctaHref: '/ga/foodprepper',
    kortingsBedrag: '3× €15 korting op eerste 3 bestellingen',
    portie: 'vanaf €6,50/portie',
    badge: '💰 Goedkoopst zonder abo',
    uitleg: 'Foodprepper is de snelste kookbox van België: alles staat in 15 minuten op tafel dankzij voorgegaarde groenten, gemarineerd vlees en klaargemaakte sauzen. Er is geen verplicht abonnement en geen opzegtermijn — je bestelt eenmalig, wekelijks of tweewekelijks zoals het jou past. Bijna alle ingrediënten komen van Belgische leveranciers. Bezorging is gratis in Vlaanderen en Brussel. Via onze link bespaar je tot €45 op je eerste 3 bestellingen — automatisch toegepast, geen code nodig.',
    kenmerken: ['⚡ Klaar in 15 minuten', '🇧🇪 Belgische ingrediënten', '✓ Geen abo, vrij opzegbaar', '✓ Gratis bezorging'],
    ctaTekst: 'Bekijk Foodprepper →',
    ctaTekst2: 'Lees review',
  },
  {
    rang: 3,
    naam: 'Foodmaker',
    slug: 'foodmaker',
    ctaHref: '/aanbieder/foodmaker',
    kortingsBedrag: null,
    portie: '€10,00/portie',
    badge: '👨‍🍳 Artisanale Belgische kwaliteit',
    uitleg: 'Foodmaker is een Antwerpse kant-en-klare maaltijdservice met een unieke samenwerking met Jeroen Meus (Dagelijkse Kost). Je warmt de maaltijden op in enkele minuten — koken is niet nodig. Foodmaker heeft geen verplicht abonnement: je bestelt wanneer het jou past. Met 32 gerechten per week, een volledig vegan "Vedge Bags" gamma en gratis bezorging in heel België is het een sterke optie voor wie Belgische kwaliteit wil zonder vast contract. Minimumbestelling €39,90.',
    kenmerken: ['👨‍🍳 Jeroen Meus recepten', '🇧🇪 Artisanaal Belgisch', '✓ Geen abo nodig', '✓ Gratis bezorging'],
    ctaTekst: 'Bekijk Foodmaker →',
    ctaTekst2: 'Lees review',
  },
];

const situaties = [
  {
    situatie: 'Je wil eenmalig een maaltijdbox proberen',
    winnaar: 'Foodprepper',
    slug: 'foodprepper',
    detail: 'Geen abonnement, geen opzegtermijn. Tot €45 welkomstkorting, automatisch via onze link. Ideaal om risicovrij te starten.',
    color: '#F0FDF4',
    border: '#BBF7D0',
  },
  {
    situatie: 'Drukke avonden — klaar in 15 minuten',
    winnaar: 'Foodprepper',
    slug: 'foodprepper',
    detail: 'Voorgegaarde groenten, gemarineerd vlees en klaargemaakte sauzen. De snelste kookbox van België, en geen vast wekelijks schema vereist.',
    color: '#EFF6FF',
    border: '#BFDBFE',
  },
  {
    situatie: 'Belgische kwaliteit zonder vaste verplichting',
    winnaar: 'Foodbag',
    slug: 'foodbag',
    detail: 'Lokale ingrediënten, 5 kookstijlen, gratis bezorging in heel België. Los bestellen mogelijk zonder abonnement. €60 korting over eerste 3 bestellingen, automatisch via onze link.',
    color: '#DBEAFE',
    border: '#93C5FD',
  },
  {
    situatie: 'Belgische smaak klaar zonder koken',
    winnaar: 'Foodmaker',
    slug: 'foodmaker',
    detail: 'Jeroen Meus-recepten, vers bereid in Antwerpen, klaar in enkele minuten. Geen abo, gratis bezorging in heel België. Minimumbestelling €39,90.',
    color: '#FFF7ED',
    border: '#FED7AA',
  },
];

export default function MaaltijdboxZonderAbonnementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
          {' → '}
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Blog</Link>
          {' → '}
          <strong style={{ color: 'var(--ink)' }}>Maaltijdbox zonder abonnement</strong>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
            ✓ Onafhankelijk vergeleken · juni 2026
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 7vw, 40px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            Maaltijdbox zonder abonnement in België 2026 — welke opties zijn er?
          </h1>
          <div style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.8, maxWidth: 680 }}>
            <p style={{ margin: '0 0 12px' }}>
              Wil je een maaltijdbox proberen zonder je vast in te schrijven? Drie Belgische aanbieders leveren zonder verplicht abonnement: <Link href="/aanbieder/foodprepper" style={{ color: '#1B4332', fontWeight: 600 }}>Foodprepper</Link> en <Link href="/aanbieder/foodmaker" style={{ color: '#1B4332', fontWeight: 600 }}>Foodmaker</Link> vereisen echt geen abonnement — je bestelt wanneer het jou uitkomt, zonder opzegtermijn. <Link href="/aanbieder/foodbag" style={{ color: '#1B4332', fontWeight: 600 }}>Foodbag</Link> laat je ook los bestellen zonder wekelijkse verplichting.
            </p>
            <p style={{ margin: 0 }}>
              Hieronder vergelijken we de drie actieve opties op prijs, bezorging en welkomstkorting — en leggen we uit wie welke optie het best past. <em>Noot: Carrefour Simply You was eerder ook beschikbaar zonder abonnement, maar is stopgezet in 2026.</em>
            </p>
          </div>
        </div>

        {/* Winnaar-box */}
        <div style={{ background: '#F0FDF4', border: '1.5px solid #52B788', borderRadius: 16, marginBottom: 36, overflow: 'hidden' }}>
          <div style={{ height: 4, background: 'linear-gradient(90deg, #1B4332, #52B788)' }} />
          <div style={{ padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1B4332', marginBottom: 6 }}>🏆 Beste keuze zonder abonnement</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: '#14532D', marginBottom: 6 }}>Foodbag</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1B4332', marginBottom: 4 }}>€9,50/portie · gratis bezorging · heel België</div>
              <div style={{ fontSize: 13, color: '#374151', marginBottom: 12 }}>Code FOODBAGx60: 3× €20 korting op je eerste 3 bestellingen (€60 totaal)</div>
              <div style={{ fontSize: 12, color: '#6B7280' }}>
                Op zoek naar de laagste prijs? →{' '}
                <Link href="/aanbieder/foodprepper" style={{ color: '#1B4332', fontWeight: 600, textDecoration: 'underline' }}>
                  Foodprepper: vanaf €6,50/portie
                </Link>
              </div>
            </div>
            <Link
              href="/ga/foodbag"
              style={{ display: 'block', background: '#1B4332', color: 'white', textAlign: 'center', padding: '14px 28px', borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, boxShadow: '0 2px 8px rgba(27,67,50,0.18)' }}
            >
              Bekijk Foodbag →
            </Link>
          </div>
        </div>

        {/* Vergelijkingstabel */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 8, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Vergelijking: maaltijdbox zonder abonnement in België
          </h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>
            Alleen aanbieders waarbij bestellen mogelijk is zonder vast contract.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, background: 'white', border: '1px solid var(--rule)', borderRadius: 12, overflow: 'hidden' }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  {['Aanbieder', 'Abonnement vereist', 'Prijs/portie', 'Bezorging', 'Welkomstkorting', 'Actie'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {vergelijkingsTabel.map((r, i) => (
                  <tr key={r.slug} style={{ borderBottom: '1px solid var(--rule)', background: i === 0 ? '#F0FDF4' : i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 600 }}>
                      <Link href={`/aanbieder/${r.slug}`} style={{ color: 'var(--ink)', textDecoration: 'none' }}>{r.naam}</Link>
                      {r.badge && (
                        <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#1B4332', marginTop: 2 }}>{r.badge}</span>
                      )}
                    </td>
                    <td style={{ padding: '10px 12px', color: '#16A34A', fontWeight: 600 }}>{r.abonnement}</td>
                    <td style={{ padding: '10px 12px' }}>{r.portie}</td>
                    <td style={{ padding: '10px 12px', color: '#16A34A', fontWeight: 600 }}>{r.bezorging}</td>
                    <td style={{ padding: '10px 12px', fontSize: 12, color: r.korting === '—' ? 'var(--muted)' : '#15803D', fontWeight: r.korting === '—' ? 400 : 600 }}>
                      {r.korting}
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      <Link
                        href={r.affiliateSlug ? `/ga/${r.affiliateSlug}` : `/aanbieder/${r.slug}`}
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
          <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8 }}>
            Prijzen zijn richtprijzen — controleer actuele tarieven op de site van de aanbieder.
          </p>
        </div>

        {/* Per-aanbieder secties */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Elke aanbieder zonder abonnement in detail
          </h2>
          {aanbieders.map(({ rang, naam, slug, ctaHref, kortingsBedrag, portie, badge, uitleg, kenmerken, ctaTekst, ctaTekst2 }) => (
            <div
              key={slug}
              style={{ background: 'white', borderRadius: 16, border: rang === 1 ? '1.5px solid var(--mint)' : '1.5px solid var(--rule)', padding: 24, marginBottom: 16, position: 'relative', overflow: 'hidden' }}
            >
              {rang === 1 && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1B4332, var(--mint))' }} />
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 32, fontWeight: 900, color: rang === 1 ? '#C8EAD8' : 'var(--rule)', lineHeight: 1, flexShrink: 0 }}>{rang}</div>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                    <span style={{ fontFamily: 'Fraunces, serif', fontSize: 18, fontWeight: 700 }}>{naam} — zonder abonnement</span>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332', whiteSpace: 'nowrap' }}>{badge}</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>{portie} · gratis bezorging</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <Link
                    href={ctaHref}
                    style={{ display: 'block', background: '#1B4332', color: 'white', textAlign: 'center', padding: '10px 16px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap' }}
                  >
                    {ctaTekst}
                  </Link>
                  <Link
                    href={`/aanbieder/${slug}`}
                    style={{ display: 'block', border: '1.5px solid var(--rule)', textAlign: 'center', padding: '8px 16px', borderRadius: 10, fontWeight: 600, fontSize: 12, textDecoration: 'none', color: 'var(--ink)', whiteSpace: 'nowrap' }}
                  >
                    {ctaTekst2}
                  </Link>
                </div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: '#4B5563', marginBottom: 14 }}>{uitleg}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: kortingsBedrag ? 12 : 0 }}>
                {kenmerken.map(k => (
                  <span key={k} style={{ fontSize: 12, background: '#F9FAFB', border: '1px solid var(--rule)', borderRadius: 100, padding: '4px 10px', color: '#374151' }}>{k}</span>
                ))}
              </div>
              {kortingsBedrag && (
                <div style={{ background: '#F0FDF4', border: '1.5px solid #A7DFC0', borderRadius: 8, padding: '10px 14px', marginTop: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#166534' }}>{kortingsBedrag}</span>
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}> — automatisch via onze link, geen code nodig</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Voor wie is welke optie */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Voor wie is welke optie het best?
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {situaties.map(({ situatie, winnaar, slug, detail, color, border }) => (
              <div key={situatie} style={{ background: color, border: `1px solid ${border}`, borderRadius: 12, padding: '16px 20px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: 4 }}>{situatie}</div>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
                  → <Link href={`/aanbieder/${slug}`} style={{ color: 'var(--ink)', textDecoration: 'none' }}>{winnaar}</Link>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: '#374151', margin: 0 }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Veelgestelde vragen
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
            {faqJsonLd.mainEntity.map(({ name, acceptedAnswer }) => (
              <div key={name} style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{name}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: '#4B5563' }}>{acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>

        <Link href="/blog" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>← Terug naar blog</Link>
      </div>
    </>
  );
}
