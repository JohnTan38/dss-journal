import type { ModuleRegistryEntry, JournalModule } from '@/types/journal';
import { sscPve4010 } from '@/data/journals/ssc-pve-4010';
import { sscWsh4008 } from '@/data/journals/ssc-wsh-4008';
import { sscPdv4045 } from '@/data/journals/ssc-pdv-4045';
import { sscCfc4047 } from '@/data/journals/ssc-cfc-4047';
import { sscBin4010 } from '@/data/journals/ssc-bin-4010';
import { sscPmt4022 } from '@/data/journals/ssc-pmt-4022';
import { sscPmt5022 } from '@/data/journals/ssc-pmt-5022';
import { sscPmt4024 } from '@/data/journals/ssc-pmt-4024';
import { sscPol4005 } from '@/data/journals/ssc-pol-4005';
import { applyJournalContentUpdates } from '@/lib/journal-content-updates';

export const modulesRegistry: ModuleRegistryEntry[] = [
  {
    moduleId: 'ssc-pve-4010',
    moduleCode: 'SSC-PVE-4010-1.1',
    moduleName: 'Ethics, Values & Legislation',
    moduleNumber: 'M1',
    firstSectionId: 'cover',
  },
  {
    moduleId: 'ssc-wsh-4008',
    moduleCode: 'SSC-WSH-4008-1.1',
    moduleName: 'Workplace Safety & Health',
    moduleNumber: 'M2',
    firstSectionId: 'cover',
  },
  {
    moduleId: 'ssc-pdv-4045',
    moduleCode: 'SSC-PDV-4045-1.1',
    moduleName: 'People Management',
    moduleNumber: 'M3',
    firstSectionId: 'cover',
  },
  {
    moduleId: 'ssc-cfc-4047',
    moduleCode: 'SSC-CFC-4047-1.1',
    moduleName: 'Volunteer Programme Management',
    moduleNumber: 'M4',
    firstSectionId: 'cover',
  },
  {
    moduleId: 'ssc-bin-4010',
    moduleCode: 'SSC-BIN-4010-1.1',
    moduleName: 'Stakeholder Management',
    moduleNumber: 'M5',
    firstSectionId: 'cover',
  },
  {
    moduleId: 'ssc-pmt-4022',
    moduleCode: 'SSC-PMT-4022-1.1',
    moduleName: 'Social Service Programme Development',
    moduleNumber: 'M6',
    firstSectionId: 'cover',
  },
  {
    moduleId: 'ssc-pmt-5022',
    moduleCode: 'SSC-PMT-5022-1.1',
    moduleName: 'Social Service Programme Development',
    moduleNumber: 'M7',
    firstSectionId: 'cover',
  },
  {
    moduleId: 'ssc-pmt-4024',
    moduleCode: 'SSC-PMT-4024-1.1',
    moduleName: 'Social Service Programme Implementation',
    moduleNumber: 'M8',
    firstSectionId: 'cover',
  },
  {
    moduleId: 'ssc-pol-4005',
    moduleCode: 'SSC-POL-4005-1.1',
    moduleName: 'Social Policy Implementation',
    moduleNumber: 'M9',
    firstSectionId: 'cover',
  },
];

const baseModulesData: Record<string, JournalModule> = {
  'ssc-pve-4010': sscPve4010,
  'ssc-wsh-4008': sscWsh4008,
  'ssc-pdv-4045': sscPdv4045,
  'ssc-cfc-4047': sscCfc4047,
  'ssc-bin-4010': sscBin4010,
  'ssc-pmt-4022': sscPmt4022,
  'ssc-pmt-5022': sscPmt5022,
  'ssc-pmt-4024': sscPmt4024,
  'ssc-pol-4005': sscPol4005,
};

export const modulesData: Record<string, JournalModule> = Object.fromEntries(
  Object.entries(baseModulesData).map(([moduleId, moduleData]) => [
    moduleId,
    applyJournalContentUpdates(moduleData),
  ])
);

export function getModuleData(moduleId: string): JournalModule | undefined {
  return modulesData[moduleId];
}
