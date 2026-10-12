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
    params: { slug: 'crowd-cooks' },
    pad: '/kortingscode/crowd-cooks',
    titel: locale === 'fr'
      ? `Code promo Crowd Cooks ${laatstBijgewerkt('fr')} — jusqu’à 60 € de réduction de bienvenue`
      : `Crowd Cooks kortingscode ${LAATST_BIJGEWERKT} — tot €60 welkomstkorting`,
    beschrijving: locale === 'fr'
      ? 'L’offre de bienvenue Crowd Cooks pour les nouveaux clients en Belgique : jusqu’à 60 € de réduction sur vos premières box de plats de chef, frais et livrés à domicile.'
      : 'Het actuele Crowd Cooks welkomstvoordeel voor nieuwe klanten in België: tot €60 korting op je eerste boxen met kant-en-klare chef-maaltijden, vers bereid en thuisbezorgd.',
    type: 'article',
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
