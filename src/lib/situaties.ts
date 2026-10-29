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
    seoDesc: 'Welke maaltijdbox past het best als koppel? 6 aanbieders getest op prijs, receptvariatie en flexibiliteit voor 2 personen. Bespaar tot €70 op je eerste box.',
    faqKop: 'Veelgestelde vragen voor koppels',
    faq: [
      { q: 'Hoeveel maaltijden per week is realistisch als koppel?', a: 'De meeste koppels starten met 3 maaltijden per week — dat dekt de drukke doordeweekse avonden en laat ruimte voor een restaurantje of zelf iets klaarmaken in het weekend. Je kan altijd aanpassen of een week pauzeren.' },
      { q: 'Welke maaltijdbox is het goedkoopst voor 2 personen?', a: 'HelloFresh met tot €70 welkomstkorting is de goedkoopste optie voor koppels in de eerste weken. Foodprepper (€45 korting, geen abonnement) is een goede keuze als je flexibel wil blijven.' },
      { q: 'Kunnen we als koppel wekelijks pauzeren of opzeggen?', a: 'Ja. HelloFresh, Foodbag en Marley Spoon laten je wekelijks pauzeren of opzeggen. Foodbag en Foodprepper hebben zelfs geen verplicht abonnement — je bestelt wanneer je wil.' },
      { q: 'Is een maaltijdbox duurder dan gewone boodschappen?', a: 'Per portie betaal je iets meer, maar je verspilt nauwelijks voedsel omdat alles exact afgemeten wordt geleverd. Koppels die regelmatig restjes weggooien of impulsaankopen doen, betalen in de praktijk niet veel meer.' },
    ],
    nietGeschiktAls: [],
    blokken: [
      {
        type: 'infokaarten',
        kop: 'Wat telt voor koppels?',
        items: [
          { icon: '💶', titel: 'Prijs voor 2', tekst: 'Reken met 6 porties per week (2 personen × 3 maaltijden). Dat loopt snel op: van €28,50 bij Foodprepper tot €50,60 bij Foodbag, exclusief eventuele bezorgkosten.' },
          { icon: '📦', titel: 'Minimumafname', tekst: 'De meeste aanbieders vereisen minimum 2 maaltijden per week. Foodbag en Foodprepper zijn flexibeler — geen verplicht abonnement.' },
          { icon: '🍽️', titel: 'Receptvariatie', tekst: 'Koppels vervelen sneller dan singles. Kies een aanbieder met een groot weekmenu: HelloFresh en Marley Spoon hebben er 80+, Foodbag 40.' },
          { icon: '🔀', titel: 'Flexibiliteit', tekst: 'Kunnen jullie makkelijk een week overslaan? Bij HelloFresh kan dat tot enkele dagen voor de levering, bij Marley Spoon minstens een week op voorhand. Foodbag en Foodprepper kan je zonder abonnement bestellen.' },
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
            waarom: 'Met 80+ recepten per week komen koppels zelden twee keer hetzelfde op tafel. HelloFresh is flexibel — pauzeren of opzeggen kan tot enkele dagen voor de levering. De grote keuze maakt het ook makkelijk om rekening te houden met elkaars voorkeuren.',
            deal: 'tot €70 korting op je eerste 3 boxen — automatisch via onze link',
          },
          {
            slug: 'foodbag',
            badge: '🇧🇪 Belgisch',
            badgeAchtergrond: '#DBEAFE',
            badgeTekst: '#1E40AF',
            tagline: 'Lokale Belgische ingrediënten — top smaakscore',
            waarom: 'Koppels die bewust Belgisch willen eten kiezen Foodbag. De ingrediënten komen van lokale boerderijen — dat merk je aan de versheid. Met 5 kookstijlen (Original, Veggie, Quick&Easy, Sana van Sandra Bekkari en Kant&Klaar) vinden ook veeleisende eters hun gading.',
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
          { slug: 'ekomenu', omschrijving: '100% biologische maaltijdbox met veel vegetarische keuze — ideaal voor koppels met een milieubewuste leefstijl. Enkel bezorging in Vlaanderen en Brussel, geen actieve kortingscode.' },
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
        voetnoot: 'Weekprijs is inclusief bezorgkost waar die van toepassing is (Factor en HelloFresh rekenen €5,99 per levering, Marley Spoon €6,99). Prijzen zijn richtprijzen — controleer de actuele tarieven op de site van de aanbieder.',
      },
      {
        type: 'scenarios',
        kop: 'Welke kies jij?',
        items: [
          {
            scenario: 'Jullie willen maximaal voordeel',
            aanbeveling: 'HelloFresh',
            slug: 'hellofresh',
            uitleg: 'Met de HelloFresh welkomstdeal (tot €70 korting op je eerste 3 boxen) betaal je de eerste weken maar €5–6/avond voor twee. Na de kortingsperiode is HelloFresh nog steeds een van de goedkoopste kookboxen in België.',
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
        tekst: 'HelloFresh is de meest gekozen maaltijdbox voor koppels in België. Met de welkomstdeal (tot €70 korting op je eerste 3 boxen) is het ook meteen de voordeligste manier om te starten.',
        slug: 'hellofresh',
        knoptekst: 'Activeer tot €70 korting bij HelloFresh →',
        subtekst: 'Tot €70 korting op je eerste 3 boxen · automatisch via link · direct opzegbaar',
      },
    ],
  },
  vegan: {
    titel: 'Beste vegan maaltijdbox',
    h1: 'Beste vegan maaltijdbox België 2026 — eerlijk vergeleken',
    intro: 'Plantaardig eten groeit snel in België — maar welke maaltijdbox past écht bij een vegan leefstijl?',
    uitleg: 'Steeds meer Belgen kiezen voor een plantaardig dieet — uit gezondheidsoverwegingen, duurzaamheid of ethische keuzes. Maaltijdboxen kunnen daarbij helpen: minder plannen, minder voedselverspilling, meer variatie. Maar niet elke aanbieder is geschikt voor vegans. In dit overzicht vergelijken we de 4 relevante aanbieders in België — eerlijk, zonder overdreven claims. Om meteen duidelijk te zijn: geen enkele aanbieder in onze vergelijking is een 100% vegan box. Ekomenu heeft wel de meeste vegan gerechten en is volledig biologisch, en bij Marley Spoon kan je "vegan" als eetvoorkeur instellen. HelloFresh en Foodbag hebben vegetarische recepten, waarvan een deel vegan is.',
    icon: '🌱',
    seoTitel: 'Beste vegan maaltijdbox in België 2026 — eerlijk vergeleken',
    seoDesc: 'Bestaat er een 100% vegan maaltijdbox in België? Het vegan aanbod van Ekomenu, Marley Spoon, HelloFresh en Foodbag eerlijk vergeleken: keuze, prijs per portie en levergebied.',
    faqKop: 'Veelgestelde vragen over vegan maaltijdboxen',
    faq: [
      { q: 'Wat is het verschil tussen een vegan maaltijdbox en een vegetarische maaltijdbox?', a: 'Een vegan maaltijdbox bevat geen enkele dierlijke producten — geen vlees, vis, eieren of zuivel. Een vegetarische maaltijdbox sluit vlees en vis uit, maar kan nog wel eieren, kaas of melk bevatten. Geen enkele aanbieder in onze vergelijking is uitsluitend vegan. Bij Ekomenu kan je filteren op vegan, en bij Marley Spoon stel je vegan in als eetvoorkeur.' },
      { q: 'Bestaat er een 100% vegan maaltijdbox in België?', a: 'Niet bij de aanbieders die wij vergelijken. Ekomenu komt het dichtst in de buurt: alle ingrediënten zijn biologisch en je kan op vegan filteren, maar het menu bevat ook vis- en vleesgerechten. Marley Spoon laat je "vegan" kiezen als eetvoorkeur. Bij HelloFresh en Foodbag kies je zelf de vegetarische recepten, waarvan een deel vegan is.' },
      { q: 'Is een vegan maaltijdbox duurder dan een gewone maaltijdbox?', a: 'Nee. Ekomenu kost vanaf €6,42 per portie — goedkoper dan HelloFresh (€7,92) of Marley Spoon (€7,79). Het hogere tarief bij die aanbieders weerspiegelt hun bredere receptaanbod. Foodbag is met €8,43 per portie de duurste optie. Als je vegan wil eten via een andere aanbieder zoals HelloFresh, betaal je de reguliere prijs maar heb je een beperktere keuze aan vegan-geschikte recepten.' },
    ],
    nietGeschiktAls: [],
    blokken: [
      {
        type: 'notitie',
        kop: '⚠️ Belangrijk: geen enkele box in onze vergelijking is 100% vegan',
        achtergrond: '#FEF3C7',
        rand: '#FCD34D',
        regels: [
          { label: 'Meeste vegan keuze:', tekst: 'Ekomenu is 100% biologisch en heeft elke week vegan gerechten, die je met een filter terugvindt. Het is wel geen uitsluitend vegan box: er staan ook vis- en vleesgerechten op het menu.' },
          { label: 'Aanbieders met vegan/vegetarische opties:', tekst: 'HelloFresh, Foodbag en Marley Spoon zijn geen vegan boxen. Ze hebben vegetarische recepten in hun assortiment, maar hun standaardaanbod bevat vlees en vis. Je kan bij deze aanbieders kiezen voor vegetarische maaltijden, maar dat vraagt actieve selectie elke week — en volledig vegan is niet altijd gegarandeerd.' },
        ],
      },
      {
        type: 'topAanbieders',
        kop: 'Top 4 aanbieders voor vegan eters',
        items: [
          {
            slug: 'ekomenu',
            badge: '🌱 Meeste vegan keuze',
            badgeAchtergrond: '#E8F5EE',
            badgeTekst: '#1B4332',
            tagline: '100% biologisch, met elke week vegan gerechten',
            waarom: 'Ekomenu werkt met 100% biologische ingrediënten en heeft elke week meerdere vegan gerechten, die je met een filter snel terugvindt. Het is geen uitsluitend vegan box — er staan ook vis- en vleesgerechten op het menu — maar wie vegan eet, heeft hier de meeste keuze. Er is geen actieve kortingscode, maar op hun site staat vaak een welkomstaanbieding voor nieuwe klanten.',
            deal: 'Welkomstaanbieding beschikbaar op hun site — check ekomenu.be voor de actuele actie',
          },
          {
            slug: 'hellofresh',
            badge: '⭐ Hoogste score',
            badgeAchtergrond: '#DBEAFE',
            badgeTekst: '#1E40AF',
            tagline: 'Vegetarische receptopties — niet 100% vegan',
            waarom: 'HelloFresh heeft wekelijks een selectie vegetarische recepten in zijn aanbod van 40+ maaltijden. Handig als je af en toe vegan of vegetarisch wil koken maar niet elke dag. Let op: HelloFresh is geen vegan box — de meeste recepten bevatten vlees of vis. Je kiest zelf welke recepten je wil, maar het assortiment is niet uitsluitend plantaardig.',
            deal: 'tot €70 korting op je eerste 3 boxen — automatisch via onze link',
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
            tagline: 'Vegan als eetvoorkeur — geen 100% vegan box',
            waarom: 'Marley Spoon heeft vegetarische en vegan recepten in zijn weekmenu en laat je "vegan" als eetvoorkeur instellen, maar is geen vegan box. De recepten zijn kwalitatief en uitgebreider dan bij andere aanbieders — meer technieken, mooiere presentatie. Als je occasioneel vegetarisch wil koken en houdt van iets meer culinaire uitdaging, is dit een optie. Let op: enkel bezorging in Vlaanderen en Brussel.',
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
              ekomenu: 'Vegan filter · 100% bio',
              hellofresh: 'Vegetarische opties',
              foodbag: '"Veggie" kookstijl',
              'marley-spoon': 'Vegan eetvoorkeur',
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
            scenario: 'Je eet volledig vegan en wil de meeste keuze',
            aanbeveling: 'Ekomenu',
            slug: 'ekomenu',
            uitleg: 'Ekomenu heeft de meeste vegan gerechten per week en is volledig biologisch. Zet de filter op vegan en je ziet enkel wat bij jou past. Check hun site voor de actuele welkomstaanbieding.',
            achtergrond: '#E8F5EE',
            rand: '#BBF7D0',
          },
          {
            scenario: 'Je wil af en toe vegan koken, niet elke dag',
            aanbeveling: 'HelloFresh',
            slug: 'hellofresh',
            uitleg: 'HelloFresh biedt 80+ recepten per week, waaronder vegetarische opties. Je kiest elke week zelf welke maaltijden je wil — zo eet je 2 of 3 keer per week plantaardig zonder vast te zitten aan een vegan box. Met tot €70 welkomstkorting ook de voordeligste instap.',
            achtergrond: '#DBEAFE',
            rand: '#BFDBFE',
          },
          {
            scenario: 'Je wil Belgisch én veggie, en je budget is ruimer',
            aanbeveling: 'Foodbag',
            slug: 'foodbag',
            uitleg: 'Foodbag heeft een aparte "veggie"-kookstijl met Belgische ingrediënten van lokale boerderijen. De prijs is hoger (vanaf €8,43/portie), maar de versheid en lokale herkomst zijn merkbaar. Via onze link krijg je €60 korting op je eerste bestellingen — automatisch toegepast, geen code nodig.',
            achtergrond: '#FEF3C7',
            rand: '#FCD34D',
          },
        ],
      },
      {
        type: 'slotCta',
        kop: 'Klaar om vegan te koken met een maaltijdbox?',
        tekst: 'Eet je volledig vegan, dan heb je bij Ekomenu de meeste keuze: 100% biologisch, met een vegan filter. Check hun site voor de actuele welkomstaanbieding voor nieuwe klanten.',
        slug: 'ekomenu',
        knoptekst: 'Bekijk Ekomenu →',
        subtekst: '100% biologisch · vegan filter · wekelijks opzegbaar',
      },
    ],
  },
  gezin: {
    titel: 'Beste maaltijdbox voor gezinnen',
    h1: 'Beste maaltijdbox voor gezinnen in België (2026)',
    intro: 'Welke maaltijdbox past bij een gezin met kinderen? We vergeleken hoeveel personen je kan kiezen, hoe snel het klaar is, hoe kindvriendelijk de recepten zijn en waar elke aanbieder levert.',
    uitleg: '',
    uitlegParagraphs: [
      'Een drukke dinsdagavond: de kinderen hebben honger, er moet nog huiswerk gemaakt worden en niemand heeft zin om na te denken over wat er in de koelkast ligt. Daar is een maaltijdbox voor gemaakt — maar voor een gezin tellen andere dingen dan voor een koppel.',
      'Kijk eerst naar het aantal personen. HelloFresh en Marley Spoon gaan tot 6 personen, Foodbag tot 5; Foodprepper, Factor en Ekomenu stoppen bij 4. Kijk daarna naar de keuken: HelloFresh heeft een menuvoorkeur "Familie" en Marley Spoon een voorkeur "Gezinsvriendelijk", zodat de kindvriendelijke recepten bovenaan je weekmenu komen. Foodbag kookt met Belgische ingrediënten en heeft een snelle Quick&Easy-lijn.',
      'En kijk waar je woont: Marley Spoon, Foodprepper en Ekomenu leveren enkel in Vlaanderen en Brussel. Lees ook onze <a href="/vergelijk/hellofresh-vs-foodbag" style="color:#1B4332;font-weight:600;text-decoration:underline">vergelijking HelloFresh of Foodbag</a> als je tussen die twee twijfelt.',
    ],
    icon: '👨‍👩‍👧',
    seoTitel: 'Maaltijdbox voor gezinnen in België 2026 — tot 6 personen vergeleken',
    seoDesc: 'Welke maaltijdbox past bij jouw gezin? Aantal personen, kindvriendelijke recepten, bereidingstijd en levergebied van 6 aanbieders vergeleken. Tot €70 korting.',
    faqKop: 'Veelgestelde vragen voor gezinnen',
    faq: [
      { q: 'Voor hoeveel personen kan je een maaltijdbox bestellen?', a: 'HelloFresh en Marley Spoon gaan tot 6 personen; bij HelloFresh kan je voor een groter gezin een extra box bijbestellen. Foodbag gaat tot 5 personen en je kiest het aantal per gerecht. Foodprepper, Factor en Ekomenu leveren tot 4 personen.' },
      { q: 'Welke maaltijdbox heeft kindvriendelijke recepten?', a: 'Bij HelloFresh kies je de menuvoorkeur "Familie": dan staan de gezinsrecepten bovenaan je weekmenu. Marley Spoon heeft een voorkeur "Gezinsvriendelijk" met klassieke, eenvoudige recepten. Bij beide kan je daarna nog uit het volledige menu kiezen.' },
      { q: 'Welke maaltijdbox is het snelst klaar op een schoolavond?', a: 'Foodprepper is het snelst: de ingrediënten zijn voorbereid, waardoor je in een kwartier aan tafel zit (enkel in Vlaanderen en Brussel). Foodbag heeft een Quick&Easy-lijn en een filter op bereidingstijd, en HelloFresh markeert snelle recepten als "Supersnel". Wil je helemaal niet koken, dan is Factor kant-en-klaar.' },
      { q: 'Wat als een kind een voedselallergie heeft?', a: 'Alle grote aanbieders vermelden de allergenen per recept, en je kiest elke week zelf wat je bestelt. Marley Spoon heeft een voorkeur "Geen toegevoegde gluten", maar die is niet geschikt bij coeliakie omdat er kruisbesmetting mogelijk is. Bij ernstige allergieën controleer je best altijd zelf de ingrediëntenlijst.' },
      { q: 'Kan ik pauzeren tijdens de schoolvakanties?', a: 'Ja. Bij HelloFresh, Marley Spoon en Foodbag sla je een week over of pauzeer je via je account. Let op de deadline: bij HelloFresh is dat enkele dagen voor de levering, bij Marley Spoon minstens een week op voorhand. Foodbag en Foodprepper kan je ook zonder abonnement bestellen.' },
    ],
    nietGeschiktAls: [
      'Je kookt maar een of twee keer per week — dan weegt de prijs per maaltijd zwaarder door.',
      'Je kinderen eten maar een handvol gerechten en willen geen nieuwe dingen proberen.',
      'Er is een ernstige allergie in huis en je wil elk ingrediënt zelf controleren voor je bestelt.',
    ],
    blokken: [
      {
        type: 'infokaarten',
        kop: 'Wat telt voor een gezin?',
        items: [
          { icon: '👨‍👩‍👧‍👦', titel: 'Aantal personen', tekst: 'HelloFresh en Marley Spoon gaan tot 6 personen, Foodbag tot 5. Foodprepper, Factor en Ekomenu stoppen bij 4.' },
          { icon: '🧒', titel: 'Kindvriendelijke recepten', tekst: 'HelloFresh (voorkeur "Familie") en Marley Spoon (voorkeur "Gezinsvriendelijk") zetten eenvoudige, klassieke gerechten bovenaan je menu.' },
          { icon: '⏱️', titel: 'Tijd op een schoolavond', tekst: 'Foodprepper is in 15 minuten klaar. Foodbag heeft een Quick&Easy-lijn, HelloFresh een label "Supersnel". Factor warm je enkel op.' },
          { icon: '📍', titel: 'Levergebied', tekst: 'HelloFresh, Foodbag en Factor leveren in heel België. Marley Spoon, Foodprepper en Ekomenu enkel in Vlaanderen en Brussel.' },
        ],
      },
      {
        type: 'topAanbieders',
        kop: 'Top 3 aanbevelingen voor gezinnen',
        items: [
          {
            slug: 'hellofresh',
            badge: '⭐ Beste keuze',
            badgeAchtergrond: '#E8F5EE',
            badgeTekst: '#1B4332',
            tagline: 'Tot 6 personen · menuvoorkeur "Familie" · heel België',
            waarom: 'Met 80+ recepten per week en de menuvoorkeur "Familie" vind je makkelijk gerechten die ook de kinderen lusten — en je kan ze samen uitkiezen. HelloFresh levert tot 6 personen (voor een groter gezin bestel je een extra box) en komt in heel België, ook in Wallonië.',
            deal: 'tot €70 korting op je eerste 3 boxen — automatisch via onze link',
          },
          {
            slug: 'foodbag',
            badge: '🇧🇪 Belgisch',
            badgeAchtergrond: '#DBEAFE',
            badgeTekst: '#1E40AF',
            tagline: 'Belgische ingrediënten · gratis levering · met of zonder abonnement',
            waarom: 'Foodbag kookt met ingrediënten van Belgische leveranciers en heeft vijf kookstijlen, waaronder de snelle Quick&Easy-lijn en Kant&Klaar voor de echt drukke avonden. Je kiest het aantal personen per gerecht, betaalt met maaltijdcheques als je wil, en de levering is altijd gratis — in heel België.',
            deal: '3× €20 korting — automatisch via onze link, geen code nodig',
          },
          {
            slug: 'marley-spoon',
            badge: '👨‍🍳 Meeste keuze',
            badgeAchtergrond: '#F3E8FF',
            badgeTekst: '#7C3AED',
            tagline: 'Tot 6 personen · voorkeur "Gezinsvriendelijk"',
            waarom: 'Marley Spoon heeft net als HelloFresh 80+ recepten per week en boxen voor 2, 3, 4 of 6 personen. Met de voorkeur "Gezinsvriendelijk" krijg je klassieke, eenvoudige recepten voorgesteld. Let op: enkel levering in Vlaanderen en Brussel, en wijzigingen geef je minstens een week op voorhand door.',
            deal: 'bekijk de actuele welkomstactie via onze link',
          },
        ],
      },
      {
        type: 'overigeAanbieders',
        kop: 'Overige aanbieders voor gezinnen',
        items: [
          { slug: 'foodprepper', omschrijving: 'De snelste kookbox: de ingrediënten zijn voorbereid, dus je staat maar een kwartier in de keuken. Geen verplicht abonnement en de laagste prijs per portie, maar maximaal 4 personen en enkel levering in Vlaanderen en Brussel.' },
          { slug: 'factor', omschrijving: 'Kant-en-klaar: opwarmen en aan tafel. Handig voor de avonden waarop niemand wil koken, maar maximaal 4 personen en je betaalt bezorgkosten.' },
          { slug: 'ekomenu', omschrijving: '100% biologisch en tot 4 personen. Een optie voor gezinnen die bewust bio willen eten, met enkel levering in Vlaanderen en Brussel.' },
        ],
      },
      {
        type: 'tabel',
        kop: 'Vergelijkingstabel: 6 aanbieders voor gezinnen',
        slugs: ['hellofresh', 'foodbag', 'marley-spoon', 'foodprepper', 'factor', 'ekomenu'],
        portiesPerWeek: 12,
        kolommen: [
          { kop: 'Max. personen', soort: 'tekst', waarden: { hellofresh: '6', foodbag: '5', 'marley-spoon': '6', foodprepper: '4', factor: '4', ekomenu: '4' } },
          { kop: 'Levert in', soort: 'tekst', waarden: { hellofresh: 'Heel België', foodbag: 'Heel België', 'marley-spoon': 'Vl. + Brussel', foodprepper: 'Vl. + Brussel', factor: 'Heel België', ekomenu: 'Vl. + Brussel' } },
          { kop: '€/portie', soort: 'portie' },
          { kop: 'Recepten/week', soort: 'recepten' },
          { kop: 'Korting', soort: 'korting' },
        ],
        voetnoot: 'De prijs per portie is de richtprijs voor 2 personen; voor 4 personen ligt die bij de meeste aanbieders lager. Factor, HelloFresh en Marley Spoon rekenen bezorgkosten aan, de andere leveren gratis. Controleer de actuele tarieven op de site van de aanbieder.',
      },
      {
        type: 'scenarios',
        kop: 'Welke past bij jullie gezin?',
        items: [
          {
            scenario: 'Groot gezin of kieskeurige eters',
            aanbeveling: 'HelloFresh',
            slug: 'hellofresh',
            uitleg: 'Tot 6 personen, 80+ recepten en een "Familie"-menu: de meeste keuze om iets te vinden dat iedereen lust. Levert ook in Wallonië.',
            achtergrond: '#E8F5EE',
            rand: '#BBF7D0',
          },
          {
            scenario: 'Jullie willen Belgisch en flexibel',
            aanbeveling: 'Foodbag',
            slug: 'foodbag',
            uitleg: 'Lokale ingrediënten, altijd gratis levering, betalen met maaltijdcheques en bestellen met of zonder abonnement. Met Quick&Easy en Kant&Klaar voor de drukste avonden.',
            achtergrond: '#DBEAFE',
            rand: '#BFDBFE',
          },
          {
            scenario: 'Elke minuut telt',
            aanbeveling: 'Foodprepper',
            slug: 'foodprepper',
            uitleg: 'Voorbereide ingrediënten, in 15 minuten op tafel en zonder abonnement. Voor gezinnen tot 4 personen in Vlaanderen en Brussel.',
            achtergrond: '#FEF3C7',
            rand: '#FDE68A',
          },
        ],
      },
      {
        type: 'slotCta',
        kop: 'Klaar om te beginnen?',
        tekst: 'HelloFresh is de breedste keuze voor gezinnen: tot 6 personen, een "Familie"-menu en levering in heel België. Met de welkomstkorting test je het voordelig.',
        slug: 'hellofresh',
        knoptekst: 'Activeer tot €70 korting bij HelloFresh →',
        subtekst: 'Tot €70 korting op je eerste 3 boxen · automatisch via link · wekelijks opzegbaar',
      },
    ],
  },
  vegetarisch: {
    titel: 'Beste vegetarische maaltijdbox',
    h1: 'Beste vegetarische maaltijdbox in België (2026)',
    intro: 'Op zoek naar een maaltijdbox met veel vegetarische of vegan recepten? Wij vergeleken het plantaardige aanbod van alle Belgische maaltijdboxen.',
    uitleg: '',
    uitlegParagraphs: [
      'Niet elke maaltijdbox met "vegetarische opties" is geschikt voor wie echt vegetarisch of vegan eet. Het verschil zit in hoeveel keuze je overhoudt: sommige boxen bieden wekelijks maar een paar vegetarische recepten naast vlees en vis, andere hebben een groot vegetarisch aanbod met een filter, zodat je enkel ziet wat bij jou past. Volledig vegetarische boxen zitten niet in onze vergelijking.',
      'Ekomenu heeft van alle aanbieders in onze vergelijking het grootste vegetarische aanbod en werkt met 100% biologische ingrediënten. Het is geen volledig vegetarische box (er staan ook vis- en vleesgerechten op het menu), maar met de filter op vegetarisch of vegan zie je enkel wat bij jou past. De "Groenteteller" helpt je bijhouden of je genoeg groenten binnenkrijgt per week. Lees onze <a href="/aanbieder/ekomenu" style="color:#1B4332;font-weight:600;text-decoration:underline">volledige Ekomenu review</a> voor alle details. Nadeel: bezorging enkel in Vlaanderen en Brussel.',
      'Als je vegetarisch wil eten maar je partner niet, zijn Marley Spoon en HelloFresh interessanter — je kiest elke week zelf welke recepten je wil, ook volledig plantaardige. Je moet dan wel actief filteren per week. Lees onze <a href="/aanbieder/marley-spoon" style="color:#1B4332;font-weight:600;text-decoration:underline">Marley Spoon review</a> voor een overzicht van het vegan aanbod.',
    ],
    icon: '🌱',
    seoTitel: 'Beste vegetarische maaltijdbox in België 2026 — vegan & bio vergeleken',
    seoDesc: 'Vegetarische of vegan maaltijdbox in België? Ekomenu, HelloFresh en Marley Spoon vergeleken op aanbod, smaak en bio-keurmerk. Bespaar tot €70.',
    faq: [
      { q: 'Welke maaltijdbox is volledig vegetarisch in België?', a: 'Geen enkele aanbieder in onze vergelijking is uitsluitend vegetarisch. Ekomenu heeft het grootste vegetarische en vegan aanbod en is 100% biologisch. Bij HelloFresh, Marley Spoon en Foodbag kies je zelf de vegetarische recepten uit het weekmenu.' },
      { q: 'Heeft HelloFresh vegan opties in België?', a: 'Ja, HelloFresh biedt wekelijks meerdere vegetarische en vegan recepten aan via de "Veggie" categorie. Maar HelloFresh is niet uitsluitend vegetarisch — je selecteert zelf welke recepten je wil voor die week.' },
      { q: 'Heeft Ekomenu ook vegan opties, of alleen vegetarisch?', a: 'Ekomenu biedt zowel vegetarische als volledig vegan recepten aan. Je kan filteren op vegan, glutenvrij, koolhydraatarm en meer. Alle ingrediënten zijn biologisch.' },
      { q: 'Welke maaltijdbox is het beste voor biologisch eten?', a: 'Ekomenu is de enige maaltijdbox in onze vergelijking met 100% biologische ingrediënten. Foodbag scoort ook sterk op duurzaamheid met lokale Belgische ingrediënten.' },
      { q: 'Levert Ekomenu ook in Wallonië?', a: 'Nee, Ekomenu bezorgt momenteel enkel in Vlaanderen en Brussel. Woon je in Wallonië en zoek je vegetarische opties? HelloFresh en Foodbag zijn de enige aanbieders met dekking in heel België én vegetarische recepten.' },
    ],
    nietGeschiktAls: [
      'Je partner eet vlees en wil een gemengde selectie — kies dan HelloFresh of Marley Spoon waarbij je per week kiest.',
      'Je woont in Wallonië en wil het grootste vegetarische aanbod — Ekomenu bezorgt daar momenteel niet.',
      'Je zoekt vegan kant-en-klare maaltijden — dat segment is in België nog beperkt.',
    ],
  },
  budget: {
    titel: 'Goedkoopste maaltijdbox in België',
    h1: 'Goedkoopste maaltijdbox in België 2026 — Beste prijs-kwaliteit',
    intro: 'Welke maaltijdbox is écht het voordeligst in België? We zetten de prijs per portie, bezorgkosten en welkomstvoordelen naast elkaar — zodat je kan kiezen op basis van wat je écht betaalt, niet op de prijs die op de homepage staat.',
    uitleg: '',
    uitlegParagraphs: [
      'De goedkoopste maaltijdbox is niet altijd de beste deal. <a href="/aanbieder/factor" style="color:#1B4332;font-weight:600;text-decoration:underline">Factor</a> heeft met €4,99 per portie de laagste portieprijs, maar rekent €5,99 bezorgkosten — voor 2 personen kom je dan op zo\'n €35 per week. <a href="/aanbieder/hellofresh" style="color:#1B4332;font-weight:600;text-decoration:underline">HelloFresh</a> lijkt op het eerste zicht duurder (€7,92/portie), maar met de welkomstkorting van tot €70 en een gratis eerste levering is het de eerste weken vaak de voordeligste keuze. Daarna betaal je ook bij HelloFresh €5,99 bezorgkosten per box. <a href="/aanbieder/foodprepper" style="color:#1B4332;font-weight:600;text-decoration:underline">Foodprepper</a> is de slimste tussenoptie als je géén abonnement wil: €45 welkomstkorting, los te bestellen, geen verplichting.',
      'Reken altijd het werkelijke wekelijks bedrag uit: portieprijs × aantal porties + bezorgkost − welkomstkorting. Een lage portieprijs met dure bezorging kan duurder uitvallen dan een "duurdere" kookbox met gratis levering en €60 welkomstkorting. In onze <a href="/gids/goedkoopste-maaltijdbox-belgie" style="color:#1B4332;font-weight:600;text-decoration:underline">uitgebreide goedkoopste-gids</a> staat de volledige berekening per aanbieder.',
    ],
    icon: '💰',
    seoTitel: 'Goedkoopste maaltijdbox in België 2026 — prijs per portie inclusief bezorgkost',
    seoDesc: 'Wat kost een maaltijdbox écht per portie? Alle Belgische aanbieders vergeleken inclusief bezorgkosten. Bespaar tot €70 op je eerste box.',
    faq: [
      { q: 'Wat is de goedkoopste maaltijdbox per portie in België?', a: 'Factor heeft met €4,99 per portie de laagste prijs, maar rekent €5,99 bezorgkosten per levering. HelloFresh kost €7,92 per portie (plus €5,99 bezorgkosten vanaf de tweede box), maar is met de welkomstkorting (tot €70) de eerste weken vaak voordeliger dan Factor. Foodprepper biedt een tussenoptie met €45 korting en geen verplicht abonnement.' },
      { q: 'Welke maaltijdbox heeft geen bezorgkosten?', a: 'Foodbag, Marley Spoon, Ekomenu en Foodmaker bieden gratis bezorging. Bij HelloFresh is enkel je eerste levering gratis, daarna betaal je €5,99 per box. Factor rekent €5,99 bezorgkosten per levering — tel die altijd mee in je werkelijke prijs per maaltijd.' },
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
    intro: 'Alleen koken betekent vaak te veel ingrediënten voor te weinig maaltijden. Welke maaltijdboxen leveren echt voor 1 persoon, wat moet je minimaal bestellen en welke levert bij jou?',
    uitleg: '',
    uitlegParagraphs: [
      'Wie alleen woont, koopt in de supermarkt al snel een zak spinazie voor één maaltijd en gooit de rest weg. Een maaltijdbox lost dat op — als hij porties voor één persoon levert.',
      'Dat kan bij meer aanbieders dan je denkt. HelloFresh levert elke kookbox voor 1 persoon, met minimaal 3 gerechten per week en levering in heel België. Marley Spoon heeft een aparte formule "Maaltijden voor één", met supersnelle recepten en verse kant-en-klaaropties, maar levert enkel in Vlaanderen en Brussel. Lees onze <a href="/aanbieder/hellofresh" style="color:#1B4332;font-weight:600;text-decoration:underline">volledige HelloFresh review</a> voor alle details.',
      'Wil je niet koken? Dan bestel je bij Factor of Foodmaker losse kant-en-klare porties die je enkel opwarmt. Foodbag en Foodprepper kan je zonder abonnement bestellen — handig als je eerst wil uitproberen.',
    ],
    icon: '🧑',
    seoTitel: 'Maaltijdbox voor 1 persoon in België 2026 — 6 opties vergeleken',
    seoDesc: 'Welke maaltijdboxen leveren echt voor 1 persoon? HelloFresh, Marley Spoon, Factor en meer vergeleken op minimum, prijs en levergebied. Tot €70 korting.',
    faqKop: 'Veelgestelde vragen voor singles',
    faq: [
      { q: 'Welke maaltijdbox levert voor 1 persoon in België?', a: 'HelloFresh levert al zijn boxen voor 1 persoon, in heel België. Marley Spoon heeft een aparte formule "Maaltijden voor één", maar levert enkel in Vlaanderen en Brussel. Factor en Foodmaker leveren losse kant-en-klare porties. Bij Foodbag kies je per gerecht voor hoeveel personen je kookt.' },
      { q: 'Wat moet je minimaal bestellen als single?', a: 'Bij HelloFresh zijn dat 3 gerechten per week; 2 gerechten per week kan voor 1 persoon niet. Bij Foodbag bestel je minimaal 3 gerechten, met of zonder abonnement. Foodprepper en Foodmaker kan je bestellen zonder abonnement.' },
      { q: 'Is een maaltijdbox de moeite voor 1 persoon?', a: 'Per portie betaal je voor 1 persoon meestal iets meer dan voor 2. Daar staat tegenover dat je bijna niets weggooit, omdat alles afgemeten geleverd wordt. Wie nu vaak verse groenten laat bederven, betaalt in de praktijk niet veel meer dan bij gewone boodschappen.' },
      { q: 'Hoe sla ik een week over als ik niet thuis ben?', a: 'Bij HelloFresh, Marley Spoon en Factor pauzeer je of sla je een week over via je account. Let op de deadline: bij HelloFresh is dat enkele dagen voor de levering, bij Marley Spoon minstens een week op voorhand. Zonder abonnement (Foodbag, Foodprepper, Foodmaker) bestel je gewoon niet.' },
    ],
    nietGeschiktAls: [
      'Je eet maar een of twee keer per week thuis — dan haal je het minimum van de meeste boxen niet.',
      'Je kookt graag grote porties om in te vriezen; dan verliest een maaltijdbox zijn voordeel.',
      'Je bent vaak onverwacht weg en vergeet de deadline om een week over te slaan.',
    ],
    blokken: [
      {
        type: 'infokaarten',
        kop: 'Wat telt als je alleen eet?',
        items: [
          { icon: '🧑', titel: 'Echt voor 1 persoon', tekst: 'HelloFresh levert elke box voor 1 persoon. Marley Spoon heeft een aparte formule "Maaltijden voor één". Factor en Foodmaker leveren losse porties.' },
          { icon: '📦', titel: 'Het minimum', tekst: 'HelloFresh vraagt minimaal 3 gerechten per week voor 1 persoon. Foodbag minimaal 3 gerechten per bestelling, maar zonder verplicht abonnement.' },
          { icon: '🔓', titel: 'Abonnement of niet', tekst: 'Foodbag, Foodprepper en Foodmaker kan je zonder abonnement bestellen. Bij HelloFresh, Marley Spoon en Factor zeg je wekelijks op of pauzeer je.' },
          { icon: '📍', titel: 'Levergebied', tekst: 'HelloFresh, Foodbag, Factor en Foodmaker leveren in heel België. Marley Spoon en Foodprepper enkel in Vlaanderen en Brussel.' },
        ],
      },
      {
        type: 'topAanbieders',
        kop: 'Top 3 aanbevelingen voor singles',
        items: [
          {
            slug: 'hellofresh',
            badge: '⭐ Beste keuze',
            badgeAchtergrond: '#E8F5EE',
            badgeTekst: '#1B4332',
            tagline: 'Elke box voor 1 persoon · heel België',
            waarom: 'HelloFresh levert al zijn boxen voor 1 persoon, met porties die per persoon zijn afgewogen. Je kiest minimaal 3 gerechten per week uit 80+ recepten, en pauzeert of zegt op via je account. Het levert in heel België, ook in Wallonië.',
            deal: 'tot €70 korting op je eerste 3 boxen — automatisch via onze link',
          },
          {
            slug: 'marley-spoon',
            badge: '👨‍🍳 Aparte formule',
            badgeAchtergrond: '#F3E8FF',
            badgeTekst: '#7C3AED',
            tagline: '"Maaltijden voor één" · snelle recepten',
            waarom: 'Marley Spoon heeft een aparte formule voor alleenstaanden, met porties voor één persoon, supersnelle recepten, makkelijke combo\'s en verse kant-en-klaaropties. Let op: enkel levering in Vlaanderen en Brussel, en wijzigingen geef je minstens een week op voorhand door.',
            deal: 'bekijk de actuele welkomstactie via onze link',
          },
          {
            slug: 'factor',
            badge: '🍱 Zonder koken',
            badgeAchtergrond: '#FEF3C7',
            badgeTekst: '#92400E',
            tagline: 'Kant-en-klare porties · heel België',
            waarom: 'Geen zin om na je werk nog te koken? Factor levert kant-en-klare maaltijden per portie, die je in een paar minuten opwarmt. Je bestelt precies zoveel maaltijden als je nodig hebt, dus er blijft niets over. Factor levert in heel België; je betaalt wel bezorgkosten.',
            deal: 'Tot 40% korting op je eerste box + korting en cadeaus bij de volgende boxen',
          },
        ],
      },
      {
        type: 'overigeAanbieders',
        kop: 'Overige aanbieders voor singles',
        items: [
          { slug: 'foodbag', omschrijving: 'Belgische ingrediënten en altijd gratis levering. Je kiest per gerecht voor hoeveel personen je kookt en bestelt minimaal 3 gerechten, met of zonder abonnement. Levert in heel België.' },
          { slug: 'foodprepper', omschrijving: 'In 15 minuten klaar dankzij voorbereide ingrediënten, zonder abonnement en met de laagste prijs per portie. Enkel levering in Vlaanderen en Brussel.' },
          { slug: 'foodmaker', omschrijving: 'Kant-en-klare Belgische gerechten, zonder abonnement en met gratis levering in heel België. Een alternatief voor Factor als je liever niet vastzit.' },
        ],
      },
      {
        type: 'tabel',
        kop: 'Vergelijkingstabel: 6 aanbieders voor singles',
        slugs: ['hellofresh', 'marley-spoon', 'factor', 'foodbag', 'foodprepper', 'foodmaker'],
        portiesPerWeek: 3,
        kolommen: [
          { kop: 'Voor 1 persoon', soort: 'tekst', waarden: { hellofresh: 'Ja, elke box', 'marley-spoon': 'Ja, aparte formule', factor: 'Ja, per portie', foodbag: 'Per gerecht te kiezen', foodprepper: 'Ja', foodmaker: 'Ja, per portie' } },
          { kop: 'Abonnement', soort: 'tekst', waarden: { hellofresh: 'Ja, wekelijks opzegbaar', 'marley-spoon': 'Ja, wekelijks opzegbaar', factor: 'Ja, wekelijks opzegbaar', foodbag: 'Optioneel', foodprepper: 'Nee', foodmaker: 'Nee' } },
          { kop: 'Levert in', soort: 'tekst', waarden: { hellofresh: 'Heel België', 'marley-spoon': 'Vl. + Brussel', factor: 'Heel België', foodbag: 'Heel België', foodprepper: 'Vl. + Brussel', foodmaker: 'Heel België' } },
          { kop: '€/portie', soort: 'portie' },
          { kop: 'Korting', soort: 'korting' },
        ],
        voetnoot: 'De prijs per portie is de richtprijs voor 2 personen; voor 1 persoon betaal je per portie meestal iets meer. Factor, HelloFresh en Marley Spoon rekenen bezorgkosten aan. Controleer de actuele tarieven op de site van de aanbieder.',
      },
      {
        type: 'scenarios',
        kop: 'Welke past bij jou?',
        items: [
          {
            scenario: 'Je kookt graag, ook voor jezelf',
            aanbeveling: 'HelloFresh',
            slug: 'hellofresh',
            uitleg: 'Elke box voor 1 persoon, 80+ recepten en levering in heel België. Met de welkomstkorting zijn je eerste weken het voordeligst.',
            achtergrond: '#E8F5EE',
            rand: '#BBF7D0',
          },
          {
            scenario: 'Je wil niet koken',
            aanbeveling: 'Factor of Foodmaker',
            slug: 'factor',
            uitleg: 'Kant-en-klare porties die je enkel opwarmt. Factor heeft de grootste welkomstkorting; Foodmaker werkt zonder abonnement en levert gratis.',
            achtergrond: '#FEF3C7',
            rand: '#FDE68A',
          },
          {
            scenario: 'Je wil eerst uitproberen zonder vast te zitten',
            aanbeveling: 'Foodbag',
            slug: 'foodbag',
            uitleg: 'Bestel één keer, zonder abonnement, met gratis levering in heel België. Je kiest per gerecht voor hoeveel personen je kookt.',
            achtergrond: '#DBEAFE',
            rand: '#BFDBFE',
          },
        ],
      },
      {
        type: 'slotCta',
        kop: 'Klaar om te beginnen?',
        tekst: 'HelloFresh is de meest flexibele kookbox voor 1 persoon in België: elke box kan voor één, met levering in heel het land. Met de welkomstkorting test je het voordelig.',
        slug: 'hellofresh',
        knoptekst: 'Activeer tot €70 korting bij HelloFresh →',
        subtekst: 'Tot €70 korting op je eerste 3 boxen · automatisch via link · wekelijks opzegbaar',
      },
    ],
  },
  bio: {
    titel: 'Beste biologische maaltijdbox',
    h1: 'Beste biologische maaltijdbox in België (2026)',
    intro: 'Welke maaltijdbox is écht biologisch gecertificeerd — en welke doet alleen alsof? Wij vergeleken alle duurzame opties in België op bio-certificering, verpakking, bezorgzone en de echte prijs per portie.',
    uitleg: '',
    uitlegParagraphs: [
      'Voor wie echt biologisch wil eten, is <a href="/aanbieder/ekomenu" style="color:#1B4332;font-weight:600;text-decoration:underline">Ekomenu</a> de sterkste keuze in onze vergelijking. Het is de enige box die volledig met biologische ingrediënten werkt, en bij elke bestelling zie je je persoonlijke CO2-footprint. Met meer dan 35 gerechten per week, waarvan een groot deel vegetarisch, en ook vis- en vleesgerechten, is het een volwaardige weekbox. Verrassend detail: Ekomenu kost vanaf €6,42 per portie — dat is goedkoper dan HelloFresh (€7,92) of Marley Spoon (€7,79). Biologisch eten hoeft dus niet per se duurder te zijn.',
      '<a href="/aanbieder/foodbag" style="color:#1B4332;font-weight:600;text-decoration:underline">Foodbag</a> is het beste alternatief als je ook vlees wil eten of in Wallonië woont. Foodbag is niet bio gecertificeerd, maar werkt met lokale Belgische boerderijen en eigen bezorgers — dat betekent een aantoonbaar kortere keten en verse ingrediënten. Voor wie bewust wil eten zonder strikt biologisch te gaan, is Foodbag een sterk compromis. Bekijk het verschil in detail in onze <a href="/vergelijk/hellofresh-vs-ekomenu" style="color:#1B4332;font-weight:600;text-decoration:underline">Ekomenu vergelijking</a>.',
      'Naast de boxen in onze vergelijking zijn er nog kleinere Belgische spelers met een bio-aanbod. eFarmz werkt met biologische en Belgische producten, levert in heel België en Luxemburg, en je bestelt met of zonder abonnement. Little Green Box is een coöperatie met biologische en lokale producten.',
    ],
    icon: '🌿',
    seoTitel: 'Beste biologische maaltijdbox België 2026 — Ekomenu, Foodbag en meer',
    seoDesc: 'Ekomenu (100% bio, €6,42/portie) of Foodbag (lokale ingrediënten)? Vergeleken op bio-certificering, prijs per portie en bezorgzone in België.',
    faq: [
      { q: 'Welke maaltijdbox is 100% biologisch in België?', a: 'In onze vergelijking is Ekomenu de enige maaltijdbox met 100% biologische ingrediënten. Daarnaast bestaan er kleinere Belgische spelers met een bio-aanbod, zoals eFarmz en Little Green Box. Foodbag werkt met lokale Belgische ingrediënten maar is niet biologisch.' },
      { q: 'Is een biologische maaltijdbox duurder?', a: 'Minder dan je denkt. Ekomenu kost vanaf €6,42 per portie — goedkoper dan HelloFresh (€7,92) of Marley Spoon (€7,79). Voor een koppel met 3 maaltijden per week betaal je €38,52/week bij Ekomenu, tegenover €53,49 bij HelloFresh (incl. bezorging). Biologisch eten hoeft dus niet meer te kosten dan een mainstream kookbox.' },
      { q: 'Wat is het verschil tussen biologisch en lokaal bij maaltijdboxen?', a: 'Biologisch (bio) betekent dat ingrediënten geteeld zijn zonder synthetische pesticiden of kunstmest en gecertificeerd zijn door een erkend controleorgaan. Lokaal slaat op de herkomst — korte aanvoerroute en streekeigen producten. Ekomenu combineert beide: biologisch én met lokale producenten. Foodbag kiest voor lokale Belgische ingrediënten maar heeft geen bio-certificering.' },
      { q: 'Bezorgt Ekomenu ook in Wallonië of op zaterdag?', a: 'Nee. Ekomenu bezorgt momenteel alleen in Vlaanderen en Brussel, op maandag en vrijdag. Als je in Wallonië woont of een andere bezorgdag nodig hebt, is Foodbag het beste alternatief — dat bezorgt in heel België.' },
      { q: 'Kan ik biologisch eten als ik ook vlees wil?', a: 'Ja. Ekomenu werkt met 100% biologische ingrediënten en heeft naast veel vegetarische gerechten ook vis en vlees op het menu. Woon je in Wallonië, dan is Foodbag het alternatief: niet biologisch, wel lokale Belgische ingrediënten en een korte keten.' },
      { q: 'Is biologisch eten ook gezonder?', a: 'Biologische producten bevatten geen synthetische pesticiden en worden duurzamer geteeld. Of dit directe gezondheidsvoordelen oplevert is wetenschappelijk niet eenduidig, maar voor het milieu en de biodiversiteit maakt het zeker verschil. Ekomenu\'s CO2-tracker laat je precies zien hoeveel impact je vermijdt per bestelling.' },
    ],
    nietGeschiktAls: [
      'Je in Wallonië woont en 100% biologisch wil — Ekomenu bezorgt daar momenteel niet, kies dan Foodbag.',
      'Je een heel strak budget hebt — Foodbag (€8,43/portie) is duurder, al valt Ekomenu (€6,42/portie) mee.',
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
