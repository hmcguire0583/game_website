import React from 'react';

export default function BackgroundSection() {
  return (
    <section id="background" aria-labelledby="background-title" style={{ maxWidth: 980, margin: '40px auto', padding: 28, borderRadius: 12, background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.03)' }}>
      <h2 id="background-title" style={{ marginTop: 0, color: '#e9fff0', fontSize: '2rem' }}>Background</h2>
      <p style={{ color: '#cfe9dd', lineHeight: 1.6 }}>
        SurviveX drops players on a mysterious island where resources are scarce and every correct
        answer keeps your camp alive. Puzzles are tied to in-game events: solve timed math
        challenges to avoid storms, gather points to craft upgrades, and unlock new areas by
        completing objectives. The game&apos;s design emphasises fast mental arithmetic and pattern
        recognition while rewarding consistent practice.
      </p>

      <p style={{ color: '#bcd9cf', marginTop: 12 }}>
        This project started as a classroom experiment and grew into a bite-sized survival game that
        blends practice and play. If you&apos;d like to learn more about the learning research behind
        the mechanics, check the bibliography below.
      </p>
  </section>
  );
}
