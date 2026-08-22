export interface KortingsCode {
  code: string | null;
  /** Loopt in een zin mee, bv. `Activeer ${bedrag} →`. */
  bedrag: string;
  /** Compacte weergave voor de badge op /kortingscodes, bv. 'tot €60'. */
  bedragKort: string;
  /** Eenregelige samenvatting van de aanbieding. */
  deal: string;
  /** Kleine lettertjes: geldigheid en beperkingen. */
  voorwaarden: string;
  beschrijving: string;
}

export interface Aanbieder {
  slug: string;
  naam: string;
  logo: string;
  /** Merkkleur voor accenten en CTA-knoppen. */
  merkKleur: string;
  tagline: string;
  beschrijving: string;
  uitgebreideReview: {
    intro: string;
    testervaring: string;
    voorWie: string;
    hoeWerktHet: string;
    vergelijking: string;
    eindoordeel: string;
    prijsTabel?: { box: string; normaal: string; korting: string; betaal: string; besparing: string }[];
    prijsUitleg?: string;
    nietGeschiktVoor?: string[];
    faq?: { vraag: string; antwoord: string }[];
  };
  ranking: number;
  /** Beschikbaarheid van de box. Alleen 'active' verschijnt in ranglijsten, tabellen en tellingen. */
  status: 'active' | 'discontinued' | 'temporarily_unavailable';
  /** Optionele toelichting bij een niet-actieve status (bv. stopgezet-melding). */
  statusNotitie?: string;
  score: {
    /**
     * Redactioneel eindoordeel — bewust GEEN gemiddelde van de subscores
     * hieronder. Niet "corrigeren" door te middelen; dit cijfer gaat als
     * ratingValue mee in de Review-markup en is een eigen beoordeling.
     */
    totaal: number;
    smaak: number;
    prijsKwaliteit: number;
    flexibiliteit: number;
    duurzaamheid: number;
    gemak: number;
  };
  prijsPerPortie: number;
  prijsPerPortieLabel?: string;
  prijsPopulaireBox: number;
  receptenPerWeek: number;
  gratisBezorging: boolean;
  bezorgkosten?: number;
  minPersonen: number;
  maxPersonen: number;
  opzegTermijn: string;
  belgisch: boolean;
  vegetarisch: boolean;
  bio: boolean;
  affiliateUrl: string;
  /**
   * Alternatieve affiliate-links voor losse campagnes van dezelfde partner.
   * Aanroepbaar via `/ga/<slug>?c=<sleutel>`; zonder `c` geldt affiliateUrl.
   */
  affiliateCampagnes?: Record<string, string>;
  ctaUrl?: string;
  kortingsCode?: KortingsCode;
  ctaSubtekst?: string;
  ctaTekst?: string;
  ctaTekst2?: string;
  kenmerken: string[];
  pros: string[];
  cons: string[];
  geschiktVoor: string[];
  losBestellenMogelijk: boolean;
  leverdag: boolean;
  tijdstip: boolean;
  besteVoor: string;
  minMaaltijdenPerWeek: number;
  badge?: { label: string; bg: string; color: string };
  seoTitle?: string;
  seoDescription?: string;
}

export const aanbieders: Aanbieder[] = [
  {
    slug: 'hellofresh',
    naam: 'HelloFresh',
    logo: '/logos/hellofresh.png',
    merkKleur: '#1B4332',
    tagline: 'Marktleider in België — sterkste prijs-kwaliteitverhouding',
    beschrijving: 'HelloFresh is een van de populairste maaltijdboxen in België en wereldwijd. Met meer dan 40 recepten per week, gratis bezorging en een flexibel abonnement biedt het een uitstekende balans tussen prijs, keuze en gemak.',
    uitgebreideReview: {
      intro: 'HelloFresh is een van de populairste maaltijdboxen in België en dat is niet zonder reden. Uit ons uitgebreid onderzoek en brede gebruikerservaringen blijkt dat weinig andere boxen dezelfde balans bieden tussen prijs, variatie en gebruiksgemak. Of je nu kookt voor 2 of voor een heel gezin — HelloFresh past zich aan.',
      testervaring: 'Op basis van uitgebreide gebruikerservaringen scoort HelloFresh consistent goed op bezorging: gekoeld, goed verpakt en op tijd. De receptkaarten zijn helder met stap-voor-stap instructies en foto\'s. Bereidingstijd ligt tussen 25 en 40 minuten. Gebruikers benadrukken de variatie als grote troef: van Thaise curry tot Belgische waterzooi, van pasta tot wokgerechten — het aanbod is breed en gevarieerd. Klantenservice wordt positief beoordeeld: problemen worden snel opgelost. Terugkerend punt in reviews: er zit wat meer plasticverpakking in dan bij lokale alternatieven.',
      voorWie: 'HelloFresh is een sterke keuze voor koppels, gezinnen en singles die weinig tijd hebben maar toch gevarieerd willen eten. Dankzij de grote receptvariatie (40+) vinden ook kieskeurige eters altijd iets naar hun smaak. Minder geschikt voor wie bewust lokaal of biologisch wil kopen.',
      hoeWerktHet: 'Je stelt je box samen op hellofresh.be: kies het aantal personen (1-6) en het aantal maaltijden per week (3-5). Je kiest dan elke week zelf welke recepten je wil uit het aanbod van 40+. Bezorging is gratis en je kan kiezen uit meerdere bezorgdagen. Pauzeren of opzeggen kan tot 5 dagen voor je volgende levering.',
      vergelijking: 'Ten opzichte van Foodbag is HelloFresh voordeliger maar gebruikt het minder lokale Belgische ingrediënten. Marley Spoon is vergelijkbaar in prijs maar biedt meer chef-recepten. Voor pure budgetvriendelijkheid wint HelloFresh met korting altijd.',
      eindoordeel: 'HelloFresh verdient zijn #1 positie. De combinatie van prijs, variatie en gemak is moeilijk te evenaren in België. Zeker met de regelmatige welkomstaanbiedingen voor nieuwe klanten is het zeker de moeite waard om te proberen.',
    },
    ranking: 1,
    status: 'active',
    score: { totaal: 8.4, smaak: 8.2, prijsKwaliteit: 8.5, flexibiliteit: 9.0, duurzaamheid: 6.8, gemak: 9.0 },
    prijsPerPortie: 7.99,
    prijsPopulaireBox: 47.99,
    receptenPerWeek: 40,
    gratisBezorging: true,
    minPersonen: 1,
    maxPersonen: 6,
    opzegTermijn: '5 dagen op voorhand',
    belgisch: false,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://hellofreshfr.sjv.io/c/3156055/3896977/45302',
    kortingsCode: {
      code: null,
      bedrag: 'tot €60 korting',
      bedragKort: 'tot €60',
      deal: 'tot €60 korting op je eerste 3 boxen',
      voorwaarden: 'Exclusief voor nieuwe klanten · korting over je eerste 3 boxen · automatisch via link · wekelijks opzegbaar',
      beschrijving: 'Nieuwe klanten krijgen tot €60 korting verdeeld over hun eerste 3 boxen. Korting wordt automatisch toegepast via onze link — geen code nodig.',
    },
    ctaSubtekst: 'tot €60 korting op je eerste 3 boxen — automatisch via onze link',
    kenmerken: ['✓ Gratis bezorging', '✓ Direct opzegbaar', '✓ 40+ recepten/week', '✓ Tot €60 welkomstkorting'],
    pros: ['Grootste receptvariatie (40+ per week)', 'Gratis bezorging in heel België', 'Flexibel pauzeren en opzeggen', 'Gebruiksvriendelijke app', 'Sterke welkomstdeal: tot €60 korting voor nieuwe klanten'],
    cons: ['Niet 100% Belgische ingrediënten', 'Meer plasticverpakking dan lokale alternatieven', 'Standaardprijs hoger na korting'],
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch', 'singles', 'budget'],
    losBestellenMogelijk: false,
    leverdag: true,
    tijdstip: true,
    besteVoor: 'Variatie & prijs',
    minMaaltijdenPerWeek: 3,
    badge: { label: '⭐ Beste keuze', bg: '#E8F5EE', color: '#1B4332' },
  },
  {
    slug: 'foodbag',
    naam: 'Foodbag',
    logo: '/logos/foodbag.png',
    merkKleur: '#1E40AF',
    tagline: 'Belgische maaltijdbox met lokale ingrediënten en 5 kookstijlen',
    beschrijving: 'Foodbag is een Belgische maaltijdbox met focus op lokale ingrediënten en korte keten. Met verse ingrediënten van lokale Belgische boeren, 20+ recepten per week en eigen bezorgers is het een sterke keuze voor wie bewust lokaal wil eten. Eigendom van Colruyt Group.',
    uitgebreideReview: {
      intro: 'Foodbag is het paradepaardje van de Belgische maaltijdboxmarkt. Inmiddels onderdeel van de Colruyt Group, heeft Foodbag zich gepositioneerd als de premium Belgische keuze. De ingrediënten zijn merkbaar verser en lokaler dan bij internationale concurrenten.',
      testervaring: 'Gebruikerservaringen bevestigen wat publieke data al toont: de Foodbag-ingrediënten zijn merkbaar verser dan bij internationale concurrenten. De "Originals" lijn — met Vlaamse klassiekers en verse Belgische groenten — scoort sterk op smaak en versheid. De "Sana" lijn (van Sandra Bekkari) is populair bij gezondheidsgerichte kokers. "Busy Day" gerechten zijn klaar in 20 minuten — geschikt voor drukke avonden. Klantenservice wordt positief beoordeeld: problemen worden doorgaans zonder discussie opgelost. De hogere prijs per portie is het meest genoemde nadeel in gebruikersreviews.',
      voorWie: 'Foodbag is ideaal voor wie bewust lokaal en Belgisch wil consumeren en daar iets meer voor over heeft. De Sana-gerechten zijn populair bij gezondheidsgerichte kokers. Minder geschikt als budget de hoofdprioriteit is.',
      hoeWerktHet: 'Je bestelt op foodbag.be, met of zonder abonnement. Kies per gerecht hoeveel porties je wil. Bezorging is gratis, van vrijdag tot maandag, in heel België inclusief Wallonië.',
      vergelijking: 'Foodbag kost meer dan HelloFresh maar levert aantoonbaar betere lokale ingrediënten. Wie bewust Belgisch wil eten en bereid is daarvoor meer te betalen, zit bij Foodbag goed.',
      eindoordeel: 'Foodbag verdient zijn #2 positie als beste Belgische alternatief. De kwaliteit van de ingrediënten en de klantenservice zijn uitstekend. De hogere prijs is het voornaamste struikelblok.',
    },
    ranking: 2,
    status: 'active',
    score: { totaal: 8.1, smaak: 8.6, prijsKwaliteit: 7.2, flexibiliteit: 8.0, duurzaamheid: 8.5, gemak: 8.0 },
    prijsPerPortie: 9.50,
    prijsPopulaireBox: 50.60,
    receptenPerWeek: 20,
    gratisBezorging: true,
    minPersonen: 1,
    maxPersonen: 5,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: true,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.foodbag.be/foodbox/?tt=19934_2485209_507243_&r=',
    kortingsCode: {
      code: null,
      bedrag: '€60 korting',
      bedragKort: '€60 totaal',
      deal: '3x €20 korting op je eerste 3 bestellingen',
      voorwaarden: 'Geldig voor nieuwe klanten · Automatisch via onze link · Geldig t.e.m. 01/01/2027 · 3x €20 op de eerste 3 bestellingen',
      beschrijving: 'Krijg 3× €20 korting verspreid over je eerste 3 Foodbag-bestellingen. Totale besparing: €60. De korting wordt automatisch toegepast via onze link — geen code nodig.',
    },
    ctaSubtekst: '3× €20 korting · automatisch via onze link',
    kenmerken: ['🇧🇪 Lokale ingrediënten', '✓ Gratis bezorging', '✓ 5 kookstijlen', '✓ Zonder abonnement', '🔀 Voorheen ook Smartmat & 15gram'],    pros: ['100% Belgische en lokale ingrediënten', 'Uitstekende smaakscores', 'Eigen bezorgers', '5 kookstijlen incl. Sana (Sandra Bekkari)', 'Geen verplicht abonnement'],
    cons: ['Hogere prijs dan internationale alternatieven', 'Beperktere bezorgdagen dan HelloFresh', 'Minder geschikt voor strikte budgetkijkers'],
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch', 'bio'],
    losBestellenMogelijk: true,
    leverdag: true,
    tijdstip: false,
    besteVoor: 'Belgische kwaliteit',
    minMaaltijdenPerWeek: 1,
    badge: { label: '🇧🇪 Belgische keuze', bg: '#DBEAFE', color: '#1E40AF' },
  },
  {
    slug: 'marley-spoon',
    naam: 'Marley Spoon',
    logo: '/logos/marley-spoon.png',
    merkKleur: '#7C3AED',
    tagline: 'Creatieve chef-recepten voor kookliefhebbers',
    beschrijving: 'Marley Spoon biedt gevarieerde recepten met vaak iets uitgebreidere bereidingen dan andere maaltijdboxen. Met 40 gerechten per week en een prijs vanaf €8,67 per portie is het een goede keuze voor wie graag kookt. Bezorgt in Vlaanderen en Brussel.',
    uitgebreideReview: {
      intro: 'Ben jij iemand die koken niet als een plicht ziet, maar als een moment voor jezelf? Marley Spoon scoort 8,6 op 10 voor smaak — de hoogste score in onze test — en biedt elke week meer dan 40 recepten die verder gaan dan het doorsnee weekmenu. Dat kwaliteit een prijs heeft, is eerlijk: Marley Spoon is niet de goedkoopste keuze. Maar voor wie écht geniet van koken, is het verschil te proeven.',
      testervaring: 'Gebruikerservaringen benadrukken dat de Marley Spoon-recepten uitgebreider zijn dan bij HelloFresh of Foodbag — meer stappen, meer technieken, gemiddeld 45-60 minuten bereidingstijd. Dat is een bewuste keuze: Marley Spoon mikt op mensen die van koken genieten. De kwaliteit van de kruidenmixen en sauzen wordt consistent positief beoordeeld. Terugkerend minpunt in reviews: Marley Spoon bezorgt enkel in Vlaanderen en Brussel — wie in Wallonië woont kan er niet terecht.',
      voorWie: 'Marley Spoon is een goede keuze voor wie koken als ontspanning ziet en er 45-60 minuten voor wil nemen. Ook interessant voor koppels en gezinnen die elke week iets nieuws op tafel willen zetten zonder de winkel in te moeten.',
      hoeWerktHet: 'Bestellen via marleyspoon.be of de app. Box voor 2 of 4 personen, 2-5 maaltijden per week. Bezorging in Vlaanderen en Brussel. Wekelijks pauzeren of opzeggen mogelijk via je account.',
      vergelijking: 'Marley Spoon zit qua prijs in dezelfde categorie als Foodbag maar biedt meer receptkeuze (40/week). Ten opzichte van HelloFresh zijn de recepten creatiever en uitgebreider qua bereiding, maar ook tijdsintensiever. Wie snel wil koken kiest beter voor HelloFresh.',
      eindoordeel: 'Marley Spoon verdient zijn #3 positie als beste keuze voor kookliefhebbers. De hoge smaakscore (8,6/10) en het brede receptaanbod maken het verschil. Enkel de beperkte bezorging (geen Wallonië) en de hogere prijs zijn minpunten.',
      prijsTabel: [
        { box: 'Box 1', normaal: '€51,99', korting: '50% + gratis bezorging', betaal: '€25,99', besparing: '€26,00' },
        { box: 'Box 2', normaal: '€51,99', korting: '20%', betaal: '€41,59', besparing: '€10,40' },
        { box: 'Box 3', normaal: '€51,99', korting: '15%', betaal: '€44,19', besparing: '€7,80' },
        { box: 'Box 4', normaal: '€51,99', korting: '10%', betaal: '€46,79', besparing: '€5,20' },
        { box: 'Totaal', normaal: '€207,96', korting: '—', betaal: '€158,56', besparing: '€49,40' },
      ],
      prijsUitleg: 'Na de welkomstperiode betaal je als 2 personen met 3 maaltijden/week €207,96/maand (4 × €51,99). Voor 4 personen loopt dat op tot €251,80/maand (4 × €62,95). Is dat duur vergeleken met zelf boodschappen doen? Ja. Maar Marley Spoon-gebruikers noemen telkens dezelfde redenen: geen voedselverspilling, geen dagelijks nadenken over wat je kookt, en de tijdsbesparing van niet elke avond naar de winkel te rijden.',
      nietGeschiktVoor: [
        'Je woont in Wallonië of buiten Vlaanderen/Brussel — Marley Spoon bezorgt daar niet.',
        'Je hebt weinig tijd om te koken — reken op 45 tot 60 minuten per bereiding.',
        'Je wil de goedkoopste maaltijdbox — de prijs per portie ligt hoger dan bij de meeste concurrenten.',
        'Je kookt voor jonge kinderen met eenvoudige smaakvoorkeuren — de recepten zijn soms complex of pittiger van smaak.',
        'Je wil à la carte ingrediënten kiezen — je kiest uit een menu, zelf bepalen wat je ontvangt is niet mogelijk.',
      ],
      faq: [
        {
          vraag: 'Kan ik Marley Spoon opzeggen na de eerste box?',
          antwoord: 'Ja, Marley Spoon is wekelijks opzegbaar en heeft geen minimumperiode of opzegkosten. Je stopt of pauzeert je abonnement via je account — zolang je dit doet vóór de wekelijkse besteldeadline, wordt er geen nieuwe box aangemaakt.',
        },
        {
          vraag: 'Bezorgt Marley Spoon ook in mijn gemeente?',
          antwoord: 'Marley Spoon levert in Vlaanderen en het Brussels Hoofdstedelijk Gewest. Wallonië en andere regio\'s buiten dit gebied worden momenteel niet bediend. Twijfel je of jouw postcode in het leveringsgebied valt? Vul je postcode in op de website van Marley Spoon — je ziet meteen of bezorging mogelijk is.',
        },
      ],
    },
    ranking: 3,
    status: 'active',
    score: { totaal: 7.9, smaak: 8.6, prijsKwaliteit: 7.2, flexibiliteit: 8.0, duurzaamheid: 7.5, gemak: 7.2 },
    prijsPerPortie: 8.67,
    prijsPopulaireBox: 51.99,
    receptenPerWeek: 40,
    gratisBezorging: false,
    bezorgkosten: 5.99,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: false,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://go.adt246.net/t/t?a=1709214807&as=2059394978&t=2&tk=1',
    kortingsCode: {
      code: null,
      bedrag: '50% korting',
      bedragKort: 'Tot 50%',
      deal: 'Tot 50% korting verspreid over de eerste 4 boxen',
      voorwaarden: 'Geldig voor nieuwe klanten · Geen code vereist · Eerste 4 boxen · Direct opzegbaar · Reguliere bezorgkost: €5,99/levering',
      beschrijving: 'Geen kortingscode nodig — korting wordt automatisch toegepast via onze link. Verspreid als: 50% + gratis verzending op box 1, 20% op box 2, 15% op box 3, 10% op box 4. Daarna €5,99/levering.',
    },
    ctaSubtekst: 'Korting automatisch via link · geen code nodig',
    ctaTekst: 'Bespaar €49 op je eerste 4 boxen',
    ctaTekst2: 'Probeer je eerste box voor €25,99',
    kenmerken: ['✓ 40 recepten/week', '✓ Chef-kwaliteit', '📦 €5,99 bezorging', '🌱 Vegan opties'],
    pros: [
      'Grootste receptaanbod van alle geteste boxen: 40+ recepten per week',
      'Hoogste smaakscore in onze test (8,6/10) — ingrediënten en afwerking overtuigen',
      'Recepten van chefs met aandacht voor techniek, smaak en zelfgemaakte sauzen',
      'Gratis bezorging op je eerste box via de welkomstdeal',
      'Wekelijks opzegbaar, geen abonnement of minimumperiode',
      'Ruim aanbod vegetarische en flexitarische opties',
    ],
    cons: [
      'Enkel leverbaar in Vlaanderen en Brussel — Wallonië wordt niet bediend',
      'Hogere prijs dan gemiddeld: €8,67/portie voor de populaire 2-pers/3-maaltijden box',
      'Bereidingstijd van 45–60 minuten is langer dan bij HelloFresh of Foodbag',
      'Je kiest uit een vast menu — zelf ingrediënten samenstellen is niet mogelijk',
    ],
    geschiktVoor: ['koppel', 'vegetarisch'],
    losBestellenMogelijk: false,
    leverdag: true,
    tijdstip: false,
    besteVoor: 'Fijnproevers',
    minMaaltijdenPerWeek: 2,
    badge: { label: '👨‍🍳 Beste voor kookliefhebbers', bg: '#F3E8FF', color: '#7C3AED' },
    seoTitle: 'Marley Spoon België 2026: 7.9/10 — voor wie is het écht geschikt?',
    seoDescription: 'Marley Spoon getest in België: toprecepten maar duurder dan HelloFresh. Wij vergeleken prijs, smaak en flexibiliteit — inclusief de minpunten. Score: 7.9/10.',
  },
  {
    slug: 'foodprepper',
    seoTitle: 'Foodprepper review 2026: klaar in 15 min · 7.8/10 · €45 korting',
    seoDescription: 'Foodprepper: Belgische maaltijdbox klaar in 15 minuten. Score 7.8/10, gratis bezorging en geen verplicht abonnement. Nu tot €45 korting.',
    naam: 'Foodprepper',
    logo: '/logos/foodprepper.png',
    merkKleur: '#2D6A4F',
    tagline: 'De snelste maaltijdbox van België — klaar in 15 minuten',
    beschrijving: 'Foodprepper is een Belgische maaltijdbox opgericht in 2021 door Tessa van Meerten. Dankzij voorgegaarde groenten, gemarineerd vlees en voorbereide sauzen staat het eten in 15 minuten op tafel. Onderdeel van Smartmat NV, sinds 2025 in handen van Colruyt Group.',
    uitgebreideReview: {
      intro: 'Foodprepper is geen gewone maaltijdbox. Opgericht in 2021 door Tessa van Meerten — een Belgische ondernemer die weekend meal prepping omzette in een bedrijfsidee — positioneert Foodprepper zich ergens tussen een klassieke kookbox en kant-en-klaar. De belofte: alles in 15 minuten op tafel, zonder dat het aanvoelt als opwarmen.\n\nDat is mogelijk omdat het zware voorbereidingswerk al gedaan is. De groenten zijn voorgesneden en voorgegaard, het vlees of de vis is gemarineerd, en de sauzen zijn klaargemaakt. Jij voegt alles samen, warmt op waar nodig, en serveert. Het resultaat is een vers bereide maaltijd — geen magnetronmaaltijd — maar dan drie keer zo snel als een klassieke kookbox.\n\nFoodprepper is onderdeel van Smartmat NV, hetzelfde moederbedrijf als Foodbag, en maakt sinds 2025 deel uit van de Colruyt Group. Voor wie HelloFresh te bewerkelijk vindt en kant-en-klaar te weinig beleving geeft, vult Foodprepper een duidelijke niche in.',
      testervaring: 'Gebruikers beschrijven Foodprepper als verfrissend anders. De levering is gekoeld, goed verpakt en arriveert op zondag of maandag. Het aanbod omvat niet alleen diner, maar ook ontbijt, lunch en snacks — een volledigheid die weinig andere maaltijdboxen in België bieden.\n\nDe versmarkt — met wisselend aanbod van soepen, bijgerechten en snacks — laat je je bestelling aanvullen naast het weekmenu. Dat voelt als een soort online buurtsupermarkt, gekoppeld aan je maaltijdbox. De ingrediënten komen bijna uitsluitend van Belgische leveranciers, wat merkbaar is in de versheid.\n\nWie kookt voor twee of een gezin merkt dat de 15-minutenbelofte realistisch is: de stappen zijn eenvoudig, de instructies helder, en er zijn weinig afwas en weinig verspilling. Het meest genoemde aandachtspunt: wie van koken als ontspanning houdt, mist misschien het snij- en bereidingsplezier.',
      voorWie: 'Foodprepper is het sterkst voor tweeverdieners tussen 26 en 50 jaar, koppels met jonge kinderen, en wie op doordeweekse avonden geen tijd of energie heeft voor een klassieke kookbox. Wie HelloFresh of Foodbag te bewerkelijk vindt maar toch niet wil afhalen of opwarmen, is hier aan het juiste adres.\n\nOok interessant voor wie vlak naast zijn of haar Foodbag-abonnement iets wil dat sneller gaat op drukke avonden. Foodprepper en Foodbag zijn van hetzelfde moederbedrijf, waardoor de logistiek aansluit.\n\nMinder geschikt voor wie het kookproces zelf als ontspanning ervaart, of voor wie in Wallonië woont — Foodprepper levert enkel in Vlaanderen en Brussel.',
      hoeWerktHet: 'Foodprepper werkt zo: je gaat naar foodprepper.be, kiest je maaltijden uit het wisselende weekmenu, en voegt eventueel producten toe uit de versmarkt (soepen, snacks, bijgerechten). Je bestelling wordt gekoeld geleverd op zondag of maandag.\n\nThuis haal je de ingrediënten uit de koelkast. Alles is al voorbereid: groenten zijn voorgesneden en voorgegaard, vlees of vis is gemarineerd, sauzen zijn klaar. Jij bakt, warmt op of mengt — en na 15 minuten staat het eten op tafel.\n\nEen abonnement is niet verplicht. Je kan eenmalig bestellen, of kiezen voor een wekelijks of tweewekelijks ritme. Pauzeren en opzeggen kan vrij, zonder boetes of opzegtermijn.',
      vergelijking: 'Foodprepper zit in hetzelfde ecosystem als Foodbag: zelfde moederbedrijf (Smartmat NV), zelfde focus op Belgische leveranciers. Het grote verschil is de bereidingstijd: Foodbag vraagt 25–35 minuten, Foodprepper 15 minuten. Wie snelheid boven kookplezier stelt, kiest Foodprepper.\n\nTen opzichte van HelloFresh biedt Foodprepper meer lokale ingrediënten en een snellere bereiding, maar minder receptvariatie. HelloFresh heeft een groter weekaanbod (40+ recepten), terwijl Foodprepper mikt op kwaliteit en snelheid boven volume.\n\nVergeleken met kant-en-klaar (Factor, Foodmaker) is Foodprepper een tussenvorm: je bereidt zelf, maar het zware werk is al gedaan. Dat geeft meer gevoel van een echte maaltijd dan opwarmen, maar minder werk dan een klassieke kookbox.',
      eindoordeel: 'Foodprepper verdient zijn plek als de snelste maaltijdbox van België. Voor drukke gezinnen en tweeverdieners die vers willen eten zonder lang in de keuken te staan, is het een sterke keuze. De Belgische ingrediënten, flexibele formule zonder verplicht abonnement, en het brede dagmenu (ontbijt tot snacks) maken het onderscheidend.\n\nDe welkomstkorting van 3× €15 op de eerste 3 bestellingen maakt de instap extra aantrekkelijk — de korting wordt automatisch toegepast via onze link, je hoeft geen code in te voeren. Bezoek foodprepper.be voor actuele prijzen en het weekmenu.',
      prijsUitleg: 'Foodprepper hanteert een flexibel prijssysteem zonder minimumengagement. Je betaalt per maaltijd of per box, afhankelijk van je keuze. Actuele prijzen variëren — controleer het huidige aanbod op foodprepper.be, want prijzen kunnen wijzigen.\n\nNieuwe klanten krijgen drie keer €15 korting op hun eerste drie bestellingen, wat neerkomt op maximaal €45 voordeel. De korting wordt automatisch toegepast via onze link — je hoeft geen code in te voeren.',
      nietGeschiktVoor: [
        'Je woont in Wallonië of buiten Vlaanderen/Brussel — Foodprepper bezorgt enkel in Vlaanderen en het Brussels Hoofdstedelijk Gewest.',
        'Je zoekt een uitgebreide kookbeleving — het snijwerk en de voorbereiding zijn al gedaan, waardoor het kookplezier beperkter is.',
        'Je wil de goedkoopste optie op de markt — Foodprepper is niet de meest budgetvriendelijke keuze in de vergelijking.',
        'Je verwacht meer dan 20 recepten per week — het menu is wisselend maar beperkter dan bij HelloFresh of Foodbag.',
      ],
      faq: [
        {
          vraag: 'Is Foodprepper duur?',
          antwoord: 'Foodprepper is niet de goedkoopste maaltijdbox in België, maar ook niet de duurste. De prijs varieert afhankelijk van je keuze aan maaltijden en hoeveel personen je kookt. Voor nieuwe klanten geldt een welkomstkorting: 3× €15 korting op de eerste 3 bestellingen (tot €45 voordeel), automatisch toegepast via onze link — geen code nodig. Actuele prijzen vind je op foodprepper.be — prijzen kunnen wijzigen.',
        },
        {
          vraag: 'Kan ik bestellen zonder abonnement?',
          antwoord: 'Ja. Een abonnement is niet verplicht bij Foodprepper. Je kan eenmalig bestellen, of kiezen voor een wekelijks of tweewekelijks leveringsritme. Pauzeren en opzeggen kan vrij, zonder boetes of opzegtermijn.',
        },
        {
          vraag: 'Levert Foodprepper ook in Wallonië?',
          antwoord: 'Nee. Foodprepper levert momenteel enkel in Vlaanderen en het Brussels Hoofdstedelijk Gewest. Wallonië en andere regio\'s buiten dit gebied worden niet bediend. Controleer op foodprepper.be of jouw postcode in het leveringsgebied valt.',
        },
        {
          vraag: 'Wat is het verschil met Foodbag?',
          antwoord: 'Foodprepper en Foodbag zijn van hetzelfde moederbedrijf (Smartmat NV, onderdeel van Colruyt Group), maar richten zich op een ander gebruik. Foodbag is een klassieke kookbox met een bereidingstijd van 25–35 minuten en een ruim receptaanbod. Foodprepper mikt op snelheid: klaar in 15 minuten dankzij voorgegaarde groenten, gemarineerd vlees en voorbereide sauzen. Foodprepper voegt ook ontbijt, lunch en snacks toe via het dagmenu en de versmarkt.',
        },
        {
          vraag: 'Hoe snel krijg ik mijn box?',
          antwoord: 'Foodprepper levert wekelijks op zondag of maandag, gekoeld en aan huis. Je bestelt via foodprepper.be vóór de besteldeadline van die week. Bezorging is gratis.',
        },
      ],
    },
    ranking: 4,
    status: 'active',
    score: { totaal: 7.8, smaak: 7.6, prijsKwaliteit: 7.0, flexibiliteit: 8.5, duurzaamheid: 8.0, gemak: 9.5 },
    prijsPerPortie: 4.75,
    prijsPopulaireBox: 44.90,
    receptenPerWeek: 20,
    gratisBezorging: true,
    minPersonen: 1,
    maxPersonen: 4,
    opzegTermijn: 'Vrij opzegbaar',
    belgisch: true,
    vegetarisch: true,
    bio: false,
    // m=2545927 = kortingscampagne. Dit is de URL die vóór de consolidatie in
    // productie won via de map in /ga/[slug]; de variant zonder &u= die hier
    // stond werd nooit gebruikt. Verifieer bij TradeTracker welke correct is.
    affiliateUrl: 'https://deals.foodprepper.be/c?c=40691&m=2545927&a=507243&r=&u=',
    affiliateCampagnes: {
      // m=2545883 = losse CTA-campagne, stond hardcoded in vergelijk/foodprepper-vs-foodbag.
      cta: 'https://deals.foodprepper.be/c?c=40691&m=2545883&a=507243&r=&u=',
    },
    kortingsCode: {
      code: null,
      bedrag: '3× €15 korting',
      bedragKort: '€45 totaal',
      deal: '3× €15 korting op je eerste 3 bestellingen',
      voorwaarden: 'Geldig voor nieuwe klanten · Automatisch via onze link · 3× €15 op eerste 3 bestellingen · Vrij opzegbaar',
      beschrijving: 'Krijg €15 korting op elk van je eerste 3 bestellingen. Totale besparing: €45. De korting wordt automatisch toegepast via onze link — geen code nodig. Klaar in 15 minuten dankzij voorbereide ingrediënten.',
    },
    ctaSubtekst: '3× €15 korting op eerste 3 bestellingen · automatisch via onze link',
    ctaTekst: 'Bekijk Foodprepper',
    kenmerken: ['⚡ Klaar in 15 min', '🇧🇪 Belgisch & lokaal', '✓ Gratis bezorging', '✓ Geen verplicht abo'],
    pros: [
      'Klaar in 15 minuten dankzij voorbereide ingrediënten',
      'Gratis gekoelde levering op zondag of maandag',
      'Geen verplicht abonnement — eenmalig of wekelijks',
      'Bijna alle leveranciers zijn Belgisch en lokaal',
      'Volledig dagmenu: ontbijt, lunch, diner én snacks',
      'Wisselend menu + versmarkt met soep, snacks en bijgerechten',
    ],
    cons: [
      'Enkel leverbaar in Vlaanderen en Brussel',
      'Minder kookplezier door voorbereide ingrediënten',
      'Nog minder bekend dan HelloFresh of Foodbag',
      'Prijs niet de goedkoopste op de markt',
    ],
    geschiktVoor: ['koppel', 'gezin', 'singles', 'budget'],
    losBestellenMogelijk: true,
    leverdag: true,
    tijdstip: false,
    besteVoor: 'Snelheid & gemak',
    minMaaltijdenPerWeek: 1,
    badge: { label: '⚡ Snelste box', bg: '#ECFDF5', color: '#2D6A4F' },
  },
  {
    slug: 'factor',
    naam: 'Factor',
    logo: '/logos/factor.svg',
    merkKleur: '#7C3AED',
    tagline: 'Kant-en-klaar chef-maaltijden — geen koken vereist',
    beschrijving: 'Factor (van de HelloFresh Group) levert kant-en-klare chef-maaltijden die je enkel hoeft op te warmen. 18 gerechten per week in 5 dieetstijlen, bezorging in heel België op zondag of maandag.',
    uitgebreideReview: {
      intro: 'Factor is geen traditionele maaltijdbox — het is een kant-en-klare maaltijdservice van de HelloFresh Group. Je kookt niet zelf: de maaltijden worden vers bereid geleverd en zijn klaar in 2-3 minuten in de magnetron.',
      testervaring: 'Factor is radicaal anders dan klassieke maaltijdboxen: je kookt niet, je warmt op in 2-3 minuten. Gebruikerservaringen beschrijven de smaak als verrassend goed voor zo\'n snelle bereiding. De 5 dieetstijlen — waaronder "High-Protein", "Chef\'s Choice" en "Calorie-Conscious" — worden goed gewaardeerd door sportieve gebruikers en mensen die op hun gewicht letten. Terugkerend nadeel in reviews: de €6 bezorgkosten per levering tellen snel op bij regelmatig gebruik. Factor is een premium product voor wie tijd de grootste schaarsheid is.',
      voorWie: 'Factor is ideaal voor drukke professionals, sporters en iedereen die gezond wil eten zonder kooktijd. Minder geschikt als je het kookplezier wil of als prijs een prioriteit is.',
      hoeWerktHet: 'Bestellen via factormeals.be. Kies wekelijks uit 18 maaltijden. Bezorging op zondag of maandag in heel België. Bezorgkosten: €5,99. Flexibel abonnement, wekelijks aanpasbaar of te pauzeren.',
      vergelijking: 'Factor onderscheidt zich van alle andere maaltijdboxen: je kookt niet zelf. Ten opzichte van HelloFresh (kookbox) is Factor duurder per portie maar spaart het veel meer tijd. Ideaal voor drukke weken.',
      eindoordeel: 'Factor vult een andere niche dan de klassieke maaltijdboxen. Wie wil eten zonder koken vindt hier een kwalitatief alternatief voor restaurant of take-away, aan een vergelijkbare prijs maar met meer nutritionele waarde.',
    },
    ranking: 5,
    status: 'active',
    score: { totaal: 7.8, smaak: 7.8, prijsKwaliteit: 7.0, flexibiliteit: 8.0, duurzaamheid: 6.5, gemak: 9.5 },
    prijsPerPortie: 4.99,
    prijsPopulaireBox: 55.00,
    receptenPerWeek: 18,
    gratisBezorging: false,
    bezorgkosten: 5.99,
    minPersonen: 1,
    maxPersonen: 4,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: false,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://factor-be.sjv.io/c/3156055/3876428/19954',
    kortingsCode: {
      code: null,
      bedrag: '40% + 25% korting',
      bedragKort: '40% + 25%',
      deal: '40% korting op je eerste box + 25% op de volgende vijf boxen',
      voorwaarden: 'Geldig voor nieuwe klanten · Automatisch via onze link · Eerste box + vijf volgende boxen · Geldig t.e.m. 27/10/2026',
      beschrijving: 'De korting wordt automatisch toegepast via onze link — je hoeft geen code in te voeren: 40% korting op je eerste box + 25% korting op de volgende vijf boxen. Exclusief voor nieuwe klanten.',
    },
    ctaSubtekst: '40% korting op je eerste box · automatisch via onze link',
    kenmerken: ['⚡ Kant-en-klaar', '✓ Heel België', '✓ 18 maaltijden/week', '🥗 5 dieetstijlen'],
    pros: ['Geen koken vereist — enkel opwarmen', 'Bezorging in heel België', '5 dieetstijlen incl. Keto en High-Protein', 'Van de HelloFresh Group'],
    cons: ['Bezorgkosten €5,99', 'Duurder dan kookboxen bij kleine hoeveelheden', 'Minder culinaire beleving'],
    geschiktVoor: ['koppel', 'gezin', 'singles', 'budget'],
    losBestellenMogelijk: false,
    leverdag: true,
    tijdstip: true,
    besteVoor: 'Ready-to-eat',
    minMaaltijdenPerWeek: 1,
  },
  {
    slug: 'crowd-cooks',
    naam: 'Crowd Cooks',
    logo: '/logos/crowd-cooks.svg',
    merkKleur: '#1B4332',
    tagline: 'Kant-en-klare chef-maaltijden — vers bereid, thuisbezorgd',
    beschrijving: 'Crowd Cooks is een Belgische kant-en-klare maaltijdservice: verse maaltijden bereid door chefs, die je enkel hoeft op te warmen. Elke week 12 nieuwe gerechten, royale porties van 450+ gram, en bezorging op zondag of maandag (€4,90). Geen koken vereist.',
    uitgebreideReview: {
      intro: 'Crowd Cooks is geen klassieke kookbox maar een kant-en-klare maaltijdservice. De gerechten worden vers bereid door chefs en geleverd — jij warmt ze enkel op in een paar minuten. Een Belgisch alternatief voor wie wil eten zonder te koken.',
      testervaring: 'Crowd Cooks mikt op het gemak van kant-en-klaar zonder in te boeten op porties: de maaltijden wegen 450 gram of meer, wat ruim is voor het segment. Je kiest wekelijks uit 12 nieuwe gerechten die 5 dagen houdbaar zijn in de koelkast en in enkele minuten warm zijn. Het abonnement is flexibel — pauzeren of annuleren kan met één klik. De bezorging kost €4,90 (op zondag of maandag) — lager dan de €5,99 die Factor in hetzelfde segment aanrekent, al is het niet gratis. De keuze van 12 gerechten is wat beperkter dan bij sommige grotere spelers, en de prijs per portie ligt in de premium-klasse die eigen is aan kant-en-klaar.',
      voorWie: 'Crowd Cooks is ideaal voor drukke professionals, singles en koppels die gezond willen eten zonder kooktijd. Minder geschikt voor wie het kookplezier zoekt of voor wie prijs de doorslaggevende factor is.',
      hoeWerktHet: 'Bestellen via crowdcooks.be. Kies wekelijks uit 12 nieuwe gerechten. Bezorging kost €4,90 op zondag of maandag in onder meer Brussel, Vlaams- en Waals-Brabant, Luik, Charleroi, Namen, Gent en Antwerpen. De maaltijden zijn 5 dagen houdbaar in de koelkast en klaar in een paar minuten. Flexibel abonnement: pauzeren of annuleren met één klik.',
      vergelijking: 'Crowd Cooks speelt in hetzelfde kant-en-klaar-segment als Factor, maar is Belgisch en rekent €4,90 bezorgkosten — lager dan de €5,99 van Factor. Tegenover klassieke kookboxen zoals HelloFresh of Foodbag bespaart Crowd Cooks alle kooktijd, maar je levert wel de kookbeleving en een deel van de receptkeuze in.',
      eindoordeel: 'Crowd Cooks vult een andere behoefte dan de klassieke maaltijdboxen: eten zonder koken, met Belgische verankering en royale porties als troeven. Voor wie tijd de grootste schaarste is en toch verse, royale maaltijden wil, is het een sterk alternatief voor restaurant of take-away.',
    },
    ranking: 6,
    status: 'active',
    score: { totaal: 7.8, smaak: 7.8, prijsKwaliteit: 6.8, flexibiliteit: 8.0, duurzaamheid: 6.5, gemak: 9.3 },
    prijsPerPortie: 10.71,
    prijsPopulaireBox: 49.90,
    receptenPerWeek: 12,
    gratisBezorging: false,
    bezorgkosten: 4.90,
    minPersonen: 1,
    maxPersonen: 4,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: true,
    vegetarisch: false,
    bio: false,
    affiliateUrl: 'https://tc.tradetracker.net/?c=34031&m=1868354&a=507243&r=&u=https%3A%2F%2Fcrowdcooks.be%2Fnl%2Fonboarding%2Fplan',
    kortingsCode: {
      code: null,
      bedrag: '€60 totaal',
      bedragKort: '€60 totaal',
      deal: '€20 korting in week 1 + €10 korting per week gedurende 4 weken',
      voorwaarden: 'Geldig voor nieuwe klanten · Automatisch via onze link · €20 in week 1 + 4× €10 · Wekelijks opzegbaar',
      beschrijving: '€20 korting in week 1 + €10 korting per week gedurende 4 weken. Totale besparing: €60. Korting wordt automatisch toegepast via onze link — geen code nodig.',
    },
    ctaSubtekst: 'tot €60 korting · automatisch via onze link',
    kenmerken: ['⚡ Kant-en-klaar', '🇧🇪 Belgisch', '🚚 Bezorging €4,90', '🍽️ 450+ g per maaltijd'],
    pros: ['Geen koken vereist — enkel opwarmen', 'Lagere bezorgkosten dan Factor (€4,90 vs €5,99)', 'Belgische service met royale porties (450+ g)', 'Flexibel: pauzeren of annuleren met één klik'],
    cons: ['Premium prijs per portie', '€4,90 bezorgkosten per levering', 'Beperktere keuze (12 gerechten per week)', 'Minder culinaire beleving dan een kookbox'],
    geschiktVoor: ['singles', 'koppel', 'gezin'],
    losBestellenMogelijk: false,
    leverdag: true,
    tijdstip: false,
    besteVoor: 'Ready-to-eat',
    minMaaltijdenPerWeek: 1,
    seoTitle: 'Crowd Cooks review 2026: kant-en-klaar · €60 korting',
    seoDescription: 'Crowd Cooks: Belgische kant-en-klare maaltijden, vers bereid door chefs. Onze eerlijke review + tot €60 welkomstkorting.',
  },
  {
    slug: 'foodmaker',
    naam: 'Foodmaker',
    logo: '/logos/foodmaker.svg',
    merkKleur: '#1B4332',
    tagline: 'Artisanale kant-en-klaar met Jeroen Meus — Dagelijkse Kost bezorgd',
    beschrijving: 'Foodmaker is de Antwerpse kant-en-klaar maaltijdservice met een unieke samenwerking met Jeroen Meus (Dagelijkse Kost). 32 gerechten per week, gratis bezorging in heel België en een volledig vegan "Vedge Bags" gamma.',
    uitgebreideReview: {
      intro: 'Foodmaker combineert artisanale kwaliteit met het gemak van kant-en-klare maaltijden. De samenwerking met Jeroen Meus — het gezicht van VRT\'s Dagelijkse Kost — maakt Foodmaker uniek in de Belgische maaltijdmarkt.',
      testervaring: 'Foodmaker is geen klassieke kookbox — je warmt op, je kookt niet. Uit gebruikerservaringen blijkt de kwaliteit een sterk punt: vers bereid in Antwerpen, tot 7 dagen houdbaar. De Jeroen Meus-lijn — gebaseerd op Dagelijkse Kost-recepten — scoort goed in reviews. Het Vedge Bags gamma (volledig vegan) wordt als verrassend smaakvol beschreven. Terugkerend minpunt: de bezorging is minder flexibel dan bij andere aanbieders en de prijs per portie is de hoogste van de vergelijking.',
      voorWie: 'Foodmaker is ideaal voor wie kwaliteitsmaaltijden wil zonder kooktijd. De Jeroen Meus-recepten spreken een breed Vlaams publiek aan. Minder geschikt als je van het kookproces zelf geniet of een strak budget hebt.',
      hoeWerktHet: 'Bestellen via foodmaker.be. Minimum bestelling €39,90. Gratis bezorging in heel België. Maaltijden zijn vers bereid en tot 7 dagen houdbaar. Geen verplicht abonnement.',
      vergelijking: 'Foodmaker is vergelijkbaar met Factor maar focust meer op artisanale Belgische kwaliteit en de Jeroen Meus samenwerking. De prijs per portie is hoger, maar de kwaliteit en de USP van Dagelijkse Kost zijn uniek.',
      eindoordeel: 'Foodmaker is een sterke kant-en-klare keuze voor wie van kwaliteit en Belgische smaak houdt. De samenwerking met Jeroen Meus geeft het een herkenbaar en vertrouwd karakter.',
    },
    ranking: 7,
    status: 'active',
    score: { totaal: 7.7, smaak: 8.4, prijsKwaliteit: 6.5, flexibiliteit: 7.5, duurzaamheid: 7.8, gemak: 9.5 },
    prijsPerPortie: 10.00,
    prijsPopulaireBox: 40.00,
    receptenPerWeek: 32,
    gratisBezorging: true,
    minPersonen: 1,
    maxPersonen: 4,
    opzegTermijn: 'Geen abonnement',
    belgisch: true,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.foodmaker.be',
    ctaSubtekst: 'Jeroen Meus · gratis bezorging',
    kenmerken: ['👨‍🍳 Jeroen Meus', '🇧🇪 Belgisch', '✓ 32 gerechten/week', '✓ Gratis bezorging'],
    pros: ['Samenwerking met Jeroen Meus (Dagelijkse Kost)', 'Gratis bezorging in heel België', 'Artisanale Belgische kwaliteit', 'Volledig vegan Vedge Bags gamma'],
    cons: ['Hogere prijs (~€10/portie)', 'Geen kookbeleving (kant-en-klaar)', 'Beperkte bezorgfrequentie'],
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch', 'singles'],
    losBestellenMogelijk: true,
    leverdag: true,
    tijdstip: false,
    besteVoor: 'Pure kwaliteit',
    minMaaltijdenPerWeek: 1,
  },
  {
    slug: 'ekomenu',
    naam: 'Ekomenu',
    logo: '/logos/ekomenu.png',
    merkKleur: '#166534',
    tagline: '100% biologisch — de groenste keuze in België',
    beschrijving: 'Ekomenu is de meest duurzame maaltijdbox in België. Alle ingrediënten zijn biologisch gecertificeerd, verpakking is milieuvriendelijk, en je kan je persoonlijke CO2-footprint bijhouden. Bezorgt in Vlaanderen en Brussel.',
    uitgebreideReview: {
      intro: 'Ekomenu is een interessante keuze voor wie bewust en biologisch wil eten. Met 20-25 recepten per week, 100% biologische ingrediënten en een unieke CO2-footprint tracker per bestelling gaat Ekomenu verder dan de meeste andere maaltijdboxen op het vlak van duurzaamheid.',
      testervaring: 'Uit gebruikerservaringen blijkt Ekomenu sterk te scoren op het bewust plantaardige aanbod en de biologische kwaliteit. De "Groenteteller" — die bijhoudt hoeveel groenten je per week eet — wordt door veel gebruikers als motiverend ervaren. Bereidingstijd ligt rond 35-45 minuten. De CO2-tracker per bestelling is een uniek feature dat nergens anders in de Belgische markt te vinden is. Wie gewend is aan vlees ervaart soms een aanpassingsperiode. Terugkerend minpunt: bezorging is enkel in Vlaanderen en Brussel — niet in Wallonië.',
      voorWie: 'Ekomenu is de beste keuze voor milieubewuste consumenten, vegetariërs en vegans in Vlaanderen en Brussel. Ook uitstekend voor mensen met allergieën dankzij de uitgebreide filteropties. Minder geschikt als je ook vlees wil eten of in Wallonië woont.',
      hoeWerktHet: 'Bestellen via ekomenu.be. Kies je menu en het aantal personen. 20-25 recepten per week om uit te kiezen. Bezorging gratis op maandag en vrijdag, in Vlaanderen en Brussel. Abonnement wekelijks aanpasbaar.',
      vergelijking: 'Ekomenu is de enige maaltijdbox in België met 100% biologische ingrediënten. Ten opzichte van HelloFresh is het duurder maar ook significant duurzamer. Let op: Ekomenu bezorgt enkel in Vlaanderen en Brussel, niet in Wallonië.',
      eindoordeel: 'Ekomenu is een sterke keuze als duurzaamheid en gezondheid je prioriteiten zijn. De biologische kwaliteit en de brede keuze aan dieetopties zijn weinig te vinden bij andere Belgische maaltijdboxen.',
    },
    ranking: 8,
    status: 'active',
    score: { totaal: 7.6, smaak: 7.5, prijsKwaliteit: 6.8, flexibiliteit: 7.5, duurzaamheid: 9.5, gemak: 7.0 },
    prijsPerPortie: 6.18,
    prijsPopulaireBox: 44.91,
    receptenPerWeek: 20,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: false,
    vegetarisch: true,
    bio: true,
    affiliateUrl: 'https://www.ekomenu.be',
    ctaSubtekst: '100% biologisch · gratis bezorging',
    kenmerken: ['🌿 100% Biologisch', '✓ CO2-tracker', '✓ 20-25 recepten/week', '♻️ Eco-verpakking'],
    pros: ['Enige 100% biologische maaltijdbox in België', 'Unieke CO2-footprint tracker', 'Brede keuze voor vegetariërs en vegans', 'Milieuvriendelijke verpakking'],
    cons: ['Hogere prijs dan HelloFresh', 'Enkel Vlaanderen en Brussel (niet Wallonië)', 'Minder receptvariatie dan HelloFresh'],
    geschiktVoor: ['koppel', 'vegetarisch', 'bio'],
    losBestellenMogelijk: false,
    leverdag: true,
    tijdstip: false,
    besteVoor: 'Vegetarisch/vegan',
    minMaaltijdenPerWeek: 2,
  },
  {
    slug: 'carrefour-simply-you',
    naam: 'Carrefour Simply You',
    logo: '/logos/carrefour-simply-you.svg',
    merkKleur: '#0F4C81',
    tagline: 'Budgetvriendelijk zonder abonnement — in heel België',
    beschrijving: 'Carrefour Simply You is een betaalbare maaltijdbox van de bekende supermarktketen. Geen verplicht abonnement, bezorging in heel België inclusief Wallonië, en een welkomstkorting voor nieuwe klanten.',
    uitgebreideReview: {
      intro: 'Carrefour Simply You is de no-nonsense keuze voor de budgetbewuste koker. Met een van de lagere prijzen per portie en geen verplicht abonnement is het een laagdrempelige instap in de wereld van maaltijdboxen.',
      testervaring: 'Carrefour Simply You is bewust basic — en dat is zowel zijn kracht als zijn beperking. Uit gebruikerservaringen blijkt de smaak degelijk maar niet spectaculair. De bereidingstijd (25-30 minuten) en eenvoudige instructies worden positief beoordeeld. De bezorging op maandagavond is beperkt in flexibiliteit maar wordt als betrouwbaar beschreven. Grootste troef volgens gebruikers: geen abonnement — je bestelt wanneer je wil, zonder verplichtingen. Ideaal als kennismaking of aanvulling, minder als wekelijkse vaste box.',
      voorWie: 'Carrefour Simply You is een goede keuze voor wie eenmalig wil proberen of een strak budget heeft. Minder geschikt als je veel receptvariatie of een weekelijkse kookbeleving zoekt.',
      hoeWerktHet: 'Bestellen via carrefour.be. Geen abonnement, eenmalig bestellen. Bezorging op maandagavond (17u-22u) in heel België, of afhalen bij een Carrefour-winkel.',
      vergelijking: 'Carrefour Simply You is een budgetvriendelijke optie zonder abonnement. Met de welkomstkorting voor nieuwe klanten (controleer de actuele code op de site) is de eerste box extra voordelig. Ten opzichte van HelloFresh met korting kan HelloFresh in de eerste weken zelfs goedkoper uitvallen.',
      eindoordeel: 'Carrefour Simply You is een goede keuze als budget de prioriteit is en je geen abonnement wil. De welkomstkorting maakt de instap extra aantrekkelijk.',
    },
    seoTitle: 'Carrefour Simply You Box — stopgezet (2026) · bekijk alternatieven',
    seoDescription: 'De Carrefour Simply You Box bestaat niet meer. Bekijk de beste alternatieven zonder abonnement: Foodprepper, Foodmaker en Foodbag. Direct vergelijken en besparen.',
    ranking: 9,
    status: 'discontinued',
    statusNotitie: 'De Carrefour Simply You Box is stopgezet (2026). De website bestaat niet meer en het product is niet langer beschikbaar.',
    score: { totaal: 6.8, smaak: 6.5, prijsKwaliteit: 7.8, flexibiliteit: 6.0, duurzaamheid: 6.0, gemak: 7.5 },
    prijsPerPortie: 5.38,
    prijsPopulaireBox: 43.50,
    receptenPerWeek: 10,
    gratisBezorging: true,
    minPersonen: 1,
    maxPersonen: 4,
    opzegTermijn: 'Geen abonnement',
    belgisch: true,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.carrefour.be',
    ctaSubtekst: 'Geen abonnement · bestellen wanneer je wil',
    kenmerken: ['💰 Voordelig', '🇧🇪 Heel België', '✓ Geen abonnement', '🏷️ Welkomstkorting nieuwe klanten'],
    pros: ['Geen verplicht abonnement', 'Welkomstkorting voor nieuwe klanten', 'Bezorging in heel België incl. Wallonië', '10+ recepten per week'],
    cons: ['Minder receptvariatie dan HelloFresh', 'Eenvoudigere recepten', 'Enkel maandaglevering'],
    geschiktVoor: ['gezin', 'singles', 'koppel'],
    losBestellenMogelijk: true,
    leverdag: true,
    tijdstip: false,
    besteVoor: 'Zonder abonnement',
    minMaaltijdenPerWeek: 1,
  },
];

/** Enkel de actieve aanbieders — gebruik dit voor ranglijsten, tabellen en tellingen. */
// De volgorde van deze array is redactioneel en bepaalt de weergave; het
// ranking-veld toont datzelfde nummer aan de bezoeker. Wie de array herschikt
// zonder de nummers bij te werken, laat de site "#3" op plaats 4 tonen.
// Deze controle vangt dat af tijdens de build in plaats van in productie.
if (process.env.NEXT_PHASE === 'phase-production-build') {
  aanbieders.forEach((a, i) => {
    if (a.ranking !== i + 1) {
      throw new Error(
        `Ranking klopt niet: "${a.slug}" staat op positie ${i + 1} in de array ` +
        `maar heeft ranking ${a.ranking}. Werk src/lib/aanbieders.ts bij.`
      );
    }
  });
}

export const actieveAanbieders: Aanbieder[] = aanbieders.filter(a => a.status === 'active');

export function getAanbieder(slug: string): Aanbieder | undefined {
  return aanbieders.find(a => a.slug === slug);
}

export function getActieveAanbieders(): Aanbieder[] {
  return actieveAanbieders;
}

export function getTopAanbieders(n: number): Aanbieder[] {
  return actieveAanbieders.slice(0, n);
}

export function getAanbiedersByFilter(filter: string): Aanbieder[] {
  if (filter === 'alle') return actieveAanbieders;
  return actieveAanbieders.filter(a => a.geschiktVoor.includes(filter));
}
