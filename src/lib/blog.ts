export type BlogContentBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export interface BlogPost {
  slug: string;
  titel: string;
  metaTitle: string;
  metaDescription: string;
  gepubliceerd: string;
  excerpt: string;
  content: BlogContentBlock[];
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'maaltijdbox-of-zelf-koken-belgie',
    titel: 'Maaltijdbox of zelf koken in België: wat is goedkoper?',
    metaTitle: 'Maaltijdbox of zelf koken in België: wat is goedkoper? — 2026',
    metaDescription: 'Is een maaltijdbox goedkoper dan zelf boodschappen doen in België? We rekenden het uit met echte supermarktprijzen en maaltijdboxprijzen.',
    gepubliceerd: 'april 2026',
    excerpt: 'Veel mensen denken dat een maaltijdbox automatisch duurder is dan zelf koken. Maar als je voedselverspilling, tijdskost en impulsaankopen meerekent, is het plaatje genuanceerder.',
    content: [
      { type: 'p', text: 'Veel mensen denken dat een maaltijdbox automatisch duurder is dan zelf koken. Maar als je voedselverspilling, tijdskost en impulsaankopen meerekent, is het plaatje genuanceerder. We rekenden het uit.' },
      { type: 'h2', text: 'De rekensom: maaltijdbox vs. supermarkt' },
      { type: 'p', text: 'Een doorsnee avondmaaltijd voor 2 personen kost in de Belgische supermarkt gemiddeld €7–10 als je exact de juiste hoeveelheden koopt. Maar in de praktijk koop je een heel pak pasta, een volle bos peterselie en een portie vlees die je misschien niet volledig gebruikt.' },
      { type: 'p', text: 'Maaltijdboxen leveren exacte hoeveelheden. Je gooit niets weg. Dat verschil in verspilling kan oplopen tot €30–60 per maand voor een gezin van 2 à 4 personen.' },
      { type: 'h2', text: 'Wat kost een maaltijdbox per portie in België?' },
      { type: 'ul', items: [
        'HelloFresh: tussen €5 en €9 per portie, afhankelijk van het abonnement',
        'Foodbag: vergelijkbaar, met nadruk op Belgische ingrediënten',
        'Marley Spoon: iets duurder per portie, maar uitgebreidere recepten',
        'Ekomenu: duurste optie vanwege 100% biologische ingrediënten',
      ]},
      { type: 'h2', text: 'Wanneer is zelf koken goedkoper?' },
      { type: 'p', text: 'Als je disciplineerd boodschappen doet, weinig wegooit en in bulk inkoopt, kan zelf koken goedkoper uitkomen. Zeker voor eenvoudige maaltijden zoals pasta, soep of omeletten.' },
      { type: 'ul', items: [
        'Je koopt bewust en gooit weinig weg',
        'Je kookt in bulk en eet restjes de volgende dag',
        'Je gaat voor bastige ingrediënten (rijst, bonen, seizoensgroenten)',
        'Je woont vlakbij een goede markt of discounter',
      ]},
      { type: 'h2', text: 'Wanneer is een maaltijdbox slimmer?' },
      { type: 'p', text: 'Een maaltijdbox loont als je druk bent, regelmatig ingrediënten weggooit of niet weet wat je moet koken. De onzichtbare tijdskost van maaltijdplanning, boodschappenlijstjes maken en twee keer per week naar de winkel rijden is reëel.' },
      { type: 'ul', items: [
        'Je gooit regelmatig verse ingrediënten weg',
        'Je hebt weinig tijd voor boodschappen en planning',
        'Je bestelt regelmatig eten via Deliveroo of Uber Eats (maaltijdbox is goedkoper)',
        'Je wil meer variatie en nieuwe recepten leren',
      ]},
      { type: 'h2', text: 'Conclusie' },
      { type: 'p', text: 'Wie disciplineerd en zuinig boodschappen doet, kan goedkoper uitkomen met zelf koken. Voor de meeste Belgen die druk zijn en regelmatig verspillen, is het verschil in de praktijk kleiner dan gedacht — en soms is de maaltijdbox zelfs goedkoper als je alles meerekent.' },
    ],
    relatedSlugs: ['hellofresh', 'foodbag', 'marley-spoon'],
  },
  {
    slug: 'hoe-maaltijdbox-opzeggen-belgie',
    titel: 'Hoe zeg je een maaltijdbox op in België? (stap voor stap)',
    metaTitle: 'Maaltijdbox opzeggen in België: hoe doe je dat? — HelloFresh, Foodbag & meer',
    metaDescription: 'Wil je je maaltijdbox opzeggen in België? Hier is hoe je dat doet bij HelloFresh, Foodbag, Marley Spoon en andere aanbieders — stap voor stap.',
    gepubliceerd: 'april 2026',
    excerpt: 'Een maaltijdbox opzeggen is bij de meeste aanbieders eenvoudig, maar er zijn deadlines om rekening mee te houden. We leggen het uit per aanbieder.',
    content: [
      { type: 'p', text: 'Een maaltijdbox opzeggen klinkt soms ingewikkelder dan het is. Bij de meeste Belgische aanbieders doe je dit online via je account, zonder telefonisch contact. Maar er zijn deadlines: als je te laat bent, betaal je nog één levering extra.' },
      { type: 'h2', text: 'HelloFresh opzeggen' },
      { type: 'p', text: 'HelloFresh werkt met een wekelijks abonnement dat je op elk moment kan pauzeren of stopzetten.' },
      { type: 'ul', items: [
        'Log in op hellofresh.be → "Mijn account" → "Abonnement"',
        'Klik op "Abonnement pauzeren" of "Abonnement opzeggen"',
        'Deadline: minimaal 5 dagen voor de volgende leverdatum',
        'Je kan ook leveringen overslaan zonder volledig op te zeggen',
      ]},
      { type: 'h2', text: 'Foodbag opzeggen' },
      { type: 'p', text: 'Foodbag vraagt je het abonnement op te zeggen via je online account of via klantenservice.' },
      { type: 'ul', items: [
        'Log in op foodbag.be → "Mijn profiel" → "Abonnement beheren"',
        'Kies "Abonnement stopzetten"',
        'Deadline: 5 werkdagen voor de volgende bezorgdatum',
        'Klantenservice bereikbaar via e-mail en chat',
      ]},
      { type: 'h2', text: 'Marley Spoon opzeggen' },
      { type: 'ul', items: [
        'Log in op marleyspoon.com → "Account" → "Abonnementsinstellingen"',
        'Scroll naar "Abonnement beëindigen"',
        'Deadline: 6 dagen voor levering (iets stricter dan andere aanbieders)',
        'Bevestiging per e-mail ontvangen — bewaar dit',
      ]},
      { type: 'h2', text: 'Ekomenu opzeggen' },
      { type: 'ul', items: [
        'Log in op ekomenu.be → "Mijn account" → "Abonnement"',
        'Kies "Abonnement beëindigen"',
        'Deadline: 4 werkdagen voor de volgende leverdag',
      ]},
      { type: 'h2', text: 'Tip: pauzeren in plaats van opzeggen' },
      { type: 'p', text: 'Ben je op vakantie of wil je even stoppen? Bij HelloFresh, Foodbag en Marley Spoon kan je leveringen wekelijks overslaan zonder het abonnement volledig stop te zetten. Je behoudt dan je eventuele korting en hoeft niet opnieuw in te schrijven.' },
      { type: 'h2', text: 'Wat als je toch te laat bent?' },
      { type: 'p', text: 'Neem direct contact op met de klantenservice via chat of e-mail. In de meeste gevallen is er begrip als je snel reageert, zeker als je een goede reden hebt. Klanten die een abonnement willen stopzetten krijgen soms ook een retentieaanbieding.' },
    ],
    relatedSlugs: ['hellofresh', 'foodbag', 'marley-spoon', 'ekomenu'],
  },
  {
    slug: 'vegetarisch-koken-maaltijdbox',
    titel: 'Vegetarisch koken met een maaltijdbox: onze ervaring',
    metaTitle: 'Vegetarisch koken met een maaltijdbox in België — Onze ervaring 2026',
    metaDescription: 'Welke maaltijdbox is het best voor vegetariërs in België? We testten HelloFresh, Ekomenu en Foodbag op vegetarisch aanbod, smaak en variatie.',
    gepubliceerd: 'april 2026',
    excerpt: 'We testten 3 Belgische maaltijdboxen specifiek op hun vegetarisch aanbod: hoe groot is de keuze, hoe smaken de recepten en welke aanbieder biedt de meeste variatie?',
    content: [
      { type: 'p', text: 'We testten 3 Belgische maaltijdboxen specifiek op hun vegetarisch aanbod. Want "we hebben ook vegetarische opties" kan van alles betekenen: van 2 recepten per week tot een volledig vegetarisch abonnement.' },
      { type: 'h2', text: 'HelloFresh: brede keuze, ook voor flexitariërs' },
      { type: 'p', text: 'HelloFresh heeft wekelijks 8–12 vegetarische recepten in zijn aanbod van 40+. Je filtert eenvoudig op "Veggie" in de receptkiezer. Het aanbod varieert van snelle pastagerechten tot uitgebreidere recepten met peulvruchten en seizoensgroenten.' },
      { type: 'ul', items: [
        'Wekelijks 8–12 vegetarische recepten',
        'Filter "Veggie" beschikbaar in receptkiezer',
        'Geen volledig vegetarisch abonnement — je kiest per week',
        'Geschikt voor flexitariërs die vlees willen verminderen',
      ]},
      { type: 'h2', text: 'Ekomenu: biologisch vegetarisch' },
      { type: 'p', text: 'Ekomenu heeft een specifiek vegetarisch abonnement waarbij alle recepten plantaardig zijn. Bovendien zijn alle ingrediënten biologisch gecertificeerd. Het ideale pakket voor wie bewust én vegetarisch wil eten.' },
      { type: 'ul', items: [
        'Volledig vegetarisch abonnement beschikbaar',
        'Alle ingrediënten biologisch gecertificeerd',
        '20–25 recepten per week, merendeels vegetarisch',
        'CO2-footprint tracker per bestelling',
        'Enkel beschikbaar in Vlaanderen en Brussel',
      ]},
      { type: 'h2', text: 'Foodbag: Belgische klassiekers, ook vegetarisch' },
      { type: 'p', text: 'Foodbag heeft vegetarische recepten verspreid over zijn 5 kookstijlen. Het aanbod is kleiner dan bij HelloFresh, maar de kwaliteit van de Belgische ingrediënten is merkbaar. Denk aan gegratineerde groenten, streekkaas en seizoensgroenten van lokale boeren.' },
      { type: 'h2', text: 'Onze conclusie' },
      { type: 'p', text: 'Voor volledig vegetarisch eten is Ekomenu de beste keuze in België. Wie flexibel wil zijn (soms vlees, soms niet) kiest het best voor HelloFresh vanwege de grote keuze. Foodbag is interessant als lokale herkomst voor jou primeert.' },
    ],
    relatedSlugs: ['hellofresh', 'ekomenu', 'foodbag'],
  },
  {
    slug: 'maaltijdbox-starten-beginners',
    titel: 'Maaltijdbox starten: alles wat je moet weten als beginner',
    metaTitle: 'Maaltijdbox starten in België: beginnershandleiding 2026',
    metaDescription: 'Wil je voor het eerst een maaltijdbox proberen in België? Hier is alles wat je moet weten: hoe het werkt, wat het kost en welke aanbieder het best past bij jou.',
    gepubliceerd: 'april 2026',
    excerpt: 'Nog nooit een maaltijdbox besteld? We leggen uit hoe het werkt, wat je kan verwachten bij de eerste levering en waar je op moet letten bij de keuze van een aanbieder.',
    content: [
      { type: 'p', text: 'Nog nooit een maaltijdbox besteld? Je bent niet alleen. Veel mensen vragen zich af hoe het precies werkt, wat er in zo\'n doos zit en of het de moeite waard is. We leggen het stap voor stap uit.' },
      { type: 'h2', text: 'Hoe werkt een maaltijdbox?' },
      { type: 'p', text: 'Je schrijft je in bij een aanbieder via hun website, kiest hoeveel personen en hoeveel maaltijden per week je wil, en selecteert je recepten. Elke week wordt een gekoelde doos bezorgd met alle ingrediënten in de juiste hoeveelheden, samen met een receptkaartje.' },
      { type: 'ul', items: [
        'Inschrijven via de website van de aanbieder',
        'Keuze maken: aantal personen (1–6), aantal maaltijden per week (2–5)',
        'Recepten kiezen uit het wekelijkse aanbod',
        'Doos wordt bezorgd op een vast moment in de week',
        'Ingrediënten zijn gekoeld verpakt, houdbaar tot 3–5 dagen na levering',
      ]},
      { type: 'h2', text: 'Wat zit er in de doos?' },
      { type: 'p', text: 'Elke maaltijdbox bevat de exacte hoeveelheden voor de gekozen recepten: het vlees, de groenten, de sauzen en de kruiden — allemaal afgemeten. Het enige wat je zelf nodig hebt is olie, zout, peper en een paar basisbenodigdheden zoals een pan en een pot.' },
      { type: 'h2', text: 'Hoeveel kost een maaltijdbox?' },
      { type: 'p', text: 'De prijs per portie varieert per aanbieder en abonnement. HelloFresh is een van de meest betaalbare opties voor nieuwe klanten dankzij welkomstkoningen. Foodbag en Marley Spoon zitten iets hoger. Ekomenu is het duurst vanwege de biologische ingrediënten.' },
      { type: 'ul', items: [
        'HelloFresh: voordelig voor nieuwe klanten met welkomstkorting',
        'Foodbag: Belgische ingrediënten, gratis bezorging in heel België',
        'Marley Spoon: uitgebreidere recepten, Vlaanderen en Brussel',
        'Ekomenu: biologisch, beschikbaar in Vlaanderen en Brussel',
      ]},
      { type: 'h2', text: 'Welke aanbieder is het best als beginner?' },
      { type: 'p', text: 'Als beginner raden we HelloFresh aan. De recepten zijn toegankelijk, de welkomstkorting maakt het goedkoop om te proberen, en je kan elke week overslaan of stoppen. Als je bewust lokaal wil eten, is Foodbag een goede tweede keuze.' },
      { type: 'h2', text: 'Tips voor je eerste bestelling' },
      { type: 'ul', items: [
        'Kies recepten van 20–30 minuten voor je eerste week — zo start je relaxed',
        'Let op de leverdag: controleer of je thuis bent of een veilige plek hebt',
        'Stel een herinnering in om de volgende week op tijd te pauzeren als je het niet wil',
        'Bewaar de receptkaartjes — veel mensen koken die nadien ook zonder box na',
        'Bekijk de welkomstkorting voor nieuwe klanten: meestal gespreid over meerdere boxen',
      ]},
    ],
    relatedSlugs: ['hellofresh', 'foodbag', 'marley-spoon'],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function generateBlogStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}
