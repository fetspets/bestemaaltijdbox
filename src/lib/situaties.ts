import type { ContentBlok } from './blokken';

/**
 * Content voor de /voor/<situatie>-pagina's.
 *
 * Twee soorten pagina's delen dit model:
 *  - eenvoudige situaties renderen de standaardranglijst uit aanbieders.ts;
 *  - situaties met `blokken` renderen in plaats daarvan hun eigen opbouw.
 *
 * Cijfers (prijs, score, recepten, bezorgkost, korting) staan hier bewust
 * NIET: die komen uit aanbieders.ts en worden bij het renderen berekend.
 */

export interface Situatie {
  titel: string;
  h1: string;
  intro: string;
  uitleg: string;
  uitlegParagraphs?: string[];
  icon: string;
  seoTitel: string;
  seoDesc: string;
  faq: { q: string; a: string }[];
  faqKop?: string;
  nietGeschiktAls: string[];
  /** Aanwezig bij uitgewerkte pagina's; vervangt de standaardranglijst. */
  blokken?: ContentBlok[];
}

export const situaties: Record<string, Situatie> = {
  koppel: {
    titel: 'Beste maaltijdbox voor koppels',
    h1: 'Maaltijdbox voor 2 personen in België (2026): welke past bij jullie?',
    intro: 'Samen koken is meer dan een maaltijd bereiden — het is quality time. Maar welke maaltijdbox past écht bij jullie ritme als koppel?',
    uitleg: 'Een maaltijdbox voor 2 personen lost drie concrete problemen op: je hoeft niet elke week boodschappen te doen, je eet gevarieerder zonder lang na te denken wat je kookt, en je verspilt bijna niets omdat alles exact afgemeten wordt geleverd. We vergeleken alle 6 aanbieders die geschikt zijn voor koppels in België — op prijs, receptvariatie, flexibiliteit en de actuele deals. Zo kies je meteen de juiste.',
    icon: '👫',
    seoTitel: 'Beste maaltijdbox voor 2 personen in België 2026 — top 6 getest',
    seoDesc: 'Welke maaltijdbox past het best als koppel? 6 aanbieders getest op prijs, receptvariatie en flexibiliteit voor 2 personen. Bespaar tot €60 op je eerste box.',
    faqKop: 'Veelgestelde vragen voor koppels',
    faq: [
      { q: 'Hoeveel maaltijden per week is realistisch als koppel?', a: 'De meeste koppels starten met 3 maaltijden per week — dat dekt de drukke doordeweekse avonden en laat ruimte voor een restaurantje of zelf iets klaarmaken in het weekend. Je kan altijd aanpassen of een week pauzeren.' },
      { q: 'Welke maaltijdbox is het goedkoopst voor 2 personen?', a: 'HelloFresh met tot €60 welkomstkorting is de goedkoopste optie voor koppels in de eerste weken. Foodprepper (€45 korting, geen abonnement) is een goede keuze als je flexibel wil blijven.' },
      { q: 'Kunnen we als koppel wekelijks pauzeren of opzeggen?', a: 'Ja. HelloFresh, Foodbag en Marley Spoon laten je wekelijks pauzeren of opzeggen. Foodbag en Foodprepper hebben zelfs geen verplicht abonnement — je bestelt wanneer je wil.' },
      { q: 'Is een maaltijdbox duurder dan gewone boodschappen?', a: 'Per portie betaal je iets meer, maar je verspilt nauwelijks voedsel omdat alles exact afgemeten wordt geleverd. Koppels die regelmatig restjes weggooien of impulsaankopen doen, betalen in de praktijk niet veel meer.' },
    ],
    nietGeschiktAls: [],
    blokken: [
      {
        type: 'infokaarten',
        kop: 'Wat telt voor koppels?',
        items: [
          { icon: '💶', titel: 'Prijs voor 2', tekst: 'Reken met 6 porties per week (2 personen × 3 maaltijden). Dat loopt snel op: van €33 bij HelloFresh tot €57 bij Foodbag.' },
          { icon: '📦', titel: 'Minimumafname', tekst: 'De meeste aanbieders vereisen minimum 2 maaltijden per week. Foodbag en Foodprepper zijn flexibeler — geen verplicht abonnement.' },
          { icon: '🍽️', titel: 'Receptvariatie', tekst: 'Koppels vervelen sneller dan singles. Kies een aanbieder met 40+ recepten per week zodat je nooit twee keer hetzelfde eet.' },
          { icon: '🔀', titel: 'Flexibiliteit', tekst: 'Kunnen jullie makkelijk pauzeren of een week overslaan? HelloFresh, Foodbag en Marley Spoon laten je tot 5 dagen voor levering aanpassen.' },
        ],
      },
      {
        type: 'topAanbieders',
        kop: 'Top 3 aanbevelingen voor koppels',
        items: [
          {
            slug: 'hellofresh',
            badge: '⭐ Beste keuze',
            badgeAchtergrond: '#E8F5EE',
            badgeTekst: '#1B4332',
            tagline: 'Marktleider — sterkste prijs-kwaliteitverhouding',
            waarom: 'Met 40+ recepten per week komen koppels zelden twee keer hetzelfde op tafel. HelloFresh is flexibel — pauzeren of opzeggen kan tot 5 dagen voor levering. De grote keuze maakt het ook makkelijk om rekening te houden met elkaars voorkeuren.',
            deal: 'tot €60 korting op je eerste 3 boxen — automatisch via onze link',
          },
          {
            slug: 'foodbag',
            badge: '🇧🇪 Belgisch',
            badgeAchtergrond: '#DBEAFE',
            badgeTekst: '#1E40AF',
            tagline: 'Lokale Belgische ingrediënten — top smaakscore',
            waarom: 'Koppels die bewust Belgisch willen eten kiezen Foodbag. De ingrediënten komen van lokale boerderijen — dat merk je aan de versheid. Met 5 kookstijlen (waaronder de Sana-lijn van Sandra Bekkari) vinden ook veeleisende eters hun gading.',
            deal: '€60 korting — automatisch via onze link, geen code nodig (3× €20)',
          },
          {
            slug: 'marley-spoon',
            badge: '👨‍🍳 Chef-recepten',
            badgeAchtergrond: '#F3E8FF',
            badgeTekst: '#7C3AED',
            tagline: 'Chef-kwaliteit — samen koken als avondactiviteit',
            waarom: 'Voor koppels die van koken genieten en er 45-60 minuten voor willen nemen. De recepten zijn uitgebreider dan bij HelloFresh — meer technieken, kwalitatievere kruidenmixen. Ideaal als samen koken quality time is. Let op: enkel bezorging in Vlaanderen en Brussel.',
            deal: '50% korting — automatisch via link, geldig op eerste 4 boxen',
          },
        ],
      },
      {
        type: 'overigeAanbieders',
        kop: 'Overige aanbieders voor koppels',
        items: [
          { slug: 'factor', omschrijving: 'Kant-en-klare chef-maaltijden die je enkel opwarmt — geen koken vereist. Handig voor drukke avonden, maar je mist het kookplezier van een klassieke maaltijdbox.' },
          { slug: 'ekomenu', omschrijving: 'De enige 100% biologische maaltijdbox in België — ideaal voor koppels met een milieubewuste leefstijl. Enkel bezorging in Vlaanderen en Brussel, geen actieve kortingscode.' },
          { slug: 'foodprepper', omschrijving: 'De snelste optie — verse maaltijd in 15 minuten dankzij voorbereide ingrediënten. Geen verplicht abonnement en de laagste prijs per portie met gratis bezorging. Enkel levering in Vlaanderen en Brussel.' },
        ],
      },
      {
        type: 'tabel',
        kop: 'Vergelijkingstabel: 6 aanbieders voor koppels',
        slugs: ['hellofresh', 'foodbag', 'marley-spoon', 'ekomenu', 'factor', 'foodprepper'],
        portiesPerWeek: 6,
        kolommen: [
          { kop: '€/portie', soort: 'portie' },
          { kop: '€/week (2p, 3×)', soort: 'weekprijs' },
          { kop: 'Recepten/week', soort: 'recepten' },
          { kop: 'Korting', soort: 'korting' },
        ],
        voetnoot: 'Weekprijs is inclusief bezorgkost waar die van toepassing is (Marley Spoon en Factor rekenen €5,99 per levering). Prijzen zijn richtprijzen — controleer de actuele tarieven op de site van de aanbieder.',
      },
      {
        type: 'scenarios',
        kop: 'Welke kies jij?',
        items: [
          {
            scenario: 'Jullie willen maximaal voordeel',
            aanbeveling: 'HelloFresh',
            slug: 'hellofresh',
            uitleg: 'Met de HelloFresh welkomstdeal (tot €60 korting op je eerste 3 boxen) betaal je de eerste weken maar €5–6/avond voor twee. Na de kortingsperiode is HelloFresh nog steeds een van de goedkoopste kookboxen in België.',
            achtergrond: '#E8F5EE',
            rand: '#BBF7D0',
          },
          {
            scenario: 'Jullie willen écht genieten van het koken',
            aanbeveling: 'Marley Spoon of Foodbag',
            slug: 'marley-spoon',
            uitleg: 'Marley Spoon voor wie van culinaire uitdaging houdt (chef-recepten, 45–60 min). Foodbag als je ook lokale Belgische kwaliteit wil — de versheid van de ingrediënten is merkbaar beter.',
            achtergrond: '#F3E8FF',
            rand: '#DDD6FE',
          },
          {
            scenario: 'Jullie kiezen bewust Belgisch',
            aanbeveling: 'Foodbag',
            slug: 'foodbag',
            uitleg: 'Foodbag werkt uitsluitend met Belgische en lokale ingrediënten van boerderijen in de buurt. Met €60 welkomstkorting (3× €20), automatisch via onze link, is de instapprijs ook voor budgetbewuste koppels draaglijk.',
            achtergrond: '#DBEAFE',
            rand: '#BFDBFE',
          },
        ],
      },
      {
        type: 'slotCta',
        kop: 'Klaar om te beginnen?',
        tekst: 'HelloFresh is de meest gekozen maaltijdbox voor koppels in België. Met de welkomstdeal (tot €60 korting op je eerste 3 boxen) is het ook meteen de voordeligste manier om te starten.',
        slug: 'hellofresh',
        knoptekst: 'Activeer tot €60 korting bij HelloFresh →',
        subtekst: 'Tot €60 korting op je eerste 3 boxen · automatisch via link · direct opzegbaar',
      },
    ],
  },
  vegan: {
    titel: 'Beste vegan maaltijdbox',
    h1: 'Beste vegan maaltijdbox België 2026 — eerlijk vergeleken',
    intro: 'Plantaardig eten groeit snel in België — maar welke maaltijdbox past écht bij een vegan leefstijl?',
    uitleg: 'Steeds meer Belgen kiezen voor een plantaardig dieet — uit gezondheidsoverwegingen, duurzaamheid of ethische keuzes. Maaltijdboxen kunnen daarbij helpen: minder plannen, minder voedselverspilling, meer variatie. Maar niet elke aanbieder is geschikt voor vegans. In dit overzicht vergelijken we de 4 relevante aanbieders in België — eerlijk, zonder overdreven claims. Ekomenu is de enige 100% vegan box. De anderen hebben vegetarische opties, maar zijn geen vegan boxen.',
    icon: '🌱',
    seoTitel: 'Beste vegan maaltijdbox in België 2026 — Ekomenu, HelloFresh en Foodbag getest',
    seoDesc: 'Op zoek naar een 100% vegan maaltijdbox in België? Ekomenu (plantaardig & bio) vergeleken met de vegan-opties van HelloFresh en Foodbag. Bespaar tot €60.',
    faqKop: 'Veelgestelde vragen over vegan maaltijdboxen',
    faq: [
      { q: 'Wat is het verschil tussen een vegan maaltijdbox en een vegetarische maaltijdbox?', a: 'Een vegan maaltijdbox bevat geen enkele dierlijke producten — geen vlees, vis, eieren of zuivel. Een vegetarische maaltijdbox sluit vlees en vis uit, maar kan nog wel eieren, kaas of melk bevatten. In België is Ekomenu de enige aanbieder met een volledig vegan en biologisch aanbod. HelloFresh, Foodbag en Marley Spoon bieden vegetarische receptopties maar zijn geen vegan boxen.' },
      { q: 'Bestaat er een 100% vegan maaltijdbox in België?', a: 'Ja. Ekomenu is de enige aanbieder in België met een volledig plantaardig en biologisch aanbod. Alle ingrediënten zijn 100% bio-gecertificeerd en er worden geen dierlijke producten gebruikt. De andere aanbieders — HelloFresh, Foodbag en Marley Spoon — hebben vegetarische recepten in hun assortiment, maar zijn geen exclusief vegan boxen.' },
      { q: 'Is een vegan maaltijdbox duurder dan een gewone maaltijdbox?', a: 'Ekomenu kost €6,18 per portie — goedkoper dan HelloFresh (€7,99) of Marley Spoon (€8,67). Het hogere tarief bij die aanbieders weerspiegelt hun bredere receptaanbod. Foodbag is met €9,50 per portie de duurste optie. Als je vegan wil eten via een andere aanbieder zoals HelloFresh, betaal je de reguliere prijs maar heb je een beperktere keuze aan vegan-geschikte recepten.' },
    ],
    nietGeschiktAls: [],
    blokken: [
      {
        type: 'notitie',
        kop: '⚠️ Belangrijk onderscheid: 100% vegan vs. vegan opties',
        achtergrond: '#FEF3C7',
        rand: '#FCD34D',
        regels: [
          { label: '100% vegan box:', tekst: 'Ekomenu levert uitsluitend plantaardige, biologische maaltijden. Geen vlees, geen vis, geen zuivel, geen eieren — nooit.' },
          { label: 'Aanbieders met vegan/vegetarische opties:', tekst: 'HelloFresh, Foodbag en Marley Spoon zijn geen vegan boxen. Ze hebben vegetarische recepten in hun assortiment, maar hun standaardaanbod bevat vlees en vis. Je kan bij deze aanbieders kiezen voor vegetarische maaltijden, maar dat vraagt actieve selectie elke week — en volledig vegan is niet altijd gegarandeerd.' },
        ],
      },
      {
        type: 'topAanbieders',
        kop: 'Top 4 aanbieders voor vegan eters',
        items: [
          {
            slug: 'ekomenu',
            badge: '🌱 100% Vegan & Bio',
            badgeAchtergrond: '#E8F5EE',
            badgeTekst: '#1B4332',
            tagline: 'Enige 100% vegan en biologische maaltijdbox in België',
            waarom: 'Ekomenu is de enige aanbieder in België die volledig vegan én 100% biologisch is. Alle ingrediënten komen van gecertificeerde biologische boerderijen — geen dierlijke producten, geen pesticiden. Voor wie echt vegan wil eten zonder compromissen is dit de logische keuze. Er is geen actieve kortingscode, maar op hun site staat vaak een welkomstaanbieding voor nieuwe klanten.',
            deal: 'Welkomstaanbieding beschikbaar op hun site — check ekomenu.be voor de actuele actie',
          },
          {
            slug: 'hellofresh',
            badge: '⭐ Hoogste score',
            badgeAchtergrond: '#DBEAFE',
            badgeTekst: '#1E40AF',
            tagline: 'Vegetarische receptopties — niet 100% vegan',
            waarom: 'HelloFresh heeft wekelijks een selectie vegetarische recepten in zijn aanbod van 40+ maaltijden. Handig als je af en toe vegan of vegetarisch wil koken maar niet elke dag. Let op: HelloFresh is geen vegan box — de meeste recepten bevatten vlees of vis. Je kiest zelf welke recepten je wil, maar het assortiment is niet uitsluitend plantaardig.',
            deal: 'tot €60 korting op je eerste 3 boxen — automatisch via onze link',
            waarschuwing: '⚠️ Niet 100% vegan',
          },
          {
            slug: 'foodbag',
            badge: '🇧🇪 Belgisch',
            badgeAchtergrond: '#FEF9C3',
            badgeTekst: '#854D0E',
            tagline: '"Veggie" als één van 5 kookstijlen — niet 100% vegan',
            waarom: 'Foodbag biedt 5 kookstijlen waaronder een "veggie"-lijn. Die lijn bevat plantaardige en vegetarische maaltijden, maar Foodbag is geen vegan box — de andere kookstijlen bevatten vlees en vis. Als je bewust Belgisch én veggie wil eten, is de Foodbag veggie-lijn een optie. Wel de duurste aanbieder in dit overzicht.',
            deal: '€60 korting — automatisch via onze link, geen code nodig (3× €20)',
            waarschuwing: '⚠️ Niet 100% vegan',
          },
          {
            slug: 'marley-spoon',
            badge: '👨‍🍳 Chef-recepten',
            badgeAchtergrond: '#F3E8FF',
            badgeTekst: '#7C3AED',
            tagline: 'Vegetarische opties beschikbaar — niet 100% vegan',
            waarom: 'Marley Spoon heeft vegetarische recepten in zijn weekmenu, maar is geen vegan box. De recepten zijn kwalitatief en uitgebreider dan bij andere aanbieders — meer technieken, mooiere presentatie. Als je occasioneel vegetarisch wil koken en houdt van iets meer culinaire uitdaging, is dit een optie. Let op: enkel bezorging in Vlaanderen en Brussel.',
            deal: 'Tot 50% korting automatisch via link — geldig op eerste 4 boxen',
            waarschuwing: '⚠️ Niet 100% vegan',
          },
        ],
      },
      {
        type: 'tabel',
        kop: 'Vergelijkingstabel: 4 aanbieders voor vegan eters',
        slugs: ['ekomenu', 'hellofresh', 'foodbag', 'marley-spoon'],
        portiesPerWeek: 6,
        kolommen: [
          { kop: '€/portie', soort: 'portie' },
          {
            kop: 'Vegan aanbod',
            soort: 'tekst',
            waarden: {
              ekomenu: '100% vegan & bio ✓',
              hellofresh: 'Vegetarische opties',
              foodbag: '"Veggie" kookstijl',
              'marley-spoon': 'Vegetarische opties',
            },
          },
          { kop: 'Score', soort: 'score' },
          { kop: 'Korting', soort: 'korting' },
        ],
        voetnoot: 'Prijzen zijn richtprijzen — controleer de actuele tarieven op de site van de aanbieder.',
      },
      {
        type: 'scenarios',
        kop: 'Voor wie is welke optie?',
        items: [
          {
            scenario: 'Je wil 100% vegan eten zonder compromissen',
            aanbeveling: 'Ekomenu',
            slug: 'ekomenu',
            uitleg: 'Ekomenu is de enige aanbieder in België die volledig vegan én biologisch is. Je hoeft niet te filteren of op te letten — het hele assortiment is plantaardig. Check hun site voor de actuele welkomstaanbieding.',
            achtergrond: '#E8F5EE',
            rand: '#BBF7D0',
          },
          {
            scenario: 'Je wil af en toe vegan koken, niet elke dag',
            aanbeveling: 'HelloFresh',
            slug: 'hellofresh',
            uitleg: 'HelloFresh biedt 40+ recepten per week, waaronder vegetarische opties. Je kiest elke week zelf welke maaltijden je wil — zo eet je 2 of 3 keer per week plantaardig zonder vast te zitten aan een vegan box. Met tot €60 welkomstkorting ook de voordeligste instap.',
            achtergrond: '#DBEAFE',
            rand: '#BFDBFE',
          },
          {
            scenario: 'Je wil Belgisch én veggie, en je budget is ruimer',
            aanbeveling: 'Foodbag',
            slug: 'foodbag',
            uitleg: 'Foodbag heeft een aparte "veggie"-kookstijl met Belgische ingrediënten van lokale boerderijen. De prijs is hoger (vanaf €9,50/portie), maar de versheid en lokale herkomst zijn merkbaar. Via onze link krijg je €60 korting op je eerste bestellingen — automatisch toegepast, geen code nodig.',
            achtergrond: '#FEF3C7',
            rand: '#FCD34D',
          },
        ],
      },
      {
        type: 'slotCta',
        kop: 'Klaar om vegan te koken met een maaltijdbox?',
        tekst: 'Voor een echte vegan box kies je Ekomenu — de enige 100% plantaardige en biologische aanbieder in België. Check hun site voor de actuele welkomstaanbieding voor nieuwe klanten.',
        slug: 'ekomenu',
        knoptekst: 'Bekijk Ekomenu →',
        subtekst: 'Plantaardig en biologisch · gratis bezorging · wekelijks opzegbaar',
      },
    ],
  },
  gezin: {
    titel: 'Beste maaltijdbox voor gezinnen',
    h1: 'Beste maaltijdbox voor gezinnen in België (2026)',
    intro: 'Welke maaltijdbox past het beste bij een gezin met kinderen? Wij vergeleken portiegroottes, bereidingstijd en kindvriendelijke recepten van alle Belgische maaltijdboxen.',
    uitleg: '',
    uitlegParagraphs: [
      'Hoe zorg je voor gevarieerde, gezonde maaltijden op een drukke dinsdagavond — met kinderen die wachten, huiswerk dat gemaakt moet worden, en geen zin om na te denken over wat er in de koelkast ligt?',
      'Foodbag\'s "Busy Day" lijn is specifiek voor dat probleem gemaakt: maaltijden klaar in 20 minuten, weinig afwas, en toch verse ingrediënten van Belgische boerderijen. HelloFresh is interessant als je een groter gezin hebt of meer keuze wil: doordat je elke week zelf kiest, kan je de selectie afstemmen op wat de kinderen die week lekker vinden. Lees onze <a href="/voor/gezin" style="color:#1B4332;font-weight:600;text-decoration:underline">meer info over maaltijdboxen voor gezinnen</a> voor een diepere vergelijking.',
      'Let ook op de bezorgdagen. Foodbag levert van vrijdag tot maandag — handig als je het weekend wil plannen. HelloFresh is flexibeler met meerdere weekdagen. Beide leveren in heel België inclusief Wallonië; Marley Spoon niet.',
    ],
    icon: '👨‍👩‍👧',
    seoTitel: 'Beste maaltijdbox voor gezinnen in België 2026 — snel, gezond en kindvriendelijk',
    seoDesc: 'Welke maaltijdbox past bij een druk gezin? Porties, bereidingstijd en kindvriendelijke recepten vergeleken. Bespaar tot €60 op je eerste box.',
    faq: [
      { q: 'Welke maaltijdbox is het snelst klaar voor een gezin?', a: 'Foodbag "Busy Day" heeft maaltijden klaar in 20 minuten, met eenvoudige instructies en weinig afwas. HelloFresh "Quick & Easy" recepten zijn klaar in 25–30 minuten. Beide zijn goed haalbaar op drukke schoolavonden.' },
      { q: 'Welke maaltijdbox heeft de grootste porties voor gezinnen?', a: 'Foodbag en HelloFresh bieden boxen voor tot 5 personen. HelloFresh gaat als enige aanbieder tot 6 personen — handig voor grotere gezinnen of als er regelmatig iemand extra aan tafel zit.' },
      { q: 'Kunnen kinderen kieskeurig zijn bij maaltijdboxen?', a: 'HelloFresh heeft op zijn website een "Gezin" filter waarmee je kindvriendelijke recepten kan selecteren. Foodbag\'s Originals-lijn bevat veel vertrouwde Belgische klassiekers die ook bij kinderen in de smaak vallen.' },
      { q: 'Wat als een kind een voedingsallergie heeft?', a: 'HelloFresh en Ekomenu bieden de meest uitgebreide filteropties per allergie (gluten, lactose, noten). Foodbag heeft minder filteropties maar de ingrediëntlijsten zijn transparant per recept, zodat je zelf kan controleren.' },
      { q: 'Kan ik de maaltijdbox pauzeren tijdens schoolvakanties?', a: 'Ja. HelloFresh, Foodbag en Marley Spoon laten je leveringen pauzeren of overslaan, doorgaans tot 5 dagen voor de volgende leverdatum. Handig als je op vakantie bent of een week wil overslaan.' },
    ],
    nietGeschiktAls: [
      'Je gezin bestaat uit 5 of meer personen en je kookt elke dag — de kostprijs loopt dan snel op.',
      'Kinderen zijn heel kieskeurig en willen geen variatie of nieuwe gerechten uitproberen.',
      'Je wil volledige controle over elke ingredient (bijv. bij ernstige allergieën) — raadpleeg dan altijd de allergeninformatie per recept.',
    ],
  },
  vegetarisch: {
    titel: 'Beste vegetarische maaltijdbox',
    h1: 'Beste vegetarische maaltijdbox in België (2026)',
    intro: 'Op zoek naar een maaltijdbox met veel vegetarische of vegan recepten? Wij vergeleken het plantaardige aanbod van alle Belgische maaltijdboxen.',
    uitleg: '',
    uitlegParagraphs: [
      'Niet elke maaltijdbox met "vegetarische opties" is geschikt voor wie echt vegetarisch of vegan eet. Er is een fundamenteel verschil: sommige boxen bieden wekelijks een paar plantaardige recepten naast vlees, andere zijn volledig plantaardig. Die keuze heeft meer impact op je dagelijkse ervaring dan je op het eerste gezicht zou denken.',
      'Ekomenu is de enige aanbieder in België die uitsluitend plantaardig werkt — je hoeft nooit te kiezen of te filteren. Dat maakt het rustiger in gebruik voor wie vegetarisch of vegan eet. De "Groenteteller" helpt je bijhouden of je genoeg groenten binnenkrijgt per week. Lees onze <a href="/aanbieder/ekomenu" style="color:#1B4332;font-weight:600;text-decoration:underline">volledige Ekomenu review</a> voor alle details. Nadeel: bezorging enkel in Vlaanderen en Brussel.',
      'Als je vegetarisch wil eten maar je partner niet, zijn Marley Spoon en HelloFresh interessanter — je kiest elke week zelf welke recepten je wil, ook volledig plantaardige. Je moet dan wel actief filteren per week. Lees onze <a href="/aanbieder/marley-spoon" style="color:#1B4332;font-weight:600;text-decoration:underline">Marley Spoon review</a> voor een overzicht van het vegan aanbod.',
    ],
    icon: '🌱',
    seoTitel: 'Beste vegetarische maaltijdbox in België 2026 — vegan & bio getest',
    seoDesc: 'Vegetarische of vegan maaltijdbox in België? Ekomenu, HelloFresh en Marley Spoon vergeleken op aanbod, smaak en bio-keurmerk. Bespaar tot €60.',
    faq: [
      { q: 'Welke maaltijdbox is volledig vegetarisch in België?', a: 'Ekomenu is de enige volledig vegetarische en vegane maaltijdbox in België — alle recepten zijn plantaardig en 100% biologisch gecertificeerd. Bij de andere aanbieders zijn er vegetarische opties, maar je moet zelf filteren.' },
      { q: 'Heeft HelloFresh vegan opties in België?', a: 'Ja, HelloFresh biedt wekelijks meerdere vegetarische en vegan recepten aan via de "Veggie" categorie. Maar HelloFresh is niet uitsluitend vegetarisch — je selecteert zelf welke recepten je wil voor die week.' },
      { q: 'Heeft Ekomenu ook vegan opties, of alleen vegetarisch?', a: 'Ekomenu biedt zowel vegetarische als volledig vegan recepten aan. Je kan filteren op vegan, glutenvrij, koolhydraatarm en meer. Alle recepten zijn sowieso 100% biologisch gecertificeerd.' },
      { q: 'Welke maaltijdbox is het beste voor biologisch eten?', a: 'Ekomenu is de enige 100% biologisch gecertificeerde maaltijdbox in België. Alle ingrediënten zijn bio en de verpakking is composteerbaar. Foodbag scoort ook sterk op duurzaamheid met lokale Belgische ingrediënten.' },
      { q: 'Levert Ekomenu ook in Wallonië?', a: 'Nee, Ekomenu bezorgt momenteel enkel in Vlaanderen en Brussel. Woon je in Wallonië en zoek je vegetarische opties? HelloFresh en Foodbag zijn de enige aanbieders met dekking in heel België én vegetarische recepten.' },
    ],
    nietGeschiktAls: [
      'Je partner eet vlees en wil een gemengde selectie — kies dan HelloFresh of Marley Spoon waarbij je per week kiest.',
      'Je woont in Wallonië en wil 100% plantaardig — Ekomenu bezorgt daar momenteel niet.',
      'Je zoekt vegan kant-en-klare maaltijden — dat segment is in België nog beperkt.',
    ],
  },
  budget: {
    titel: 'Goedkoopste maaltijdbox in België',
    h1: 'Goedkoopste maaltijdbox in België 2026 — Beste prijs-kwaliteit',
    intro: 'Welke maaltijdbox is écht het voordeligst in België? We zetten de prijs per portie, bezorgkosten en welkomstvoordelen naast elkaar — zodat je kan kiezen op basis van wat je écht betaalt, niet op de prijs die op de homepage staat.',
    uitleg: '',
    uitlegParagraphs: [
      'De goedkoopste maaltijdbox is niet altijd de beste deal. <a href="/aanbieder/factor" style="color:#1B4332;font-weight:600;text-decoration:underline">Factor</a> heeft met €4,99 per portie de laagste portieprijs, maar rekent €5,99 bezorgkosten — voor 2 personen kom je dan op zo\'n €35 per week. <a href="/aanbieder/hellofresh" style="color:#1B4332;font-weight:600;text-decoration:underline">HelloFresh</a> lijkt op het eerste zicht duurder (€7,99/portie), maar met de welkomstkorting van tot €60 én gratis bezorging is het de eerste weken vaak de voordeligste keuze. <a href="/aanbieder/foodprepper" style="color:#1B4332;font-weight:600;text-decoration:underline">Foodprepper</a> is de slimste tussenoptie als je géén abonnement wil: €45 welkomstkorting, los te bestellen, geen verplichting.',
      'Reken altijd het werkelijke wekelijks bedrag uit: portieprijs × aantal porties + bezorgkost − welkomstkorting. Een lage portieprijs met dure bezorging kan duurder uitvallen dan een "duurdere" kookbox met gratis levering en €60 welkomstkorting. In onze <a href="/gids/goedkoopste-maaltijdbox-belgie" style="color:#1B4332;font-weight:600;text-decoration:underline">uitgebreide goedkoopste-gids</a> staat de volledige berekening per aanbieder.',
    ],
    icon: '💰',
    seoTitel: 'Goedkoopste maaltijdbox in België 2026 — prijs per portie inclusief bezorgkost',
    seoDesc: 'Wat kost een maaltijdbox écht per portie? Alle Belgische aanbieders vergeleken inclusief bezorgkosten. Bespaar tot €60 op je eerste box.',
    faq: [
      { q: 'Wat is de goedkoopste maaltijdbox per portie in België?', a: 'Factor heeft met €4,99 per portie de laagste prijs, maar rekent €5,99 bezorgkosten per levering. HelloFresh kost €7,99 per portie maar is met de welkomstkorting (tot €60) en gratis bezorging de eerste weken vaak voordeliger dan Factor. Foodprepper biedt een tussenoptie met €45 korting en geen verplicht abonnement.' },
      { q: 'Welke maaltijdbox heeft geen bezorgkosten?', a: 'HelloFresh, Foodbag, Marley Spoon, Ekomenu en Foodmaker bieden gratis bezorging. Factor rekent €5,99 bezorgkosten per levering — tel die altijd mee in je werkelijke prijs per maaltijd.' },
      { q: 'Welke goedkope maaltijdbox kan ik proberen zonder me vast te leggen?', a: 'Foodprepper en Foodbag werken zonder verplicht abonnement — je bestelt wanneer je wil. Foodprepper geeft daarbij €45 welkomstkorting verspreid over je eerste 3 bestellingen, dus je kan het concept écht testen voor je beslist of je wil verderdoen.' },
      { q: 'Is een maaltijdbox goedkoper dan zelf boodschappen doen?', a: 'Niet altijd. Per portie betaal je meer dan bij de supermarkt, maar je verspilt nauwelijks voedsel omdat alles exact afgemeten wordt geleverd. Reken je weggegooide ingrediënten en impulsaankopen mee, dan valt het werkelijke prijsverschil kleiner uit dan je denkt.' },
      { q: 'Kan ik de welkomstaanbieding meerdere keren gebruiken?', a: 'Nee, welkomstkortingen zijn éénmalig voor nieuwe klanten. Na de proefperiode stijgt de prijs naar het normale tarief. Wil je opnieuw profiteren van een aanbieding? Kijk dan naar een andere aanbieder.' },
    ],
    nietGeschiktAls: [
      'Je al eerder klant was bij die aanbieder — welkomstkorting geldt alleen voor nieuwe klanten.',
      'Je los wil bestellen: abonnementsboxen zijn goedkoper per portie dan eenmalige bestellingen.',
      'Je verwacht elke dag een volledige maaltijd — de kosten lopen dan snel op ten opzichte van de supermarkt.',
    ],
  },
  singles: {
    titel: 'Beste maaltijdbox voor singles',
    h1: 'Beste maaltijdbox voor 1 persoon in België (2026)',
    intro: 'Welke maaltijdbox is het beste voor alleenstaanden? Niet alle aanbieders leveren voor 1 persoon. Wij vergeleken minimum afname, prijs en flexibiliteit voor singles.',
    uitleg: '',
    uitlegParagraphs: [
      'Als alleenstaande stoot je snel op een probleem: de meeste maaltijdboxen leveren minimum voor 2 personen. Je eindigt dan met te veel eten of gooit porties weg — wat het voordeel van een maaltijdbox teniet doet.',
      'HelloFresh is de enige klassieke kookbox die levert voor 1 persoon. Je kiest elke week hoeveel maaltijden je wil en welke recepten, uit een aanbod van 40+. Praktisch en flexibel. Lees onze <a href="/aanbieder/hellofresh" style="color:#1B4332;font-weight:600;text-decoration:underline">volledige HelloFresh review</a> voor alle details.',
      'Factor is een interessant alternatief als je geen zin hebt om te koken: kant-en-klare maaltijden die je enkel opwarmt, besteld per stuk voor 1 persoon. Geen kookbeleving, maar wel maximaal gemak. Foodprepper laat je bestellen zonder verplicht abonnement — ideaal als je het concept wil uitproberen zonder engagement. Bekijk onze <a href="/voor/singles" style="color:#1B4332;font-weight:600;text-decoration:underline">meer info over maaltijdboxen voor singles</a>.',
    ],
    icon: '🧑',
    seoTitel: 'Beste maaltijdbox voor 1 persoon in België 2026 — singles-test',
    seoDesc: 'Welke maaltijdboxen leveren écht voor 1 persoon? HelloFresh, Factor en Foodmaker vergeleken op prijs en gemak. Bespaar tot €60 op je eerste box.',
    faq: [
      { q: 'Welke maaltijdbox levert voor 1 persoon in België?', a: 'HelloFresh is de enige grote kookbox die levert voor 1 persoon in België. Factor en Foodmaker leveren ook voor 1 persoon. De meeste andere aanbieders — Marley Spoon, Ekomenu — leveren minimum voor 2 personen.' },
      { q: 'Is een maaltijdbox de moeite voor 1 persoon?', a: 'Ja. Als alleenstaande gooi je bij normale boodschappen makkelijker ingrediënten weg. Een maaltijdbox levert exacte hoeveelheden — geen restjes, geen verspilling. Dat maakt het werkelijke prijsverschil met de supermarkt kleiner dan je denkt.' },
      { q: 'Hoe pauzeer ik een maaltijdbox als ik een week niet thuis ben?', a: 'HelloFresh en Factor laten je leveringen wekelijks overslaan of pauzeren via app of website, doorgaans tot 5 dagen voor de volgende levering. Je zit nergens aan vast.' },
      { q: 'Hoeveel maaltijden per week is realistisch voor 1 persoon?', a: 'De meeste singles starten met 3 maaltijden per week. Dat geeft structuur voor drukke doordeweekse avonden, met vrijheid voor het weekend of spontane afspraken.' },
    ],
    nietGeschiktAls: [
      'Je wil elke avond een andere keuken (Thais, Japans, Indisch) — het aanbod is gevarieerd maar niet onbeperkt specifiek.',
      'Je wil geen vaste levermomenten en volledig spontaan bestellen — de meeste boxen vragen 3–5 dagen op voorhand.',
      'Je bent regelmatig niet thuis — pauzeren kost aandacht en een gemiste week is geld weg.',
    ],
  },
  bio: {
    titel: 'Beste biologische maaltijdbox',
    h1: 'Beste biologische maaltijdbox in België (2026)',
    intro: 'Welke maaltijdbox is écht biologisch gecertificeerd — en welke doet alleen alsof? Wij vergeleken alle duurzame opties in België op bio-certificering, verpakking, bezorgzone en de echte prijs per portie.',
    uitleg: '',
    uitlegParagraphs: [
      'Voor wie echt biologisch wil eten, is <a href="/aanbieder/ekomenu" style="color:#1B4332;font-weight:600;text-decoration:underline">Ekomenu</a> de enige serieuze keuze in België. Het is de enige maaltijdbox met een erkende biologische certificering: alle ingrediënten zijn 100% bio, de verpakking is composteerbaar, en bij elke bestelling zie je je persoonlijke CO2-footprint. Met 20–25 recepten per week en een volledig plantaardig aanbod is het ook meteen de sterkste keuze voor vegetariërs en vegans. Verrassend detail: Ekomenu kost maar €6,18 per portie — dat is goedkoper dan HelloFresh (€7,99) of Marley Spoon (€8,67). Biologisch eten hoeft dus niet per se duurder te zijn.',
      '<a href="/aanbieder/foodbag" style="color:#1B4332;font-weight:600;text-decoration:underline">Foodbag</a> is het beste alternatief als je ook vlees wil eten of in Wallonië woont. Foodbag is niet bio gecertificeerd, maar werkt met lokale Belgische boerderijen en eigen bezorgers — dat betekent een aantoonbaar kortere keten en verse ingrediënten. Voor wie bewust wil eten zonder strikt biologisch te gaan, is Foodbag een sterk compromis. Bekijk het verschil in detail in onze <a href="/vergelijk/hellofresh-vs-ekomenu" style="color:#1B4332;font-weight:600;text-decoration:underline">Ekomenu vergelijking</a>.',
    ],
    icon: '🌿',
    seoTitel: 'Beste biologische maaltijdbox België 2026 — Ekomenu vs Foodbag eerlijk getest',
    seoDesc: 'Ekomenu (100% bio, CO2-tracker, €6,18/portie) of Foodbag (lokale ingrediënten)? Vergeleken op bio-certificering, prijs per portie en bezorgzone in België.',
    faq: [
      { q: 'Welke maaltijdbox is 100% biologisch in België?', a: 'Ekomenu is de enige maaltijdbox in België met een erkende biologische certificering. Alle ingrediënten zijn bio, de verpakking is composteerbaar en je krijgt bij elke bestelling een persoonlijk CO2-rapport. Foodbag werkt met lokale Belgische ingrediënten maar is niet bio gecertificeerd.' },
      { q: 'Is een biologische maaltijdbox duurder?', a: 'Minder dan je denkt. Ekomenu kost vanaf €6,18 per portie — goedkoper dan HelloFresh (€7,99) of Marley Spoon (€8,67). Voor een koppel met 3 maaltijden per week betaal je €37,08/week bij Ekomenu, tegenover €47,94 bij HelloFresh. Biologisch eten hoeft dus niet meer te kosten dan een mainstream kookbox.' },
      { q: 'Wat is het verschil tussen biologisch en lokaal bij maaltijdboxen?', a: 'Biologisch (bio) betekent dat ingrediënten geteeld zijn zonder synthetische pesticiden of kunstmest en gecertificeerd zijn door een erkend controleorgaan. Lokaal slaat op de herkomst — korte aanvoerroute en streekeigen producten. Ekomenu combineert beide: bio gecertificeerd én hoofdzakelijk lokaal. Foodbag kiest voor lokale Belgische ingrediënten maar heeft geen bio-certificering.' },
      { q: 'Bezorgt Ekomenu ook in Wallonië of op zaterdag?', a: 'Nee. Ekomenu bezorgt momenteel alleen in Vlaanderen en Brussel, op maandag en vrijdag. Als je in Wallonië woont of een andere bezorgdag nodig hebt, is Foodbag het beste alternatief — dat bezorgt in heel België.' },
      { q: 'Kan ik biologisch eten als ik ook vlees wil?', a: 'Ekomenu is volledig plantaardig — er is geen vlees of vis beschikbaar. Als je biologisch bewust wil eten maar ook vlees wil, is Foodbag de beste keuze: lokale Belgische ingrediënten, kortere keten, en zowel vlees- als visopties in het menu.' },
      { q: 'Is biologisch eten ook gezonder?', a: 'Biologische producten bevatten geen synthetische pesticiden en worden duurzamer geteeld. Of dit directe gezondheidsvoordelen oplevert is wetenschappelijk niet eenduidig, maar voor het milieu en de biodiversiteit maakt het zeker verschil. Ekomenu\'s CO2-tracker laat je precies zien hoeveel impact je vermijdt per bestelling.' },
    ],
    nietGeschiktAls: [
      'Je in Wallonië woont en 100% biologisch wil — Ekomenu bezorgt daar momenteel niet, kies dan Foodbag.',
      'Je ook vlees wil eten — Ekomenu is volledig plantaardig.',
      'Je een heel strak budget hebt — Foodbag (€9,50/portie) is duurder, al valt Ekomenu (€6,18/portie) mee.',
    ],
  },
};

export function getSituatie(sleutel: string): Situatie | undefined {
  return situaties[sleutel];
}

export function generateSituatieStaticParams() {
  return Object.keys(situaties).map(situatie => ({ situatie }));
}

// Het blokvocabulaire is gedeeld met de gidsen en de blogposts.
export type { ContentBlok as SituatieBlok, BlokTopItem as SituatieTopItem, BlokTabelKolom as SituatieTabelKolom } from './blokken';
