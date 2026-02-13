import { MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PromptItem } from '@/types/journal';

interface JournalPromptProps {
  prompts: PromptItem[];
  className?: string;
}

export default function JournalPrompt({ prompts, className }: JournalPromptProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-teal-200 bg-teal-50 p-5 space-y-4',
        className
      )}
    >
      <div className="flex items-center gap-2 mb-1">
        <MessageSquare className="w-4 h-4 text-teal-600 flex-shrink-0" />
        <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
          Self-Reflection Journal Prompts
        </span>
      </div>
      {prompts.map((prompt) => (
        <p key={prompt.id} className="text-sm text-teal-900 leading-relaxed font-medium">
          {prompt.promptText}
        </p>
      ))}
    </div>
  );
}
