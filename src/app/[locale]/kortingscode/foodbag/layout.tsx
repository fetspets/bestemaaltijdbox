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
    params: { slug: 'foodbag' },
    pad: '/kortingscode/foodbag',
    titel: locale === 'fr'
      ? `Code promo Foodbag ${laatstBijgewerkt('fr')} — 60 € de réduction sur vos 3 premières commandes`
      : `Foodbag kortingscode ${LAATST_BIJGEWERKT} — €60 korting op je eerste 3 bestellingen`,
    beschrijving: locale === 'fr'
      ? 'L’offre de bienvenue Foodbag pour les nouveaux clients en Belgique : 60 € de réduction (3 x 20 €) sur vos 3 premières commandes, livraison gratuite en Wallonie aussi.'
      : 'Het actuele Foodbag welkomstaanbod voor nieuwe klanten in België: €60 korting (3x €20) op je eerste 3 bestellingen. Bekijk de voorwaarden.',
    type: 'article',
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
