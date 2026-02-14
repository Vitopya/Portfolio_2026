import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WorkhubHero } from '@/components/sections/WorkhubHero';
import { CTABanner } from '@/components/sections/CTABanner';
import { Tag } from '@/components/ui/Tag';
import { FadeIn } from '@/components/ui/FadeIn';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <>
      {/* ── Hero — sticky behind scrolling content ── */}
      <div className="sticky top-0 z-0">
        <WorkhubHero />
      </div>

      {/* ── Content — scrolls over the sticky hero ── */}
      <div className="relative z-10 bg-[#F9F4EF]">

        {/* ── Projects grid ── */}
        <section className="bg-[#FAFAFA] py-12">
          <div className="max-w-[90rem] mx-auto px-5 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, i) => (
                <FadeIn key={project.slug} delay={i * 0.1} className="h-full">
                  <article className="group flex flex-col p-2 gap-4 rounded-[4px] border border-[#EADDCF] bg-[#FAFAFA] hover:bg-[#F9F4EF] transition-colors duration-200 h-full">
                    {/* Image + tags row */}
                    <div className="flex flex-col gap-2">
                      <div className="relative w-full h-[15rem] overflow-hidden rounded-[4px] bg-[#EADDCF]">
                        <Image
                          src={project.workhubImage}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      {/* Tags + role chip */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Tag key={tag} type={tag} />
                          ))}
                        </div>
                        <span
                          className="shrink-0 text-xs font-normal text-[#020826] border border-[#EADDCF] bg-[#FAFAFA] rounded-[4px] px-2 py-1"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          {project.role} • {project.period}
                        </span>
                      </div>
                    </div>

                    {/* Title + description + link */}
                    <div className="flex flex-col gap-2 flex-1">
                      <h3
                        className="text-2xl font-semibold text-[#020826] leading-tight"
                        style={{ fontFamily: 'Synonym, sans-serif' }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm font-normal text-[#020826] leading-relaxed line-clamp-2 flex-1"
                        style={{ fontFamily: 'Synonym, sans-serif' }}
                      >
                        {project.description}
                      </p>
                      <div className="flex justify-end">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#020826] hover:text-[#8C7851] transition-colors px-2 py-1"
                          style={{ fontFamily: 'Synonym, sans-serif' }}
                        >
                          Explorer le projet
                          <ArrowRight size={14} strokeWidth={2} />
                        </Link>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTABanner />

      </div>
    </>
  );
}
