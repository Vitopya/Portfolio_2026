import { ChevronDown } from 'lucide-react';

const stats = [
  { value: '8+',  label: "Années d'expérience" },
  { value: '15+', label: 'Missions réalisées' },
  { value: '700', label: 'Litres de café' },
];

export function HeroSection() {
  return (
    <section className="pt-40 pb-20 px-20 max-w-[1280px] mx-auto">
      {/* Eyebrow */}
      <p
        className="text-base font-normal text-[#716040] mb-2"
        style={{ fontFamily: 'Amulya, serif' }}
      >
        Bonjour, je suis Joseph
      </p>

      {/* Hero title — mixed sizes matching Figma character overrides */}
      <h1
        className="font-bold leading-none mb-6"
        style={{ fontFamily: 'Amulya, serif' }}
      >
        <span
          className="text-[#020826]"
          style={{ fontSize: '120px', lineHeight: '128px', display: 'block' }}
        >
          Product Designer
        </span>
        <span
          className="text-[#716040]"
          style={{ fontSize: '96px', lineHeight: '142px', display: 'block' }}
        >
          &amp; Strategist
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className="text-2xl font-medium text-[#716040] mb-16"
        style={{ fontFamily: 'Synonym, sans-serif' }}
      >
        Spécialiste des environnements B2B complexes
      </p>

      {/* Stats + description */}
      <div className="grid grid-cols-2 gap-10">
        {/* Stats */}
        <div className="flex gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p
                className="font-medium text-[#020826] leading-none mb-1"
                style={{ fontFamily: 'Amulya, serif', fontSize: '40px' }}
              >
                {stat.value}
              </p>
              <p
                className="text-base font-normal text-[#716040]"
                style={{ fontFamily: 'Amulya, serif' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p
          className="text-base text-[#716040] leading-relaxed max-w-sm"
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
