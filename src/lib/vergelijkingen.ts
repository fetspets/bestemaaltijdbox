import { getAanbieder } from './aanbieders';

export interface Vergelijking {
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
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
    seoTitle: 'HelloFresh vs Foodbag 2026: welke wint? Eerlijke vergelijking',
    seoDescription: 'HelloFresh of Foodbag — welke is goedkoper en beter? We vergeleken prijs, smaak en flexibiliteit. HelloFresh v.a. €7,99 · Foodbag v.a. €9,50.',
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
  {
    slug: 'foodbag-vs-marley-spoon',
    aanbieder1Slug: 'foodbag',
    aanbieder2Slug: 'marley-spoon',
    winnaarPerCategorie: {
      prijs: 'marley-spoon',
      smaak: 'foodbag',
      variatie: 'marley-spoon',
      flexibiliteit: 'foodbag',
      bezorging: 'foodbag',
      duurzaamheid: 'foodbag',
    },
    verdictSlug: 'foodbag',
    verdictTekst: 'Foodbag en Marley Spoon zitten in dezelfde prijsklasse maar spreken een ander publiek aan. Foodbag is de Belgische keuze: lokale ingrediënten, eigen bezorgers en bezorging in heel België inclusief Wallonië. Marley Spoon scoort iets lager op smaak in onze test maar biedt meer receptvariatie en meer culinaire diepgang per recept. Wie bewust lokaal wil eten en het niet erg vindt minder te kiezen, zit goed bij Foodbag. Wie graag uitgebreider kookt en veel variatie wil, vindt dat bij Marley Spoon.',
    faq: [
      { q: 'Wat is het grootste verschil tussen Foodbag en Marley Spoon?', a: 'Foodbag werkt met lokale Belgische ingrediënten en bezorgt in heel België. Marley Spoon heeft een groter receptaanbod en meer culinaire diepgang, maar bezorgt enkel in Vlaanderen en Brussel. Foodbag is de Belgische keuze; Marley Spoon is de kookliefhebbersvariante.' },
      { q: 'Welke box bezorgt in Wallonië?', a: 'Foodbag bezorgt in heel België inclusief Wallonië. Marley Spoon bezorgt momenteel enkel in Vlaanderen en Brussel. Als je in Wallonië woont, is Foodbag de enige van de twee die je kan kiezen.' },
      { q: 'Zijn de ingrediënten van Foodbag echt beter?', a: 'In onze test scoort Foodbag hoger op smaak. De ingrediënten komen van Belgische boerderijen en zijn merkbaar verser dan bij Marley Spoon, dat internationaler inkoopt. Als ingrediëntenkwaliteit voor jou primeert, is Foodbag de sterkere optie.' },
      { q: 'Kan ik Foodbag bestellen zonder abonnement?', a: 'Ja, Foodbag biedt de mogelijkheid om los te bestellen zonder abonnement. Marley Spoon werkt wel met een abonnement maar is wekelijks opzegbaar of te pauzeren.' },
    ],
  },
  {
    slug: 'hellofresh-vs-ekomenu',
    aanbieder1Slug: 'hellofresh',
    aanbieder2Slug: 'ekomenu',
    winnaarPerCategorie: {
      prijs: 'hellofresh',
      smaak: 'hellofresh',
      variatie: 'hellofresh',
      flexibiliteit: 'hellofresh',
      bezorging: 'hellofresh',
      duurzaamheid: 'ekomenu',
    },
    verdictSlug: 'hellofresh',
    verdictTekst: 'HelloFresh wint op prijs, variatie en praktische bereikbaarheid — het bezorgt in heel België, heeft meer recepten per week en kost minder per portie. Ekomenu heeft één onbetwistbaar voordeel: alle ingrediënten zijn 100% biologisch gecertificeerd, iets wat HelloFresh niet kan bieden. Ekomenu heeft ook een unieke CO2-footprint tracker per bestelling. Voor wie budget en variatie telt, is HelloFresh de sterkere keuze. Voor wie biologisch eten als prioriteit stelt en in Vlaanderen of Brussel woont, is Ekomenu het overwegen waard.',
    faq: [
      { q: 'Zijn de ingrediënten van Ekomenu echt 100% biologisch?', a: 'Ja. Ekomenu is de enige maaltijdbox in ons overzicht waarbij alle ingrediënten biologisch gecertificeerd zijn. HelloFresh gebruikt standaard niet-biologische ingrediënten en biedt geen bio-optie aan.' },
      { q: 'Bezorgt Ekomenu ook in Wallonië?', a: 'Nee. Ekomenu bezorgt momenteel enkel in Vlaanderen en Brussel. HelloFresh bezorgt in heel België inclusief Wallonië — dat is een praktisch voordeel voor wie in Wallonië woont.' },
      { q: 'Hoeveel duurder is Ekomenu dan HelloFresh?', a: 'Ekomenu kost meer per portie dan HelloFresh in zijn standaardprijzen. Met de HelloFresh welkomstkorting is het verschil de eerste weken nog groter. Op langere termijn blijft Ekomenu duurder omwille van de biologische inkoopketen.' },
      { q: 'Heeft HelloFresh ook vegetarische of vegan opties?', a: 'Ja, HelloFresh heeft vegetarische recepten, maar geen volledig vegan aanbod. Ekomenu biedt ruimere opties voor vegetariërs en vegans, inclusief filteropties voor glutenvrij en koolhydraatarm.' },
    ],
  },
  {
    slug: 'crowd-cooks-vs-factor',
    seoTitle: 'Crowd Cooks vs Factor 2026: welke kant-en-klare box wint?',
    seoDescription: 'Crowd Cooks of Factor — twee kant-en-klare maaltijdservices vergeleken op prijs, smaak en bezorging. Crowd Cooks: Belgisch met lagere bezorgkosten.',
    aanbieder1Slug: 'crowd-cooks',
    aanbieder2Slug: 'factor',
    winnaarPerCategorie: {
      prijs: 'factor',
      smaak: 'crowd-cooks',
      variatie: 'factor',
      flexibiliteit: 'factor',
      bezorging: 'crowd-cooks',
      duurzaamheid: 'crowd-cooks',
    },
    verdictSlug: 'factor',
    verdictTekst: 'Crowd Cooks en Factor zitten allebei in het kant-en-klaar-segment: je kookt niet, je warmt op. In onze beoordeling eindigen ze gelijk (allebei 7,8/10), en op de onderliggende criteria evenaart of overtreft Factor Crowd Cooks telkens: dezelfde smaakscore, een lagere instapprijs per portie (€4,99), meer keuze (18 gerechten tegenover 12) en vijf uitgesproken dieetstijlen. Daarom trekt Factor het in deze directe vergelijking nipt over de streep. Crowd Cooks blijft een sterke keuze voor wie bewust Belgisch wil eten, royale porties van 450+ gram zoekt en de lagere bezorgkost belangrijk vindt (€4,90 tegenover €5,99). Het verschil is klein — laat je keuze afhangen van wat voor jou het zwaarst weegt: variatie en prijs (Factor), of Belgische verankering en bezorgkost (Crowd Cooks).',
    faq: [
      { q: 'Wat is het grootste verschil tussen Crowd Cooks en Factor?', a: 'Beide leveren kant-en-klare maaltijden die je enkel opwarmt. Crowd Cooks is een Belgische service met €4,90 bezorgkosten op zondag of maandag; Factor hoort bij de HelloFresh Group en rekent €5,99 bezorgkosten per levering. Factor heeft een ruimer aanbod (18 gerechten), Crowd Cooks legt de nadruk op royale porties van 450+ gram.' },
      { q: 'Welke is goedkoper: Crowd Cooks of Factor?', a: 'Factor heeft een lagere instapprijs per portie, en de bezorgkosten liggen dicht bij elkaar (€5,99 bij Factor tegenover €4,90 bij Crowd Cooks). Crowd Cooks ligt qua prijs per portie in de premium-klasse. Reken voor jouw situatie de totaalprijs inclusief bezorging uit — bij wekelijkse leveringen tellen de bezorgkosten in beide gevallen op.' },
      { q: 'Hoeveel gerechten kan ik per week kiezen?', a: 'Factor biedt 18 maaltijden per week in vijf dieetstijlen, waaronder High-Protein en Calorie-Conscious. Crowd Cooks heeft elke week 12 nieuwe gerechten. Wie veel variatie of specifieke dieetstijlen wil, heeft bij Factor meer keuze.' },
      { q: 'Kan ik beide flexibel pauzeren of opzeggen?', a: 'Ja. Zowel Crowd Cooks als Factor werken met een flexibel abonnement dat je wekelijks kan aanpassen, pauzeren of opzeggen. Bij Crowd Cooks kan dat met één klik.' },
    ],
  },
];

export function getVergelijking(slug: string): Vergelijking | undefined {
  return vergelijkingen.find(v => v.slug === slug);
}

export function generateVergelijkingStaticParams() {
  return vergelijkingen.map(v => ({ slug: v.slug }));
}
