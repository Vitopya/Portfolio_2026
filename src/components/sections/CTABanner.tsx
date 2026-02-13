import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTABanner() {
  return (
    <section className="bg-[#020826] py-24 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#F9F4EF] mb-6 leading-tight"
          style={{ fontFamily: 'Amulya, serif' }}
        >
          Un projet de transformation B2B complexe&nbsp;?
        </h2>

        <p className="text-sm text-[#EADDCF] max-w-xl mx-auto mb-10 leading-relaxed">
          J&apos;accompagne les organisations qui conçoivent des outils pour utilisateurs experts,
          de la discovery à l&apos;impact livré, dans des environnements régulés et critiques.
        </p>

        <Link
          href="mailto:joseph.deffayet.pro@gmail.com"
          className="inline-flex items-center gap-2 bg-[#F9F4EF] text-[#020826] text-sm font-semibold px-6 py-3 hover:bg-[#FFFFFE] transition-colors rounded-sm"
        >
          Discutons de votre projet
          <ArrowRight size={14} strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
