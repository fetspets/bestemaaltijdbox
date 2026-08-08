import Link from 'next/link';
import type { Metadata } from 'next';
import { getAanbieder } from '@/lib/aanbieders';

const FOODPREPPER_CTA = 'https://deals.foodprepper.be/c?c=40691&m=2545883&a=507243&r=&u=';
const FOODPREPPER_KORTING = 'https://deals.foodprepper.be/c?c=40691&m=2545927&a=507243&r=&u=';
const CANONICAL = 'https://bestemaaltijdbox.be/vergelijk/foodprepper-vs-foodbag';

export const metadata: Metadata = {
  title: 'Foodprepper vs Foodbag 2026: snelheid of variatie?',
  description:
    'Foodprepper klaar in 15 min, Foodbag in 30 min — maar welke smaakt beter en is goedkoper? Eerlijke vergelijking van twee Belgische maaltijdboxen.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Foodprepper vs Foodbag 2026: snelheid of variatie?',
    description:
      'Foodprepper klaar in 15 min, Foodbag in 30 min — maar welke smaakt beter en is goedkoper? Eerlijke vergelijking van twee Belgische maaltijdboxen.',
    type: 'article',
    url: CANONICAL,
  },
};

export default function FoodprepperVsFoodbag() {
  const fp = getAanbieder('foodprepper')!;
  const fb = getAanbieder('foodbag')!;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Zijn Foodprepper en Foodbag hetzelfde bedrijf?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ze zijn van hetzelfde moederbedrijf: Smartmat NV, onderdeel van de Colruyt Group. Maar ze zijn compleet anders opgezet. Foodbag is een klassieke kookbox waarbij je zelf kookt in 25–35 minuten. Foodprepper levert half-voorbereide maaltijden die je in 15 minuten afwerkt. Doelgroep, menu en bestelervaring zijn apart.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welke is goedkoper: Foodprepper of Foodbag?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Foodbag kost gemiddeld meer per portie dan Foodprepper. Maar de exacte prijs hangt sterk af van welke maaltijden je kiest en voor hoeveel personen. Controleer de actuele prijzen op foodprepper.be en foodbag.be — prijzen kunnen wijzigen. Nieuwe Foodprepper-klanten krijgen via code FOODPREPX45 drie keer €15 korting op hun eerste drie bestellingen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kan ik beide uitproberen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Zowel Foodprepper als Foodbag vereisen geen verplicht abonnement — je kan eenmalig bestellen en zelf vergelijken. Foodprepper heeft een welkomstkorting FOODPREPX45 (3× €15 op je eerste 3 bestellingen). Foodbag heeft een eigen welkomstaanbieding voor nieuwe klanten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welke is het beste voor een gezin met kinderen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Foodprepper heeft een praktisch voordeel voor gezinnen met jonge kinderen: klaar in 15 minuten, minder stress op drukke avonden. Foodbag biedt meer kookkeuze en receptvariatie. Als snelheid in de avondroutine telt, is Foodprepper sterker. Als je van samen koken houdt, is Foodbag interessanter.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bestemaaltijdbox.be' },
      { '@type': 'ListItem', position: 2, name: 'Vergelijk', item: 'https://bestemaaltijdbox.be/vergelijk' },
      { '@type': 'ListItem', position: 3, name: 'Foodprepper vs Foodbag', item: CANONICAL },
    ],
  };

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
          <strong style={{ color: 'var(--ink)' }}>Foodprepper vs Foodbag</strong>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
            ✓ Onafhankelijk vergeleken · 2026
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 7vw, 42px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            Foodprepper vs Foodbag: welke maaltijdbox kies jij?
          </h1>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 680, marginBottom: 12 }}>
            Foodprepper en Foodbag zijn van hetzelfde moederbedrijf — Smartmat NV, onderdeel van de Colruyt Group. Maar wie denkt dat ze uitwisselbaar zijn, vergist zich. Ze richten zich op totaal andere gebruikers met een totaal andere aanpak.
          </p>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 680, marginBottom: 12 }}>
            Foodbag is een klassieke kookbox: verse Belgische ingrediënten, zelf snijden en bereiden, klaar in 25–35 minuten. Foodprepper gaat verder: de chef doet het voorbereidende werk — groenten zijn voorgegaard, vlees gemarineerd, sauzen klaar. Jij werkt alles samen in 15 minuten. Het resultaat voelt als een echte maaltijd, maar kost twee keer minder tijd.
          </p>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 680 }}>
            Of jij de juiste keuze maakt, hangt af van je avondroutine. Hieronder vergelijken we beide eerlijk op snelheid, menu, prijs, levering en meer.
          </p>
        </div>

        {/* Primaire CTA bovenaan */}
        <div style={{ marginBottom: 36 }}>
          <a
            href={FOODPREPPER_CTA}
            target="_blank"
            rel="sponsored nofollow"
            style={{ display: 'inline-block', background: '#2D6A4F', color: 'white', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}
          >
            Bekijk Foodprepper →
          </a>
          <span style={{ marginLeft: 16, fontSize: 13, color: 'var(--muted)' }}>
            3× €15 korting voor nieuwe klanten — automatisch via onze link
          </span>
        </div>

        {/* Score-overzicht: 2 kolommen */}
        <div className="two-col-grid" style={{ marginBottom: 36 }}>
          {[
            { a: fp, accentColor: '#2D6A4F', prijs: '[PRIJS]' },
            { a: fb, accentColor: '#1E40AF', prijs: `€${fb.prijsPerPortie.toFixed(2)}/portie` },
          ].map(({ a, accentColor, prijs }) => (
            <div key={a.slug} style={{
              background: 'white', borderRadius: 16, border: `2px solid ${accentColor}`,
              padding: 24, textAlign: 'center', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: accentColor }} />
              <div style={{ fontSize: 32, marginBottom: 8 }}>
                <img src={a.logo} alt={a.naam} style={{ width: 48, height: 48, objectFit: 'contain' }} />
              </div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 4 }}>{a.naam}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 40, fontWeight: 900, color: accentColor, lineHeight: 1 }}>{a.score.totaal.toFixed(1)}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>/10 totaalscore</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: accentColor }}>{prijs}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{a.tagline}</div>
            </div>
          ))}
        </div>

        {/* Snel overzicht tabel */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Snel overzicht
          </h2>
          <div style={{ borderRadius: 12, overflowX: 'auto', border: '1.5px solid var(--rule)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Kenmerk</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Foodprepper</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Foodbag</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Kooktijd', '~15 min', '~30 min'],
                  ['Maaltijdtypes', 'Ontbijt, lunch, diner, snacks', 'Vooral avondmalen'],
                  ['Abonnement verplicht', 'Nee', 'Nee'],
                  ['Levergebied', 'Vlaanderen & Brussel', 'Vlaanderen & Brussel'],
                  ['Levering', 'Gratis, zon/maa', 'Gratis'],
                  ['Prijs', '[PRIJS] — check foodprepper.be', `€${fb.prijsPerPortie.toFixed(2)}/portie`],
                  ['Belgische ingrediënten', 'Ja', 'Ja'],
                  ['Moederbedrijf', 'Smartmat / Colruyt Group', 'Smartmat / Colruyt Group'],
                ].map(([kenmerk, fpVal, fbVal], i) => (
                  <tr key={kenmerk} style={{ borderBottom: '1px solid var(--rule)', background: i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700 }}>{kenmerk}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>{fpVal}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>{fbVal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 8 }}>
            Prijzen kunnen wijzigen. Controleer de actuele tarieven op de website van de aanbieder.
          </p>
        </div>

        {/* H2: Het grote verschil */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Het grote verschil — snelheid vs kookplezier
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563', marginBottom: 12 }}>
            Foodprepper en Foodbag zitten in hetzelfde ecosysteem, maar spelen op een ander snaartje. <strong>Foodprepper</strong> sloopt de tijdsbarrière: de chef heeft het snijwerk, de marinade en de sauzen al klaar. Jij bakt, warmt op of mengt — en na 15 minuten staat het eten op tafel. Geen keuken vol afval, geen lange voorbereiding.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563' }}>
            <strong>Foodbag</strong> kiest bewust voor de klassieke kookervaring: verse Belgische groenten, zelf snijden, zelf bereiden. De bereidingstijd ligt op 25–35 minuten. Wie koken als ontspanning ervaart, vindt hier meer beleving. Wie elke avond maximaal 20 minuten heeft, vindt Foodbag misschien te bewerkelijk.
          </p>
        </div>

        {/* H2: Menu & variatie */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Menu & variatie
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563', marginBottom: 12 }}>
            <strong>Foodprepper</strong> onderscheidt zich met een volledig dagmenu: ontbijt, lunch, diner én snacks. Via de versmarkt — een soort online buurtsupermarkt — kan je ook soepen, bijgerechten en snacks bijbestellen. Het weekmenu wisselt, maar is kleiner dan bij Foodbag.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563' }}>
            <strong>Foodbag</strong> biedt 20+ recepten per week verdeeld over 5 kookstijlen, waaronder de populaire Sana-lijn van Sandra Bekkari en de Busy Day-gerechten (klaar in 20 min). Wie afwisseling wil in avondmaaltijden, vindt hier een breed aanbod. Ontbijt en lunch zitten er niet bij.
          </p>
        </div>

        {/* H2: Prijs */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Prijs
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563', marginBottom: 12 }}>
            Foodbag kost gemiddeld <strong>€{fb.prijsPerPortie.toFixed(2)} per portie</strong> — een van de hogere prijzen in de Belgische maaltijdboxmarkt, te verklaren door de lokale inkoop en eigen bezorgers. De prijs van Foodprepper varieert per maaltijdkeuze en wordt best gecheckt op foodprepper.be, want die evolueert.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563' }}>
            Voor nieuwe Foodprepper-klanten geldt een welkomstkorting: 3× €15 korting op de eerste 3 bestellingen (totaal tot €45 voordeel), automatisch toegepast via onze link. Dat maakt de instap extra aantrekkelijk om te vergelijken.
          </p>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 8 }}>
            Prijzen kunnen wijzigen. Controleer altijd de actuele tarieven op foodprepper.be en foodbag.be.
          </p>
        </div>

        {/* Kortingsblokken */}
        <div className="two-col-grid" style={{ marginBottom: 40 }}>
          {/* Foodprepper korting */}
          <div style={{ background: '#ECFDF5', border: '1.5px solid #A7DFC0', borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#D1FAE5', color: '#065F46', display: 'inline-block', marginBottom: 12 }}>
              🏷️ Welkomstkorting Foodprepper
            </div>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 900, marginBottom: 8 }}>
              Code: <span style={{ color: '#2D6A4F' }}>FOODPREPX45</span>
            </h3>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: '#4B5563', marginBottom: 14 }}>
              <strong>3× €15 korting</strong> op eerste 3 bestellingen (tot €45). Voer code handmatig in bij het afrekenen.
            </p>
            <a
              href={FOODPREPPER_KORTING}
              target="_blank"
              rel="sponsored nofollow"
              style={{ display: 'block', background: '#2D6A4F', color: 'white', textAlign: 'center', padding: '10px 16px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}
            >
              €15 korting op eerste 3 bestellingen →
            </a>
            <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8 }}>
              Geldig voor nieuwe klanten. Controleer geldigheid op foodprepper.be.
            </p>
          </div>

          {/* Foodbag korting */}
          <div style={{ background: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#DBEAFE', color: '#1E40AF', display: 'inline-block', marginBottom: 12 }}>
              🏷️ Welkomstkorting Foodbag
            </div>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 900, marginBottom: 8 }}>
              Code: <span style={{ color: '#1E40AF' }}>FOODBAGx60</span>
            </h3>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: '#4B5563', marginBottom: 14 }}>
              <strong>3× €20 korting</strong> op eerste 3 bestellingen (tot €60). Voer code handmatig in bij het afrekenen op foodbag.be.
            </p>
            <a
              href={fb.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow"
              style={{ display: 'block', background: '#1E40AF', color: 'white', textAlign: 'center', padding: '10px 16px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}
            >
              Bekijk Foodbag →
            </a>
            <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8 }}>
              Geldig voor nieuwe klanten. Controleer geldigheid op foodbag.be.
            </p>
          </div>
        </div>

        {/* H2: Kies Foodprepper als */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Kies Foodprepper als…
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Je minder dan 20 minuten wil koken op een doordeweekse avond',
              'Je ook ontbijt en lunch geregeld wil via één leverancier',
              'Je kinderen hebt en weinig marge in de avondroutine',
              'Je vers wil eten zonder het zware voorbereidingswerk zelf te doen',
              'Je de Belgische ingrediënten van Foodbag wil, maar sneller klaar',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.6, color: '#4B5563', background: 'white', border: '1px solid var(--rule)', borderRadius: 8, padding: '12px 16px' }}>
                <span style={{ color: '#2D6A4F', fontWeight: 700, flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* H2: Kies Foodbag als */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Kies Foodbag als…
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Je van koken houdt en het als een ontspannend moment ziet',
              'Je de avond als rusttijd ervaart en er 30 minuten voor neemt',
              'Je veel receptvariatie wil: 20+ maaltijden per week uit 5 kookstijlen',
              'Je bewust lokaal en Belgisch wil eten met kortere keten',
              'Je de Sandra Bekkari Sana-lijn of Busy Day-gerechten wil',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.6, color: '#4B5563', background: 'white', border: '1px solid var(--rule)', borderRadius: 8, padding: '12px 16px' }}>
                <span style={{ color: '#1E40AF', fontWeight: 700, flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* H2: Ons verdict */}
        <div style={{ background: 'white', borderRadius: 16, border: '1.5px solid #2D6A4F', padding: 28, marginBottom: 40, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#2D6A4F' }} />
          <div style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#E8F5EE', color: '#1B4332', display: 'inline-block', marginBottom: 12 }}>
            ⭐ Ons verdict
          </div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 10 }}>
            Foodprepper of Foodbag — het hangt af van jou
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563', marginBottom: 20 }}>
            Er is geen absolute winnaar in deze vergelijking — de beste keuze hangt af van je levensstijl. Als je op doordeweekse avonden maximaal 20 minuten wil koken en ook ontbijt of lunch wil regelen, is Foodprepper de sterkste optie. Als je van koken houdt, de avond als rustmoment ervaart en veel receptvariatie wil, is Foodbag de juiste keuze. Beide zijn van hetzelfde moederbedrijf en gebruiken Belgische ingrediënten — het verschil zit hem in het concept.
          </p>
          <div className="two-col-grid" style={{ gap: 12 }}>
            <a
              href={FOODPREPPER_CTA}
              target="_blank"
              rel="sponsored nofollow"
              style={{ display: 'block', background: '#2D6A4F', color: 'white', textAlign: 'center', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}
            >
              Bekijk Foodprepper →
            </a>
            <Link
              href="/aanbieder/foodbag"
              style={{ display: 'block', background: 'white', color: '#1E40AF', textAlign: 'center', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: '2px solid #1E40AF' }}
            >
              Bekijk Foodbag →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Veelgestelde vragen
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              {
                q: 'Zijn Foodprepper en Foodbag hetzelfde bedrijf?',
                a: 'Ze zijn van hetzelfde moederbedrijf: Smartmat NV, onderdeel van de Colruyt Group. Maar ze zijn compleet anders opgezet. Foodbag is een klassieke kookbox waarbij je zelf kookt in 25–35 minuten. Foodprepper levert half-voorbereide maaltijden die je in 15 minuten afwerkt. Doelgroep, menu en bestelervaring zijn apart.',
              },
              {
                q: 'Welke is goedkoper: Foodprepper of Foodbag?',
                a: 'Foodbag kost gemiddeld meer per portie dan Foodprepper. Maar de exacte prijs hangt sterk af van welke maaltijden je kiest en voor hoeveel personen. Controleer de actuele prijzen op foodprepper.be en foodbag.be — prijzen kunnen wijzigen. Nieuwe Foodprepper-klanten krijgen via code FOODPREPX45 drie keer €15 korting op hun eerste drie bestellingen.',
              },
              {
                q: 'Kan ik beide uitproberen?',
                a: 'Ja. Zowel Foodprepper als Foodbag vereisen geen verplicht abonnement — je kan eenmalig bestellen en zelf vergelijken. Foodprepper heeft een welkomstkorting FOODPREPX45 (3× €15 op je eerste 3 bestellingen). Foodbag heeft een eigen welkomstaanbieding voor nieuwe klanten.',
              },
              {
                q: 'Welke is het beste voor een gezin met kinderen?',
                a: 'Foodprepper heeft een praktisch voordeel voor gezinnen met jonge kinderen: klaar in 15 minuten, minder stress op drukke avonden. Foodbag biedt meer kookkeuze en receptvariatie. Als snelheid in de avondroutine telt, is Foodprepper sterker. Als je van samen koken houdt, is Foodbag interessanter.',
              },
            ].map(({ q, a }) => (
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
          <Link href="/aanbieder/foodprepper" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>Volledige review Foodprepper →</Link>
          <Link href="/kortingscode/foodprepper" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>Kortingscodes Foodprepper →</Link>
          <Link href="/aanbieder/foodbag" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>Volledige review Foodbag →</Link>
        </div>
      </div>
    </>
  );
}
