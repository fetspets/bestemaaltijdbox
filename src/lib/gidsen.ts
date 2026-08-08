import { LAATST_BIJGEWERKT } from './site';

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
    metaTitle: 'Goedkoopste maaltijdbox in België 2026 — prijs en welkomstvoordelen vergeleken',
    metaDescription: `Wat is écht de goedkoopste maaltijdbox in België? Prijzen per portie, bezorgkosten en welkomstvoordelen voor alle aanbieders. Bijgewerkt ${LAATST_BIJGEWERKT}.`,
    intro: 'De prijs per portie varieert enorm tussen Belgische maaltijdboxen. Maar de echte kost bereken je zo: portieprijs × aantal porties + bezorgkosten − welkomstkorting. We zetten alle opties naast elkaar, inclusief de addertjes onder het gras.',
    aanbevelingen: [
      {
        slug: 'hellofresh',
        badge: '💰 Voordeligste met welkomstkorting',
        reden: 'Voor nieuwe klanten is HelloFresh dankzij de welkomstkorting (verspreid over de eerste boxen) een van de meest betaalbare opties. Gratis bezorging, geen extra kosten. Na de welkomstperiode stijgt de standaardprijs — plan op voorhand of je wil verderzetten of pauzeren.',
      },
      {
        slug: 'foodprepper',
        badge: '🛒 Voordeligst zonder abonnement',
        reden: 'Foodprepper heeft de laagste prijs per portie met gratis bezorging (v.a. €4,75) en vraagt geen verplicht abonnement — je bestelt wanneer het uitkomt (min. bestelbedrag €55). Nieuwe klanten krijgen €45 welkomstkorting over de eerste 3 bestellingen. Beperking: enkel levering in Vlaanderen en Brussel.',
      },
      {
        slug: 'factor',
        badge: '⚡ Laagste prijs per portie',
        reden: 'Factor heeft een van de laagste prijzen per portie van alle aanbieders. Maar het gaat om kant-en-klare maaltijden die je enkel opwarmt — geen kookbeleving. Tel de bezorgkosten mee in je vergelijking. Interessant voor wie kooktijd wil besparen.',
      },
    ],
    tabelSlugs: ['hellofresh', 'foodprepper', 'factor', 'marley-spoon', 'ekomenu'],
    uitlegBlokken: [
      {
        titel: 'Goedkoopste maaltijdbox voor een koppel',
        tekst: 'HelloFresh is de goedkoopste kookbox voor 2 personen: gratis bezorging, groot receptaanbod en regelmatige welkomstvoordelen voor nieuwe klanten. Na de welkomstperiode stijgt de standaardprijs — plan op voorhand om te pauzeren of te stoppen als je de kost wil beheersen. Foodprepper is een goed alternatief als je zonder verplicht abonnement wil proberen.',
      },
      {
        titel: 'Goedkoopste maaltijdbox voor een gezin',
        tekst: 'HelloFresh heeft de meeste receptkeuze voor grote gezinnen en levert ook voor 4-5 personen met gratis bezorging. Foodbag biedt ook een "los bestellen" optie voor gezinnen die niet wekelijks willen vastzitten. Let op: grotere formules zijn niet altijd proportioneel goedkoper — bereken altijd de prijs per portie voor je vergelijkt.',
      },
      {
        titel: 'Goedkoopste maaltijdbox voor 1 persoon',
        tekst: 'HelloFresh is de enige grote kookbox die levert voor 1 persoon, met gratis bezorging. Factor (kant-en-klare maaltijden) heeft een lagere prijs per portie maar rekent bezorgkosten aan — tel die altijd mee in je vergelijking. Foodprepper laat je bestellen zonder verplicht abonnement, ideaal om het concept te testen zonder financieel risico.',
      },
    ],
    faq: [
      { q: 'Wat is de goedkoopste maaltijdbox per portie in België?', a: 'Foodprepper heeft de laagste prijs per portie met gratis bezorging (v.a. €4,75, min. bestelbedrag €55). Factor ligt in aankoopprijs iets lager (v.a. €4,99) maar rekent €5,99 bezorgkosten per levering. HelloFresh kost v.a. €7,99 per portie maar biedt de beste welkomstkorting voor nieuwe klanten.' },
      { q: 'Welke maaltijdbox is goedkoopst voor nieuwe klanten?', a: 'HelloFresh geeft tot €60 korting + 8 weken gratis extras voor nieuwe klanten. Foodbag geeft €60 korting (3x €20) op je eerste 3 bestellingen, Marley Spoon tot 50% korting op je eerste 4 boxen, en Foodprepper €45 korting verspreid over de eerste 3 bestellingen.' },
      { q: 'Is er een goedkope maaltijdbox zonder abonnement in België?', a: 'Ja. Foodprepper (v.a. €4,75/portie, gratis bezorging) en Foodmaker werken zonder verplicht abonnement. Foodbag heeft ook een "los bestellen" optie — handig als je flexibel wil blijven zonder wekelijkse verplichting.' },
      { q: 'Welke maaltijdbox heeft de laagste bezorgkosten in België?', a: 'HelloFresh, Foodbag, Ekomenu, Foodmaker en Foodprepper bieden allemaal gratis bezorging. Factor en Marley Spoon rekenen €5,99 bezorgkosten per levering — tel die altijd mee in je vergelijking van de echte prijs per maaltijd.' },
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
