import type { Metadata } from 'next';
import FactorVergelijkingPagina from '@/components/FactorVergelijkingPagina';
import { getFactorVergelijking } from '@/lib/factorVergelijkingen';

const data = getFactorVergelijking('factor-vs-marley-spoon')!;
const CANONICAL = 'https://bestemaaltijdbox.be/vergelijk/factor-vs-marley-spoon';

export const metadata: Metadata = {
  title: data.seoTitle,
  description: data.seoDescription,
  alternates: { canonical: CANONICAL },
  openGraph: { title: data.seoTitle, description: data.seoDescription, url: CANONICAL, type: 'article', locale: 'nl_BE' },
};

export default function Page() {
  return <FactorVergelijkingPagina data={data} />;
}
