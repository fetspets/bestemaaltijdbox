import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAanbiedersByFilter, aanbieders } from '@/lib/aanbieders';
import type { Metadata } from 'next';

const situaties: Record<string, {
  titel: string;
  h1: string;
  intro: string;
  uitleg: string;
  uitlegParagraphs?: string[];
  icon: string;
  seoTitel: string;
  seoDesc: string;
  faq: { q: string; a: string }[];
  nietGeschiktAls: string[];
}> = {
  koppel: {
    titel: 'Beste maaltijdbox voor koppels',
    h1: 'Beste maaltijdbox voor koppels in België (2026)',
    intro: 'Op zoek naar de beste maaltijdbox voor 2 personen? Wij testten alle Belgische maaltijdboxen specifiek voor koppels en vergeleken prijs, receptvariatie en flexibiliteit.',
    uitleg: '',
    uitlegParagraphs: [
      'Stel: jullie koken 3 à 4 avonden per week samen. Je wil variatie, maar ook niet elk weekend boodschappen doen. Een maaltijdbox lost precies dat op — maar welke past bij jullie leefstijl als koppel?',
      'HelloFresh wordt door veel koppels gekozen omdat je door het grote receptenaanbod zelden twee keer hetzelfde op tafel zet. Dat maakt het makkelijker om het vol te houden zonder snel te vervelen. Marley Spoon is interessant voor wie van koken een echte avondactiviteit wil maken: de recepten vragen meer aandacht, maar het resultaat voelt ook culinairder. Vergelijk beide in onze <a href="/vergelijk/hellofresh-vs-marley-spoon" style="color:#1B4332;font-weight:600;text-decoration:underline">HelloFresh vs Marley Spoon vergelijking</a>.',
      'Foodbag is vooral interessant voor koppels die bewust lokaal en Belgisch willen eten. De ingrediënten komen via een kortere keten — dat merk je aan de versheid. Het is wel duurder dan de internationale alternatieven, dus het is een bewuste keuze. Lees meer in onze <a href="/aanbieder/foodbag" style="color:#1B4332;font-weight:600;text-decoration:underline">volledige Foodbag review</a>.',
    ],
    icon: '👫',
    seoTitel: 'Beste Maaltijdbox voor Koppels België 2026 — Top 5 vergeleken',
    seoDesc: 'Welke maaltijdbox is het beste voor 2 personen in België? Wij vergeleken HelloFresh, Foodbag, Marley Spoon en meer. Eerlijke reviews en kortingscodes.',
    faq: [
      { q: 'Welke maaltijdbox is het goedkoopst voor 2 personen?', a: 'HelloFresh is een toegankelijke optie voor koppels, zeker met de welkomstkorting. Marley Spoon en Foodbag zijn duurder maar bieden een andere kwaliteit — Foodbag door lokale ingrediënten, Marley Spoon door uitgebreidere recepten.' },
      { q: 'Kan ik een maaltijdbox voor 2 personen makkelijk opzeggen?', a: 'Ja, HelloFresh, Foodbag en Marley Spoon laten je wekelijks opzeggen of pauzeren. Je zit nergens aan vast. Foodbag en Carrefour Simply You hebben zelfs geen verplicht abonnement.' },
      { q: 'Hoeveel maaltijden per week is realistisch als koppel?', a: 'De meeste koppels starten met 3 maaltijden per week — goed voor de drukke doordeweekse dagen, met ruimte voor een restaurant of zelf koken in het weekend. Je kan altijd aanpassen of pauzeren.' },
      { q: 'Is een maaltijdbox voor 2 personen duurder dan boodschappen?', a: 'Per portie betaal je doorgaans meer dan bij de supermarkt, maar je verspilt nauwelijks voedsel omdat alles exact afgemeten wordt geleverd. Voor koppels die regelmatig restjes weggooien of impulsaankopen doen bij de winkel, valt de werkelijke kostprijs vaak mee.' },
      { q: 'Kan ik als koppel ook kant-en-klare maaltijden bestellen?', a: 'Ja. Factor en Foodmaker leveren kant-en-klare maaltijden die je alleen nog moet opwarmen. Dat is handig voor drukke avonden, maar je mist het kookplezier van een klassieke maaltijdbox.' },
    ],
    nietGeschiktAls: [
      'Je maar 1 à 2 keer per week kookt — dan is de kostprijs per maaltijd relatief hoog.',
      'Jullie hebben sterk verschillende smaakvoorkeuren die moeilijk te combineren zijn in één recept.',
      'Je schema is heel onregelmatig en je kan moeilijk voorspellen wanneer je thuis kookt.',
    ],
  },
  gezin: {
    titel: 'Beste maaltijdbox voor gezinnen',
    h1: 'Beste maaltijdbox voor gezinnen in België (2026)',
    intro: 'Welke maaltijdbox past het beste bij een gezin met kinderen? Wij vergeleken portiegroottes, bereidingstijd en kindvriendelijke recepten van alle Belgische maaltijdboxen.',
    uitleg: '',
    uitlegParagraphs: [
      'Hoe zorg je voor gevarieerde, gezonde maaltijden op een drukke dinsdagavond — met kinderen die wachten, huiswerk dat gemaakt moet worden, en geen zin om na te denken over wat er in de koelkast ligt?',
      'Foodbag\'s "Busy Day" lijn is specifiek voor dat probleem gemaakt: maaltijden klaar in 20 minuten, weinig afwas, en toch verse ingrediënten van Belgische boerderijen. HelloFresh is interessant als je een groter gezin hebt of meer keuze wil: doordat je elke week zelf kiest, kan je de selectie afstemmen op wat de kinderen die week lekker vinden. Lees onze <a href="/gids/maaltijdbox-voor-gezinnen" style="color:#1B4332;font-weight:600;text-decoration:underline">uitgebreide gids voor gezinnen</a> voor een diepere vergelijking.',
      'Let ook op de bezorgdagen. Foodbag levert van vrijdag tot maandag — handig als je het weekend wil plannen. HelloFresh is flexibeler met meerdere weekdagen. Beide leveren in heel België inclusief Wallonië; Marley Spoon niet.',
    ],
    icon: '👨‍👩‍👧',
    seoTitel: 'Beste Maaltijdbox voor Gezinnen België 2026 — Snel en lekker',
    seoDesc: 'Welke maaltijdbox is het beste voor gezinnen met kinderen in België? Vergelijk Foodbag, HelloFresh en meer. Grote porties, snelle recepten.',
    faq: [
      { q: 'Welke maaltijdbox is het snelst klaar voor een gezin?', a: 'Foodbag "Busy Day" heeft maaltijden klaar in 20 minuten, met eenvoudige instructies en weinig afwas. HelloFresh "Quick & Easy" recepten zijn klaar in 25–30 minuten. Beide zijn goed haalbaar op drukke schoolavonden.' },
      { q: 'Welke maaltijdbox heeft de grootste porties voor gezinnen?', a: 'Foodbag en HelloFresh bieden boxen voor tot 5 personen. HelloFresh gaat als enige aanbieder tot 6 personen — handig voor grotere gezinnen of als er regelmatig iemand extra aan tafel zit.' },
      { q: 'Kunnen kinderen kieskeurig zijn bij maaltijdboxen?', a: 'HelloFresh heeft op zijn website een "Gezin" filter waarmee je kindvriendelijke recepten kan selecteren. Foodbag\'s Originals-lijn bevat veel vertrouwde Belgische klassiekers die ook bij kinderen in de smaak vallen.' },
      { q: 'Wat als een kind een voedingsallergie heeft?', a: 'HelloFresh en Ekomenu bieden de meest uitgebreide filteropties per allergie (gluten, lactose, noten). Foodbag heeft minder filteropties maar de ingrediëntlijsten zijn transparant per recept, zodat je zelf kan controleren.' },
      { q: 'Kan ik de maaltijdbox pauzeren tijdens schoolvakanties?', a: 'Ja. HelloFresh, Foodbag en Marley Spoon laten je leveringen pauzeren of overslaan, doorgaans tot 5 dagen voor de volgende leverdatum. Handig als je op vakantie bent of een week wil overslaan.' },
    ],
    nietGeschiktAls: [
      'Je gezin bestaat uit 5 of meer personen en je kookt elke dag — de kostprijs loopt dan snel op.',
      'Kinderen zijn heel kieskeurig en willen geen variatie of nieuwe gerechten uitproberen.',
      'Je wil volledige controle over elke ingredient (bijv. bij ernstige allergieën) — raadpleeg dan altijd de allergeninformatie per recept.',
    ],
  },
  vegetarisch: {
    titel: 'Beste vegetarische maaltijdbox',
    h1: 'Beste vegetarische maaltijdbox in België (2026)',
    intro: 'Op zoek naar een maaltijdbox met veel vegetarische of vegan recepten? Wij vergeleken het plantaardige aanbod van alle Belgische maaltijdboxen.',
    uitleg: '',
    uitlegParagraphs: [
      'Niet elke maaltijdbox met "vegetarische opties" is geschikt voor wie echt vegetarisch of vegan eet. Er is een fundamenteel verschil: sommige boxen bieden wekelijks een paar plantaardige recepten naast vlees, andere zijn volledig plantaardig. Die keuze heeft meer impact op je dagelijkse ervaring dan je op het eerste gezicht zou denken.',
      'Ekomenu is de enige aanbieder in België die uitsluitend plantaardig werkt — je hoeft nooit te kiezen of te filteren. Dat maakt het rustiger in gebruik voor wie vegetarisch of vegan eet. De "Groenteteller" helpt je bijhouden of je genoeg groenten binnenkrijgt per week. Lees onze <a href="/aanbieder/ekomenu" style="color:#1B4332;font-weight:600;text-decoration:underline">volledige Ekomenu review</a> voor alle details. Nadeel: bezorging enkel in Vlaanderen en Brussel.',
      'Als je vegetarisch wil eten maar je partner niet, zijn Marley Spoon en HelloFresh interessanter — je kiest elke week zelf welke recepten je wil, ook volledig plantaardige. Je moet dan wel actief filteren per week. Lees onze <a href="/aanbieder/marley-spoon" style="color:#1B4332;font-weight:600;text-decoration:underline">Marley Spoon review</a> voor een overzicht van het vegan aanbod.',
    ],
    icon: '🌱',
    seoTitel: 'Beste Vegetarische Maaltijdbox België 2026 — Bio & Vegan opties',
    seoDesc: 'Welke maaltijdbox heeft de beste vegetarische en vegan opties in België? Vergelijk Ekomenu, Marley Spoon, HelloFresh. Biologisch en duurzaam.',
    faq: [
      { q: 'Welke maaltijdbox is volledig vegetarisch in België?', a: 'Ekomenu is de enige volledig vegetarische en vegane maaltijdbox in België — alle recepten zijn plantaardig en 100% biologisch gecertificeerd. Bij de andere aanbieders zijn er vegetarische opties, maar je moet zelf filteren.' },
      { q: 'Heeft HelloFresh vegan opties in België?', a: 'Ja, HelloFresh biedt wekelijks meerdere vegetarische en vegan recepten aan via de "Veggie" categorie. Maar HelloFresh is niet uitsluitend vegetarisch — je selecteert zelf welke recepten je wil voor die week.' },
      { q: 'Heeft Ekomenu ook vegan opties, of alleen vegetarisch?', a: 'Ekomenu biedt zowel vegetarische als volledig vegan recepten aan. Je kan filteren op vegan, glutenvrij, koolhydraatarm en meer. Alle recepten zijn sowieso 100% biologisch gecertificeerd.' },
      { q: 'Welke maaltijdbox is het beste voor biologisch eten?', a: 'Ekomenu is de enige 100% biologisch gecertificeerde maaltijdbox in België. Alle ingrediënten zijn bio en de verpakking is composteerbaar. Foodbag scoort ook sterk op duurzaamheid met lokale Belgische ingrediënten.' },
      { q: 'Levert Ekomenu ook in Wallonië?', a: 'Nee, Ekomenu bezorgt momenteel enkel in Vlaanderen en Brussel. Woon je in Wallonië en zoek je vegetarische opties? HelloFresh en Foodbag zijn de enige aanbieders met dekking in heel België én vegetarische recepten.' },
    ],
    nietGeschiktAls: [
      'Je partner eet vlees en wil een gemengde selectie — kies dan HelloFresh of Marley Spoon waarbij je per week kiest.',
      'Je woont in Wallonië en wil 100% plantaardig — Ekomenu bezorgt daar momenteel niet.',
      'Je zoekt vegan kant-en-klare maaltijden — dat segment is in België nog beperkt.',
    ],
  },
  budget: {
    titel: 'Goedkoopste maaltijdbox in België',
    h1: 'Goedkoopste maaltijdbox in België 2026 — Beste prijs-kwaliteit',
    intro: 'Wil je een maaltijdbox proberen zonder de bank te breken? Wij vergeleken alle Belgische maaltijdboxen op prijs per portie, bezorgkosten en welkomstkorting.',
    uitleg: '',
    uitlegParagraphs: [
      'De goedkoopste maaltijdbox is niet altijd de beste deal. Factor kost maar €4,99 per portie maar rekent €6 bezorgkosten aan. <a href="/aanbieder/carrefour-simply-you" style="color:#1B4332;font-weight:600;text-decoration:underline">Carrefour Simply You</a> kost €5,38 per portie met gratis bezorging en geen verplicht abonnement — ideaal om te starten zonder engagement.',
      'HelloFresh lijkt duurder, maar met de welkomstkorting van tot €60 is het de eerste weken de meest voordelige keuze. Na de proefperiode stijgt de prijs naar het normale tarief. Bekijk onze <a href="/gids/goedkoopste-maaltijdbox-belgie" style="color:#1B4332;font-weight:600;text-decoration:underline">uitgebreide gids over de goedkoopste maaltijdboxen</a> voor een volledige prijsvergelijking inclusief bezorgkosten.',
    ],
    icon: '💰',
    seoTitel: 'Goedkoopste Maaltijdbox België 2026 — Beste prijs per portie',
    seoDesc: 'Welke maaltijdbox is het goedkoopst in België? Vergelijk Carrefour Simply You, Factor en HelloFresh. Inclusief bezorgkosten en kortingscodes.',
    faq: [
      { q: 'Wat is de goedkoopste maaltijdbox per portie in België?', a: 'Factor is de goedkoopste aan €4,99 per portie, maar rekent €6 bezorgkosten. Carrefour Simply You kost €5,38 per portie met gratis bezorging en geen abonnement. HelloFresh is met welkomstkorting de eerste weken het voordeligst.' },
      { q: 'Welke maaltijdbox heeft geen bezorgkosten?', a: 'HelloFresh, Foodbag, Marley Spoon, Ekomenu, Foodmaker en Carrefour Simply You bieden gratis bezorging. Factor rekent €6 bezorgkosten aan.' },
      { q: 'Kan ik een maaltijdbox eenmalig bestellen zonder abonnement?', a: 'Ja, Foodbag, Carrefour Simply You en Foodmaker laten je eenmalig bestellen zonder abonnement. Geen wekelijkse verplichtingen.' },
      { q: 'Is een maaltijdbox goedkoper dan zelf boodschappen doen?', a: 'Niet altijd. Per portie betaal je meer dan bij de supermarkt, maar je verspilt nauwelijks voedsel omdat alles exact afgemeten wordt geleverd. Reken je weggegooide ingrediënten en impulsaankopen mee, dan valt het werkelijke prijsverschil kleiner uit dan je denkt.' },
      { q: 'Kan ik de welkomstkorting meerdere keren gebruiken?', a: 'Nee, welkomstdeals zijn éénmalig voor nieuwe klanten. Na de proefperiode stijgt de prijs naar het normale tarief. Wil je opnieuw profiteren van een korting? Kijk dan naar een andere aanbieder.' },
    ],
    nietGeschiktAls: [
      'Je al eerder klant was bij die aanbieder — welkomstkorting geldt alleen voor nieuwe klanten.',
      'Je los wil bestellen: abonnementsboxen zijn goedkoper per portie dan eenmalige bestellingen.',
      'Je verwacht elke dag een volledige maaltijd — de kosten lopen dan snel op ten opzichte van de supermarkt.',
    ],
  },
  singles: {
    titel: 'Beste maaltijdbox voor singles',
    h1: 'Beste maaltijdbox voor 1 persoon in België (2026)',
    intro: 'Welke maaltijdbox is het beste voor alleenstaanden? Niet alle aanbieders leveren voor 1 persoon. Wij vergeleken minimum afname, prijs en flexibiliteit voor singles.',
    uitleg: '',
    uitlegParagraphs: [
      'Als alleenstaande stoot je snel op een probleem: de meeste maaltijdboxen leveren minimum voor 2 personen. Je eindigt dan met te veel eten of gooit porties weg — wat het voordeel van een maaltijdbox teniet doet.',
      'HelloFresh is de enige klassieke kookbox die levert voor 1 persoon. Je kiest elke week hoeveel maaltijden je wil en welke recepten, uit een aanbod van 40+. Praktisch en flexibel. Lees onze <a href="/aanbieder/hellofresh" style="color:#1B4332;font-weight:600;text-decoration:underline">volledige HelloFresh review</a> voor alle details.',
      'Factor is een interessant alternatief als je geen zin hebt om te koken: kant-en-klare maaltijden die je enkel opwarmt, besteld per stuk voor 1 persoon. Geen kookbeleving, maar wel maximaal gemak. Carrefour Simply You laat je eenmalig bestellen zonder abonnement — ideaal als je het concept wil uitproberen zonder engagement. Bekijk onze <a href="/gids/beste-maaltijdbox-voor-singles" style="color:#1B4332;font-weight:600;text-decoration:underline">uitgebreide gids voor singles</a>.',
    ],
    icon: '🧑',
    seoTitel: 'Beste Maaltijdbox voor 1 Persoon België 2026 — Singles vergeleken',
    seoDesc: 'Welke maaltijdbox is het beste voor alleenstaanden in België? Vergelijk HelloFresh, Factor en Carrefour Simply You voor 1 persoon. Onze top 3.',
    faq: [
      { q: 'Welke maaltijdbox levert voor 1 persoon in België?', a: 'HelloFresh is de enige grote kookbox die levert voor 1 persoon in België. Factor en Foodmaker leveren ook voor 1 persoon. De meeste andere aanbieders — Marley Spoon, Ekomenu — leveren minimum voor 2 personen.' },
      { q: 'Is een maaltijdbox de moeite voor 1 persoon?', a: 'Ja. Als alleenstaande gooi je bij normale boodschappen makkelijker ingrediënten weg. Een maaltijdbox levert exacte hoeveelheden — geen restjes, geen verspilling. Dat maakt het werkelijke prijsverschil met de supermarkt kleiner dan je denkt.' },
      { q: 'Hoe pauzeer ik een maaltijdbox als ik een week niet thuis ben?', a: 'HelloFresh en Factor laten je leveringen wekelijks overslaan of pauzeren via app of website, doorgaans tot 5 dagen voor de volgende levering. Je zit nergens aan vast.' },
      { q: 'Hoeveel maaltijden per week is realistisch voor 1 persoon?', a: 'De meeste singles starten met 3 maaltijden per week. Dat geeft structuur voor drukke doordeweekse avonden, met vrijheid voor het weekend of spontane afspraken.' },
    ],
    nietGeschiktAls: [
      'Je wil elke avond een andere keuken (Thais, Japans, Indisch) — het aanbod is gevarieerd maar niet onbeperkt specifiek.',
      'Je wil geen vaste levermomenten en volledig spontaan bestellen — de meeste boxen vragen 3–5 dagen op voorhand.',
      'Je bent regelmatig niet thuis — pauzeren kost aandacht en een gemiste week is geld weg.',
    ],
  },
  bio: {
    titel: 'Beste biologische maaltijdbox',
    h1: 'Beste biologische maaltijdbox in België (2026)',
    intro: 'Wil je bewust eten met biologische ingrediënten? Wij vergeleken alle duurzame maaltijdboxen in België op biologische certificering, verpakking en CO2-impact.',
    uitleg: '',
    uitlegParagraphs: [
      'Voor wie biologisch wil eten is <a href="/aanbieder/ekomenu" style="color:#1B4332;font-weight:600;text-decoration:underline">Ekomenu</a> de duidelijke keuze in België. Het is de enige 100% bio gecertificeerde maaltijdbox met composteerbare verpakking en een CO2-footprint tracker per bestelling. Alle recepten zijn volledig plantaardig — ideaal als je tegelijk vegetarisch of vegan wil eten.',
      'Foodbag scoort ook sterk op duurzaamheid dankzij lokale Belgische ingrediënten en eigen bezorgers. Wil je meer weten over het biologische aanbod? Lees onze <a href="/gids/beste-biologische-maaltijdbox-belgie" style="color:#1B4332;font-weight:600;text-decoration:underline">uitgebreide gids over de beste biologische maaltijdboxen</a>.',
    ],
    icon: '🌿',
    seoTitel: 'Beste Biologische Maaltijdbox België 2026 — 100% Bio & Duurzaam',
    seoDesc: 'Welke maaltijdbox gebruikt biologische ingrediënten in België? Vergelijk Ekomenu en Foodbag. Duurzaam, lokaal en lekker eten.',
    faq: [
      { q: 'Welke maaltijdbox is 100% biologisch in België?', a: 'Ekomenu is de enige 100% biologisch gecertificeerde maaltijdbox in België. Alle ingrediënten zijn bio en de verpakking is composteerbaar.' },
      { q: 'Wat is de meest duurzame maaltijdbox in België?', a: 'Ekomenu scoort het hoogst op duurzaamheid (9.5/10) dankzij biologische certificering, composteerbare verpakking en een CO2-footprint tracker. Foodbag scoort ook goed (8.5/10) met lokale Belgische ingrediënten.' },
      { q: 'Is een biologische maaltijdbox duurder?', a: 'Ja, bio maaltijdboxen kosten doorgaans meer. Ekomenu kost v.a. €6,18 per portie tegenover €5,50 voor HelloFresh. De meerprijs weerspiegelt de biologische certificering en milieuvriendelijke verpakking.' },
      { q: 'Is biologisch echt gezonder?', a: 'Biologische producten bevatten geen synthetische pesticiden en worden duurzamer geteeld. Of dit directe gezondheidsvoordelen geeft is wetenschappelijk niet eenduidig, maar voor het milieu en de biodiversiteit maakt het zeker verschil.' },
      { q: 'Leveren biologische maaltijdboxen in heel België?', a: 'Ekomenu levert in Vlaanderen en Brussel, maar niet in Wallonië. Foodbag levert in heel België inclusief Wallonië en is ook een duurzame keuze dankzij lokale ingrediënten, al is het niet 100% bio gecertificeerd.' },
    ],
    nietGeschiktAls: [
      'Je een strak budget hebt — bio maaltijdboxen zijn duurder dan mainstream alternatieven.',
      'Je in Wallonië woont en 100% biologisch wil — Ekomenu bezorgt daar momenteel niet.',
      'Je ook vlees wil eten — Ekomenu is volledig plantaardig, kies dan Foodbag als duurzamer vleesalternatief.',
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(situaties).map(s => ({ situatie: s }));
}

export async function generateMetadata({ params }: { params: Promise<{ situatie: string }> }): Promise<Metadata> {
  const { situatie } = await params;
  const s = situaties[situatie];
  if (!s) return {};
  return {
    title: s.seoTitel,
    description: s.seoDesc,
    alternates: { canonical: `https://www.bestemaaltijdbox.be/voor/${situatie}` },
  };
}

const accentColors: Record<string, string> = {
  hellofresh: '#1B4332', foodbag: '#1E40AF', 'marley-spoon': '#7C3AED',
};

export default async function SituatiePage({ params }: { params: Promise<{ situatie: string }> }) {
  const { situatie } = await params;
  const s = situaties[situatie];
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

      {/* Rankings */}
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--rule)', borderRadius: 10, overflow: 'hidden', fontSize: 12, marginBottom: 14 }}>
              {[
                { val: `€${a.prijsPerPortie.toFixed(2)}`, key: 'Per portie' },
                { val: `${a.receptenPerWeek}+`, key: 'Recepten/week' },
                { val: a.gratisBezorging ? 'Gratis' : `€${a.bezorgkosten}`, key: 'Bezorging' },
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

      {/* Wanneer niet geschikt */}
      <div style={{ background: '#FFF5F4', border: '1px solid var(--red-border)', borderRadius: 12, padding: '16px 20px', marginBottom: 32 }}>
        <div style={{ fontWeight: 700, marginBottom: 10, color: 'var(--red)', fontSize: 14 }}>⚠️ Wanneer is een maaltijdbox minder geschikt?</div>
        <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {s.nietGeschiktAls.map((item, i) => (
            <li key={i} style={{ fontSize: 13, lineHeight: 1.6, color: '#374151' }}>{item}</li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div style={{ marginTop: 40, marginBottom: 40 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid var(--ink)' }}>
          Veelgestelde vragen
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
          {Object.entries(situaties).filter(([key]) => key !== situatie).map(([key, val]) => (
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
