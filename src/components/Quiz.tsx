'use client';

import { useState } from 'react';
import Link from 'next/link';

type Scores = { hf: number; fb: number; ms: number; ek: number };

const vragen = [
  {
    vraag: 'Voor hoeveel personen kook je meestal?',
    opties: [
      { label: '1 persoon', scores: { hf: 2, fb: 0, ms: 0, ek: 1 } },
      { label: '2 personen', scores: { hf: 2, fb: 1, ms: 2, ek: 2 } },
      { label: '3–4 personen', scores: { hf: 1, fb: 2, ms: 1, ek: 0 } },
      { label: '5 of meer', scores: { hf: 1, fb: 3, ms: 0, ek: 0 } },
    ],
  },
  {
    vraag: 'Hoe vaak per week wil je een maaltijdbox gebruiken?',
    opties: [
      { label: '2–3 keer per week', scores: { hf: 1, fb: 0, ms: 2, ek: 1 } },
      { label: '3–5 keer per week', scores: { hf: 2, fb: 2, ms: 0, ek: 0 } },
      { label: 'Bijna elke dag', scores: { hf: 0, fb: 2, ms: 0, ek: 2 } },
      { label: 'Af en toe', scores: { hf: 1, fb: 0, ms: 1, ek: 0 } },
    ],
  },
  {
    vraag: 'Wat vind je het belangrijkst?',
    opties: [
      { label: '💰 Zo goedkoop mogelijk', scores: { hf: 3, fb: 0, ms: 0, ek: 0 } },
      { label: '⚡ Snel en makkelijk koken', scores: { hf: 2, fb: 1, ms: 1, ek: 0 } },
      { label: '🥗 Gezond / vegetarisch / vegan', scores: { hf: 0, fb: 0, ms: 0, ek: 3 } },
      { label: '👨‍🍳 Lekker koken, culinaire ervaring', scores: { hf: 0, fb: 1, ms: 3, ek: 0 } },
      { label: '🇧🇪 Lokale Belgische producten', scores: { hf: 0, fb: 3, ms: 0, ek: 0 } },
    ],
  },
  {
    vraag: 'Hoeveel tijd heb je gemiddeld om te koken?',
    opties: [
      { label: 'Minder dan 20 minuten', scores: { hf: 2, fb: 0, ms: 0, ek: 0 } },
      { label: '20–40 minuten', scores: { hf: 1, fb: 2, ms: 1, ek: 0 } },
      { label: '40–60 minuten', scores: { hf: 0, fb: 1, ms: 2, ek: 1 } },
      { label: 'Ik kook graag uitgebreid', scores: { hf: 0, fb: 0, ms: 3, ek: 0 } },
    ],
  },
  {
    vraag: 'Heb je specifieke dieetvoorkeuren?',
    opties: [
      { label: 'Geen specifieke voorkeur', scores: { hf: 1, fb: 2, ms: 1, ek: 0 } },
      { label: 'Vegetarisch', scores: { hf: 0, fb: 0, ms: 0, ek: 3 } },
      { label: 'Vegan', scores: { hf: 0, fb: 0, ms: 0, ek: 3 } },
      { label: 'Gezond & caloriebewust', scores: { hf: 1, fb: 0, ms: 0, ek: 2 } },
    ],
  },
];

const resultaten: Record<string, {
  naam: string;
  slug: string;
  tagline: string;
  bullets: string[];
  runnerUp: { slug: string; naam: string; vergelijkSlug?: string };
}> = {
  hf: {
    naam: 'HelloFresh',
    slug: 'hellofresh',
    tagline: 'Populaire keuze voor gemak, variatie en een goede prijs-kwaliteitverhouding.',
    bullets: [
      'Tot 40 recepten per week — nooit hetzelfde',
      'Geschikt voor 1 t/m 6 personen',
      'Gratis bezorging, flexibel opzegbaar',
    ],
    runnerUp: { slug: 'foodbag', naam: 'Foodbag', vergelijkSlug: 'hellofresh-vs-foodbag' },
  },
  fb: {
    naam: 'Foodbag',
    slug: 'foodbag',
    tagline: 'Belgische kwaliteit met lokale ingrediënten en verse producten.',
    bullets: [
      '100% Belgische keten, lokale leveranciers',
      'Ideaal voor gezinnen van 2 tot 5 personen',
      'Recepten klaar in 20–40 minuten',
    ],
    runnerUp: { slug: 'hellofresh', naam: 'HelloFresh', vergelijkSlug: 'hellofresh-vs-foodbag' },
  },
  ms: {
    naam: 'Marley Spoon',
    slug: 'marley-spoon',
    tagline: 'Voor wie koken een hobby is — uitgebreide recepten voor fijnproevers.',
    bullets: [
      'Culinaire recepten met echte kooktechnieken',
      'Grote variatie, ook seizoensgebonden gerechten',
      'Ideaal voor 2 tot 4 personen',
    ],
    runnerUp: { slug: 'foodbag', naam: 'Foodbag', vergelijkSlug: 'foodbag-vs-marley-spoon' },
  },
  ek: {
    naam: 'Ekomenu',
    slug: 'ekomenu',
    tagline: 'De beste keuze voor wie bewust en vegetarisch of vegan wil eten.',
    bullets: [
      '100% biologische ingrediënten',
      'Ruim aanbod vegetarische en vegan recepten',
      'Ideaal voor gezonde, bewuste eetgewoonten',
    ],
    runnerUp: { slug: 'hellofresh', naam: 'HelloFresh', vergelijkSlug: 'hellofresh-vs-ekomenu' },
  },
};

function getWinnaar(scores: Scores): string {
  const entries = Object.entries(scores) as [string, number][];
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Scores>({ hf: 0, fb: 0, ms: 0, ek: 0 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const totalSteps = vragen.length;
  const progress = done ? 100 : (step / totalSteps) * 100;

  function handleAnswer(delta: Scores) {
    const next: Scores = {
      hf: scores.hf + delta.hf,
      fb: scores.fb + delta.fb,
      ms: scores.ms + delta.ms,
      ek: scores.ek + delta.ek,
    };
    setScores(next);
    if (step + 1 >= totalSteps) {
      setDone(true);
    } else {
      setStep(step + 1);
    }
  }

  function reset() {
    setStep(0);
    setScores({ hf: 0, fb: 0, ms: 0, ek: 0 });
    setDone(false);
    setHoveredIdx(null);
  }

  const winnaar = done ? resultaten[getWinnaar(scores)] : null;

  return (
    <div style={{
      background: 'white',
      borderRadius: 16,
      padding: '24px 28px',
      border: '1.5px solid var(--rule)',
      maxWidth: 600,
    }}>
      {/* Progress bar */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12, color: 'var(--muted)' }}>
          <span>{done ? 'Klaar!' : `Vraag ${step + 1} van ${totalSteps}`}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div style={{ background: 'var(--rule)', borderRadius: 100, height: 6, overflow: 'hidden' }}>
          <div style={{
            background: 'var(--mint)',
            height: '100%',
            width: `${progress}%`,
            borderRadius: 100,
            transition: 'width 0.3s ease',
          }} />
        </div>
      </div>

      {!done ? (
        <>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 700, marginBottom: 18, color: 'var(--ink)', lineHeight: 1.3 }}>
            {vragen[step].vraag}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {vragen[step].opties.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt.scores as Scores)}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  borderRadius: 10,
                  border: '1.5px solid var(--rule)',
                  background: hoveredIdx === i ? 'var(--cream)' : 'white',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'var(--ink)',
                  transition: 'background 0.15s',
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      ) : winnaar ? (
        <>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--mint)', marginBottom: 6 }}>
            Jouw beste match
          </div>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(22px, 5vw, 30px)', fontWeight: 900, color: 'var(--ink)', marginBottom: 6 }}>
            {winnaar.naam}
          </div>
          <p style={{ fontSize: 14, color: '#4B5563', marginBottom: 14, lineHeight: 1.6 }}>
            {winnaar.tagline}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {winnaar.bullets.map((b, i) => (
              <li key={i} style={{ fontSize: 13, color: 'var(--ink)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--mint)', fontWeight: 700, flexShrink: 0 }}>✔</span>
                {b}
              </li>
            ))}
          </ul>
          <Link href={`/ga/${winnaar.slug}`} style={{
            display: 'block',
            background: 'var(--green)',
            color: 'white',
            textAlign: 'center',
            padding: '13px',
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 14,
            textDecoration: 'none',
            marginBottom: 8,
          }}>
            Bekijk {winnaar.naam} →
          </Link>
          <Link href={`/aanbieder/${winnaar.slug}`} style={{
            display: 'block',
            border: '1.5px solid var(--rule)',
            textAlign: 'center',
            padding: '11px',
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 13,
            textDecoration: 'none',
            color: 'var(--ink)',
            marginBottom: 14,
          }}>
            Lees volledige review
          </Link>
          {winnaar.runnerUp.vergelijkSlug && (
            <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 10 }}>
              Twijfel je nog?{' '}
              <Link href={`/vergelijk/${winnaar.runnerUp.vergelijkSlug}`} style={{ color: 'var(--green)', textDecoration: 'underline' }}>
                Vergelijk {winnaar.naam} met {winnaar.runnerUp.naam}
              </Link>
            </p>
          )}
          <button
            onClick={reset}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: 'var(--muted)', padding: 0, textDecoration: 'underline' }}
          >
            Opnieuw doen
          </button>
        </>
      ) : null}
    </div>
  );
}
