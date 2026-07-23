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
  /** Bron-identifier per plaatsing voor klik-tracking (Fase 3) */
  tracking: Record<Plaatsing, string>;
}

export const sponsoringen: Sponsoring[] = [
  {
    partnerSlug: 'factor',
    startDatum: '2026-07-27', // maandag — live-datum
    eindDatum: '2026-10-27', // volle 3 maanden vanaf de live-datum
    kortingsCode: 'BESTE40',
    plaatsingen: {
      banner: true,
      homepageBlok: true,
    },
    tracking: {
      banner: 'factor-banner',
      homepageBlok: 'factor-home',
    },
  },
];

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
const previewMode = process.env.SPONSORING_PREVIEW === '1';

/** De momenteel lopende sponsoring (of undefined). */
export function getActieveSponsoring(now: Date = new Date()): Sponsoring | undefined {
  return sponsoringen.find(s => previewMode || loopt(s, now));
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
