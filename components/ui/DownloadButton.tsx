'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Download, FileDown, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DownloadButtonProps {
  targetId: string;
  filename?: string;
  className?: string;
  resources?: Array<{
    label: string;
    href: string;
    filename?: string;
  }>;
}

export default function DownloadButton({
  targetId,
  filename = 'Journal.pdf',
  className,
  resources = [],
}: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hasResources = resources.length > 0;

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [menuOpen]);

  const handleDownload = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;

      const element = document.getElementById(targetId);
      if (!element) {
        setLoading(false);
        return;
      }

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1200,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(filename);
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!hasResources) {
    return (
      <button
        onClick={handleDownload}
        disabled={loading}
        title="Download current page as PDF"
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
          'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700',
          'text-white shadow-sm disabled:opacity-60 disabled:cursor-not-allowed',
          className
        )}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Download className="w-4 h-4" />
        )}
        <span className="hidden sm:inline">{loading ? 'Generating...' : 'Download PDF'}</span>
      </button>
    );
  }

  return (
    <div ref={menuRef} className="relative flex items-stretch">
      <button
        onClick={handleDownload}
        disabled={loading}
        title="Download current page as PDF"
        className={cn(
          'flex items-center gap-2 px-4 py-2 rounded-l-lg text-sm font-medium transition-all',
          'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700',
          'text-white shadow-sm disabled:opacity-60 disabled:cursor-not-allowed',
          className
        )}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Download className="w-4 h-4" />
        )}
        <span className="hidden sm:inline">{loading ? 'Generating...' : 'Download'}</span>
      </button>
      <button
        onClick={() => setMenuOpen((open) => !open)}
        disabled={loading}
        aria-label="Open download options"
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        className={cn(
          'px-2.5 rounded-r-lg border-l border-white/30 transition-colors',
          'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700',
          'text-white shadow-sm disabled:opacity-60 disabled:cursor-not-allowed'
        )}
      >
        <ChevronDown className="w-4 h-4" />
      </button>

      {menuOpen ? (
        <div className="absolute right-0 top-[calc(100%+0.4rem)] min-w-72 rounded-lg border border-gray-200 bg-white shadow-lg z-50 overflow-hidden">
          <button
            onClick={() => {
              setMenuOpen(false);
              void handleDownload();
            }}
            className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-left text-gray-700 hover:bg-gray-50"
          >
            <Download className="w-4 h-4 text-blue-600" />
            <span>Current page as PDF</span>
          </button>
          {resources.map((resource) => (
            <a
              key={resource.href}
              href={resource.href}
              download={resource.filename ?? true}
              onClick={() => setMenuOpen(false)}
              className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 border-t border-gray-100"
            >
              <FileDown className="w-4 h-4 text-teal-600" />
              <span>{resource.label}</span>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
