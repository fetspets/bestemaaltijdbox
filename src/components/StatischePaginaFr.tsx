import Link from '@/components/TaalLink';
import type { StatischePagina } from '@/lib/teksten/paginas.fr';
import { laatstBijgewerkt } from '@/lib/site';

/**
 * Rendert de Franse versie van een statische pagina (over ons, privacy,
 * voorwaarden). De Nederlandse pagina's houden hun eigen opmaak; dit is
 * bewust een eenvoudige, leesbare weergave voor tekstpagina's.
 */
export default function StatischePaginaFr({
  pagina,
  broodkruimel,
  h1,
  bijgewerktLabel,
}: {
  pagina: StatischePagina;
  broodkruimel: string;
  h1: string;
  bijgewerktLabel?: string;
}) {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '40px 20px 64px' }}>
      <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>
        <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Accueil</Link>
        {' → '}
        <strong style={{ color: 'var(--ink)' }}>{broodkruimel}</strong>
      </div>

      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px, 5vw, 38px)', fontWeight: 900, lineHeight: 1.2, marginBottom: 12 }}>
        {h1}
      </h1>

      {bijgewerktLabel && (
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 32 }}>
          {bijgewerktLabel} : {laatstBijgewerkt('fr')}
        </p>
      )}

      {pagina.alineas.map(({ kop, tekst }) => (
        <section key={kop ?? tekst[0].slice(0, 30)} style={{ marginBottom: 28 }}>
          {kop && (
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 800, marginBottom: 10 }}>
              {kop}
            </h2>
          )}
          {tekst.map(p => (
            <p key={p.slice(0, 40)} style={{ fontSize: 15, lineHeight: 1.8, color: '#374151', marginBottom: 12 }}>
              {p}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
