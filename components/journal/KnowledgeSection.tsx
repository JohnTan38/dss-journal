import { Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionBadge from '@/components/ui/SectionBadge';
import JournalPrompt from '@/components/journal/JournalPrompt';
import StudentReflection from '@/components/journal/StudentReflection';
import type { SubSection } from '@/types/journal';

interface KnowledgeSectionProps {
  subSection: SubSection;
  className?: string;
}

export default function KnowledgeSection({ subSection, className }: KnowledgeSectionProps) {
  return (
    <div className={cn('space-y-6', className)}>
      {/* Section header */}
      <div className="flex items-start gap-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
        <Brain className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <SectionBadge label={subSection.label} variant="knowledge" />
          <p className="text-sm font-medium text-blue-900 mt-1.5">
            {subSection.performanceCriteriaTitle}
          </p>
        </div>
      </div>

      {/* Entries */}
      <div className="space-y-8">
        {subSection.entries.map((entry) => (
          <div key={entry.id} className="space-y-4">
            <JournalPrompt prompts={entry.prompts} />
            <StudentReflection content={entry.studentReflection} />
          </div>
        ))}
      </div>
    </div>
  );
}
