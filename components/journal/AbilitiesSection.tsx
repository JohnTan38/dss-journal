import { CheckSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getSectionHeaderStyle } from '@/lib/module-theme';
import SectionBadge from '@/components/ui/SectionBadge';
import JournalPrompt from '@/components/journal/JournalPrompt';
import StudentReflection from '@/components/journal/StudentReflection';
import type { ModuleTheme, SubSection } from '@/types/journal';

interface AbilitiesSectionProps {
  subSection: SubSection;
  theme: ModuleTheme;
  className?: string;
}

export default function AbilitiesSection({ subSection, theme, className }: AbilitiesSectionProps) {
  const headerStyle = getSectionHeaderStyle(theme, 'abilities');

  return (
    <div className={cn('space-y-6', className)}>
      {/* Section header */}
      <div className={cn('flex items-start gap-3 rounded-r-xl border-l-4 p-4', headerStyle.backgroundClass, headerStyle.borderClass)}>
        <CheckSquare className={cn('mt-0.5 h-5 w-5 flex-shrink-0', headerStyle.iconClass)} />
        <div className="space-y-1">
          <SectionBadge label={subSection.label} variant="abilities" className={theme.abilitiesBadgeClass} />
          <p className={cn('mt-1.5 text-sm font-medium', headerStyle.textClass)}>
            {subSection.performanceCriteriaTitle}
          </p>
        </div>
      </div>

      {/* Entries */}
      <div className="space-y-8">
        {subSection.entries.map((entry) => (
          <div key={entry.id} className="space-y-4">
            <JournalPrompt prompts={entry.prompts} className={theme.promptCardClass} />
            <StudentReflection content={entry.studentReflection} className={theme.reflectionCardClass} />
          </div>
        ))}
      </div>
    </div>
  );
}
