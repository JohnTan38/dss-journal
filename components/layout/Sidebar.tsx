'use client';

import { useState } from 'react';
import {
  FileText,
  BookOpen,
  Brain,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  X,
  ExternalLink,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import NavigationButtons from '@/components/ui/NavigationButtons';
import type { SidebarGroup, SidebarItem, SectionId } from '@/types/journal';

interface SidebarProps {
  groups: SidebarGroup[];
  activeSectionId: SectionId;
  activeModuleId: string;
  isOpen: boolean;
  onNavigate: (moduleId: string, sectionId: SectionId) => void;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  currentIndex: number;
  totalSections: number;
}

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-4 h-4" />,
  BookOpen: <BookOpen className="w-4 h-4" />,
  Brain: <Brain className="w-4 h-4" />,
  CheckSquare: <CheckSquare className="w-4 h-4" />,
};

function SidebarNavItem({
  item,
  moduleId,
  activeSectionId,
  onNavigate,
  depth,
}: {
  item: SidebarItem;
  moduleId: string;
  activeSectionId: SectionId;
  onNavigate: (moduleId: string, sectionId: SectionId) => void;
  depth: number;
}) {
  const hasChildren = item.children && item.children.length > 0;
  const isActive = activeSectionId === item.id;
  const isChildActive = item.children?.some((c) => c.id === activeSectionId) ?? false;
  const [expanded, setExpanded] = useState(isActive || isChildActive || depth === 0);

  const handleClick = () => {
    if (hasChildren) {
      setExpanded((p) => !p);
    } else {
      onNavigate(moduleId, item.id);
    }
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className={cn(
          'w-full flex items-center gap-2 rounded-lg text-sm font-medium transition-all',
          depth === 0 ? 'px-3 py-2.5' : 'px-2 py-2',
          depth === 1 ? 'pl-8' : '',
          depth === 2 ? 'pl-12' : '',
          isActive && !hasChildren
            ? 'bg-blue-100 text-blue-800 font-semibold'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
          isChildActive && hasChildren ? 'text-blue-700' : ''
        )}
      >
        {item.icon && (
          <span className={cn('flex-shrink-0', isActive ? 'text-blue-600' : 'text-gray-400')}>
            {iconMap[item.icon] ?? null}
          </span>
        )}
        <span className="flex-1 text-left truncate">{item.label}</span>
        {hasChildren && (
          <span className="flex-shrink-0 text-gray-400">
            {expanded ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5" />
            )}
          </span>
        )}
      </button>

      {hasChildren && expanded && (
        <ul className="mt-0.5 space-y-0.5">
          {item.children!.map((child) => (
            <SidebarNavItem
              key={child.id}
              item={child}
              moduleId={moduleId}
              activeSectionId={activeSectionId}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Sidebar({
  groups,
  activeSectionId,
  activeModuleId,
  isOpen,
  onNavigate,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  currentIndex,
  totalSections,
}: SidebarProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(groups.map((g) => g.groupId))
  );

  const toggleGroup = (groupId: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) next.delete(groupId);
      else next.add(groupId);
      return next;
    });
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Gradient accent bar */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-teal-500 flex-shrink-0" />

      {/* Header */}
      <div className="px-4 py-4 flex items-center justify-between flex-shrink-0">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Clinical Journal
          </p>
          <p className="text-sm font-bold text-gray-800 mt-0.5">Navigation</p>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Nav groups */}
      <nav
        className="flex-1 overflow-y-auto px-3 pb-4 space-y-2"
        style={{ scrollbarWidth: 'thin' }}
      >
        {groups.map((group) => {
          const isGroupExpanded = expandedGroups.has(group.groupId);
          const isActiveGroup = group.moduleId === activeModuleId;

          return (
            <div key={group.groupId}>
              <button
                onClick={() => {
                  toggleGroup(group.groupId);
                  // If clicking a non-active module group, also navigate to it
                  if (!isActiveGroup) {
                    onNavigate(group.moduleId, 'cover');
                  }
                }}
                className={cn(
                  'w-full flex items-start justify-between px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors gap-1',
                  isActiveGroup
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-500 hover:bg-orange-50 hover:text-orange-700 hover:border hover:border-orange-200 border border-transparent'
                )}
              >
                <span className="leading-tight text-left break-words min-w-0 flex-1">{group.groupLabel}</span>
                <span className="flex-shrink-0 mt-0.5">
                  {!isActiveGroup ? (
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  ) : isGroupExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5" />
                  )}
                </span>
              </button>

              {isGroupExpanded && isActiveGroup && (
                <ul className="mt-1 space-y-0.5">
                  {group.items.map((item) => (
                    <SidebarNavItem
                      key={item.id}
                      item={item}
                      moduleId={group.moduleId}
                      activeSectionId={activeSectionId}
                      onNavigate={onNavigate}
                      depth={0}
                    />
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </nav>

      {/* Prev/Next at bottom */}
      <div className="flex-shrink-0 px-3 py-3 border-t border-gray-100">
        <NavigationButtons
          onPrev={onPrev}
          onNext={onNext}
          hasPrev={hasPrev}
          hasNext={hasNext}
          currentIndex={currentIndex}
          totalSections={totalSections}
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 flex-shrink-0 bg-white border-r border-gray-200 h-screen sticky top-0">
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <aside className="relative flex flex-col w-72 bg-white h-full shadow-2xl z-10">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
