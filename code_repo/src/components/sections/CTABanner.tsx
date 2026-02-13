import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTABanner() {
  return (
    <section className="bg-[#020826] py-20 px-5 md:px-[16.75rem]">
      <div className="text-center">
        <h2
          className="text-xl md:text-2xl font-medium text-[#F9F4EF] mb-4 leading-snug uppercase"
          style={{ fontFamily: 'Amulya, serif' }}
        >
          Un projet de transformation B2B complexe&nbsp;?
        </h2>

        <p
          className="text-base font-normal text-[#FFFFFE] mb-8 leading-relaxed"
          style={{ fontFamily: 'Synonym, sans-serif' }}
        >
          J&apos;accompagne les organisations qui conçoivent des outils pour utilisateurs experts,
          de la discovery à l&apos;impact livré, dans des environnements régulés et critiques.
        </p>

        <Link
          href="mailto:joseph.deffayet.pro@gmail.com"
          className="inline-flex items-center gap-2 border border-[#F9F4EF] text-[#F9F4EF] text-base font-medium px-6 py-2.5 hover:bg-[#F9F4EF] hover:text-[#020826] transition-colors rounded-[4px] whitespace-nowrap"
          style={{ fontFamily: 'Synonym, sans-serif' }}
        >
          Discutons de votre projet
          <ArrowRight size={14} strokeWidth={2} className="shrink-0" />
        </Link>
      </div>
    </section>
  );
}
