import React from 'react';

const refs = [
  { id: 1, title: 'Smith, J. (2024). Teaching with Games.', href: 'https://example.com' },
  { id: 2, title: 'Lee, M. (2023). Timed practice improves recall.', href: 'https://example.com' },
  { id: 3, title: 'Open-source math libraries and references.', href: 'https://example.com' },
];

export default function BibliographySection() {
  return (
    <section id="bibliography" aria-labelledby="bib-title" style={{ maxWidth: 980, margin: '24px auto 80px', padding: 18, borderRadius: 10, background: 'rgba(255,255,255,0.01)' }}>
      <h2 id="bib-title" style={{ color: '#e9fff0', fontSize: '2rem' }}>Bibliography</h2>
      <ol style={{ color: '#bcd9cf', marginTop: 12 }}>
        {refs.map((r) => (
          <li key={r.id} style={{ marginBottom: 8 }}>
            <a href={r.href} style={{ color: '#7bf7a4' }} target="_blank" rel="noreferrer noopener">{r.title}</a>
          </li>
        ))}
      </ol>
    </section>
  );
}
