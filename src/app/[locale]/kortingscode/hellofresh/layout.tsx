import type { Metadata } from 'next';
import { LAATST_BIJGEWERKT, laatstBijgewerkt } from '@/lib/site';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    route: '/kortingscode/[slug]',
    params: { slug: 'hellofresh' },
    pad: '/kortingscode/hellofresh',
    titel: locale === 'fr'
      ? `Code promo HelloFresh ${laatstBijgewerkt('fr')} — jusqu’à 70 € de réduction sur vos 3 premières box`
      : `HelloFresh kortingscode ${LAATST_BIJGEWERKT} — tot €70 korting op je eerste 3 boxen`,
    beschrijving: locale === 'fr'
      ? 'Comment obtenir jusqu’à 70 € de réduction chez HelloFresh ce mois-ci ? La répartition par box, les conditions à connaître et l’action en cours. Livraison partout en Belgique, Wallonie comprise.'
      : 'Hoe krijg je deze maand tot €70 korting bij HelloFresh? De verdeling per box, de voorwaarden die je moet kennen en de actie die nu loopt. Voor nieuwe klanten in België.',
    type: 'article',
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
