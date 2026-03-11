import { newContentJournal2Raw, newContentJournal2SourceName } from '@/data/content-updates/new-content-journal-2';
import type {
  DescriptionBlockComponent,
  JournalEntry,
  JournalModule,
  ReflectionComponent,
  StudentReflectionContent,
} from '@/types/journal';

type UpdatePlacement = 'within' | 'after' | 'append';

interface ParsedContentUpdate {
  sourceName: string;
  moduleNumber: string;
  moduleTitle: string;
  learningUnitNumber: number;
  subSectionLabel: string;
  placement: UpdatePlacement;
  anchorTitle?: string;
  text: string;
}

function normalizeForMatch(value: string): string {
  return value
    .toLowerCase()
    .replace(/standardisation/g, 'standardization')
    .replace(/\bsection\b/g, ' ')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function titlesMatch(left: string, right: string): boolean {
  const normalizedLeft = normalizeForMatch(left);
  const normalizedRight = normalizeForMatch(right);
  return (
    normalizedLeft === normalizedRight ||
    normalizedLeft.includes(normalizedRight) ||
    normalizedRight.includes(normalizedLeft)
  );
}

function parseInstructionHeader(line: string) {
  const match = line.match(
    /^Learning Unit\s+(\d+)\s*->\s*(Knowledge|Abilities)\s*\(([^)]+)\)(?:\s*(?:->\s*)?(within|after)\s*"(.+)")?$/i
  );

  if (!match) {
    throw new Error(`Unsupported content update instruction header: ${line}`);
  }

  const [, learningUnitNumber, sectionType, sectionCode, placement, anchorTitle] = match;

  return {
    learningUnitNumber: Number.parseInt(learningUnitNumber, 10),
    subSectionLabel: `${sectionType} (${sectionCode})`,
    placement: (placement?.toLowerCase() as UpdatePlacement | undefined) ?? 'append',
    anchorTitle,
  };
}

export function parseContentUpdates(raw: string, sourceName: string): ParsedContentUpdate[] {
  const lines = raw.split(/\r?\n/);
  const updates: ParsedContentUpdate[] = [];

  let index = 0;
  let currentModuleNumber = '';
  let currentModuleTitle = '';

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line || /^-+$/.test(line)) {
      index += 1;
      continue;
    }

    const moduleMatch = line.match(/^(M\d+)\s*-\s*(.+)$/i);
    if (moduleMatch) {
      currentModuleNumber = moduleMatch[1].toUpperCase();
      currentModuleTitle = moduleMatch[2].trim();
      index += 1;
      continue;
    }

    if (!line.startsWith('Learning Unit')) {
      index += 1;
      continue;
    }

    if (!currentModuleNumber) {
      throw new Error(`Missing module heading before instruction: ${line}`);
    }

    const header = parseInstructionHeader(line);
    index += 1;

    while (index < lines.length && !lines[index].trim()) {
      index += 1;
    }

    const addTextLine = lines[index]?.trimStart();
    if (!addTextLine?.startsWith('add text "')) {
      throw new Error(`Expected add text line after instruction: ${line}`);
    }

    const initialText = addTextLine.slice('add text "'.length);
    const textLines: string[] = [initialText];
    index += 1;

    while (index < lines.length && !initialText.trimEnd().endsWith('"')) {
      const currentLine = lines[index];
      textLines.push(currentLine);
      index += 1;
      if (currentLine.trimEnd().endsWith('"')) {
        break;
      }
    }

    const joinedText = textLines.join('\n').replace(/"\s*$/, '');
    const normalizedText = joinedText.replace(/\s*\n\s*/g, ' ').replace(/\s+/g, ' ').trim();

    updates.push({
      sourceName,
      moduleNumber: currentModuleNumber,
      moduleTitle: currentModuleTitle,
      learningUnitNumber: header.learningUnitNumber,
      subSectionLabel: header.subSectionLabel,
      placement: header.placement,
      anchorTitle: header.anchorTitle,
      text: normalizedText,
    });
  }

  return updates;
}

function getComponentTitle(component: ReflectionComponent): string | undefined {
  if (component.kind === 'description-block') {
    return component.content.title;
  }

  if ('title' in component && typeof component.title === 'string') {
    return component.title;
  }

  return undefined;
}

function cloneComponents(components: ReflectionComponent[]): ReflectionComponent[] {
  return components.map((component) => JSON.parse(JSON.stringify(component)) as ReflectionComponent);
}

function appendTextWithinComponent(component: ReflectionComponent, text: string): ReflectionComponent {
  if (component.kind !== 'description-block') {
    throw new Error(`"within" placement only supports description blocks. Received: ${component.kind}`);
  }

  const content = { ...component.content };

  if (content.bulletPoints && content.bulletPoints.length > 0) {
    content.bulletPoints = [...content.bulletPoints, text];
  } else {
    content.description = `${content.description} ${text}`.trim();
  }

  return {
    ...component,
    content,
  } as DescriptionBlockComponent;
}

function updateCompositeEntry(entry: JournalEntry, update: ParsedContentUpdate): JournalEntry {
  const reflection = entry.studentReflection;

  if (reflection.type !== 'composite' || !reflection.components) {
    throw new Error(`Target entry ${entry.id} is not composite content.`);
  }

  const components = cloneComponents(reflection.components);

  if (update.placement === 'append') {
    components.push({ kind: 'paragraph', content: update.text });
    return {
      ...entry,
      studentReflection: {
        ...reflection,
        components,
      },
    };
  }

  const componentIndex = components.findIndex((component) => {
    const title = getComponentTitle(component);
    return title ? titlesMatch(title, update.anchorTitle ?? '') : false;
  });

  if (componentIndex === -1) {
    throw new Error(
      `Could not find anchor "${update.anchorTitle}" for ${update.moduleNumber} Learning Unit ${update.learningUnitNumber} ${update.subSectionLabel}.`
    );
  }

  if (update.placement === 'within') {
    components[componentIndex] = appendTextWithinComponent(components[componentIndex], update.text);
  } else {
    components.splice(componentIndex + 1, 0, { kind: 'paragraph', content: update.text });
  }

  return {
    ...entry,
    studentReflection: {
      ...reflection,
      components,
    },
  };
}

function isReferenceEntry(entry: JournalEntry): boolean {
  return entry.prompts.some((prompt) => normalizeForMatch(prompt.promptText) === 'references');
}

function findEntryIndexByAnchor(entry: JournalEntry, anchorTitle?: string): boolean {
  const reflection: StudentReflectionContent = entry.studentReflection;
  if (reflection.type !== 'composite' || !reflection.components) {
    return false;
  }

  return reflection.components.some((component) => {
    const title = getComponentTitle(component);
    return title ? titlesMatch(title, anchorTitle ?? '') : false;
  });
}

function applyUpdateToModule(moduleData: JournalModule, update: ParsedContentUpdate): JournalModule {
  if (moduleData.moduleNumber !== update.moduleNumber) {
    return moduleData;
  }

  const learningUnitIndex = moduleData.learningUnits.findIndex(
    (learningUnit) => normalizeForMatch(learningUnit.shortTitle) === normalizeForMatch(`Learning Unit ${update.learningUnitNumber}`)
  );

  if (learningUnitIndex === -1) {
    throw new Error(
      `Could not find Learning Unit ${update.learningUnitNumber} in ${moduleData.moduleNumber} (${moduleData.moduleName}).`
    );
  }

  const learningUnit = moduleData.learningUnits[learningUnitIndex];
  let subSectionIndex = learningUnit.subSections.findIndex(
    (subSection) => normalizeForMatch(subSection.label) === normalizeForMatch(update.subSectionLabel)
  );

  if (subSectionIndex === -1 && update.anchorTitle) {
    const matches = learningUnit.subSections
      .map((subSection, index) => ({
        index,
        matchesAnchor: subSection.entries.some((entry) => findEntryIndexByAnchor(entry, update.anchorTitle)),
      }))
      .filter((candidate) => candidate.matchesAnchor);

    if (matches.length === 1) {
      subSectionIndex = matches[0].index;
    }
  }

  if (subSectionIndex === -1) {
    throw new Error(
      `Could not find subsection "${update.subSectionLabel}" in ${moduleData.moduleNumber} ${learningUnit.shortTitle}.`
    );
  }

  const subSection = learningUnit.subSections[subSectionIndex];
  const entryIndex =
    update.placement === 'append'
      ? subSection.entries.findIndex((entry) => !isReferenceEntry(entry))
      : subSection.entries.findIndex((entry) => findEntryIndexByAnchor(entry, update.anchorTitle));

  if (entryIndex === -1) {
    throw new Error(
      `Could not find target entry for ${update.moduleNumber} ${learningUnit.shortTitle} ${subSection.label}.`
    );
  }

  const updatedEntries = subSection.entries.map((entry, currentIndex) =>
    currentIndex === entryIndex ? updateCompositeEntry(entry, update) : entry
  );

  const updatedSubSection = {
    ...subSection,
    entries: updatedEntries,
  };

  const updatedLearningUnit = {
    ...learningUnit,
    subSections: learningUnit.subSections.map((currentSubSection, currentIndex) =>
      currentIndex === subSectionIndex ? updatedSubSection : currentSubSection
    ),
  };

  return {
    ...moduleData,
    learningUnits: moduleData.learningUnits.map((currentLearningUnit, currentIndex) =>
      currentIndex === learningUnitIndex ? updatedLearningUnit : currentLearningUnit
    ),
  };
}

export const parsedJournalContentUpdates = parseContentUpdates(
  newContentJournal2Raw,
  newContentJournal2SourceName
);

export function applyJournalContentUpdates(moduleData: JournalModule): JournalModule {
  return parsedJournalContentUpdates.reduce(applyUpdateToModule, moduleData);
}
