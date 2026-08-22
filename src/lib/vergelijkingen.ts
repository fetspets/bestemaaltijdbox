import type { ContentBlok } from './blokken';

export interface Vergelijking {
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  aanbieder1Slug: string;
  aanbieder2Slug: string;
  /** Optioneel: zonder dit blijft de categorietabel weg. */
  winnaarPerCategorie?: {
    prijs: string;
    smaak: string;
    variatie: string;
    flexibiliteit: string;
    bezorging: string;
    duurzaamheid: string;
  };
  /** Eigen H1; zonder dit valt de pagina terug op "X vs Y: welke is beter?". */
  h1?: string;
  /** Eigen intro-alinea's; `html` is toegestaan voor inline <strong> en links. */
  introParagrafen?: string[];
  /** Knop direct onder de intro, boven de scoretabel. */
  primaireCta?: { slug: string; tekst: string; campagne?: string };
  /** Extra uitgewerkte secties tussen de scoretabel en het verdict. */
  blokken?: ContentBlok[];
  /** Overschrijft "Onze keuze: X" — voor vergelijkingen zonder duidelijke winnaar. */
  verdictKop?: string;
  verdictSlug: string;
  verdictTekst: string;
  faq: Array<{ q: string; a: string }>;
}

export const vergelijkingen: Vergelijking[] = [
  {
    slug: 'foodprepper-vs-foodbag',
    seoTitle: 'Foodprepper vs Foodbag 2026: snelheid of variatie?',
    seoDescription: 'Foodprepper klaar in 15 min, Foodbag in 30 min — maar welke smaakt beter en is goedkoper? Eerlijke vergelijking van twee Belgische maaltijdboxen.',
    aanbieder1Slug: 'foodprepper',
    aanbieder2Slug: 'foodbag',
    h1: 'Foodprepper vs Foodbag: welke maaltijdbox kies jij?',
    introParagrafen: [
      'Foodprepper en Foodbag zijn van hetzelfde moederbedrijf — Smartmat NV, onderdeel van de Colruyt Group. Maar wie denkt dat ze uitwisselbaar zijn, vergist zich. Ze richten zich op totaal andere gebruikers met een totaal andere aanpak.',
      'Foodbag is een klassieke kookbox: verse Belgische ingrediënten, zelf snijden en bereiden, klaar in 25–35 minuten. Foodprepper gaat verder: de chef doet het voorbereidende werk — groenten zijn voorgegaard, vlees gemarineerd, sauzen klaar. Jij werkt alles samen in 15 minuten. Het resultaat voelt als een echte maaltijd, maar kost twee keer minder tijd.',
      'Of jij de juiste keuze maakt, hangt af van je avondroutine. Hieronder vergelijken we beide eerlijk op snelheid, menu, prijs, levering en meer.',
    ],
    primaireCta: { slug: 'foodprepper', tekst: 'Bekijk Foodprepper →', campagne: 'cta' },
    blokken: [
      {
        type: 'kenmerkTabel',
        kop: 'Snel overzicht',
        kolomSlugs: ['foodprepper', 'foodbag'],
        rijen: [
          { kenmerk: 'Kooktijd', waarden: ['~15 min', '~30 min'] },
          { kenmerk: 'Maaltijdtypes', waarden: ['Ontbijt, lunch, diner, snacks', 'Vooral avondmalen'] },
          { kenmerk: 'Abonnement verplicht', waarden: ['Nee', 'Nee'] },
          { kenmerk: 'Levergebied', waarden: ['Vlaanderen & Brussel', 'Vlaanderen & Brussel'] },
          { kenmerk: 'Levering', waarden: ['Gratis, zon/maa', 'Gratis'] },
          { kenmerk: 'Belgische ingrediënten', waarden: ['Ja', 'Ja'] },
          { kenmerk: 'Moederbedrijf', waarden: ['Smartmat / Colruyt Group', 'Smartmat / Colruyt Group'] },
        ],
        voetnoot: 'Prijzen kunnen wijzigen. Controleer de actuele tarieven op de website van de aanbieder.',
      },
      {
        type: 'sectie',
        kop: 'Het grote verschil — snelheid vs kookplezier',
        html: true,
        paragrafen: [
          'Foodprepper en Foodbag zitten in hetzelfde ecosysteem, maar spelen op een ander snaartje. <strong>Foodprepper</strong> sloopt de tijdsbarrière: de chef heeft het snijwerk, de marinade en de sauzen al klaar. Jij bakt, warmt op of mengt — en na 15 minuten staat het eten op tafel. Geen keuken vol afval, geen lange voorbereiding.',
          '<strong>Foodbag</strong> kiest bewust voor de klassieke kookervaring: verse Belgische groenten, zelf snijden, zelf bereiden. De bereidingstijd ligt op 25–35 minuten. Wie koken als ontspanning ervaart, vindt hier meer beleving. Wie elke avond maximaal 20 minuten heeft, vindt Foodbag misschien te bewerkelijk.',
        ],
      },
      {
        type: 'sectie',
        kop: 'Menu & variatie',
        html: true,
        paragrafen: [
          '<strong>Foodprepper</strong> onderscheidt zich met een volledig dagmenu: ontbijt, lunch, diner én snacks. Via de versmarkt — een soort online buurtsupermarkt — kan je ook soepen, bijgerechten en snacks bijbestellen. Het weekmenu wisselt, maar is kleiner dan bij Foodbag.',
          '<strong>Foodbag</strong> biedt 20+ recepten per week verdeeld over 5 kookstijlen, waaronder de populaire Sana-lijn van Sandra Bekkari en de Busy Day-gerechten (klaar in 20 min). Wie afwisseling wil in avondmaaltijden, vindt hier een breed aanbod. Ontbijt en lunch zitten er niet bij.',
        ],
      },
      {
        type: 'kortingKaarten',
        items: [
          {
            slug: 'foodprepper',
            kop: '🏷️ Welkomstkorting Foodprepper',
            tekst: '3× €15 korting op eerste 3 bestellingen (tot €45). Automatisch toegepast via onze link — geen code nodig. Geldig voor nieuwe klanten; controleer geldigheid op foodprepper.be.',
            knoptekst: '€15 korting op eerste 3 bestellingen →',
          },
          {
            slug: 'foodbag',
            kop: '🏷️ Welkomstkorting Foodbag',
            tekst: '3× €20 korting op eerste 3 bestellingen (tot €60). Automatisch toegepast via onze link — geen code nodig. Geldig voor nieuwe klanten; controleer geldigheid op foodbag.be.',
            knoptekst: 'Bekijk Foodbag →',
          },
        ],
      },
      {
        type: 'keuzelijst',
        kop: 'Kies Foodprepper als…',
        slug: 'foodprepper',
        items: [
          'Je minder dan 20 minuten wil koken op een doordeweekse avond',
          'Je ook ontbijt en lunch geregeld wil via één leverancier',
          'Je kinderen hebt en weinig marge in de avondroutine',
          'Je vers wil eten zonder het zware voorbereidingswerk zelf te doen',
          'Je de Belgische ingrediënten van Foodbag wil, maar sneller klaar',
        ],
      },
      {
        type: 'keuzelijst',
        kop: 'Kies Foodbag als…',
        slug: 'foodbag',
        items: [
          'Je van koken houdt en het als een ontspannend moment ziet',
          'Je de avond als rusttijd ervaart en er 30 minuten voor neemt',
          'Je veel receptvariatie wil: 20+ maaltijden per week uit 5 kookstijlen',
          'Je bewust lokaal en Belgisch wil eten met kortere keten',
          'Je de Sandra Bekkari Sana-lijn of Busy Day-gerechten wil',
        ],
      },
      {
        type: 'slotCta',
        kop: 'Nog niet zeker?',
        tekst: 'Beide vereisen geen verplicht abonnement, dus je kan eenmalig bestellen en zelf vergelijken. Foodprepper is de snelste manier om te starten.',
        slug: 'foodprepper',
        knoptekst: 'Bekijk Foodprepper →',
        subtekst: 'Geen abonnement · gratis bezorging in Vlaanderen en Brussel',
        campagne: 'cta',
      },
    ],
    verdictKop: 'Foodprepper of Foodbag — het hangt af van jou',
    verdictSlug: 'foodprepper',
    verdictTekst: 'Er is geen absolute winnaar in deze vergelijking — de beste keuze hangt af van je levensstijl. Als je op doordeweekse avonden maximaal 20 minuten wil koken en ook ontbijt of lunch wil regelen, is Foodprepper de sterkste optie. Als je van koken houdt, de avond als rustmoment ervaart en veel receptvariatie wil, is Foodbag de juiste keuze. Beide zijn van hetzelfde moederbedrijf en gebruiken Belgische ingrediënten — het verschil zit hem in het concept.',
    faq: [
      { q: 'Zijn Foodprepper en Foodbag hetzelfde bedrijf?', a: 'Ze zijn van hetzelfde moederbedrijf: Smartmat NV, onderdeel van de Colruyt Group. Maar ze zijn compleet anders opgezet. Foodbag is een klassieke kookbox waarbij je zelf kookt in 25–35 minuten. Foodprepper levert half-voorbereide maaltijden die je in 15 minuten afwerkt. Doelgroep, menu en bestelervaring zijn apart.' },
      { q: 'Welke is goedkoper: Foodprepper of Foodbag?', a: 'Foodbag kost gemiddeld meer per portie dan Foodprepper. Maar de exacte prijs hangt sterk af van welke maaltijden je kiest en voor hoeveel personen. Controleer de actuele prijzen op foodprepper.be en foodbag.be — prijzen kunnen wijzigen. Nieuwe Foodprepper-klanten krijgen drie keer €15 korting op hun eerste drie bestellingen, automatisch toegepast via onze link.' },
      { q: 'Kan ik beide uitproberen?', a: 'Ja. Zowel Foodprepper als Foodbag vereisen geen verplicht abonnement — je kan eenmalig bestellen en zelf vergelijken. Foodprepper heeft een welkomstkorting van 3× €15 op je eerste 3 bestellingen, automatisch via onze link. Foodbag heeft een eigen welkomstaanbieding voor nieuwe klanten.' },
      { q: 'Welke is het beste voor een gezin met kinderen?', a: 'Foodprepper heeft een praktisch voordeel voor gezinnen met jonge kinderen: klaar in 15 minuten, minder stress op drukke avonden. Foodbag biedt meer kookkeuze en receptvariatie. Als snelheid in de avondroutine telt, is Foodprepper sterker. Als je van samen koken houdt, is Foodbag interessanter.' },
    ],
  },
  {
    slug: 'foodprepper-vs-hellofresh',
    seoTitle: 'Foodprepper vs HelloFresh 2026: welke maaltijdbox wint?',
    seoDescription: 'Foodprepper klaar in 15 minuten en 100% Belgisch, HelloFresh met 40+ recepten en levering in heel België. Eerlijke vergelijking op tijd, menu en prijs.',
    aanbieder1Slug: 'foodprepper',
    aanbieder2Slug: 'hellofresh',
    h1: 'Foodprepper vs HelloFresh: welke maaltijdbox wint in België?',
    introParagrafen: [
      'HelloFresh is de wereldmarktleider: actief in 18 landen, meer dan 8 miljoen klanten en een indrukwekkend weekmenu van 40+ recepten. Foodprepper is iets heel anders: 100% Belgisch, opgericht in 2021, en gebouwd rond één belofte — op tafel in 15 minuten.',
      'Beide zijn kookboxen waarbij je zelf de laatste stap zet, maar de vergelijking houdt daarna snel op. HelloFresh stuurt je ruwe ingrediënten en een recept. Foodprepper stuurt voorbereide ingrediënten: groenten zijn voorgesneden en voorgegaard, vlees is gemarineerd, sauzen zijn klaar. Jij werkt alles samen in een kwartier.',
      'Hieronder vergelijken we beide eerlijk op kooktijd, menu, prijs, herkomst en levering — zodat je weet welke het beste bij jou past.',
    ],
    primaireCta: { slug: 'foodprepper', tekst: 'Bekijk Foodprepper →', campagne: 'cta' },
    blokken: [
      {
        type: 'kenmerkTabel',
        kop: 'Snel overzicht',
        kolomSlugs: ['foodprepper', 'hellofresh'],
        rijen: [
          { kenmerk: 'Kooktijd', waarden: ['~15 min', '~30–45 min'] },
          { kenmerk: 'Maaltijdtypes', waarden: ['Ontbijt, lunch, diner, snacks', 'Vooral avondmalen'] },
          { kenmerk: 'Abonnement', waarden: ['Flexibel, niet verplicht', 'Abonnement, pauzeerbaar'] },
          { kenmerk: 'Herkomst', waarden: ['100% Belgisch', 'Internationaal'] },
          { kenmerk: 'Levergebied', waarden: ['Vlaanderen & Brussel', 'Heel België'] },
          { kenmerk: 'Lokale keten', waarden: ['Ja', 'Nee'] },
        ],
        voetnoot: 'Prijzen kunnen wijzigen. Controleer altijd de actuele tarieven op foodprepper.be en hellofresh.be.',
      },
      {
        type: 'sectie',
        kop: 'Kooktijd & gemak',
        html: true,
        paragrafen: [
          '<strong>Foodprepper</strong> wint hier duidelijk. De bereiding is al voor een groot deel gedaan: groenten zijn voorgesneden en voorgegaard, vlees of vis is gemarineerd, sauzen zijn klaar. Jij bakt, warmt op of mengt — en na 15 minuten staat het eten op tafel. Geen snijplank, nauwelijks afwas.',
          '<strong>HelloFresh</strong> vraagt 30–45 minuten: je krijgt ruwe ingrediënten en een stap-voor-stap recept. De instructies zijn helder en geschikt voor beginners, maar je doet het voorbereidende werk zelf. Voor wie koken als ontspannend moment ervaart, is dat een pluspunt. Voor wie na een lange werkdag snel wil eten, is 40 minuten lang.',
        ],
      },
      {
        type: 'sectie',
        kop: 'Menu & keuze',
        html: true,
        paragrafen: [
          '<strong>HelloFresh</strong> biedt meer dan 40 recepten per week, verdeeld over meerdere categorieën: Quick & Easy, vegetarisch, familie, wereldkeukens. Voor wie lang op één aanbieder wil blijven zonder eentonigheid, is dat een groot voordeel.',
          '<strong>Foodprepper</strong> heeft een kleiner maar uniek aanbod: naast avondmaaltijden ook ontbijt, lunch en snacks via de versmarkt. Zo kan je één leverancier voor je hele dagmenu gebruiken. Het weekmenu is wisselend en beperkter dan bij HelloFresh, maar de categorie is breder.',
        ],
      },
      {
        type: 'sectie',
        kop: 'Belgisch vs internationaal',
        html: true,
        paragrafen: [
          '<strong>Foodprepper</strong> werkt bijna uitsluitend met Belgische leveranciers. De ingrediënten komen uit een korte keten — dat is merkbaar in de versheid en sluit aan bij bewust lokaal consumeren. Als onderdeel van Smartmat NV / Colruyt Group is de Belgische verankering structureel.',
          '<strong>HelloFresh</strong> is een internationale speler met een mondiale inkoopcapaciteit. Die schaalgrootte verklaart de lagere prijzen, maar ook de minder lokale herkomst van de ingrediënten. HelloFresh bezorgt in heel België, inclusief Wallonië — een praktisch voordeel voor wie buiten Vlaanderen woont. Foodprepper levert enkel in Vlaanderen en Brussel.',
        ],
      },
      {
        type: 'sectie',
        kop: 'Prijs',
        html: true,
        paragrafen: [
          'HelloFresh begint vanaf een vaste prijs per portie en heeft regelmatig welkomstkortingen voor nieuwe klanten. De prijs van Foodprepper varieert per maaltijdkeuze — check foodprepper.be voor het actuele aanbod, want tarieven kunnen wijzigen.',
          'Nieuwe Foodprepper-klanten kunnen drie keer €15 korting halen op hun eerste drie bestellingen, automatisch toegepast via onze link. Dat maakt de startperiode extra voordelig om zelf te vergelijken.',
        ],
      },
      {
        type: 'kortingKaarten',
        items: [
          {
            slug: 'foodprepper',
            kop: '🏷️ Welkomstkorting Foodprepper',
            tekst: '3× €15 korting op eerste 3 bestellingen (tot €45). Automatisch toegepast via onze link — geen code nodig. Geldig voor nieuwe klanten; controleer geldigheid op foodprepper.be.',
            knoptekst: '€15 korting op eerste 3 bestellingen →',
          },
          {
            slug: 'hellofresh',
            kop: '🏷️ Welkomstkorting HelloFresh',
            tekst: 'Tot €60 korting verdeeld over je eerste 3 boxen. Automatisch toegepast via onze link — geen code nodig. Geldig voor nieuwe klanten; controleer geldigheid op hellofresh.be.',
            knoptekst: 'Bekijk HelloFresh →',
          },
        ],
      },
      {
        type: 'keuzelijst',
        kop: 'Kies Foodprepper als…',
        slug: 'foodprepper',
        items: [
          'Je maximaal 15 minuten wil koken op een doordeweekse avond',
          'Je bewust Belgisch en lokaal wil consumeren',
          'Je ook ontbijt en lunch geregeld wil via één leverancier',
          'Je in Vlaanderen of Brussel woont (Foodprepper levert niet in Wallonië)',
          'Je een flexibele formule wil zonder verplicht abonnement',
        ],
      },
      {
        type: 'keuzelijst',
        kop: 'Kies HelloFresh als…',
        slug: 'hellofresh',
        items: [
          'Je van echt koken houdt en 30–45 minuten in de keuken staat',
          'Je een groot en gevarieerd weekmenu wil: 40+ recepten per week',
          'Je in Wallonië woont of in heel België wil bestellen',
          'Je een bewezen internationale aanbieder met brede support wil',
          'Je op zoek bent naar de laagste vaste prijs per portie',
        ],
      },
      {
        type: 'slotCta',
        kop: 'Snel starten zonder abonnement?',
        tekst: 'Foodprepper vraagt geen verplicht abonnement en zet een verse maaltijd in 15 minuten op tafel. Nieuwe klanten krijgen 3× €15 korting via onze link.',
        slug: 'foodprepper',
        knoptekst: 'Bekijk Foodprepper →',
        subtekst: 'Geen abonnement · levering in Vlaanderen en Brussel',
        campagne: 'cta',
      },
    ],
    verdictKop: 'Foodprepper wint op snelheid en lokale herkomst. HelloFresh wint op menugrootte en bereik.',
    verdictSlug: 'foodprepper',
    verdictTekst: 'Foodprepper is de sterkste keuze voor drukke gezinnen en tweeverdieners die vers willen eten in 15 minuten, bewust Belgisch consumeren en ook ontbijt of lunch willen regelen. HelloFresh wint op receptenvariatie (40+), bereik (heel België) en een vaste lage prijs per portie. Wie van koken houdt of in Wallonië woont, kiest HelloFresh. Wie snelheid en lokale herkomst boven menugrootte stelt, kiest Foodprepper.',
    faq: [
      { q: 'Is Foodprepper goedkoper dan HelloFresh?', a: 'Dat hangt af van je keuze. HelloFresh heeft een vaste prijs vanaf €7,99 per portie. Foodprepper werkt met een wisselend menu — controleer de actuele prijs op foodprepper.be, want die varieert. Nieuwe Foodprepper-klanten krijgen drie keer €15 korting, automatisch toegepast via onze link, wat de eerste bestellingen goedkoper kan maken. HelloFresh biedt ook welkomstkortingen voor nieuwe klanten.' },
      { q: 'Levert HelloFresh ook in Vlaanderen?', a: 'Ja, HelloFresh levert in heel België inclusief Vlaanderen, Brussel en Wallonië. Foodprepper levert enkel in Vlaanderen en het Brussels Hoofdstedelijk Gewest. Voor wie in Wallonië woont, is HelloFresh de enige keuze van de twee.' },
      { q: 'Welke is het beste voor drukke gezinnen?', a: 'Foodprepper heeft op drukke avonden een praktisch voordeel: klaar in 15 minuten dankzij voorbereide ingrediënten. HelloFresh vraagt 25–40 minuten. Voor gezinnen met weinig marge in de avondroutine is Foodprepper sneller. HelloFresh biedt meer receptkeuze en een groter weekmenu, wat handig is als je lang op één aanbieder wil blijven zonder eentonigheid.' },
      { q: 'Kan ik beide maaltijdboxen combineren?', a: 'Ja, dat kan. Foodprepper heeft geen verplicht abonnement en je kan eenmalig of wekelijks bestellen. HelloFresh werkt met een flexibel abonnement dat je wekelijks kan pauzeren. Sommige gezinnen combineren een snelle Foodprepper-bestelling op drukke weken met HelloFresh op rustigere weken.' },
    ],
  },
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
