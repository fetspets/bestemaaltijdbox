import { NextResponse } from 'next/server';
import { getAanbieder } from '@/lib/aanbieders';
import { actieveActie } from '@/lib/acties';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const aanbieder = getAanbieder(slug);
  if (!aanbieder) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Optionele campagne: /ga/foodprepper?c=cta. Een onbekende sleutel valt terug
  // op de standaard affiliate-link in plaats van te falen.
  const campagne = new URL(request.url).searchParams.get('c');
  // Lopende actie met eigen trackinglink (bv. HelloFresh november) gaat voor
  // op de gewone link; daarna valt dit vanzelf terug.
  const affiliateUrl =
    (campagne && aanbieder.affiliateCampagnes?.[campagne]) ||
    actieveActie(slug)?.url ||
    aanbieder.affiliateUrl;

  console.log(
    `Affiliate click: ${slug}${campagne ? ` (${campagne})` : ''} - ${new Date().toISOString()}`
  );
  return NextResponse.redirect(affiliateUrl, {
    status: 302,
    headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' },
  });
}
