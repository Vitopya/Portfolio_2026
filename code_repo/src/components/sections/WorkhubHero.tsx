'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';

export function WorkhubHero() {
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
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F9F4EF]">
      {/* Background illustration */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/workhub/hero-img/workhub_img_bg_fixed_1x.webp"
          alt=""
          fill
          className="object-cover object-[left_20%] md:object-top"
          priority
          sizes="100vw"
        />
      </div>

      {/* Parallax content wrapper */}
      <motion.div style={{ opacity, y }}>
        <div
          className="flex flex-col px-5 md:px-20 max-w-[90rem] mx-auto w-full"
          style={{ minHeight: '50vh' }}
        >
          {/* Top spacer — grows to fill space, minimum 5rem to clear navbar */}
          <div style={{ flex: '1 0 5rem' }} />

          {/* Content at the bottom */}
          <div className="pb-16 md:pb-20">
            <FadeIn>
              <h1
                className="font-bold text-[#020826] leading-tight mb-3"
                style={{
                  fontFamily: 'Amulya, serif',
                  fontSize: 'clamp(2.25rem, 5vw, 5rem)',
                }}
              >
                Projets
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p
                className="text-base font-normal text-[#020826] md:max-w-[60%]"
                style={{ fontFamily: 'Synonym, sans-serif' }}
              >
                Des outils legacy, des experts exigeants et des contextes
                passionnants où cela ne pardonne pas.
              </p>
            </FadeIn>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
