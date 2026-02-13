'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const stats = [
  { value: '8+',  label: "Années d'expérience" },
  { value: '15+', label: 'Missions réalisées' },
  { value: '700', label: 'Litres de café' },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [heroHeight, setHeroHeight] = useState(600);

  /* Measure hero height — and re-measure on resize */
  useEffect(() => {
    const measure = () => {
      if (sectionRef.current) setHeroHeight(sectionRef.current.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure, { passive: true });
    return () => window.removeEventListener('resize', measure);
  }, []);

  /* Global scroll position */
  const { scrollY } = useScroll();

  /* Opacity: directly proportional to scroll % — Lenis smooths the scroll globally */
  const opacity = useTransform(scrollY, [0, heroHeight * 0.7], [1, 0]);

  /* Subtle upward drift — direct transform, Lenis provides the momentum */
  const y = useTransform(scrollY, [0, heroHeight], [0, -48]);

  return (
    <section ref={sectionRef} className="pt-10 pb-20 px-5 md:px-20 max-w-[80rem] mx-auto">
      <motion.div style={{ opacity, y }}>

        {/* Eyebrow */}
        <p
          className="font-normal text-[#716040] mb-2"
          style={{ fontFamily: 'Amulya, serif', fontSize: 'clamp(0.875rem, 1.25vw, 1rem)' }}
        >
          Bonjour, je suis Joseph
        </p>

        {/* Hero title — fluid typography, conservative vw to avoid wrapping at 700-900px */}
        <h1
          className="font-bold leading-none mb-4 md:mb-6"
          style={{ fontFamily: 'Amulya, serif' }}
        >
          {/* "Product Designer" — large dark navy, never wraps before 1024px */}
          <span
            className="text-[#020826] block leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 7vw, 7.5rem)' }}
          >
            Product Designer
          </span>

          {/* "& Strategist" — second line, "&" smaller accent */}
          <span
            className="block leading-tight"
            style={{ fontSize: 'clamp(1.875rem, 5.5vw, 6rem)' }}
          >
            <span
              className="text-[#716040]"
              style={{ fontSize: 'clamp(1.125rem, 3vw, 3.5rem)' }}
            >
              &amp;
            </span>
            <span className="text-[#020826]"> Strategist</span>
          </span>
        </h1>

        {/* Subtitle — fluid */}
        <p
          className="font-medium text-[#716040] mb-10 lg:mb-16"
          style={{
            fontFamily: 'Synonym, sans-serif',
            fontSize: 'clamp(1rem, 1.75vw, 1.5rem)',
          }}
        >
          Spécialiste des environnements B2B complexes
        </p>

        {/* Stats + description — stacked until lg to avoid overlap at 768-1024px */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Stats — compact, dominated by the title above */}
          <div className="flex gap-6 lg:gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-medium text-[#020826] leading-none mb-1"
                  style={{
                    fontFamily: 'Amulya, serif',
                    fontSize: 'clamp(1.25rem, 2.5vw, 2.5rem)',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-normal text-[#020826] uppercase whitespace-nowrap"
                  style={{
                    fontFamily: 'Amulya, serif',
                    fontSize: 'clamp(0.6rem, 0.8vw, 0.875rem)',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Description — ferré à droite, smaller than title */}
          <p
            className="text-[#020826] leading-relaxed"
            style={{
              fontFamily: 'Synonym, sans-serif',
              fontSize: 'clamp(0.8125rem, 1vw, 1rem)',
            }}
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

      </motion.div>
    </section>
  );
}
