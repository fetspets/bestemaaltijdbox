/**
 * Centrale site-brede constanten.
 *
 * LAATST_BIJGEWERKT is de enige bron voor de "bijgewerkt"-datum die op meerdere
 * pagina's (homepage, kortingscodes, reviews, gidsen, blogs) getoond wordt.
 * Werk deze waarde bij wanneer de data daadwerkelijk is nagekeken, dan volgt de
 * hele site automatisch.
 */
export const LAATST_BIJGEWERKT = 'oktober 2026';

/**
 * Dezelfde datum per taal. Eén plek bijwerken volstaat; laat de talen niet
 * uit elkaar lopen, anders lijkt de Franse versie ouder dan de Nederlandse.
 */
export const LAATST_BIJGEWERKT_PER_TAAL: Record<string, string> = {
  nl: 'oktober 2026',
  fr: 'octobre 2026',
};

/** Dezelfde controledatum in ISO-vorm, voor dateModified in de markup. */
export const LAATST_GECONTROLEERD_ISO = '2026-10-12';

const MAANDEN: Record<string, string> = {
  januari: '01', februari: '02', maart: '03', april: '04', mei: '05', juni: '06',
  juli: '07', augustus: '08', september: '09', oktober: '10', november: '11', december: '12',
};

/** 'mei 2026' → '2026-05-01'. Geeft undefined als het geen herkenbare datum is. */
export function maandNaarISO(tekst: string): string | undefined {
  const m = tekst.trim().toLowerCase().match(/^([a-z]+) (\d{4})$/);
  if (!m || !MAANDEN[m[1]]) return undefined;
  return `${m[2]}-${MAANDEN[m[1]]}-01`;
}

export function laatstBijgewerkt(locale: string): string {
  return LAATST_BIJGEWERKT_PER_TAAL[locale] ?? LAATST_BIJGEWERKT;
}
