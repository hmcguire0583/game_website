import React from 'react';
import Image from 'next/image';

type Member = {
  name: string;
  role: string;
  blurb: string;
  color?: string;
  github?: string;
  linkedin?: string;
  photo?: string; // filename placed in /public/images/
};

const members: Member[] = [
  {
    name: 'Harry McGuire',
    role: 'Lead Designer',
    blurb: 'Designs puzzles and game flow.',
    color: '#0e766e',
    github: 'https://github.com/hmcguire0583',
    linkedin: 'https://www.linkedin.com/in/harry-mcguire-0595bb301/',
    photo: 'harry-mcguire.jpg'
  },
  {
    name: 'João Ziedins',
    role: 'Lead Dev',
    blurb: 'Implements gameplay systems and back-end.',
    color: '#1f6fa1',
    github: 'https://github.com/samir-patel',
    linkedin: 'https://www.linkedin.com/in/samir-patel'
  },
  {
    name: 'Max Leavitt',
    role: 'Education Lead',
    blurb: 'Aligns puzzles with curriculum goals.',
    color: '#7a4ea6',
    github: 'https://github.com/lily-zhang',
    linkedin: 'https://www.linkedin.com/in/lily-zhang'
  },
  {
    name: 'Aryan Bhagat',
    role: 'Art & Audio',
    blurb: 'Creates assets and sound for immersive play.',
    color: '#b9624a',
    github: 'https://github.com/diego-morales',
    linkedin: 'https://www.linkedin.com/in/diego-morales'
  },
  {
    name: 'Angel Chikumbirike',
    role: 'Product & Testing',
    blurb: 'Leads testing and product direction.',
    color: '#2b8f6b',
    github: 'https://github.com/nora-kim',
    linkedin: 'https://www.linkedin.com/in/nora-kim'
  }
];

export default function TeamSection() {
  return (
    <section id="team" aria-labelledby="team-title" className="team-section">
      <h2 id="team-title" className="text-3xl font-extrabold text-[#e9fff0] mb-4">Meet the Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((m) => (
          <article
            key={m.name}
            className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg min-h-[300px] flex flex-col justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200" aria-hidden>
                {m.photo ? (
                  (typeof m.photo === 'string' && m.photo.startsWith('http')) ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.photo} alt={`${m.name} photo`} className="object-cover w-24 h-24 block" />
                  ) : (
                    <Image src={`/images/${m.photo}`} alt={`${m.name} photo`} width={96} height={96} className="object-cover" priority={false} />
                  )
                ) : (
                  <div className="w-24 h-24" style={{ background: m.color }} />
                )}
              </div>

              <div>
                <div className="text-[#e9fff0] font-bold text-lg">{m.name}</div>
                <div className="text-[#9fb7b0] text-sm">{m.role}</div>
              </div>
            </div>

            <p className="mt-3 text-[#bcd9cf] text-sm">{m.blurb}</p>

            <div className="flex gap-3 mt-4">
              {m.github && (
                <a href={m.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub profile for ${m.name}`} className="text-[#c7dbd4] hover:text-[#e9fff0] text-2xl">
                  <i className="fab fa-github" aria-hidden="true" />
                  <span className="sr-only">GitHub profile for {m.name}</span>
                </a>
              )}
              {m.linkedin && (
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn profile for ${m.name}`} className="text-[#c7dbd4] hover:text-[#e9fff0] text-2xl">
                  <i className="fab fa-linkedin" aria-hidden="true" />
                  <span className="sr-only">LinkedIn profile for {m.name}</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
