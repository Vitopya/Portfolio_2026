import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[#EADDCF] bg-[#F9F4EF]">
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold text-[#020826] tracking-tight hover:text-[#8C7851] transition-colors"
        >
          Joseph.Deffayet
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/projects" className="text-sm text-[#716040] hover:text-[#020826] transition-colors">
            Projets
          </Link>
          <Link href="/about" className="text-sm text-[#716040] hover:text-[#020826] transition-colors">
            À propos
          </Link>
          <Link href="mailto:joseph.deffayet.pro@gmail.com" className="text-sm text-[#716040] hover:text-[#020826] transition-colors">
            Me contacter
          </Link>
        </nav>

        {/* Right */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-[#716040]">
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
