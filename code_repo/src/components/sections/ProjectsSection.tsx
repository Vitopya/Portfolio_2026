import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Tag } from '@/components/ui/Tag';
import { projects } from '@/data/projects';

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group flex flex-col p-2 gap-4 rounded-[4px] border border-[#EADDCF] bg-[#FAFAFA] hover:bg-[#F9F4EF] transition-colors duration-200">
      {/* Frame 104 — image + tags & role on same row */}
      <div className="flex flex-col gap-2">
        <div className="relative w-full h-[15rem] overflow-hidden rounded-[4px] bg-[#EADDCF]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Tags + role chip on the same line */}
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

      {/* Frame 103 — title + description + button (no border separator) */}
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
  );
}

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="bg-[#FAFAFA] py-12">
      <div className="max-w-[80rem] mx-auto px-5 md:px-20">
        <SectionLabel>Projets</SectionLabel>

        {/* Responsive grid: 1 col mobile → 2 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* See all — increased top spacing */}
        <div className="flex justify-end mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#020826] hover:text-[#8C7851] transition-colors px-2 py-1"
            style={{ fontFamily: 'Synonym, sans-serif' }}
          >
            Explorer tous les projets
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
