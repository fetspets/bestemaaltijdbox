export type BlogContentBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'cta'; tekst: string };

export interface BlogPost {
  slug: string;
  titel: string;
  metaTitle: string;
  metaDescription: string;
  gepubliceerd: string;
  excerpt: string;
  content: BlogContentBlock[];
  relatedSlugs: string[];
  /** Aanwezig bij betaalde/gesponsorde artikels — toont een disclosure en stuurt CTA's via /ga/<gaSlug>. */
  sponsor?: { partner: string; gaSlug: string; code?: string };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'maaltijdbox-of-zelf-koken-belgie',
    titel: 'Maaltijdbox of zelf koken in België: wat is goedkoper?',
    metaTitle: 'Maaltijdbox vs. zelf koken in België 2026 — wat is écht goedkoper?',
    metaDescription: 'We rekenden uit of een maaltijdbox écht duurder is dan zelf koken in België. Met supermarktprijzen, verspilling en tijdskost meegerekend.',
    gepubliceerd: 'mei 2026',
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
    metaTitle: 'Maaltijdbox opzeggen in België 2026 — stap voor stap uitgelegd',
    metaDescription: 'Hoe zeg je je maaltijdbox op in België? Stap-voor-stap uitleg voor HelloFresh, Foodbag, Marley Spoon en andere aanbieders. Opzeggen in 2 minuten.',
    gepubliceerd: 'mei 2026',
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
    relatedSlugs: ['hellofresh', 'foodbag', 'marley-spoon', 'ekomenu', 'factor', 'foodprepper'],
  },
  {
    slug: 'vegetarisch-koken-maaltijdbox',
    titel: 'Vegetarisch koken met een maaltijdbox: onze ervaring',
    metaTitle: 'Vegetarische maaltijdbox in België 2026 — getest en vergeleken',
    metaDescription: 'Welke maaltijdbox is het sterkst voor vegetariërs? We testten HelloFresh, Ekomenu en Foodbag op aanbod, smaak en variatie. Lees onze eerlijke uitkomst.',
    gepubliceerd: 'mei 2026',
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
    metaTitle: 'Eerste maaltijdbox bestellen in België — beginnersgids 2026',
    metaDescription: 'Nog nooit een maaltijdbox besteld? Zo werkt het, dit kost het en dit zijn de valkuilen voor je eerste levering. Met aanrader voor beginners.',
    gepubliceerd: 'mei 2026',
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
  {
    slug: 'factor-review-belgie',
    titel: 'Factor review België 2026: kant-en-klaar zonder koken getest',
    metaTitle: 'Factor review België 2026 — kant-en-klaar zonder koken (eerlijke test)',
    metaDescription: 'Onze eerlijke Factor review: kant-en-klare chef-maaltijden zonder koken. Prijs, smaak, de vijf dieetstijlen en voor wie het écht past. Score 7,8/10.',
    gepubliceerd: 'juli 2026',
    excerpt: 'Factor levert kant-en-klare chef-maaltijden die je in 2-3 minuten opwarmt — geen koken. We testten prijs, smaak, de vijf dieetstijlen en voor wie het de moeite is.',
    sponsor: { partner: 'Factor', gaSlug: 'factor', code: 'BESTE40' },
    content: [
      { type: 'p', text: 'Factor is geen klassieke maaltijdbox waar je zelf kookt, maar een kant-en-klare maaltijdservice van de HelloFresh Group. De maaltijden worden vers bereid geleverd en zijn klaar in 2 tot 3 minuten in de magnetron. We bekeken wat je krijgt, wat het kost en voor wie het de moeite is.' },
      { type: 'h2', text: 'Wat is Factor precies?' },
      { type: 'p', text: 'Factor bezorgt wekelijks kant-en-klare gerechten in heel België, op zondag of maandag. Je kiest uit 18 maaltijden per week, verdeeld over vijf dieetstijlen — waaronder High-Protein, Calorie-Conscious en Chef\'s Choice. Je hoeft niet te snijden, bakken of afwassen: opwarmen en eten.' },
      { type: 'ul', items: [
        '18 gerechten per week om uit te kiezen',
        '5 dieetstijlen, incl. High-Protein en Calorie-Conscious',
        'Klaar in 2–3 minuten in de magnetron',
        'Bezorging in heel België op zondag of maandag',
        'Van de HelloFresh Group',
      ]},
      { type: 'h2', text: 'Hoe werkt bestellen?' },
      { type: 'p', text: 'Je stelt je week samen op factormeals.be, kiest je maaltijden en je bezorgdag. Het abonnement is flexibel: wekelijks aanpassen, pauzeren of opzeggen kan. De bezorgkosten bedragen €5,99 per levering — tel die altijd mee in je werkelijke prijs per maaltijd.' },
      { type: 'h2', text: 'Smaak en kwaliteit' },
      { type: 'p', text: 'Voor een maaltijd die je enkel opwarmt, is de smaak verrassend goed. In onze beoordeling scoort Factor 7,8/10. Gebruikers waarderen vooral de vijf dieetstijlen: sporters kiezen High-Protein, wie op zijn gewicht let gaat voor Calorie-Conscious. De porties zijn afgemeten op voedingswaarde, niet op maximale hoeveelheid — hou daar rekening mee als je een grote eter bent.' },
      { type: 'h2', text: 'Wat kost Factor echt?' },
      { type: 'p', text: 'De instapprijs ligt op €4,99 per portie — een van de laagste van de markt. Maar reken de €5,99 bezorgkosten per levering mee: die komen bovenop de portieprijs, ongeacht hoeveel maaltijden je bestelt. Voor nieuwe klanten geldt de welkomstkorting: 40% korting op je eerste box en 25% op de volgende vijf. Die wordt automatisch toegepast via de link hieronder.' },
      { type: 'cta', tekst: 'Bekijk Factor — 40% korting op je eerste box' },
      { type: 'h2', text: 'Voor wie is Factor geschikt?' },
      { type: 'p', text: 'Factor is op zijn sterkst voor drukke professionals, sporters en iedereen die gezond wil eten zonder kooktijd. Wie thuiskomt en meteen wil eten, zonder boodschappen of afwas, zit hier goed.' },
      { type: 'ul', items: [
        'Wel: druk schema, weinig zin of tijd om te koken',
        'Wel: sporters en caloriebewuste eters (dankzij de dieetstijlen)',
        'Minder: wie het kookproces zelf als ontspanning ziet',
        'Minder: wie de laagste totaalprijs zoekt (tel de bezorgkost mee)',
      ]},
      { type: 'h2', text: 'Factor versus een kookbox' },
      { type: 'p', text: 'Het grote verschil met HelloFresh of Foodbag is dat je bij Factor niet kookt. Dat spaart tijd, maar je levert de kookbeleving en een deel van de versheid van zelf bereiden in. Zoek je een Belgisch kant-en-klaar-alternatief met lagere bezorgkosten, dan is Crowd Cooks (€4,90 bezorging) het overwegen waard. Wil je de grootste keuze en uitgesproken dieetstijlen, dan trekt Factor aan het langste eind.' },
      { type: 'h2', text: 'Ons oordeel' },
      { type: 'p', text: 'Factor is een sterke keuze in het kant-en-klaar-segment: veel keuze, duidelijke dieetstijlen en bezorging in heel België. De bezorgkosten en de beperktere kookbeleving zijn de voornaamste minpunten. Voor wie tijd de grootste schaarste is, weegt het gemak ruimschoots op.' },
      { type: 'cta', tekst: 'Activeer 40% korting bij Factor' },
    ],
    relatedSlugs: ['factor', 'crowd-cooks', 'foodmaker'],
  },
  {
    slug: 'kant-en-klare-maaltijden-zonder-koken-belgie',
    titel: 'Kant-en-klare maaltijden zonder koken in België: hoe werkt het en wat kost het?',
    metaTitle: 'Kant-en-klare maaltijden zonder koken in België (2026) — gids & prijzen',
    metaDescription: 'Maaltijden zonder koken, thuisbezorgd: hoe werkt het, wat kost het en welke aanbieders zijn er in België? Factor, Crowd Cooks en Foodmaker vergeleken.',
    gepubliceerd: 'juli 2026',
    excerpt: 'Geen tijd of zin om te koken? Kant-en-klare maaltijdservices bezorgen verse gerechten die je enkel opwarmt. We leggen uit hoe het werkt, wat het kost en welke aanbieders er in België zijn.',
    sponsor: { partner: 'Factor', gaSlug: 'factor', code: 'BESTE40' },
    content: [
      { type: 'p', text: 'Een maaltijdbox waar je zelf kookt is niet voor iedereen weggelegd. Wie thuiskomt en meteen wil eten — zonder snijden, bakken of afwassen — heeft meer aan een kant-en-klare maaltijdservice. Die bezorgt verse gerechten die je enkel opwarmt. We leggen uit hoe het werkt, wat het kost en welke aanbieders er in België zijn.' },
      { type: 'h2', text: 'Wat is een kant-en-klare maaltijdservice?' },
      { type: 'p', text: 'Anders dan bij een klassieke kookbox (HelloFresh, Foodbag) krijg je geen losse ingrediënten en een recept, maar een volledig bereide maaltijd. Die is gekoeld verpakt en enkele dagen houdbaar. Opwarmen in de magnetron of oven duurt een paar minuten. Je bespaart alle kooktijd, maar levert de kookbeleving in.' },
      { type: 'h2', text: 'Hoe werkt het?' },
      { type: 'ul', items: [
        'Je kiest wekelijks je maaltijden via de website',
        'De gerechten worden gekoeld thuisbezorgd, meestal in het weekend of begin van de week',
        'Ze zijn enkele dagen houdbaar in de koelkast',
        'Opwarmen in 2–5 minuten en klaar',
        'De meeste diensten werken met een flexibel abonnement dat je kan pauzeren',
      ]},
      { type: 'h2', text: 'Welke aanbieders zijn er in België?' },
      { type: 'p', text: 'Drie diensten springen eruit, elk met een eigen accent:' },
      { type: 'ul', items: [
        'Factor (van de HelloFresh Group): 18 gerechten per week in vijf dieetstijlen (o.a. High-Protein, Calorie-Conscious), bezorging in heel België. Bezorgkosten €5,99.',
        'Crowd Cooks: Belgische service met royale porties van 450+ gram en lagere bezorgkosten (€4,90). Elke week 12 nieuwe gerechten.',
        'Foodmaker: artisanale kwaliteit met de Jeroen Meus-lijn en gratis bezorging in heel België.',
      ]},
      { type: 'h2', text: 'Wat kost het?' },
      { type: 'p', text: 'De prijs per portie ligt in de premium-klasse die eigen is aan kant-en-klaar. Factor start het laagst met €4,99 per portie, maar rekent €5,99 bezorgkosten per levering. Crowd Cooks ligt hoger per portie maar rekent minder bezorgkost (€4,90). Foodmaker bezorgt gratis maar heeft een minimumbestelbedrag. Reken altijd de totaalprijs uit: portieprijs × aantal maaltijden + bezorgkost.' },
      { type: 'h2', text: 'Voor wie is het geschikt?' },
      { type: 'p', text: 'Kant-en-klaar loont voor drukke professionals, tweeverdieners, singles en iedereen die weinig kooktijd heeft maar toch gevarieerd en warm wil eten. Het is een verse tussenvorm tussen zelf koken en afhalen. Minder geschikt voor wie van koken houdt of de laagste prijs zoekt.' },
      { type: 'h2', text: 'Welke kiezen?' },
      { type: 'p', text: 'Zoek je de grootste keuze en uitgesproken dieetstijlen (high-protein, caloriebewust)? Dan is Factor de sterkste optie, met bezorging in heel België. Wil je bewust Belgisch eten met royale porties en lagere bezorgkosten? Dan is Crowd Cooks interessant. Voor de Jeroen Meus-recepten kies je Foodmaker.' },
      { type: 'cta', tekst: 'Bekijk Factor — 40% korting op je eerste box' },
    ],
    relatedSlugs: ['factor', 'crowd-cooks', 'foodmaker'],
  },
  {
    slug: 'gezond-eten-zonder-tijd-belgie',
    titel: 'Gezond eten zonder tijd: high-protein en caloriebewuste maaltijden aan huis',
    metaTitle: 'Gezond eten zonder tijd (2026) — high-protein maaltijden aan huis in België',
    metaDescription: 'Gezond eten met een druk schema? High-protein en caloriebewuste kant-en-klare maaltijden, thuisbezorgd. Hoe het werkt en waar je op moet letten.',
    gepubliceerd: 'juli 2026',
    excerpt: 'Gezond eten sneuvelt vaak door tijdsgebrek. Kant-en-klare maaltijden met vaste macro\'s — high-protein of caloriebewust — maken het makkelijker om vol te houden. We leggen uit hoe en waar op te letten.',
    sponsor: { partner: 'Factor', gaSlug: 'factor', code: 'BESTE40' },
    content: [
      { type: 'p', text: 'Gezond willen eten en er de tijd voor hebben zijn twee verschillende dingen. Na een lange werkdag valt de discipline vaak weg en wordt het toch afhalen. Kant-en-klare maaltijden met vaste voedingswaarden — high-protein of caloriebewust — maken het makkelijker om een gezond eetpatroon vol te houden, zonder te koken.' },
      { type: 'h2', text: 'Waarom tijdsgebrek gezond eten saboteert' },
      { type: 'p', text: 'Gezond koken vraagt planning: boodschappen, recepten, bereidingstijd en afwas. Wie een druk schema heeft, valt op drukke avonden terug op snelle, minder gezonde keuzes. Een maaltijd die al klaar is en waarvan de voedingswaarde vastligt, neemt die drempel weg.' },
      { type: 'h2', text: 'Wat maakt een maaltijd "gezond"?' },
      { type: 'ul', items: [
        'Voldoende eiwitten (belangrijk voor verzadiging en spierbehoud)',
        'Een gecontroleerde hoeveelheid calorieën als je op je gewicht let',
        'Genoeg groenten en vezels',
        'Beperkt toegevoegde suikers en verzadigd vet',
      ]},
      { type: 'p', text: 'Bij kant-en-klare diensten staan die waarden per gerecht vermeld, wat het makkelijk maakt om te kiezen op basis van je doel.' },
      { type: 'h2', text: 'High-protein en caloriebewuste opties' },
      { type: 'p', text: 'Factor werkt met vijf dieetstijlen, waaronder High-Protein (extra eiwitten, populair bij sporters) en Calorie-Conscious (een gecontroleerd caloriegehalte). Je kiest per week welke stijl bij je doel past — bijvoorbeeld high-protein tijdens een trainingsblok, caloriebewust als je wat wil afvallen. De maaltijden zijn klaar in 2–3 minuten.' },
      { type: 'cta', tekst: 'Bekijk de dieetstijlen van Factor' },
      { type: 'h2', text: 'Praktisch inpassen in een drukke week' },
      { type: 'ul', items: [
        'Kies vooraf je maaltijden voor de drukste avonden van de week',
        'Combineer met zelf koken op rustigere dagen — het hoeft geen alles-of-niets te zijn',
        'Gebruik de vermelde macro\'s om te kiezen op je doel (afvallen, spieropbouw, onderhoud)',
        'Hou rekening met de porties: caloriebewuste gerechten zijn bewust afgemeten',
      ]},
      { type: 'h2', text: 'Eerlijke kanttekeningen' },
      { type: 'p', text: 'Kant-en-klaar is niet gratis en niet perfect. Tel de bezorgkosten mee (bij Factor €5,99 per levering), hou er rekening mee dat je de kookbeleving mist, en dat er meer verpakking bij komt kijken dan bij zelf koken. Voor wie tijd de grootste schaarste is, wegen die nadelen doorgaans niet op tegen het gemak van elke dag een gezonde maaltijd klaar hebben.' },
      { type: 'h2', text: 'Conclusie' },
      { type: 'p', text: 'Gezond eten met een druk schema wordt een stuk haalbaarder met kant-en-klare maaltijden waarvan de voedingswaarde vastligt. Factor is daarvoor een sterke keuze dankzij de high-protein en caloriebewuste stijlen en de bezorging in heel België. Begin met de drukste avonden en bouw van daaruit verder.' },
      { type: 'cta', tekst: 'Activeer 40% korting bij Factor' },
    ],
    relatedSlugs: ['factor', 'foodmaker', 'crowd-cooks'],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function generateBlogStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}
