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
    logo: '🌿',
    tagline: 'Marktleider met de beste prijs-kwaliteit',
    beschrijving: 'HelloFresh is de populairste maaltijdbox in België en wereldwijd. Met meer dan 30 recepten per week, gratis bezorging en een flexibel abonnement biedt het de beste balans tussen prijs, keuze en gemak.',
    uitgebreideReview: {
      intro: 'HelloFresh is de absolute marktleider in België en dat is niet zonder reden. Na weken testen kwamen we tot de conclusie dat geen enkele andere box zo\'n goede balans biedt tussen prijs, variatie en gebruiksgemak. Of je nu kookt voor 2 of voor een heel gezin — HelloFresh past zich aan.',
      testervaring: 'Tijdens onze test van 4 weken bestelden we wekelijks de box voor 2 personen met 3 maaltijden. De bezorging verliep vlot, elke keer netjes gekoeld en op tijd. De receptkaarten zijn duidelijk en bevatten stap-voor-stap instructies met foto\'s. Bereidingstijd schommelt tussen 25 en 45 minuten. Wat ons opviel: de variatie is indrukwekkend. Van Belgische klassiekers tot Aziatische wokgerechten en van vegetarisch tot vis — je eet nooit twee keer hetzelfde. De porties zijn goed afgemeten, weinig verspilling. Een minpuntje: sommige ingrediënten zijn verpakt in plastic, al werkt HelloFresh aan verbetering hiervan.',
      voorWie: 'HelloFresh is de beste keuze voor koppels en gezinnen die weinig tijd hebben maar toch gevarieerd willen eten. Dankzij de grote receptvariatie (30+) vinden ook kieskeurige eters altijd iets naar hun smaak. De snelle recepten (klaar in 20-25 min) zijn ideaal voor drukke doordeweekse avonden.',
      hoeWerktHet: 'Je stelt je box samen op hellofresh.be: kies het aantal personen (1-6) en het aantal maaltijden per week (3-5). Je kiest dan elke week zelf welke recepten je wil uit het aanbod van 30+. Bezorging is gratis en je kan kiezen uit meerdere bezorgdagen afhankelijk van je postcode. Pauzeren of opzeggen kan tot 5 dagen voor je volgende levering.',
      vergelijking: 'Ten opzichte van Foodbag is HelloFresh voordeliger (€5-8/portie vs €9,50 bij Foodbag) maar gebruikt het minder lokale Belgische ingrediënten. Marley Spoon is vergelijkbaar in prijs maar biedt meer chef-recepten. Voor pure budgetvriendelijkheid wint HelloFresh met korting altijd.',
      eindoordeel: 'HelloFresh verdient zijn #1 positie. De combinatie van prijs, variatie en gemak is ongeëvenaard in België. Zeker met de welkomstkorting van tot €90 is het een no-brainer om te proberen. Je zit nergens aan vast en kan na de eerste box al opzeggen.',
    },
    ranking: 1,
    score: { totaal: 8.4, smaak: 8.2, prijsKwaliteit: 8.5, flexibiliteit: 9.0, duurzaamheid: 6.8, gemak: 9.0 },
    prijsPerPortie: 5.50,
    prijsPopulaireBox: 47.99,
    receptenPerWeek: 30,
    gratisBezorging: true,
    minPersonen: 1,
    maxPersonen: 6,
    opzegTermijn: '5 dagen op voorhand',
    belgisch: false,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.hellofresh.be',
    kortingsCode: { code: 'WELKOM90', bedrag: 'tot €90 korting', beschrijving: 'Tot €90 korting verspreid over de eerste 4 boxen' },
    kenmerken: ['✓ Gratis bezorging', '✓ Direct opzegbaar', '✓ 30+ recepten/week', '✓ App met tracking'],
    pros: ['Grootste receptvariatie (30+ per week)', 'Gratis bezorging in heel België', 'Flexibel pauzeren en opzeggen', 'Gebruiksvriendelijke app', 'Beste welkomstkorting (tot €90)'],
    cons: ['Niet 100% Belgische ingrediënten', 'Meer plasticverpakking dan lokale alternatieven', 'Standaardprijs hoger na korting'],
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch'],
  },
  {
    slug: 'foodbag',
    naam: 'Foodbag',
    logo: '🥦',
    tagline: 'De beste Belgische maaltijdbox met lokale topkwaliteit',
    beschrijving: 'Foodbag is dé Belgische maaltijdbox bij uitstek. Met verse ingrediënten van lokale Belgische boeren, 30 recepten per week en eigen bezorgers is het de premium keuze voor wie bewust lokaal wil eten.',
    uitgebreideReview: {
      intro: 'Foodbag is het paradepaardje van de Belgische maaltijdboxmarkt. Opgericht in 2019 na een samenwerking tussen Stéphane (Foodbag) en Anders (Smartmat), heeft Foodbag zich gepositioneerd als de premium Belgische keuze. En dat proef je ook — de ingrediënten zijn merkbaar verser en lokaler dan bij internationale concurrenten.',
      testervaring: 'Onze testperiode van 4 weken met Foodbag was ronduit positief op vlak van kwaliteit. De ingrediënten — van lokale boerderijen — zijn aantoonbaar verser dan bij HelloFresh. Het "eat first" label op producten met korte houdbaarheid is een slimme touch. De 5 kookstijlen (Originals, Sana, Quick & Easy, Veggie, en Busy Day kant-en-klaar) geven veel flexibiliteit. Een kritische noot: Foodbag is duidelijk duurder dan de concurrenten. De box voor 2 personen met 3 maaltijden kost al snel €57/week (€9,50/portie), wat significant meer is dan HelloFresh.',
      voorWie: 'Foodbag is ideaal voor wie bewust Belgisch wil consumeren en bereid is daar wat meer voor te betalen. De Sana-gerechten (Sandra Bekkari) zijn populair bij gezondheidsgerichte kokers. De Quick & Easy lijn is geschikt voor drukke gezinnen die toch lokaal willen eten.',
      hoeWerktHet: 'Je bestelt op foodbag.be, met of zonder abonnement. Kies per gerecht hoeveel porties je wil (handig als iemand niet thuis is). Bezorging is gratis, van vrijdag tot maandag, in heel België inclusief Wallonië. Abonnement wekelijks opzegbaar.',
      vergelijking: 'Foodbag kost meer dan HelloFresh maar levert aantoonbaar betere lokale ingrediënten. Ten opzichte van 15gram is Foodbag vergelijkbaar in kwaliteit maar iets goedkoper. Als je Belgisch wil eten zonder het absolute premium prijskaartje van 15gram, is Foodbag de sweet spot.',
      eindoordeel: 'Foodbag verdient zijn #2 positie als beste Belgische alternatief. De kwaliteit van de ingrediënten en de klantenservice zijn uitstekend. De hogere prijs is het voornaamste struikelblok. Met een welkomstkorting is het zeker de moeite om te proberen.',
    },
    ranking: 2,
    score: { totaal: 8.1, smaak: 8.6, prijsKwaliteit: 7.2, flexibiliteit: 8.0, duurzaamheid: 8.5, gemak: 8.0 },
    prijsPerPortie: 9.50,
    prijsPopulaireBox: 57.00,
    receptenPerWeek: 30,
    gratisBezorging: true,
    minPersonen: 1,
    maxPersonen: 5,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: true,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.foodbag.be',
    kortingsCode: { code: 'FOODBAG20', bedrag: '€20 korting', beschrijving: '€20 korting op je eerste bestelling' },
    kenmerken: ['🇧🇪 Lokale ingrediënten', '✓ Gratis bezorging', '✓ 5 kookstijlen', '✓ Zonder abonnement'],
    pros: ['100% Belgische en lokale ingrediënten', 'Uitstekende smaakscores', 'Eigen vriendelijke bezorgers', '5 kookstijlen incl. Sana (Sandra Bekkari)', 'Geen verplicht abonnement'],
    cons: ['Duurste optie (€9,50/portie)', 'Beperktere bezorgdagen dan HelloFresh', 'Minder geschikt voor strikte budgetkijkers'],
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch', 'bio'],
  },
  {
    slug: 'marley-spoon',
    naam: 'Marley Spoon',
    logo: '🌍',
    tagline: 'Chef-kwaliteit recepten voor kookliefhebbers',
    beschrijving: 'Marley Spoon onderscheidt zich met creatieve chef-recepten en een groot aanbod van 40 gerechten per week. Bezorgt in Vlaanderen en Brussel met gratis verzending.',
    uitgebreideReview: {
      intro: 'Marley Spoon is de keuze voor wie koken als een beleving ziet. Met 40 recepten per week — het grootste aanbod van alle maaltijdboxen in België — en een focus op culinaire creativiteit richt Marley Spoon zich op de echte kookliefhebber.',
      testervaring: 'Tijdens onze test vielen de recepten op door hun originaliteit en smaakdiepte. Recepten kosten gemiddeld 45-60 minuten, meer dan bij HelloFresh. Dat is bewust: Marley Spoon mikt op mensen die van koken genieten en er de tijd voor nemen. De ingrediënten zijn vers en kwalitatief. De bezorging verliep vlot. Minpunt: Marley Spoon bezorgt momenteel enkel in Vlaanderen en Brussel, niet in Wallonië.',
      voorWie: 'Marley Spoon is de beste keuze voor koppels of alleenstaanden die van koken houden en de tijd nemen voor een uitgebreidere bereiding. De 5 categorieën (vegetarisch, vlees & vis, snel & simpel, kindvriendelijk, gezond) maken het makkelijk om te filteren.',
      hoeWerktHet: 'Bestellen via marleyspoon.be of de app. Box voor 2 of 4 personen, 2-5 maaltijden per week. Bezorging in Vlaanderen en Brussel, gratis. Je kiest zelf je bezorgdag bij registratie. Wekelijks pauzeren of opzeggen mogelijk.',
      vergelijking: 'Marley Spoon zit qua prijs (€8,67/portie standaard) in dezelfde categorie als Foodbag maar biedt meer receptkeuze (40 vs 30). Ten opzichte van HelloFresh zijn de recepten creatiever maar iets duurder. De welkomstkorting maakt het echter even betaalbaar als HelloFresh voor de eerste weken.',
      eindoordeel: 'Marley Spoon verdient zijn #3 positie als beste keuze voor kookliefhebbers. De combinatie van smaakvolle chef-recepten en een groot aanbod is uniek. Enkel de beperkte bezorging (geen Wallonië) en de hogere standaardprijs zijn minpunten.',
    },
    ranking: 3,
    score: { totaal: 7.9, smaak: 8.6, prijsKwaliteit: 7.2, flexibiliteit: 8.0, duurzaamheid: 7.5, gemak: 7.2 },
    prijsPerPortie: 8.67,
    prijsPopulaireBox: 51.99,
    receptenPerWeek: 40,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: false,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.marleyspoon.be',
    kortingsCode: { code: 'MARLEY30', bedrag: '€30 korting', beschrijving: '€30 korting op de eerste 2 weken' },
    kenmerken: ['✓ 40 recepten/week', '✓ Chef-kwaliteit', '✓ Gratis bezorging', '🌱 Vegan opties'],
    pros: ['Meeste receptkeuze (40/week)', 'Hoogste smaakscore', 'Creatieve chef-recepten', '5 handige categorieën', 'Gratis bezorging'],
    cons: ['Enkel Vlaanderen en Brussel (geen Wallonië)', 'Hogere prijs per portie', 'Recepten kosten meer tijd (45-60 min)'],
    geschiktVoor: ['koppel', 'vegetarisch'],
  },
  {
    slug: '15gram',
    naam: '15gram',
    logo: '👨‍🍳',
    tagline: 'Ultrapremium Belgische box van sterrenchefs',
    beschrijving: '15gram is de meest exclusieve maaltijdbox van België, met recepten van Belgische sterrenchefs en ingrediënten rechtstreeks van de vroegmarkt. Voor wie het allerbeste wil.',
    uitgebreideReview: {
      intro: '15gram is de Rolls-Royce van de Belgische maaltijdboxen. Met recepten van echte sterrenchefs en ingrediënten die rechtstreeks van de Belgische vroegmarkt komen, positioneert 15gram zich als het absolute premium segment. De naam verwijst naar het gewicht van een perfecte portie zout — een knipoog naar de precisie van topkoken.',
      testervaring: 'De 15gram-ervaring begint al bij het uitpakken: de verpakking is stijlvoller dan bij andere aanbieders. De ingrediënten zijn van een kwaliteit die je normaal enkel in toprestaurants aantreft. De recepten zijn uitdagend maar met de gedetailleerde instructies haalbaar. Verwacht wel een bereidingstijd van 60-90 minuten — dit is geen snelle doordeweekse maaltijd. De smaakbeleving is ongeëvenaard: dit is het dichtstbij een sterrenrestaurant ervaring thuis.',
      voorWie: '15gram is ideaal voor koppels die van koken een avondritueel maken en bereid zijn te investeren in de beste ingrediënten. Niet geschikt voor drukke gezinnen die snel iets op tafel moeten zetten. Perfect als geschenk of voor speciale gelegenheden.',
      hoeWerktHet: 'Bestellen via 15gram.be, met of zonder abonnement. Wekelijks of tweewekelijks. De box bevat 10 recepten om uit te kiezen. Bezorging gratis in heel België.',
      vergelijking: 'Ten opzichte van Foodbag biedt 15gram een hoger smaak- en beleveniveau maar is het ook duurder (€7,50+/portie). Ten opzichte van HelloFresh is 15gram een totaal andere categorie — niet te vergelijken qua doelgroep.',
      eindoordeel: '15gram is voor een specifieke doelgroep: de echte kookliefhebber die kwaliteit boven alles stelt. Voor dagelijks gebruik is het te duur en te tijdsintensief. Maar voor de perfecte kookavond met je partner of als bijzonder cadeau: absolute aanrader.',
    },
    ranking: 4,
    score: { totaal: 7.8, smaak: 9.2, prijsKwaliteit: 6.0, flexibiliteit: 7.0, duurzaamheid: 7.5, gemak: 6.5 },
    prijsPerPortie: 7.50,
    prijsPopulaireBox: 45.00,
    receptenPerWeek: 10,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 4,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: true,
    vegetarisch: false,
    bio: false,
    affiliateUrl: 'https://www.15gram.be',
    kenmerken: ['🇧🇪 Sterrenchefs', '✓ Vroegmarkt ingrediënten', '✓ Gratis bezorging', '🏆 Premium'],
    pros: ['Hoogste smaakbeleving van alle boxen', 'Recepten van echte Belgische sterrenchefs', 'Ingrediënten van de vroegmarkt', '100% Belgisch'],
    cons: ['Duurste optie', 'Beperkte receptkeuze (10/week)', 'Bereidingstijd 60-90 min — niet voor snel koken', 'Niet ideaal voor dagelijks gebruik'],
    geschiktVoor: ['koppel'],
  },
  {
    slug: 'ekomenu',
    naam: 'Ekomenu',
    logo: '🌱',
    tagline: '100% biologisch — de groenste keuze in België',
    beschrijving: 'Ekomenu is de meest duurzame maaltijdbox in België. Alle ingrediënten zijn biologisch gecertificeerd, verpakking is milieuvriendelijk, en je kan je persoonlijke CO2-footprint bijhouden.',
    uitgebreideReview: {
      intro: 'Ekomenu is de absolute keuze voor wie bewust en biologisch wil eten. Met 35 recepten per week, 100% biologische ingrediënten en een unieke CO2-footprint tracker per bestelling gaat Ekomenu verder dan welke andere maaltijdbox dan ook op het vlak van duurzaamheid.',
      testervaring: 'Tijdens onze test vielen de grote hoeveelheden groenten op — Ekomenu daagt je via de "Groenteteller" uit om 2100g groenten per week te eten. De recepten zijn gezond en gevarieerd, met opties voor vegetarisch, vegan, glutenvrij en koolhydraatarm. De biologische ingrediënten smaken merkbaar anders. Bereidingstijd: 30-45 minuten. De verpakking is minimaler dan bij andere boxen, wat positief is voor het milieu.',
      voorWie: 'Ekomenu is de beste keuze voor milieubewuste consumenten, vegetariërs en vegans. Ook ideaal voor mensen met voedselallergieën dankzij de uitgebreide filteropties (glutenvrij, lactosevrij). De gezinsbox is populair bij ouders die hun kinderen biologisch willen laten eten.',
      hoeWerktHet: 'Bestellen via ekomenu.be. Kies je menu (familie, afslank, vegetarisch, etc.) en het aantal personen. 35 recepten per week om uit te kiezen. Bezorging gratis, in heel België. Abonnement wekelijks aanpasbaar.',
      vergelijking: 'Ekomenu is de enige maaltijdbox in België met 100% biologische ingrediënten. Ten opzichte van Cirkle (ook eco-gericht) biedt Ekomenu meer receptkeuze. Ten opzichte van HelloFresh is het duurder maar ook significant duurzamer.',
      eindoordeel: 'Ekomenu is de beste keuze als duurzaamheid en gezondheid je prioriteiten zijn. De biologische kwaliteit en de brede keuze aan dieetopties zijn uniek. Enige nadeel is de hogere prijs. Met de welkomstkorting is het een uitstekende manier om kennis te maken.',
    },
    ranking: 5,
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
    pros: ['Enige 100% biologische maaltijdbox in België', 'Unieke CO2-footprint tracker', 'Brede keuze voor vegetariërs, vegans en allergieën', 'Milieuvriendelijke verpakking', 'Gezondste keuze'],
    cons: ['Hogere prijs dan HelloFresh', 'Niet volledig Belgisch (Nederlandse roots)', 'Minder culinair avontuurlijk dan 15gram'],
    geschiktVoor: ['koppel', 'vegetarisch', 'bio'],
  },
  {
    slug: 'smartmat',
    naam: 'Smartmat',
    logo: '⚡',
    tagline: 'Klaar in 20 minuten — perfect voor drukke gezinnen',
    beschrijving: 'Smartmat is de snelste maaltijdbox van België, met alle recepten klaar in maximaal 20 minuten. De Belgische box werkt met lokale seizoensproducten en eigen bezorgers.',
    uitgebreideReview: {
      intro: 'Smartmat werd in 2019 mede opgericht door Anders, die later ook Foodbag mee uitbouwde. De focus is duidelijk: snel, gezond en lokaal. Alle Smartmat-recepten zijn klaar in maximaal 20 minuten — ideaal voor drukke gezinnen die geen uur in de keuken willen staan na een lange werkdag.',
      testervaring: 'De belofte van 20 minuten kooktijd wordt consequent waargemaakt. De recepten zijn eenvoudig maar smaakvoller dan je zou verwachten voor zo\'n snelle bereidingstijd. De lokale Belgische ingrediënten zijn kwalitatief goed. Minder variatie dan HelloFresh (15 recepten/week) maar dat is bewust: Smartmat kiest voor eenvoud en snelheid.',
      voorWie: 'Smartmat is de ideale keuze voor gezinnen met jonge kinderen die snel iets op tafel moeten zetten. De recepten zijn kindvriendelijk en de bereidingstijd van 20 minuten is realistisch ook op drukke avonden. Ook geschikt voor alleenstaanden of koppels met een drukke agenda.',
      hoeWerktHet: 'Bestellen via smartmat.be. Kies het aantal personen (2-5) en maaltijden per week. 15 recepten om uit te kiezen. Gratis bezorging in heel België. Wekelijks abonnement, vrij opzegbaar.',
      vergelijking: 'Smartmat is vergelijkbaar met HelloFresh in prijs maar goedkoper dan Foodbag. Het onderscheidt zich door de kortere bereidingstijd (20 min vs 30-45 min). Ten opzichte van Delhaize Click&Cook is Smartmat duurder maar biedt het meer variatie en lokale kwaliteit.',
      eindoordeel: 'Smartmat is een sterke keuze voor drukke gezinnen die gezond willen eten zonder lang in de keuken te staan. De 20-minuten belofte is realistisch en de Belgische ingrediënten zijn een pluspunt. Voor meer culinaire variatie is HelloFresh of Marley Spoon een betere keuze.',
    },
    ranking: 6,
    score: { totaal: 7.3, smaak: 7.2, prijsKwaliteit: 7.5, flexibiliteit: 7.0, duurzaamheid: 7.0, gemak: 9.2 },
    prijsPerPortie: 5.80,
    prijsPopulaireBox: 34.80,
    receptenPerWeek: 15,
    gratisBezorging: true,
    minPersonen: 2,
    maxPersonen: 5,
    opzegTermijn: 'Wekelijks opzegbaar',
    belgisch: true,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.smartmat.be',
    kenmerken: ['⚡ Klaar in 20 min', '🇧🇪 Belgisch', '✓ Gratis bezorging', '👨‍👩‍👧 Gezinsvriendelijk'],
    pros: ['Snelste bereiding (max 20 min)', 'Lokale Belgische ingrediënten', 'Gezinsvriendelijke porties', 'Goede prijs-kwaliteit'],
    cons: ['Minder receptvariatie (15/week)', 'Minder culinair uitdagend', 'Beperktere boxgroottes dan HelloFresh'],
    geschiktVoor: ['gezin', 'budget'],
  },
  {
    slug: 'delhaize-click-cook',
    naam: 'Delhaize Click&Cook',
    logo: '🛒',
    tagline: 'Supermarktkwaliteit zonder abonnement',
    beschrijving: 'Delhaize Click&Cook is de maaltijdbox van de bekende Belgische supermarktketen. Geen verplicht abonnement, vertrouwde Delhaize-kwaliteit en de mogelijkheid om tegelijk je overige boodschappen te bestellen.',
    uitgebreideReview: {
      intro: 'Delhaize Click&Cook is de instap in de wereld van maaltijdboxen via een vertrouwd Belgisch merk. Geen abonnement nodig, geen risico — gewoon een maaltijdbox proberen via de website die je al kent.',
      testervaring: 'De Delhaize Click&Cook box biedt minder variatie dan de gespecialiseerde maaltijdboxen (8 recepten/week), maar de kwaliteit is zoals je van Delhaize gewend bent: betrouwbaar en consistent. De bereidingstijd schommelt tussen 30 en 45 minuten. Minpunt: bezorgkosten van €4,95 per box, terwijl de meeste concurrenten gratis leveren.',
      voorWie: 'Delhaize Click&Cook is ideaal voor wie voorzichtig wil kennismaken met maaltijdboxen zonder abonnement. Ook handig als je tegelijk je reguliere Delhaize-boodschappen bestelt. Geschikt voor gezinnen die de Delhaize-producten vertrouwen.',
      hoeWerktHet: 'Bestellen via delhaize.be als onderdeel van je gewone online boodschappen. Geen abonnement nodig, eenmalig bestellen is mogelijk. Bezorgkosten €4,95. Bezorging in heel België.',
      vergelijking: 'Ten opzichte van HelloFresh is Delhaize Click&Cook goedkoper per portie (€5,20 vs €5,50-8) maar biedt het veel minder keuze. Het grote voordeel: geen abonnement. Ten opzichte van Carrefour Simply You biedt het iets meer variatie en kwaliteit.',
      eindoordeel: 'Delhaize Click&Cook is een goede opstap voor beginners en voor wie af en toe eens een maaltijdbox wil zonder commitment. Voor regelmatig gebruik zijn de beperkte keuze en de bezorgkosten een nadeel tegenover HelloFresh of Foodbag.',
    },
    ranking: 7,
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
    pros: ['Geen verplicht abonnement', 'Vertrouwd Delhaize-merk', 'Laagste prijs per portie van echte maaltijdboxen', 'Combineerbaar met gewone Delhaize-boodschappen'],
    cons: ['Bezorgkosten €4,95 (anderen zijn gratis)', 'Beperkte receptkeuze (8/week)', 'Minder culinaire variatie'],
    geschiktVoor: ['budget', 'gezin'],
  },
  {
    slug: 'carrefour-simply-you',
    naam: 'Carrefour Simply You',
    logo: '🏪',
    tagline: 'De absolute budgetkeuze aan €4,90 per portie',
    beschrijving: 'Carrefour Simply You is de goedkoopste maaltijdbox van België. Eenvoudige recepten van de bekende supermarkt, zonder abonnement, voor wie budgetvriendelijk wil koken.',
    uitgebreideReview: {
      intro: 'Carrefour Simply You is de no-nonsense keuze voor de budgetbewuste koker. Met €4,90 per portie is het de goedkoopste maaltijdbox van België, maar dat gaat wel gepaard met beperkingen in variatie en smaakcomplexiteit.',
      testervaring: 'De Simply You box doet wat het belooft: eenvoudige, betaalbare maaltijden die ook niet-ervaren kokers kunnen bereiden. De recepten zijn basic maar smaken prima. Bereidingstijd: 25-35 minuten. De ingrediënten zijn Carrefour-huismerk kwaliteit — betrouwbaar maar niet premium. Bezorgkosten van €5,95 zijn een minpunt.',
      voorWie: 'Carrefour Simply You is de beste keuze voor studenten, alleenstaanden en gezinnen met een strak budget. Ideaal als eerste kennismaking met maaltijdboxen dankzij de lage prijs en het ontbreken van een abonnement.',
      hoeWerktHet: 'Bestellen via carrefour.be. Geen abonnement, eenmalig bestellen. Bezorgkosten €5,95. Bezorging in Vlaanderen en Brussel.',
      vergelijking: 'Carrefour Simply You is €0,30/portie goedkoper dan Delhaize Click&Cook maar heeft ook hogere bezorgkosten (€5,95 vs €4,95). Ten opzichte van HelloFresh met korting kan HelloFresh in de eerste weken zelfs goedkoper uitvallen.',
      eindoordeel: 'Carrefour Simply You is de beste keuze als budget de absolute prioriteit is. Voor wie meer variatie en betere ingrediënten wil, raden we HelloFresh aan — zeker met de welkomstkorting.',
    },
    ranking: 8,
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
    kenmerken: ['💰 Goedkoopste optie', '🇧🇪 Belgisch', '✓ Geen abonnement', '✓ Eenvoudig'],
    pros: ['Goedkoopste prijs per portie (€4,90)', 'Geen abonnement', 'Eenvoudig te bestellen'],
    cons: ['Bezorgkosten €5,95', 'Beperkte keuze (6 recepten/week)', 'Minder premium ingrediënten', 'Enkel Vlaanderen en Brussel'],
    geschiktVoor: ['budget'],
  },
  {
    slug: 'cirkle',
    naam: 'Cirkle',
    logo: '♻️',
    tagline: 'Zero waste Belgische box met herbruikbare verpakking',
    beschrijving: 'Cirkle is de meest innovatieve duurzame maaltijdbox van België. Met 100% herbruikbare verpakkingen, biologische ingrediënten en een circulair retourmodel is het de groenste keuze voor milieubewuste Belgen.',
    uitgebreideReview: {
      intro: 'Cirkle is een jonge Belgische maaltijdbox met een radicaal duurzame aanpak: alle verpakkingen zijn herbruikbaar en worden bij de volgende levering teruggenomen. In een industrie die worstelt met verpakkingsafval is dit een baanbrekend concept.',
      testervaring: 'Het Cirkle-systeem werkt verrassend goed in de praktijk: bij levering geef je de lege verpakkingen van de vorige week terug aan de bezorger. De koelboxen en potjes worden gewassen en hergebruikt. De biologische ingrediënten zijn van goede kwaliteit. De recepten zijn lekker maar minder gevarieerd dan bij grotere concurrenten (10/week). Beschikbaarheid is beperkt tot bepaalde regio\'s in Vlaanderen.',
      voorWie: 'Cirkle is de absolute keuze voor wie zero waste serieus neemt en bereid is voor duurzaamheid te betalen. Ideaal voor milieubewuste koppels in Vlaanderen. Minder geschikt voor grote gezinnen door de beperkte boxgroottes.',
      hoeWerktHet: 'Bestellen via cirkle.be. Abonnement met wekelijkse of tweewekelijkse levering. Bij elke levering geef je de verpakkingen van de vorige week terug. Beschikbaarheid momenteel beperkt tot Vlaanderen.',
      vergelijking: 'Cirkle is vergelijkbaar met Ekomenu op vlak van duurzaamheid maar onderscheidt zich door het herbruikbare verpakkingssysteem. Ten opzichte van HelloFresh is het duurder en minder variabel, maar aanzienlijk duurzamer.',
      eindoordeel: 'Cirkle is een inspirerende pionier in duurzame maaltijdboxen. Als duurzaamheid je absolute topprioriteit is en je in Vlaanderen woont, is Cirkle de beste keuze. Voor meer receptvariatie of een lager prijskaartje kijk je beter naar Ekomenu of HelloFresh.',
    },
    ranking: 9,
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
    cons: ['Beperkte beschikbaarheid (enkel Vlaanderen)', 'Duurder dan HelloFresh', 'Minder receptvariatie (10/week)', 'Jonge speler, minder bekendheid'],
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
