import { NextRequest, NextResponse } from 'next/server';

const BLOCKED_BOT_AGENTS = [
  'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
  'yandexbot', 'sogou', 'exabot', 'facebot', 'ia_archiver',
  'ahrefsbot', 'semrushbot', 'mj12bot', 'dotbot', 'rogerbot',
  'screaming frog', 'petalbot', 'serpstatbot', 'sistrix',
  'seekport', 'netcraft', 'uptimerobot', 'pingdom',
];

// In-memory rate limit store: IP → array of timestamps
const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 uur

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = (rateLimitStore.get(ip) ?? []).filter(t => t > windowStart);
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return false;
}

const NO_INDEX = { 'X-Robots-Tag': 'noindex' };

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  if (searchParams.get('campaign') !== 'hellofresh-greenpan') {
    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: NO_INDEX });
  }

  const ua = (request.headers.get('user-agent') ?? '').toLowerCase();
  if (BLOCKED_BOT_AGENTS.some(bot => ua.includes(bot))) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: NO_INDEX });
  }

  const referer = request.headers.get('referer') ?? '';
  if (referer && !referer.includes('bestemaaltijdbox.be')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403, headers: NO_INDEX });
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Te veel verzoeken. Probeer het over een uur opnieuw.' },
      { status: 429, headers: NO_INDEX }
    );
  }

  const code = process.env.HELLOFRESH_GREENPAN_CODE;
  if (!code) {
    return NextResponse.json({ error: 'Tijdelijk niet beschikbaar' }, { status: 503, headers: NO_INDEX });
  }

  return NextResponse.json({ code }, { status: 200, headers: NO_INDEX });
}
