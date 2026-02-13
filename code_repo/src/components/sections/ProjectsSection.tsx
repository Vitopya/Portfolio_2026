import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Tag } from '@/components/ui/Tag';
import { projects } from '@/data/projects';

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group flex flex-col w-[548px] h-[442px] p-2 gap-4 rounded-[4px] border border-[#EADDCF] bg-[#FAFAFA] overflow-hidden">
      {/* Thumbnail — 532×240px */}
      <div className="relative w-full h-[240px] overflow-hidden rounded-[4px] bg-[#EADDCF] shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="548px"
        />
      </div>

      {/* Meta row — tags + position chip */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} type={tag} />
          ))}
        </div>
        <span
          className="text-xs font-normal text-[#020826] whitespace-nowrap ml-2 shrink-0 border border-[#EADDCF] bg-[#FAFAFA] rounded-[4px] px-2 py-1"
          style={{ fontFamily: 'Synonym, sans-serif' }}
        >
          {project.role} • {project.period}
        </span>
      </div>

      {/* Title — Synonym SemiBold 24px */}
      <h3
        className="text-2xl font-semibold text-[#020826] leading-tight shrink-0"
        style={{ fontFamily: 'Synonym, sans-serif' }}
      >
        {project.title}
      </h3>

      {/* Description — Synonym Regular 14px */}
      <p
        className="text-sm font-normal text-[#020826] leading-relaxed flex-1 line-clamp-2"
        style={{ fontFamily: 'Synonym, sans-serif' }}
      >
        {project.description}
      </p>

      {/* CTA — Tertiary button */}
      <div className="border-t border-[#EADDCF] pt-3 shrink-0">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-base font-medium text-[#020826] hover:text-[#8C7851] transition-colors rounded-[4px] px-2 py-2"
          style={{ fontFamily: 'Synonym, sans-serif' }}
        >
          Explorer le projet
          <ArrowRight size={14} strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="flex flex-col gap-2 py-12 px-20 bg-[#FAFAFA]">
      <SectionLabel className="mb-0">Projets</SectionLabel>

      {/* Mosaic — flex wrap, justify-between, row-gap 16px */}
      <div className="flex flex-wrap justify-between items-start content-start gap-y-4 self-stretch">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* See all */}
      <div className="flex justify-end">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-base font-medium text-[#020826] hover:text-[#8C7851] transition-colors rounded-[4px] px-2 py-2"
          style={{ fontFamily: 'Synonym, sans-serif' }}
        >
          Explorer tous les projets
          <ArrowRight size={14} strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
