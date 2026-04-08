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
    verdictTekst: 'HelloFresh is merkbaar goedkoper per portie en biedt meer receptkeuze per week — dat maakt het makkelijker om langdurig vol te houden zonder eentonigheid. Foodbag scoort beter op smaak en ingrediëntenkwaliteit, wat je merkt als je de twee naast elkaar legt: de grondstoffen zijn verser en lokaler. Als budget de prioriteit is, of als je veel variatie wil, is HelloFresh de sterkere keuze. Als je bewust Belgisch wil eten en kwaliteit boven kwantiteit stelt, is Foodbag interessanter.',
    faq: [
      { q: 'Wat is goedkoper: HelloFresh of Foodbag?', a: 'HelloFresh is merkbaar goedkoper per portie. Foodbag kost aanzienlijk meer, maar dat weerspiegelt de lokale inkoop en kortere keten. Voor wie budget een rol speelt, is HelloFresh de duidelijke keuze — zeker met de welkomstkorting voor nieuwe klanten.' },
      { q: 'Welke box heeft betere ingrediënten?', a: 'Foodbag wint op ingrediëntenkwaliteit. De grondstoffen komen van Belgische boerderijen via een kortere keten — dat is merkbaar aan de versheid. HelloFresh koopt internationaal in, wat de lagere prijs verklaart maar ook het verschil in kwaliteitsbeleving.' },
      { q: 'Welke box is praktischer als je weinig kooktijd hebt?', a: 'Foodbag heeft een "Busy Day" lijn met maaltijden klaar in 20 minuten. HelloFresh heeft een "Quick & Easy" categorie met recepten klaar in 25–30 minuten. Beide zijn goed haalbaar op drukke avonden — Foodbag heeft een licht voordeel als snelheid je prioriteit is.' },
      { q: 'Kan ik beide maaltijdboxen opzeggen wanneer ik wil?', a: 'Ja. Zowel HelloFresh als Foodbag zijn wekelijks opzegbaar of te pauzeren, tot 5 dagen voor je volgende levering. Foodbag heeft bovendien een optie om los te bestellen zonder abonnement.' },
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
    verdictTekst: 'HelloFresh biedt meer recepten per week en levert in heel België — dat zijn praktische voordelen die voor veel mensen doorslaggevend zijn. Marley Spoon scoort hoger op smaak in onze test, en de recepten zijn uitgebreider en culinairder van opzet. Het verschil zit hem in het kookproces zelf: HelloFresh is efficiënt, Marley Spoon is een beleving. Kies HelloFresh als je snel en gevarieerd wil koken voor het dagelijkse leven. Kies Marley Spoon als koken voor jou meer is dan een middel om te eten.',
    faq: [
      { q: 'Levert Marley Spoon ook in Wallonië?', a: 'Nee, Marley Spoon bezorgt momenteel enkel in Vlaanderen en Brussel. Voor wie in Wallonië woont, is HelloFresh de enige vergelijkbare keuze met landelijke dekking.' },
      { q: 'Heeft HelloFresh of Marley Spoon meer recepten?', a: 'HelloFresh biedt meer recepten per week. Marley Spoon heeft een kleiner aanbod, maar de recepten zijn uitgebreider van bereiding en vereisen doorgaans meer kooktijd. Wie veel variatie wil, kiest HelloFresh; wie diepgang wil, kiest Marley Spoon.' },
      { q: 'Voor wie zijn de recepten van Marley Spoon echt geschikt?', a: 'Marley Spoon is interessant voor wie koken als ontspanning ziet — iemand die graag een half uur extra in de keuken staat en het resultaat wil proeven. Het is minder geschikt voor drukke avonden of wie snel wil eten. De recepten zijn verfijnder en vragen meer betrokkenheid.' },
      { q: 'Welke maaltijdbox is beter voor beginners?', a: 'HelloFresh is toegankelijker voor beginners: de recepten zijn stap voor stap uitgelegd, de bereidingstijd is korter en de instructies zijn visueel duidelijk. Marley Spoon gaat ervan uit dat je al wat kookervaring hebt.' },
    ],
  },
];

export function getVergelijking(slug: string): Vergelijking | undefined {
  return vergelijkingen.find(v => v.slug === slug);
}

export function generateVergelijkingStaticParams() {
  return vergelijkingen.map(v => ({ slug: v.slug }));
}
