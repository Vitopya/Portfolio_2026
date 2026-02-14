import Image from 'next/image';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FadeIn } from '@/components/ui/FadeIn';
import { testimonials, clientLogos, quoteIconSrc } from '@/data/testimonials';

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Quote icon — 3rem × 3rem */}
      <div className="relative w-12 h-12 shrink-0">
        <Image
          src={quoteIconSrc}
          alt="citation"
          fill
          className="object-contain"
          sizes="3rem"
        />
      </div>

      {/* Quote text */}
      <p
        className="text-base font-normal text-[#716040] leading-relaxed"
        style={{ fontFamily: 'Synonym, sans-serif' }}
      >
        {t.quote}
      </p>

      {/* Attribution */}
      <div className="mt-auto pt-3 border-t border-[#EADDCF]">
        <p
          className="text-sm font-semibold text-[#020826]"
          style={{ fontFamily: 'Synonym, sans-serif' }}
        >
          {t.name}
        </p>
        <p
          className="text-xs text-[#716040]"
          style={{ fontFamily: 'Synonym, sans-serif' }}
        >
          {t.role} — {t.company}
        </p>
      </div>
    </div>
  );
}

export function ClientsSection() {
  return (
    <section className="py-20 px-5 md:px-20 max-w-[90rem] mx-auto w-full">
      <FadeIn>
        <SectionLabel>Clients &amp; Références</SectionLabel>
      </FadeIn>

      {/* Logo strip */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-9 gap-4 xl:gap-10 items-center mb-14">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="relative w-full aspect-square max-w-[5rem] mx-auto hover:opacity-80 transition-opacity"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 33vw, (max-width: 1280px) 20vw, 5rem"
              />
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.12} className="h-full">
            <TestimonialCard t={t} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
