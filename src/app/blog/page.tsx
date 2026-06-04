import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Maaltijdbox blog 2026 — gidsen, vergelijkingen en bespaartips',
  description: 'Onafhankelijke artikels over maaltijdboxen in België: vergelijkingen, kostenanalyses en praktische gidsen. Lees voor je je eerste box bestelt.',
  alternates: { canonical: 'https://bestemaaltijdbox.be/blog' },
  openGraph: {
    title: 'Maaltijdbox blog 2026 — gidsen, vergelijkingen en bespaartips',
    description: 'Onafhankelijke artikels over maaltijdboxen in België: vergelijkingen, kostenanalyses en praktische gidsen. Lees voor je je eerste box bestelt.',
    url: 'https://bestemaaltijdbox.be/blog',
    type: 'website',
    locale: 'nl_BE',
  },
};

export default function BlogOverzicht() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
      <style>{`
        .blog-card { transition: border-color 0.15s, box-shadow 0.15s; }
        .blog-card:hover { border-color: var(--green) !important; box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
      `}</style>

      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, color: 'var(--ink)', marginBottom: 8 }}>
        Blog
      </h1>
      <p style={{ fontSize: 17, color: '#555', marginBottom: 40, lineHeight: 1.6 }}>
        Tips, vergelijkingen en praktische gidsen over maaltijdboxen in België.
      </p>

      {/* Uitgelichte artikels */}
      <Link href="/blog/maaltijdbox-zonder-abonnement-belgie" style={{ textDecoration: 'none', display: 'block', marginBottom: 16 }}>
        <article className="blog-card" style={{
          border: '2px solid var(--green)',
          borderRadius: 12,
          padding: 24,
          background: '#F0FDF4',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            juni 2026
          </div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 800, color: 'var(--ink)', lineHeight: 1.3, margin: 0 }}>
            Maaltijdbox zonder abonnement in België 2026 — welke opties zijn er?
          </h2>
          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.6, margin: 0 }}>
            Foodbag, Foodprepper en Foodmaker leveren zonder vast contract. Vergelijk prijs, bezorging en welkomstkorting — en ontdek welke optie het best bij jou past.
          </p>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)' }}>
            Lees artikel →
          </span>
        </article>
      </Link>

      <Link href="/blog/maaltijdbox-maaltijdcheques-belgie" style={{ textDecoration: 'none', display: 'block', marginBottom: 32 }}>
        <article className="blog-card" style={{
          border: '2px solid var(--green)',
          borderRadius: 12,
          padding: 24,
          background: '#F0FDF4',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            juni 2026
          </div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 800, color: 'var(--ink)', lineHeight: 1.3, margin: 0 }}>
            Maaltijdbox betalen met maaltijdcheques in België — wie accepteert ze?
          </h2>
          <p style={{ fontSize: 14, color: '#555', lineHeight: 1.6, margin: 0 }}>
            Foodbag, HelloFresh en Foodprepper accepteren Monizze, Pluxee en Edenred. De andere aanbieders doen dit (nog) niet. Direct antwoord + vergelijkingstabel.
          </p>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)' }}>
            Lees artikel →
          </span>
        </article>
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
        {blogPosts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <article className="blog-card" style={{
              border: '2px solid var(--rule)',
              borderRadius: 12,
              padding: 24,
              background: 'white',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {post.gepubliceerd}
              </div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 800, color: 'var(--ink)', lineHeight: 1.3, margin: 0 }}>
                {post.titel}
              </h2>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
                {post.excerpt}
              </p>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)' }}>
                Lees artikel →
              </span>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
