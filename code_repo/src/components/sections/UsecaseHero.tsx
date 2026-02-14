'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import { ChevronRight } from 'lucide-react';

interface UsecaseHeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
  bgColor?: string;
  breadcrumbTitle: string;
}

export function UsecaseHero({ title, subtitle, bgImage, bgColor = '#F9F4EF', breadcrumbTitle }: UsecaseHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionHeight, setSectionHeight] = useState(600);

  useEffect(() => {
    const measure = () => {
      if (sectionRef.current) setSectionHeight(sectionRef.current.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure, { passive: true });
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, sectionHeight * 0.7], [1, 0]);
  const y = useTransform(scrollY, [0, sectionHeight], [0, -48]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ backgroundColor: bgColor }}>
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-cover object-[left_20%] md:object-top"
          priority
          sizes="100vw"
        />
      </div>

      <motion.div style={{ opacity, y }}>
        <div
          className="flex flex-col px-5 md:px-20 max-w-[90rem] mx-auto w-full"
          style={{ minHeight: '60vh' }}
        >
          {/* Breadcrumb — desktop only, below navbar */}
          <nav
            aria-label="Fil d'Ariane"
            className="hidden md:flex items-center gap-1.5 pt-24"
            style={{ fontFamily: 'Synonym, sans-serif' }}
          >
            <Link
              href="/projects"
              className="text-sm text-[#020826]/60 hover:text-[#020826] transition-colors"
            >
              Projets
            </Link>
            <ChevronRight size={14} className="text-[#020826]/40" strokeWidth={1.5} />
            <span className="text-sm text-[#020826]">
              {breadcrumbTitle}
            </span>
          </nav>

          <div style={{ flex: '1 0 5rem' }} />

          <div className="pb-16 md:pb-20">
            <FadeIn>
              <h1
                className="font-bold text-[#020826] leading-tight mb-3"
                style={{
                  fontFamily: 'Amulya, serif',
                  fontSize: 'clamp(2.25rem, 4vw, 4rem)',
                }}
              >
                {title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p
                className="text-base font-normal text-[#020826]"
                style={{ fontFamily: 'Synonym, sans-serif' }}
              >
                {subtitle}
              </p>
            </FadeIn>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
