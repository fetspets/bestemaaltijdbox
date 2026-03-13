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
    logo: '🌿',
    tagline: 'Meest populaire maaltijdbox ter wereld',
    beschrijving: 'HelloFresh biedt het beste evenwicht van prijs, keuze en gemak. Met 26+ recepten per week, gratis bezorging en een makkelijk opzegbaar abonnement is het ideaal voor zowel koppels als gezinnen.',
    ranking: 1,
    score: { totaal: 8.4, smaak: 8.2, prijsKwaliteit: 8.5, flexibiliteit: 9.0, duurzaamheid: 6.8, gemak: 9.0 },
    prijsPerPortie: 5.50,
    receptenPerWeek: 26,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: '1 week',
    belgisch: false,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.hellofresh.be',
    kortingsCode: { code: 'BELGIE40', bedrag: '€40 korting', beschrijving: '€40 korting op de eerste 3 weken' },
    kenmerken: ['✓ Gratis bezorging', '✓ Direct opzegbaar', '✓ Vegetarisch aanbod', '✓ Grote keuze'],
    pros: ['Enorme receptvariatie (26+ per week)', 'Gratis bezorging in heel België', 'Flexibel pauzeren en opzeggen', 'App is zeer gebruiksvriendelijk'],
    cons: ['Niet 100% Belgische producten', 'Duurzaamheidsscore lager dan Belgische alternatieven'],
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch'],
  },
  {
    slug: 'foodbag',
    naam: 'Foodbag',
    logo: '🥦',
    tagline: '100% Belgisch met lokale seizoensproducten',
    beschrijving: 'Foodbag is hét Belgische alternatief voor HelloFresh. Met lokale producten van Belgische boeren en seizoensgebonden recepten is het de beste keuze als je bewust lokaal wil consumeren.',
    ranking: 2,
    score: { totaal: 8.1, smaak: 8.4, prijsKwaliteit: 7.8, flexibiliteit: 8.0, duurzaamheid: 8.5, gemak: 8.0 },
    prijsPerPortie: 6.50,
    receptenPerWeek: 18,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 5,
    opzegTermijn: '1 week',
    belgisch: true,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.foodbag.be',
    kortingsCode: { code: 'FOODBAG25', bedrag: '€25 korting', beschrijving: '€25 korting op je eerste bestelling' },
    kenmerken: ['🇧🇪 Lokale producten', '✓ Gratis bezorging', '🌿 Seizoensgebonden', '✓ Belgische boeren'],
    pros: ['100% Belgische en lokale producten', 'Uitstekende smaakscores', 'Zeer duurzaam alternatief'],
    cons: ['Iets duurder dan HelloFresh', 'Minder receptkeuze per week'],
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch', 'bio'],
  },
  {
    slug: 'marley-spoon',
    naam: 'Marley Spoon',
    logo: '🌍',
    tagline: 'Chef-kwaliteit recepten aan huis',
    beschrijving: 'Marley Spoon biedt de hoogste receptkwaliteit van alle maaltijdboxen in België. Gecreëerd met topchefs en CO₂-neutraal gecertificeerd — ideaal voor kookliefhebbers.',
    ranking: 3,
    score: { totaal: 7.9, smaak: 8.6, prijsKwaliteit: 7.5, flexibiliteit: 8.0, duurzaamheid: 8.0, gemak: 7.5 },
    prijsPerPortie: 6.00,
    receptenPerWeek: 22,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: '1 week',
    belgisch: false,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.marleyspoon.be',
    kortingsCode: { code: 'MARLEY30', bedrag: '€30 korting', beschrijving: '€30 korting op de eerste 2 weken' },
    kenmerken: ['♻️ CO₂-neutraal', '✓ Chef-recepten', '✓ Gratis bezorging', '🌱 Vegan opties'],
    pros: ['Hoogste smaakscore van alle boxen', 'CO₂-neutraal gecertificeerd', 'Creatieve chef-recepten'],
    cons: ['Iets hogere prijs per portie', 'Minder geschikt voor beginners'],
    geschiktVoor: ['koppel', 'vegetarisch', 'bio'],
  },
  {
    slug: '15gram',
    naam: '15gram',
    logo: '👨‍🍳',
    tagline: 'Premium Belgische box van sterrenchefs',
    beschrijving: '15gram is de meest premium Belgische maaltijdbox met recepten van Belgische sterrenchefs. Ideaal voor wie van koken een beleving wil maken.',
    ranking: 4,
    score: { totaal: 7.8, smaak: 9.0, prijsKwaliteit: 6.5, flexibiliteit: 7.0, duurzaamheid: 7.5, gemak: 7.0 },
    prijsPerPortie: 7.50,
    receptenPerWeek: 10,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: '1 week',
    belgisch: true,
    vegetarisch: false,
    bio: false,
    affiliateUrl: 'https://www.15gram.be',
    kenmerken: ['🇧🇪 Belgische sterrenchefs', '✓ Premium ingrediënten', '✓ Gratis bezorging'],
    pros: ['Hoogste smaakbeleving', 'Recepten van echte sterrenchefs', '100% Belgisch'],
    cons: ['Duurste optie', 'Minder keuze per week', 'Niet voor snel koken'],
    geschiktVoor: ['koppel'],
  },
  {
    slug: 'ekomenu',
    naam: 'Ekomenu',
    logo: '🌱',
    tagline: '100% biologisch en duurzaam',
    beschrijving: 'Ekomenu is de groenste keuze voor bewuste consumenten. Alle ingrediënten zijn biologisch gecertificeerd en de verpakking is volledig composteerbaar.',
    ranking: 5,
    score: { totaal: 7.6, smaak: 7.5, prijsKwaliteit: 6.8, flexibiliteit: 7.5, duurzaamheid: 9.5, gemak: 7.0 },
    prijsPerPortie: 7.00,
    receptenPerWeek: 12,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: '1 week',
    belgisch: false,
    vegetarisch: true,
    bio: true,
    affiliateUrl: 'https://www.ekomenu.be',
    kenmerken: ['🌿 100% Biologisch', '♻️ Composteerbaar', '✓ Vegan opties', '✓ Gratis bezorging'],
    pros: ['Hoogste duurzaamheidsscore (9.5)', 'Volledig biologisch gecertificeerd', 'Composteerbare verpakking'],
    cons: ['Hogere prijs', 'Minder receptvariatie'],
    geschiktVoor: ['koppel', 'vegetarisch', 'bio'],
  },
  {
    slug: 'smartmat',
    naam: 'Smartmat',
    logo: '⚡',
    tagline: 'Klaar in 20 minuten voor drukke gezinnen',
    beschrijving: 'Smartmat richt zich op snelheid en gemak voor drukke gezinnen. Alle recepten zijn klaar in 20 minuten, met eenvoudige instructies en minder afwas.',
    ranking: 6,
    score: { totaal: 7.3, smaak: 7.0, prijsKwaliteit: 7.8, flexibiliteit: 7.0, duurzaamheid: 6.5, gemak: 9.0 },
    prijsPerPortie: 5.80,
    receptenPerWeek: 15,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 5,
    opzegTermijn: '1 week',
    belgisch: false,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.smartmat.be',
    kenmerken: ['⚡ Klaar in 20 min', '✓ Gezinsvriendelijk', '✓ Gratis bezorging'],
    pros: ['Snelste bereiding (20 min)', 'Gezinsvriendelijke porties', 'Goede prijs-kwaliteit'],
    cons: ['Minder culinaire variatie', 'Lagere smaakscore'],
    geschiktVoor: ['gezin', 'budget'],
  },
  {
    slug: 'delhaize-click-cook',
    naam: 'Delhaize Click&Cook',
    logo: '🛒',
    tagline: 'Supermarktkwaliteit rechtstreeks aan huis',
    beschrijving: 'Delhaize Click&Cook biedt de vertrouwde Delhaize-kwaliteit in een handige maaltijdbox. Ideaal voor wie de Delhaize-producten vertrouwt en flexibel wil bestellen.',
    ranking: 7,
    score: { totaal: 7.0, smaak: 7.2, prijsKwaliteit: 7.8, flexibiliteit: 6.5, duurzaamheid: 6.5, gemak: 7.0 },
    prijsPerPortie: 5.20,
    receptenPerWeek: 8,
    gratisBezorging: false,
    bezorgkosten: 4.95,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: 'geen abonnement',
    belgisch: true,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.delhaize.be',
    kenmerken: ['🇧🇪 Belgisch', '💰 Voordeligst', '✓ Geen abonnement'],
    pros: ['Geen abonnement nodig', 'Vertrouwd Delhaize-merk', 'Betaalbare prijs'],
    cons: ['Bezorgkosten €4,95', 'Beperkte receptkeuze'],
    geschiktVoor: ['budget', 'gezin'],
  },
  {
    slug: 'carrefour-simply-you',
    naam: 'Carrefour Simply You',
    logo: '🏪',
    tagline: 'De goedkoopste maaltijdbox van België',
    beschrijving: 'Carrefour Simply You is de goedkoopste maaltijdbox in België aan €4,90 per portie. Eenvoudige recepten voor wie budgetvriendelijk wil koken.',
    ranking: 8,
    score: { totaal: 6.8, smaak: 6.5, prijsKwaliteit: 8.0, flexibiliteit: 6.0, duurzaamheid: 6.0, gemak: 7.5 },
    prijsPerPortie: 4.90,
    receptenPerWeek: 6,
    gratisBezorging: false,
    bezorgkosten: 5.95,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: 'geen abonnement',
    belgisch: true,
    vegetarisch: false,
    bio: false,
    affiliateUrl: 'https://www.carrefour.be',
    kenmerken: ['💰 Goedkoopste optie', '🇧🇪 Belgisch', '✓ Geen abonnement'],
    pros: ['Goedkoopste prijs per portie', 'Geen abonnement', 'Eenvoudig te bestellen'],
    cons: ['Beperkte keuze', 'Bezorgkosten', 'Lagere smaakscore'],
    geschiktVoor: ['budget'],
  },
  {
    slug: 'cirkle',
    naam: 'Cirkle',
    logo: '♻️',
    tagline: 'Zero waste met circulaire verpakkingen',
    beschrijving: 'Cirkle is een jonge Belgische maaltijdbox die inzet op circulaire, herbruikbare verpakkingen en biologische ingrediënten. Pionier in duurzaam bezorgen.',
    ranking: 9,
    score: { totaal: 7.2, smaak: 7.4, prijsKwaliteit: 6.5, flexibiliteit: 7.0, duurzaamheid: 9.0, gemak: 6.5 },
    prijsPerPortie: 6.80,
    receptenPerWeek: 10,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: '1 week',
    belgisch: true,
    vegetarisch: true,
    bio: true,
    affiliateUrl: 'https://www.cirkle.be',
    kenmerken: ['♻️ Zero waste', '🇧🇪 Belgisch', '🌿 Biologisch', '✓ Herbruikbare verpakking'],
    pros: ['Circulaire herbruikbare verpakkingen', 'Biologische ingrediënten', '100% Belgisch'],
    cons: ['Hogere prijs', 'Beperkte beschikbaarheid', 'Klein receptenaanbod'],
    geschiktVoor: ['bio', 'vegetarisch'],
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
