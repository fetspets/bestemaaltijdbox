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
        reden: 'Carrefour Simply You is interessant als je eenmalig wil proberen zonder abonnementsrisico. Met kortingscode BOXNL20 krijg je €20 korting op je eerste bestelling. Beperkingen: enkel maandaglevering en een smaller receptaanbod dan de grote spelers.',
      },
      {
        slug: 'factor',
        badge: '⚡ Laagste prijs per portie',
        reden: 'Factor heeft de laagste prijs per portie van alle aanbieders. Maar het gaat om kant-en-klare maaltijden die je enkel opwarmt — geen kookbeleving. Tel de bezorgkosten van €6 mee in je vergelijking. Interessant voor wie kooktijd wil besparen.',
      },
    ],
    tabelSlugs: ['hellofresh', 'carrefour-simply-you', 'factor', 'marley-spoon', 'ekomenu'],
    faq: [
      { q: 'Wat is de goedkoopste maaltijdbox in België per portie?', a: 'Factor heeft de laagste prijs per portie maar levert kant-en-klare maaltijden en rekent bezorgkosten aan. Bij klassieke kookboxen is HelloFresh het voordeligst, met gratis bezorging. Carrefour Simply You is de goedkoopste optie zonder abonnement.' },
      { q: 'Hoe bereken ik de echte kost van een maaltijdbox?', a: 'Reken: portieprijs × aantal porties + bezorgkosten − welkomstkorting. HelloFresh geeft gratis bezorging; Factor rekent €6 bezorgkosten. Voor een realistisch beeld: vergelijk ook de prijs na de welkomstperiode, niet enkel de introductieprijs.' },
      { q: 'Zijn er maaltijdboxen zonder abonnement in België?', a: 'Ja. Carrefour Simply You en Foodmaker werken zonder verplicht abonnement. Je bestelt wanneer je wil, zonder wekelijkse verplichting. Foodbag heeft ook een "los bestellen" optie.' },
      { q: 'Zijn maaltijdboxen goedkoper dan boodschappen doen?', a: 'Per portie betaal je doorgaans meer dan bij de supermarkt. Maar maaltijdboxen leveren exacte hoeveelheden — weinig verspilling. Voor wie regelmatig ingrediënten weggooit of impulsaankopen doet, kan het werkelijke verschil kleiner zijn dan gedacht.' },
    ],
  },
];

export function getGids(slug: string): Gids | undefined {
  return gidsen.find(g => g.slug === slug);
}

export function generateGidsStaticParams() {
  return gidsen.map(g => ({ slug: g.slug }));
}
