import { getAanbieder } from './aanbieders';

export interface Vergelijking {
  slug: string;
  aanbieder1Slug: string;
  aanbieder2Slug: string;
  winnaarPerCategorie: {
    prijs: string;
    smaak: string;
    variatie: string;
    flexibiliteit: string;
    bezorging: string;
    duurzaamheid: string;
  };
  verdictSlug: string;
  verdictTekst: string;
  faq: Array<{ q: string; a: string }>;
}

export const vergelijkingen: Vergelijking[] = [
  {
    slug: 'hellofresh-vs-foodbag',
    aanbieder1Slug: 'hellofresh',
    aanbieder2Slug: 'foodbag',
    winnaarPerCategorie: {
      prijs: 'hellofresh',
      smaak: 'foodbag',
      variatie: 'hellofresh',
      flexibiliteit: 'hellofresh',
      bezorging: 'foodbag',
      duurzaamheid: 'foodbag',
    },
    verdictSlug: 'hellofresh',
    verdictTekst: 'HelloFresh wint op prijs (v.a. €5,50 vs €9,50/portie), receptvariatie (50+ vs 40) en flexibiliteit. Foodbag blinkt uit in smaak, lokale ingrediënten en duurzaamheid. Kies HelloFresh als budget je prioriteit is; kies Foodbag als je bewust Belgisch wil eten met topkwaliteit.',
    faq: [
      { q: 'Wat is goedkoper: HelloFresh of Foodbag?', a: 'HelloFresh is significant goedkoper: v.a. €5,50 per portie tegenover €9,50 bij Foodbag. Met de welkomstkorting (tot €60) is HelloFresh de eerste weken nog voordeliger.' },
      { q: 'Welke box heeft betere ingrediënten?', a: 'Foodbag wint op ingrediëntenkwaliteit. De ingrediënten komen van lokale Belgische boerderijen — merkbaar verser dan bij HelloFresh, dat internationaal inkoopt.' },
      { q: 'Kan ik beide maaltijdboxen opzeggen wanneer ik wil?', a: 'Ja. Zowel HelloFresh als Foodbag zijn wekelijks opzegbaar of te pauzeren, tot 5 dagen voor je volgende levering.' },
    ],
  },
  {
    slug: 'hellofresh-vs-marley-spoon',
    aanbieder1Slug: 'hellofresh',
    aanbieder2Slug: 'marley-spoon',
    winnaarPerCategorie: {
      prijs: 'hellofresh',
      smaak: 'marley-spoon',
      variatie: 'hellofresh',
      flexibiliteit: 'hellofresh',
      bezorging: 'hellofresh',
      duurzaamheid: 'marley-spoon',
    },
    verdictSlug: 'hellofresh',
    verdictTekst: 'HelloFresh wint op prijs-kwaliteitverhouding, receptvariatie (50+ vs 40) en bezorgbereik (heel België vs enkel Vlaanderen+Brussel). Marley Spoon scoort hoger op smaak en creatievere chef-recepten. Kies HelloFresh voor dagelijks gebruik; kies Marley Spoon als je van uitgebreidere, culinaire bereiding geniet.',
    faq: [
      { q: 'Levert Marley Spoon ook in Wallonië?', a: 'Nee, Marley Spoon bezorgt momenteel enkel in Vlaanderen en Brussel. HelloFresh levert in heel België inclusief Wallonië.' },
      { q: 'Heeft HelloFresh of Marley Spoon meer recepten?', a: 'HelloFresh heeft met 50+ recepten per week het grootste aanbod. Marley Spoon biedt 40 recepten, maar die zijn creatiever en vereisen meer kooktijd (45–60 min vs 25–40 min).' },
      { q: 'Welke maaltijdbox is beter voor beginners?', a: 'HelloFresh is meer geschikt voor beginners dankzij de eenvoudigere recepten en kortere bereidingstijd. Marley Spoon is beter voor ervaren thuiskoks.' },
    ],
  },
];

export function getVergelijking(slug: string): Vergelijking | undefined {
  return vergelijkingen.find(v => v.slug === slug);
}

export function generateVergelijkingStaticParams() {
  return vergelijkingen.map(v => ({ slug: v.slug }));
}
