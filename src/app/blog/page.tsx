import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog – Maaltijdbox tips & gidsen | BesteMaaltijdbox.be',
  description: 'Handige artikels over maaltijdboxen in België: vergelijkingen, tips, kostenbesparing en meer.',
};

export default function BlogOverzicht() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, color: 'var(--ink)', marginBottom: 8 }}>
        Blog
      </h1>
      <p style={{ fontSize: 17, color: '#555', marginBottom: 40, lineHeight: 1.6 }}>
        Tips, vergelijkingen en praktische gidsen over maaltijdboxen in België.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
        {blogPosts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <article style={{
              border: '2px solid var(--rule)',
              borderRadius: 12,
              padding: 24,
              background: 'white',
              transition: 'border-color 0.15s, box-shadow 0.15s',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--green)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--rule)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
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
