// ─── Leaf-level content types ─────────────────────────────────────────────

export interface CoverSheetData {
  institution: string;
  program: string;
  moduleCode: string;
  moduleName: string;
  moduleNumber: string;
  assignmentTitle: string;
  // Editable by student (persisted in localStorage)
  studentName: string;
  studentId: string;
  intakeCohort: string;
  submissionDate: string;
  supervisorName: string;
  placementCenter: string;
  assessorName: string;
  contactDetails: string;
}

export interface PromptItem {
  id: string;
  promptText: string;
  performanceCriteria?: string;
}

// ─── Discriminated union for composite reflection components ──────────────

export interface ParagraphComponent {
  kind: 'paragraph';
  content: string;
}

export interface IncidentNarrativeComponent {
  kind: 'incident-narrative';
  content: string; // Pre-formatted multiline text
}

export interface EthicModelRow {
  criterion: string;
  evaluation: string;
}

export interface EthicModelData {
  rows: EthicModelRow[];
}

export interface EthicModelComponent {
  kind: 'ethic-model';
  content: EthicModelData;
}

export interface SignatureComponent {
  kind: 'signature';
  content: string;
}

export interface AacFormField {
  label: string;
  value: string;
  type?: 'text' | 'textarea' | 'checkboxes' | 'rating-table';
  checkboxOptions?: string[];
  ratingIndicators?: string[];
}

export interface AacFormSection {
  sectionNumber: number;
  sectionTitle: string;
  intro?: string;
  fields: AacFormField[];
}

export interface AacFeedbackFormData {
  formTitle: string;
  intro?: string;
  sections: AacFormSection[];
  signatureBlock?: string;
  internalUseBlock?: string;
}

export interface AacFeedbackFormComponent {
  kind: 'aac-feedback-form';
  content: AacFeedbackFormData;
}

export interface ResolutionStep {
  stepNumber: number;
  stepTitle: string;
  action: string;
  responsibility: string;
}

export interface ResolutionProtocolData {
  title: string;
  intro: string;
  steps: ResolutionStep[];
}

export interface ResolutionProtocolComponent {
  kind: 'resolution-protocol';
  content: ResolutionProtocolData;
}

export interface DescriptionBlockData {
  title: string;
  description: string;
  bulletPoints?: string[];
}

export interface DescriptionBlockComponent {
  kind: 'description-block';
  content: DescriptionBlockData;
}

export interface BulletListComponent {
  kind: 'bullet-list';
  heading?: string;
  content: string[];
}

// ─── WSH-specific component types ─────────────────────────────────────────

export interface RiskMatrixCell {
  value: number;
  level: 'low' | 'medium' | 'high';
}

export interface RiskMatrixData {
  title?: string;
  severityLabels: Array<{ level: number; label: string; description: string }>;
  likelihoodLabels: Array<{ level: number; label: string; description: string }>;
  cells: number[][]; // [severity row 5..1][likelihood col 1..5]
}

export interface RiskMatrixComponent {
  kind: 'risk-matrix';
  content: RiskMatrixData;
}

export interface MermaidDiagramComponent {
  kind: 'mermaid-diagram';
  title: string;
  code: string;
}

export interface FireExtinguisherRow {
  type: string;
  effectiveAgainst: string;
  warning?: string;
  color: string; // tailwind bg color class
}

export interface FireExtinguisherGuideComponent {
  kind: 'fire-extinguisher-guide';
  title: string;
  rows: FireExtinguisherRow[];
}

export interface SwpPhase {
  phase: string;
  title: string;
  items: string[];
}

export interface SwpPosterComponent {
  kind: 'swp-poster';
  title: string;
  subtitle: string;
  goal: string;
  phases: SwpPhase[];
  riskReminder?: string;
}

export interface InfoTableRow {
  [key: string]: string;
}

export interface InfoTableComponent {
  kind: 'info-table';
  title?: string;
  headers: string[];
  rows: InfoTableRow[];
}

export interface ChecklistSection {
  sectionTitle: string;
  items: Array<{ label: string; requirement: string }>;
}

export interface ChecklistTableComponent {
  kind: 'checklist-table';
  title: string;
  sections: ChecklistSection[];
}

export interface ContactGroup {
  groupTitle: string;
  headers: string[];
  rows: string[][];
}

export interface ContactListComponent {
  kind: 'contact-list';
  title: string;
  groups: ContactGroup[];
}

export interface RiskActionTableComponent {
  kind: 'risk-action-table';
  title?: string;
  rows: Array<{ level: string; color: 'green' | 'yellow' | 'red'; acceptability: string; actions: string }>;
}

export type ReflectionComponent =
  | ParagraphComponent
  | IncidentNarrativeComponent
  | EthicModelComponent
  | SignatureComponent
  | AacFeedbackFormComponent
  | ResolutionProtocolComponent
  | DescriptionBlockComponent
  | BulletListComponent
  | RiskMatrixComponent
  | MermaidDiagramComponent
  | FireExtinguisherGuideComponent
  | SwpPosterComponent
  | InfoTableComponent
  | ChecklistTableComponent
  | ContactListComponent
  | RiskActionTableComponent;

// ─── Content container ────────────────────────────────────────────────────

export interface StudentReflectionContent {
  type: 'text' | 'composite';
  text?: string;
  components?: ReflectionComponent[];
}

// ─── Mid-level structural types ───────────────────────────────────────────

export interface JournalEntry {
  id: string;
  prompts: PromptItem[];
  studentReflection: StudentReflectionContent;
}

export type SubSectionType = 'knowledge' | 'abilities';

export interface SubSection {
  id: string;                     // "lu4-k5" | "lu4-a4" | "lu4-a5"
  type: SubSectionType;
  label: string;                  // "Knowledge (K5)" | "Abilities (A4)"
  performanceCriteriaTitle: string;
  entries: JournalEntry[];
}

export interface LearningUnit {
  id: string;                     // "lu4"
  title: string;
  shortTitle: string;             // "Learning Unit 4"
  headerPromptEntry?: JournalEntry; // LU-level prompt (Prompt 1) before sub-sections
  subSections: SubSection[];
}

// ─── Theme ────────────────────────────────────────────────────────────────

export interface ModuleTheme {
  primary: string;                // Tailwind gradient classes
  accent: string;                 // "blue" | "teal" | "purple"
  knowledgeBadgeClass: string;
  abilitiesBadgeClass: string;
  luHeaderBgClass: string;
  luIconClass?: string;           // Icon color in LU header (e.g. "text-violet-300")
  promptCardClass: string;
  reflectionCardClass: string;
  sidebarActiveClass: string;
  buttonPrimaryClass: string;
  coverTitleClass?: string;       // Optional gradient override for module name in CoverSheet
}

// ─── Top-level module ─────────────────────────────────────────────────────

export type SectionId = 'cover' | string;

export interface JournalModule {
  moduleId: string;
  moduleCode: string;
  moduleName: string;
  moduleNumber: string;
  theme: ModuleTheme;
  coverSheet: CoverSheetData;
  learningUnits: LearningUnit[];
}

// ─── Sidebar / navigation types ───────────────────────────────────────────

export interface SidebarItem {
  id: SectionId;
  label: string;
  icon?: string;
  children?: SidebarItem[];
}

export interface SidebarGroup {
  groupId: string;
  groupLabel: string;
  moduleId: string;
  items: SidebarItem[];
}

// ─── Modules registry ─────────────────────────────────────────────────────

export interface ModuleRegistryEntry {
  moduleId: string;
  moduleCode: string;
  moduleName: string;
  moduleNumber: string;
  firstSectionId: SectionId;
}

// ─── Search ───────────────────────────────────────────────────────────────

export interface SearchIndexEntry {
  sectionId: SectionId;
  label: string;
  textContent: string;
}
