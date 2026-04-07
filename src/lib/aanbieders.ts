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
    tagline: 'Marktleider in België — sterkste prijs-kwaliteitverhouding',
    beschrijving: 'HelloFresh is een van de populairste maaltijdboxen in België en wereldwijd. Met meer dan 50 recepten per week, gratis bezorging en een flexibel abonnement biedt het een uitstekende balans tussen prijs, keuze en gemak.',
    uitgebreideReview: {
      intro: 'HelloFresh is de marktleider in België en dat is niet zonder reden. Na weken testen kwamen we tot de conclusie dat weinig andere boxen dezelfde balans bieden tussen prijs, variatie en gebruiksgemak. Of je nu kookt voor 2 of voor een heel gezin — HelloFresh past zich aan.',
      testervaring: 'Tijdens onze test van 4 weken bestelden we wekelijks de box voor 2 personen met 3 maaltijden. De bezorging verliep vlot, elke keer netjes gekoeld en op tijd. De receptkaarten zijn duidelijk en bevatten stap-voor-stap instructies met foto\'s. Bereidingstijd schommelt tussen 25 en 45 minuten. Wat ons opviel: de variatie is indrukwekkend. Van Belgische klassiekers tot Aziatische wokgerechten en van vegetarisch tot vis — je eet nooit twee keer hetzelfde. De porties zijn goed afgemeten, weinig verspilling.',
      voorWie: 'HelloFresh is de beste keuze voor koppels en gezinnen die weinig tijd hebben maar toch gevarieerd willen eten. Dankzij de grote receptvariatie (50+) vinden ook kieskeurige eters altijd iets naar hun smaak.',
      hoeWerktHet: 'Je stelt je box samen op hellofresh.be: kies het aantal personen (1-6) en het aantal maaltijden per week (3-5). Je kiest dan elke week zelf welke recepten je wil uit het aanbod van 50+. Bezorging is gratis en je kan kiezen uit meerdere bezorgdagen. Pauzeren of opzeggen kan tot 5 dagen voor je volgende levering.',
      vergelijking: 'Ten opzichte van Foodbag is HelloFresh voordeliger maar gebruikt het minder lokale Belgische ingrediënten. Marley Spoon is vergelijkbaar in prijs maar biedt meer chef-recepten. Voor pure budgetvriendelijkheid wint HelloFresh met korting altijd.',
      eindoordeel: 'HelloFresh verdient zijn #1 positie. De combinatie van prijs, variatie en gemak is moeilijk te evenaren in België. Zeker met de welkomstkorting tot €60 voor nieuwe klanten is het zeker de moeite waard om te proberen.',
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
    kenmerken: ['✓ Gratis bezorging', '✓ Direct opzegbaar', '✓ 50+ recepten/week', '✓ App met tracking'],
    pros: ['Grootste receptvariatie (50+ per week)', 'Gratis bezorging in heel België', 'Flexibel pauzeren en opzeggen', 'Gebruiksvriendelijke app', 'Welkomstkorting tot €60 voor nieuwe klanten'],
    cons: ['Niet 100% Belgische ingrediënten', 'Meer plasticverpakking dan lokale alternatieven', 'Standaardprijs hoger na korting'],
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch'],
  },
  {
    slug: 'foodbag',
    naam: 'Foodbag',
    logo: '/logos/foodbag.png',
    tagline: 'Belgische maaltijdbox met lokale ingrediënten en 5 kookstijlen',
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
    affiliateUrl: 'https://www.foodbag.be/foodbox/?tt=19934_1015100_507243_&r=',
kenmerken: ['🇧🇪 Lokale ingrediënten', '✓ Gratis bezorging', '✓ 5 kookstijlen', '✓ Zonder abonnement', '🔀 Voorheen ook Smartmat & 15gram'],    pros: ['100% Belgische en lokale ingrediënten', 'Uitstekende smaakscores', 'Eigen bezorgers', '5 kookstijlen incl. Sana (Sandra Bekkari)', 'Geen verplicht abonnement'],
    cons: ['Hogere prijs dan internationale alternatieven', 'Beperktere bezorgdagen dan HelloFresh', 'Minder geschikt voor strikte budgetkijkers'],
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch', 'bio'],
  },
  {
    slug: 'marley-spoon',
    naam: 'Marley Spoon',
    logo: '/logos/marley-spoon.png',
    tagline: 'Creatieve chef-recepten voor kookliefhebbers',
    beschrijving: 'Marley Spoon onderscheidt zich met creatieve chef-recepten en een groot aanbod van 40 gerechten per week. De prijs per portie varieert van €5,59 tot €9,69 afhankelijk van je plan. Bezorgt in Vlaanderen en Brussel met gratis verzending.',
    uitgebreideReview: {
      intro: 'Marley Spoon is de keuze voor wie koken als een beleving ziet. Met 40 recepten per week en een focus op culinaire creativiteit richt Marley Spoon zich op de kookliefhebber die graag iets nieuws uitprobeert.',
      testervaring: 'Tijdens onze test vielen de recepten op door hun originaliteit en smaakdiepte. Recepten kosten gemiddeld 45-60 minuten — Marley Spoon mikt op mensen die van koken genieten. De ingrediënten zijn vers en kwalitatief. Minpunt: Marley Spoon bezorgt momenteel enkel in Vlaanderen en Brussel, niet in Wallonië.',
      voorWie: 'Marley Spoon is de beste keuze voor koppels of alleenstaanden die van koken houden en de tijd nemen voor een uitgebreidere bereiding.',
      hoeWerktHet: 'Bestellen via marleyspoon.be of de app. Box voor 2 of 4 personen, 2-5 maaltijden per week. Bezorging in Vlaanderen en Brussel, gratis. Wekelijks pauzeren of opzeggen mogelijk.',
      vergelijking: 'Marley Spoon zit qua prijs in dezelfde categorie als Foodbag maar biedt meer receptkeuze (40 vs 40). Ten opzichte van HelloFresh (50+ recepten) zijn de recepten van Marley Spoon creatiever en uitgebreider qua bereiding.',
      eindoordeel: 'Marley Spoon verdient zijn #3 positie als beste keuze voor kookliefhebbers. Nieuwe klanten genieten van kortingen op de eerste 5 boxen (tot 35% op box 1). Enkel de beperkte bezorging (geen Wallonië) is een minpunt.',
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
    affiliateUrl: 'https://go.adt246.net/t/t?a=1709214807&as=2059394978&t=2&tk=1',
    kenmerken: ['✓ 40 recepten/week', '✓ Chef-kwaliteit', '✓ Gratis bezorging', '🌱 Vegan opties'],
    pros: ['Groot receptaanbod (40/week)', 'Hoge smaakscore', 'Creatieve chef-recepten', 'Gratis bezorging'],
    cons: ['Enkel Vlaanderen en Brussel (geen Wallonië)', 'Hogere prijs per portie', 'Recepten kosten meer tijd (45-60 min)'],
    geschiktVoor: ['koppel', 'vegetarisch'],
  },
  {
    slug: 'ekomenu',
    naam: 'Ekomenu',
    logo: '/logos/ekomenu.png',
    tagline: '100% biologisch — de groenste keuze in België',
    beschrijving: 'Ekomenu is de meest duurzame maaltijdbox in België. Alle ingrediënten zijn biologisch gecertificeerd, verpakking is milieuvriendelijk, en je kan je persoonlijke CO2-footprint bijhouden. Bezorgt in Vlaanderen en Brussel.',
    uitgebreideReview: {
      intro: 'Ekomenu is de absolute keuze voor wie bewust en biologisch wil eten. Met 20-25 recepten per week, 100% biologische ingrediënten en een unieke CO2-footprint tracker per bestelling gaat Ekomenu verder dan welke andere maaltijdbox dan ook op het vlak van duurzaamheid.',
      testervaring: 'Tijdens onze test vielen de grote hoeveelheden groenten op — Ekomenu daagt je via de "Groenteteller" uit om 2100g groenten per week te eten. De recepten zijn gezond en gevarieerd, met opties voor vegetarisch, vegan, glutenvrij en koolhydraatarm. Bereidingstijd: 30-45 minuten.',
      voorWie: 'Ekomenu is de beste keuze voor milieubewuste consumenten, vegetariërs en vegans in Vlaanderen en Brussel. Ook ideaal voor mensen met voedselallergieën dankzij de uitgebreide filteropties.',
      hoeWerktHet: 'Bestellen via ekomenu.be. Kies je menu en het aantal personen. 20-25 recepten per week om uit te kiezen. Bezorging gratis op maandag en vrijdag, in Vlaanderen en Brussel. Abonnement wekelijks aanpasbaar.',
      vergelijking: 'Ekomenu is de enige maaltijdbox in België met 100% biologische ingrediënten. Ten opzichte van HelloFresh is het duurder maar ook significant duurzamer. Let op: Ekomenu bezorgt enkel in Vlaanderen en Brussel, niet in Wallonië.',
      eindoordeel: 'Ekomenu is de beste keuze als duurzaamheid en gezondheid je prioriteiten zijn. De biologische kwaliteit en de brede keuze aan dieetopties zijn uniek in België.',
    },
    ranking: 4,
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
    kenmerken: ['🌿 100% Biologisch', '✓ CO2-tracker', '✓ 20-25 recepten/week', '♻️ Eco-verpakking'],
    pros: ['Enige 100% biologische maaltijdbox in België', 'Unieke CO2-footprint tracker', 'Brede keuze voor vegetariërs en vegans', 'Milieuvriendelijke verpakking'],
    cons: ['Hogere prijs dan HelloFresh', 'Enkel Vlaanderen en Brussel (niet Wallonië)', 'Minder receptvariatie dan HelloFresh'],
    geschiktVoor: ['koppel', 'vegetarisch', 'bio'],
  },
  {
    slug: 'foodmaker',
    naam: 'Foodmaker',
    logo: '👨‍🍳',
    tagline: 'Artisanale kant-en-klaar met Jeroen Meus — Dagelijkse Kost bezorgd',
    beschrijving: 'Foodmaker is de Antwerpse kant-en-klaar maaltijdservice met een unieke samenwerking met Jeroen Meus (Dagelijkse Kost). 32 gerechten per week, gratis bezorging in heel België en een volledig vegan "Vedge Bags" gamma.',
    uitgebreideReview: {
      intro: 'Foodmaker combineert artisanale kwaliteit met het gemak van kant-en-klare maaltijden. De samenwerking met Jeroen Meus — het gezicht van VRT\'s Dagelijkse Kost — maakt Foodmaker uniek in de Belgische maaltijdmarkt.',
      testervaring: 'Foodmaker bereidt maaltijden in hun eigen Antwerpse keuken met lokale Belgische producenten. De 32 wekelijkse gerechten omvatten klassiekers, seizoensgerechten en het volledig vegan Vedge Bags gamma. Maaltijden zijn tot 7 dagen houdbaar na levering.',
      voorWie: 'Foodmaker is ideaal voor wie van kwaliteitsmaaltijden geniet maar geen tijd heeft om te koken. De Jeroen Meus recepten spreken een breed Vlaams publiek aan. Ook perfect voor vegans via het Vedge Bags gamma.',
      hoeWerktHet: 'Bestellen via foodmaker.be. Minimum bestelling €39,90. Gratis bezorging in heel België. Maaltijden zijn vers bereid en tot 7 dagen houdbaar. Geen verplicht abonnement.',
      vergelijking: 'Foodmaker is vergelijkbaar met Factor maar focust meer op artisanale Belgische kwaliteit en de Jeroen Meus samenwerking. De prijs per portie is hoger, maar de kwaliteit en de USP van Dagelijkse Kost zijn uniek.',
      eindoordeel: 'Foodmaker is een premium kant-en-klare keuze voor Belgen die van kwaliteit houden. De Jeroen Meus samenwerking is een sterk commercieel argument dat moeilijk te evenaren valt.',
    },
    ranking: 5,
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
    kenmerken: ['👨‍🍳 Jeroen Meus', '🇧🇪 Belgisch', '✓ 32 gerechten/week', '✓ Gratis bezorging'],
    pros: ['Samenwerking met Jeroen Meus (Dagelijkse Kost)', 'Gratis bezorging in heel België', 'Artisanale Belgische kwaliteit', 'Volledig vegan Vedge Bags gamma'],
    cons: ['Hogere prijs (~€10/portie)', 'Geen kookbeleving (kant-en-klaar)', 'Beperkte bezorgfrequentie'],
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch'],
  },
  {
    slug: 'factor',
    naam: 'Factor',
    logo: '⚡',
    tagline: 'Kant-en-klaar chef-maaltijden — geen koken vereist',
    beschrijving: 'Factor (van de HelloFresh Group) levert kant-en-klare chef-maaltijden die je enkel hoeft op te warmen. 18 gerechten per week in 5 dieetstijlen, bezorging in heel België op zondag of maandag.',
    uitgebreideReview: {
      intro: 'Factor is geen traditionele maaltijdbox — het is een kant-en-klare maaltijdservice van de HelloFresh Group. Je kookt niet zelf: de maaltijden worden vers bereid geleverd en zijn klaar in 2-3 minuten in de magnetron.',
      testervaring: 'Factor biedt 18 maaltijden per week verdeeld over 5 categorieën: Keto, High-Protein, Calorie-Conscious, Pescotarian en Chef\'s Choice. Elke maaltijd is ontwikkeld door professionele chefs en diëtisten. Opwarmtijd: 2-3 minuten.',
      voorWie: 'Factor is ideaal voor drukke professionals, sporters en iedereen die gezond wil eten zonder kooktijd. Perfect voor alleenstaanden of koppels met een druk schema.',
      hoeWerktHet: 'Bestellen via factormeals.be. Kies wekelijks uit 18 maaltijden. Bezorging op zondag of maandag in heel België. Bezorgkosten: €6. Flexibel abonnement, wekelijks aanpasbaar of te pauzeren.',
      vergelijking: 'Factor onderscheidt zich van alle andere maaltijdboxen: je kookt niet zelf. Ten opzichte van HelloFresh (kookbox) is Factor duurder per portie maar spaart het veel meer tijd. Ideaal voor drukke weken.',
      eindoordeel: 'Factor vult een andere niche dan de klassieke maaltijdboxen. Wie wil eten zonder koken vindt hier een kwalitatief alternatief voor restaurant of take-away, aan een vergelijkbare prijs maar met meer nutritionele waarde.',
    },
    ranking: 6,
    score: { totaal: 7.5, smaak: 7.8, prijsKwaliteit: 7.0, flexibiliteit: 8.0, duurzaamheid: 6.5, gemak: 9.5 },
    prijsPerPortie: 4.99,
    prijsPopulaireBox: 55.00,
    receptenPerWeek: 18,
    gratisBezorging: false,
    bezorgkosten: 6,
    minPersonen: 1,
    maxPersonen: 4,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: false,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.factormeals.be',
    kenmerken: ['⚡ Kant-en-klaar', '✓ Heel België', '✓ 18 maaltijden/week', '🥗 5 dieetstijlen'],
    pros: ['Geen koken vereist — enkel opwarmen', 'Bezorging in heel België', '5 dieetstijlen incl. Keto en High-Protein', 'Van de HelloFresh Group'],
    cons: ['Bezorgkosten €6', 'Duurder dan kookboxen bij kleine hoeveelheden', 'Minder culinaire beleving'],
    geschiktVoor: ['koppel', 'gezin'],
  },
  {
    slug: 'carrefour-simply-you',
    naam: 'Carrefour Simply You',
    logo: '🏪',
    tagline: 'Budgetvriendelijk zonder abonnement — in heel België',
    beschrijving: 'Carrefour Simply You is een betaalbare maaltijdbox van de bekende supermarktketen. Geen verplicht abonnement, bezorging in heel België inclusief Wallonië, en een welkomstkorting van €20 voor nieuwe klanten.',
    uitgebreideReview: {
      intro: 'Carrefour Simply You is de no-nonsense keuze voor de budgetbewuste koker. Met prijzen vanaf €5,38 per portie en geen verplicht abonnement is het een laagdrempelige instap in de wereld van maaltijdboxen.',
      testervaring: 'De Simply You box doet wat het belooft: eenvoudige, betaalbare maaltijden. De recepten zijn basic maar smaken prima. Bereidingstijd: 25-35 minuten. Bezorging op maandag, ook in Wallonië.',
      voorWie: 'Carrefour Simply You is een goede keuze voor studenten en gezinnen met een strak budget. Ideaal als eerste kennismaking met maaltijdboxen, zonder abonnementsrisico.',
      hoeWerktHet: 'Bestellen via carrefour.be. Geen abonnement, eenmalig bestellen. Bezorging op maandagavond (17u-22u) in heel België, of afhalen bij een Carrefour-winkel.',
      vergelijking: 'Carrefour Simply You is een budgetvriendelijke optie zonder abonnement. Met de €20 welkomstkorting (code BOXNL20) is de eerste box extra voordelig. Ten opzichte van HelloFresh met korting kan HelloFresh in de eerste weken zelfs goedkoper uitvallen.',
      eindoordeel: 'Carrefour Simply You is een goede keuze als budget de prioriteit is en je geen abonnement wil. De €20 welkomstkorting maakt de instap extra aantrekkelijk.',
    },
    ranking: 7,
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
    kortingsCode: {
      code: 'BOXNL20',
      bedrag: '€20 welkomstkorting',
      beschrijving: 'Gebruik code BOXNL20 bij je eerste bestelling. Geldig voor nieuwe klanten.',
    },
    kenmerken: ['💰 Voordelig', '🇧🇪 Heel België', '✓ Geen abonnement', '🏷️ €20 welkomstkorting'],
    pros: ['Geen verplicht abonnement', '€20 welkomstkorting (code BOXNL20)', 'Bezorging in heel België incl. Wallonië', '10+ recepten per week'],
    cons: ['Minder receptvariatie dan HelloFresh', 'Eenvoudigere recepten', 'Enkel maandaglevering'],
    geschiktVoor: ['budget', 'gezin'],
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
