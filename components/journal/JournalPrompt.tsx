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
        'space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-5',
        className
      )}
    >
      <div className="flex items-center gap-2 mb-1">
        <MessageSquare className="h-4 w-4 flex-shrink-0 text-slate-600" />
        <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
          Self-Reflection Journal Prompts
        </span>
      </div>
      {prompts.map((prompt) => (
        <p key={prompt.id} className="text-sm font-medium leading-relaxed text-slate-800">
          {prompt.promptText}
        </p>
      ))}
    </div>
  );
}
