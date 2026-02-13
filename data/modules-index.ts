import type { ModuleRegistryEntry, JournalModule } from '@/types/journal';
import { sscPve4010 } from '@/data/journals/ssc-pve-4010';
import { sscWsh4008 } from '@/data/journals/ssc-wsh-4008';
import { sscPdv4045 } from '@/data/journals/ssc-pdv-4045';
import { sscCfc4047 } from '@/data/journals/ssc-cfc-4047';
import { sscBin4010 } from '@/data/journals/ssc-bin-4010';

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
];

export const modulesData: Record<string, JournalModule> = {
  'ssc-pve-4010': sscPve4010,
  'ssc-wsh-4008': sscWsh4008,
  'ssc-pdv-4045': sscPdv4045,
  'ssc-cfc-4047': sscCfc4047,
  'ssc-bin-4010': sscBin4010,
};

export function getModuleData(moduleId: string): JournalModule | undefined {
  return modulesData[moduleId];
}
