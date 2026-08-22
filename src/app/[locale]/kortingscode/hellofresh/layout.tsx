import type { Metadata } from 'next';
import { LAATST_BIJGEWERKT } from '@/lib/site';
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
    titel: `HelloFresh kortingscode ${LAATST_BIJGEWERKT} — tot €60 korting op je eerste 3 boxen`,
    beschrijving: 'Activeer de HelloFresh welkomstdeal: tot €60 korting verdeeld over je eerste 3 boxen. Automatisch via onze link — geen code nodig. Voor nieuwe klanten in België.',
    type: 'article',
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
