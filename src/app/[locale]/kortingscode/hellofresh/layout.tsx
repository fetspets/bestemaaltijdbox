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
      ? `Code promo HelloFresh ${laatstBijgewerkt('fr')} : quelle réduction obtenez-vous vraiment ?`
      : `HelloFresh kortingscode ${LAATST_BIJGEWERKT}: hoeveel korting krijg je écht?`,
    beschrijving: locale === 'fr'
      ? 'Ailleurs, on voit 75 €, 90 € voire 110 €. Nous avons vérifié sur hellofresh.be la réduction réellement disponible en Belgique, comment l’activer et pourquoi un code ne fonctionne parfois pas.'
      : 'Elders zie je €75, €90 of zelfs €110. Wij checkten op hellofresh.be welke korting je in België echt krijgt, hoe je ze activeert en waarom een code soms niet werkt.',
    type: 'article',
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
