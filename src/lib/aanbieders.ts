export interface KortingsCode {
  code: string;
  bedrag: string;
  beschrijving: string;
}

export interface Aanbieder {
  slug: string;
  naam: string;
  logo: string;
  tagline: string;
  beschrijving: string;
  uitgebreideReview: {
    intro: string;
    testervaring: string;
    voorWie: string;
    hoeWerktHet: string;
    vergelijking: string;
    eindoordeel: string;
  };
  ranking: number;
  score: {
    totaal: number;
    smaak: number;
    prijsKwaliteit: number;
    flexibiliteit: number;
    duurzaamheid: number;
    gemak: number;
  };
  prijsPerPortie: number;
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
  kortingsCode?: KortingsCode;
  kenmerken: string[];
  pros: string[];
  cons: string[];
  geschiktVoor: string[];
}

export const aanbieders: Aanbieder[] = [
  {
    slug: 'hellofresh',
    naam: 'HelloFresh',
    logo: '/logos/hellofresh.png',
    tagline: 'Marktleider met de beste prijs-kwaliteit',
    beschrijving: 'HelloFresh is de populairste maaltijdbox in België en wereldwijd. Met meer dan 50 recepten per week, gratis bezorging en een flexibel abonnement biedt het de beste balans tussen prijs, keuze en gemak.',
    uitgebreideReview: {
      intro: 'HelloFresh is de absolute marktleider in België en dat is niet zonder reden. Na weken testen kwamen we tot de conclusie dat geen enkele andere box zo\'n goede balans biedt tussen prijs, variatie en gebruiksgemak. Of je nu kookt voor 2 of voor een heel gezin — HelloFresh past zich aan.',
      testervaring: 'Tijdens onze test van 4 weken bestelden we wekelijks de box voor 2 personen met 3 maaltijden. De bezorging verliep vlot, elke keer netjes gekoeld en op tijd. De receptkaarten zijn duidelijk en bevatten stap-voor-stap instructies met foto\'s. Bereidingstijd schommelt tussen 25 en 45 minuten. Wat ons opviel: de variatie is indrukwekkend. Van Belgische klassiekers tot Aziatische wokgerechten en van vegetarisch tot vis — je eet nooit twee keer hetzelfde. De porties zijn goed afgemeten, weinig verspilling.',
      voorWie: 'HelloFresh is de beste keuze voor koppels en gezinnen die weinig tijd hebben maar toch gevarieerd willen eten. Dankzij de grote receptvariatie (30+) vinden ook kieskeurige eters altijd iets naar hun smaak.',
      hoeWerktHet: 'Je stelt je box samen op hellofresh.be: kies het aantal personen (1-6) en het aantal maaltijden per week (3-5). Je kiest dan elke week zelf welke recepten je wil uit het aanbod van 30+. Bezorging is gratis en je kan kiezen uit meerdere bezorgdagen. Pauzeren of opzeggen kan tot 5 dagen voor je volgende levering.',
      vergelijking: 'Ten opzichte van Foodbag is HelloFresh voordeliger maar gebruikt het minder lokale Belgische ingrediënten. Marley Spoon is vergelijkbaar in prijs maar biedt meer chef-recepten. Voor pure budgetvriendelijkheid wint HelloFresh met korting altijd.',
      eindoordeel: 'HelloFresh verdient zijn #1 positie. De combinatie van prijs, variatie en gemak is ongeëvenaard in België. Zeker met de welkomstkorting tot €60 voor nieuwe klanten is het een no-brainer om te proberen.',
    },
    ranking: 1,
    score: { totaal: 8.4, smaak: 8.2, prijsKwaliteit: 8.5, flexibiliteit: 9.0, duurzaamheid: 6.8, gemak: 9.0 },
    prijsPerPortie: 5.50,
    prijsPopulaireBox: 47.99,
    receptenPerWeek: 50,
    gratisBezorging: true,
    minPersonen: 1,
    maxPersonen: 6,
    opzegTermijn: '5 dagen op voorhand',
    belgisch: false,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.hellofresh.be',
    kortingsCode: {
      code: '',
      bedrag: 'Tot €60 welkomstkorting',
      beschrijving: 'Automatisch via onze link. Verspreid over eerste 3 boxen (tot €37 + €12 + €5). Geldig voor nieuwe klanten, vervalt na 70 dagen.',
    },
    kenmerken: ['✓ Gratis bezorging', '✓ Direct opzegbaar', '✓ 50+ recepten/week', '✓ App met tracking'],
    pros: ['Grootste receptvariatie (50+ per week)', 'Gratis bezorging in heel België', 'Flexibel pauzeren en opzeggen', 'Gebruiksvriendelijke app', 'Welkomstkorting tot €60 voor nieuwe klanten'],
    cons: ['Niet 100% Belgische ingrediënten', 'Meer plasticverpakking dan lokale alternatieven', 'Standaardprijs hoger na korting'],
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch'],
  },
  {
    slug: 'foodbag',
    naam: 'Foodbag',
    logo: '/logos/foodbag.png',
    tagline: 'De beste Belgische maaltijdbox met lokale topkwaliteit',
    beschrijving: 'Foodbag is dé Belgische maaltijdbox bij uitstek. Met verse ingrediënten van lokale Belgische boeren, 40 recepten per week en eigen bezorgers is het de premium keuze voor wie bewust lokaal wil eten. Eigendom van Colruyt Group.',
    uitgebreideReview: {
      intro: 'Foodbag is het paradepaardje van de Belgische maaltijdboxmarkt. Inmiddels onderdeel van de Colruyt Group, heeft Foodbag zich gepositioneerd als de premium Belgische keuze. De ingrediënten zijn merkbaar verser en lokaler dan bij internationale concurrenten.',
      testervaring: 'Onze testperiode van 4 weken met Foodbag was ronduit positief op vlak van kwaliteit. De ingrediënten — van lokale boerderijen — zijn aantoonbaar verser dan bij HelloFresh. De 5 kookstijlen (Originals, Sana, Quick & Easy, Veggie, en Busy Day kant-en-klaar) geven veel flexibiliteit. Een kritische noot: Foodbag is duidelijk duurder dan de concurrenten aan €9,50/portie.',
      voorWie: 'Foodbag is ideaal voor wie bewust Belgisch wil consumeren en bereid is daar wat meer voor te betalen. De Sana-gerechten (Sandra Bekkari) zijn populair bij gezondheidsgerichte kokers.',
      hoeWerktHet: 'Je bestelt op foodbag.be, met of zonder abonnement. Kies per gerecht hoeveel porties je wil. Bezorging is gratis, van vrijdag tot maandag, in heel België inclusief Wallonië.',
      vergelijking: 'Foodbag kost meer dan HelloFresh maar levert aantoonbaar betere lokale ingrediënten. Als je Belgisch wil eten met topkwaliteit is Foodbag de beste keuze.',
      eindoordeel: 'Foodbag verdient zijn #2 positie als beste Belgische alternatief. De kwaliteit van de ingrediënten en de klantenservice zijn uitstekend. De hogere prijs is het voornaamste struikelblok.',
    },
    ranking: 2,
    score: { totaal: 8.1, smaak: 8.6, prijsKwaliteit: 7.2, flexibiliteit: 8.0, duurzaamheid: 8.5, gemak: 8.0 },
    prijsPerPortie: 9.50,
    prijsPopulaireBox: 50.60,
    receptenPerWeek: 40,
    gratisBezorging: true,
    minPersonen: 1,
    maxPersonen: 5,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: true,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.foodbag.be',
kenmerken: ['🇧🇪 Lokale ingrediënten', '✓ Gratis bezorging', '✓ 5 kookstijlen', '✓ Zonder abonnement', '🔀 Voorheen ook Smartmat & 15gram'],    pros: ['100% Belgische en lokale ingrediënten', 'Uitstekende smaakscores', 'Eigen bezorgers', '5 kookstijlen incl. Sana (Sandra Bekkari)', 'Geen verplicht abonnement'],
    cons: ['Hogere prijs dan internationale alternatieven', 'Beperktere bezorgdagen dan HelloFresh', 'Minder geschikt voor strikte budgetkijkers'],
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch', 'bio'],
  },
  {
    slug: 'marley-spoon',
    naam: 'Marley Spoon',
    logo: '/logos/marley-spoon.png',
    tagline: 'Chef-kwaliteit recepten voor kookliefhebbers',
    beschrijving: 'Marley Spoon onderscheidt zich met creatieve chef-recepten en een groot aanbod van 40 gerechten per week. De prijs per portie varieert van €5,59 tot €9,69 afhankelijk van je plan. Bezorgt in Vlaanderen en Brussel met gratis verzending.',
    uitgebreideReview: {
      intro: 'Marley Spoon is de keuze voor wie koken als een beleving ziet. Met 40 recepten per week — het grootste aanbod van alle maaltijdboxen in België — en een focus op culinaire creativiteit richt Marley Spoon zich op de echte kookliefhebber.',
      testervaring: 'Tijdens onze test vielen de recepten op door hun originaliteit en smaakdiepte. Recepten kosten gemiddeld 45-60 minuten — Marley Spoon mikt op mensen die van koken genieten. De ingrediënten zijn vers en kwalitatief. Minpunt: Marley Spoon bezorgt momenteel enkel in Vlaanderen en Brussel, niet in Wallonië.',
      voorWie: 'Marley Spoon is de beste keuze voor koppels of alleenstaanden die van koken houden en de tijd nemen voor een uitgebreidere bereiding.',
      hoeWerktHet: 'Bestellen via marleyspoon.be of de app. Box voor 2 of 4 personen, 2-5 maaltijden per week. Bezorging in Vlaanderen en Brussel, gratis. Wekelijks pauzeren of opzeggen mogelijk.',
      vergelijking: 'Marley Spoon zit qua prijs in dezelfde categorie als Foodbag maar biedt meer receptkeuze (40 vs 30). Ten opzichte van HelloFresh zijn de recepten creatiever maar iets duurder.',
      eindoordeel: 'Marley Spoon verdient zijn #3 positie als beste keuze voor kookliefhebbers. Enkel de beperkte bezorging (geen Wallonië) en de hogere standaardprijs zijn minpunten.',
    },
    ranking: 3,
    score: { totaal: 7.9, smaak: 8.6, prijsKwaliteit: 7.2, flexibiliteit: 8.0, duurzaamheid: 7.5, gemak: 7.2 },
    prijsPerPortie: 5.59,
    prijsPopulaireBox: 46.74,
    receptenPerWeek: 40,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: false,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.marleyspoon.be',
    kortingsCode: {
      code: '',
      bedrag: '50% op eerste bestelling',
      beschrijving: 'Automatisch via onze link. 50% korting op je eerste box. Geldig voor nieuwe klanten in België.',
    },
    kenmerken: ['✓ 40 recepten/week', '✓ Chef-kwaliteit', '✓ Gratis bezorging', '🌱 Vegan opties'],
    pros: ['Meeste receptkeuze (40/week)', 'Hoogste smaakscore', 'Creatieve chef-recepten', 'Gratis bezorging'],
    cons: ['Enkel Vlaanderen en Brussel (geen Wallonië)', 'Hogere prijs per portie', 'Recepten kosten meer tijd (45-60 min)'],
    geschiktVoor: ['koppel', 'vegetarisch'],
  },
  {
    slug: 'ekomenu',
    naam: 'Ekomenu',
    logo: '/logos/ekomenu.png',
    tagline: '100% biologisch — de groenste keuze in België',
    beschrijving: 'Ekomenu is de meest duurzame maaltijdbox in België. Alle ingrediënten zijn biologisch gecertificeerd, verpakking is milieuvriendelijk, en je kan je persoonlijke CO2-footprint bijhouden.',
    uitgebreideReview: {
      intro: 'Ekomenu is de absolute keuze voor wie bewust en biologisch wil eten. Met 35 recepten per week, 100% biologische ingrediënten en een unieke CO2-footprint tracker per bestelling gaat Ekomenu verder dan welke andere maaltijdbox dan ook op het vlak van duurzaamheid.',
      testervaring: 'Tijdens onze test vielen de grote hoeveelheden groenten op — Ekomenu daagt je via de "Groenteteller" uit om 2100g groenten per week te eten. De recepten zijn gezond en gevarieerd, met opties voor vegetarisch, vegan, glutenvrij en koolhydraatarm. Bereidingstijd: 30-45 minuten.',
      voorWie: 'Ekomenu is de beste keuze voor milieubewuste consumenten, vegetariërs en vegans. Ook ideaal voor mensen met voedselallergieën dankzij de uitgebreide filteropties.',
      hoeWerktHet: 'Bestellen via ekomenu.be. Kies je menu en het aantal personen. 35 recepten per week om uit te kiezen. Bezorging gratis, in heel België. Abonnement wekelijks aanpasbaar.',
      vergelijking: 'Ekomenu is de enige maaltijdbox in België met 100% biologische ingrediënten. Ten opzichte van Cirkle biedt Ekomenu meer receptkeuze. Ten opzichte van HelloFresh is het duurder maar ook significant duurzamer.',
      eindoordeel: 'Ekomenu is de beste keuze als duurzaamheid en gezondheid je prioriteiten zijn. De biologische kwaliteit en de brede keuze aan dieetopties zijn uniek.',
    },
    ranking: 4,
    score: { totaal: 7.6, smaak: 7.5, prijsKwaliteit: 6.8, flexibiliteit: 7.5, duurzaamheid: 9.5, gemak: 7.0 },
    prijsPerPortie: 7.00,
    prijsPopulaireBox: 42.00,
    receptenPerWeek: 35,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: false,
    vegetarisch: true,
    bio: true,
    affiliateUrl: 'https://www.ekomenu.be',
    kenmerken: ['🌿 100% Biologisch', '✓ CO2-tracker', '✓ 35 recepten/week', '♻️ Eco-verpakking'],
    pros: ['Enige 100% biologische maaltijdbox in België', 'Unieke CO2-footprint tracker', 'Brede keuze voor vegetariërs en vegans', 'Milieuvriendelijke verpakking'],
    cons: ['Hogere prijs dan HelloFresh', 'Niet volledig Belgisch (Nederlandse roots)', 'Minder culinair avontuurlijk'],
    geschiktVoor: ['koppel', 'vegetarisch', 'bio'],
  },
  {
    slug: 'delhaize-click-cook',
    naam: 'Delhaize Click&Cook',
    logo: '/logos/delhaize.png',
    tagline: 'Supermarktkwaliteit zonder abonnement',
    beschrijving: 'Delhaize Click&Cook is de maaltijdbox van de bekende Belgische supermarktketen. Geen verplicht abonnement, vertrouwde Delhaize-kwaliteit en combineerbaar met je gewone boodschappen.',
    uitgebreideReview: {
      intro: 'Delhaize Click&Cook is de instap in de wereld van maaltijdboxen via een vertrouwd Belgisch merk. Geen abonnement nodig, geen risico — gewoon een maaltijdbox proberen via de website die je al kent.',
      testervaring: 'De Delhaize Click&Cook box biedt minder variatie dan de gespecialiseerde maaltijdboxen (8 recepten/week), maar de kwaliteit is zoals je van Delhaize gewend bent: betrouwbaar en consistent. Minpunt: bezorgkosten van €4,95.',
      voorWie: 'Delhaize Click&Cook is ideaal voor wie voorzichtig wil kennismaken met maaltijdboxen zonder abonnement. Ook handig als je tegelijk je reguliere Delhaize-boodschappen bestelt.',
      hoeWerktHet: 'Bestellen via delhaize.be als onderdeel van je gewone online boodschappen. Geen abonnement nodig. Bezorgkosten €4,95. Bezorging in heel België.',
      vergelijking: 'Ten opzichte van HelloFresh is Delhaize Click&Cook goedkoper per portie maar biedt het veel minder keuze. Het grote voordeel: geen abonnement.',
      eindoordeel: 'Delhaize Click&Cook is een goede opstap voor beginners. Voor regelmatig gebruik zijn de beperkte keuze en de bezorgkosten een nadeel.',
    },
    ranking: 5,
    score: { totaal: 7.0, smaak: 7.2, prijsKwaliteit: 7.5, flexibiliteit: 6.5, duurzaamheid: 6.5, gemak: 7.0 },
    prijsPerPortie: 5.20,
    prijsPopulaireBox: 31.20,
    receptenPerWeek: 8,
    gratisBezorging: false,
    bezorgkosten: 4.95,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: 'Geen abonnement',
    belgisch: true,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.delhaize.be',
    kenmerken: ['🇧🇪 Belgisch', '✓ Geen abonnement', '💰 Voordelig', '🛒 Delhaize-kwaliteit'],
    pros: ['Geen verplicht abonnement', 'Vertrouwd Delhaize-merk', 'Combineerbaar met gewone boodschappen'],
    cons: ['Bezorgkosten €4,95', 'Beperkte receptkeuze (8/week)', 'Minder culinaire variatie'],
    geschiktVoor: ['budget', 'gezin'],
  },
  {
    slug: 'carrefour-simply-you',
    naam: 'Carrefour Simply You',
    logo: '🏪',
    tagline: 'De absolute budgetkeuze aan €4,90 per portie',
    beschrijving: 'Carrefour Simply You is de goedkoopste maaltijdbox van België. Eenvoudige recepten van de bekende supermarkt, zonder abonnement, voor wie budgetvriendelijk wil koken.',
    uitgebreideReview: {
      intro: 'Carrefour Simply You is de no-nonsense keuze voor de budgetbewuste koker. Met €4,90 per portie is het de goedkoopste maaltijdbox van België.',
      testervaring: 'De Simply You box doet wat het belooft: eenvoudige, betaalbare maaltijden. De recepten zijn basic maar smaken prima. Bereidingstijd: 25-35 minuten. Bezorgkosten van €5,95 zijn een minpunt.',
      voorWie: 'Carrefour Simply You is de beste keuze voor studenten en gezinnen met een strak budget. Ideaal als eerste kennismaking met maaltijdboxen.',
      hoeWerktHet: 'Bestellen via carrefour.be. Geen abonnement, eenmalig bestellen. Bezorgkosten €5,95. Bezorging in Vlaanderen en Brussel.',
      vergelijking: 'Carrefour Simply You is de goedkoopste optie. Ten opzichte van HelloFresh met korting kan HelloFresh in de eerste weken zelfs goedkoper uitvallen.',
      eindoordeel: 'Carrefour Simply You is de beste keuze als budget de absolute prioriteit is. Voor meer variatie raden we HelloFresh aan.',
    },
    ranking: 6,
    score: { totaal: 6.8, smaak: 6.5, prijsKwaliteit: 7.8, flexibiliteit: 6.0, duurzaamheid: 6.0, gemak: 7.5 },
    prijsPerPortie: 4.90,
    prijsPopulaireBox: 29.40,
    receptenPerWeek: 6,
    gratisBezorging: false,
    bezorgkosten: 5.95,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: 'Geen abonnement',
    belgisch: true,
    vegetarisch: false,
    bio: false,
    affiliateUrl: 'https://www.carrefour.be',
    kenmerken: ['💰 Goedkoopste optie', '🇧🇪 Belgisch', '✓ Geen abonnement'],
    pros: ['Goedkoopste prijs per portie (€4,90)', 'Geen abonnement', 'Eenvoudig te bestellen'],
    cons: ['Bezorgkosten €5,95', 'Beperkte keuze (6 recepten/week)', 'Enkel Vlaanderen en Brussel'],
    geschiktVoor: ['budget'],
  },
  {
    slug: 'cirkle',
    naam: 'Cirkle',
    logo: '♻️',
    tagline: 'Zero waste Belgische box met herbruikbare verpakking',
    beschrijving: 'Cirkle is de meest innovatieve duurzame maaltijdbox van België. Met 100% herbruikbare verpakkingen, biologische ingrediënten en een circulair retourmodel is het de groenste keuze voor milieubewuste Belgen.',
    uitgebreideReview: {
      intro: 'Cirkle is een jonge Belgische maaltijdbox met een radicaal duurzame aanpak: alle verpakkingen zijn herbruikbaar en worden bij de volgende levering teruggenomen.',
      testervaring: 'Het Cirkle-systeem werkt verrassend goed: bij levering geef je de lege verpakkingen terug. De biologische ingrediënten zijn van goede kwaliteit. De recepten zijn lekker maar minder gevarieerd (10/week). Beschikbaarheid beperkt tot Vlaanderen.',
      voorWie: 'Cirkle is de keuze voor wie zero waste serieus neemt. Ideaal voor milieubewuste koppels in Vlaanderen.',
      hoeWerktHet: 'Bestellen via cirkle.be. Abonnement met wekelijkse of tweewekelijkse levering. Bij elke levering geef je de verpakkingen terug. Enkel beschikbaar in Vlaanderen.',
      vergelijking: 'Cirkle onderscheidt zich van Ekomenu door het herbruikbare verpakkingssysteem. Ten opzichte van HelloFresh is het duurder maar veel duurzamer.',
      eindoordeel: 'Cirkle is een inspirerende pionier in duurzame maaltijdboxen. Als duurzaamheid je topprioriteit is en je in Vlaanderen woont: absolute aanrader.',
    },
    ranking: 7,
    score: { totaal: 7.2, smaak: 7.4, prijsKwaliteit: 6.2, flexibiliteit: 6.5, duurzaamheid: 9.8, gemak: 6.5 },
    prijsPerPortie: 6.80,
    prijsPopulaireBox: 40.80,
    receptenPerWeek: 10,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: true,
    vegetarisch: true,
    bio: true,
    affiliateUrl: 'https://www.cirkle.be',
    kenmerken: ['♻️ Zero waste', '🇧🇪 Belgisch', '🌿 Biologisch', '✓ Herbruikbare verpakking'],
    pros: ['100% herbruikbare verpakkingen — uniek in België', 'Biologische ingrediënten', 'Circulair retourmodel', '100% Belgisch'],
    cons: ['Beperkte beschikbaarheid (enkel Vlaanderen)', 'Duurder dan HelloFresh', 'Minder receptvariatie (10/week)'],
    geschiktVoor: ['bio', 'vegetarisch', 'koppel'],
  },
];

export function getAanbieder(slug: string): Aanbieder | undefined {
  return aanbieders.find(a => a.slug === slug);
}

export function getTopAanbieders(n: number): Aanbieder[] {
  return aanbieders.slice(0, n);
}

export function getAanbiedersByFilter(filter: string): Aanbieder[] {
  if (filter === 'alle') return aanbieders;
  return aanbieders.filter(a => a.geschiktVoor.includes(filter));
}
