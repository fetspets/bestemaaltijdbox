/**
 * Centrale site-brede constanten.
 *
 * LAATST_BIJGEWERKT is de enige bron voor de "bijgewerkt"-datum die op meerdere
 * pagina's (homepage, kortingscodes, reviews, gidsen, blogs) getoond wordt.
 * Werk deze waarde bij wanneer de data daadwerkelijk is nagekeken, dan volgt de
 * hele site automatisch.
 */
export const LAATST_BIJGEWERKT = 'augustus 2026';

/**
 * Dezelfde datum per taal. Eén plek bijwerken volstaat; laat de talen niet
 * uit elkaar lopen, anders lijkt de Franse versie ouder dan de Nederlandse.
 */
export const LAATST_BIJGEWERKT_PER_TAAL: Record<string, string> = {
  nl: 'augustus 2026',
  fr: 'août 2026',
};

export function laatstBijgewerkt(locale: string): string {
  return LAATST_BIJGEWERKT_PER_TAAL[locale] ?? LAATST_BIJGEWERKT;
}
