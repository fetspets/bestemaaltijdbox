// Tijdelijke acties van aanbieders met een eigen trackinglink.
//
// Tijdens de looptijd stuurt /ga/<slug> naar `url` in plaats van de gewone
// affiliateUrl, en tonen banner, homepageblok, kortingscodepagina's en de
// HelloFresh-blogs de actie. Na `tot` valt alles vanzelf terug op de gewone
// link en teksten. Datumcheck gebeurt server-side (ISR/dynamische routes).

export interface Actie {
  id: string;
  slug: string;
  /** ISO-datum, inclusief */
  van: string;
  /** ISO-datum, inclusief */
  tot: string;
  /** Aparte trackinglink voor deze actie (geldt enkel binnen de looptijd). */
  url: string;
}

export const acties: Actie[] = [
  {
    // Mail Tessa (Omnicom) 27/10/2026: Peugeot Bistro Duo-molenset t.w.v. €56 bij de
    // 5e box + de gewone welkomstkorting (tot €70). Link na 30/11 niet meer geldig.
    id: 'hellofresh-peugeot-2026',
    slug: 'hellofresh',
    van: '2026-11-01',
    tot: '2026-11-30',
    url: 'https://hellofreshfr.sjv.io/c/3156055/4111207/45302',
  },
];

// Lokale preview: ACTIE_PREVIEW=<id> forceert die actie actief.
const preview = process.env.ACTIE_PREVIEW;

export function actieveActie(slug: string, now: Date = new Date()): Actie | undefined {
  return acties.find(a => {
    if (a.slug !== slug) return false;
    if (preview && preview === a.id) return true;
    const van = new Date(`${a.van}T00:00:00`);
    const totExcl = new Date(`${a.tot}T00:00:00`);
    totExcl.setDate(totExcl.getDate() + 1);
    return now >= van && now < totExcl;
  });
}
