'use client';

import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import type {
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

// Dynamic import — mermaid is a huge library; load it only in the browser
const MermaidDiagram = dynamic(() => import('@/components/journal/MermaidDiagram'), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 flex items-center justify-center text-sm text-gray-400">
      Loading diagram…
    </div>
  ),
});

interface IncidentReportProps {
  components: ReflectionComponent[];
  className?: string;
}

function ParagraphBlock({ content }: { content: string }) {
  return <p className="text-sm text-gray-700 leading-relaxed">{content}</p>;
}

function IncidentNarrativeBlock({ content }: { content: string }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
      <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans leading-relaxed">
        {content}
      </pre>
    </div>
  );
}

function EthicModelBlock({ data }: { data: EthicModelData }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-700 mb-2">
        Evaluation of this Narrative (ETHIC Model Applied)
      </h4>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="text-left px-4 py-2.5 font-semibold w-1/3">Criterion</th>
              <th className="text-left px-4 py-2.5 font-semibold">Evaluation</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                <td className="px-4 py-3 font-medium text-blue-800 align-top">{row.criterion}</td>
                <td className="px-4 py-3 text-gray-700 align-top">{row.evaluation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SignatureBlock({ content }: { content: string }) {
  return (
    <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4">
      <pre className="text-sm text-gray-600 whitespace-pre-wrap font-sans leading-relaxed">
        {content}
      </pre>
    </div>
  );
}

function BulletListBlock({ heading, items }: { heading?: string; items: string[] }) {
  return (
    <div>
      {heading && (
        <h4 className="text-sm font-semibold text-gray-700 mb-2">{heading}</h4>
      )}
      <ul className="space-y-1.5 list-none">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
            <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AacFeedbackFormBlock({ data }: { data: AacFeedbackFormData }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-700 to-teal-600 px-5 py-3">
        <h3 className="text-base font-bold text-white">{data.formTitle}</h3>
        {data.intro && <p className="text-xs text-blue-100 mt-0.5">{data.intro}</p>}
      </div>
      <div className="divide-y divide-gray-100">
        {data.sections.map((section) => (
          <div key={section.sectionNumber} className="p-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-3">
              Section {section.sectionNumber}: {section.sectionTitle}
            </h4>
            {section.intro && (
              <p className="text-xs text-gray-500 italic mb-3">{section.intro}</p>
            )}
            <div className="space-y-3">
              {section.fields.map((field, fi) => {
                if (field.type === 'checkboxes') {
                  return (
                    <div key={fi}>
                      {field.checkboxOptions?.map((opt, oi) => (
                        <label
                          key={oi}
                          className="flex items-start gap-2 text-sm text-gray-700 mb-1.5 cursor-pointer"
                        >
                          <span className="mt-0.5 w-4 h-4 border border-gray-400 rounded flex-shrink-0 bg-white" />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  );
                }
                if (field.type === 'rating-table') {
                  return (
                    <div key={fi} className="overflow-x-auto">
                      <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="text-left px-3 py-2 font-medium text-gray-700">
                              Indicator
                            </th>
                            {[1, 2, 3, 4, 5].map((n) => (
                              <th
                                key={n}
                                className="px-2 py-2 text-center font-medium text-gray-600 w-10"
                              >
                                {n}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {field.ratingIndicators?.map((indicator, ii) => (
                            <tr
                              key={ii}
                              className={ii % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                            >
                              <td className="px-3 py-2 text-gray-700">{indicator}</td>
                              {[1, 2, 3, 4, 5].map((n) => (
                                <td key={n} className="px-2 py-2 text-center">
                                  <span className="inline-block w-4 h-4 border border-gray-300 rounded-full" />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                if (field.type === 'textarea') {
                  return (
                    <div key={fi}>
                      <p className="text-xs font-medium text-gray-600 mb-1">{field.label}</p>
                      <div className="w-full border border-gray-300 rounded-lg p-3 min-h-[80px] bg-gray-50">
                        <p className="text-xs text-gray-400 whitespace-pre-wrap">{field.value}</p>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={fi} className="flex items-center gap-3">
                    <span className="text-xs font-medium text-gray-600 w-40 flex-shrink-0">
                      {field.label}:
                    </span>
                    <div className="flex-1 border-b border-gray-300 pb-0.5 min-h-[24px]" />
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {data.signatureBlock && (
          <div className="p-4">
            <p className="text-sm text-gray-600">{data.signatureBlock}</p>
          </div>
        )}

        {data.internalUseBlock && (
          <div className="p-4 bg-yellow-50">
            <h4 className="text-xs font-semibold text-yellow-800 uppercase tracking-wide mb-2">
              Internal Use Only
            </h4>
            <pre className="text-xs text-gray-600 whitespace-pre-wrap font-sans">
              {data.internalUseBlock}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

function ResolutionProtocolBlock({ data }: { data: ResolutionProtocolData }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-gray-800 mb-1">{data.title}</h3>
      <p className="text-xs text-gray-500 mb-3">{data.intro}</p>
      <div className="overflow-x-auto rounded-lg border border-blue-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
              <th className="text-left px-4 py-2.5 font-semibold">Step</th>
              <th className="text-left px-4 py-2.5 font-semibold">Action</th>
              <th className="text-left px-4 py-2.5 font-semibold">Responsibility</th>
            </tr>
          </thead>
          <tbody>
            {data.steps.map((step, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                <td className="px-4 py-3 font-semibold text-blue-700 align-top whitespace-nowrap">
                  {step.stepNumber}. {step.stepTitle}
                </td>
                <td className="px-4 py-3 text-gray-700 align-top">{step.action}</td>
                <td className="px-4 py-3 text-gray-600 align-top whitespace-nowrap">
                  {step.responsibility}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DescriptionBlockComp({ data }: { data: DescriptionBlockData }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h4 className="text-sm font-bold text-gray-800 mb-1">{data.title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{data.description}</p>
      {data.bulletPoints && data.bulletPoints.length > 0 && (
        <ul className="mt-2 space-y-1">
          {data.bulletPoints.map((bp, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-600">
              <span className="text-teal-500 flex-shrink-0 mt-0.5">•</span>
              <span>{bp}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── WSH-specific render blocks ────────────────────────────────────────────

function getRiskLevel(value: number): 'low' | 'medium' | 'high' {
  if (value >= 15) return 'high';
  if (value >= 5) return 'medium';
  return 'low';
}

const riskColors: Record<string, string> = {
  high: 'bg-red-500 text-white font-bold',
  medium: 'bg-yellow-400 text-gray-900 font-semibold',
  low: 'bg-green-500 text-white font-semibold',
};

function RiskMatrixBlock({ data }: { data: RiskMatrixData }) {
  return (
    <div>
      {data.title && (
        <h4 className="text-sm font-bold text-gray-800 mb-3">{data.title}</h4>
      )}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr>
              <th className="bg-slate-700 text-white px-3 py-2.5 text-left font-semibold w-36">
                Severity ↓ / Likelihood →
              </th>
              {[
                { level: 1, label: 'Rare (1)' },
                { level: 2, label: 'Remote (2)' },
                { level: 3, label: 'Occasional (3)' },
                { level: 4, label: 'Frequent (4)' },
                { level: 5, label: 'Almost Certain (5)' },
              ].map((l) => (
                <th
                  key={l.level}
                  className="bg-slate-600 text-white px-2 py-2.5 text-center font-semibold"
                >
                  {l.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.cells.map((row, rowIdx) => {
              const sevLevel = 5 - rowIdx;
              const sevLabel = data.severityLabels.find((s) => s.level === sevLevel);
              return (
                <tr key={rowIdx}>
                  <td className="bg-slate-100 px-3 py-2 font-semibold text-slate-700 border border-slate-200">
                    <div className="font-bold">{sevLabel?.label} ({sevLevel})</div>
                    <div className="text-xs text-slate-500 font-normal">{sevLabel?.description}</div>
                  </td>
                  {row.map((cell, colIdx) => {
                    const level = getRiskLevel(cell);
                    return (
                      <td
                        key={colIdx}
                        className={cn(
                          'px-2 py-2.5 text-center border border-white/30 text-sm',
                          riskColors[level]
                        )}
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex gap-4 mt-3 flex-wrap">
        <div className="flex items-center gap-1.5 text-xs text-gray-600">
          <span className="w-4 h-4 rounded bg-green-500 inline-block" />
          Low (&lt;5) — Acceptable
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-600">
          <span className="w-4 h-4 rounded bg-yellow-400 inline-block" />
          Medium (5–14) — Tolerable
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-600">
          <span className="w-4 h-4 rounded bg-red-500 inline-block" />
          High (&gt;14) — Not Acceptable
        </div>
      </div>
    </div>
  );
}

function RiskActionTableBlock({ data }: { data: RiskActionTableComponent }) {
  const colorMap: Record<string, string> = {
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    red: 'bg-red-100 text-red-800',
  };
  return (
    <div>
      <h4 className="text-sm font-bold text-gray-800 mb-2">Action for Risk Levels (Risk Evaluation)</h4>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="text-left px-4 py-2.5 font-semibold w-36">Risk Level</th>
              <th className="text-left px-4 py-2.5 font-semibold w-32">Risk Acceptability</th>
              <th className="text-left px-4 py-2.5 font-semibold">Recommended Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 align-top">
                  <span className={cn('inline-block px-2 py-1 rounded-full text-xs font-bold', colorMap[row.color])}>
                    {row.level}
                  </span>
                </td>
                <td className="px-4 py-3 align-top font-medium text-gray-700">{row.acceptability}</td>
                <td className="px-4 py-3 align-top text-gray-600 text-sm">{row.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FireExtinguisherGuideBlock({ comp }: { comp: FireExtinguisherGuideComponent }) {
  return (
    <div className="rounded-xl border border-orange-200 overflow-hidden shadow-sm">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 px-4 py-2.5">
        <h4 className="text-sm font-bold text-white">{comp.title}</h4>
      </div>
      <div className="divide-y divide-gray-100">
        {comp.rows.map((row, i) => (
          <div key={i} className={cn('p-4 flex gap-4', row.color)}>
            <div className="flex-shrink-0 w-28">
              <span className="text-sm font-bold text-gray-800">{row.type}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700">{row.effectiveAgainst}</p>
              {row.warning && (
                <p className="text-xs text-red-700 font-semibold mt-1">⚠ {row.warning}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const phaseColors = [
  'from-orange-500 to-orange-600',
  'from-amber-500 to-orange-500',
  'from-red-500 to-red-600',
  'from-green-600 to-teal-600',
];

function SwpPosterBlock({ comp }: { comp: SwpPosterComponent }) {
  return (
    /* A4 card — bounded box, 210mm × 297mm at 96dpi ≈ 794px × 1123px, scaled to fit container */
    <div className="flex justify-center my-4">
      <div
        className="relative bg-white border-2 border-slate-300 shadow-xl rounded-xl overflow-hidden"
        style={{ width: '100%', maxWidth: 680 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 via-orange-900 to-red-800 px-6 py-5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-300 mb-1">Safe Work Procedure</p>
          <h2 className="text-2xl font-extrabold text-white leading-tight">{comp.title}</h2>
          <p className="text-base text-orange-200 font-semibold mt-1">{comp.subtitle}</p>
        </div>

        {/* Goal banner */}
        <div className="bg-orange-50 border-b border-orange-200 px-6 py-2.5 text-center">
          <p className="text-xs text-orange-800 font-semibold">
            <span className="font-bold">Goal: </span>{comp.goal}
          </p>
        </div>

        {/* Phases grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {comp.phases.map((phase, i) => (
            <div key={i} className="p-5">
              <div className={cn('inline-flex items-center gap-2 rounded-full px-3 py-1 mb-3 text-white text-xs font-bold bg-gradient-to-r', phaseColors[i % phaseColors.length])}>
                PHASE {phase.phase}
              </div>
              <h3 className="text-sm font-bold text-gray-800 mb-2">{phase.title}</h3>
              <ul className="space-y-1.5">
                {phase.items.map((item, j) => {
                  const [label, ...rest] = item.split(':');
                  const hasLabel = rest.length > 0;
                  return (
                    <li key={j} className="flex gap-2 text-xs text-gray-700 leading-relaxed">
                      <span className="text-orange-500 flex-shrink-0 mt-0.5 font-bold">▸</span>
                      <span>
                        {hasLabel ? <><strong>{label}:</strong>{rest.join(':')}</> : item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Risk reminder footer */}
        {comp.riskReminder && (
          <div className="bg-red-50 border-t-2 border-red-200 px-6 py-3 text-center">
            <p className="text-xs text-red-800 font-semibold">
              <span className="font-extrabold text-red-600">⚠ Risk Reminder: </span>{comp.riskReminder}
            </p>
          </div>
        )}

        {/* Bounding box border indicator */}
        <div className="absolute inset-0 border-4 border-transparent ring-2 ring-inset ring-slate-200 pointer-events-none rounded-xl" />
      </div>
    </div>
  );
}

function InfoTableBlock({ comp }: { comp: InfoTableComponent }) {
  return (
    <div>
      {comp.title && (
        <h4 className="text-sm font-bold text-gray-800 mb-2">{comp.title}</h4>
      )}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
              {comp.headers.map((h, i) => (
                <th key={i} className="text-left px-4 py-2.5 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comp.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-orange-50'}>
                {comp.headers.map((h, j) => (
                  <td key={j} className="px-4 py-3 text-gray-700 align-top">{row[h]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ChecklistTableBlock({ comp }: { comp: ChecklistTableComponent }) {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-4 py-3">
        <h4 className="text-sm font-bold text-white">{comp.title}</h4>
      </div>
      <div className="divide-y divide-gray-100">
        {comp.sections.map((section, si) => (
          <div key={si}>
            <div className="bg-orange-50 px-4 py-2 border-b border-orange-100">
              <h5 className="text-xs font-bold text-orange-800 uppercase tracking-wide">{section.sectionTitle}</h5>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2 font-semibold text-gray-600 text-xs w-48">Audit Item</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-600 text-xs">Compliance Requirement</th>
                  <th className="text-center px-3 py-2 font-semibold text-gray-600 text-xs w-16">Y / N</th>
                </tr>
              </thead>
              <tbody>
                {section.items.map((item, ii) => (
                  <tr key={ii} className={ii % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-700 align-top text-xs">{item.label}</td>
                    <td className="px-4 py-3 text-gray-600 align-top text-xs">{item.requirement}</td>
                    <td className="px-3 py-3 text-center align-top">
                      <span className="inline-block w-5 h-5 border border-gray-400 rounded" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactListBlock({ comp }: { comp: ContactListComponent }) {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="bg-gradient-to-r from-red-700 to-orange-600 px-4 py-3">
        <h4 className="text-sm font-bold text-white">{comp.title}</h4>
      </div>
      <div className="divide-y divide-gray-100">
        {comp.groups.map((group, gi) => (
          <div key={gi}>
            <div className="bg-red-50 px-4 py-2 border-b border-red-100">
              <h5 className="text-xs font-bold text-red-800 uppercase tracking-wide">{group.groupTitle}</h5>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    {group.headers.map((h, i) => (
                      <th key={i} className="text-left px-4 py-2 font-semibold text-gray-600 text-xs">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {group.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {row.map((cell, ci) => (
                        <td key={ci} className={cn('px-4 py-3 align-top text-sm', ci === row.length - 1 ? 'font-mono font-semibold text-red-700' : 'text-gray-700')}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IncidentReport({ components, className }: IncidentReportProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {components.map((comp, i) => {
        switch (comp.kind) {
          case 'paragraph':
            return <ParagraphBlock key={i} content={comp.content as string} />;
          case 'incident-narrative':
            return <IncidentNarrativeBlock key={i} content={comp.content as string} />;
          case 'ethic-model':
            return <EthicModelBlock key={i} data={comp.content as EthicModelData} />;
          case 'signature':
            return <SignatureBlock key={i} content={comp.content as string} />;
          case 'bullet-list':
            return (
              <BulletListBlock
                key={i}
                heading={comp.heading}
                items={comp.content as string[]}
              />
            );
          case 'aac-feedback-form':
            return <AacFeedbackFormBlock key={i} data={comp.content as AacFeedbackFormData} />;
          case 'resolution-protocol':
            return (
              <ResolutionProtocolBlock key={i} data={comp.content as ResolutionProtocolData} />
            );
          case 'description-block':
            return <DescriptionBlockComp key={i} data={comp.content as DescriptionBlockData} />;
          case 'risk-matrix':
            return <RiskMatrixBlock key={i} data={comp.content as RiskMatrixData} />;
          case 'risk-action-table':
            return <RiskActionTableBlock key={i} data={comp as RiskActionTableComponent} />;
          case 'mermaid-diagram':
            return <MermaidDiagram key={i} title={comp.title} code={comp.code} />;
          case 'fire-extinguisher-guide':
            return <FireExtinguisherGuideBlock key={i} comp={comp as FireExtinguisherGuideComponent} />;
          case 'swp-poster':
            return <SwpPosterBlock key={i} comp={comp as SwpPosterComponent} />;
          case 'info-table':
            return <InfoTableBlock key={i} comp={comp as InfoTableComponent} />;
          case 'checklist-table':
            return <ChecklistTableBlock key={i} comp={comp as ChecklistTableComponent} />;
          case 'contact-list':
            return <ContactListBlock key={i} comp={comp as ContactListComponent} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
