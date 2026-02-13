import { BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionBadge from '@/components/ui/SectionBadge';
import JournalPrompt from '@/components/journal/JournalPrompt';
import StudentReflection from '@/components/journal/StudentReflection';
import KnowledgeSection from '@/components/journal/KnowledgeSection';
import AbilitiesSection from '@/components/journal/AbilitiesSection';
import type { LearningUnit as LearningUnitType, ModuleTheme, SectionId } from '@/types/journal';

interface LearningUnitProps {
  unit: LearningUnitType;
  activeSectionId: SectionId;
  theme: ModuleTheme;
}

export default function LearningUnit({ unit, activeSectionId, theme }: LearningUnitProps) {
  const showHeaderEntry = activeSectionId === unit.id;

  // Find which sub-section to show (if any)
  const activeSubSection = unit.subSections.find((s) => s.id === activeSectionId);

  return (
    <div className="space-y-6">
      {/* LU Header Banner */}
      <div className="rounded-2xl overflow-hidden shadow-md">
        <div className={cn(theme.luHeaderBgClass, 'px-6 py-5')}>
          <div className="flex items-start gap-3">
            <BookOpen className={cn('w-6 h-6 flex-shrink-0 mt-0.5', theme.luIconClass ?? 'text-teal-300')} />
            <div>
              <SectionBadge label={unit.shortTitle} variant="lu" className="mb-2" />
              <h2 className="text-lg font-bold text-white leading-snug">{unit.title}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* LU-level header prompt entry (Prompt 1) */}
      {showHeaderEntry && unit.headerPromptEntry && (
        <div className="space-y-4">
          <JournalPrompt prompts={unit.headerPromptEntry.prompts} />
          <StudentReflection content={unit.headerPromptEntry.studentReflection} />
        </div>
      )}

      {/* Active sub-section content */}
      {activeSubSection && (
        <div
          className={cn(
            'space-y-6',
            activeSubSection.type === 'knowledge'
              ? ''
              : ''
          )}
        >
          {activeSubSection.type === 'knowledge' ? (
            <KnowledgeSection subSection={activeSubSection} />
          ) : (
            <AbilitiesSection subSection={activeSubSection} />
          )}
        </div>
      )}
    </div>
  );
}
