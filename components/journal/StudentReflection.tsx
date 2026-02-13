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
        'rounded-xl border border-amber-200 bg-amber-50 p-5',
        className
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <PenLine className="w-4 h-4 text-amber-600 flex-shrink-0" />
        <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
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
