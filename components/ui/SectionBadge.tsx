import { cn } from '@/lib/utils';

type BadgeVariant = 'knowledge' | 'abilities' | 'lu' | 'cover';

interface SectionBadgeProps {
  label: string;
  variant: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  knowledge: 'bg-blue-100 text-blue-800 border border-blue-200',
  abilities: 'bg-purple-100 text-purple-800 border border-purple-200',
  lu: 'bg-teal-100 text-teal-800 border border-teal-200',
  cover: 'bg-slate-100 text-slate-700 border border-slate-200',
};

export default function SectionBadge({ label, variant, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
        variantClasses[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
