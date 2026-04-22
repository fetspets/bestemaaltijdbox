'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function HelloFreshKortingscode() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try { await navigator.clipboard.writeText('HELLO85FL'); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px 64px' }}>

      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 28 }}>
        <Link href="/" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Home</Link>
        {' → '}
        <Link href="/kortingscodes" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Kortingscodes</Link>
        {' → '}
        <strong style={{ color: '#1C1C1C' }}>HelloFresh kortingscode</strong>
      </div>

      {/* Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
        ✓ Gecontroleerd geldig 2026
      </div>

      {/* H1 */}
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 900, color: '#1C1C1C', lineHeight: 1.15, marginBottom: 12 }}>
        HelloFresh kortingscode 2026 — €50 korting op je eerste 4 boxen
      </h1>

      <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.7, marginBottom: 32 }}>
        Met de HelloFresh kortingscode <strong>HELLO85FL</strong> krijg je €50 korting verspreid over je eerste 4 boxen: €25 op box 1, €10 op box 2, €10 op box 3 en €5 op box 4. Totale besparing: <strong>€50</strong>. Exclusief voor nieuwe klanten.
      </p>

      {/* Code box */}
      <div style={{ background: '#F0FDF4', border: '2px dashed #86EFAC', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Jouw kortingscode</div>
        <div style={{ fontFamily: 'monospace', fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 900, color: '#1B4332', letterSpacing: '0.05em', marginBottom: 16 }}>
          HELLO85FL
        </div>
        <button
          onClick={handleCopy}
          style={{
            padding: '12px 32px', borderRadius: 10, cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 14,
            background: copied ? '#F0FDF4' : 'white',
            color: copied ? '#16A34A' : '#1B4332',
            border: copied ? '2px solid #86EFAC' : '2px solid #A7DFC0',
            transition: 'all 0.2s',
          }}
        >
          {copied ? '✓ Gekopieerd!' : '📋 Kopieer code'}
        </button>
      </div>

      {/* CTA */}
      <Link
        href="/ga/hellofresh"
        style={{ display: 'block', background: '#1B4332', color: 'white', textAlign: 'center', padding: '16px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginBottom: 32 }}
      >
        Activeer €50 korting bij HelloFresh →
      </Link>

      {/* Stappenplan */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, color: '#1C1C1C' }}>
          Hoe gebruik je de code?
        </h2>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Kopieer de code HELLO85FL via de knop hierboven',
            'Klik op "Activeer €50 korting bij HelloFresh" en maak een account aan',
            'Voer de code HELLO85FL in bij het afronden van je eerste bestelling',
            'De korting wordt verdeeld over je eerste 4 boxen: €25, €10, €10 en €5',
          ].map((stap, i) => (
            <li key={i} style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.6 }}>
              <strong style={{ color: '#1C1C1C' }}>Stap {i + 1}:</strong> {stap}
            </li>
          ))}
        </ol>
      </div>

      {/* Deal details */}
      <div style={{ background: 'white', border: '1.5px solid #E5E7EB', borderRadius: 12, padding: 20, marginBottom: 32 }}>
        <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 800, marginBottom: 12, color: '#1C1C1C' }}>Voorwaarden</h3>
        <ul style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            'Geldig voor nieuwe HelloFresh-klanten',
            '€50 korting: €25 op box 1, €10 op box 2, €10 op box 3, €5 op box 4',
            'Code HELLO85FL invullen bij het afrekenen',
            'Direct opzegbaar na elke levering',
            'Gratis bezorging in heel België',
          ].map((v, i) => (
            <li key={i} style={{ fontSize: 14, color: '#4B5563' }}>✓ {v}</li>
          ))}
        </ul>
      </div>

      {/* Over HelloFresh */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, color: '#1C1C1C' }}>
          Waarom HelloFresh?
        </h2>
        <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 12 }}>
          HelloFresh is de grootste maaltijdbox ter wereld en ook in België de populairste keuze. Met meer dan 40 recepten per week, gratis bezorging en een gebruiksvriendelijke app biedt het de beste balans tussen prijs, variatie en gemak. Bereidingstijd gemiddeld 25–35 minuten.
        </p>
        <Link href="/aanbieder/hellofresh" style={{ fontSize: 14, fontWeight: 700, color: '#1B4332', textDecoration: 'underline' }}>
          Lees onze volledige HelloFresh review →
        </Link>
      </div>

      <Link href="/kortingscodes" style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none' }}>
        ← Alle kortingscodes bekijken
      </Link>
    </div>
  );
}
