'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F4EF]/90 backdrop-blur-sm">
      <div className="max-w-[80rem] mx-auto px-5 md:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#716040] hover:text-[#020826] transition-colors"
          style={{ fontFamily: 'Amulya, serif' }}
        >
          Joseph.Deffayet
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/projects"
            className="text-base text-[#020826] hover:text-[#8C7851] transition-colors"
            style={{ fontFamily: 'Synonym, sans-serif' }}
          >
            Projets
          </Link>
          <Link
            href="/about"
            className="text-base text-[#020826] hover:text-[#8C7851] transition-colors"
            style={{ fontFamily: 'Synonym, sans-serif' }}
          >
            À propos
          </Link>
          <Button href="mailto:joseph.deffayet.pro@gmail.com" variant="primary" external>
            Me contacter
          </Button>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-[#020826]"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F9F4EF] border-t border-[#EADDCF] px-5 py-6 flex flex-col gap-6 items-end">
          <Link
            href="/projects"
            className="text-base text-[#020826] hover:text-[#8C7851] transition-colors"
            style={{ fontFamily: 'Synonym, sans-serif' }}
            onClick={() => setOpen(false)}
          >
            Projets
          </Link>
          <Link
            href="/about"
            className="text-base text-[#020826] hover:text-[#8C7851] transition-colors"
            style={{ fontFamily: 'Synonym, sans-serif' }}
            onClick={() => setOpen(false)}
          >
            À propos
          </Link>
          <div>
            <Button href="mailto:joseph.deffayet.pro@gmail.com" variant="primary" external>
              Me contacter
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
