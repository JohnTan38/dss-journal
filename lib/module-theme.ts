import type { ModuleTheme } from '@/types/journal';

const pageAccentStyles: Record<string, { page: string; sectionBar: string; luBadge: string }> = {
  blue: {
    page: 'bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50',
    sectionBar: 'border-blue-100 bg-blue-50/70',
    luBadge: 'bg-blue-100 text-blue-800 border border-blue-200',
  },
  purple: {
    page: 'bg-gradient-to-br from-slate-50 via-purple-50 to-fuchsia-50',
    sectionBar: 'border-purple-100 bg-purple-50/70',
    luBadge: 'bg-purple-100 text-purple-800 border border-purple-200',
  },
  emerald: {
    page: 'bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50',
    sectionBar: 'border-emerald-100 bg-emerald-50/70',
    luBadge: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
  },
  orange: {
    page: 'bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50',
    sectionBar: 'border-orange-100 bg-orange-50/70',
    luBadge: 'bg-orange-100 text-orange-800 border border-orange-200',
  },
  indigo: {
    page: 'bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-50',
    sectionBar: 'border-indigo-100 bg-indigo-50/70',
    luBadge: 'bg-indigo-100 text-indigo-800 border border-indigo-200',
  },
};

const knowledgeHeaderStyles: Record<string, string> = {
  blue: 'bg-blue-50 border-blue-500 text-blue-900 icon-blue-600',
  purple: 'bg-purple-50 border-purple-500 text-purple-900 icon-purple-600',
  emerald: 'bg-emerald-50 border-emerald-500 text-emerald-900 icon-emerald-600',
  orange: 'bg-orange-50 border-orange-500 text-orange-900 icon-orange-600',
  indigo: 'bg-indigo-50 border-indigo-500 text-indigo-900 icon-indigo-600',
};

const abilitiesHeaderStyles: Record<string, string> = {
  blue: 'bg-cyan-50 border-cyan-500 text-cyan-900 icon-cyan-600',
  purple: 'bg-violet-50 border-violet-500 text-violet-900 icon-violet-600',
  emerald: 'bg-teal-50 border-teal-500 text-teal-900 icon-teal-600',
  orange: 'bg-amber-50 border-amber-500 text-amber-900 icon-amber-600',
  indigo: 'bg-sky-50 border-sky-500 text-sky-900 icon-sky-600',
};

export function getModuleChrome(theme: ModuleTheme) {
  return pageAccentStyles[theme.accent] ?? pageAccentStyles.blue;
}

export function getSectionHeaderStyle(theme: ModuleTheme, type: 'knowledge' | 'abilities') {
  const styleMap = type === 'knowledge' ? knowledgeHeaderStyles : abilitiesHeaderStyles;
  const style = styleMap[theme.accent] ?? styleMap.blue;
  const [backgroundClass, borderClass, textClass, iconClass] = style.split(' ');

  return {
    backgroundClass,
    borderClass,
    textClass,
    iconClass: iconClass.replace(/^icon-/, 'text-'),
  };
}
