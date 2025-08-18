'use client';

import { Check, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  type BundledLanguage,
  type BundledTheme,
  getHighlighter,
  type Highlighter,
} from 'shiki';

interface CodeBlockProps {
  code: string;
  lang: BundledLanguage;
  theme?: BundledTheme;
  showLineNumbers?: boolean;
  className?: string;
  filename?: string;
}

export default function CodeBlock({
  code,
  lang,
  theme = 'github-dark',
  showLineNumbers = false,
  className = '',
  filename,
}: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const highlightCode = async () => {
      try {
        const highlighter = await getHighlighter({
          themes: [theme],
          langs: [lang],
        });

        if (mounted) {
          const html = highlighter.codeToHtml(code, {
            lang,
            theme,
          });
          setHighlightedCode(html);
          setLoading(false);
        }
      } catch (error) {
        console.error('Failed to highlight code:', error);
        if (mounted) {
          setLoading(false);
        }
      }
    };

    highlightCode();

    return () => {
      mounted = false;
    };
  }, [code, lang, theme]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  if (loading) {
    return (
      <div className={`rounded border bg-gray-950 ${className}`}>
        {filename && (
          <div className="flex items-center justify-between rounded-t-lg border-gray-700 border-b bg-gray-800 px-4 py-2">
            <span className="font-mono text-gray-300 text-sm">{filename}</span>
          </div>
        )}
        <div className="p-4">
          <div className="animate-pulse">
            <div className="mb-2 h-4 rounded bg-gray-700" />
            <div className="mb-2 h-4 w-3/4 rounded bg-gray-700" />
            <div className="h-4 w-1/2 rounded bg-gray-700" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded border bg-gray-950 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-gray-700 border-b bg-gray-800 px-4 py-2">
        <div className="flex items-center space-x-2">
          {filename && (
            <span className="font-mono text-gray-300 text-sm">{filename}</span>
          )}
          <span className="text-gray-500 text-xs uppercase tracking-wide">
            {lang}
          </span>
        </div>

        <button
          aria-label="Copy code"
          className="flex items-center space-x-1 rounded px-2 py-1 text-gray-400 text-xs transition-colors hover:bg-gray-700 hover:text-gray-200"
          onClick={copyToClipboard}
        >
          {copied ? (
            <>
              <Check size={12} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="relative">
        {showLineNumbers && (
          <div className="absolute top-0 bottom-0 left-0 flex w-12 flex-col border-gray-700 border-r bg-gray-900 font-mono text-gray-500 text-xs">
            {code.split('\n').map((_, index) => (
              <div className="px-2 py-0.5 text-right leading-5" key={index}>
                {index + 1}
              </div>
            ))}
          </div>
        )}

        <div
          className={`overflow-x-auto ${showLineNumbers ? 'ml-12' : ''}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </div>
    </div>
  );
}
