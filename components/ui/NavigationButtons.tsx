import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  currentIndex: number;
  totalSections: number;
  className?: string;
}

export default function NavigationButtons({
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  currentIndex,
  totalSections,
  className,
}: NavigationButtonsProps) {
  return (
    <div className={cn('flex items-center justify-between gap-2', className)}>
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        aria-label="Previous section"
        className={cn(
          'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all',
          hasPrev
            ? 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 shadow-sm'
            : 'bg-gray-50 border border-gray-100 text-gray-300 cursor-not-allowed'
        )}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Prev</span>
      </button>

      <span className="text-xs font-medium text-gray-500 tabular-nums">
        {currentIndex + 1} / {totalSections}
      </span>

      <button
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next section"
        className={cn(
          'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all',
          hasNext
            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
            : 'bg-gray-50 border border-gray-100 text-gray-300 cursor-not-allowed'
        )}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
