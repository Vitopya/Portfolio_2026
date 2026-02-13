import Image from 'next/image';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { testimonials, clientLogos, quoteIconSrc } from '@/data/testimonials';

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Quote icon */}
      <div className="relative h-6 w-6">
        <Image
          src={quoteIconSrc}
          alt="citation"
          fill
          className="object-contain"
          sizes="24px"
        />
      </div>

      <p className="text-sm text-[#020826] leading-relaxed">{t.quote}</p>

      <div className="mt-auto pt-2 border-t border-[#EADDCF]">
        <p className="text-sm font-semibold text-[#020826]">{t.name}</p>
        <p className="text-xs text-[#716040]">
          {t.role} — @{t.company}
        </p>
      </div>
    </div>
  );
}

export function ClientsSection() {
  return (
    <section className="py-16 px-6 max-w-[1200px] mx-auto">
      <SectionLabel>Clients &amp; Références</SectionLabel>

      {/* Logo strip */}
      <div className="flex flex-wrap items-center gap-8 mb-14">
        {clientLogos.map((logo) => (
          <div
            key={logo.name}
            className="relative h-7 w-24 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              className="object-contain"
              sizes="96px"
            />
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>
    </section>
  );
}
