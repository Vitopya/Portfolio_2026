import { ChevronDown } from 'lucide-react';

const stats = [
  { value: '8+',  label: "Années d'expérience" },
  { value: '15+', label: 'Missions réalisées' },
  { value: '700', label: 'Litres de café' },
];

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto">
      {/* Eyebrow */}
      <p className="text-sm text-[#716040] mb-4" style={{ fontFamily: 'Synonym, sans-serif' }}>
        Bonjour, je suis Joseph
      </p>

      {/* Hero title */}
      <h1
        className="text-[72px] md:text-[88px] lg:text-[104px] font-bold leading-[0.95] tracking-[-0.02em] mb-6"
        style={{ fontFamily: 'Amulya, serif' }}
      >
        <span className="text-[#020826] block">Product Designer</span>
        <span className="text-[#8C7851] block">& Strategist</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base text-[#716040] mb-12" style={{ fontFamily: 'Synonym, sans-serif' }}>
        Spécialiste des environnements B2B complexes
      </p>

      {/* Stats + description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Stats */}
        <div className="flex gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-4xl font-bold text-[#020826] leading-none mb-1"
                style={{ fontFamily: 'Amulya, serif' }}
              >
                {stat.value}
              </p>
              <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#716040]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-[#716040] leading-relaxed max-w-sm">
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
