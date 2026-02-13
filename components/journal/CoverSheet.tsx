'use client';

import { useEffect, useState } from 'react';
import { User, Building2, Calendar, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CoverSheetData } from '@/types/journal';

interface CoverSheetProps {
  data: CoverSheetData;
  moduleId: string;
  coverTitleClass?: string;
}

const STORAGE_KEY_PREFIX = 'journal-cover-';

function Field({
  label,
  value,
  onChange,
  icon: Icon,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  icon?: React.ElementType;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        )}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? `Enter ${label.toLowerCase()}...`}
          className={cn(
            'w-full border border-gray-200 rounded-lg py-2.5 text-sm text-gray-800',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
            'placeholder-gray-300 bg-white transition-all',
            Icon ? 'pl-9 pr-3' : 'px-3'
          )}
        />
      </div>
    </div>
  );
}

export default function CoverSheet({ data, moduleId, coverTitleClass }: CoverSheetProps) {
  const storageKey = `${STORAGE_KEY_PREFIX}${moduleId}`;

  const [fields, setFields] = useState<CoverSheetData>(data);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setFields((prev) => ({ ...prev, ...parsed }));
      } catch {
        // ignore parse errors
      }
    }
  }, [storageKey]);

  // Persist editable fields on change
  const updateField = (key: keyof CoverSheetData, value: string) => {
    setFields((prev) => {
      const next = { ...prev, [key]: value };
      const editableKeys: (keyof CoverSheetData)[] = [
        'studentName',
        'studentId',
        'intakeCohort',
        'submissionDate',
        'supervisorName',
        'placementCenter',
        'assessorName',
        'contactDetails',
      ];
      const toStore: Partial<CoverSheetData> = {};
      for (const k of editableKeys) {
        toStore[k] = next[k];
      }
      localStorage.setItem(storageKey, JSON.stringify(toStore));
      return next;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header card */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-br from-blue-700 to-teal-600 px-8 py-8 text-center">
          <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-1">
            {fields.institution}
          </p>
          <h1 className={cn('text-2xl font-bold mb-1', coverTitleClass ?? 'text-white')}>{fields.moduleName}</h1>
          <p className="text-blue-200 text-sm font-medium">{fields.moduleCode}</p>
          <div className="mt-3 inline-block bg-white/15 rounded-full px-4 py-1">
            <p className="text-white text-sm font-semibold">{fields.assignmentTitle}</p>
          </div>
        </div>

        <div className="bg-white px-8 py-2 border-b border-gray-100">
          <p className="text-center text-xs text-gray-400 font-medium">
            {fields.program} &middot; {fields.moduleNumber}
          </p>
        </div>
      </div>

      {/* Editable fields grid */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-5">
          Candidate Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label="Name of Candidate"
            value={fields.studentName}
            onChange={(v) => updateField('studentName', v)}
            icon={User}
            placeholder="Enter your full name..."
          />
          <Field
            label="Host Organisation"
            value={fields.placementCenter}
            onChange={(v) => updateField('placementCenter', v)}
            icon={Building2}
            placeholder="Enter host organisation..."
          />
          <Field
            label="Name of Assessor"
            value={fields.assessorName}
            onChange={(v) => updateField('assessorName', v)}
            icon={User}
            placeholder="Enter assessor name..."
          />
          <Field
            label="Contact Details"
            value={fields.contactDetails}
            onChange={(v) => updateField('contactDetails', v)}
            icon={Phone}
            placeholder="Enter contact details..."
          />
          <Field
            label="Name of IA Supervisor"
            value={fields.supervisorName}
            onChange={(v) => updateField('supervisorName', v)}
            icon={User}
            placeholder="Enter IA supervisor name..."
          />
          <Field
            label="Date of Submission"
            value={fields.submissionDate}
            onChange={(v) => updateField('submissionDate', v)}
            icon={Calendar}
            placeholder="DD/MM/YYYY"
          />
        </div>
      </div>

      {/* Declaration */}
      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
          Candidate&apos;s Declaration
        </h2>
        <div className="space-y-3">
          <div className="flex gap-3 text-sm text-gray-600">
            <span className="font-semibold text-gray-700 flex-shrink-0">a.</span>
            <p>
              I, hereby declare that all the entries in this journal are my own effort and do not
              involve plagiarism or works of other people whose services I have engaged.
            </p>
          </div>
          <div className="flex gap-3 text-sm text-gray-600">
            <span className="font-semibold text-gray-700 flex-shrink-0">b.</span>
            <p>
              I have not allowed, and will not allow anyone to copy any of my Written Assignments
              with the intention of passing it off as his/her own works.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-1">Signature</p>
            <div className="border-b-2 border-gray-400 min-h-[40px]" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-1">Date</p>
            <div className="border-b-2 border-gray-400 min-h-[40px]" />
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-400 italic">
          *Attach this Assignment Cover page to your RP journal.
        </p>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-400 text-center">
        Copyright &copy; Tsao Foundation. Contents not to be reproduced or disseminated without
        permission.
      </p>
    </div>
  );
}
