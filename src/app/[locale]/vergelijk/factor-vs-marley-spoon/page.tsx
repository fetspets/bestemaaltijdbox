import type { Metadata } from 'next';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';
import FactorVergelijkingPagina from '@/components/FactorVergelijkingPagina';
import { getFactorVergelijking } from '@/lib/factorVergelijkingen';

const data = getFactorVergelijking('factor-vs-marley-spoon')!;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    route: '/vergelijk/[slug]',
    params: { slug: 'factor-vs-marley-spoon' },
    pad: '/vergelijk/factor-vs-marley-spoon',
    titel: data.seoTitle,
    beschrijving: data.seoDescription,
    type: 'article',
  });
}

export default function Page() {
  return <FactorVergelijkingPagina data={data} />;
}
