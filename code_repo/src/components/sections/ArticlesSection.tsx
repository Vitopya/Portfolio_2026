import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Tag } from '@/components/ui/Tag';
import { FadeIn } from '@/components/ui/FadeIn';
import { articles } from '@/data/articles';

function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="group flex flex-col p-2 gap-3 rounded-[4px] border border-[#EADDCF] bg-[#FAFAFA] hover:bg-[#F9F4EF] transition-colors duration-200">
      {/* Frame 104 — image + tags */}
      <div className="flex flex-col gap-2">
        <div className="relative w-full h-[7.5rem] overflow-hidden rounded-[4px] bg-[#EADDCF]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Tag key={tag} type={tag} />
          ))}
        </div>
      </div>

      {/* Frame 103 — title + excerpt + button (no border separator) */}
      <div className="flex flex-col gap-2 flex-1">
        <h3
          className="text-lg font-semibold text-[#020826] leading-tight"
          style={{ fontFamily: 'Synonym, sans-serif' }}
        >
          {article.title}
        </h3>
        <p
          className="text-sm font-normal text-[#020826] leading-relaxed line-clamp-2 flex-1"
          style={{ fontFamily: 'Synonym, sans-serif' }}
        >
          {article.excerpt}
        </p>
        <div className="flex justify-end">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#020826] hover:text-[#8C7851] transition-colors px-2 py-1"
            style={{ fontFamily: 'Synonym, sans-serif' }}
          >
            Lire sur Medium
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
    </article>
  );
}

export function ArticlesSection() {
  return (
    <section className="py-12 px-5 md:px-20 max-w-[80rem] mx-auto w-full">
      <FadeIn>
        <SectionLabel>Derniers articles</SectionLabel>
      </FadeIn>

      {/* Responsive grid: 1 col mobile → 3 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article, i) => (
          <FadeIn key={article.title} delay={i * 0.1}>
            <ArticleCard article={article} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
