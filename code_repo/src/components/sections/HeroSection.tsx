import { ChevronDown } from 'lucide-react';

const stats = [
  { value: '8+',  label: "Années d'expérience" },
  { value: '15+', label: 'Missions réalisées' },
  { value: '700', label: 'Litres de café' },
];

export function HeroSection() {
  return (
    <section className="pt-10 pb-20 px-5 md:px-20 max-w-[80rem] mx-auto">
      {/* Eyebrow */}
      <p
        className="text-base font-normal text-[#716040] mb-2"
        style={{ fontFamily: 'Amulya, serif' }}
      >
        Bonjour, je suis Joseph
      </p>

      {/* Hero title — "Product Designer" large dark, "& Strategist" with small & accent */}
      <h1
        className="font-bold leading-none mb-6"
        style={{ fontFamily: 'Amulya, serif' }}
      >
        <span className="text-[#020826] block text-[3rem] leading-tight md:text-[7.5rem] md:leading-[8rem]">
          Product Designer
        </span>
        <span className="block text-[2.25rem] leading-tight md:text-[6rem] md:leading-[8.875rem]">
          <span className="text-[#716040] text-[1.75rem] md:text-[3.5rem]">&amp;</span>
          <span className="text-[#020826]"> Strategist</span>
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className="text-lg md:text-2xl font-medium text-[#716040] mb-10 md:mb-16"
        style={{ fontFamily: 'Synonym, sans-serif' }}
      >
        Spécialiste des environnements B2B complexes
      </p>

      {/* Stats + description — stacked mobile, side-by-side desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Stats */}
        <div className="flex gap-6 md:gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p
                className="font-medium text-[#020826] leading-none mb-1 text-[2rem] md:text-[2.5rem]"
                style={{ fontFamily: 'Amulya, serif' }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs md:text-sm font-normal text-[#020826] uppercase whitespace-nowrap"
                style={{ fontFamily: 'Amulya, serif' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Description — fills right column, ferré à droite */}
        <p
          className="text-base text-[#020826] leading-relaxed"
          style={{ fontFamily: 'Synonym, sans-serif' }}
        >
          Je conçois des outils que les utilisateurs experts adoptent réellement,
          dans des environnements où la complexité métier, les contraintes
          réglementaires et la dette technique ne laissent aucune place à
          l&apos;approximation.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-16">
        <ChevronDown
          size={20}
          strokeWidth={1.5}
          className="text-[#716040] animate-bounce"
        />
      </div>
    </section>
  );
}
