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
  // Taal van de bezoeker: de pagina waarop hij klikte (referer), anders de
  // taalcookie van next-intl. Franstaligen gaan naar de Franse actiepagina.
  const actie = actieveActie(slug);
  const affiliateUrl =
    (campagne && aanbieder.affiliateCampagnes?.[campagne]) ||
    (actie && (isFrans(request) && actie.urlFr ? actie.urlFr : actie.url)) ||
    aanbieder.affiliateUrl;

  console.log(
    `Affiliate click: ${slug}${campagne ? ` (${campagne})` : ''} - ${new Date().toISOString()}`
  );
  return NextResponse.redirect(affiliateUrl, {
    status: 302,
    headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' },
  });
}

function isFrans(request: Request): boolean {
  const referer = request.headers.get('referer');
  if (referer) {
    try {
      const pad = new URL(referer).pathname;
      return pad === '/fr' || pad.startsWith('/fr/');
    } catch {
      // ongeldige referer: val terug op de cookie
    }
  }
  return /(?:^|;\s*)NEXT_LOCALE=fr(?:;|$)/.test(request.headers.get('cookie') ?? '');
}
