import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Tag } from '@/components/ui/Tag';
import { articles } from '@/data/articles';

function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="group flex flex-col">
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#EADDCF] mb-4">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {article.tags.map((tag) => (
          <Tag key={tag} type={tag} />
        ))}
      </div>

      {/* Title */}
      <h3
        className="text-base font-bold text-[#020826] mb-2 leading-snug"
        style={{ fontFamily: 'Amulya, serif' }}
      >
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-[#716040] leading-relaxed mb-4 flex-1 line-clamp-3">
        {article.excerpt}
      </p>

      {/* Link */}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#020826] hover:text-[#8C7851] transition-colors mt-auto"
      >
        Lire l&apos;article sur Medium
        <ArrowUpRight size={14} strokeWidth={2} />
      </a>
    </article>
  );
}

export function ArticlesSection() {
  return (
    <section className="py-16 px-6 max-w-[1200px] mx-auto">
      <SectionLabel>Derniers articles</SectionLabel>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </section>
  );
}
