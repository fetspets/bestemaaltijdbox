import type { Metadata } from 'next';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';
import FactorVergelijkingPagina from '@/components/FactorVergelijkingPagina';
import { getFactorVergelijkingVoor } from '@/lib/factorVergelijkingen';

const SLUG = 'factor-vs-marley-spoon';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const data = getFactorVergelijkingVoor(SLUG, locale)!;
  return buildMetadata({
    locale: locale as Locale,
    route: '/vergelijk/[slug]',
    params: { slug: SLUG },
    pad: '/vergelijk/' + SLUG,
    titel: data.seoTitle,
    beschrijving: data.seoDescription,
    type: 'article',
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <FactorVergelijkingPagina data={getFactorVergelijkingVoor(SLUG, locale)!} taal={locale as Locale} />;
}
