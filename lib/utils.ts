import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type {
  StudentReflectionContent,
  ReflectionComponent,
  EthicModelData,
  AacFeedbackFormData,
  ResolutionProtocolData,
  DescriptionBlockData,
  RiskMatrixData,
  FireExtinguisherGuideComponent,
  SwpPosterComponent,
  InfoTableComponent,
  ChecklistTableComponent,
  ContactListComponent,
  RiskActionTableComponent,
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

    case 'risk-matrix': {
      const data = component.content as RiskMatrixData;
      return [
        data.title ?? '',
        ...data.severityLabels.flatMap((item) => [item.label, item.description]),
        ...data.likelihoodLabels.flatMap((item) => [item.label, item.description]),
        ...data.cells.flatMap((row) => row.map(String)),
      ]
        .join(' ')
        .toLowerCase();
    }

    case 'risk-action-table': {
      const data = component as RiskActionTableComponent;
      return data.rows
        .flatMap((row) => [row.level, row.acceptability, row.actions])
        .join(' ')
        .toLowerCase();
    }

    case 'fire-extinguisher-guide': {
      const data = component as FireExtinguisherGuideComponent;
      return [
        data.title,
        ...data.rows.flatMap((row) => [row.type, row.effectiveAgainst, row.warning ?? '']),
      ]
        .join(' ')
        .toLowerCase();
    }

    case 'swp-poster': {
      const data = component as SwpPosterComponent;
      return [
        data.title,
        data.subtitle,
        data.goal,
        data.riskReminder ?? '',
        ...data.phases.flatMap((phase) => [phase.phase, phase.title, ...phase.items]),
      ]
        .join(' ')
        .toLowerCase();
    }

    case 'info-table': {
      const data = component as InfoTableComponent;
      return [
        data.title ?? '',
        ...data.headers,
        ...data.rows.flatMap((row) => data.headers.map((header) => row[header] ?? '')),
      ]
        .join(' ')
        .toLowerCase();
    }

    case 'checklist-table': {
      const data = component as ChecklistTableComponent;
      return [
        data.title,
        ...data.sections.flatMap((section) => [
          section.sectionTitle,
          ...section.items.flatMap((item) => [item.label, item.requirement]),
        ]),
      ]
        .join(' ')
        .toLowerCase();
    }

    case 'contact-list': {
      const data = component as ContactListComponent;
      return [
        data.title,
        ...data.groups.flatMap((group) => [
          group.groupTitle,
          ...group.headers,
          ...group.rows.flat(),
        ]),
      ]
        .join(' ')
        .toLowerCase();
    }

    default:
      return '';
  }
}
