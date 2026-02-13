'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F4EF]/90 backdrop-blur-sm border-b border-[#EADDCF]">
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold text-[#020826] tracking-tight hover:text-[#8C7851] transition-colors"
          style={{ fontFamily: 'Synonym, sans-serif' }}
        >
          Joseph.Deffayet
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/projects"
            className="text-sm text-[#020826] hover:text-[#8C7851] transition-colors"
          >
            Projets
          </Link>
          <Link
            href="/about"
            className="text-sm text-[#020826] hover:text-[#8C7851] transition-colors"
          >
            À propos
          </Link>
          <Button href="mailto:joseph.deffayet.pro@gmail.com" variant="primary" external>
            Me contacter
          </Button>
        </nav>
      </div>
    </header>
  );
}
