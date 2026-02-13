'use client';

import { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SearchIndexEntry, SectionId } from '@/types/journal';

interface SearchBarProps {
  searchIndex: SearchIndexEntry[];
  onNavigate: (sectionId: SectionId) => void;
  className?: string;
}

export default function SearchBar({ searchIndex, onNavigate, className }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [deferredQuery, setDeferredQuery] = useState('');
  const [open, setOpen] = useState(false);

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => setDeferredQuery(query), 200);
    return () => clearTimeout(timer);
  }, [query]);

  const results =
    deferredQuery.trim().length > 0
      ? searchIndex.filter((e) => e.textContent.includes(deferredQuery.trim().toLowerCase()))
      : [];

  const handleSelect = (sectionId: SectionId) => {
    onNavigate(sectionId);
    setQuery('');
    setDeferredQuery('');
    setOpen(false);
  };

  return (
    <div className={cn('relative', className)}>
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Search journal..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          className={cn(
            'w-full pl-9 pr-8 py-2 rounded-lg border border-gray-200 bg-white',
            'text-sm text-gray-700 placeholder-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
            'transition-all'
          )}
        />
        {query && (
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              setQuery('');
              setDeferredQuery('');
            }}
            className="absolute right-3 text-gray-400 hover:text-gray-600"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {open && deferredQuery.trim() && (
        <div className="absolute top-full mt-1 left-0 right-0 z-50 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          {results.length > 0 ? (
            <>
              <div className="px-3 py-1.5 bg-gray-50 border-b border-gray-100">
                <span className="text-xs text-gray-500 font-medium">
                  {results.length} result{results.length !== 1 ? 's' : ''}
                </span>
              </div>
              <ul className="max-h-52 overflow-y-auto">
                {results.map((entry) => (
                  <li key={entry.sectionId}>
                    <button
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => handleSelect(entry.sectionId)}
                      className="w-full text-left px-3 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                    >
                      {entry.label}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="px-3 py-3 text-sm text-gray-400">No results found.</div>
          )}
        </div>
      )}
    </div>
  );
}
