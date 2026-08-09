import Link from 'next/link';
import type { Metadata } from 'next';
import { LAATST_BIJGEWERKT } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Maaltijdbox betalen met maaltijdcheques in België (2026) — wie accepteert ze?',
  description: 'Welke maaltijdbox accepteert maaltijdcheques van Monizze, Pluxee of Edenred? Foodbag, HelloFresh en Foodprepper vergeleken. Direct antwoord + beste deal.',
  keywords: [],
  alternates: { canonical: 'https://bestemaaltijdbox.be/blog/maaltijdbox-maaltijdcheques-belgie' },
  openGraph: {
    title: 'Maaltijdbox betalen met maaltijdcheques in België (2026) — wie accepteert ze?',
    description: 'Welke maaltijdbox accepteert maaltijdcheques van Monizze, Pluxee of Edenred? Foodbag, HelloFresh en Foodprepper vergeleken. Direct antwoord + beste deal.',
    url: 'https://bestemaaltijdbox.be/blog/maaltijdbox-maaltijdcheques-belgie',
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
      name: 'Kan ik mijn HelloFresh abonnement betalen met maaltijdcheques?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, maar niet rechtstreeks. Je moet de Monizze Virtual Visa-kaart activeren in de Monizze-app en toevoegen als betaalmethode bij HelloFresh. Via Edenred gebruik je de kaartgegevens van je Edenred-kaart.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik Foodbag betalen met maaltijdcheques?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Foodbag accepteert Monizze, Pluxee (Sodexo) en Edenred. Let op: dit werkt alleen bij eenmalige bestellingen, niet bij een abonnement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke maaltijdbox accepteert maaltijdcheques?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In België zijn Foodbag, HelloFresh en Foodprepper de enige maaltijdboxen die elektronische maaltijdcheques accepteren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik mijn abonnement betalen met maaltijdcheques?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alleen bij HelloFresh via de Monizze Virtual Visa-kaart of Edenred. Bij Foodbag en Foodprepper werken maaltijdcheques enkel bij eenmalige bestellingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke maaltijdcheques worden aanvaard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monizze, Pluxee (vroeger Sodexo) en Edenred (Ticket Restaurant).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kan ik per dag betalen met maaltijdcheques?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vanaf 2026 is het maximumbedrag €10 per dag per cheque.',
      },
    },
  ],
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Maaltijdbox betalen met maaltijdcheques in België (2026) — wie accepteert ze?',
  description: 'Welke maaltijdbox accepteert maaltijdcheques van Monizze, Pluxee of Edenred? Foodbag, HelloFresh en Foodprepper vergeleken.',
  datePublished: '2026-06-02',
  dateModified: '2026-08-09',
  author: { '@type': 'Organization', name: 'BesteMaaltijdbox.be' },
  publisher: { '@type': 'Organization', name: 'BesteMaaltijdbox.be', url: 'https://bestemaaltijdbox.be' },
  url: 'https://bestemaaltijdbox.be/blog/maaltijdbox-maaltijdcheques-belgie',
};

const tabelData = [
  {
    naam: 'Foodbag',
    slug: 'foodbag',
    logo: '/logos/foodbag.png',
    accepteert: true,
    label: '✅ JA',
    uitgevers: 'Monizze, Pluxee (Sodexo), Edenred',
    beperking: 'Alleen bij eenmalige bestelling, niet bij abonnement',
    heeftCta: true,
    badge: 'Beste keuze',
  },
  {
    naam: 'HelloFresh',
    slug: 'hellofresh',
    logo: '/logos/hellofresh.png',
    accepteert: true,
    label: '✅ JA (via omweg)',
    uitgevers: 'Monizze (via Virtual Visa), Edenred',
    beperking: 'Je moet eerst Monizze Virtual Visa activeren in de app',
    heeftCta: true,
    badge: null,
  },
  {
    naam: 'Foodprepper',
    slug: 'foodprepper',
    logo: '/logos/foodprepper.png',
    accepteert: true,
    label: '✅ JA',
    uitgevers: 'Monizze, Pluxee (Sodexo), Edenred',
    beperking: 'Alleen bij eenmalige bestelling, niet bij abonnement',
    heeftCta: true,
    badge: null,
  },
  {
    naam: 'Marley Spoon',
    slug: 'marley-spoon',
    logo: '/logos/marley-spoon.png',
    accepteert: false,
    label: '❌ NEE',
    uitgevers: '—',
    beperking: '—',
    heeftCta: false,
    badge: null,
  },
  {
    naam: 'Factor',
    slug: 'factor',
    logo: '/logos/factor.svg',
    accepteert: false,
    label: '❌ NEE',
    uitgevers: '—',
    beperking: '—',
    heeftCta: false,
    badge: null,
  },
  {
    naam: 'Ekomenu',
    slug: 'ekomenu',
    logo: '/logos/ekomenu.png',
    accepteert: false,
    label: '❌ NEE',
    uitgevers: '—',
    beperking: '—',
    heeftCta: false,
    badge: null,
  },
  {
    naam: 'Foodmaker',
    slug: 'foodmaker',
    logo: '/logos/foodmaker.svg',
    accepteert: false,
    label: '❌ NEE',
    uitgevers: '—',
    beperking: '—',
    heeftCta: false,
    badge: null,
  },
  {
    naam: 'Carrefour Simply You',
    slug: 'carrefour-simply-you',
    logo: '/logos/carrefour-simply-you.svg',
    accepteert: false,
    label: '❌ NEE',
    uitgevers: '—',
    beperking: '—',
    heeftCta: false,
    badge: null,
  },
  {
    naam: 'Crowd Cooks',
    slug: 'crowd-cooks',
    logo: '/logos/crowd-cooks.svg',
    accepteert: false,
    label: '❌ NEE',
    uitgevers: '—',
    beperking: '—',
    heeftCta: false,
    badge: null,
  },
];

function aanbiederBg(accepteert: boolean) {
  return accepteert ? '#F0FDF4' : '#FEF2F2';
}

function labelKleur(accepteert: boolean) {
  return accepteert ? '#16A34A' : '#DC2626';
}

export default function MaaltijdchequesBlogPagina() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
          {' → '}
          <Link href="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Blog</Link>
          {' → '}
          <strong style={{ color: 'var(--ink)' }}>Maaltijdbox betalen met maaltijdcheques</strong>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
            ✓ Bijgewerkt juni 2026
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 6vw, 40px)', fontWeight: 900, lineHeight: 1.15, marginBottom: 16, color: 'var(--ink)' }}>
            Maaltijdbox betalen met maaltijdcheques in België — wie accepteert ze?
          </h1>
          <p style={{ fontSize: 17, color: '#4B5563', lineHeight: 1.7, maxWidth: 700, borderLeft: '3px solid #1B4332', paddingLeft: 16, margin: 0 }}>
            Drie maaltijdboxen accepteren elektronische maaltijdcheques van Monizze, Pluxee (Sodexo) en Edenred: <strong>Foodbag</strong>, <strong>HelloFresh</strong> en <strong>Foodprepper</strong>. De andere aanbieders doen dit (nog) niet.
          </p>
        </div>

        {/* Vergelijkingstabel */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Overzicht: welke maaltijdbox accepteert maaltijdcheques?
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 600 }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  {['Aanbieder', 'Maaltijdcheques?', 'Welke uitgevers', 'Beperking', 'Actie'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tabelData.map((r, i) => (
                  <tr key={r.naam} style={{ borderBottom: '1px solid var(--rule)', background: i === 0 ? '#F0FDF4' : aanbiederBg(r.accepteert) }}>
                    <td style={{ padding: '12px 12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700 }}>
                        <div style={{ width: 28, height: 28, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                          <img src={r.logo} alt={r.naam} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <span>
                          {r.naam}
                          {r.badge && (
                            <span style={{ marginLeft: 6, fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332', verticalAlign: 'middle' }}>
                              {r.badge}
                            </span>
                          )}
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: '12px 12px', fontWeight: 700, color: labelKleur(r.accepteert), whiteSpace: 'nowrap' }}>{r.label}</td>
                    <td style={{ padding: '12px 12px', color: '#4B5563', fontSize: 12 }}>{r.uitgevers}</td>
                    <td style={{ padding: '12px 12px', color: '#6B7280', fontSize: 12 }}>{r.beperking}</td>
                    <td style={{ padding: '12px 12px' }}>
                      {r.heeftCta ? (
                        <Link href={`/ga/${r.slug}`} style={{ display: 'inline-block', background: '#1B4332', color: 'white', padding: '8px 14px', borderRadius: 8, fontWeight: 700, fontSize: 12, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                          Bekijk →
                        </Link>
                      ) : (
                        <span style={{ fontSize: 12, color: '#9CA3AF' }}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Uitgelichte winnaar — Foodbag */}
        <div style={{ background: '#F0FDF4', border: '2px solid #A7DFC0', borderRadius: 16, padding: '24px 20px', marginBottom: 40, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #1B4332, #52B788)' }} />
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'white', border: '1.5px solid #A7DFC0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                  <img src="/logos/foodbag.png" alt="Foodbag" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
                </div>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#1B4332', color: 'white', borderRadius: 100, padding: '3px 10px', fontSize: 11, fontWeight: 700, marginBottom: 4 }}>
                    ⭐ Beste keuze met maaltijdcheques
                  </div>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, color: 'var(--ink)' }}>Foodbag</div>
                </div>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.8, color: '#374151' }}>
                <li>Geen abonnement — ideaal voor eenmalige betaling met je cheques</li>
                <li>Accepteert <strong>Monizze</strong>, <strong>Pluxee</strong> en <strong>Edenred</strong></li>
                <li>Verse Belgische ingrediënten, bezorging gratis</li>
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 180, alignSelf: 'center' }}>
              <Link href="/ga/foodbag" style={{ display: 'block', background: '#1B4332', color: 'white', textAlign: 'center', padding: '13px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                Bekijk Foodbag →
              </Link>
              <div style={{ fontSize: 11, color: '#6B7280', textAlign: 'center' }}>Accepteert Monizze, Pluxee & Edenred</div>
            </div>
          </div>
        </div>

        {/* H2-secties per aanbieder */}
        <div style={{ marginBottom: 40 }}>

          {/* Foodbag */}
          <div style={{ marginBottom: 32, padding: '24px', border: '1.5px solid var(--rule)', borderRadius: 14, background: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                <img src="/logos/foodbag.png" alt="Foodbag" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 3 }} />
              </div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, margin: 0, color: 'var(--ink)' }}>
                Foodbag betalen met maaltijdcheques
              </h2>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: '#374151', marginBottom: 18, marginTop: 0 }}>
              Foodbag is de eenvoudigste keuze: je betaalt gewoon met je Monizze-, Pluxee- of Edenred-kaart bij het afrekenen. Let op: dit werkt alleen bij een <strong>eenmalige bestelling</strong>. Sla je je bestelling op als abonnement, dan kan je de cheques niet koppelen. Ideaal als je af en toe wil bestellen zonder vast te zitten aan een terugkerend plan.
            </p>
            <Link href="/ga/foodbag" style={{ display: 'inline-block', background: '#1B4332', color: 'white', padding: '11px 20px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
              Bestel Foodbag met maaltijdcheques →
            </Link>
          </div>

          {/* HelloFresh */}
          <div style={{ marginBottom: 32, padding: '24px', border: '1.5px solid var(--rule)', borderRadius: 14, background: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                <img src="/logos/hellofresh.png" alt="HelloFresh" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 3 }} />
              </div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, margin: 0, color: 'var(--ink)' }}>
                HelloFresh betalen met maaltijdcheques
              </h2>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: '#374151', marginBottom: 18, marginTop: 0 }}>
              HelloFresh werkt samen met Monizze en Edenred, maar vereist een extra stap: activeer de <strong>Monizze Virtual Visa-kaart</strong> in de Monizze-app en voeg die toe als betaalmethode in je HelloFresh-account. Via Edenred gebruik je de kaartgegevens op de achterkant van je kaart. Eenmaal ingesteld wordt je HelloFresh-abonnement wekelijks afgeschreven van je cheque-saldo.
            </p>
            <Link href="/ga/hellofresh" style={{ display: 'inline-block', background: '#1B4332', color: 'white', padding: '11px 20px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
              Bekijk HelloFresh →
            </Link>
          </div>

          {/* Foodprepper */}
          <div style={{ marginBottom: 8, padding: '24px', border: '1.5px solid var(--rule)', borderRadius: 14, background: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                <img src="/logos/foodprepper.png" alt="Foodprepper" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 3 }} />
              </div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, margin: 0, color: 'var(--ink)' }}>
                Foodprepper betalen met maaltijdcheques
              </h2>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: '#374151', marginBottom: 18, marginTop: 0 }}>
              Foodprepper accepteert Monizze, Pluxee en Edenred-cheques. Net als bij Foodbag geldt: alleen bij <strong>eenmalige bestellingen</strong>, niet bij een terugkerend abonnement. Foodprepper levert enkel in Vlaanderen en Brussel en zet een verse maaltijd in 15 minuten op tafel.
            </p>
            <Link href="/ga/foodprepper" style={{ display: 'inline-block', background: '#1B4332', color: 'white', padding: '11px 20px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
              Bestel Foodprepper →
            </Link>
          </div>
        </div>

        {/* 3 stappen */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Hoe betaal je met maaltijdcheques — 3 stappen
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { stap: 1, titel: 'Kies een aanbieder die maaltijdcheques accepteert', tekst: 'Foodbag, HelloFresh of Foodprepper zijn de enige maaltijdboxen in België die elektronische maaltijdcheques aanvaarden.' },
              { stap: 2, titel: 'Kies voor een eenmalige bestelling', tekst: 'Bij Foodbag en Foodprepper werkt de betaling met maaltijdcheques uitsluitend bij eenmalige bestellingen. Bij HelloFresh kan je ook met abonnement betalen via de Monizze Virtual Visa-kaart of Edenred.' },
              { stap: 3, titel: 'Kies je betaalmethode bij het afrekenen', tekst: 'Selecteer je Monizze-, Pluxee- of Edenred-kaart als betaalmethode op de afrekenpagina. Bij HelloFresh via Monizze: voeg eerst de Virtual Visa-kaart toe in je accountinstellingen.' },
            ].map(s => (
              <div key={s.stap} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'white', border: '1.5px solid var(--rule)', borderRadius: 12, padding: '18px 20px' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 32, fontWeight: 900, color: '#C8EAD8', lineHeight: 1, flexShrink: 0, minWidth: 32 }}>{s.stap}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: 'var(--ink)' }}>{s.titel}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.7, color: '#4B5563' }}>{s.tekst}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nieuws-blok 2026 */}
        <div style={{ background: '#F0FDF4', border: '1.5px solid #A7DFC0', borderRadius: 14, padding: '20px 24px', marginBottom: 40 }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: '#1B4332', marginBottom: 8 }}>
            💡 Nieuw in 2026: hoger maximumbedrag
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#374151', margin: 0 }}>
            Het maximumbedrag voor maaltijdcheques stijgt naar <strong>€10 per dag</strong> (was €8). Dat betekent meer koopkracht voor jouw wekelijkse maaltijdbox. Een gemiddelde Foodbag-bestelling voor 2 personen (3 maaltijden) kost rond <strong>€57</strong> — met je maaltijdcheques betaal je een groot deel zelf niet uit eigen zak.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Veelgestelde vragen
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
            {faqJsonLd.mainEntity.map(({ name, acceptedAnswer }) => (
              <div key={name} style={{ background: 'white', borderRadius: 12, padding: 20, border: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 14, fontWeight: 700, marginBottom: 8, color: 'var(--ink)' }}>{name}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: '#4B5563' }}>{acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Afsluitende 3 CTA-kaarten */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Klaar om te bestellen?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {[
              { naam: 'Foodbag', logo: '/logos/foodbag.png', slug: 'foodbag', tag: 'Eenvoudigst — geen abonnement nodig', kleur: '#1E40AF', bg: '#EFF6FF' },
              { naam: 'HelloFresh', logo: '/logos/hellofresh.png', slug: 'hellofresh', tag: 'Groot aanbod — ook voor abonnement', kleur: '#1B4332', bg: '#F0FDF4' },
              { naam: 'Foodprepper', logo: '/logos/foodprepper.png', slug: 'foodprepper', tag: 'Klaar in 15 min — Vlaamse keuken', kleur: '#2D6A4F', bg: '#ECFDF5' },
            ].map(a => (
              <div key={a.naam} style={{ background: 'white', borderRadius: 14, border: '1.5px solid var(--rule)', padding: '20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: a.bg, border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                    <img src={a.logo} alt={a.naam} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 800, fontSize: 16 }}>{a.naam}</div>
                    <div style={{ fontSize: 12, color: '#6B7280' }}>{a.tag}</div>
                  </div>
                </div>
                <Link href={`/ga/${a.slug}`} style={{ display: 'block', background: a.kleur, color: 'white', textAlign: 'center', padding: '11px', borderRadius: 9, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
                  Bekijk {a.naam} →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate disclaimer */}
        <p style={{ fontSize: 12, color: '#9CA3AF', borderTop: '1px solid var(--rule)', paddingTop: 20, marginTop: 0 }}>
          Affiliate disclosure: we ontvangen een kleine commissie via deze links, zonder meerprijs voor jou. Dit heeft geen invloed op onze beoordeling.
        </p>

        <Link href="/blog" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>← Terug naar blog</Link>
      </div>
    </>
  );
}
