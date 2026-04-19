export interface GidsAanbeveling {
  slug: string;
  badge: string;
  reden: string;
}

export interface Gids {
  slug: string;
  titel: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  aanbevelingen: GidsAanbeveling[];
  tabelSlugs: string[];
  faq: Array<{ q: string; a: string }>;
  uitlegBlokken?: Array<{ titel: string; tekst: string }>;
}

export const gidsen: Gids[] = [
  {
    slug: 'maaltijdbox-voor-gezinnen',
    titel: 'Beste maaltijdbox voor gezinnen in België 2026',
    metaTitle: 'Beste maaltijdbox voor gezinnen België 2026 — Top 3 vergeleken',
    metaDescription: 'Welke maaltijdbox is het best voor gezinnen in België? We vergeleken prijs, porties, bezorging en keuze. Onze top 3 voor 2026.',
    intro: 'Als je 3 à 4 keer per week kookt voor een gezin met kinderen, wil je recepten die snel klaar zijn, genoeg porties bieden en ook bij kieskeurige eters in de smaak vallen. We vergeleken alle Belgische aanbieders op precies die criteria.',
    aanbevelingen: [
      {
        slug: 'foodbag',
        badge: '🏆 Beste voor gezinnen',
        reden: 'Foodbag levert voor 1 tot 5 personen met snelle recepten in 5 kookstijlen. De "Busy Day" formule is specifiek voor drukke avonden: maaltijden klaar in 20 minuten, weinig afwas, en toch verse ingrediënten van Belgische boerderijen. Gratis bezorging in heel België inclusief Wallonië.',
      },
      {
        slug: 'hellofresh',
        badge: '💰 Voordeligste optie voor gezinnen',
        reden: 'HelloFresh levert voor 1 tot 6 personen — als enige aanbieder. Doordat je elke week zelf kiest welke recepten je wil, kan je de selectie afstemmen op wat de kinderen die week lekker vinden. Toegankelijke prijs met welkomstkorting voor nieuwe klanten.',
      },
      {
        slug: 'marley-spoon',
        badge: '👨‍🍳 Voor gezinnen die samen graag koken',
        reden: 'Marley Spoon is interessant voor ouders die zelf van koken genieten en dat samen met de kinderen willen doen. De recepten zijn uitgebreider dan bij andere aanbieders. Let op: bezorging enkel in Vlaanderen en Brussel, niet in Wallonië.',
      },
    ],
    tabelSlugs: ['foodbag', 'hellofresh', 'marley-spoon', 'ekomenu'],
    faq: [
      { q: 'Welke maaltijdbox levert voor 4 of 5 personen?', a: 'Foodbag levert voor tot 5 personen, HelloFresh zelfs voor 6 personen. Marley Spoon en Ekomenu leveren maximaal voor 4 personen. Voor grotere gezinnen is HelloFresh de meest schaalbare keuze.' },
      { q: 'Wanneer kies je HelloFresh boven Foodbag voor een gezin?', a: 'HelloFresh is interessanter als je een groot gezin hebt (5–6 personen), als budget een rol speelt, of als je meer receptvariatie wil. Foodbag is interessanter als je bewust lokaal wil eten en snelheid belangrijker is dan variatie.' },
      { q: 'Zijn maaltijdboxen geschikt voor kinderen?', a: 'Ja. HelloFresh heeft een "Gezin" filter op de website voor kindvriendelijke recepten. Foodbag\'s Originals-lijn bevat vertrouwde Belgische klassiekers. Beide zijn goed haalbaar op doordeweekse avonden.' },
      { q: 'Kan ik de maaltijdbox pauzeren in de schoolvakanties?', a: 'Ja. HelloFresh, Foodbag en Marley Spoon laten je leveringen pauzeren of overslaan, doorgaans tot 5 dagen voor de volgende leverdatum. Handig als je op vakantie bent.' },
    ],
  },
  {
    slug: 'goedkoopste-maaltijdbox-belgie',
    titel: 'Goedkoopste maaltijdbox in België 2026 — vergeleken',
    metaTitle: 'Goedkoopste maaltijdbox België 2026 — Prijsvergelijking',
    metaDescription: 'Wat is de goedkoopste maaltijdbox in België? We vergeleken alle prijzen per portie, bezorgkosten en welkomstdeals. Bijgewerkt april 2026.',
    intro: 'De prijs per portie varieert enorm tussen Belgische maaltijdboxen. Maar de echte kost bereken je zo: portieprijs × aantal porties + bezorgkosten − welkomstkorting. We zetten alle opties naast elkaar, inclusief de addertjes onder het gras.',
    aanbevelingen: [
      {
        slug: 'hellofresh',
        badge: '💰 Voordeligste met welkomstkorting',
        reden: 'Voor nieuwe klanten is HelloFresh dankzij de welkomstkorting (verspreid over de eerste boxen) een van de meest betaalbare opties. Gratis bezorging, geen extra kosten. Na de welkomstperiode stijgt de standaardprijs — plan op voorhand of je wil verderzetten of pauzeren.',
      },
      {
        slug: 'carrefour-simply-you',
        badge: '🛒 Voordeligst zonder abonnement',
        reden: 'Carrefour Simply You is interessant als je eenmalig wil proberen zonder abonnementsrisico. Nieuwe klanten kunnen profiteren van een welkomstkorting op de eerste bestelling — controleer de actuele code op de site. Beperkingen: enkel maandaglevering en een smaller receptaanbod dan de grote spelers.',
      },
      {
        slug: 'factor',
        badge: '⚡ Laagste prijs per portie',
        reden: 'Factor heeft een van de laagste prijzen per portie van alle aanbieders. Maar het gaat om kant-en-klare maaltijden die je enkel opwarmt — geen kookbeleving. Tel de bezorgkosten mee in je vergelijking. Interessant voor wie kooktijd wil besparen.',
      },
    ],
    tabelSlugs: ['hellofresh', 'carrefour-simply-you', 'factor', 'marley-spoon', 'ekomenu'],
    uitlegBlokken: [
      {
        titel: 'Goedkoopste maaltijdbox voor een koppel',
        tekst: 'HelloFresh is de goedkoopste kookbox voor 2 personen: gratis bezorging, groot receptaanbod en regelmatige welkomstvoordelen voor nieuwe klanten. Na de welkomstperiode stijgt de standaardprijs — plan op voorhand om te pauzeren of te stoppen als je de kost wil beheersen. Carrefour Simply You is een goed alternatief als je zonder abonnementsrisico wil proberen.',
      },
      {
        titel: 'Goedkoopste maaltijdbox voor een gezin',
        tekst: 'HelloFresh heeft de meeste receptkeuze voor grote gezinnen en levert ook voor 4-5 personen met gratis bezorging. Foodbag biedt ook een "los bestellen" optie voor gezinnen die niet wekelijks willen vastzitten. Let op: grotere formules zijn niet altijd proportioneel goedkoper — bereken altijd de prijs per portie voor je vergelijkt.',
      },
      {
        titel: 'Goedkoopste maaltijdbox voor 1 persoon',
        tekst: 'HelloFresh is de enige grote kookbox die levert voor 1 persoon, met gratis bezorging. Factor (kant-en-klare maaltijden) heeft een lagere prijs per portie maar rekent bezorgkosten aan — tel die altijd mee in je vergelijking. Carrefour Simply You laat je eenmalig bestellen zonder abonnement, ideaal om het concept te testen zonder financieel risico.',
      },
    ],
    faq: [
      { q: 'Wat is de goedkoopste maaltijdbox in België per portie?', a: 'Factor heeft de laagste prijs per portie maar levert kant-en-klare maaltijden en rekent bezorgkosten aan. Bij klassieke kookboxen is HelloFresh het voordeligst, met gratis bezorging. Carrefour Simply You is de goedkoopste optie zonder abonnement.' },
      { q: 'Hoe bereken ik de echte kost van een maaltijdbox?', a: 'Reken: portieprijs × aantal porties + bezorgkosten − welkomstkorting. HelloFresh geeft gratis bezorging; Factor rekent bezorgkosten aan. Voor een realistisch beeld: vergelijk ook de prijs na de welkomstperiode, niet enkel de introductieprijs.' },
      { q: 'Welke maaltijdbox heeft de goedkoopste bezorging in België?', a: 'HelloFresh, Foodbag, Marley Spoon en Ekomenu leveren allemaal gratis. Carrefour Simply You ook. Factor rekent bezorgkosten aan per levering. Als je regelmatig bestelt, is gratis bezorging al snel €20–30 per maand waard.' },
      { q: 'Is er een goedkope maaltijdbox zonder abonnement in België?', a: 'Ja. Carrefour Simply You en Foodmaker werken zonder verplicht abonnement — je bestelt wanneer je wil. Foodbag heeft ook een "los bestellen" optie. Handig als je flexibel wil blijven zonder wekelijkse verplichting.' },
      { q: 'Zijn er maaltijdboxen zonder abonnement in België?', a: 'Ja. Carrefour Simply You en Foodmaker werken zonder verplicht abonnement. Je bestelt wanneer je wil, zonder wekelijkse verplichting. Foodbag heeft ook een "los bestellen" optie.' },
      { q: 'Zijn maaltijdboxen goedkoper dan boodschappen doen?', a: 'Per portie betaal je doorgaans meer dan bij de supermarkt. Maar maaltijdboxen leveren exacte hoeveelheden — weinig verspilling. Voor wie regelmatig ingrediënten weggooit of impulsaankopen doet, kan het werkelijke verschil kleiner zijn dan gedacht.' },
      { q: 'Wanneer is een maaltijdbox goedkoper dan zelf koken?', a: 'Als je regelmatig ingrediënten weggooit, veel impulsaankopen doet in de supermarkt, of regelmatig eten bestelt via Deliveroo of Uber Eats — dan is een maaltijdbox al snel goedkoper. De onzichtbare kost van verspilling en takeaway wordt vaak onderschat.' },
    ],
  },
  {
    slug: 'beste-maaltijdbox-voor-singles',
    titel: 'Beste maaltijdbox voor singles in België 2026',
    metaTitle: 'Beste maaltijdbox voor singles België 2026 — Top 3 vergeleken',
    metaDescription: 'Welke maaltijdbox is het best voor 1 persoon in België? We vergeleken minimum porties, prijs en flexibiliteit. Onze top 3 voor singles in 2026.',
    intro: 'Als alleenstaande is een maaltijdbox bestellen niet vanzelfsprekend: veel aanbieders leveren minimum voor 2 personen. Maar er zijn goede opties voor 1 persoon. We zetten de beste keuzes voor singles naast elkaar op basis van minimum afname, prijs en gemak.',
    aanbevelingen: [
      {
        slug: 'hellofresh',
        badge: '🏆 Beste kookbox voor 1 persoon',
        reden: 'HelloFresh is de enige grote kookbox die levert voor 1 persoon. Je kan wekelijks kiezen hoeveel maaltijden je wil (tot 5 per week) en kan elke week pauzeren. Gratis bezorging, meer dan 40 recepten per week om uit te kiezen. Welkomstkorting voor nieuwe klanten.',
      },
      {
        slug: 'factor',
        badge: '⚡ Beste kant-en-klaar voor 1 persoon',
        reden: 'Factor levert kant-en-klare maaltijden per stuk — ideaal voor wie alleen woont en geen 2-persoonsporties wil. Je bepaalt zelf hoeveel maaltijden je bestelt. Opwarmen in 2-3 minuten. Let op: bezorgkosten van €6 per levering.',
      },
      {
        slug: 'carrefour-simply-you',
        badge: '💰 Voordeligste optie zonder abonnement',
        reden: 'Carrefour Simply You laat je eenmalig bestellen zonder engagement. Interessant als je het concept wil uitproberen zonder risico. Met kortingscode BOXNL20 krijg je €20 korting op je eerste bestelling. Bezorging in heel België op maandag.',
      },
    ],
    tabelSlugs: ['hellofresh', 'factor', 'carrefour-simply-you', 'foodmaker'],
    faq: [
      { q: 'Welke maaltijdbox levert voor 1 persoon in België?', a: 'HelloFresh en Factor leveren voor 1 persoon. Foodmaker, Carrefour Simply You en Foodbag laten je ook los bestellen voor kleinere hoeveelheden. De meeste andere aanbieders zoals Marley Spoon en Ekomenu leveren minimum voor 2 personen.' },
      { q: 'Is een maaltijdbox de moeite voor 1 persoon?', a: 'Ja, als je de bezorgkosten meerekent en de verspilling vergelijkt. Als alleenstaande gooi je makkelijker ingrediënten weg als je zelf boodschappen doet. Een maaltijdbox levert exacte hoeveelheden, wat verspilling sterk vermindert.' },
      { q: 'Hoe pauzeer ik mijn maaltijdbox als alleenstaande?', a: 'HelloFresh en Factor laten je leveringen wekelijks overslaan of pauzeren via de app of website, doorgaans tot 5 dagen voor de volgende levering. Praktisch als je een week bij familie eet of op vakantie bent.' },
      { q: 'Kan ik verschillende maaltijden voor 1 persoon kiezen?', a: 'Bij HelloFresh kies je elke week zelf welke recepten je wil uit het aanbod van 40+, voor 1 persoon. Bij Factor kies je kant-en-klare maaltijden per stuk uit 18 wekelijkse opties in 5 dieetstijlen. Beide geven veel keuzevrijheid.' },
    ],
  },
  {
    slug: 'beste-biologische-maaltijdbox-belgie',
    titel: 'Beste biologische maaltijdbox in België 2026',
    metaTitle: 'Beste biologische maaltijdbox België 2026 — Bio vergeleken',
    metaDescription: 'Welke maaltijdbox heeft de meest biologische ingrediënten in België? We vergeleken Ekomenu, Cirkle en Foodbag. Bijgewerkt april 2026.',
    intro: 'Biologisch eten klinkt eenvoudig, maar niet elke "duurzame" maaltijdbox werkt met gecertificeerde bio-ingrediënten. We vergeleken de drie aanbieders in België die het verst gaan op het vlak van biologisch en duurzaam: van 100% bio-gecertificeerd tot lokale korte keten.',
    aanbevelingen: [
      {
        slug: 'ekomenu',
        badge: '🌿 100% biologisch gecertificeerd',
        reden: 'Ekomenu is de enige maaltijdbox in België waarbij alle ingrediënten biologisch gecertificeerd zijn. Bovenop dat heeft Ekomenu een unieke CO2-footprint tracker per bestelling. Beschikbaar in Vlaanderen en Brussel. 20-25 recepten per week.',
      },
      {
        slug: 'foodbag',
        badge: '🇧🇪 Lokale korte keten',
        reden: 'Foodbag werkt niet met gecertificeerde bio-ingrediënten, maar koopt wel lokaal in bij Belgische boerderijen via een korte keten. De ingrediënten zijn merkbaar verser dan bij internationale aanbieders. Gratis bezorging in heel België.',
      },
    ],
    tabelSlugs: ['ekomenu', 'foodbag', 'hellofresh'],
    faq: [
      { q: 'Welke Belgische maaltijdbox heeft 100% biologische ingrediënten?', a: 'Ekomenu is de enige maaltijdbox in ons overzicht waarbij alle ingrediënten biologisch gecertificeerd zijn. Cirkle werkt ook met bio-ingrediënten en herbruikbare verpakkingen, maar is momenteel enkel beschikbaar in Vlaanderen.' },
      { q: 'Wat is het verschil tussen "biologisch" en "lokaal"?', a: '"Biologisch" betekent dat ingrediënten geteeld zijn zonder synthetische pesticiden of kunstmest, gecertificeerd door een erkend instituut. "Lokaal" betekent dat ingrediënten van nabijgelegen boerderijen komen, maar hoeft niet automatisch biologisch te zijn. Foodbag werkt lokaal maar niet volledig biologisch; Ekomenu werkt biologisch.' },
      { q: 'Is een biologische maaltijdbox duurder?', a: 'Ja. Ekomenu kost meer per portie dan een standaardaanbieder als HelloFresh. Dat weerspiegelt de hogere inkoopkosten van bio-gecertificeerde ingrediënten. Als je bewust biologisch wil eten en dat budget hebt, is het een bewuste keuze.' },
      { q: 'Bezorgt Ekomenu ook in Wallonië?', a: 'Nee. Ekomenu bezorgt momenteel enkel in Vlaanderen en Brussel. Wie in Wallonië woont en biologisch wil eten, kan kijken naar Foodbag (lokale ingrediënten, bezorging in heel België) als haalbaar alternatief.' },
    ],
  },
];

export function getGids(slug: string): Gids | undefined {
  return gidsen.find(g => g.slug === slug);
}

export function generateGidsStaticParams() {
  return gidsen.map(g => ({ slug: g.slug }));
}
