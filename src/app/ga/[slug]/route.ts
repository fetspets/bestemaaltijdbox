import { NextResponse } from 'next/server';
import { getAanbieder } from '@/lib/aanbieders';

const affiliateLinks: Record<string, string> = {
  'hellofresh': 'https://www.hellofresh.be',
  'marley-spoon': 'https://www.awin1.com/cread.php?awinmid=8500&awinaffid=2809534',
  'foodbag': 'https://www.foodbag.be',
  '15gram': 'https://www.15gram.be',
  'ekomenu': 'https://www.ekomenu.be',
  'smartmat': 'https://www.smartmat.be',
  'delhaize-click-cook': 'https://www.delhaize.be',
  'carrefour-simply-you': 'https://www.carrefour.be',
  'cirkle': 'https://www.cirkle.be',
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
