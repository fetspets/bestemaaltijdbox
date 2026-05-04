import Link from 'next/link';
import type { Metadata } from 'next';
import { getAanbieder } from '@/lib/aanbieders';

const FOODPREPPER_CTA = 'https://deals.foodprepper.be/c?c=40691&m=2545883&a=507243&r=&u=';
const FOODPREPPER_KORTING = 'https://deals.foodprepper.be/c?c=40691&m=2545927&a=507243&r=&u=';
const CANONICAL = 'https://www.bestemaaltijdbox.be/vergelijk/foodprepper-vs-hellofresh';

export const metadata: Metadata = {
  title: 'Foodprepper vs HelloFresh (2026) – Belgisch vs internationaal',
  description:
    'Foodprepper of HelloFresh kiezen? Vergelijk prijs, menu, snelheid en levering. Wij zetten beide maaltijdboxen eerlijk naast elkaar voor Belgische gezinnen.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Foodprepper vs HelloFresh (2026) – Belgisch vs internationaal',
    description:
      'Foodprepper of HelloFresh kiezen? Vergelijk prijs, menu, snelheid en levering. Wij zetten beide maaltijdboxen eerlijk naast elkaar voor Belgische gezinnen.',
    type: 'article',
    url: CANONICAL,
  },
};

export default function FoodprepperVsHellofresh() {
  const fp = getAanbieder('foodprepper')!;
  const hf = getAanbieder('hellofresh')!;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Foodprepper goedkoper dan HelloFresh?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dat hangt af van je keuze. HelloFresh heeft een vaste prijs vanaf €5,50 per portie. Foodprepper werkt met een wisselend menu — controleer de actuele prijs op foodprepper.be, want die varieert. Nieuwe Foodprepper-klanten krijgen via code FOODPREPX45 drie keer €15 korting, wat de eerste bestellingen goedkoper kan maken. HelloFresh biedt ook welkomstkortingen voor nieuwe klanten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Levert HelloFresh ook in Vlaanderen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, HelloFresh levert in heel België inclusief Vlaanderen, Brussel en Wallonië. Foodprepper levert enkel in Vlaanderen en het Brussels Hoofdstedelijk Gewest. Voor wie in Wallonië woont, is HelloFresh de enige keuze van de twee.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welke is het beste voor drukke gezinnen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Foodprepper heeft op drukke avonden een praktisch voordeel: klaar in 15 minuten dankzij voorbereide ingrediënten. HelloFresh vraagt 25–40 minuten. Voor gezinnen met weinig marge in de avondroutine is Foodprepper sneller. HelloFresh biedt meer receptkeuze en een groter weekmenu, wat handig is als je lang op één aanbieder wil blijven zonder eentonigheid.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kan ik beide maaltijdboxen combineren?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, dat kan. Foodprepper heeft geen verplicht abonnement en je kan eenmalig of wekelijks bestellen. HelloFresh werkt met een flexibel abonnement dat je wekelijks kan pauzeren. Sommige gezinnen combineren een snelle Foodprepper-bestelling op drukke weken met HelloFresh op rustigere weken.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bestemaaltijdbox.be' },
      { '@type': 'ListItem', position: 2, name: 'Vergelijk', item: 'https://www.bestemaaltijdbox.be/vergelijk' },
      { '@type': 'ListItem', position: 3, name: 'Foodprepper vs HelloFresh', item: CANONICAL },
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
          <strong style={{ color: 'var(--ink)' }}>Foodprepper vs HelloFresh</strong>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
            ✓ Onafhankelijk vergeleken · 2026
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 7vw, 42px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
            Foodprepper vs HelloFresh: welke maaltijdbox wint in België?
          </h1>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 680, marginBottom: 12 }}>
            HelloFresh is de wereldmarktleider: actief in 18 landen, meer dan 8 miljoen klanten en een indrukwekkend weekmenu van 40+ recepten. Foodprepper is iets heel anders: 100% Belgisch, opgericht in 2021, en gebouwd rond één belofte — op tafel in 15 minuten.
          </p>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 680, marginBottom: 12 }}>
            Beide zijn kookboxen waarbij je zelf de laatste stap zet, maar de vergelijking houdt daarna snel op. HelloFresh stuurt je ruwe ingrediënten en een recept. Foodprepper stuurt voorbereide ingrediënten: groenten zijn voorgesneden en voorgegaard, vlees is gemarineerd, sauzen zijn klaar. Jij werkt alles samen in een kwartier.
          </p>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 680 }}>
            Hieronder vergelijken we beide eerlijk op kooktijd, menu, prijs, herkomst en levering — zodat je weet welke het beste bij jou past.
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
            Code <strong>FOODPREPX45</strong> — 3× €15 korting voor nieuwe klanten
          </span>
        </div>

        {/* Score-overzicht: 2 kolommen */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 36 }}>
          {[
            { a: fp, accentColor: '#2D6A4F', prijs: '[PRIJS]', label: 'Beste prijs: check foodprepper.be' },
            { a: hf, accentColor: '#1B4332', prijs: `€${hf.prijsPerPortie.toFixed(2)}/portie`, label: hf.tagline },
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
          <div style={{ borderRadius: 12, overflow: 'hidden', border: '1.5px solid var(--rule)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#1B4332', color: 'white' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Kenmerk</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Foodprepper</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: 600, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase' }}>HelloFresh</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Kooktijd', '~15 min', '~30–45 min'],
                  ['Maaltijdtypes', 'Ontbijt, lunch, diner, snacks', 'Vooral avondmalen'],
                  ['Abonnement', 'Flexibel, niet verplicht', 'Abonnement, pauzeerbaar'],
                  ['Herkomst', '100% Belgisch', 'Internationaal'],
                  ['Levergebied', 'Vlaanderen & Brussel', 'Heel België'],
                  ['Prijs', '[PRIJS] — check foodprepper.be', `€${hf.prijsPerPortie.toFixed(2)}/portie`],
                  ['Recepten/week', `${fp.receptenPerWeek}+`, `${hf.receptenPerWeek}+`],
                  ['Lokale keten', 'Ja', 'Nee'],
                ].map(([kenmerk, fpVal, hfVal], i) => (
                  <tr key={kenmerk} style={{ borderBottom: '1px solid var(--rule)', background: i % 2 === 0 ? 'white' : '#FAFAFA' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700 }}>{kenmerk}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>{fpVal}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'center' }}>{hfVal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 8 }}>
            Prijzen kunnen wijzigen. Controleer de actuele tarieven op de website van de aanbieder.
          </p>
        </div>

        {/* H2: Kooktijd & gemak */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Kooktijd & gemak
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563', marginBottom: 12 }}>
            <strong>Foodprepper</strong> wint hier duidelijk. De bereiding is al voor een groot deel gedaan: groenten zijn voorgesneden en voorgegaard, vlees of vis is gemarineerd, sauzen zijn klaar. Jij bakt, warmt op of mengt — en na 15 minuten staat het eten op tafel. Geen snijplank, nauwelijks afwas.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563' }}>
            <strong>HelloFresh</strong> vraagt 30–45 minuten: je krijgt ruwe ingrediënten en een stap-voor-stap recept. De instructies zijn helder en geschikt voor beginners, maar je doet het voorbereidende werk zelf. Voor wie koken als ontspannend moment ervaart, is dat een pluspunt. Voor wie na een lange werkdag snel wil eten, is 40 minuten lang.
          </p>
        </div>

        {/* H2: Menu & keuze */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Menu & keuze
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563', marginBottom: 12 }}>
            <strong>HelloFresh</strong> biedt meer dan 40 recepten per week, verdeeld over meerdere categorieën: Quick & Easy, vegetarisch, familie, wereldkeukens. Voor wie lang op één aanbieder wil blijven zonder eentonigheid, is dat een groot voordeel.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563' }}>
            <strong>Foodprepper</strong> heeft een kleiner maar uniek aanbod: naast avondmaaltijden ook ontbijt, lunch en snacks via de versmarkt. Zo kan je één leverancier voor je hele dagmenu gebruiken. Het weekmenu is wisselend en beperkter dan bij HelloFresh, maar de categorie is breder.
          </p>
        </div>

        {/* H2: Belgisch vs internationaal */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Belgisch vs internationaal
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563', marginBottom: 12 }}>
            <strong>Foodprepper</strong> werkt bijna uitsluitend met Belgische leveranciers. De ingrediënten komen uit een korte keten — dat is merkbaar in de versheid en sluit aan bij bewust lokaal consumeren. Als onderdeel van Smartmat NV / Colruyt Group is de Belgische verankering structureel.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563' }}>
            <strong>HelloFresh</strong> is een internationale speler met een mondiale inkoopcapaciteit. Die schaalgrootte verklaart de lagere prijzen, maar ook de minder lokale herkomst van de ingrediënten. HelloFresh bezorgt in heel België, inclusief Wallonië — een praktisch voordeel voor wie buiten Vlaanderen woont. Foodprepper levert enkel in Vlaanderen en Brussel.
          </p>
          <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 10, padding: '14px 18px', marginTop: 12 }}>
            <strong style={{ fontSize: 13 }}>Voor wie lokaal kopen belangrijk is:</strong>
            <span style={{ fontSize: 13, color: '#4B5563', marginLeft: 6 }}>Foodprepper is de duidelijke keuze — 100% Belgische leveranciers, kortere keten.</span>
          </div>
        </div>

        {/* H2: Prijs */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Prijs
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563', marginBottom: 12 }}>
            HelloFresh begint vanaf <strong>€{hf.prijsPerPortie.toFixed(2)} per portie</strong> en heeft regelmatig welkomstkortingen voor nieuwe klanten. De prijs van Foodprepper varieert per maaltijdkeuze — check foodprepper.be voor het actuele aanbod, want tarieven kunnen wijzigen.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#4B5563' }}>
            Nieuwe Foodprepper-klanten kunnen via code <strong>FOODPREPX45</strong> drie keer €15 korting halen op hun eerste drie bestellingen. Dat maakt de startperiode extra voordelig om zelf te vergelijken.
          </p>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 8 }}>
            Prijzen kunnen wijzigen. Controleer altijd de actuele tarieven op foodprepper.be en hellofresh.be.
          </p>
        </div>

        {/* Kortingsblokken */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
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

          {/* HelloFresh korting */}
          <div style={{ background: '#F0FDF4', border: '1.5px solid #A7DFC0', borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: '#D1FAE5', color: '#1B4332', display: 'inline-block', marginBottom: 12 }}>
              🏷️ Welkomstkorting HelloFresh
            </div>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 900, marginBottom: 8 }}>
              Code: <span style={{ color: '#1B4332' }}>BESTE60</span>
            </h3>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: '#4B5563', marginBottom: 14 }}>
              Tot <strong>€60 korting</strong> op de eerste boxen. Voer code <strong>BESTE60</strong> in bij het afrekenen op hellofresh.be.
            </p>
            <a
              href={hf.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow"
              style={{ display: 'block', background: '#1B4332', color: 'white', textAlign: 'center', padding: '10px 16px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none' }}
            >
              Bekijk HelloFresh →
            </a>
            <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8 }}>
              Geldig voor nieuwe klanten. Controleer geldigheid op hellofresh.be.
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
              'Je maximaal 15 minuten wil koken op een doordeweekse avond',
              'Je bewust Belgisch en lokaal wil consumeren',
              'Je ook ontbijt en lunch geregeld wil via één leverancier',
              'Je in Vlaanderen of Brussel woont (Foodprepper levert niet in Wallonië)',
              'Je een flexibele formule wil zonder verplicht abonnement',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.6, color: '#4B5563', background: 'white', border: '1px solid var(--rule)', borderRadius: 8, padding: '12px 16px' }}>
                <span style={{ color: '#2D6A4F', fontWeight: 700, flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* H2: Kies HelloFresh als */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
            Kies HelloFresh als…
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Je van echt koken houdt en 30–45 minuten in de keuken staat',
              'Je een groot en gevarieerd weekmenu wil: 40+ recepten per week',
              'Je in Wallonië woont of in heel België wil bestellen',
              'Je een bewezen internationale aanbieder met brede support wil',
              'Je op zoek bent naar de laagste vaste prijs per portie',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.6, color: '#4B5563', background: 'white', border: '1px solid var(--rule)', borderRadius: 8, padding: '12px 16px' }}>
                <span style={{ color: '#1B4332', fontWeight: 700, flexShrink: 0 }}>✓</span>
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
            Foodprepper wint op snelheid en lokale herkomst. HelloFresh wint op menugrootte en bereik.
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: '#4B5563', marginBottom: 20 }}>
            Foodprepper is de sterkste keuze voor drukke gezinnen en tweeverdieners die vers willen eten in 15 minuten, bewust Belgisch consumeren en ook ontbijt of lunch willen regelen. HelloFresh wint op receptenvariatie (40+), bereik (heel België) en een vaste lage prijs per portie. Wie van koken houdt of in Wallonië woont, kiest HelloFresh. Wie snelheid en lokale herkomst boven menugrootte stelt, kiest Foodprepper.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <a
              href={FOODPREPPER_CTA}
              target="_blank"
              rel="sponsored nofollow"
              style={{ display: 'block', background: '#2D6A4F', color: 'white', textAlign: 'center', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}
            >
              Bekijk Foodprepper →
            </a>
            <Link
              href="/aanbieder/hellofresh"
              style={{ display: 'block', background: 'white', color: '#1B4332', textAlign: 'center', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: '2px solid #1B4332' }}
            >
              Bekijk HelloFresh →
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
                q: 'Is Foodprepper goedkoper dan HelloFresh?',
                a: 'Dat hangt af van je keuze. HelloFresh heeft een vaste prijs vanaf €5,50 per portie. Foodprepper werkt met een wisselend menu — controleer de actuele prijs op foodprepper.be, want die varieert. Nieuwe Foodprepper-klanten krijgen via code FOODPREPX45 drie keer €15 korting, wat de eerste bestellingen goedkoper kan maken. HelloFresh biedt ook welkomstkortingen voor nieuwe klanten.',
              },
              {
                q: 'Levert HelloFresh ook in Vlaanderen?',
                a: 'Ja, HelloFresh levert in heel België inclusief Vlaanderen, Brussel en Wallonië. Foodprepper levert enkel in Vlaanderen en het Brussels Hoofdstedelijk Gewest. Voor wie in Wallonië woont, is HelloFresh de enige keuze van de twee.',
              },
              {
                q: 'Welke is het beste voor drukke gezinnen?',
                a: 'Foodprepper heeft op drukke avonden een praktisch voordeel: klaar in 15 minuten dankzij voorbereide ingrediënten. HelloFresh vraagt 25–40 minuten. Voor gezinnen met weinig marge in de avondroutine is Foodprepper sneller. HelloFresh biedt meer receptkeuze en een groter weekmenu, wat handig is als je lang op één aanbieder wil blijven zonder eentonigheid.',
              },
              {
                q: 'Kan ik beide maaltijdboxen combineren?',
                a: 'Ja, dat kan. Foodprepper heeft geen verplicht abonnement en je kan eenmalig of wekelijks bestellen. HelloFresh werkt met een flexibel abonnement dat je wekelijks kan pauzeren. Sommige gezinnen combineren een snelle Foodprepper-bestelling op drukke weken met HelloFresh op rustigere weken.',
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
          <Link href="/aanbieder/hellofresh" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none' }}>Volledige review HelloFresh →</Link>
        </div>
      </div>
    </>
  );
}
