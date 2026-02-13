'use client';

import { Menu } from 'lucide-react';
import DownloadButton from '@/components/ui/DownloadButton';
import SearchBar from '@/components/layout/SearchBar';
import type { SearchIndexEntry, SectionId } from '@/types/journal';

interface HeaderProps {
  moduleName: string;
  moduleCode: string;
  searchIndex: SearchIndexEntry[];
  onNavigate: (sectionId: SectionId) => void;
  onSidebarToggle: () => void;
  printTargetId: string;
  pdfFilename: string;
}

export default function Header({
  moduleName,
  moduleCode,
  searchIndex,
  onNavigate,
  onSidebarToggle,
  printTargetId,
  pdfFilename,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Mobile menu toggle */}
        <button
          onClick={onSidebarToggle}
          aria-label="Toggle sidebar"
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Breadcrumb */}
        <div className="hidden sm:flex flex-col min-w-0 flex-1">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-widest truncate">
            {moduleCode}
          </span>
          <span className="text-sm font-semibold text-gray-800 truncate">{moduleName}</span>
        </div>
        <div className="sm:hidden flex-1 min-w-0">
          <span className="text-sm font-semibold text-gray-800 truncate">{moduleCode}</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xs">
          <SearchBar searchIndex={searchIndex} onNavigate={onNavigate} />
        </div>

        {/* Download */}
        <DownloadButton targetId={printTargetId} filename={pdfFilename} />
      </div>
    </header>
  );
}
