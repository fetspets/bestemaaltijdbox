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
];

export function getGids(slug: string): Gids | undefined {
  return gidsen.find(g => g.slug === slug);
}

export function generateGidsStaticParams() {
  return gidsen.map(g => ({ slug: g.slug }));
}
