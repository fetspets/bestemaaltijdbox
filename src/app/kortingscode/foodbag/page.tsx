'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FoodbagKortingscode() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try { await navigator.clipboard.writeText('FOODBAGx60'); } catch {}
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
        <strong style={{ color: '#1C1C1C' }}>Foodbag kortingscode</strong>
      </div>

      {/* Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F5EE', border: '1px solid #A7DFC0', borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#1B4332', marginBottom: 16 }}>
        ✓ Gecontroleerd geldig t.e.m. 01/01/2027
      </div>

      {/* H1 */}
      <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 900, color: '#1C1C1C', lineHeight: 1.15, marginBottom: 12 }}>
        Foodbag kortingscode 2026 — €60 korting op je eerste 3 bestellingen
      </h1>

      <p style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.7, marginBottom: 32 }}>
        Met de Foodbag kortingscode <strong>FOODBAGx60</strong> krijg je 3x €20 korting op je eerste drie bestellingen. Totale besparing: <strong>€60</strong>. Exclusief voor nieuwe klanten.
      </p>

      {/* Code box */}
      <div style={{ background: '#FEF2F2', border: '2px dashed #FCA5A5', borderRadius: 16, padding: '28px 24px', textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Jouw kortingscode</div>
        <div style={{ fontFamily: 'monospace', fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 900, color: '#DC2626', letterSpacing: '0.05em', marginBottom: 16 }}>
          FOODBAGx60
        </div>
        <button
          onClick={handleCopy}
          style={{
            padding: '12px 32px', borderRadius: 10, cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 14,
            background: copied ? '#F0FDF4' : 'white',
            color: copied ? '#16A34A' : '#DC2626',
            border: copied ? '2px solid #86EFAC' : '2px solid #FCA5A5',
            transition: 'all 0.2s',
          }}
        >
          {copied ? '✓ Gekopieerd!' : '📋 Kopieer code'}
        </button>
      </div>

      {/* CTA */}
      <Link
        href="/ga/foodbag"
        style={{ display: 'block', background: '#1E40AF', color: 'white', textAlign: 'center', padding: '16px', borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none', marginBottom: 32 }}
      >
        Activeer €60 korting bij Foodbag →
      </Link>

      {/* Stappenplan */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 16, color: '#1C1C1C' }}>
          Hoe gebruik je de code?
        </h2>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            'Kopieer de code FOODBAGx60 via de knop hierboven',
            'Klik op "Activeer €60 korting bij Foodbag" en maak een account aan',
            'Voer de code in bij het afronden van je eerste bestelling',
            'De €20 korting wordt automatisch toegepast — ook op de 2e en 3e bestelling',
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
            'Geldig voor nieuwe Foodbag-klanten',
            '3x €20 korting verspreid over de eerste 3 bestellingen',
            'Geldig t.e.m. 01/01/2027',
            'Niet combineerbaar met andere acties',
            'Bezorging gratis in heel België',
          ].map((v, i) => (
            <li key={i} style={{ fontSize: 14, color: '#4B5563' }}>✓ {v}</li>
          ))}
        </ul>
      </div>

      {/* Over Foodbag */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 900, marginBottom: 12, color: '#1C1C1C' }}>
          Waarom Foodbag?
        </h2>
        <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.7, marginBottom: 12 }}>
          Foodbag is een 100% Belgische maaltijdbox met lokale ingrediënten van Belgische boerderijen. Eigendom van Colruyt Group. Met 40 recepten per week, 5 kookstijlen en gratis bezorging in heel België is het een van de meest populaire keuzes voor Belgische gezinnen en koppels.
        </p>
        <Link href="/aanbieder/foodbag" style={{ fontSize: 14, fontWeight: 700, color: '#1B4332', textDecoration: 'underline' }}>
          Lees onze volledige Foodbag review →
        </Link>
      </div>

      <Link href="/kortingscodes" style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none' }}>
        ← Alle kortingscodes bekijken
      </Link>
    </div>
  );
}
