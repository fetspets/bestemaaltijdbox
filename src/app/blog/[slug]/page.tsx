import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPost, generateBlogStaticParams } from '@/lib/blog';
import { aanbieders } from '@/lib/aanbieders';

export function generateStaticParams() {
  return generateBlogStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedAanbieders = aanbieders.filter(a => post.relatedSlugs.includes(a.slug));

  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '40px 20px' }}>

      {/* Breadcrumb */}
      <nav style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
        <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</Link>
        {' / '}
        <Link href="/blog" style={{ color: '#888', textDecoration: 'none' }}>Blog</Link>
        {' / '}
        <span style={{ color: 'var(--ink)' }}>{post.titel}</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
          {post.gepubliceerd}
        </div>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 5vw, 38px)', fontWeight: 900, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 16 }}>
          {post.titel}
        </h1>
        <p style={{ fontSize: 18, color: '#555', lineHeight: 1.65, borderLeft: '3px solid var(--green)', paddingLeft: 16 }}>
          {post.excerpt}
        </p>
      </div>

      {/* Conversieblok — alleen op opzeg-pagina */}
      {slug === 'hoe-maaltijdbox-opzeggen-belgie' && (
        <div style={{ background: '#F0FDF4', border: '1.5px solid #A7DFC0', borderRadius: 16, padding: '24px 20px', marginBottom: 40 }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: 900, color: '#1C1C1C', marginBottom: 12 }}>
            Overweeg je te stoppen? Misschien is overstappen slimmer.
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: '#374151', marginBottom: 20, maxWidth: 600 }}>
            Als je maaltijdbox niet meer past — té duur, te weinig variatie, verkeerde porties — is het soms slimmer om te wisselen dan volledig te stoppen. Nieuwe klanten krijgen bij alle grote aanbieders een flinke welkomstdeal. Hieronder de beste alternatieven van dit moment.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              {
                naam: 'Foodbag',
                logo: '🥦',
                deal: '€60 korting op je eerste 3 bestellingen',
                detail: 'Code FOODBAGx60 · 3x €20 · geldig t.e.m. 01/01/2027',
                cta: 'Activeer €60 korting',
                href: '/ga/foodbag',
                kleur: '#1E40AF',
                bg: '#EFF6FF',
              },
              {
                naam: 'HelloFresh',
                logo: '🌿',
                deal: '€50 korting op je eerste 4 boxen',
                detail: 'Code HELLO85FL · €25+€10+€10+€5 · nieuwe klanten',
                cta: 'Activeer HelloFresh deal',
                href: '/ga/hellofresh',
                kleur: '#1B4332',
                bg: '#F0FDF4',
              },
              {
                naam: 'Marley Spoon',
                logo: '🌍',
                deal: 'Tot 35% korting op je eerste 5 boxen',
                detail: 'Geen code nodig · korting automatisch via onze link',
                cta: 'Activeer Marley Spoon deal',
                href: '/ga/marley-spoon',
                kleur: '#7C3AED',
                bg: '#F5F3FF',
              },
            ].map(a => (
              <div key={a.naam} style={{ background: 'white', borderRadius: 12, border: '1.5px solid #E5E7EB', padding: '16px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: a.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{a.logo}</div>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{a.naam}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: a.kleur, marginBottom: 2 }}>{a.deal}</div>
                  <div style={{ fontSize: 12, color: '#6B7280' }}>{a.detail}</div>
                </div>
                <Link href={a.href} style={{ display: 'inline-block', background: a.kleur, color: 'white', padding: '10px 18px', borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: 'none', flexShrink: 0, whiteSpace: 'nowrap' }}>
                  {a.cta} →
                </Link>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 16, marginBottom: 0 }}>
            Instructies om op te zeggen vind je hieronder. Wil je liever pauzeren dan opzeggen? Dat kan bij de meeste aanbieders wekelijks via je account.
          </p>
        </div>
      )}

      {/* Content */}
      <article style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink)' }}>
        {post.content.map((block, i) => {
          if (block.type === 'h2') {
            return (
              <h2 key={i} style={{ fontFamily: 'Fraunces, serif', fontSize: 24, fontWeight: 800, marginTop: 40, marginBottom: 12, color: 'var(--ink)' }}>
                {block.text}
              </h2>
            );
          }
          if (block.type === 'p') {
            return (
              <p key={i} style={{ marginBottom: 16 }}>
                {block.text}
              </p>
            );
          }
          if (block.type === 'ul') {
            return (
              <ul key={i} style={{ paddingLeft: 20, marginBottom: 16 }}>
                {block.items.map((item, j) => (
                  <li key={j} style={{ marginBottom: 8 }}>{item}</li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </article>

      {/* Related providers */}
      {relatedAanbieders.length > 0 && (
        <section style={{ marginTop: 48, paddingTop: 32, borderTop: '2px solid var(--rule)' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, fontWeight: 800, marginBottom: 20, color: 'var(--ink)' }}>
            Bekijk ook
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {relatedAanbieders.map(a => (
              <Link key={a.slug} href={`/aanbieder/${a.slug}`} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                border: '2px solid var(--rule)',
                borderRadius: 10,
                textDecoration: 'none',
                color: 'var(--ink)',
                fontSize: 14,
                fontWeight: 600,
              }}>
                <span>{a.naam} review</span>
                <span style={{ color: 'var(--green)' }}>Lees meer →</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back to blog */}
      <div style={{ marginTop: 40 }}>
        <Link href="/blog" style={{ fontSize: 14, fontWeight: 600, color: 'var(--green)', textDecoration: 'none' }}>
          ← Terug naar blog
        </Link>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.titel,
            description: post.metaDescription,
            datePublished: post.gepubliceerd,
            author: { '@type': 'Organization', name: 'BesteMaaltijdbox.be' },
          }),
        }}
      />
    </div>
  );
}
