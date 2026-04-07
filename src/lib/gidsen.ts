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
    intro: 'Een maaltijdbox voor het gezin moet snel klaar zijn, genoeg porties bieden én betaalbaar zijn. We vergeleken alle Belgische aanbieders op gezinsvriendelijkheid: grote porties (3-5 personen), snelle bereidingstijd en voldoende keuze voor kieskeurige eters.',
    aanbevelingen: [
      {
        slug: 'foodbag',
        badge: '🏆 Beste voor gezinnen',
        reden: 'Foodbag levert voor 1 tot 5 personen, met snelle recepten (20–30 min) in 5 kookstijlen. De "Quick & Easy" en "Busy Day" formules zijn ideaal voor drukke gezinsavonden. Gratis bezorging in heel België inclusief Wallonië.',
      },
      {
        slug: 'hellofresh',
        badge: '💰 Beste prijs voor gezinnen',
        reden: 'HelloFresh is de voordeligste keuze voor gezinnen: v.a. €5,50/portie voor 1 tot 6 personen. Met 50+ recepten per week vinden ook kieskeurige kinderen altijd iets. Welkomstkorting tot €60 voor nieuwe klanten.',
      },
      {
        slug: 'marley-spoon',
        badge: '👨‍🍳 Beste voor kookliefhebbers',
        reden: 'Marley Spoon (2–4 personen) biedt de meest creatieve recepten voor gezinnen die samen van koken genieten. Let op: bezorging enkel in Vlaanderen en Brussel.',
      },
    ],
    tabelSlugs: ['foodbag', 'hellofresh', 'marley-spoon', 'ekomenu'],
    faq: [
      { q: 'Welke maaltijdbox levert voor 4 of 5 personen?', a: 'Foodbag en HelloFresh leveren voor tot 5 respectievelijk 6 personen. Marley Spoon en Ekomenu leveren maximaal voor 4 personen.' },
      { q: 'Zijn maaltijdboxen geschikt voor kinderen?', a: 'Ja, zeker Foodbag (Quick & Easy) en HelloFresh bieden eenvoudige, snelle recepten die ook kinderen aanspreken. HelloFresh heeft een specifiek "Gezin" filter op de website.' },
      { q: 'Wat kost een maaltijdbox per week voor een gezin van 4?', a: 'Reken op €50–€80 per week voor een gezin van 4 (3 maaltijden/week). HelloFresh is het meest voordelig; Foodbag kost iets meer maar gebruikt lokale ingrediënten.' },
      { q: 'Kan ik de maaltijdbox pauzeren in de schoolvakanties?', a: 'Ja. Zowel HelloFresh, Foodbag als Marley Spoon laten je de levering pauzeren of overslaan, tot 5 dagen voor de volgende leverdatum.' },
    ],
  },
  {
    slug: 'goedkoopste-maaltijdbox-belgie',
    titel: 'Goedkoopste maaltijdbox in België 2026 — vergeleken',
    metaTitle: 'Goedkoopste maaltijdbox België 2026 — Prijsvergelijking',
    metaDescription: 'Wat is de goedkoopste maaltijdbox in België? We vergeleken alle prijzen per portie, bezorgkosten en welkomstdeals. Bijgewerkt april 2026.',
    intro: 'De prijs per portie varieert enorm tussen Belgische maaltijdboxen: van €4,99 tot €10 per portie. Maar de echte kost hangt ook af van bezorgkosten, minimum bestelling en welkomstkorting. We zetten alles op een rij.',
    aanbevelingen: [
      {
        slug: 'hellofresh',
        badge: '💰 Goedkoopste met korting',
        reden: 'Met de welkomstkorting (tot €60 verspreid over 3 boxen) is HelloFresh de goedkoopste optie voor nieuwe klanten. Standaardprijs v.a. €5,50/portie met gratis bezorging — geen extra kosten.',
      },
      {
        slug: 'carrefour-simply-you',
        badge: '🛒 Goedkoopste zonder abonnement',
        reden: 'Carrefour Simply You start v.a. €5,38/portie zonder verplicht abonnement. Ideaal als je eenmalig wil proberen. Met kortingscode BOXNL20 krijg je €20 korting op je eerste bestelling.',
      },
      {
        slug: 'factor',
        badge: '⚡ Goedkoopst kant-en-klaar',
        reden: 'Factor levert kant-en-klare chef-maaltijden v.a. €4,99/portie — de laagste prijs per portie van alle aanbieders. Bezorgkosten €6, maar je bespaart veel tijd doordat je niet hoeft te koken.',
      },
    ],
    tabelSlugs: ['hellofresh', 'carrefour-simply-you', 'factor', 'marley-spoon', 'ekomenu'],
    faq: [
      { q: 'Wat is de goedkoopste maaltijdbox in België per portie?', a: 'Factor is het goedkoopst per portie (v.a. €4,99) maar levert kant-en-klare maaltijden. Bij kookboxen is HelloFresh het voordeligst (v.a. €5,50/portie) met gratis bezorging.' },
      { q: 'Zijn er maaltijdboxen zonder abonnement in België?', a: 'Ja. Carrefour Simply You en Foodmaker werken zonder verplicht abonnement. Je bestelt eenmalig, zonder maandelijkse verplichting.' },
      { q: 'Hoe bereken ik de echte kost van een maaltijdbox?', a: 'Tel prijs/portie × aantal porties + bezorgkosten op. HelloFresh geeft gratis bezorging; Factor rekent €6 bezorgkosten. Met welkomstkorting kan HelloFresh de eerste maand tot €20 goedkoper uitvallen.' },
      { q: 'Zijn maaltijdboxen goedkoper dan boodschappen doen?', a: 'Niet altijd, maar ze besparen tijd en voedselverspilling. Je betaalt €5–€10/portie vs €3–5 bij supermarkt, maar je verspilt geen ingrediënten want alles is exact afgemeten.' },
    ],
  },
];

export function getGids(slug: string): Gids | undefined {
  return gidsen.find(g => g.slug === slug);
}

export function generateGidsStaticParams() {
  return gidsen.map(g => ({ slug: g.slug }));
}
