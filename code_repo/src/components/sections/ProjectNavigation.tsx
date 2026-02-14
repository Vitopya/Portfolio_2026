import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects';
import { FadeIn } from '@/components/ui/FadeIn';

interface ProjectNavigationProps {
  slug: string;
}

export function ProjectNavigation({ slug }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <section className="bg-[#FAFAFA] py-16 md:py-20">
      <div className="max-w-[90rem] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Previous project */}
          <FadeIn>
            <Link
              href={`/projects/${prev.slug}`}
              className="flex flex-col gap-3 p-6 rounded-[4px] border border-[#EADDCF] bg-[#FAFAFA] hover:bg-[#F9F4EF] transition-colors"
            >
              <span
                className="text-xs font-normal text-[#716040] uppercase"
                style={{ fontFamily: 'Amulya, serif' }}
              >
                Projet précédent
              </span>
              <h3
                className="text-xl font-semibold text-[#020826] leading-tight"
                style={{ fontFamily: 'Synonym, sans-serif' }}
              >
                {prev.title}
              </h3>
              <p
                className="text-sm font-normal text-[#020826] leading-relaxed line-clamp-2"
                style={{ fontFamily: 'Synonym, sans-serif' }}
              >
                {prev.description}
              </p>
              <span
                className="inline-flex items-center gap-2 text-sm font-medium text-[#020826] hover:text-[#8C7851] transition-colors"
                style={{ fontFamily: 'Synonym, sans-serif' }}
              >
                <ArrowLeft size={14} strokeWidth={2} />
                Explorer le projet
              </span>
            </Link>
          </FadeIn>

          {/* Next project */}
          <FadeIn delay={0.1}>
            <Link
              href={`/projects/${next.slug}`}
              className="flex flex-col gap-3 p-6 rounded-[4px] border border-[#EADDCF] bg-[#FAFAFA] hover:bg-[#F9F4EF] transition-colors md:text-right"
            >
              <span
                className="text-xs font-normal text-[#716040] uppercase"
                style={{ fontFamily: 'Amulya, serif' }}
              >
                Projet suivant
              </span>
              <h3
                className="text-xl font-semibold text-[#020826] leading-tight"
                style={{ fontFamily: 'Synonym, sans-serif' }}
              >
                {next.title}
              </h3>
              <p
                className="text-sm font-normal text-[#020826] leading-relaxed line-clamp-2"
                style={{ fontFamily: 'Synonym, sans-serif' }}
              >
                {next.description}
              </p>
              <span
                className="inline-flex items-center gap-2 text-sm font-medium text-[#020826] hover:text-[#8C7851] transition-colors md:justify-end"
                style={{ fontFamily: 'Synonym, sans-serif' }}
              >
                Explorer le projet
                <ArrowRight size={14} strokeWidth={2} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
