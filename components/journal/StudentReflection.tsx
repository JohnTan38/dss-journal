import { PenLine } from 'lucide-react';
import { cn } from '@/lib/utils';
import IncidentReport from '@/components/journal/IncidentReport';
import type { StudentReflectionContent } from '@/types/journal';

interface StudentReflectionProps {
  content: StudentReflectionContent;
  className?: string;
}

export default function StudentReflection({ content, className }: StudentReflectionProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-slate-200 bg-white p-5',
        className
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <PenLine className="h-4 w-4 flex-shrink-0 text-slate-600" />
        <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
          Student Reflection Input
        </span>
      </div>

      {content.type === 'text' && (
        <p className="text-sm text-gray-700 leading-relaxed">{content.text}</p>
      )}

      {content.type === 'composite' && content.components && (
        <IncidentReport components={content.components} />
      )}
    </div>
  );
}
