'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <>
      {/* ── Persistent header ──────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F4EF]/90 backdrop-blur-sm">
        <div className="max-w-[80rem] mx-auto px-5 md:px-20 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="text-2xl font-bold text-[#716040] hover:text-[#020826] transition-colors"
            style={{ fontFamily: 'Amulya, serif' }}
          >
            Joseph<span className="text-[#F25042]">.</span>Deffayet
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

          {/* Mobile burger — hidden while overlay is open */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-[#020826]"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* ── Full-screen mobile overlay ──────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden fixed inset-0 z-[60] bg-[#F9F4EF] flex flex-col"
          >
            {/* Top row — close button mirrors burger position */}
            <div className="h-20 flex items-center justify-end px-5 shrink-0">
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="flex items-center justify-center w-10 h-10 text-[#020826]"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Nav items — vertically centered in remaining height */}
            <nav className="flex-1 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.3 }}
              >
                <Link
                  href="/projects"
                  onClick={() => setOpen(false)}
                  className="text-2xl font-medium text-[#020826] hover:text-[#8C7851] transition-colors"
                  style={{ fontFamily: 'Synonym, sans-serif' }}
                >
                  Projets
                </Link>
              </motion.div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.3 }}
              >
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="text-2xl font-medium text-[#020826] hover:text-[#8C7851] transition-colors"
                  style={{ fontFamily: 'Synonym, sans-serif' }}
                >
                  À propos
                </Link>
              </motion.div>

              {/* 3× larger gap before CTA (gap-8 = 2rem × 3 = mt-24) */}
              <motion.div
                className="mt-24"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <Button href="mailto:joseph.deffayet.pro@gmail.com" variant="primary" external>
                  Me contacter
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
