import type { Metadata } from 'next';
import Link from 'next/link';
import RevealComponent from './RevealComponent';

const BASE_URL = 'https://www.bestemaaltijdbox.be';
const PAGE_URL = `${BASE_URL}/hellofresh-greenpan-kortingscode`;

export const metadata: Metadata = {
  title: 'HelloFresh: Gratis GreenPan + €60 Korting | Mei-Juni 2026',
  description:
    'Krijg een gratis GreenPan™ braadpan t.w.v. tot €119 + tot €60 korting bij HelloFresh België. Tijdelijke actie tot 15 juni 2026. Activeer hier ↓',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'HelloFresh: Gratis GreenPan™ + €60 Korting (Mei-Juni 2026)',
    description:
      'Krijg een gratis GreenPan™ braadpan t.w.v. tot €119 + tot €60 korting bij HelloFresh België. Tijdelijke actie tot 15 juni 2026.',
    url: PAGE_URL,
    type: 'article',
    locale: 'nl_BE',
    siteName: 'BesteMaaltijdbox.be',
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    q: 'Werkt deze actie ook in heel België (Vlaanderen, Brussel, Wallonië)?',
    a: 'Ja, de actie is geldig in heel België — zowel in Vlaanderen, Brussel als Wallonië.',
  },
  {
    q: 'Wanneer krijg ik mijn gratis GreenPan precies?',
    a: 'Na het afnemen van minimaal 5 boxen binnen 8 weken na je aanmelding ontvang je per e-mail een unieke code voor greenpan.be. Met die code bestel je de pan — uiterlijk op 28 augustus 2026.',
  },
  {
    q: 'Welke GreenPan-braadpan krijg ik?',
    a: 'HelloFresh biedt verschillende GreenPan-modellen en -kleuren aan, zolang de voorraad strekt. Het gaat altijd om een GreenPan braadpan met PFAS-vrije anti-aanbaklaag.',
  },
  {
    q: 'Krijg ik gegarandeerd de pan van €119,90?',
    a: 'Nee, €119,90 is de maximale adviesverkoopprijs van de aangeboden modellen. HelloFresh biedt meerdere modellen en kleuren aan. Hoe sneller je de 5-boxen-voorwaarde haalt, hoe groter de kans dat de duurste modellen nog beschikbaar zijn.',
  },
  {
    q: 'Is de actie ook geldig voor bestaande klanten?',
    a: 'De actie geldt enkel voor nieuwe HelloFresh-klanten, of voor klanten die meer dan 1 jaar geleden hun abonnement hebben opgezegd.',
  },
  {
    q: 'Tot wanneer kan ik me aanmelden?',
    a: 'Je kunt je aanmelden tussen 15 mei 2026 en 15 juni 2026. Aanmeldingen na 15 juni 2026 vallen buiten de actieperiode.',
  },
  {
    q: 'Kan ik mijn abonnement opzeggen na de 5 boxen?',
    a: 'Ja. HelloFresh is wekelijks opzegbaar, uiterlijk 3 tot 6 dagen vóór je volgende bezorgmoment. Daarnaast heb je 14 dagen herroepingsrecht na je eerste bestelling.',
  },
  {
    q: 'Hoeveel is de GreenPan waard?',
    a: 'De maximale adviesverkoopprijs van de aangeboden GreenPan-modellen is €119,90. Het exacte model dat je ontvangt hangt af van de beschikbare voorraad op het moment dat je de 5-boxen-voorwaarde haalt.',
  },
  {
    q: 'Wat als ik geen 5 boxen wil afnemen?',
    a: 'Dan heb je nog altijd recht op tot €60 korting verdeeld over je eerste boxen — de gratis pan vervalt echter als je minder dan 5 boxen afneemt binnen 8 weken.',
  },
  {
    q: 'Werkt deze code ook in Wallonië?',
    a: 'Ja, de code is geldig in heel België, inclusief Wallonië en Brussel.',
  },
  {
    q: 'Waarom moet ik eerst op de knop klikken vóór ik de code zie?',
    a: 'Wij werken via een affiliate-samenwerking met HelloFresh. Als je via onze link naar HelloFresh gaat, wordt er een tracking-cookie geplaatst waardoor wij een kleine commissie ontvangen — voor jou volledig gratis. Dat stelt ons in staat om deze site onafhankelijk te onderhouden en eerlijke reviews te schrijven.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Kortingscodes', item: `${BASE_URL}/kortingscodes` },
    { '@type': 'ListItem', position: 3, name: 'HelloFresh GreenPan kortingscode', item: PAGE_URL },
  ],
};

const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: 'HelloFresh: Gratis GreenPan™ + tot €60 korting',
  description:
    'Gratis GreenPan™ braadpan t.w.v. tot €119,90 + tot €60 korting voor nieuwe HelloFresh-klanten in België. Geldig van 15 mei t.e.m. 15 juni 2026.',
  url: PAGE_URL,
  priceCurrency: 'EUR',
  validFrom: '2026-05-15',
  validThrough: '2026-06-15',
  eligibleRegion: { '@type': 'Country', name: 'Belgium' },
  offeredBy: { '@type': 'Organization', name: 'HelloFresh', url: 'https://www.hellofresh.be' },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  name: 'HelloFresh België review',
  reviewBody:
    'HelloFresh is de marktleider in België met meer dan 40 recepten per week, flexibele formules en uitstekende ingrediëntenkwaliteit. Bereidingstijd gemiddeld 25–35 minuten.',
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '8.4',
    bestRating: '10',
    worstRating: '1',
  },
  author: { '@type': 'Organization', name: 'BesteMaaltijdbox.be', url: BASE_URL },
  itemReviewed: {
    '@type': 'Product',
    name: 'HelloFresh maaltijdbox',
    brand: { '@type': 'Brand', name: 'HelloFresh' },
    description: 'Maaltijdbox met verse ingrediënten en stapsgewijze recepten, bezorgd aan huis.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function HelloFreshGreenPanPage() {
  return (
    <>
      {/* JSON-LD schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Impact impressiepixel */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height={0}
        width={0}
        src="https://imp.pxf.io/i/3156055/3896977/45302"
        style={{ position: 'absolute', visibility: 'hidden' }}
        alt=""
        aria-hidden="true"
      />

      <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: '#9CA3AF', padding: '20px 0 28px' }}>
          <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Home</Link>
          {' → '}
          <Link href="/kortingscodes" style={{ color: '#9CA3AF', textDecoration: 'none' }}>
            Kortingscodes
          </Link>
          {' → '}
          <strong style={{ color: '#1C1C1C' }}>HelloFresh GreenPan kortingscode</strong>
        </div>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          {/* Sticky badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#FEF3C7', border: '1px solid #FCD34D',
            borderRadius: 100, padding: '5px 14px',
            fontSize: 12, fontWeight: 700, color: '#92400E', marginBottom: 18,
          }}>
            🔥 Tijdelijke actie — geldig t.e.m. 15 juni 2026
          </div>

          <h1 style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(26px, 5.5vw, 44px)',
            fontWeight: 900, color: '#1C1C1C', lineHeight: 1.15, marginBottom: 16,
          }}>
            HelloFresh Kortingscode: Gratis GreenPan™ + €60 Korting (België, 2026)
          </h1>

          <p style={{ fontSize: 17, color: '#4B5563', lineHeight: 1.7, marginBottom: 28, maxWidth: 620 }}>
            Krijg een gratis GreenPan™ braadpan t.w.v. tot €119,90 + tot €60 korting voor nieuwe klanten in België.
            Tijdelijke actie geldig van <strong>15 mei t.e.m. 15 juni 2026</strong>.
          </p>

          {/* Reveal-component */}
          <RevealComponent />

          <p style={{ textAlign: 'center', fontSize: 12, color: '#9CA3AF', marginTop: 14, lineHeight: 1.6 }}>
            ⚠️ Eerlijk: gratis pan na minimaal 5 boxen binnen 8 weken
          </p>
        </section>

        {/* ── WAT KRIJG JE? ─────────────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: '#1C1C1C', marginBottom: 20 }}>
            Wat krijg je?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { icon: '🍳', title: 'Gratis GreenPan™ braadpan', sub: 't.w.v. tot €119,90 (PFAS-vrij)' },
              { icon: '💰', title: 'Tot €60 korting', sub: 'verspreid over je eerste boxen' },
              { icon: '🚚', title: 'Gratis bezorging', sub: 'op je eerste box' },
            ].map(({ icon, title, sub }) => (
              <div
                key={title}
                style={{
                  background: 'white', border: '1.5px solid #E8E3DC',
                  borderRadius: 14, padding: '20px 18px', textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 10 }}>{icon}</div>
                <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 800, fontSize: 15, color: '#1C1C1C', marginBottom: 4 }}>
                  {title}
                </div>
                <div style={{ fontSize: 13, color: '#6B7280' }}>{sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TOTALE WAARDE ─────────────────────────────────── */}
        <section style={{
          background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
          borderRadius: 16, padding: '28px 28px', marginBottom: 48, color: 'white',
        }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 900, lineHeight: 1.3, marginBottom: 8 }}>
            Totale waarde van het welkomstpakket: tot bijna <span style={{ color: '#95D5B2' }}>€180</span>
          </div>
          <p style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.6, margin: 0 }}>
            Pan t.w.v. tot €119,90 + tot €60 korting op je eerste boxen.
            De sterkste welkomstdeal van een Belgische maaltijdbox in 2026.
          </p>
        </section>

        {/* ── HOE WERKT HET? ────────────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: '#1C1C1C', marginBottom: 20 }}>
            Hoe werkt het?
          </h2>
          <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              'Klik op "Toon code & ga naar HelloFresh" hierboven.',
              'Meld je aan tussen 15 mei en 15 juni 2026.',
              'Plak de onthulde code bij checkout → tot €60 korting verspreid over je eerste boxen.',
              <>
                Bestel <strong>minimaal 5 boxen binnen 8 weken</strong> om je gratis pan te verdienen.
              </>,
              'Ontvang per e-mail een aparte code → bestel je gratis GreenPan op greenpan.be (uiterlijk 28 augustus 2026).',
            ].map((stap, i) => (
              <li
                key={i}
                style={{
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                  background: 'white', border: '1.5px solid #E8E3DC',
                  borderRadius: 12, padding: '14px 16px',
                }}
              >
                <span style={{
                  flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                  background: '#1B4332', color: 'white', fontWeight: 800,
                  fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.6 }}>{stap}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ── VOORWAARDEN ───────────────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <details style={{ background: 'white', border: '1.5px solid #E8E3DC', borderRadius: 14, overflow: 'hidden' }}>
            <summary style={{
              padding: '16px 20px', fontFamily: 'Fraunces, serif', fontWeight: 800,
              fontSize: 16, color: '#1C1C1C', cursor: 'pointer', listStyle: 'none',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              Volledige actievoorwaarden bekijken
              <span style={{ fontSize: 18, fontFamily: 'sans-serif', fontWeight: 400 }}>↓</span>
            </summary>
            <ul style={{ padding: '0 20px 20px', margin: 0, display: 'flex', flexDirection: 'column', gap: 7, listStyle: 'none' }}>
              {[
                'Enkel voor nieuwe klanten of klanten die meer dan 1 jaar geleden hebben opgezegd.',
                'Kortingsverdeling: €30 op 1e box, €10 op 2e box, €5 op 3e box = €45 effectieve korting. HelloFresh communiceert dit als "tot €60".',
                'Korting vervalt 56 dagen na bestelling van de 1e box.',
                'Voor de gratis pan: minimaal 5 boxen afnemen binnen 8 weken na aanmelding.',
                'Pan is een GreenPan braadpan met PFAS-vrije anti-aanbaklaag, maximale waarde €119,90.',
                'Na 5 boxen ontvangt klant per e-mail een unieke code voor greenpan.be.',
                'Pan moet besteld zijn op greenpan.be uiterlijk 28 augustus 2026.',
                'Code 1× per huishouden, niet combineerbaar met andere aanbiedingen.',
                'Geldt op maaltijdbox exclusief toeslagen of extra producten.',
                'Niet inwisselbaar voor contanten.',
                'Wekelijks opzegbaar (3–6 dagen voor bezorging) + 14 dagen herroepingsrecht.',
                'Aanmeldperiode: 15 mei 2026 t.e.m. 15 juni 2026.',
              ].map((v, i) => (
                <li key={i} style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.6 }}>
                  — {v}
                </li>
              ))}
            </ul>
          </details>
        </section>

        {/* ── WAAROM HELLOFRESH? ─────────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: '#1C1C1C', marginBottom: 14 }}>
            Waarom HelloFresh?
          </h2>
          <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.8, marginBottom: 12 }}>
            HelloFresh is de marktleider in België met meer dan 40 recepten per week en flexibele formules voor elke gezinsgrootte.
            Met een score van <strong>8,4/10</strong> op deze site is het de meest gewaardeerde maaltijdbox in ons vergelijk.
            Gemiddelde bereidingstijd: 25–35 minuten. Gratis bezorging op je eerste box.
          </p>
          <Link href="/aanbieder/hellofresh" style={{ fontWeight: 700, color: '#1B4332', fontSize: 14, textDecoration: 'underline' }}>
            Lees de volledige HelloFresh review →
          </Link>
        </section>

        {/* ── VERGELIJKINGSTABEL ────────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: '#1C1C1C', marginBottom: 16 }}>
            HelloFresh vs. de concurrentie
          </h2>
          <div className="table-wrap" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 520 }}>
              <thead>
                <tr style={{ background: '#F5F3EE', borderBottom: '1.5px solid #E8E3DC' }}>
                  {['', 'HelloFresh', 'Foodbag', 'Marley Spoon'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, fontSize: 13 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Welkomstkorting', 'Tot €60', 'Tot €40', 'Tot €30'],
                  ['Gratis cadeau', 'GreenPan™ (t.w.v. tot €119,90)', '—', '—'],
                  ['Prijs/portie (2 pers.)', '~€5,00', '~€4,70', '~€5,50'],
                  ['Score BesteMaaltijdbox', '8,4/10', '7,8/10', '7,6/10'],
                ].map(([label, hf, fb, ms], i) => (
                  <tr key={label} style={{ borderBottom: '1px solid #F0EDE8', background: i % 2 === 0 ? 'white' : '#FAFAF8' }}>
                    <td style={{ padding: '11px 16px', fontWeight: 600, color: '#374151' }}>{label}</td>
                    <td style={{ padding: '11px 16px', color: '#1B4332', fontWeight: label === 'Gratis cadeau' ? 700 : 400 }}>{hf}</td>
                    <td style={{ padding: '11px 16px', color: '#6B7280' }}>{fb}</td>
                    <td style={{ padding: '11px 16px', color: '#6B7280' }}>{ms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: '#6B7280', marginTop: 10, lineHeight: 1.6 }}>
            HelloFresh heeft momenteel de sterkste welkomstdeal van alle Belgische maaltijdboxen.{' '}
            <Link href="/vergelijk/hellofresh-vs-foodbag" style={{ color: '#1B4332' }}>
              Vergelijking met Foodbag
            </Link>
          </p>
        </section>

        {/* ── INTERNE LINKS ─────────────────────────────────── */}
        <section style={{ marginBottom: 48, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            { href: '/aanbieder/hellofresh', label: 'Volledige HelloFresh review' },
            { href: '/kortingscodes', label: 'Alle actieve kortingscodes' },
            { href: '/voor/gezin', label: 'HelloFresh voor gezinnen' },
            { href: '/vergelijk/hellofresh-vs-foodbag', label: 'Vergelijking met Foodbag' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: 'inline-block', padding: '8px 16px', fontSize: 13, fontWeight: 600,
                color: '#1B4332', background: 'white', border: '1.5px solid #A7DFC0',
                borderRadius: 100, textDecoration: 'none',
              }}
            >
              {label} →
            </Link>
          ))}
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 900, color: '#1C1C1C', marginBottom: 20 }}>
            Veelgestelde vragen
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {faqItems.map(({ q, a }) => (
              <details
                key={q}
                style={{ background: 'white', border: '1.5px solid #E8E3DC', borderRadius: 12, overflow: 'hidden' }}
              >
                <summary style={{
                  padding: '14px 18px', fontWeight: 700, fontSize: 14,
                  color: '#1C1C1C', cursor: 'pointer', listStyle: 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  {q}
                  <span style={{ fontSize: 16, fontFamily: 'sans-serif', fontWeight: 400, flexShrink: 0, marginLeft: 10 }}>+</span>
                </summary>
                <p style={{ padding: '0 18px 14px', margin: 0, fontSize: 14, color: '#4B5563', lineHeight: 1.7 }}>
                  {a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Terug-link */}
        <Link href="/kortingscodes" style={{ fontSize: 13, color: '#9CA3AF', textDecoration: 'none' }}>
          ← Alle kortingscodes bekijken
        </Link>
      </div>
    </>
  );
}
