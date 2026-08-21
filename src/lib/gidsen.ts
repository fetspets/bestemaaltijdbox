/**
 * Eén rij in de prijstabel. Alleen de redactionele velden staan hier:
 * prijs per portie, bezorgkost en weekprijs komen uit aanbieders.ts en
 * worden bij het renderen berekend, zodat ze niet uit de pas kunnen lopen.
 */
export interface GidsPrijsRij {
  slug: string;
  /** Uitgelicht label in de kolom "Onze keuze". */
  badge?: string;
  /** Waarschuwing onder de naam, bv. 'min. bestelbedrag €55'. */
  noot?: string;
}

export interface GidsTopKeuze {
  slug: string;
  badge: string;
  accent: string;
  metDeal: string;
  naDeal: string;
  uitleg: string;
  dealOpmerking: string;
}

export interface GidsSituatie {
  situatie: string;
  winnaarNaam: string;
  slug: string;
  detail: string;
  achtergrond: string;
  rand: string;
}

export interface Gids {
  slug: string;
  titel: string;
  metaTitle: string;
  metaDescription: string;
  broodkruimel: string;
  introParagrafen: string[];
  formule: string;
  slotIntro: string;
  winnaar: {
    kop: string;
    slug: string;
    naam: string;
    prijsRegel: string;
    dealRegel: string;
    alternatiefInleiding: string;
    alternatiefSlug: string;
    alternatiefLabel: string;
  };
  prijsTabel: {
    kop: string;
    subkop: string;
    /** Aantal porties waarop de weekprijs gebaseerd is (2 personen x 3 maaltijden). */
    portiesPerWeek: number;
    rijen: GidsPrijsRij[];
    voetnoot: string;
  };
  topKeuzes: { kop: string; intro: string; items: GidsTopKeuze[] };
  verborgenKosten: { kop: string; items: Array<{ icon: string; titel: string; tekst: string }> };
  faqKop: string;
  faq: Array<{ q: string; a: string }>;
  perSituatie: { kop: string; items: GidsSituatie[] };
}

export const gidsen: Gids[] = [
  {
    slug: 'goedkoopste-maaltijdbox-belgie',
    titel: 'Goedkoopste maaltijdbox België 2026 — echte prijsvergelijking per week',
    metaTitle: 'Goedkoopste maaltijdbox België 2026 — echte weekprijs van 7 aanbieders',
    metaDescription: 'Welke maaltijdbox is écht het goedkoopst? Prijs per week voor 7 aanbieders, inclusief bezorgkosten en verborgen kosten. Met rekensom en welkomstvoordelen.',
    broodkruimel: 'Goedkoopste maaltijdbox',
    introParagrafen: [
      'De prijs per portie is een misleidende manier om maaltijdboxen te vergelijken. Factor lijkt goedkoopst op €4,99/portie — maar als je de €5,99 bezorgkost per week optelt, betaal je meer dan bij Foodprepper (v.a. €4,75/portie, gratis bezorging). De echte formule:',
    ],
    formule: 'weekprijs = (porties × prijs/portie) + bezorgkost',
    slotIntro: 'We berekenden de weekprijs voor 2 personen met 3 maaltijden (= 6 porties) voor alle 7 aanbieders, inclusief bezorgkost en welkomstdeals. Zo zie je meteen wie écht het voordeligst is.',
    winnaar: {
      kop: '🏆 Goedkoopste kookbox voor de meeste mensen',
      slug: 'hellofresh',
      naam: 'HelloFresh',
      prijsRegel: '€47,94/week · gratis bezorging',
      dealRegel: 'Tot €60 korting op je eerste 3 boxen',
      alternatiefInleiding: 'Wil je absoluut de laagste prijs per portie zonder verplicht abonnement? →',
      alternatiefSlug: 'foodprepper',
      alternatiefLabel: 'Foodprepper: v.a. €4,75/portie',
    },
    prijsTabel: {
      kop: 'Prijsvergelijking: 2 personen, 3 maaltijden/week',
      subkop: 'Berekening: 6 porties × prijs/portie + bezorgkost. Gesorteerd op beste keuze.',
      portiesPerWeek: 6,
      // Volgorde is redactioneel (beste keuze eerst), bewust niet op prijs gesorteerd.
      rijen: [
        { slug: 'hellofresh', badge: '⭐ Beste keuze' },
        { slug: 'ekomenu', badge: '🌱 Beste bio' },
        { slug: 'marley-spoon', badge: '🎯 Beste deal', noot: '+ €5,99 bezorgkost' },
        { slug: 'foodprepper', badge: '💸 Laagste prijs/portie', noot: 'min. bestelbedrag €55' },
        { slug: 'factor', noot: '+ €5,99 bezorgkost' },
        { slug: 'foodbag' },
        { slug: 'foodmaker' },
      ],
      voetnoot: 'Prijzen zijn richtprijzen — controleer de actuele tarieven op de site van de aanbieder. Weekprijs berekend voor 2 personen, 3 maaltijden, reguliere prijs (zonder welkomstkorting).',
    },
    topKeuzes: {
      kop: 'Top 3 goedkoopste — met en zonder welkomstdeal',
      intro: 'Welkomstdeals zijn tijdelijk — ze gelden enkel voor nieuwe klanten op de eerste boxen. Hieronder de eerlijke vergelijking: wat betaal je met deal, en wat betaal je daarna?',
      items: [
        {
          slug: 'hellofresh',
          badge: '⭐ Beste keuze voor de meeste mensen',
          accent: '#1B4332',
          metDeal: 'tot €60 korting op je eerste 3 boxen',
          naDeal: '€47,94/week (reguliere prijs)',
          uitleg: 'HelloFresh combineert een grote receptkeuze (40+ per week), gratis bezorging en een sterke welkomstdeal: tot €60 korting verdeeld over je eerste 3 boxen (€27,50 op box 1, €10 op box 2, €7,50 op box 3). De korting wordt automatisch toegepast via de link — geen code nodig. Wekelijks opzegbaar, leverbaar voor 1 tot 6 personen.',
          dealOpmerking: 'Tot €60 korting op je eerste 3 boxen · exclusief voor nieuwe klanten · automatisch via link.',
        },
        {
          slug: 'ekomenu',
          badge: '🌱 Beste bio-keuze',
          accent: '#15803D',
          metDeal: '€37,08/week',
          naDeal: '€37,08/week (reguliere prijs)',
          uitleg: 'Ekomenu is de goedkoopste kookbox met biologische ingrediënten: €6,18/portie, gratis bezorging, geen bezorgkost. Met €37,08/week voor 2 personen en 3 maaltijden zit je ver onder de meeste conventionele kookboxen. Wekelijks opzegbaar.',
          dealOpmerking: 'Biologische ingrediënten · gratis bezorging · wekelijks opzegbaar.',
        },
        {
          slug: 'marley-spoon',
          badge: '🎯 Beste welkomstdeal per portie',
          accent: '#7C3AED',
          metDeal: '~€44/week gemiddeld · box 1 €25,99 (50% + gratis bezorging)',
          naDeal: '€58,01/week (reguliere prijs)',
          uitleg: '50% + 20% + 15% + 10% korting op de eerste 4 boxen maakt Marley Spoon tijdens de welkomstperiode bijzonder voordelig — je eerste box kost €25,99 inclusief gratis bezorging. Chef-kwaliteitsrecepten met 40+ keuzes per week. Na de welkomstperiode: €52,02/week + €5,99 bezorgkost. Bezorging enkel in Vlaanderen en Brussel.',
          dealOpmerking: 'Korting automatisch via link · 4 boxen · enkel Vlaanderen & Brussel',
        },
      ],
    },
    verborgenKosten: {
      kop: 'Verborgen kosten om rekening mee te houden',
      items: [
        {
          icon: '📦',
          titel: 'Bezorgkost',
          tekst: 'Factor rekent €5,99 per levering, Marley Spoon eveneens €5,99 — dat tikt aan bij wekelijks bestellen. HelloFresh, Foodbag, Ekomenu en Foodprepper leveren gratis. Vergelijk altijd de weekprijs inclusief bezorgkost, niet enkel de portieprijs.',
        },
        {
          icon: '📏',
          titel: 'Minimumafname',
          tekst: 'De meeste aanbieders vereisen minimum 2 maaltijden per week. Sommige rekenen een duurdere portieprijs aan als je minder dan het standaardaantal bestelt. Check altijd de minimumbox van je gekozen aanbieder.',
        },
        {
          icon: '📈',
          titel: 'Reguliere prijs na welkomstperiode',
          tekst: 'Welkomstdeals gelden voor nieuwe klanten op de eerste 3–5 boxen. Daarna stijgt de prijs naar het standaardtarief. Plan op voorhand: stel een herinnering in om je abonnement te pauzeren of op te zeggen als je de standaardprijs te hoog vindt.',
        },
        {
          icon: '⏰',
          titel: 'Opzegtermijn',
          tekst: 'HelloFresh, Foodbag en Marley Spoon laten je opzeggen of pauzeren tot 5 dagen voor de volgende levering. Mis je die deadline, dan wordt de volgende box toch verstuurd. Foodprepper en Foodmaker hebben geen verplicht abonnement — geen opzegtermijn.',
        },
      ],
    },
    faqKop: 'Veelgestelde vragen over prijs',
    faq: [
      {
        q: 'Wat kost een maaltijdbox gemiddeld per maand in België?',
        a: 'Voor een koppel met 3 maaltijden per week betaal je gemiddeld €130–145/maand bij HelloFresh of Marley Spoon (reguliere prijs). HelloFresh heeft een welkomstdeal met tot €60 korting op je eerste 3 boxen, waardoor de eerste weken fors goedkoper uitvallen. Foodbag is duurder: €228/maand aan reguliere prijs.',
      },
      {
        q: 'Is Factor echt de goedkoopste maaltijdbox in België?',
        a: 'Factor heeft een van de laagste aankoopprijzen per portie (€4,99), maar rekent €5,99 bezorgkost per levering. Voor 2 personen met 3 maaltijden per week kom je op €35,93/week. Foodprepper ligt met v.a. €4,75/portie en gratis bezorging lager, al geldt daar een minimum bestelbedrag van €55. Factor levert kant-en-klare maaltijden, geen kookbox.',
      },
      {
        q: 'Wat is de goedkoopste maaltijdbox zonder abonnement in België?',
        a: 'Foodprepper, Foodmaker en Foodbag (los bestellen) werken zonder verplicht abonnement. Je bestelt wanneer het uitkomt, zonder wekelijkse verplichting. Foodprepper biedt daarbij €45 welkomstkorting over de eerste 3 bestellingen.',
      },
      {
        q: 'Wanneer is een maaltijdbox goedkoper dan zelf boodschappen doen?',
        a: 'Als je regelmatig ingrediënten weggooit, impulsaankopen doet in de supermarkt of regelmatig eten bestelt via Deliveroo — dan is een maaltijdbox al snel goedkoper. De exacte hoeveelheden per recept elimineren verspilling bijna volledig. Reken je ook de kost van boodschappenritten en tijd mee, dan wordt het voordeel nog groter.',
      },
    ],
    perSituatie: {
      kop: 'Wie is écht het goedkoopst — per situatie',
      items: [
        {
          situatie: 'Goedkoopste kookbox voor een koppel (2p)',
          winnaarNaam: 'Ekomenu',
          slug: 'ekomenu',
          detail: '€37,08/week (reguliere prijs, €6,18/portie), gratis bezorging — de voordeligste klassieke kookbox. HelloFresh is een goed alternatief als je meer receptkeuze wil (40+ recepten).',
          achtergrond: '#F0FDF4',
          rand: '#BBF7D0',
        },
        {
          situatie: 'Goedkoopste kookbox voor een gezin (4p)',
          winnaarNaam: 'HelloFresh',
          slug: 'hellofresh',
          detail: '€95,88/week (4p, 3 maaltijden, 12 porties × €7,99), gratis bezorging. HelloFresh levert als enige voor tot 6 personen. Welkomstdeal: tot €60 korting op je eerste 3 boxen.',
          achtergrond: '#EEF2FF',
          rand: '#C7D2FE',
        },
        {
          situatie: 'Goedkoopste optie voor 1 persoon',
          winnaarNaam: 'HelloFresh',
          slug: 'hellofresh',
          detail: '€23,97/week (1p, 3 maaltijden, 3 porties × €7,99), gratis bezorging. HelloFresh is de enige grote kookbox die levert voor 1 persoon. Factor heeft een lagere portieprijs maar de €5,99 bezorgkost maakt het voor 1 persoon duurder per portie.',
          achtergrond: '#FFF7ED',
          rand: '#FED7AA',
        },
        {
          situatie: 'Goedkoopste als je geen abonnement wil',
          winnaarNaam: 'Foodprepper',
          slug: 'foodprepper',
          detail: 'v.a. €4,75/portie, gratis bezorging en geen verplicht abonnement (min. bestelbedrag €55). Bestellen wanneer het uitkomt, met €45 welkomstkorting. Foodmaker en Foodbag (los bestellen) werken ook zonder vast abonnement.',
          achtergrond: '#F5F3FF',
          rand: '#DDD6FE',
        },
      ],
    },
  },
];

export function getGids(slug: string): Gids | undefined {
  return gidsen.find(g => g.slug === slug);
}

export function generateGidsStaticParams() {
  return gidsen.map(g => ({ slug: g.slug }));
}

/**
 * Weekprijs bij het reguliere tarief, inclusief bezorgkost. Berekend in plaats
 * van overgetypt: de vorige, handmatige tabel had Marley Spoon op €57,98 staan
 * terwijl 6 × €8,67 + €5,99 = €58,01.
 */
export function berekenWeekprijs(
  a: { prijsPerPortie: number; gratisBezorging: boolean; bezorgkosten?: number },
  porties: number
): number {
  const bezorging = a.gratisBezorging ? 0 : (a.bezorgkosten ?? 0);
  return a.prijsPerPortie * porties + bezorging;
}
