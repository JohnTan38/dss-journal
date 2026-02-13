'use client';

import { useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import CoverSheet from '@/components/journal/CoverSheet';
import LearningUnit from '@/components/journal/LearningUnit';
import { modulesRegistry } from '@/data/modules-index';
import { extractReflectionText } from '@/lib/utils';
import type {
  JournalModule,
  SectionId,
  SidebarGroup,
  SearchIndexEntry,
} from '@/types/journal';

interface JournalPageClientProps {
  moduleData: JournalModule;
}

// Build flat navigation order for Prev/Next
function buildNavigationOrder(moduleData: JournalModule): SectionId[] {
  const order: SectionId[] = ['cover'];
  for (const lu of moduleData.learningUnits) {
    order.push(lu.id);
    for (const sub of lu.subSections) {
      order.push(sub.id);
    }
  }
  return order;
}

// Build section labels for navigation display
function buildSectionLabels(moduleData: JournalModule): Record<SectionId, string> {
  const labels: Record<string, string> = { cover: 'Cover Sheet' };
  for (const lu of moduleData.learningUnits) {
    labels[lu.id] = lu.shortTitle;
    for (const sub of lu.subSections) {
      labels[sub.id] = sub.label;
    }
  }
  return labels;
}

// Build sidebar groups from all registered modules + current module data
function buildSidebarGroups(
  currentModuleData: JournalModule
): SidebarGroup[] {
  return modulesRegistry.map((entry) => {
    if (entry.moduleId !== currentModuleData.moduleId) {
      // Other modules: show stub group (no items loaded yet)
      return {
        groupId: entry.moduleId,
        groupLabel: `${entry.moduleNumber} — ${entry.moduleName}`,
        moduleId: entry.moduleId,
        items: [{ id: 'cover', label: 'Cover Sheet', icon: 'FileText' }],
      };
    }
    // Current module: full sidebar tree
    return {
      groupId: entry.moduleId,
      groupLabel: `${entry.moduleNumber} — ${entry.moduleName}`,
      moduleId: entry.moduleId,
      items: [
        { id: 'cover', label: 'Cover Sheet', icon: 'FileText' },
        ...currentModuleData.learningUnits.map((lu) => ({
          id: lu.id,
          label: lu.shortTitle,
          icon: 'BookOpen',
          children: lu.subSections.map((sub) => ({
            id: sub.id,
            label: sub.label,
            icon: sub.type === 'knowledge' ? 'Brain' : 'CheckSquare',
          })),
        })),
      ],
    };
  });
}

// Build search index from all module content
function buildSearchIndex(moduleData: JournalModule): SearchIndexEntry[] {
  const entries: SearchIndexEntry[] = [];

  // Cover sheet
  entries.push({
    sectionId: 'cover',
    label: 'Cover Sheet',
    textContent: [
      moduleData.moduleCode,
      moduleData.moduleName,
      moduleData.coverSheet.institution,
      moduleData.coverSheet.program,
    ]
      .join(' ')
      .toLowerCase(),
  });

  for (const lu of moduleData.learningUnits) {
    // LU header entry
    if (lu.headerPromptEntry) {
      const promptText = lu.headerPromptEntry.prompts.map((p) => p.promptText).join(' ');
      const reflectionText = extractReflectionText(lu.headerPromptEntry.studentReflection);
      entries.push({
        sectionId: lu.id,
        label: lu.shortTitle,
        textContent: `${lu.title} ${promptText} ${reflectionText}`.toLowerCase(),
      });
    }

    // Sub-sections
    for (const sub of lu.subSections) {
      const texts = sub.entries.flatMap((entry) => [
        ...entry.prompts.map((p) => p.promptText),
        extractReflectionText(entry.studentReflection),
      ]);
      entries.push({
        sectionId: sub.id,
        label: `${lu.shortTitle} — ${sub.label}`,
        textContent: `${sub.label} ${sub.performanceCriteriaTitle} ${texts.join(' ')}`.toLowerCase(),
      });
    }
  }

  return entries;
}

export default function JournalPageClient({ moduleData }: JournalPageClientProps) {
  const router = useRouter();
  const [activeSectionId, setActiveSectionId] = useState<SectionId>('cover');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationOrder = useMemo(() => buildNavigationOrder(moduleData), [moduleData]);
  const sectionLabels = useMemo(() => buildSectionLabels(moduleData), [moduleData]);
  const sidebarGroups = useMemo(() => buildSidebarGroups(moduleData), [moduleData]);
  const searchIndex = useMemo(() => buildSearchIndex(moduleData), [moduleData]);

  const currentIndex = navigationOrder.indexOf(activeSectionId);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < navigationOrder.length - 1;

  const handleNavigate = useCallback(
    (moduleId: string, sectionId: SectionId) => {
      if (moduleId === moduleData.moduleId) {
        // Same module — just update the active section in-page
        setActiveSectionId(sectionId);
        setSidebarOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Different module — navigate to the new module's route
        setSidebarOpen(false);
        router.push(`/journals/${moduleId}`);
      }
    },
    [moduleData.moduleId, router]
  );

  const handlePrev = useCallback(() => {
    if (hasPrev) {
      setActiveSectionId(navigationOrder[currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hasPrev, navigationOrder, currentIndex]);

  const handleNext = useCallback(() => {
    if (hasNext) {
      setActiveSectionId(navigationOrder[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hasNext, navigationOrder, currentIndex]);

  const handleSearchNavigate = useCallback(
    (sectionId: SectionId) => {
      setActiveSectionId(sectionId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  // Determine active LU for rendering
  const activeLU = moduleData.learningUnits.find(
    (lu) =>
      lu.id === activeSectionId ||
      lu.subSections.some((s) => s.id === activeSectionId)
  );

  const pdfFilename = `${moduleData.moduleCode}-${moduleData.moduleNumber}-Journal.pdf`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 flex">
      {/* Sidebar */}
      <Sidebar
        groups={sidebarGroups}
        activeSectionId={activeSectionId}
        activeModuleId={moduleData.moduleId}
        isOpen={sidebarOpen}
        onNavigate={handleNavigate}
        onClose={() => setSidebarOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={hasPrev}
        hasNext={hasNext}
        currentIndex={currentIndex}
        totalSections={navigationOrder.length}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          moduleName={moduleData.moduleName}
          moduleCode={moduleData.moduleCode}
          searchIndex={searchIndex}
          onNavigate={handleSearchNavigate}
          onSidebarToggle={() => setSidebarOpen(true)}
          printTargetId="journal-content"
          pdfFilename={pdfFilename}
        />

        {/* Section label bar */}
        <div className="border-b border-gray-200 bg-white/70 px-6 py-2.5">
          <p className="text-xs font-medium text-gray-400">
            {currentIndex + 1} of {navigationOrder.length} &mdash;{' '}
            <span className="text-gray-600 font-semibold">
              {sectionLabels[activeSectionId] ?? activeSectionId}
            </span>
          </p>
        </div>

        {/* Journal content region */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div id="journal-content" className="max-w-4xl mx-auto bg-white">
            <div className="p-4 sm:p-6 lg:p-8">
              {activeSectionId === 'cover' ? (
                <CoverSheet data={moduleData.coverSheet} moduleId={moduleData.moduleId} coverTitleClass={moduleData.theme.coverTitleClass} />
              ) : activeLU ? (
                <LearningUnit unit={activeLU} activeSectionId={activeSectionId} theme={moduleData.theme} />
              ) : null}
            </div>
          </div>
        </main>

        {/* Bottom navigation bar (mobile) */}
        <div className="lg:hidden sticky bottom-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={!hasPrev}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 text-gray-700 disabled:opacity-40 hover:bg-gray-50 transition-colors"
          >
            ← Previous
          </button>
          <span className="text-xs text-gray-400 font-medium">
            {currentIndex + 1} / {navigationOrder.length}
          </span>
          <button
            onClick={handleNext}
            disabled={!hasNext}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700 transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
