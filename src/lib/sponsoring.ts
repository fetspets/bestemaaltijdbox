// Gesponsorde plaatsingen met automatische vervaldatum.
//
// De datumbepaling gebeurt uitsluitend server-side (zie src/app/layout.tsx en
// src/app/page.tsx): de aanroeper geeft de servertijd door via `now`, zodat de
// zichtbaarheid nooit afhangt van de browserklok. Tijdelijke plaatsingen
// verdwijnen automatisch na `eindDatum` — mits de betreffende routes met ISR
// (`export const revalidate`) herbouwen, anders blijft de build-time datum staan.

export type Plaatsing = 'banner' | 'homepageBlok';

export interface Sponsoring {
  /** Koppelt aan een slug uit src/lib/aanbieders.ts */
  partnerSlug: string;
  /** ISO-datum (YYYY-MM-DD), inclusief */
  startDatum: string;
  /** ISO-datum (YYYY-MM-DD), t.e.m. deze dag inclusief */
  eindDatum: string;
  kortingsCode: string;
  /** Welke tijdelijke plaatsingen contractueel actief zijn */
  plaatsingen: Record<Plaatsing, boolean>;
  /** Waar het homepageblok staat: onder de top 3 of onderaan de rangschikking (standaard). */
  homepagePositie?: 'onderTop3' | 'onderaan';
  /** Bron-identifier per plaatsing voor klik-tracking (Fase 3) */
  tracking: Record<Plaatsing, string>;
}

export const sponsoringen: Sponsoring[] = [
  {
    partnerSlug: 'factor',
    startDatum: '2026-07-27', // maandag — live-datum
    eindDatum: '2026-10-27', // volle 3 maanden vanaf de live-datum
    kortingsCode: '', // Geen zichtbare code meer: korting geldt automatisch via de affiliate-link, zodat de klik telt.
    plaatsingen: {
      banner: true,
      homepageBlok: true,
    },
    tracking: {
      banner: 'factor-banner',
      homepageBlok: 'factor-home',
    },
  },
  {
    // Insertion order HelloFresh / Hearts & Science, getekend okt 2026 (€350, via Impact).
    partnerSlug: 'hellofresh',
    startDatum: '2026-10-28', // woensdag — sluit aan op de Factor-periode
    eindDatum: '2027-01-27', // t.e.m. 27 januari 2027
    kortingsCode: '', // Korting geldt automatisch via de affiliate-link.
    // Factor-periode: 1 klik/week op het blok onderaan. Hoger zetten = meer zichtbaar op gsm.
    homepagePositie: 'onderTop3',
    plaatsingen: {
      banner: true,
      homepageBlok: true,
    },
    tracking: {
      banner: 'hellofresh-sponsor-banner',
      homepageBlok: 'hellofresh-sponsor-home',
    },
  },
];

/**
 * Blijvende plaatsing op /kortingscodes (contract HelloFresh: "prominente
 * plaatsing van de welkomstkorting", ook na de tijdelijke periode).
 * Buiten een lopende sponsoring wordt vanaf `vanaf` deze partner uitgelicht.
 */
export const permanentUitgelichtKortingscodes = { partnerSlug: 'hellofresh', vanaf: '2026-10-28' };

/** Actief zolang start <= now < eindDatum + 1 dag (eindDatum is inclusief). */
function loopt(s: Sponsoring, now: Date): boolean {
  const start = new Date(`${s.startDatum}T00:00:00`);
  const eindExclusief = new Date(`${s.eindDatum}T00:00:00`);
  eindExclusief.setDate(eindExclusief.getDate() + 1);
  return now >= start && now < eindExclusief;
}

// Lokale preview: forceer de plaatsingen actief zonder de datums te wijzigen.
// Zet SPONSORING_PREVIEW=1 in .env.local (niet gecommit) om de banner + het blok
// lokaal te zien vóór de startdatum. In productie staat dit niet aan, dus daar
// geldt altijd de echte looptijd (startDatum/eindDatum).
// SPONSORING_PREVIEW=1 toont de eerste sponsoring; SPONSORING_PREVIEW=<slug>
// (bv. hellofresh) toont die van een specifieke partner.
const preview = process.env.SPONSORING_PREVIEW;

/** De momenteel lopende sponsoring (of undefined). */
export function getActieveSponsoring(now: Date = new Date()): Sponsoring | undefined {
  if (preview === '1') return sponsoringen[0];
  if (preview) return sponsoringen.find(s => s.partnerSlug === preview);
  return sponsoringen.find(s => loopt(s, now));
}

/** Welke partner staat uitgelicht op /kortingscodes (lopende sponsoring of de blijvende plaatsing)? */
export function getUitgelichtKortingscodes(now: Date = new Date()): string | undefined {
  const actief = getActieveSponsoring(now);
  if (actief) return actief.partnerSlug;
  const p = permanentUitgelichtKortingscodes;
  return now >= new Date(`${p.vanaf}T00:00:00`) ? p.partnerSlug : undefined;
}

/** Is een specifieke plaatsing nu actief? Server-side aanroepen met de servertijd. */
export function isSponsoringActief(plaatsing: Plaatsing, now: Date = new Date()): boolean {
  const s = getActieveSponsoring(now);
  return !!s && s.plaatsingen[plaatsing];
}

/** Sponsoringen die binnen `dagen` verlopen (voor het verval-signaal). */
export function verlooptBinnen(dagen: number, now: Date = new Date()): Sponsoring[] {
  return sponsoringen.filter(s => {
    if (!loopt(s, now)) return false;
    const eind = new Date(`${s.eindDatum}T00:00:00`);
    const grens = new Date(now);
    grens.setDate(grens.getDate() + dagen);
    return eind <= grens;
  });
}

// Verval-signaal: waarschuw tijdens `next build` als een lopende sponsoring
// binnen 14 dagen verloopt. Verschijnt zo in de deploy-logs zonder test-runner.
if (process.env.NEXT_PHASE === 'phase-production-build') {
  for (const s of verlooptBinnen(14)) {
    console.warn(
      `\n⚠️  Sponsoring "${s.partnerSlug}" verloopt op ${s.eindDatum} (binnen 14 dagen). ` +
      `Verleng of verwijder de tijdelijke plaatsingen in src/lib/sponsoring.ts.\n`
    );
  }
}
