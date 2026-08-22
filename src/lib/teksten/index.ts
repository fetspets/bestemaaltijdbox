import { aanbieders, type Aanbieder } from '../aanbieders';
import { aanbiedersFr } from './aanbieders.fr';
import { vergelijkingen, type Vergelijking } from '../vergelijkingen';
import { vergelijkingenFr } from './vergelijkingen.fr';
import { situaties, type Situatie } from '../situaties';
import { situatiesFr } from './situaties.fr';
import { gidsen, type Gids } from '../gidsen';
import { gidsenFr } from './gidsen.fr';
import { blogPosts, type BlogPost } from '../blog';
import { blogFr } from './blog.fr';
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

/**
 * De positie zoals de bezoeker van deze taalversie hem hoort te zien.
 *
 * In het Nederlands is dat het redactionele ranking-veld. In het Frans volgt
 * de positie de rangschikking waarin de aanbieders die niet in Wallonië
 * leveren achteraan staan — anders zou een pagina "Classement #3" tonen en er
 * twee alinea's verder bij zeggen dat er niet geleverd wordt.
 */
export function rangVoor(slug: string, locale: Locale): number | undefined {
  if (locale === 'nl') return aanbieders.find(a => a.slug === slug)?.ranking;
  const i = gerangschiktVoor(locale).findIndex(a => a.slug === slug);
  return i === -1 ? undefined : i + 1;
}

/** Hoeveel aanbieders er in heel het land (dus ook in Wallonië) leveren. */
export function aantalMetNationaleDekking(locale: Locale): number {
  return actieveAanbiedersVoor(locale).filter(a => a.levergebied !== 'vlaanderen-brussel').length;
}

/**
 * Vergelijkingen in de gevraagde taal. Slugs, aanbieders, campagnes en de
 * verdictSlug blijven uit vergelijkingen.ts komen; alleen tekst wordt
 * overschreven.
 */
export function vergelijkingenVoor(locale: Locale): Vergelijking[] {
  if (locale === 'nl') return vergelijkingen;
  return vergelijkingen.map(v => {
    const fr = vergelijkingenFr[v.slug];
    return fr ? { ...v, ...fr } : v;
  });
}

export function vergelijkingVoor(slug: string, locale: Locale): Vergelijking | undefined {
  return vergelijkingenVoor(locale).find(v => v.slug === slug);
}

/** Situatiepagina's in de gevraagde taal. */
export function situatiesVoor(locale: Locale): Record<string, Situatie> {
  if (locale === 'nl') return situaties;
  return Object.fromEntries(
    Object.entries(situaties).map(([sleutel, s]) => {
      const fr = situatiesFr[sleutel];
      return [sleutel, fr ? { ...s, ...fr } : s];
    })
  );
}

export function situatieVoor(sleutel: string, locale: Locale): Situatie | undefined {
  return situatiesVoor(locale)[sleutel];
}

/** Gidsen in de gevraagde taal. */
export function gidsenVoor(locale: Locale): Gids[] {
  if (locale === 'nl') return gidsen;
  return gidsen.map(g => {
    const fr = gidsenFr[g.slug];
    return fr ? { ...g, ...fr } : g;
  });
}

export function gidsVoor(slug: string, locale: Locale): Gids | undefined {
  return gidsenVoor(locale).find(g => g.slug === slug);
}

/** Blogposts in de gevraagde taal. De sponsorvelden blijven uit blog.ts komen. */
export function blogPostsVoor(locale: Locale): BlogPost[] {
  if (locale === 'nl') return blogPosts;
  return blogPosts.map(p => {
    const fr = blogFr[p.slug];
    return fr ? { ...p, ...fr } : p;
  });
}

export function blogPostVoor(slug: string, locale: Locale): BlogPost | undefined {
  return blogPostsVoor(locale).find(p => p.slug === slug);
}
