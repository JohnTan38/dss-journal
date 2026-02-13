import { notFound } from 'next/navigation';
import { modulesRegistry, getModuleData } from '@/data/modules-index';
import JournalPageClient from './JournalPageClient';

interface JournalPageProps {
  params: {
    moduleId: string;
  };
}

export function generateStaticParams() {
  return modulesRegistry.map((entry) => ({
    moduleId: entry.moduleId,
  }));
}

export function generateMetadata({ params }: JournalPageProps) {
  const entry = modulesRegistry.find((e) => e.moduleId === params.moduleId);
  if (!entry) return { title: 'Journal Not Found' };
  return {
    title: `${entry.moduleCode} — ${entry.moduleName} | Clinical Journal`,
    description: `${entry.moduleNumber} Clinical Attachment Reflective Journal`,
  };
}

export default function JournalPage({ params }: JournalPageProps) {
  const moduleData = getModuleData(params.moduleId);
  if (!moduleData) {
    notFound();
  }

  return <JournalPageClient moduleData={moduleData} />;
}
