export type Aanbieder = {
  slug: string;
  naam: string;
  tagline: string;
  logo: string;
  score: number;
  scores: {
    smaak: number;
    prijskwaliteit: number;
    flexibiliteit: number;
    duurzaamheid: number;
    gemak: number;
  };
  prijsPerPortie: number;
  aantalRecepten: number;
  minimumaantal: number; // maaltijden per week
  personenOpties: number[];
  bezorging: "gratis" | "betalend";
  bezorgkost?: number;
  opzegbaar: "direct" | "1 week" | "2 weken";
  belgisch: boolean;
  vegetarisch: boolean;
  vegan: boolean;
  biologisch: boolean;
  snel: boolean; // recepten onder 30 min
  tags: string[];
  pros: string[];
  cons: string[];
  kortingscode?: string;
  kortingBedrag?: string;
  affiliateUrl: string;
  beschrijving: string;
  uitgebreideReview: string;
  geschiktVoor: ("koppel" | "gezin" | "solo" | "vegetariers" | "budget" | "bio")[];
  ranking: number;
};

export const aanbieders: Aanbieder[] = [
  {
    slug: "hellofresh",
    naam: "HelloFresh",
    tagline: "Meest populaire maaltijdbox ter wereld",
    logo: "🌿",
    score: 8.4,
    scores: {
      smaak: 8.2,
      prijskwaliteit: 8.5,
      flexibiliteit: 9.0,
      duurzaamheid: 6.8,
      gemak: 9.0,
    },
    prijsPerPortie: 5.5,
    aantalRecepten: 26,
    minimumaantal: 2,
    personenOpties: [2, 4],
    bezorging: "gratis",
    opzegbaar: "1 week",
    belgisch: false,
    vegetarisch: true,
    vegan: false,
    biologisch: false,
    snel: true,
    tags: ["Populairste keuze", "Makkelijk opzegbaar", "Grote keuze"],
    pros: [
      "Grootste receptkeuze (26+ per week)",
      "Gratis bezorging",
      "Makkelijk te pauzeren of stoppen",
      "Uitstekende app",
      "Beste prijs-kwaliteitsverhouding",
    ],
    cons: [
      "Niet Belgisch",
      "Minder duurzaam dan lokale alternatieven",
      "Soms herhalende recepten",
    ],
    kortingscode: "BELGIE40",
    kortingBedrag: "€40 korting op eerste 3 weken",
    affiliateUrl: "https://www.hellofresh.be",
    beschrijving:
      "HelloFresh is de wereldmarktleider in maaltijdboxen en biedt het beste evenwicht van prijs, keuze en gemak. Met 26+ recepten per week en gratis bezorging is het ideaal voor zowel koppels als gezinnen.",
    uitgebreideReview:
      "Na vier weken testen is HelloFresh de beste keuze voor de meeste Belgen. De recepten zijn gevarieerd, de ingrediënten zijn vers en de porties zijn ruim. De bezorging verloopt altijd stipt en de verpakking is goed geïsoleerd. Wat HelloFresh onderscheidt is de uitstekende app waarmee je makkelijk recepten kiest, weken overslaat of het abonnement pauzeert. De klantenservice is snel en professioneel. Het grootste nadeel is dat HelloFresh geen Belgisch bedrijf is en minder inzet op lokale of biologische producten dan concurrenten zoals Foodbag of Ekomenu.",
    geschiktVoor: ["koppel", "gezin", "budget"],
    ranking: 1,
  },
  {
    slug: "foodbag",
    naam: "Foodbag",
    tagline: "100% Belgisch met lokale seizoensproducten",
    logo: "🥦",
    score: 8.1,
    scores: {
      smaak: 8.4,
      prijskwaliteit: 7.6,
      flexibiliteit: 8.2,
      duurzaamheid: 9.0,
      gemak: 8.0,
    },
    prijsPerPortie: 6.5,
    aantalRecepten: 18,
    minimumaantal: 2,
    personenOpties: [2, 4],
    bezorging: "gratis",
    opzegbaar: "1 week",
    belgisch: true,
    vegetarisch: true,
    vegan: false,
    biologisch: false,
    snel: false,
    tags: ["🇧🇪 100% Belgisch", "Lokale boeren", "Seizoensgebonden"],
    pros: [
      "100% Belgisch bedrijf",
      "Lokale en seizoensgebonden producten",
      "Uitstekende smaak",
      "Gratis bezorging",
      "Duurzamer dan internationale concurrenten",
    ],
    cons: [
      "Duurder dan HelloFresh",
      "Minder receptkeuze",
      "Recepten iets complexer",
    ],
    kortingscode: "FOODBAG25",
    kortingBedrag: "€25 korting op eerste bestelling",
    affiliateUrl: "https://www.foodbag.be",
    beschrijving:
      "Foodbag is hét Belgische alternatief voor HelloFresh. Met lokale producten van Belgische boeren en seizoensgebonden recepten is het de beste keuze als je bewust lokaal wil consumeren.",
    uitgebreideReview:
      "Foodbag is trots Belgisch en dat proef je. De ingrediënten komen van lokale Belgische boeren en variëren met de seizoenen. Dit zorgt voor een merkbaar betere smaak en een kleiner ecologisch voetafdruk. De recepten zijn iets complexer dan bij HelloFresh maar leveren ook meer voldoening op. Het grootste nadeel is de prijs — je betaalt €1 meer per portie dan bij HelloFresh. Voor wie bewust lokaal wil kopen en kwaliteit boven prijs stelt, is Foodbag de duidelijke winnaar.",
    geschiktVoor: ["koppel", "gezin", "bio"],
    ranking: 2,
  },
  {
    slug: "marley-spoon",
    naam: "Marley Spoon",
    tagline: "Chef-kwaliteit recepten aan huis",
    logo: "🌍",
    score: 7.9,
    scores: {
      smaak: 8.6,
      prijskwaliteit: 7.4,
      flexibiliteit: 8.0,
      duurzaamheid: 8.5,
      gemak: 7.5,
    },
    prijsPerPortie: 6.0,
    aantalRecepten: 22,
    minimumaantal: 2,
    personenOpties: [2, 4],
    bezorging: "gratis",
    opzegbaar: "1 week",
    belgisch: false,
    vegetarisch: true,
    vegan: true,
    biologisch: false,
    snel: false,
    tags: ["Chef-recepten", "CO₂-neutraal", "Premium kwaliteit"],
    pros: [
      "Beste receptkwaliteit van alle boxen",
      "CO₂-neutraal gecertificeerd",
      "Uitgebreide vegetarische en vegan opties",
      "Samenwerking met topchefs",
      "Gratis bezorging",
    ],
    cons: [
      "Recepten vragen meer tijd en kookvaardigheid",
      "Duurder dan HelloFresh",
      "Niet Belgisch",
    ],
    kortingscode: "MARLEY30",
    kortingBedrag: "30% korting op eerste 4 weken",
    affiliateUrl: "https://www.marleyspoon.be",
    beschrijving:
      "Marley Spoon biedt de hoogste receptkwaliteit van alle maaltijdboxen in België. Gecreëerd met topchefs en CO₂-neutraal gecertificeerd — ideaal voor kookliefhebbers.",
    uitgebreideReview:
      "Marley Spoon onderscheidt zich door de uitzonderlijke kwaliteit van de recepten. De ingrediënten zijn van topkwaliteit en de recepten zijn ontwikkeld door professionele chefs. Dit vertaalt zich in maaltijden die echt restaurantwaardig zijn. De keerzijde is dat je meer kookvaardigheid nodig hebt en dat de bereidingstijd langer is. Voor mensen die echt van koken houden en bereid zijn iets meer te betalen, is Marley Spoon de beste keuze.",
    geschiktVoor: ["koppel", "vegetariers"],
    ranking: 3,
  },
  {
    slug: "15gram",
    naam: "15gram",
    tagline: "Premium Belgische maaltijdbox van sterrenchefs",
    logo: "👨‍🍳",
    score: 7.8,
    scores: {
      smaak: 9.2,
      prijskwaliteit: 6.8,
      flexibiliteit: 7.0,
      duurzaamheid: 8.0,
      gemak: 6.5,
    },
    prijsPerPortie: 7.5,
    aantalRecepten: 10,
    minimumaantal: 2,
    personenOpties: [2, 4],
    bezorging: "gratis",
    opzegbaar: "1 week",
    belgisch: true,
    vegetarisch: true,
    vegan: false,
    biologisch: false,
    snel: false,
    tags: ["🇧🇪 Belgisch", "Sterrenchefs", "Premium"],
    pros: [
      "Recepten van Belgische sterrenchefs",
      "Absolute topkwaliteit ingrediënten",
      "Unieke en creatieve gerechten",
      "Geweldige smaak",
    ],
    cons: [
      "Duurste optie",
      "Kleinste receptkeuze",
      "Niet geschikt voor beginners",
      "Langere bereidingstijd",
    ],
    kortingscode: undefined,
    kortingBedrag: undefined,
    affiliateUrl: "https://www.15gram.be",
    beschrijving:
      "15gram is de meest premium Belgische maaltijdbox met recepten van Belgische sterrenchefs. Perfect als cadeau of voor speciale gelegenheden.",
    uitgebreideReview:
      "15gram is voor wie het allerbeste wil. De recepten zijn gecreëerd door Belgische sterrenchefs en de ingrediënten zijn van absolute topkwaliteit. Dit is geen alledaagse maaltijdbox — het is een culinaire ervaring. De prijs is navenant: €7,50 per portie is het duurste in ons overzicht. Maar voor een speciaal diner of als cadeau is 15gram ongeëvenaard. Minder geschikt als wekelijkse maaltijdoplossing vanwege de prijs en de complexe recepten.",
    geschiktVoor: ["koppel"],
    ranking: 4,
  },
  {
    slug: "ekomenu",
    naam: "Ekomenu",
    tagline: "100% biologisch en duurzaam",
    logo: "🌱",
    score: 7.6,
    scores: {
      smaak: 7.8,
      prijskwaliteit: 6.5,
      flexibiliteit: 7.5,
      duurzaamheid: 9.8,
      gemak: 7.0,
    },
    prijsPerPortie: 7.0,
    aantalRecepten: 12,
    minimumaantal: 2,
    personenOpties: [2, 4],
    bezorging: "gratis",
    opzegbaar: "direct",
    belgisch: false,
    vegetarisch: true,
    vegan: true,
    biologisch: true,
    snel: false,
    tags: ["🌿 100% Bio", "Vegan opties", "Duurzaamst"],
    pros: [
      "100% biologische ingrediënten",
      "Uitgebreide vegan opties",
      "Meest duurzame keuze",
      "Direct opzegbaar",
    ],
    cons: [
      "Duurder dan HelloFresh",
      "Kleinere receptkeuze",
      "Minder beschikbaar in heel België",
    ],
    kortingscode: undefined,
    kortingBedrag: undefined,
    affiliateUrl: "https://www.ekomenu.be",
    beschrijving:
      "Ekomenu is de groenste keuze voor bewuste consumenten. Met 100% biologische ingrediënten en uitgebreide vegan opties is het ideaal voor mensen die duurzaamheid centraal stellen.",
    uitgebreideReview:
      "Ekomenu is de absolute winnaar op het vlak van duurzaamheid. Alle ingrediënten zijn 100% biologisch gecertificeerd en het assortiment vegan recepten is het uitgebreidste van alle boxen die we testten. De smaak is uitstekend en de verpakking is volledig composteerbaar. Het nadeel is de hogere prijs en de beperktere beschikbaarheid in sommige delen van België.",
    geschiktVoor: ["koppel", "vegetariers", "bio"],
    ranking: 5,
  },
  {
    slug: "smartmat",
    naam: "Smartmat",
    tagline: "Slimme maaltijdbox voor drukke gezinnen",
    logo: "⚡",
    score: 7.3,
    scores: {
      smaak: 7.2,
      prijskwaliteit: 7.8,
      flexibiliteit: 8.5,
      duurzaamheid: 6.5,
      gemak: 9.2,
    },
    prijsPerPortie: 5.8,
    aantalRecepten: 15,
    minimumaantal: 3,
    personenOpties: [2, 3, 4, 5],
    bezorging: "gratis",
    opzegbaar: "direct",
    belgisch: false,
    vegetarisch: true,
    vegan: false,
    biologisch: false,
    snel: true,
    tags: ["Snelle recepten", "Grote gezinnen", "Flexibel"],
    pros: [
      "Recepten klaar in 20-25 minuten",
      "Geschikt voor grote gezinnen",
      "Zeer flexibel abonnement",
      "Goede prijs voor grotere gezinnen",
    ],
    cons: [
      "Minder creatieve recepten",
      "Minder premium ingrediënten",
    ],
    kortingscode: undefined,
    kortingBedrag: undefined,
    affiliateUrl: "https://www.smartmat.be",
    beschrijving:
      "Smartmat richt zich op snelheid en gemak voor drukke gezinnen. Recepten klaar in 20-25 minuten met een zeer flexibel abonnement.",
    uitgebreideReview:
      "Smartmat is de ideale keuze voor drukke ouders die snel een degelijke maaltijd op tafel willen zetten. De recepten zijn bewust eenvoudig gehouden zodat je ze in 20-25 minuten klaarmaakt. Dit gaat wel ten koste van de creativiteit en de ingrediëntenkwaliteit vergeleken met premium opties. Maar voor gezinnen met jonge kinderen is Smartmat vaak de meest praktische keuze.",
    geschiktVoor: ["gezin"],
    ranking: 6,
  },
  {
    slug: "delhaize-click-cook",
    naam: "Delhaize Click&Cook",
    tagline: "Belgische supermarktkwaliteit aan huis",
    logo: "🛒",
    score: 7.0,
    scores: {
      smaak: 7.0,
      prijskwaliteit: 8.0,
      flexibiliteit: 7.0,
      duurzaamheid: 7.0,
      gemak: 8.0,
    },
    prijsPerPortie: 5.2,
    aantalRecepten: 8,
    minimumaantal: 2,
    personenOpties: [2, 4],
    bezorging: "betalend",
    bezorgkost: 4.95,
    opzegbaar: "direct",
    belgisch: true,
    vegetarisch: true,
    vegan: false,
    biologisch: false,
    snel: true,
    tags: ["🇧🇪 Belgisch", "Goedkoopst", "Bekend merk"],
    pros: [
      "Goedkoopste optie",
      "Belgisch en vertrouwd merk",
      "Makkelijk te combineren met gewone Delhaize bestelling",
    ],
    cons: [
      "Kleinste receptkeuze",
      "Bezorging is betalend",
      "Minder verrassend qua recepten",
    ],
    kortingscode: undefined,
    kortingBedrag: undefined,
    affiliateUrl: "https://www.delhaize.be",
    beschrijving:
      "Delhaize Click&Cook is de voordeligste maaltijdbox in België, rechtstreeks van de bekende supermarkt. Ideaal als je al online bij Delhaize bestelt.",
    uitgebreideReview:
      "Delhaize Click&Cook is de meest betaalbare optie met €5,20 per portie. De ingrediënten zijn van supermarktkwaliteit — goed maar niet spectaculair. Het grootste voordeel is de integratie met de gewone Delhaize webshop: je kunt je maaltijdbox gewoon toevoegen aan je wekelijkse boodschappen. Het nadeel is dat je €4,95 bezorgkosten betaalt en de receptkeuze erg beperkt is.",
    geschiktVoor: ["budget", "gezin"],
    ranking: 7,
  },
  {
    slug: "carrefour-simply-you",
    naam: "Carrefour Simply You",
    tagline: "Eenvoudig en betaalbaar koken",
    logo: "🏪",
    score: 6.8,
    scores: {
      smaak: 6.8,
      prijskwaliteit: 7.8,
      flexibiliteit: 6.5,
      duurzaamheid: 6.0,
      gemak: 8.0,
    },
    prijsPerPortie: 4.9,
    aantalRecepten: 6,
    minimumaantal: 2,
    personenOpties: [2, 4],
    bezorging: "betalend",
    bezorgkost: 5.95,
    opzegbaar: "1 week",
    belgisch: true,
    vegetarisch: true,
    vegan: false,
    biologisch: false,
    snel: true,
    tags: ["Goedkoopste", "🇧🇪 Belgisch", "Eenvoudig"],
    pros: [
      "Absoluut goedkoopste optie (€4,90/portie)",
      "Eenvoudige en snelle recepten",
      "Belgisch supermarktmerk",
    ],
    cons: [
      "Minste receptkeuze (slechts 6)",
      "Bezorging betalend",
      "Weinig variatie",
      "Minder premium ingrediënten",
    ],
    kortingscode: undefined,
    kortingBedrag: undefined,
    affiliateUrl: "https://www.carrefour.be",
    beschrijving:
      "Carrefour Simply You is de goedkoopste maaltijdbox in België aan €4,90 per portie. Eenvoudig, snel en betaalbaar — ideaal voor budgetbewuste shoppers.",
    uitgebreideReview:
      "Carrefour Simply You is voor wie zo weinig mogelijk wil betalen. De prijs van €4,90 per portie is de laagste van alle boxen die we testten. De recepten zijn eenvoudig en snel klaar, maar bieden weinig verrassing of variatie. Voor iemand die gewoon een goedkope, degelijke maaltijd wil zonder veel poespas, is dit een redelijke keuze. Maar de beperkte keuze van slechts 6 recepten per week is een groot nadeel.",
    geschiktVoor: ["budget"],
    ranking: 8,
  },
  {
    slug: "cirkle",
    naam: "Cirkle",
    tagline: "Duurzame maaltijdbox met circulaire verpakkingen",
    logo: "♻️",
    score: 7.2,
    scores: {
      smaak: 7.4,
      prijskwaliteit: 7.0,
      flexibiliteit: 7.8,
      duurzaamheid: 9.5,
      gemak: 7.5,
    },
    prijsPerPortie: 6.8,
    aantalRecepten: 10,
    minimumaantal: 2,
    personenOpties: [2, 4],
    bezorging: "gratis",
    opzegbaar: "direct",
    belgisch: true,
    vegetarisch: true,
    vegan: true,
    biologisch: true,
    snel: false,
    tags: ["🇧🇪 Belgisch", "Circulaire verpakking", "Zero waste"],
    pros: [
      "Volledig circulaire en herbruikbare verpakkingen",
      "Biologische ingrediënten",
      "Belgisch bedrijf",
      "Zero waste concept",
      "Direct opzegbaar",
    ],
    cons: [
      "Duurder dan gemiddeld",
      "Kleinere receptkeuze",
      "Minder bekend dan grote spelers",
    ],
    kortingscode: undefined,
    kortingBedrag: undefined,
    affiliateUrl: "https://www.cirkle.be",
    beschrijving:
      "Cirkle is een jonge Belgische maaltijdbox die inzet op circulaire, herbruikbare verpakkingen en biologische ingrediënten. De meest innovatieve duurzame optie.",
    uitgebreideReview:
      "Cirkle is een verfrissende nieuwkomer die duurzaamheid naar het volgende niveau tilt. In tegenstelling tot andere 'groene' boxen gebruikt Cirkle volledig herbruikbare en circulaire verpakkingen die je teruggeeft bij de volgende levering. De ingrediënten zijn biologisch en lokaal. De smaak is goed en de recepten zijn creatief. De prijs is hoger dan gemiddeld, maar voor de meest milieubewuste consument is dit de beste keuze.",
    geschiktVoor: ["vegetariers", "bio"],
    ranking: 9,
  },
];

export const getAanbieder = (slug: string): Aanbieder | undefined =>
  aanbieders.find((a) => a.slug === slug);

export const getTopAanbieders = (n: number = 3): Aanbieder[] =>
  aanbieders.sort((a, b) => a.ranking - b.ranking).slice(0, n);

export const getAanbiedersByFilter = (
  filter: "koppel" | "gezin" | "solo" | "vegetariers" | "budget" | "bio"
): Aanbieder[] =>
  aanbieders
    .filter((a) => a.geschiktVoor.includes(filter))
    .sort((a, b) => a.ranking - b.ranking);
