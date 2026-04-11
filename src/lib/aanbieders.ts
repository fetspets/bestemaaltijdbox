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
  losBestellenMogelijk: boolean;
  leverdag: boolean;
  tijdstip: boolean;
  besteVoor: string;
  minMaaltijdenPerWeek: number;
}

export const aanbieders: Aanbieder[] = [
  {
    slug: 'hellofresh',
    naam: 'HelloFresh',
    logo: '/logos/hellofresh.png',
    tagline: 'Marktleider in België — sterkste prijs-kwaliteitverhouding',
    beschrijving: 'HelloFresh is een van de populairste maaltijdboxen in België en wereldwijd. Met meer dan 40 recepten per week, gratis bezorging en een flexibel abonnement biedt het een uitstekende balans tussen prijs, keuze en gemak.',
    uitgebreideReview: {
      intro: 'HelloFresh is een van de populairste maaltijdboxen in België en dat is niet zonder reden. Na weken testen kwamen we tot de conclusie dat weinig andere boxen dezelfde balans bieden tussen prijs, variatie en gebruiksgemak. Of je nu kookt voor 2 of voor een heel gezin — HelloFresh past zich aan.',
      testervaring: 'Wij testten HelloFresh gedurende 4 weken met een box voor 2 personen, 3 maaltijden per week. De bezorging verliep elke keer vlot: gekoeld, goed verpakt en op tijd. Week 1 stond in het teken van verkennen — we kozen een Thaise curry, een pasta met ricotta en een Belgische waterzooi. Alles gelukt, receptkaarten zijn helder met stap-voor-stap foto\'s. Bereidingstijd lag tussen 25 en 40 minuten. In week 3 liepen we tegen iets aan: één zakje kruiden was vergeten. Eén berichtje via de app was voldoende — de volgende dag zat er een tegoed in onze account. De klantenservice reageerde snel en zonder discussie. Wat ons het meest bijbleef: de variatie. Van wok tot risotto, van veggie burger tot zalm met groenten — je eet nooit twee weken hetzelfde. Kleine kanttekening: er zit wat meer plasticverpakking in dan we zouden willen.',
      voorWie: 'HelloFresh is een sterke keuze voor koppels, gezinnen en singles die weinig tijd hebben maar toch gevarieerd willen eten. Dankzij de grote receptvariatie (40+) vinden ook kieskeurige eters altijd iets naar hun smaak. Minder geschikt voor wie bewust lokaal of biologisch wil kopen.',
      hoeWerktHet: 'Je stelt je box samen op hellofresh.be: kies het aantal personen (1-6) en het aantal maaltijden per week (3-5). Je kiest dan elke week zelf welke recepten je wil uit het aanbod van 40+. Bezorging is gratis en je kan kiezen uit meerdere bezorgdagen. Pauzeren of opzeggen kan tot 5 dagen voor je volgende levering.',
      vergelijking: 'Ten opzichte van Foodbag is HelloFresh voordeliger maar gebruikt het minder lokale Belgische ingrediënten. Marley Spoon is vergelijkbaar in prijs maar biedt meer chef-recepten. Voor pure budgetvriendelijkheid wint HelloFresh met korting altijd.',
      eindoordeel: 'HelloFresh verdient zijn #1 positie. De combinatie van prijs, variatie en gemak is moeilijk te evenaren in België. Zeker met de regelmatige welkomstaanbiedingen voor nieuwe klanten is het zeker de moeite waard om te proberen.',
    },
    ranking: 1,
    score: { totaal: 8.4, smaak: 8.2, prijsKwaliteit: 8.5, flexibiliteit: 9.0, duurzaamheid: 6.8, gemak: 9.0 },
    prijsPerPortie: 5.50,
    prijsPopulaireBox: 47.99,
    receptenPerWeek: 40,
    gratisBezorging: true,
    minPersonen: 1,
    maxPersonen: 6,
    opzegTermijn: '5 dagen op voorhand',
    belgisch: false,
    vegetarisch: true,
    bio: false,
    affiliateUrl: 'https://www.hellofresh.be',
    kenmerken: ['✓ Gratis bezorging', '✓ Direct opzegbaar', '✓ 40+ recepten/week', '✓ App met tracking'],
    pros: ['Grootste receptvariatie (40+ per week)', 'Gratis bezorging in heel België', 'Flexibel pauzeren en opzeggen', 'Gebruiksvriendelijke app', 'Regelmatige welkomstaanbiedingen voor nieuwe klanten'],
    cons: ['Niet 100% Belgische ingrediënten', 'Meer plasticverpakking dan lokale alternatieven', 'Standaardprijs hoger na korting'],
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch', 'singles'],
    losBestellenMogelijk: false,
    leverdag: true,
    tijdstip: true,
    besteVoor: 'Variatie & prijs',
    minMaaltijdenPerWeek: 3,
  },
  {
    slug: 'foodbag',
    naam: 'Foodbag',
    logo: '/logos/foodbag.png',
    tagline: 'Belgische maaltijdbox met lokale ingrediënten en 5 kookstijlen',
    beschrijving: 'Foodbag is een Belgische maaltijdbox met focus op lokale ingrediënten en korte keten. Met verse ingrediënten van lokale Belgische boeren, 40 recepten per week en eigen bezorgers is het een sterke keuze voor wie bewust lokaal wil eten. Eigendom van Colruyt Group.',
    uitgebreideReview: {
      intro: 'Foodbag is het paradepaardje van de Belgische maaltijdboxmarkt. Inmiddels onderdeel van de Colruyt Group, heeft Foodbag zich gepositioneerd als de premium Belgische keuze. De ingrediënten zijn merkbaar verser en lokaler dan bij internationale concurrenten.',
      testervaring: 'Onze 4-weken test met Foodbag bevestigde wat we verwachtten: de ingrediënten zijn merkbaar verser dan bij internationale concurrenten. Week 1 kozen we uit de "Originals" lijn: een Vlaamse stoverij met lokaal vlees en een pasta met verse groenten van Belgische boeren. Het verschil in smaak met supermarktingrediënten is voelbaar. Week 2 probeerden we de "Sana" lijn (van Sandra Bekkari) — een kip-groenten schotel met quinoa en een groentecurry. Gezond en smaakvol. In week 3 testten we "Busy Day": maaltijden klaar in 20 minuten, minimale afwas. Precies wat je nodig hebt op een drukke dinsdagavond. Eén keer arriveerde een pakket met een gekreukte kruidenzak — Foodbag verving het zonder discussie. De hogere prijs per portie is het voornaamste struikelblok — die voelt snel aan als een restaurantmaaltijd.',
      voorWie: 'Foodbag is ideaal voor wie bewust lokaal en Belgisch wil consumeren en daar iets meer voor over heeft. De Sana-gerechten zijn populair bij gezondheidsgerichte kokers. Minder geschikt als budget de hoofdprioriteit is.',
      hoeWerktHet: 'Je bestelt op foodbag.be, met of zonder abonnement. Kies per gerecht hoeveel porties je wil. Bezorging is gratis, van vrijdag tot maandag, in heel België inclusief Wallonië.',
      vergelijking: 'Foodbag kost meer dan HelloFresh maar levert aantoonbaar betere lokale ingrediënten. Wie bewust Belgisch wil eten en bereid is daarvoor meer te betalen, zit bij Foodbag goed.',
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
    losBestellenMogelijk: true,
    leverdag: true,
    tijdstip: false,
    besteVoor: 'Belgische kwaliteit',
    minMaaltijdenPerWeek: 1,
  },
  {
    slug: 'marley-spoon',
    naam: 'Marley Spoon',
    logo: '/logos/marley-spoon.png',
    tagline: 'Creatieve chef-recepten voor kookliefhebbers',
    beschrijving: 'Marley Spoon biedt gevarieerde recepten met vaak iets uitgebreidere bereidingen dan andere maaltijdboxen. Met 40 gerechten per week en prijzen van €5,59 tot €9,69 afhankelijk van je plan is het een goede keuze voor wie graag kookt. Bezorgt in Vlaanderen en Brussel.',
    uitgebreideReview: {
      intro: 'Marley Spoon is de keuze voor wie koken als een beleving ziet. Met 40 recepten per week en een focus op culinaire creativiteit richt Marley Spoon zich op de kookliefhebber die graag iets nieuws uitprobeert.',
      testervaring: 'Onze 4-weken test met Marley Spoon was een prettige verrassing. De recepten zijn uitgebreider dan wat je bij HelloFresh of Foodbag gewend bent — meer stappen, meer technieken. Week 1: een zelfgemaakte gnocchi met salie-boter (echt kneden en rollen) en een Marokkaanse lam-tajine met geroosterde groenten. Beide meer dan 50 minuten, maar het resultaat voelde als echt koken. Week 2 probeerden we een sneller recept: een pasta met verse ricotta en citroen in 35 minuten — dat lukte ook voor doordeweeks. Wat opvalt is de kwaliteit van de kruidenmixen en sauzen: die zijn bij Marley Spoon net iets aromatischer. Minpunt: Marley Spoon bezorgt niet in Wallonië, wat voor een deel van België een harde drempel is.',
      voorWie: 'Marley Spoon is een uitstekende keuze voor wie koken als ontspanning ziet en er 45-60 minuten voor wil nemen. Minder geschikt voor wie snel iets op tafel wil of in Wallonië woont.',
      hoeWerktHet: 'Bestellen via marleyspoon.be of de app. Box voor 2 of 4 personen, 2-5 maaltijden per week. Bezorging in Vlaanderen en Brussel, gratis. Wekelijks pauzeren of opzeggen mogelijk.',
      vergelijking: 'Marley Spoon zit qua prijs in dezelfde categorie als Foodbag maar biedt meer receptkeuze (40 vs 40). Ten opzichte van HelloFresh (50+ recepten) zijn de recepten van Marley Spoon creatiever en uitgebreider qua bereiding.',
      eindoordeel: 'Marley Spoon verdient zijn #3 positie als beste keuze voor kookliefhebbers. Nieuwe klanten genieten van een welkomstaanbieding op de eerste boxen. Enkel de beperkte bezorging (geen Wallonië) is een minpunt.',
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
    losBestellenMogelijk: false,
    leverdag: true,
    tijdstip: false,
    besteVoor: 'Fijnproevers',
    minMaaltijdenPerWeek: 2,
  },
  {
    slug: 'ekomenu',
    naam: 'Ekomenu',
    logo: '/logos/ekomenu.png',
    tagline: '100% biologisch — de groenste keuze in België',
    beschrijving: 'Ekomenu is de meest duurzame maaltijdbox in België. Alle ingrediënten zijn biologisch gecertificeerd, verpakking is milieuvriendelijk, en je kan je persoonlijke CO2-footprint bijhouden. Bezorgt in Vlaanderen en Brussel.',
    uitgebreideReview: {
      intro: 'Ekomenu is een interessante keuze voor wie bewust en biologisch wil eten. Met 20-25 recepten per week, 100% biologische ingrediënten en een unieke CO2-footprint tracker per bestelling gaat Ekomenu verder dan de meeste andere maaltijdboxen op het vlak van duurzaamheid.',
      testervaring: 'Onze 4-weken test met Ekomenu draaide volledig rond groenten — en dat was een eyeopener. Week 1 kozen we een rode linzensoep met zelfgebakken focaccia, een bloemkool-dahl en een vegan bolognese met linzen in plaats van vlees. Alles biologisch, alles lekker. De "Groenteteller" hield bij hoeveel groenten we per week aten — dat geeft een verrassend bewust gevoel. Bereidingstijd lag rond 35-45 minuten. Wat we misten in week 3: iets meer hartigheid. Als je gewend bent aan vlees, vraagt het even aanpassen. De CO2-tracker per bestelling is een uniek feature — je ziet concreet hoeveel gram CO2 je box uitgestoten heeft. Bezorging is enkel in Vlaanderen en Brussel, wat voor Waalse bezoekers een dealbreaker is.',
      voorWie: 'Ekomenu is de beste keuze voor milieubewuste consumenten, vegetariërs en vegans in Vlaanderen en Brussel. Ook uitstekend voor mensen met allergieën dankzij de uitgebreide filteropties. Minder geschikt als je ook vlees wil eten of in Wallonië woont.',
      hoeWerktHet: 'Bestellen via ekomenu.be. Kies je menu en het aantal personen. 20-25 recepten per week om uit te kiezen. Bezorging gratis op maandag en vrijdag, in Vlaanderen en Brussel. Abonnement wekelijks aanpasbaar.',
      vergelijking: 'Ekomenu is de enige maaltijdbox in België met 100% biologische ingrediënten. Ten opzichte van HelloFresh is het duurder maar ook significant duurzamer. Let op: Ekomenu bezorgt enkel in Vlaanderen en Brussel, niet in Wallonië.',
      eindoordeel: 'Ekomenu is een sterke keuze als duurzaamheid en gezondheid je prioriteiten zijn. De biologische kwaliteit en de brede keuze aan dieetopties zijn weinig te vinden bij andere Belgische maaltijdboxen.',
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
    losBestellenMogelijk: false,
    leverdag: true,
    tijdstip: false,
    besteVoor: 'Vegetarisch/vegan',
    minMaaltijdenPerWeek: 2,
  },
  {
    slug: 'foodmaker',
    naam: 'Foodmaker',
    logo: '👨‍🍳',
    tagline: 'Artisanale kant-en-klaar met Jeroen Meus — Dagelijkse Kost bezorgd',
    beschrijving: 'Foodmaker is de Antwerpse kant-en-klaar maaltijdservice met een unieke samenwerking met Jeroen Meus (Dagelijkse Kost). 32 gerechten per week, gratis bezorging in heel België en een volledig vegan "Vedge Bags" gamma.',
    uitgebreideReview: {
      intro: 'Foodmaker combineert artisanale kwaliteit met het gemak van kant-en-klare maaltijden. De samenwerking met Jeroen Meus — het gezicht van VRT\'s Dagelijkse Kost — maakt Foodmaker uniek in de Belgische maaltijdmarkt.',
      testervaring: 'Foodmaker is geen klassieke kookbox — je warmt op, je kookt niet. Maar de kwaliteit van de maaltijden maakt dat meer dan goed. We testten 4 weken, steeds 4 maaltijden per levering. Week 1: een Vlaamse stoof van Jeroen Meus, een pasta met huisbereide bolognese en een lente-risotto. Alles vers bereid in Antwerpen, tot 7 dagen houdbaar. Het smaakt inderdaad als thuiskoken van iemand die echt kan koken. Week 2 probeerden we het Vedge Bags gamma: een vegan curry en een linzenstoofpot — beide verrassend smaakvol. De bezorging is minder flexibel dan bij de andere aanbieders (vaste dag). Prijstechnisch is het het duurst van onze test, maar de smaak rechtvaardigde dat.',
      voorWie: 'Foodmaker is ideaal voor wie kwaliteitsmaaltijden wil zonder kooktijd. De Jeroen Meus-recepten spreken een breed Vlaams publiek aan. Minder geschikt als je van het kookproces zelf geniet of een strak budget hebt.',
      hoeWerktHet: 'Bestellen via foodmaker.be. Minimum bestelling €39,90. Gratis bezorging in heel België. Maaltijden zijn vers bereid en tot 7 dagen houdbaar. Geen verplicht abonnement.',
      vergelijking: 'Foodmaker is vergelijkbaar met Factor maar focust meer op artisanale Belgische kwaliteit en de Jeroen Meus samenwerking. De prijs per portie is hoger, maar de kwaliteit en de USP van Dagelijkse Kost zijn uniek.',
      eindoordeel: 'Foodmaker is een sterke kant-en-klare keuze voor wie van kwaliteit en Belgische smaak houdt. De samenwerking met Jeroen Meus geeft het een herkenbaar en vertrouwd karakter.',
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
    geschiktVoor: ['koppel', 'gezin', 'vegetarisch', 'singles'],
    losBestellenMogelijk: true,
    leverdag: true,
    tijdstip: false,
    besteVoor: 'Pure kwaliteit',
    minMaaltijdenPerWeek: 1,
  },
  {
    slug: 'factor',
    naam: 'Factor',
    logo: '⚡',
    tagline: 'Kant-en-klaar chef-maaltijden — geen koken vereist',
    beschrijving: 'Factor (van de HelloFresh Group) levert kant-en-klare chef-maaltijden die je enkel hoeft op te warmen. 18 gerechten per week in 5 dieetstijlen, bezorging in heel België op zondag of maandag.',
    uitgebreideReview: {
      intro: 'Factor is geen traditionele maaltijdbox — het is een kant-en-klare maaltijdservice van de HelloFresh Group. Je kookt niet zelf: de maaltijden worden vers bereid geleverd en zijn klaar in 2-3 minuten in de magnetron.',
      testervaring: 'Factor is radicaal anders dan de rest: je kookt niet, je warmt op. We testten 4 weken, steeds 6 maaltijden per week. Week 1 kozen we uit "High-Protein" en "Chef\'s Choice": een kip-pesto met aardappelen, een zalm met groenten en een beef stir-fry. Alles klaar in 2-3 minuten in de magnetron. Smaak: verrassend goed voor iets wat zo snel klaar is. Week 3 probeerden we de "Calorie-Conscious" lijn — minder dan 600 kcal per maaltijd, perfect als je let op je gewicht. Wat ons stoorde: de €6 bezorgkosten per levering tellen snel op. En bij 6 maaltijden per week komt de maandprijs hoog uit. Factor is een premium product voor wie tijd de grootste schaarsheid is.',
      voorWie: 'Factor is ideaal voor drukke professionals, sporters en iedereen die gezond wil eten zonder kooktijd. Minder geschikt als je het kookplezier wil of als prijs een prioriteit is.',
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
    geschiktVoor: ['koppel', 'gezin', 'singles'],
    losBestellenMogelijk: false,
    leverdag: true,
    tijdstip: true,
    besteVoor: 'Ready-to-eat',
    minMaaltijdenPerWeek: 1,
  },
  {
    slug: 'carrefour-simply-you',
    naam: 'Carrefour Simply You',
    logo: '🏪',
    tagline: 'Budgetvriendelijk zonder abonnement — in heel België',
    beschrijving: 'Carrefour Simply You is een betaalbare maaltijdbox van de bekende supermarktketen. Geen verplicht abonnement, bezorging in heel België inclusief Wallonië, en een welkomstkorting voor nieuwe klanten.',
    uitgebreideReview: {
      intro: 'Carrefour Simply You is de no-nonsense keuze voor de budgetbewuste koker. Met een van de lagere prijzen per portie en geen verplicht abonnement is het een laagdrempelige instap in de wereld van maaltijdboxen.',
      testervaring: 'De Carrefour Simply You box is bewust basic — en dat is zowel zijn kracht als zijn beperking. We testten 2 weken, telkens 3 maaltijden voor 2 personen. Week 1: een pasta arrabiata, een kipschotel met groenten en een vegetarische wok. Alle drie klaar in 25-30 minuten, eenvoudige instructies, ingrediënten vers en correct. Smaak: degelijk, niet spectaculair. Week 2 viel één receptkaart wat mager uit qua uitleg, maar het gerecht lukte. De bezorging op maandagavond is beperkt maar werkt netjes. Grote pluspunt: geen abonnement. Je bestelt wanneer je wil, zonder verplichtingen. Dat maakt het ideaal als proef of als aanvulling, niet als wekelijkse vaste box.',
      voorWie: 'Carrefour Simply You is een goede keuze voor wie eenmalig wil proberen of een strak budget heeft. Minder geschikt als je veel receptvariatie of een weekelijkse kookbeleving zoekt.',
      hoeWerktHet: 'Bestellen via carrefour.be. Geen abonnement, eenmalig bestellen. Bezorging op maandagavond (17u-22u) in heel België, of afhalen bij een Carrefour-winkel.',
      vergelijking: 'Carrefour Simply You is een budgetvriendelijke optie zonder abonnement. Met de welkomstkorting voor nieuwe klanten (controleer de actuele code op de site) is de eerste box extra voordelig. Ten opzichte van HelloFresh met korting kan HelloFresh in de eerste weken zelfs goedkoper uitvallen.',
      eindoordeel: 'Carrefour Simply You is een goede keuze als budget de prioriteit is en je geen abonnement wil. De welkomstkorting maakt de instap extra aantrekkelijk.',
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
    kenmerken: ['💰 Voordelig', '🇧🇪 Heel België', '✓ Geen abonnement', '🏷️ Welkomstkorting nieuwe klanten'],
    pros: ['Geen verplicht abonnement', 'Welkomstkorting voor nieuwe klanten', 'Bezorging in heel België incl. Wallonië', '10+ recepten per week'],
    cons: ['Minder receptvariatie dan HelloFresh', 'Eenvoudigere recepten', 'Enkel maandaglevering'],
    geschiktVoor: ['budget', 'gezin', 'singles'],
    losBestellenMogelijk: true,
    leverdag: true,
    tijdstip: false,
    besteVoor: 'Zonder abonnement',
    minMaaltijdenPerWeek: 1,
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
