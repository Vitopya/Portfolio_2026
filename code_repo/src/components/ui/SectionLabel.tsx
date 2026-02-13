import { cn } from '@/lib/cn';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn('text-base font-normal text-[#716040] mb-4', className)}
      style={{ fontFamily: 'Amulya, serif' }}
    >
      {children}
    </p>
  );
}
