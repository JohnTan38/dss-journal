import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type {
  StudentReflectionContent,
  ReflectionComponent,
  EthicModelData,
  AacFeedbackFormData,
  ResolutionProtocolData,
  DescriptionBlockData,
} from '@/types/journal';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

export function extractReflectionText(content: StudentReflectionContent): string {
  if (content.type === 'text') {
    return (content.text ?? '').toLowerCase();
  }
  if (content.type === 'composite' && content.components) {
    return content.components.map(extractComponentText).join(' ');
  }
  return '';
}

function extractComponentText(component: ReflectionComponent): string {
  switch (component.kind) {
    case 'paragraph':
    case 'incident-narrative':
    case 'signature':
      return (component.content as string).toLowerCase();

    case 'ethic-model': {
      const data = component.content as EthicModelData;
      return data.rows
        .map((r) => `${r.criterion} ${r.evaluation}`)
        .join(' ')
        .toLowerCase();
    }

    case 'aac-feedback-form': {
      const data = component.content as AacFeedbackFormData;
      return [
        data.formTitle,
        data.intro ?? '',
        ...data.sections.flatMap((s) => [
          s.sectionTitle,
          s.intro ?? '',
          ...s.fields.flatMap((f) => [
            f.label,
            f.value,
            ...(f.checkboxOptions ?? []),
            ...(f.ratingIndicators ?? []),
          ]),
        ]),
        data.signatureBlock ?? '',
        data.internalUseBlock ?? '',
      ]
        .join(' ')
        .toLowerCase();
    }

    case 'resolution-protocol': {
      const data = component.content as ResolutionProtocolData;
      return [
        data.title,
        data.intro,
        ...data.steps.flatMap((s) => [s.stepTitle, s.action, s.responsibility]),
      ]
        .join(' ')
        .toLowerCase();
    }

    case 'description-block': {
      const data = component.content as DescriptionBlockData;
      return [data.title, data.description, ...(data.bulletPoints ?? [])]
        .join(' ')
        .toLowerCase();
    }

    case 'bullet-list': {
      return [(component.heading ?? ''), ...component.content].join(' ').toLowerCase();
    }

    default:
      return '';
  }
}
