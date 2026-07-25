// Data voor de gesponsorde Factor-vergelijkpagina's (Factor vs een kookbox).
// Bewust eerlijke "hangt af van of je wil koken"-opzet: Factor is kant-en-klaar
// en scoort overall lager dan deze kookboxen — we presenteren Factor als de
// beste keuze voor wie NIET wil koken, niet als algemene winnaar.
// De harde cijfers komen uit src/lib/aanbieders.ts via getAanbieder().

export interface FactorVergelijking {
  slug: string;
  kookboxSlug: string;
  seoTitle: string;
  seoDescription: string;
  /** Bereidingstijd van de kookbox (niet in aanbieders.ts). */
  kookboxKooktijd: string;
  /** Levergebied van de kookbox. */
  kookboxLevergebied: string;
  intro: string[];
  kiesFactorAls: string[];
  kiesKookboxAls: string[];
  verdictTekst: string;
  faq: Array<{ q: string; a: string }>;
}

export const factorVergelijkingen: FactorVergelijking[] = [
  {
    slug: 'factor-vs-hellofresh',
    kookboxSlug: 'hellofresh',
    seoTitle: 'Factor vs HelloFresh 2026: opwarmen of zelf koken?',
    seoDescription: 'Factor (kant-en-klaar) vs HelloFresh (kookbox): prijs, gemak, variatie en voor wie elk het beste is. Eerlijke vergelijking — het hangt af van of je wil koken.',
    kookboxKooktijd: '25–40 min',
    kookboxLevergebied: 'heel België',
    intro: [
      'Factor en HelloFresh lossen allebei het "wat eten we vanavond"-probleem op, maar op een totaal andere manier. Bij HelloFresh kook je zelf met verse ingrediënten; bij Factor warm je een kant-en-klare maaltijd op in 2 tot 3 minuten. Dat verschil bepaalt welke bij jou past.',
      'HelloFresh is onze nummer 1 en scoort overall hoger (8,4 tegenover 7,8): meer receptvariatie (40+ per week), gratis bezorging en een sterke welkomstdeal. Factor kiest voor maximaal gemak — geen koken, klaar in enkele minuten, met vijf dieetstijlen zoals High-Protein en Calorie-Conscious.',
      'De kernvraag is simpel: wil je koken of niet?',
    ],
    kiesFactorAls: [
      'Je geen tijd of zin hebt om te koken en meteen wil eten',
      'Je gezond wil eten met vaste voedingswaarden (High-Protein, Calorie-Conscious)',
      'Je een druk schema hebt en gemak boven kookbeleving stelt',
      'Je de laagste prijs per portie wil (€4,99) — mits je de €5,99 bezorging meerekent',
    ],
    kiesKookboxAls: [
      'Je graag zelf kookt en de kookbeleving belangrijk vindt',
      'Je veel receptvariatie wil: 40+ recepten per week',
      'Je gratis bezorging verkiest, zonder bezorgkosten per levering',
      'Je de hoogst scorende allrounder zoekt (8,4/10 in onze test)',
    ],
    verdictTekst: 'Er is geen absolute winnaar — het hangt af van of je wil koken. HelloFresh scoort overall hoger en is de betere keuze voor wie graag kookt, veel variatie wil en gratis bezorging verkiest. Factor is de sterkere keuze voor wie níét wil koken: klaar in 2–3 minuten, met dieetstijlen voor sporters en caloriebewuste eters. Kook je graag? Dan is HelloFresh de logische keuze. Wil je enkel opwarmen? Dan is Factor jouw box.',
    faq: [
      { q: 'Wat is het verschil tussen Factor en HelloFresh?', a: 'Factor is een kant-en-klare maaltijdservice: de gerechten worden vers bereid geleverd en je warmt ze op in 2–3 minuten. HelloFresh is een klassieke kookbox: je krijgt losse verse ingrediënten en een recept, en kookt zelf in 25–40 minuten.' },
      { q: 'Welke is goedkoper: Factor of HelloFresh?', a: 'Factor heeft de laagste prijs per portie (v.a. €4,99), maar rekent €5,99 bezorgkosten per levering. HelloFresh kost v.a. €7,99 per portie met gratis bezorging en tot €60 welkomstkorting voor nieuwe klanten. Reken je totaalprijs uit: portieprijs × porties + bezorgkost − korting.' },
      { q: 'Welke scoort hoger in jullie test?', a: 'HelloFresh scoort 8,4/10 en staat op #1; Factor scoort 7,8/10 op #5. Het zijn wel verschillende categorieën — HelloFresh als kookbox, Factor als kant-en-klaar — dus vergelijk vooral op wat voor jou telt: koken of opwarmen.' },
      { q: 'Kan ik bij beide opzeggen wanneer ik wil?', a: 'Ja. Zowel Factor als HelloFresh werken met een flexibel abonnement dat je wekelijks kan aanpassen, pauzeren of opzeggen.' },
    ],
  },
  {
    slug: 'factor-vs-foodbag',
    kookboxSlug: 'foodbag',
    seoTitle: 'Factor vs Foodbag 2026: kant-en-klaar of Belgisch koken?',
    seoDescription: 'Factor (opwarmen) vs Foodbag (Belgische kookbox): prijs, smaak, lokale ingrediënten en voor wie elk het beste is. Eerlijke vergelijking.',
    kookboxKooktijd: '25–35 min',
    kookboxLevergebied: 'heel België',
    intro: [
      'Factor en Foodbag staan voor twee filosofieën: opwarmen versus koken met lokale Belgische ingrediënten. Foodbag (onderdeel van de Colruyt Group) is onze beste Belgische kookbox; Factor is een kant-en-klare service van de HelloFresh Group.',
      'Foodbag scoort overall hoger (8,1 tegenover 7,8) en blinkt uit in smaak en verse, lokale ingrediënten — met de hoogste smaakscore samen met Marley Spoon (8,6). Factor mikt op gemak: geen koken, vijf dieetstijlen en een lagere prijs per portie.',
      'Wil je bewust Belgisch koken, of gewoon snel en gezond opwarmen?',
    ],
    kiesFactorAls: [
      'Je geen tijd of zin hebt om te koken en meteen wil eten',
      'Je gezond wil eten met vaste voedingswaarden (High-Protein, Calorie-Conscious)',
      'Je de laagste prijs per portie wil (€4,99 tegenover €9,50)',
      'Snelheid en gemak zwaarder wegen dan lokale herkomst',
    ],
    kiesKookboxAls: [
      'Je bewust lokaal en Belgisch wil eten met verse ingrediënten',
      'Je de hoogste smaakscores en versheid belangrijk vindt',
      'Je graag zelf kookt uit 5 kookstijlen (incl. de Sana-lijn van Sandra Bekkari)',
      'Je gratis bezorging in heel België verkiest',
    ],
    verdictTekst: 'Er is geen absolute winnaar — het hangt af van of je wil koken. Foodbag scoort overall hoger en is de betere keuze voor wie bewust Belgisch en vers wil koken, met uitstekende smaak en lokale ingrediënten. Factor is de sterkere keuze voor wie níét wil koken: klaar in enkele minuten, met dieetstijlen en een lagere prijs per portie. Hou je van koken en lokale herkomst? Kies Foodbag. Wil je enkel opwarmen? Kies Factor.',
    faq: [
      { q: 'Wat is het verschil tussen Factor en Foodbag?', a: 'Factor is kant-en-klaar: opwarmen in 2–3 minuten. Foodbag is een klassieke kookbox met verse, lokale Belgische ingrediënten waarbij je zelf kookt in 25–35 minuten. Foodbag hoort bij de Colruyt Group, Factor bij de HelloFresh Group.' },
      { q: 'Welke is goedkoper: Factor of Foodbag?', a: 'Factor heeft een veel lagere prijs per portie (v.a. €4,99 tegenover €9,50 bij Foodbag), maar rekent €5,99 bezorgkosten per levering; Foodbag bezorgt gratis. Foodbag geeft nieuwe klanten €60 korting via code FOODBAGx60. Reken je totaalprijs uit inclusief bezorging.' },
      { q: 'Welke heeft de betere smaak?', a: 'Foodbag scoort hoger op smaak in onze test (8,6 tegenover 7,8), dankzij verse en lokale ingrediënten die je zelf bereidt. Factor is verrassend goed voor een opwarmmaaltijd, maar haalt de versheid van zelf koken niet.' },
      { q: 'Kan ik beide zonder abonnement of flexibel gebruiken?', a: 'Foodbag kan je los bestellen zonder verplicht abonnement. Factor werkt met een flexibel abonnement dat je wekelijks kan aanpassen, pauzeren of opzeggen.' },
    ],
  },
  {
    slug: 'factor-vs-marley-spoon',
    kookboxSlug: 'marley-spoon',
    seoTitle: 'Factor vs Marley Spoon 2026: opwarmen of chef-recepten koken?',
    seoDescription: 'Factor (kant-en-klaar) vs Marley Spoon (chef-kookbox): prijs, smaak, levergebied en voor wie elk het beste is. Eerlijke vergelijking.',
    kookboxKooktijd: '45–60 min',
    kookboxLevergebied: 'Vlaanderen & Brussel',
    intro: [
      'Marley Spoon en Factor liggen qua score dicht bij elkaar (7,9 tegenover 7,8), maar zijn compleet verschillend. Marley Spoon is een kookbox voor fijnproevers met chef-recepten van 45 tot 60 minuten; Factor warm je op in 2 tot 3 minuten.',
      'Marley Spoon heeft de hoogste smaakscore van onze test (8,6) en de meeste culinaire diepgang, maar bezorgt enkel in Vlaanderen en Brussel. Factor levert in heel België en mikt op gemak en dieetstijlen.',
      'Zie je koken als ontspanning, of wil je vooral snel en gezond eten?',
    ],
    kiesFactorAls: [
      'Je geen tijd of zin hebt om te koken en meteen wil eten',
      'Je in Wallonië woont — Marley Spoon levert daar niet, Factor in heel België',
      'Je gezond wil eten met vaste voedingswaarden (High-Protein, Calorie-Conscious)',
      'Je een druk schema hebt en snelheid boven kookbeleving stelt',
    ],
    kiesKookboxAls: [
      'Je koken als ontspanning ziet en er 45–60 minuten voor wil nemen',
      'Je de hoogste smaakscore en chef-recepten met techniek wil',
      'Je veel receptvariatie wil: 40 recepten per week',
      'Je in Vlaanderen of Brussel woont (Marley Spoon levert niet in Wallonië)',
    ],
    verdictTekst: 'Er is geen absolute winnaar — het hangt af van of je wil koken. De scores liggen dicht bij elkaar. Marley Spoon is de betere keuze voor wie van koken geniet, de hoogste smaak en culinaire diepgang zoekt — al bezorgt het enkel in Vlaanderen en Brussel. Factor is de sterkere keuze voor wie níét wil koken, in heel België wil bestellen of gezond wil eten met dieetstijlen. Kook je graag? Marley Spoon. Wil je opwarmen of woon je in Wallonië? Factor.',
    faq: [
      { q: 'Wat is het verschil tussen Factor en Marley Spoon?', a: 'Factor is kant-en-klaar: opwarmen in 2–3 minuten. Marley Spoon is een kookbox met uitgebreide chef-recepten die 45–60 minuten bereidingstijd vragen. Factor levert in heel België; Marley Spoon enkel in Vlaanderen en Brussel.' },
      { q: 'Welke is goedkoper: Factor of Marley Spoon?', a: 'Factor heeft de lagere prijs per portie (v.a. €4,99 tegenover €8,67). Beide rekenen €5,99 bezorgkosten per levering. Marley Spoon geeft nieuwe klanten een sterke welkomstdeal (tot 50% op de eerste boxen). Reken je totaalprijs uit inclusief bezorging.' },
      { q: 'Levert Marley Spoon in heel België?', a: 'Nee. Marley Spoon bezorgt enkel in Vlaanderen en het Brussels Hoofdstedelijk Gewest. Factor levert wél in heel België, inclusief Wallonië — een praktisch voordeel als je daar woont.' },
      { q: 'Welke heeft de betere smaak?', a: 'Marley Spoon scoort het hoogst op smaak in onze test (8,6), met chef-recepten en aandacht voor techniek. Factor is goed voor een opwarmmaaltijd, maar mikt op gemak eerder dan op culinaire diepgang.' },
    ],
  },
];

export function getFactorVergelijking(slug: string): FactorVergelijking | undefined {
  return factorVergelijkingen.find(v => v.slug === slug);
}
