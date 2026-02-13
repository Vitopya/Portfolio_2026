import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#EADDCF]">
      <div className="max-w-[1280px] mx-auto px-20 py-6 flex flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#716040] hover:text-[#020826] transition-colors"
          style={{ fontFamily: 'Amulya, serif' }}
        >
          Joseph.Deffayet
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
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
          <Link
            href="mailto:joseph.deffayet.pro@gmail.com"
            className="text-base text-[#716040] hover:text-[#020826] transition-colors"
            style={{ fontFamily: 'Synonym, sans-serif' }}
          >
            Me contacter
          </Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-6 text-xs text-[#716040]" style={{ fontFamily: 'Synonym, sans-serif' }}>
          <span>© 2025 Joseph Deffayet</span>
          <a
            href="mailto:joseph.deffayet.pro@gmail.com"
            className="hover:text-[#020826] transition-colors"
          >
            joseph.deffayet.pro@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
