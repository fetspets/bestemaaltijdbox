'use client';
import NextLink from 'next/link';
import { useLocale } from 'next-intl';
import type { ComponentProps } from 'react';
import { lokaliseerPad } from '@/i18n/paden';

/**
 * Vervanger voor next/link die interne paden in de actieve taal houdt.
 *
 * Import deze in plaats van `next/link` overal waar naar een eigen pagina
 * gelinkt wordt. Voor Nederlands verandert er niets; voor Frans wordt
 * /aanbieder/hellofresh vanzelf /fr/fournisseur/hellofresh.
 *
 * Externe links en /ga/-redirects blijven ongemoeid.
 */
export default function TaalLink({ href, ...rest }: ComponentProps<typeof NextLink>) {
  const locale = useLocale();
  const doel = typeof href === 'string' ? lokaliseerPad(href, locale) : href;
  return <NextLink href={doel} {...rest} />;
}
