import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Footer() {
  return (
    <footer className="bg-[#EADDCF] border-t border-[#8C7851]">
      <div className="max-w-[80rem] mx-auto px-5 md:px-20">
        {/* Top row — logo | nav + CTA (nav+CTA hidden on mobile) */}
        <div className="py-6 flex flex-row items-center justify-between gap-4">
          {/* Logo — always visible */}
          <Link
            href="/"
            className="text-2xl font-bold text-[#716040] hover:text-[#020826] transition-colors"
            style={{ fontFamily: 'Amulya, serif' }}
          >
            Joseph.Deffayet
          </Link>

          {/* Navigation — desktop only */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/projects"
              className="text-base text-[#716040] hover:text-[#020826] transition-colors"
              style={{ fontFamily: 'Synonym, sans-serif' }}
            >
              Projets
            </Link>
            <Link
              href="/about"
              className="text-base text-[#716040] hover:text-[#020826] transition-colors"
              style={{ fontFamily: 'Synonym, sans-serif' }}
            >
              À propos
            </Link>
          </nav>

          {/* Primary CTA — desktop only */}
          <div className="hidden md:block">
            <Button href="mailto:joseph.deffayet.pro@gmail.com" variant="primary" external>
              Me contacter
            </Button>
          </div>
        </div>

        {/* Bottom row — copyright + email always on same line */}
        <div className="py-4 border-t border-[#8C7851] flex flex-row items-center justify-between gap-4">
          <span
            className="text-xs text-[#716040]"
            style={{ fontFamily: 'Synonym, sans-serif' }}
          >
            © 2025 Joseph Deffayet
          </span>
          <a
            href="mailto:joseph.deffayet.pro@gmail.com"
            className="text-xs text-[#716040] hover:text-[#020826] transition-colors"
            style={{ fontFamily: 'Synonym, sans-serif' }}
          >
            joseph.deffayet.pro@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
