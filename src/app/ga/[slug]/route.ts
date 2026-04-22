import { NextResponse } from 'next/server';
import { getAanbieder } from '@/lib/aanbieders';

const affiliateLinks: Record<string, string> = {
  'hellofresh': 'https://hellofresheuro.sjv.io/c/3156055/1235519/9318',
  'foodbag': 'https://www.foodbag.be/foodbox/?tt=19934_1015100_507243_&r=',
  'marley-spoon': 'https://go.adt246.net/t/t?a=1709214807&as=2059394978&t=2&tk=1',
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const aanbieder = getAanbieder(slug);
  if (!aanbieder) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  const affiliateUrl = affiliateLinks[slug] || aanbieder.affiliateUrl;
  console.log(`Affiliate click: ${slug} - ${new Date().toISOString()}`);
  return NextResponse.redirect(affiliateUrl, {
    status: 302,
    headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' },
  });
}