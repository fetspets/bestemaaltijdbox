import type { ContentBlok } from './blokken';

/**
 * Proza-blokken voor gewone artikels, plus het gedeelde blokvocabulaire uit
 * blokken.ts voor uitgewerkte vergelijkingsartikels.
 */
export type BlogContentBlock =
  | ContentBlok
  | { type: 'h2'; text: string }
  // `html` staat inline links en <strong> toe; gebruik het alleen voor eigen tekst.
  | { type: 'p'; text: string; html?: boolean }
  | { type: 'ul'; items: string[] }
  // `slug` bepaalt de bestemming; zonder slug gaat de CTA naar de sponsor.
  | { type: 'cta'; tekst: string; slug?: string }
  // Kortingscode-box met CTA (gesponsorde content). `tekst` = knoplabel.
  | { type: 'codebox'; tekst: string }
  // Berekend prijsvoorbeeld voor de partner (data-driven uit aanbieders.ts).
  | { type: 'prijsvoorbeeld' };

export interface BlogPost {
  slug: string;
  titel: string;
  metaTitle: string;
  metaDescription: string;
  /** Zichtbare publicatiedatum (bv. 'juli 2026'). */
  gepubliceerd: string;
  /** ISO-datum voor JSON-LD datePublished/dateModified (bv. '2026-07-01'). */
  datumISO?: string;
  excerpt: string;
  content: BlogContentBlock[];
  relatedSlugs: string[];
  /** Contextuele links naar andere blogs/pagina's ("Lees ook"). */
  relatedLinks?: Array<{ label: string; href: string }>;
  /** Optionele FAQ; rendert een sectie en levert FAQPage-markup. */
  faq?: Array<{ q: string; a: string }>;
  faqKop?: string;
  /** Artikelspecifieke meta-keywords (overschrijven de generieke set uit layout). */
  keywords?: string[];
  /** Aanwezig bij betaalde/gesponsorde artikels — toont een disclosure en stuurt CTA's via /ga/<gaSlug>. */
  sponsor?: { partner: string; gaSlug: string; code?: string };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'maaltijdbox-zonder-abonnement-belgie',
    titel: 'Maaltijdbox zonder abonnement in België 2026 — welke opties zijn er?',
    metaTitle: 'Maaltijdbox zonder abonnement in België 2026 — opties vergeleken',
    metaDescription: 'Geen abonnement maar toch een maaltijdbox? Bekijk welke Belgische aanbieders leveren zonder vast contract. Vergelijk prijs en bespaar.',
    gepubliceerd: 'juni 2026',
    datumISO: '2026-06-02',
    excerpt: 'Drie Belgische aanbieders leveren zonder verplicht abonnement. We vergelijken ze op prijs, bezorging en welkomstkorting — en leggen uit wie welke optie het best past.',
    content: [
      { type: 'p', html: true, text: 'Wil je een maaltijdbox proberen zonder je vast in te schrijven? Drie Belgische aanbieders leveren zonder verplicht abonnement: <a href="/aanbieder/foodprepper" style="color:#1B4332;font-weight:600">Foodprepper</a> en <a href="/aanbieder/foodmaker" style="color:#1B4332;font-weight:600">Foodmaker</a> vereisen echt geen abonnement — je bestelt wanneer het jou uitkomt, zonder opzegtermijn. <a href="/aanbieder/foodbag" style="color:#1B4332;font-weight:600">Foodbag</a> laat je ook los bestellen zonder wekelijkse verplichting.' },
      { type: 'p', html: true, text: 'Hieronder vergelijken we de drie actieve opties op prijs, bezorging en welkomstkorting — en leggen we uit wie welke optie het best past. <em>Noot: Carrefour Simply You was eerder ook beschikbaar zonder abonnement, maar is stopgezet in 2026.</em>' },
      {
        type: 'winnaar',
        kop: '🏆 Beste maaltijdbox zonder abonnement',
        slug: 'foodbag',
        prijsRegel: 'Los bestellen · gratis bezorging in heel België',
        dealRegel: '3× €20 korting op je eerste 3 bestellingen, automatisch via onze link.',
        knoptekst: 'Bekijk Foodbag →',
        alternatief: {
          inleiding: 'Op zoek naar de laagste prijs? →',
          slug: 'foodprepper',
          label: 'Foodprepper: vanaf €4,75/portie',
        },
      },
      {
        type: 'tabel',
        kop: 'Vergelijking: maaltijdboxen zonder abonnement',
        slugs: ['foodbag', 'foodprepper', 'foodmaker'],
        portiesPerWeek: 6,
        kolommen: [
          {
            kop: 'Abonnement',
            soort: 'tekst',
            waarden: {
              foodbag: 'Los bestellen mogelijk',
              foodprepper: 'Geen abo vereist',
              foodmaker: 'Geen abo vereist',
            },
          },
          { kop: '€/portie', soort: 'portie' },
          { kop: 'Bezorging', soort: 'bezorging' },
          { kop: 'Korting', soort: 'korting' },
        ],
        voetnoot: 'Prijzen zijn richtprijzen — controleer de actuele tarieven op de site van de aanbieder. Kortingen gelden voor nieuwe klanten en worden automatisch toegepast via onze link.',
      },
      {
        type: 'topAanbieders',
        kop: 'De drie opties uitgewerkt',
        items: [
          {
            slug: 'foodbag',
            badge: '🏆 Beste keuze zonder abo',
            badgeAchtergrond: '#DBEAFE',
            badgeTekst: '#1E40AF',
            tagline: 'Lokale Belgische ingrediënten · 5 kookstijlen',
            waarom: 'Foodbag is de #2 maaltijdbox in België, eigendom van de Colruyt Group. Met 100% lokale Belgische ingrediënten, 5 kookstijlen (waaronder Sana van Sandra Bekkari) en gratis bezorging in heel België — inclusief Wallonië — is het de meest complete keuze als je af en toe los wil bestellen. Je hebt geen vast abonnement nodig: je plaatst een bestelling wanneer het jou uitkomt. Via onze link krijg je 3× €20 korting op je eerste 3 bestellingen (in totaal €60 voordeel), automatisch toegepast — geen code nodig.',
            deal: '3× €20 korting op eerste 3 bestellingen',
          },
          {
            slug: 'foodprepper',
            badge: '💰 Goedkoopst zonder abo',
            badgeAchtergrond: '#E8F5EE',
            badgeTekst: '#1B4332',
            tagline: 'Klaar in 15 minuten · geen opzegtermijn',
            waarom: 'Foodprepper is de snelste kookbox van België: alles staat in 15 minuten op tafel dankzij voorgegaarde groenten, gemarineerd vlees en klaargemaakte sauzen. Er is geen verplicht abonnement en geen opzegtermijn — je bestelt eenmalig, wekelijks of tweewekelijks zoals het jou past. Bijna alle ingrediënten komen van Belgische leveranciers. Bezorging is gratis in Vlaanderen en Brussel. Via onze link bespaar je tot €45 op je eerste 3 bestellingen — automatisch toegepast, geen code nodig.',
            deal: '3× €15 korting op eerste 3 bestellingen',
          },
          {
            slug: 'foodmaker',
            badge: '👨‍🍳 Artisanale Belgische kwaliteit',
            badgeAchtergrond: '#FEF3C7',
            badgeTekst: '#92400E',
            tagline: 'Jeroen Meus-recepten · opwarmen, niet koken',
            waarom: 'Foodmaker is een Antwerpse kant-en-klare maaltijdservice met een unieke samenwerking met Jeroen Meus (Dagelijkse Kost). Je warmt de maaltijden op in enkele minuten — koken is niet nodig. Foodmaker heeft geen verplicht abonnement: je bestelt wanneer het jou past. Met 32 gerechten per week, een volledig vegan "Vedge Bags" gamma en gratis bezorging in heel België is het een sterke optie voor wie Belgische kwaliteit wil zonder vast contract. Minimumbestelling €39,90.',
            deal: 'Geen actieve kortingscode — bekijk de welkomstaanbieding op hun site',
          },
        ],
      },
      {
        type: 'scenarios',
        kop: 'Voor wie is welke optie?',
        items: [
          {
            scenario: 'Je wil eenmalig een maaltijdbox proberen',
            aanbeveling: 'Foodprepper',
            slug: 'foodprepper',
            uitleg: 'Geen abonnement, geen opzegtermijn. Tot €45 welkomstkorting, automatisch via onze link. Ideaal om risicovrij te starten.',
            achtergrond: '#F0FDF4',
            rand: '#BBF7D0',
          },
          {
            scenario: 'Drukke avonden — klaar in 15 minuten',
            aanbeveling: 'Foodprepper',
            slug: 'foodprepper',
            uitleg: 'Voorgegaarde groenten, gemarineerd vlees en klaargemaakte sauzen. De snelste kookbox van België, en geen vast wekelijks schema vereist.',
            achtergrond: '#EFF6FF',
            rand: '#BFDBFE',
          },
          {
            scenario: 'Belgische kwaliteit zonder vaste verplichting',
            aanbeveling: 'Foodbag',
            slug: 'foodbag',
            uitleg: 'Lokale ingrediënten, 5 kookstijlen, gratis bezorging in heel België. Los bestellen mogelijk zonder abonnement. €60 korting over eerste 3 bestellingen, automatisch via onze link.',
            achtergrond: '#DBEAFE',
            rand: '#93C5FD',
          },
          {
            scenario: 'Belgische smaak klaar zonder koken',
            aanbeveling: 'Foodmaker',
            slug: 'foodmaker',
            uitleg: 'Jeroen Meus-recepten, vers bereid in Antwerpen, klaar in enkele minuten. Geen abo, gratis bezorging in heel België. Minimumbestelling €39,90.',
            achtergrond: '#FFF7ED',
            rand: '#FED7AA',
          },
        ],
      },
    ],
    faqKop: 'Veelgestelde vragen over maaltijdboxen zonder abonnement',
    faq: [
      { q: 'Welke maaltijdbox heeft geen abonnement?', a: 'Foodprepper en Foodmaker werken volledig zonder verplicht abonnement — je bestelt wanneer het jou uitkomt, zonder wekelijkse verplichting of opzegtermijn. Foodbag laat je ook los bestellen: je kiest zelf wanneer je een box plaatst, zonder je vast in te schrijven op een wekelijks schema.' },
      { q: 'Kan ik een maaltijdbox eenmalig bestellen?', a: 'Ja. Bij Foodprepper en Foodmaker is een eenmalige bestelling standaard mogelijk — geen abonnement, geen opzegtermijn. Ook bij Foodbag kun je los bestellen zonder vast contract. Zo probeer je een maaltijdbox risicovrij, zonder langetermijnverplichting.' },
      { q: 'Wat is de goedkoopste maaltijdbox zonder abonnement?', a: 'Foodprepper is de goedkoopste kookbox zonder abonnement: vanaf €4,75/portie, gratis bezorging in Vlaanderen en Brussel. Nieuwe klanten besparen tot €45 (3× €15 op de eerste 3 bestellingen), automatisch toegepast via onze link. Foodbag kost €9,50/portie maar biedt €60 korting via onze link en bezorgt in heel België inclusief Wallonië.' },
    ],
    relatedSlugs: ['maaltijdbox-maaltijdcheques-belgie', 'maaltijdbox-starten-beginners'],
  },
  {
    slug: 'maaltijdbox-maaltijdcheques-belgie',
    titel: 'Maaltijdbox betalen met maaltijdcheques in België — wie accepteert ze?',
    metaTitle: 'Maaltijdbox betalen met maaltijdcheques in België (2026) — wie accepteert ze?',
    metaDescription: 'Welke maaltijdbox accepteert maaltijdcheques van Monizze, Pluxee of Edenred? Foodbag, HelloFresh en Foodprepper vergeleken. Direct antwoord + beste deal.',
    gepubliceerd: 'juni 2026',
    datumISO: '2026-06-02',
    excerpt: 'Drie maaltijdboxen accepteren elektronische maaltijdcheques van Monizze, Pluxee (Sodexo) en Edenred: Foodbag, HelloFresh en Foodprepper. De andere aanbieders doen dit (nog) niet.',
    content: [
      {
        type: 'tabel',
        kop: 'Welke maaltijdbox accepteert maaltijdcheques?',
        slugs: ['foodbag', 'hellofresh', 'foodprepper', 'marley-spoon', 'factor', 'ekomenu', 'foodmaker', 'crowd-cooks'],
        portiesPerWeek: 6,
        rijMarkering: {
          foodbag: 'positief',
          hellofresh: 'positief',
          foodprepper: 'positief',
          'marley-spoon': 'negatief',
          factor: 'negatief',
          ekomenu: 'negatief',
          foodmaker: 'negatief',
          'crowd-cooks': 'negatief',
        },
        kolommen: [
          {
            kop: 'Maaltijdcheques',
            soort: 'tekst',
            waarden: {
              foodbag: '✅ JA',
              hellofresh: '✅ JA (via omweg)',
              foodprepper: '✅ JA',
              'marley-spoon': '❌ NEE',
              factor: '❌ NEE',
              ekomenu: '❌ NEE',
              foodmaker: '❌ NEE',
              'crowd-cooks': '❌ NEE',
            },
          },
          {
            kop: 'Uitgevers',
            soort: 'tekst',
            waarden: {
              foodbag: 'Monizze, Pluxee (Sodexo), Edenred',
              hellofresh: 'Monizze (via Virtual Visa), Edenred',
              foodprepper: 'Monizze, Pluxee (Sodexo), Edenred',
            },
          },
          {
            kop: 'Beperking',
            soort: 'tekst',
            waarden: {
              foodbag: 'Alleen bij eenmalige bestelling, niet bij abonnement',
              hellofresh: 'Je moet eerst Monizze Virtual Visa activeren in de app',
              foodprepper: 'Alleen bij eenmalige bestelling, niet bij abonnement',
            },
          },
        ],
        voetnoot: 'Uitgevers en beperkingen zijn geverifieerd bij de aanbieders; controleer bij twijfel de betaalmethodes op hun afrekenpagina.',
      },
      {
        type: 'winnaar',
        kop: '⭐ Beste keuze met maaltijdcheques',
        slug: 'foodbag',
        prijsRegel: 'Monizze, Pluxee en Edenred — zonder omweg',
        dealRegel: 'Geen abonnement nodig, dus ideaal om je cheques in één keer te gebruiken.',
        knoptekst: 'Bekijk Foodbag →',
        punten: [
          'Geen abonnement — ideaal voor eenmalige betaling met je cheques',
          'Accepteert Monizze, Pluxee en Edenred',
          'Verse Belgische ingrediënten, bezorging gratis',
        ],
      },
      { type: 'h2', text: 'Foodbag betalen met maaltijdcheques' },
      { type: 'p', text: 'Foodbag is de eenvoudigste keuze: je betaalt gewoon met je Monizze-, Pluxee- of Edenred-kaart bij het afrekenen. Let op: dit werkt alleen bij een eenmalige bestelling. Sla je je bestelling op als abonnement, dan kan je de cheques niet koppelen. Ideaal als je af en toe wil bestellen zonder vast te zitten aan een terugkerend plan.' },
      { type: 'cta', tekst: 'Bestel Foodbag met maaltijdcheques', slug: 'foodbag' },
      { type: 'h2', text: 'HelloFresh betalen met maaltijdcheques' },
      { type: 'p', text: 'HelloFresh werkt samen met Monizze en Edenred, maar vereist een extra stap: activeer de Monizze Virtual Visa-kaart in de Monizze-app en voeg die toe als betaalmethode in je HelloFresh-account. Via Edenred gebruik je de kaartgegevens op de achterkant van je kaart. Eenmaal ingesteld wordt je HelloFresh-abonnement wekelijks afgeschreven van je cheque-saldo.' },
      { type: 'cta', tekst: 'Bekijk HelloFresh', slug: 'hellofresh' },
      { type: 'h2', text: 'Foodprepper betalen met maaltijdcheques' },
      { type: 'p', text: 'Foodprepper accepteert Monizze, Pluxee en Edenred-cheques. Net als bij Foodbag geldt: alleen bij eenmalige bestellingen, niet bij een terugkerend abonnement. Foodprepper levert enkel in Vlaanderen en Brussel en zet een verse maaltijd in 15 minuten op tafel.' },
      { type: 'cta', tekst: 'Bestel Foodprepper', slug: 'foodprepper' },
      {
        type: 'infokaarten',
        kop: 'Hoe betaal je met maaltijdcheques — 3 stappen',
        items: [
          { icon: '1️⃣', titel: 'Kies een aanbieder die maaltijdcheques accepteert', tekst: 'Foodbag, HelloFresh of Foodprepper zijn de enige maaltijdboxen in België die elektronische maaltijdcheques aanvaarden.' },
          { icon: '2️⃣', titel: 'Kies voor een eenmalige bestelling', tekst: 'Bij Foodbag en Foodprepper werkt de betaling met maaltijdcheques uitsluitend bij eenmalige bestellingen. Bij HelloFresh kan je ook met abonnement betalen via de Monizze Virtual Visa-kaart of Edenred.' },
          { icon: '3️⃣', titel: 'Kies je betaalmethode bij het afrekenen', tekst: 'Selecteer je Monizze-, Pluxee- of Edenred-kaart als betaalmethode op de afrekenpagina. Bij HelloFresh via Monizze: voeg eerst de Virtual Visa-kaart toe in je accountinstellingen.' },
        ],
      },
      {
        type: 'notitie',
        kop: '💡 Nieuw in 2026: hoger maximumbedrag',
        achtergrond: '#FEF3C7',
        rand: '#FCD34D',
        regels: [
          { label: 'Maximum per dag:', tekst: 'het maximumbedrag voor maaltijdcheques stijgt naar €10 per dag (was €8). Dat betekent meer koopkracht voor jouw wekelijkse maaltijdbox.' },
          { label: 'Wat dat concreet scheelt:', tekst: 'een gemiddelde Foodbag-bestelling voor 2 personen (3 maaltijden) kost rond €57 — met je maaltijdcheques betaal je een groot deel niet uit eigen zak.' },
        ],
      },
      {
        type: 'slotCta',
        kop: 'Klaar om te bestellen?',
        tekst: 'Foodbag is de eenvoudigste manier om je maaltijdcheques te gebruiken: geen abonnement nodig, en alle drie de uitgevers worden aanvaard bij het afrekenen.',
        slug: 'foodbag',
        knoptekst: 'Bekijk Foodbag →',
        subtekst: 'Monizze · Pluxee · Edenred · gratis bezorging',
      },
    ],
    faqKop: 'Veelgestelde vragen over maaltijdcheques',
    faq: [
      { q: 'Kan ik mijn HelloFresh abonnement betalen met maaltijdcheques?', a: 'Ja, maar niet rechtstreeks. Je moet de Monizze Virtual Visa-kaart activeren in de Monizze-app en toevoegen als betaalmethode bij HelloFresh. Via Edenred gebruik je de kaartgegevens van je Edenred-kaart.' },
      { q: 'Kan ik Foodbag betalen met maaltijdcheques?', a: 'Ja. Foodbag accepteert Monizze, Pluxee (Sodexo) en Edenred. Let op: dit werkt alleen bij eenmalige bestellingen, niet bij een abonnement.' },
      { q: 'Welke maaltijdbox accepteert maaltijdcheques?', a: 'In België zijn Foodbag, HelloFresh en Foodprepper de enige maaltijdboxen die elektronische maaltijdcheques accepteren.' },
      { q: 'Kan ik mijn abonnement betalen met maaltijdcheques?', a: 'Alleen bij HelloFresh via de Monizze Virtual Visa-kaart of Edenred. Bij Foodbag en Foodprepper werken maaltijdcheques enkel bij eenmalige bestellingen.' },
      { q: 'Welke maaltijdcheques worden aanvaard?', a: 'Monizze, Pluxee (vroeger Sodexo) en Edenred (Ticket Restaurant).' },
      { q: 'Hoeveel kan ik per dag betalen met maaltijdcheques?', a: 'Vanaf 2026 is het maximumbedrag €10 per dag per cheque.' },
    ],
    relatedSlugs: ['maaltijdbox-zonder-abonnement-belgie', 'maaltijdbox-of-zelf-koken-belgie'],
  },
  {
    slug: 'maaltijdbox-of-zelf-koken-belgie',
    titel: 'Maaltijdbox of zelf koken in België: wat is goedkoper?',
    metaTitle: 'Maaltijdbox vs. zelf koken in België 2026 — wat is écht goedkoper?',
    metaDescription: 'We rekenden uit of een maaltijdbox écht duurder is dan zelf koken in België. Met supermarktprijzen, verspilling en tijdskost meegerekend.',
    gepubliceerd: 'mei 2026',
    excerpt: 'Veel mensen denken dat een maaltijdbox automatisch duurder is dan zelf koken. Maar als je voedselverspilling, tijdskost en impulsaankopen meerekent, is het plaatje genuanceerder.',
    content: [
      { type: 'p', text: 'Veel mensen denken dat een maaltijdbox automatisch duurder is dan zelf koken. Maar als je voedselverspilling, tijdskost en impulsaankopen meerekent, is het plaatje genuanceerder. We rekenden het uit.' },
      { type: 'h2', text: 'De rekensom: maaltijdbox vs. supermarkt' },
      { type: 'p', text: 'Een doorsnee avondmaaltijd voor 2 personen kost in de Belgische supermarkt gemiddeld €7–10 als je exact de juiste hoeveelheden koopt. Maar in de praktijk koop je een heel pak pasta, een volle bos peterselie en een portie vlees die je misschien niet volledig gebruikt.' },
      { type: 'p', text: 'Maaltijdboxen leveren exacte hoeveelheden. Je gooit niets weg. Dat verschil in verspilling kan oplopen tot €30–60 per maand voor een gezin van 2 à 4 personen.' },
      { type: 'h2', text: 'Wat kost een maaltijdbox per portie in België?' },
      { type: 'ul', items: [
        'HelloFresh: tussen €5 en €9 per portie, afhankelijk van het abonnement',
        'Foodbag: vergelijkbaar, met nadruk op Belgische ingrediënten',
        'Marley Spoon: iets duurder per portie, maar uitgebreidere recepten',
        'Ekomenu: duurste optie vanwege 100% biologische ingrediënten',
      ]},
      { type: 'h2', text: 'Wanneer is zelf koken goedkoper?' },
      { type: 'p', text: 'Als je disciplineerd boodschappen doet, weinig wegooit en in bulk inkoopt, kan zelf koken goedkoper uitkomen. Zeker voor eenvoudige maaltijden zoals pasta, soep of omeletten.' },
      { type: 'ul', items: [
        'Je koopt bewust en gooit weinig weg',
        'Je kookt in bulk en eet restjes de volgende dag',
        'Je gaat voor bastige ingrediënten (rijst, bonen, seizoensgroenten)',
        'Je woont vlakbij een goede markt of discounter',
      ]},
      { type: 'h2', text: 'Wanneer is een maaltijdbox slimmer?' },
      { type: 'p', text: 'Een maaltijdbox loont als je druk bent, regelmatig ingrediënten weggooit of niet weet wat je moet koken. De onzichtbare tijdskost van maaltijdplanning, boodschappenlijstjes maken en twee keer per week naar de winkel rijden is reëel.' },
      { type: 'ul', items: [
        'Je gooit regelmatig verse ingrediënten weg',
        'Je hebt weinig tijd voor boodschappen en planning',
        'Je bestelt regelmatig eten via Deliveroo of Uber Eats (maaltijdbox is goedkoper)',
        'Je wil meer variatie en nieuwe recepten leren',
      ]},
      { type: 'h2', text: 'Conclusie' },
      { type: 'p', text: 'Wie disciplineerd en zuinig boodschappen doet, kan goedkoper uitkomen met zelf koken. Voor de meeste Belgen die druk zijn en regelmatig verspillen, is het verschil in de praktijk kleiner dan gedacht — en soms is de maaltijdbox zelfs goedkoper als je alles meerekent.' },
    ],
    relatedSlugs: ['hellofresh', 'foodbag', 'marley-spoon'],
  },
  {
    slug: 'hoe-maaltijdbox-opzeggen-belgie',
    titel: 'Hoe zeg je een maaltijdbox op in België? (stap voor stap)',
    metaTitle: 'Maaltijdbox opzeggen in België 2026 — stap voor stap uitgelegd',
    metaDescription: 'Hoe zeg je je maaltijdbox op in België? Stap-voor-stap uitleg voor HelloFresh, Foodbag, Marley Spoon en andere aanbieders. Opzeggen in 2 minuten.',
    gepubliceerd: 'mei 2026',
    excerpt: 'Een maaltijdbox opzeggen is bij de meeste aanbieders eenvoudig, maar er zijn deadlines om rekening mee te houden. We leggen het uit per aanbieder.',
    content: [
      { type: 'p', text: 'Een maaltijdbox opzeggen klinkt soms ingewikkelder dan het is. Bij de meeste Belgische aanbieders doe je dit online via je account, zonder telefonisch contact. Maar er zijn deadlines: als je te laat bent, betaal je nog één levering extra.' },
      { type: 'h2', text: 'HelloFresh opzeggen' },
      { type: 'p', text: 'HelloFresh werkt met een wekelijks abonnement dat je op elk moment kan pauzeren of stopzetten.' },
      { type: 'ul', items: [
        'Log in op hellofresh.be → "Mijn account" → "Abonnement"',
        'Klik op "Abonnement pauzeren" of "Abonnement opzeggen"',
        'Deadline: minimaal 5 dagen voor de volgende leverdatum',
        'Je kan ook leveringen overslaan zonder volledig op te zeggen',
      ]},
      { type: 'h2', text: 'Foodbag opzeggen' },
      { type: 'p', text: 'Foodbag vraagt je het abonnement op te zeggen via je online account of via klantenservice.' },
      { type: 'ul', items: [
        'Log in op foodbag.be → "Mijn profiel" → "Abonnement beheren"',
        'Kies "Abonnement stopzetten"',
        'Deadline: 5 werkdagen voor de volgende bezorgdatum',
        'Klantenservice bereikbaar via e-mail en chat',
      ]},
      { type: 'h2', text: 'Marley Spoon opzeggen' },
      { type: 'ul', items: [
        'Log in op marleyspoon.com → "Account" → "Abonnementsinstellingen"',
        'Scroll naar "Abonnement beëindigen"',
        'Deadline: 6 dagen voor levering (iets stricter dan andere aanbieders)',
        'Bevestiging per e-mail ontvangen — bewaar dit',
      ]},
      { type: 'h2', text: 'Ekomenu opzeggen' },
      { type: 'ul', items: [
        'Log in op ekomenu.be → "Mijn account" → "Abonnement"',
        'Kies "Abonnement beëindigen"',
        'Deadline: 4 werkdagen voor de volgende leverdag',
      ]},
      { type: 'h2', text: 'Tip: pauzeren in plaats van opzeggen' },
      { type: 'p', text: 'Ben je op vakantie of wil je even stoppen? Bij HelloFresh, Foodbag en Marley Spoon kan je leveringen wekelijks overslaan zonder het abonnement volledig stop te zetten. Je behoudt dan je eventuele korting en hoeft niet opnieuw in te schrijven.' },
      { type: 'h2', text: 'Wat als je toch te laat bent?' },
      { type: 'p', text: 'Neem direct contact op met de klantenservice via chat of e-mail. In de meeste gevallen is er begrip als je snel reageert, zeker als je een goede reden hebt. Klanten die een abonnement willen stopzetten krijgen soms ook een retentieaanbieding.' },
    ],
    relatedSlugs: ['hellofresh', 'foodbag', 'marley-spoon', 'ekomenu', 'factor', 'foodprepper'],
  },
  {
    slug: 'vegetarisch-koken-maaltijdbox',
    titel: 'Vegetarisch koken met een maaltijdbox: onze ervaring',
    metaTitle: 'Vegetarische maaltijdbox in België 2026 — getest en vergeleken',
    metaDescription: 'Welke maaltijdbox is het sterkst voor vegetariërs? We testten HelloFresh, Ekomenu en Foodbag op aanbod, smaak en variatie. Lees onze eerlijke uitkomst.',
    gepubliceerd: 'mei 2026',
    excerpt: 'We testten 3 Belgische maaltijdboxen specifiek op hun vegetarisch aanbod: hoe groot is de keuze, hoe smaken de recepten en welke aanbieder biedt de meeste variatie?',
    content: [
      { type: 'p', text: 'We testten 3 Belgische maaltijdboxen specifiek op hun vegetarisch aanbod. Want "we hebben ook vegetarische opties" kan van alles betekenen: van 2 recepten per week tot een volledig vegetarisch abonnement.' },
      { type: 'h2', text: 'HelloFresh: brede keuze, ook voor flexitariërs' },
      { type: 'p', text: 'HelloFresh heeft wekelijks 8–12 vegetarische recepten in zijn aanbod van 40+. Je filtert eenvoudig op "Veggie" in de receptkiezer. Het aanbod varieert van snelle pastagerechten tot uitgebreidere recepten met peulvruchten en seizoensgroenten.' },
      { type: 'ul', items: [
        'Wekelijks 8–12 vegetarische recepten',
        'Filter "Veggie" beschikbaar in receptkiezer',
        'Geen volledig vegetarisch abonnement — je kiest per week',
        'Geschikt voor flexitariërs die vlees willen verminderen',
      ]},
      { type: 'h2', text: 'Ekomenu: biologisch vegetarisch' },
      { type: 'p', text: 'Ekomenu heeft een specifiek vegetarisch abonnement waarbij alle recepten plantaardig zijn. Bovendien zijn alle ingrediënten biologisch gecertificeerd. Het ideale pakket voor wie bewust én vegetarisch wil eten.' },
      { type: 'ul', items: [
        'Volledig vegetarisch abonnement beschikbaar',
        'Alle ingrediënten biologisch gecertificeerd',
        '20–25 recepten per week, merendeels vegetarisch',
        'CO2-footprint tracker per bestelling',
        'Enkel beschikbaar in Vlaanderen en Brussel',
      ]},
      { type: 'h2', text: 'Foodbag: Belgische klassiekers, ook vegetarisch' },
      { type: 'p', text: 'Foodbag heeft vegetarische recepten verspreid over zijn 5 kookstijlen. Het aanbod is kleiner dan bij HelloFresh, maar de kwaliteit van de Belgische ingrediënten is merkbaar. Denk aan gegratineerde groenten, streekkaas en seizoensgroenten van lokale boeren.' },
      { type: 'h2', text: 'Onze conclusie' },
      { type: 'p', text: 'Voor volledig vegetarisch eten is Ekomenu de beste keuze in België. Wie flexibel wil zijn (soms vlees, soms niet) kiest het best voor HelloFresh vanwege de grote keuze. Foodbag is interessant als lokale herkomst voor jou primeert.' },
    ],
    relatedSlugs: ['hellofresh', 'ekomenu', 'foodbag'],
  },
  {
    slug: 'maaltijdbox-starten-beginners',
    titel: 'Maaltijdbox starten: alles wat je moet weten als beginner',
    metaTitle: 'Eerste maaltijdbox bestellen in België — beginnersgids 2026',
    metaDescription: 'Nog nooit een maaltijdbox besteld? Zo werkt het, dit kost het en dit zijn de valkuilen voor je eerste levering. Met aanrader voor beginners.',
    gepubliceerd: 'mei 2026',
    excerpt: 'Nog nooit een maaltijdbox besteld? We leggen uit hoe het werkt, wat je kan verwachten bij de eerste levering en waar je op moet letten bij de keuze van een aanbieder.',
    content: [
      { type: 'p', text: 'Nog nooit een maaltijdbox besteld? Je bent niet alleen. Veel mensen vragen zich af hoe het precies werkt, wat er in zo\'n doos zit en of het de moeite waard is. We leggen het stap voor stap uit.' },
      { type: 'h2', text: 'Hoe werkt een maaltijdbox?' },
      { type: 'p', text: 'Je schrijft je in bij een aanbieder via hun website, kiest hoeveel personen en hoeveel maaltijden per week je wil, en selecteert je recepten. Elke week wordt een gekoelde doos bezorgd met alle ingrediënten in de juiste hoeveelheden, samen met een receptkaartje.' },
      { type: 'ul', items: [
        'Inschrijven via de website van de aanbieder',
        'Keuze maken: aantal personen (1–6), aantal maaltijden per week (2–5)',
        'Recepten kiezen uit het wekelijkse aanbod',
        'Doos wordt bezorgd op een vast moment in de week',
        'Ingrediënten zijn gekoeld verpakt, houdbaar tot 3–5 dagen na levering',
      ]},
      { type: 'h2', text: 'Wat zit er in de doos?' },
      { type: 'p', text: 'Elke maaltijdbox bevat de exacte hoeveelheden voor de gekozen recepten: het vlees, de groenten, de sauzen en de kruiden — allemaal afgemeten. Het enige wat je zelf nodig hebt is olie, zout, peper en een paar basisbenodigdheden zoals een pan en een pot.' },
      { type: 'h2', text: 'Hoeveel kost een maaltijdbox?' },
      { type: 'p', text: 'De prijs per portie varieert per aanbieder en abonnement. HelloFresh is een van de meest betaalbare opties voor nieuwe klanten dankzij welkomstkoningen. Foodbag en Marley Spoon zitten iets hoger. Ekomenu is het duurst vanwege de biologische ingrediënten.' },
      { type: 'ul', items: [
        'HelloFresh: voordelig voor nieuwe klanten met welkomstkorting',
        'Foodbag: Belgische ingrediënten, gratis bezorging in heel België',
        'Marley Spoon: uitgebreidere recepten, Vlaanderen en Brussel',
        'Ekomenu: biologisch, beschikbaar in Vlaanderen en Brussel',
      ]},
      { type: 'h2', text: 'Welke aanbieder is het best als beginner?' },
      { type: 'p', text: 'Als beginner raden we HelloFresh aan. De recepten zijn toegankelijk, de welkomstkorting maakt het goedkoop om te proberen, en je kan elke week overslaan of stoppen. Als je bewust lokaal wil eten, is Foodbag een goede tweede keuze.' },
      { type: 'h2', text: 'Tips voor je eerste bestelling' },
      { type: 'ul', items: [
        'Kies recepten van 20–30 minuten voor je eerste week — zo start je relaxed',
        'Let op de leverdag: controleer of je thuis bent of een veilige plek hebt',
        'Stel een herinnering in om de volgende week op tijd te pauzeren als je het niet wil',
        'Bewaar de receptkaartjes — veel mensen koken die nadien ook zonder box na',
        'Bekijk de welkomstkorting voor nieuwe klanten: meestal gespreid over meerdere boxen',
      ]},
    ],
    relatedSlugs: ['hellofresh', 'foodbag', 'marley-spoon'],
  },
  {
    slug: 'factor-review-belgie',
    titel: 'Factor review België 2026: kant-en-klaar zonder koken getest',
    metaTitle: 'Factor review België 2026 — kant-en-klaar zonder koken (eerlijke test)',
    metaDescription: 'Onze eerlijke Factor review: kant-en-klare chef-maaltijden zonder koken. Prijs, smaak, de vijf dieetstijlen en voor wie het écht past. Score 7,8/10.',
    gepubliceerd: 'juli 2026',
    excerpt: 'Factor levert kant-en-klare chef-maaltijden die je in 2-3 minuten opwarmt — geen koken. We testten prijs, smaak, de vijf dieetstijlen en voor wie het de moeite is.',
    sponsor: { partner: 'Factor', gaSlug: 'factor' },
    content: [
      { type: 'p', text: 'Factor is geen klassieke maaltijdbox waar je zelf kookt, maar een kant-en-klare maaltijdservice van de HelloFresh Group. De maaltijden worden vers bereid geleverd en zijn klaar in 2 tot 3 minuten in de magnetron. We bekeken wat je krijgt, wat het kost en voor wie het de moeite is.' },
      { type: 'codebox', tekst: 'Bekijk de maaltijden van deze week' },
      { type: 'h2', text: 'Wat is Factor precies?' },
      { type: 'p', text: 'Factor bezorgt wekelijks kant-en-klare gerechten in heel België, op zondag of maandag. Je kiest uit 18 maaltijden per week, verdeeld over vijf dieetstijlen — waaronder High-Protein, Calorie-Conscious en Chef\'s Choice. Je hoeft niet te snijden, bakken of afwassen: opwarmen en eten.' },
      { type: 'ul', items: [
        '18 gerechten per week om uit te kiezen',
        '5 dieetstijlen, incl. High-Protein en Calorie-Conscious',
        'Klaar in 2–3 minuten in de magnetron',
        'Bezorging in heel België op zondag of maandag',
        'Van de HelloFresh Group',
      ]},
      { type: 'h2', text: 'Hoe werkt bestellen?' },
      { type: 'p', text: 'Je stelt je week samen op factormeals.be, kiest je maaltijden en je bezorgdag. Het abonnement is flexibel: wekelijks aanpassen, pauzeren of opzeggen kan. De bezorgkosten bedragen €5,99 per levering — tel die altijd mee in je werkelijke prijs per maaltijd.' },
      { type: 'h2', text: 'Smaak en kwaliteit' },
      { type: 'p', text: 'Voor een maaltijd die je enkel opwarmt, is de smaak verrassend goed. In onze beoordeling scoort Factor 7,8/10. Gebruikers waarderen vooral de vijf dieetstijlen: sporters kiezen High-Protein, wie op zijn gewicht let gaat voor Calorie-Conscious. De porties zijn afgemeten op voedingswaarde, niet op maximale hoeveelheid — hou daar rekening mee als je een grote eter bent.' },
      { type: 'h2', text: 'Wat kost Factor echt?' },
      { type: 'p', text: 'De instapprijs ligt op €4,99 per portie — een van de laagste van de markt. Maar reken de €5,99 bezorgkosten per levering mee: die komen bovenop de portieprijs, ongeacht hoeveel maaltijden je bestelt. Voor nieuwe klanten geldt de welkomstkorting: 40% korting op je eerste box en 25% op de volgende vijf.' },
      { type: 'prijsvoorbeeld' },
      { type: 'codebox', tekst: 'Claim je 40% welkomstkorting' },
      { type: 'h2', text: 'Voor wie is Factor geschikt?' },
      { type: 'p', text: 'Factor is op zijn sterkst voor drukke professionals, sporters en iedereen die gezond wil eten zonder kooktijd. Wie thuiskomt en meteen wil eten, zonder boodschappen of afwas, zit hier goed.' },
      { type: 'ul', items: [
        'Wel: druk schema, weinig zin of tijd om te koken',
        'Wel: sporters en caloriebewuste eters (dankzij de dieetstijlen)',
        'Minder: wie het kookproces zelf als ontspanning ziet',
        'Minder: wie de laagste totaalprijs zoekt (tel de bezorgkost mee)',
      ]},
      { type: 'h2', text: 'Factor versus een kookbox' },
      { type: 'p', text: 'Het grote verschil met HelloFresh of Foodbag is dat je bij Factor niet kookt. Dat spaart tijd, maar je levert de kookbeleving en een deel van de versheid van zelf bereiden in. Zoek je een Belgisch kant-en-klaar-alternatief met lagere bezorgkosten, dan is Crowd Cooks (€4,90 bezorging) het overwegen waard. Wil je de grootste keuze en uitgesproken dieetstijlen, dan trekt Factor aan het langste eind.' },
      { type: 'h2', text: 'Ons oordeel' },
      { type: 'p', text: 'Factor is een sterke keuze in het kant-en-klaar-segment: veel keuze, duidelijke dieetstijlen en bezorging in heel België. De bezorgkosten en de beperktere kookbeleving zijn de voornaamste minpunten. Voor wie tijd de grootste schaarste is, weegt het gemak ruimschoots op.' },
      { type: 'codebox', tekst: 'Start met Factor — 40% korting op je eerste box' },
    ],
    relatedSlugs: ['factor', 'crowd-cooks', 'foodmaker'],
    relatedLinks: [
      { label: 'Kant-en-klare maaltijden zonder koken: hoe werkt het en wat kost het?', href: '/blog/kant-en-klare-maaltijden-zonder-koken-belgie' },
      { label: 'Gezond eten zonder tijd: high-protein maaltijden aan huis', href: '/blog/gezond-eten-zonder-tijd-belgie' },
      { label: 'Factor vs HelloFresh: opwarmen of zelf koken?', href: '/vergelijk/factor-vs-hellofresh' },
    ],
    keywords: ['factor review', 'factor belgië', 'factor ervaringen', 'factor meals review', 'kant-en-klaar zonder koken'],
    datumISO: '2026-07-01',
  },
  {
    slug: 'kant-en-klare-maaltijden-zonder-koken-belgie',
    titel: 'Kant-en-klare maaltijden zonder koken in België: hoe werkt het en wat kost het?',
    metaTitle: 'Kant-en-klare maaltijden zonder koken in België (2026) — gids & prijzen',
    metaDescription: 'Maaltijden zonder koken, thuisbezorgd: hoe werkt het, wat kost het en welke aanbieders zijn er in België? Factor, Crowd Cooks en Foodmaker vergeleken.',
    gepubliceerd: 'juli 2026',
    excerpt: 'Geen tijd of zin om te koken? Kant-en-klare maaltijdservices bezorgen verse gerechten die je enkel opwarmt. We leggen uit hoe het werkt, wat het kost en welke aanbieders er in België zijn.',
    sponsor: { partner: 'Factor', gaSlug: 'factor' },
    content: [
      { type: 'p', text: 'Een maaltijdbox waar je zelf kookt is niet voor iedereen weggelegd. Wie thuiskomt en meteen wil eten — zonder snijden, bakken of afwassen — heeft meer aan een kant-en-klare maaltijdservice. Die bezorgt verse gerechten die je enkel opwarmt. We leggen uit hoe het werkt, wat het kost en welke aanbieders er in België zijn.' },
      { type: 'codebox', tekst: 'Bekijk het weekmenu van Factor' },
      { type: 'h2', text: 'Wat is een kant-en-klare maaltijdservice?' },
      { type: 'p', text: 'Anders dan bij een klassieke kookbox (HelloFresh, Foodbag) krijg je geen losse ingrediënten en een recept, maar een volledig bereide maaltijd. Die is gekoeld verpakt en enkele dagen houdbaar. Opwarmen in de magnetron of oven duurt een paar minuten. Je bespaart alle kooktijd, maar levert de kookbeleving in.' },
      { type: 'h2', text: 'Hoe werkt het?' },
      { type: 'ul', items: [
        'Je kiest wekelijks je maaltijden via de website',
        'De gerechten worden gekoeld thuisbezorgd, meestal in het weekend of begin van de week',
        'Ze zijn enkele dagen houdbaar in de koelkast',
        'Opwarmen in 2–5 minuten en klaar',
        'De meeste diensten werken met een flexibel abonnement dat je kan pauzeren',
      ]},
      { type: 'h2', text: 'Welke aanbieders zijn er in België?' },
      { type: 'p', text: 'Drie diensten springen eruit, elk met een eigen accent:' },
      { type: 'ul', items: [
        'Factor (van de HelloFresh Group): 18 gerechten per week in vijf dieetstijlen (o.a. High-Protein, Calorie-Conscious), bezorging in heel België. Bezorgkosten €5,99.',
        'Crowd Cooks: Belgische service met royale porties van 450+ gram en lagere bezorgkosten (€4,90). Elke week 12 nieuwe gerechten.',
        'Foodmaker: artisanale kwaliteit met de Jeroen Meus-lijn en gratis bezorging in heel België.',
      ]},
      { type: 'h2', text: 'Wat kost het?' },
      { type: 'p', text: 'De prijs per portie ligt in de premium-klasse die eigen is aan kant-en-klaar. Factor start het laagst met €4,99 per portie, maar rekent €5,99 bezorgkosten per levering. Crowd Cooks ligt hoger per portie maar rekent minder bezorgkost (€4,90). Foodmaker bezorgt gratis maar heeft een minimumbestelbedrag. Reken altijd de totaalprijs uit: portieprijs × aantal maaltijden + bezorgkost.' },
      { type: 'prijsvoorbeeld' },
      { type: 'codebox', tekst: 'Claim je 40% welkomstkorting' },
      { type: 'h2', text: 'Voor wie is het geschikt?' },
      { type: 'p', text: 'Kant-en-klaar loont voor drukke professionals, tweeverdieners, singles en iedereen die weinig kooktijd heeft maar toch gevarieerd en warm wil eten. Het is een verse tussenvorm tussen zelf koken en afhalen. Minder geschikt voor wie van koken houdt of de laagste prijs zoekt.' },
      { type: 'h2', text: 'Welke kiezen?' },
      { type: 'p', text: 'Zoek je de grootste keuze en uitgesproken dieetstijlen (high-protein, caloriebewust)? Dan is Factor de sterkste optie, met bezorging in heel België. Wil je bewust Belgisch eten met royale porties en lagere bezorgkosten? Dan is Crowd Cooks interessant. Voor de Jeroen Meus-recepten kies je Foodmaker.' },
      { type: 'codebox', tekst: 'Probeer Factor — 40% korting op je eerste box' },
    ],
    relatedSlugs: ['factor', 'crowd-cooks', 'foodmaker'],
    relatedLinks: [
      { label: 'Factor review: kant-en-klaar zonder koken getest', href: '/blog/factor-review-belgie' },
      { label: 'Gezond eten zonder tijd: high-protein maaltijden aan huis', href: '/blog/gezond-eten-zonder-tijd-belgie' },
      { label: 'Factor vs Foodbag: kant-en-klaar of Belgisch koken?', href: '/vergelijk/factor-vs-foodbag' },
    ],
    keywords: ['kant-en-klare maaltijden', 'maaltijden zonder koken', 'warme maaltijden bezorgd belgië', 'geen tijd om te koken', 'factor'],
    datumISO: '2026-07-01',
  },
  {
    slug: 'gezond-eten-zonder-tijd-belgie',
    titel: 'Gezond eten zonder tijd: high-protein en caloriebewuste maaltijden aan huis',
    metaTitle: 'Gezond eten zonder tijd (2026) — high-protein maaltijden aan huis in België',
    metaDescription: 'Gezond eten met een druk schema? High-protein en caloriebewuste kant-en-klare maaltijden, thuisbezorgd. Hoe het werkt en waar je op moet letten.',
    gepubliceerd: 'juli 2026',
    excerpt: 'Gezond eten sneuvelt vaak door tijdsgebrek. Kant-en-klare maaltijden met vaste macro\'s — high-protein of caloriebewust — maken het makkelijker om vol te houden. We leggen uit hoe en waar op te letten.',
    sponsor: { partner: 'Factor', gaSlug: 'factor' },
    content: [
      { type: 'p', text: 'Gezond willen eten en er de tijd voor hebben zijn twee verschillende dingen. Na een lange werkdag valt de discipline vaak weg en wordt het toch afhalen. Kant-en-klare maaltijden met vaste voedingswaarden — high-protein of caloriebewust — maken het makkelijker om een gezond eetpatroon vol te houden, zonder te koken.' },
      { type: 'codebox', tekst: 'Bekijk de high-protein maaltijden' },
      { type: 'h2', text: 'Waarom tijdsgebrek gezond eten saboteert' },
      { type: 'p', text: 'Gezond koken vraagt planning: boodschappen, recepten, bereidingstijd en afwas. Wie een druk schema heeft, valt op drukke avonden terug op snelle, minder gezonde keuzes. Een maaltijd die al klaar is en waarvan de voedingswaarde vastligt, neemt die drempel weg.' },
      { type: 'h2', text: 'Wat maakt een maaltijd "gezond"?' },
      { type: 'ul', items: [
        'Voldoende eiwitten (belangrijk voor verzadiging en spierbehoud)',
        'Een gecontroleerde hoeveelheid calorieën als je op je gewicht let',
        'Genoeg groenten en vezels',
        'Beperkt toegevoegde suikers en verzadigd vet',
      ]},
      { type: 'p', text: 'Bij kant-en-klare diensten staan die waarden per gerecht vermeld, wat het makkelijk maakt om te kiezen op basis van je doel.' },
      { type: 'h2', text: 'High-protein en caloriebewuste opties' },
      { type: 'p', text: 'Factor werkt met vijf dieetstijlen, waaronder High-Protein (extra eiwitten, populair bij sporters) en Calorie-Conscious (een gecontroleerd caloriegehalte). Je kiest per week welke stijl bij je doel past — bijvoorbeeld high-protein tijdens een trainingsblok, caloriebewust als je wat wil afvallen. De maaltijden zijn klaar in 2–3 minuten.' },
      { type: 'codebox', tekst: 'Bekijk de dieetstijlen van Factor' },
      { type: 'h2', text: 'Praktisch inpassen in een drukke week' },
      { type: 'ul', items: [
        'Kies vooraf je maaltijden voor de drukste avonden van de week',
        'Combineer met zelf koken op rustigere dagen — het hoeft geen alles-of-niets te zijn',
        'Gebruik de vermelde macro\'s om te kiezen op je doel (afvallen, spieropbouw, onderhoud)',
        'Hou rekening met de porties: caloriebewuste gerechten zijn bewust afgemeten',
      ]},
      { type: 'h2', text: 'Eerlijke kanttekeningen' },
      { type: 'p', text: 'Kant-en-klaar is niet gratis en niet perfect. Tel de bezorgkosten mee (bij Factor €5,99 per levering), hou er rekening mee dat je de kookbeleving mist, en dat er meer verpakking bij komt kijken dan bij zelf koken. Voor wie tijd de grootste schaarste is, wegen die nadelen doorgaans niet op tegen het gemak van elke dag een gezonde maaltijd klaar hebben.' },
      { type: 'prijsvoorbeeld' },
      { type: 'h2', text: 'Conclusie' },
      { type: 'p', text: 'Gezond eten met een druk schema wordt een stuk haalbaarder met kant-en-klare maaltijden waarvan de voedingswaarde vastligt. Factor is daarvoor een sterke keuze dankzij de high-protein en caloriebewuste stijlen en de bezorging in heel België. Begin met de drukste avonden en bouw van daaruit verder.' },
      { type: 'codebox', tekst: 'Start gezond met Factor — 40% korting' },
    ],
    relatedSlugs: ['factor', 'foodmaker', 'crowd-cooks'],
    relatedLinks: [
      { label: 'Factor review: kant-en-klaar zonder koken getest', href: '/blog/factor-review-belgie' },
      { label: 'Kant-en-klare maaltijden zonder koken: hoe werkt het?', href: '/blog/kant-en-klare-maaltijden-zonder-koken-belgie' },
      { label: 'Factor vs Marley Spoon: opwarmen of chef-recepten koken?', href: '/vergelijk/factor-vs-marley-spoon' },
    ],
    keywords: ['gezonde kant-en-klare maaltijden', 'high protein maaltijden bezorgd', 'caloriearme maaltijden aan huis', 'meal prep zonder koken', 'factor'],
    datumISO: '2026-07-01',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function generateBlogStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}
