import type { ReactNode } from 'react';
import Link from '@/components/TaalLink';

/**
 * Gedeelde opmaak van de kortingscodepagina's (/kortingscode/<aanbieder>).
 * De tekst komt per taal uit de pagina zelf; deze component bepaalt enkel de
 * opmaak, zodat NL en FR er identiek uitzien.
 */
export interface KortingscodeTekst {
  kruimelHome: string;
  kruimelCodes: string;
  kruimelNaam: string;
  badge: string;
  h1: string;
  intro: ReactNode;
  /** Optionele melding onder de intro, bv. over het levergebied. */
  waarschuwing?: string;
  voordeelLabel: string;
  voordeelGroot: string;
  voordeelSub: string;
  voordeelNoot?: string;
  ctaTekst: string;
  stappenKop: string;
  stapLabel: string;
  stappen: string[];
  voorwaardenKop: string;
  voorwaarden: string[];
  overKop: string;
  overAlineas: string[];
  reviewTekst: string;
  allesTekst: string;
}

export interface KortingscodeKleur {
  accent: string;
  achtergrond: string;
  rand: string;
  link: string;
}

export default function KortingscodeDetail({
  slug,
  t,
  kleur,
}: {
  slug: string;
  t: KortingscodeTekst;
  kleur: KortingscodeKleur;
}) {
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px 64px' }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 28 }}>
        <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }}>{t.kruimelHome}</Link>
        {' → '}
        <Link href="/kortingscodes" style={{ color: '#9CA3AF', textDecoration: 'none' }}>{t.kruimelCodes}</Link>
        {' → '}
        <strong style={{ color: '#1C1C1C' }}>{t.kruimelNaam}</strong>
      </div>

      {/* Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
        {t.badge}
      </div>

      {/* H1 */}
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 900, color: '#1C1C1C', lineHeight: 1.15, marginBottom: 12 }}>
        {t.h1}
      </h1>

      <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.7, marginBottom: t.waarschuwing ? 16 : 32 }}>
        {t.intro}
      </p>

      {t.waarschuwing && (
        <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', borderRadius: 10, padding: '10px 14px', fontSize: 14, color: '#92400E', lineHeight: 1.6, marginBottom: 32 }}>
          ⚠️ {t.waarschuwing}
        </div>
      )}

      {/* Deal highlight */}
      <div style={{ background: kleur.achtergrond, border: `2px solid ${kleur.rand}`, borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: kleur.accent, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{t.voordeelLabel}</div>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 900, color: kleur.accent, marginBottom: 8 }}>
          {t.voordeelGroot}
        </div>
        <div style={{ fontSize: 14, color: '#4B5563' }}>{t.voordeelSub}</div>
        {t.voordeelNoot && (
          <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 12 }}>
            {t.voordeelNoot}
          </div>
        )}
      </div>

      {/* CTA */}
      <Link data-plaatsing="kortingscode-cta"
        href={`/ga/${slug}`}
        rel="noopener sponsored nofollow"
        style={{ display: 'block', background: kleur.accent, color: 'white', textAlign: 'center', padding: '16px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginBottom: 32 }}
      >
        {t.ctaTekst}
      </Link>

      {/* Stappenplan */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, color: '#1C1C1C' }}>
          {t.stappenKop}
        </h2>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {t.stappen.map((stap, i) => (
            <li key={i} style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.6 }}>
              <strong style={{ color: '#1C1C1C' }}>{t.stapLabel} {i + 1}:</strong> {stap}
            </li>
          ))}
        </ol>
      </div>

      {/* Deal details */}
      <div style={{ background: 'white', border: '1.5px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 32 }}>
        <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 800, marginBottom: 12, color: '#1C1C1C' }}>{t.voorwaardenKop}</h3>
        <ul style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {t.voorwaarden.map((v, i) => (
            <li key={i} style={{ fontSize: 14, color: '#4B5563' }}>✓ {v}</li>
          ))}
        </ul>
      </div>

      {/* Over de aanbieder */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, color: '#1C1C1C' }}>
          {t.overKop}
        </h2>
        {t.overAlineas.map((a, i) => (
          <p key={i} style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 12 }}>
            {a}
          </p>
        ))}
        <Link href={`/aanbieder/${slug}`} style={{ fontSize: 14, fontWeight: 700, color: kleur.link, textDecoration: 'underline' }}>
          {t.reviewTekst}
        </Link>
      </div>

      <Link href="/kortingscodes" style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none' }}>
        {t.allesTekst}
      </Link>
    </div>
  );
}
