/**
 * Gedeeld blokvocabulaire voor redactionele pagina's.
 *
 * De /voor/-pagina's, de gidsen en de uitgewerkte blogposts hebben dezelfde
 * bouwstenen nodig: een vergelijkingstabel, een uitgelichte winnaar, een lijst
 * aanbevolen aanbieders, scenario's. Die stonden eerder drie keer los in JSX.
 *
 * Cijfers horen hier NIET thuis: prijs, score, recepten, bezorgkost en korting
 * komen uit aanbieders.ts en worden bij het renderen berekend. Wat hier staat
 * is redactioneel — tekst, volgorde, accenten — en dus ook precies wat er bij
 * een tweede taal vertaald moet worden.
 */

/** Aanbieder die uitgebreid wordt voorgesteld; cijfers komen uit aanbieders.ts. */
export interface BlokTopItem {
  slug: string;
  badge: string;
  badgeAchtergrond: string;
  badgeTekst: string;
  /** Overschrijft de tagline uit aanbieders.ts voor deze context. */
  tagline: string;
  waarom: string;
  deal: string;
  /** Optionele waarschuwing naast de badge, bv. '⚠️ Niet 100% vegan'. */
  waarschuwing?: string;
}

/** Kolom in een vergelijkingstabel. Afgeleide kolommen lezen uit aanbieders.ts. */
export type BlokTabelKolom =
  | { kop: string; soort: 'portie' | 'weekprijs' | 'recepten' | 'korting' | 'score' | 'opzeg' | 'bezorging' }
  | { kop: string; soort: 'tekst'; waarden: Record<string, string> };

export type ContentBlok =
  | { type: 'notitie'; kop: string; achtergrond: string; rand: string; regels: Array<{ label: string; tekst: string }> }
  | { type: 'infokaarten'; kop: string; items: Array<{ icon: string; titel: string; tekst: string }> }
  | {
      type: 'winnaar';
      kop: string;
      slug: string;
      prijsRegel: string;
      dealRegel: string;
      knoptekst: string;
      punten?: string[];
      /** Verwijzing naar een tweede keuze, bv. de goedkoopste optie. */
      alternatief?: { inleiding: string; slug: string; label: string };
    }
  | { type: 'topAanbieders'; kop: string; items: BlokTopItem[] }
  | { type: 'overigeAanbieders'; kop: string; items: Array<{ slug: string; omschrijving: string }> }
  | {
      type: 'tabel';
      kop: string;
      slugs: string[];
      kolommen: BlokTabelKolom[];
      portiesPerWeek: number;
      voetnoot: string;
      /** Kleurt rijen groen of rood, voor ja/nee-vergelijkingen. */
      rijMarkering?: Record<string, 'positief' | 'negatief'>;
    }
  | { type: 'scenarios'; kop: string; items: Array<{ scenario: string; aanbeveling: string; slug: string; uitleg: string; achtergrond: string; rand: string }> }
  | { type: 'slotCta'; kop: string; tekst: string; slug: string; knoptekst: string; subtekst: string };
