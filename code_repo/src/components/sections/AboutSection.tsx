import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function AboutSection() {
  return (
    <section className="py-20 px-20 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#EADDCF]">
          <Image
            src="/images/homepage/about/Joseph_illustrated.jpeg"
            alt="Joseph Deffayet"
            fill
            className="object-cover"
            sizes="560px"
          />
        </div>

        {/* Content */}
        <div>
          <SectionLabel>À propos</SectionLabel>
          <h2
            className="font-medium text-[#020826] mb-6 leading-tight"
            style={{ fontFamily: 'Amulya, serif', fontSize: '40px' }}
          >
            Qui je suis
          </h2>

          <div className="space-y-4 mb-8">
            <p
              className="text-base font-normal text-[#020826] leading-relaxed"
              style={{ fontFamily: 'Synonym, sans-serif' }}
            >
              Product Designer depuis 8 ans, j&apos;ai choisi de me spécialiser là où peu
              s&apos;aventurent : les environnements B2B critiques où l&apos;erreur n&apos;est pas
              une option.
            </p>
            <p
              className="text-base font-normal text-[#716040] leading-relaxed"
              style={{ fontFamily: 'Synonym, sans-serif' }}
            >
              Signalisation ferroviaire, toxicologie, pharmaceutique, infrastructure,
              blockchain, je travaille avec des experts métier qui connaissent leur
              domaine mieux que quiconque et je traduis cette expertise en solutions
              interfacées qu&apos;ils adoptent vraiment.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-[#8C7851] text-[#FFFFFE] text-base font-medium px-6 py-2.5 hover:bg-[#716040] transition-colors rounded-[4px]"
            style={{ fontFamily: 'Synonym, sans-serif' }}
          >
            Découvrir mon parcours
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
