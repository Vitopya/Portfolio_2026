import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Tag } from '@/components/ui/Tag';
import { projects } from '@/data/projects';

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group flex flex-col w-[548px] h-[442px] p-2 gap-4 rounded-[4px] border border-[#EADDCF] bg-[#FAFAFA] overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-[220px] overflow-hidden bg-[#EADDCF] shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="548px"
        />
      </div>

      {/* Meta row */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag} type={tag} />
          ))}
        </div>
        <span className="text-xs text-[#716040] whitespace-nowrap ml-2 shrink-0">
          {project.role} • {project.period}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold text-[#020826] leading-tight shrink-0"
        style={{ fontFamily: 'Amulya, serif' }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#716040] leading-relaxed flex-1 line-clamp-3">
        {project.description}
      </p>

      {/* CTA */}
      <div className="border-t border-[#EADDCF] pt-3 shrink-0">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#020826] hover:text-[#8C7851] transition-colors"
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
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#020826] hover:text-[#8C7851] transition-colors"
        >
          Explorer tous les projets
          <ArrowRight size={14} strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
