import { CheckSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionBadge from '@/components/ui/SectionBadge';
import JournalPrompt from '@/components/journal/JournalPrompt';
import StudentReflection from '@/components/journal/StudentReflection';
import type { SubSection } from '@/types/journal';

interface AbilitiesSectionProps {
  subSection: SubSection;
  className?: string;
}

export default function AbilitiesSection({ subSection, className }: AbilitiesSectionProps) {
  return (
    <div className={cn('space-y-6', className)}>
      {/* Section header */}
      <div className="flex items-start gap-3 p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-xl">
        <CheckSquare className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <SectionBadge label={subSection.label} variant="abilities" />
          <p className="text-sm font-medium text-purple-900 mt-1.5">
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
