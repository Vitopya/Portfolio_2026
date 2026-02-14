import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';

export function AboutSection() {
  return (
    <section className="py-20 px-5 md:px-20 max-w-[90rem] mx-auto w-full">
      <FadeIn>
        <SectionLabel>À propos</SectionLabel>
      </FadeIn>

      {/* Responsive grid — image first on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[4.5rem] items-start">
        {/* Image */}
        <FadeIn>
          <div className="relative aspect-square overflow-hidden rounded-[4px] bg-[#EADDCF]">
            <Image
              src="/images/homepage/about/Joseph_illustrated.jpeg"
              alt="Joseph Deffayet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col gap-6">
            <h2
              className="font-medium text-[#716040] leading-tight text-[2rem] md:text-[2.5rem]"
              style={{ fontFamily: 'Amulya, serif' }}
            >
              Qui je suis
            </h2>

            <div className="space-y-4">
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
              className="self-start inline-flex items-center gap-2 bg-[#8C7851] text-[#FFFFFE] text-base font-medium px-6 py-2.5 hover:bg-[#716040] transition-colors rounded-[4px]"
              style={{ fontFamily: 'Synonym, sans-serif' }}
            >
              Découvrir mon parcours
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
