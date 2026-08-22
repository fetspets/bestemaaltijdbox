import { aanbieders, type Aanbieder } from '../aanbieders';
import { aanbiedersFr } from './aanbieders.fr';
import type { Locale } from '@/i18n/routing';

/**
 * Voegt de taalonafhankelijke feiten uit aanbieders.ts samen met de teksten
 * voor de gevraagde taal.
 *
 * Nederlands is de bron: aanbieders.ts bevat zowel de cijfers als de
 * Nederlandse tekst. Voor Frans worden alleen de tekstvelden overschreven,
 * zodat prijs, score, bezorgkosten, status en affiliate-link per definitie
 * gelijk blijven en niet uit elkaar kunnen lopen.
 *
 * Ontbreekt een Franse tekst, dan valt het veld terug op het Nederlands. Dat
 * is zichtbaar fout in plaats van leeg, wat bij het vertalen makkelijker op
 * te sporen is dan een blanco pagina.
 */
export function aanbiedersVoor(locale: Locale): Aanbieder[] {
  if (locale === 'nl') return aanbieders;

  return aanbieders.map(a => {
    const fr = aanbiedersFr[a.slug];
    if (!fr) return a;
    return {
      ...a,
      ...fr,
      // Diepe velden mogen niet half overschreven worden.
      uitgebreideReview: { ...a.uitgebreideReview, ...fr.uitgebreideReview },
      kortingsCode: fr.kortingsCode ?? a.kortingsCode,
      badge: fr.badge ?? a.badge,
    };
  });
}

export function aanbiederVoor(slug: string, locale: Locale): Aanbieder | undefined {
  return aanbiedersVoor(locale).find(a => a.slug === slug);
}

export function actieveAanbiedersVoor(locale: Locale): Aanbieder[] {
  return aanbiedersVoor(locale).filter(a => a.status === 'active');
}

/**
 * De aanbieders die relevant zijn voor de bezoeker van deze taalversie.
 *
 * Voor het Frans staan de drie aanbieders die niet in Wallonië leveren
 * onderaan in plaats van op hun Nederlandse positie. Een Waalse lezer die
 * Marley Spoon op plek 3 ziet staan en dan ontdekt dat er niet geleverd
 * wordt, heeft niets aan die ranglijst.
 */
export function gerangschiktVoor(locale: Locale): Aanbieder[] {
  const actief = actieveAanbiedersVoor(locale);
  if (locale === 'nl') return actief;

  const levert = actief.filter(a => a.levergebied !== 'vlaanderen-brussel');
  const levertNiet = actief.filter(a => a.levergebied === 'vlaanderen-brussel');
  return [...levert, ...levertNiet];
}

/** Hoeveel aanbieders er in heel het land (dus ook in Wallonië) leveren. */
export function aantalMetNationaleDekking(locale: Locale): number {
  return actieveAanbiedersVoor(locale).filter(a => a.levergebied !== 'vlaanderen-brussel').length;
}
