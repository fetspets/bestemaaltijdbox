import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { laatstBijgewerkt } from '@/lib/site';

/**
 * Deelafbeelding (1200×630) voor elke pagina: /og?t=<titel>&l=<nl|fr>.
 *
 * buildMetadata zet deze URL automatisch als og:image wanneer een pagina geen
 * eigen afbeelding meegeeft. Zo heeft elke gedeelde link een beeld met de
 * eigen titel, in plaats van het vierkante logo of niets.
 *
 * Staat buiten [locale] en buiten de middleware-matcher, zodat er geen
 * taalprefix voor komt.
 */

const FONT_DIR = join(process.cwd(), 'src/app/og/fonts');

const TEKST = {
  nl: { onder: 'Onafhankelijk vergeleken', bijgewerkt: 'bijgewerkt' },
  fr: { onder: 'Comparatif indépendant', bijgewerkt: 'mis à jour' },
} as const;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const taal = searchParams.get('l') === 'fr' ? 'fr' : 'nl';
  const titel = (searchParams.get('t') ?? 'Beste maaltijdbox België').slice(0, 140);
  const t = TEKST[taal];

  const [fraunces, dmSans500, dmSans600] = await Promise.all([
    readFile(join(FONT_DIR, 'fraunces-latin-900-normal.woff')),
    readFile(join(FONT_DIR, 'dm-sans-latin-500-normal.woff')),
    readFile(join(FONT_DIR, 'dm-sans-latin-600-normal.woff')),
  ]);

  // Lange titels krijgen een kleiner korps, zodat ze binnen drie regels blijven.
  const korps = titel.length > 90 ? 52 : titel.length > 60 ? 60 : 70;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#FAF7F2',
          fontFamily: 'DM Sans',
        }}
      >
        <div style={{ width: 18, height: '100%', background: '#1B4332', display: 'flex' }} />
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 72px 56px 64px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: '#1B4332',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: 26, height: 26, borderRadius: 13, background: '#95D5B2', display: 'flex' }} />
            </div>
            <div style={{ fontSize: 30, fontWeight: 600, color: '#1B4332', display: 'flex' }}>
              BesteMaaltijdbox.be
            </div>
          </div>

          <div
            style={{
              fontFamily: 'Fraunces',
              fontSize: korps,
              lineHeight: 1.12,
              color: '#1C1C1C',
              display: 'flex',
              maxWidth: 1000,
            }}
          >
            {titel}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, fontWeight: 500, color: '#4B5563' }}>
            <div style={{ width: 12, height: 12, borderRadius: 6, background: '#52B788', display: 'flex' }} />
            <div style={{ display: 'flex' }}>
              {`${t.onder} · ${t.bijgewerkt} ${laatstBijgewerkt(taal)}`}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Fraunces', data: fraunces, weight: 900, style: 'normal' },
        { name: 'DM Sans', data: dmSans500, weight: 500, style: 'normal' },
        { name: 'DM Sans', data: dmSans600, weight: 600, style: 'normal' },
      ],
      headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=604800, immutable' },
    },
  );
}
