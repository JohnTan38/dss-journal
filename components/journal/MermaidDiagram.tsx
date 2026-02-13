'use client';

import { useEffect, useRef, useState } from 'react';

interface MermaidDiagramProps {
  title: string;
  code: string;
}

export default function MermaidDiagram({ title, code }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import('mermaid')).default;
        if (cancelled) return;

        mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          securityLevel: 'loose',
          flowchart: { useMaxWidth: true, htmlLabels: true },
        });

        const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
        const { svg } = await mermaid.render(id, code);

        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          // Make SVG responsive
          const svgEl = containerRef.current.querySelector('svg');
          if (svgEl) {
            svgEl.style.width = '100%';
            svgEl.style.maxWidth = '100%';
            svgEl.removeAttribute('width');
          }
          setStatus('ready');
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Mermaid render error:', err);
          setStatus('error');
        }
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [code]);

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 px-4 py-2.5">
        <h4 className="text-sm font-bold text-white">{title}</h4>
      </div>

      {/* Diagram area */}
      <div className="bg-white p-4 overflow-x-auto min-h-[120px] flex items-center justify-center">
        {status === 'loading' && (
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <svg className="animate-spin w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Loading diagram…
          </div>
        )}

        {status === 'error' && (
          <div className="text-xs text-red-500 p-2 bg-red-50 rounded border border-red-200 w-full">
            <p className="font-semibold mb-1">⚠ Diagram could not be rendered</p>
            <pre className="whitespace-pre-wrap font-mono opacity-70">{code}</pre>
          </div>
        )}

        {/* Rendered SVG injected here */}
        <div
          ref={containerRef}
          className="w-full"
          style={{ display: status === 'ready' ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
}
