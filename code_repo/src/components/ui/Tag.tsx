import { cn } from '@/lib/cn';
import type { TagType } from '@/data/projects';

/* Colors from Figma design tokens */
const tagConfig: Record<TagType, { label: string; className: string }> = {
  'product-design': {
    label: 'Product Design',
    className: 'bg-[#BEDBFF] text-[#020826]',
  },
  'ux-strategy': {
    label: 'UX Strategy',
    className: 'bg-[#FDA5C1] text-[#020826]',
  },
  'user-research': {
    label: 'User Research',
    className: 'bg-[#E9D4FF] text-[#020826]',
  },
};

interface TagProps {
  type: TagType;
  className?: string;
}

export function Tag({ type, className }: TagProps) {
  const config = tagConfig[type];
  return (
    <span
      className={cn(
        'inline-flex items-center rounded px-2 py-1 text-xs font-normal',
        config.className,
        className
      )}
      style={{ fontFamily: 'Synonym, sans-serif' }}
    >
      {config.label}
    </span>
  );
}
