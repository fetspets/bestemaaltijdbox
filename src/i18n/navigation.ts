import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/**
 * Taalbewuste vervangers voor next/link en de navigatie-helpers.
 *
 * Gebruik deze `Link` in plaats van `next/link` op pagina's die in beide
 * talen bestaan: hij zet automatisch de juiste prefix en het vertaalde pad,
 * zodat een Franse bezoeker niet per ongeluk op een Nederlandse URL belandt.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
