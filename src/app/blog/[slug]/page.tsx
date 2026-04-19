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
