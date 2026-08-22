import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import FactorVergelijkingPagina from '@/components/FactorVergelijkingPagina';
import { getFactorVergelijking } from '@/lib/factorVergelijkingen';

const data = getFactorVergelijking('factor-vs-foodbag')!;

export const metadata: Metadata = buildMetadata({
  pad: '/vergelijk/factor-vs-foodbag',
  titel: data.seoTitle,
  beschrijving: data.seoDescription,
  type: 'article',
});

export default function Page() {
  return <FactorVergelijkingPagina data={data} />;
}
