"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Navbar() {
  const pathname = usePathname() || '/';

  const items = [
    { href: '/background', label: 'Background' },
    { href: '/team', label: 'Team' },
    { href: '/bibliography', label: 'Bibliography' },
  ];

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          href="/"
          className="site-home-link"
          aria-label="SurviveX home"
        >
          <span className="site-logo site-logo-heading">SurviveX</span>
        </Link>

        <nav aria-label="Primary navigation" className="site-nav">
          {items.map((it) => {
            const isActive =
              pathname === it.href || (it.href !== '/' && pathname.startsWith(it.href));
            return (
              <Link
                key={it.href}
                href={it.href}
                className={"nav-link" + (isActive ? ' active' : '')}
                aria-current={isActive ? 'page' : undefined}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}