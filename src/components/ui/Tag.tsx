import { cn } from '@/lib/cn';
import type { TagType } from '@/data/projects';

/* Colors from design system strokes */
const tagConfig: Record<TagType, { label: string; className: string }> = {
  'product-design': {
    label: 'Product Design',
    className: 'bg-[#E9D4FF] text-[#020826]',   // S-Pink
  },
  'ux-strategy': {
    label: 'UX Strategy',
    className: 'bg-[#BEDBFF] text-[#020826]',   // S-Blue
  },
  'user-research': {
    label: 'User Research',
    className: 'bg-[#A4F4CF] text-[#020826]',   // S-Green
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
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
