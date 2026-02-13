import { cn } from '@/lib/cn';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

/* Colors from design system */
const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-[#8C7851] text-[#FFFFFE] hover:bg-[#716040] px-4 py-2',
  outline:
    'border border-[#8C7851] text-[#8C7851] hover:bg-[#8C7851] hover:text-[#FFFFFE] px-4 py-2',
  ghost:
    'text-[#020826] hover:text-[#8C7851] px-0 py-0',
};

export function Button({
  children,
  href,
  variant = 'primary',
  external = false,
  className,
  onClick,
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 rounded-sm cursor-pointer',
    variants[variant],
    className
  );

  const content = (
    <>
      {children}
      <ArrowUpRight size={14} strokeWidth={2} />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={base}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={base} onClick={onClick}>
      {content}
    </button>
  );
}
