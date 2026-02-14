'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionHeight, setSectionHeight] = useState(600);

  /* Measure section height, re-measure on resize */
  useEffect(() => {
    const measure = () => {
      if (sectionRef.current) setSectionHeight(sectionRef.current.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure, { passive: true });
    return () => window.removeEventListener('resize', measure);
  }, []);

  /* Same parameters as HeroSection on the homepage */
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, sectionHeight * 0.7], [1, 0]);
  const y = useTransform(scrollY, [0, sectionHeight], [0, -48]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F9F4EF]">
      {/* Background illustration — face centered on mobile, top-anchored on desktop */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/about/Joseph/img_bg_fixed_1x.webp"
          alt=""
          fill
          className="object-cover object-[left_20%] md:object-top"
          priority
          sizes="100vw"
        />
      </div>

      {/* Parallax content wrapper */}
      <motion.div style={{ opacity, y }}>
        {/*
          Flex column container:
          - flex: '1 0 5rem' spacer ensures at minimum 5rem (navbar) of clearance at top
          - content sits at the bottom via flex layout
        */}
        <div
          className="flex flex-col px-5 md:px-20 max-w-[90rem] mx-auto w-full"
          style={{ minHeight: '72vh' }}
        >
          {/* Top spacer — grows to fill space, stays minimum 5rem to clear navbar */}
          <div style={{ flex: '1 0 5rem' }} />

          {/* Content at the bottom — no max-width so title spans full container */}
          <div className="pb-20 md:pb-24">
            <FadeIn>
              <h1
                className="font-bold text-[#020826] leading-tight mb-3"
                style={{
                  fontFamily: 'Amulya, serif',
                  /* Mobile: 2.25rem matches homepage hero min; desktop fluid up to 5rem */
                  fontSize: 'clamp(2.25rem, 5vw, 5rem)',
                }}
              >
                {/* Forced 3-line break on desktop per Figma */}
                Je conçois des solutions<br />
                adaptées, inclusives<br />
                et durables
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p
                className="text-base font-normal text-[#020826] md:whitespace-nowrap"
                style={{ fontFamily: 'Synonym, sans-serif' }}
              >
                Je travaille avec et pour des gens qui en savent plus que moi,
                et c&apos;est tout le but.
              </p>
            </FadeIn>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
