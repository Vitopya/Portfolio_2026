import { cn } from '@/lib/cn';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'text-xs font-semibold tracking-[0.15em] uppercase text-[#716040] mb-8',
        className
      )}
    >
      {children}
    </p>
  );
}
