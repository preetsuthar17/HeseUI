'use client';

import { Check, Copy } from 'lucide-react';
import React from 'react';
import { useEffect, useState } from 'react';
import {
  type BundledLanguage,
  type BundledTheme,
  codeToHtml,
} from 'shiki';

type CodeBlockProps = {
  code: string;
  lang: BundledLanguage;
  theme?: BundledTheme;
  showLineNumbers?: boolean;
  className?: string;
  filename?: string;
};

function getLineKey(line: string, index: number): string {
  let hash = 0;
  for (let i = 0; i < line.length; i++) {
    hash = ((hash << 5) - hash) + line.charCodeAt(i);
    hash |= 0; 
  }
  return `${hash}_${index}`;
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
        const html = await codeToHtml(code, { lang, theme });
        if (mounted) {
          setHighlightedCode(html);
          setLoading(false);
        }
      } catch (_error) {
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

  const COPY_FEEDBACK_DURATION_MS = 2000;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_FEEDBACK_DURATION_MS);
    } catch (_error) {
    }
  };

  // Custom style objects using CSS variables from global.css
  const codeBlockStyle: React.CSSProperties = {
    background: 'var(--color-background, #0a0a0a)',
    borderColor: 'var(--color-border, #000)',
    color: 'var(--color-foreground, #fff)',
  };

  const headerStyle: React.CSSProperties = {
    background: 'var(--color-card, #18181b)',
    borderBottomColor: 'var(--color-border, #000)',
  };

  const filenameStyle: React.CSSProperties = {
    color: 'var(--color-muted-foreground, #d1d5db)',
    fontFamily: 'var(--font-mono, monospace)',
  };

  const langStyle: React.CSSProperties = {
    color: 'var(--color-muted-foreground, #6b7280)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };

  const copyButtonStyle: React.CSSProperties = {
    color: 'var(--color-muted-foreground, #9ca3af)',
    transition: 'color 0.2s',
  };

  const copyButtonHoverStyle: React.CSSProperties = {
    background: 'var(--color-muted, #27272a)',
    color: 'var(--color-foreground, #fff)',
  };

  const lineNumberStyle: React.CSSProperties = {
    background: 'var(--color-muted, #18181b)',
    borderRightColor: 'var(--color-border, #000)',
    color: 'var(--color-muted-foreground, #6b7280)',
    fontFamily: 'var(--font-mono, monospace)',
    fontSize: '0.75rem',
  };

  const loadingBarStyle: React.CSSProperties = {
    background: 'var(--color-muted, #27272a)',
  };

  if (loading) {
    return (
      <div
        className={`rounded border ${className}`}
        style={codeBlockStyle}
      >
        {filename && (
          <div
            className="flex items-center justify-between rounded-t-lg border-b px-4 py-2"
            style={headerStyle}
          >
            <span className="font-mono text-sm" style={filenameStyle}>{filename}</span>
          </div>
        )}
        <div className="p-4">
          <div className="animate-pulse">
            <div className="mb-2 h-4 rounded" style={loadingBarStyle} />
            <div className="mb-2 h-4 w-3/4 rounded" style={loadingBarStyle} />
            <div className="h-4 w-1/2 rounded" style={loadingBarStyle} />
          </div>
        </div>
      </div>
    );
  }

  function renderHighlightedCode() {
    if (!highlightedCode) return null;

    if (typeof window === 'undefined') {
      return (
        <pre>
          <code>{code}</code>
        </pre>
      );
    }

    const parser = new window.DOMParser();
    const doc = parser.parseFromString(highlightedCode, 'text/html');
    const pre = doc.body.querySelector('pre');
    if (!pre) {
      return (
        <pre>
          <code>{code}</code>
        </pre>
      );
    }

    function domNodeToReact(node: ChildNode, key?: string | number): React.ReactNode {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) {
        return null;
      }
      const el = node as HTMLElement;
      const children = Array.from(el.childNodes).map((child, i) =>
        domNodeToReact(child, i)
      );
      const props: any = { key };
      // Copy className and style if present
      if (el.className) props.className = el.className;
      if (el.getAttribute('style')) props.style = el.getAttribute('style');
      // Copy data- attributes
      Array.from(el.attributes).forEach(attr => {
        if (attr.name.startsWith('data-')) {
          props[attr.name] = attr.value;
        }
      });
      return React.createElement(el.tagName.toLowerCase(), props, ...children);
    }

    return domNodeToReact(pre, 'pre');
  }

  return (
    <div
      className={`relative overflow-hidden rounded border ${className}`}
      style={codeBlockStyle}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between border-b px-4 py-2"
        style={headerStyle}
      >
        <div className="flex items-center space-x-2">
          {filename && (
            <span className="font-mono text-sm" style={filenameStyle}>{filename}</span>
          )}
          <span className="text-xs tracking-wide" style={langStyle}>
            {lang}
          </span>
        </div>

        <button
          type="button"
          aria-label="Copy code"
          className="flex items-center space-x-1 rounded px-2 py-1 text-xs transition-colors"
          style={copyButtonStyle}
          onMouseOver={e => {
            Object.assign((e.currentTarget as HTMLElement).style, copyButtonHoverStyle);
          }}
          onMouseOut={e => {
            Object.assign((e.currentTarget as HTMLElement).style, copyButtonStyle);
          }}
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
          <div
            className="absolute top-0 bottom-0 left-0 flex w-12 flex-col border-r text-xs"
            style={lineNumberStyle}
          >
            {code.split('\n').map((line, index) => (
              <div className="px-2 py-0.5 text-right leading-5" key={getLineKey(line, index)}>
                {index + 1}
              </div>
            ))}
          </div>
        )}

        <div className={`overflow-x-auto ${showLineNumbers ? 'ml-12' : ''}`}>
          {renderHighlightedCode()}
        </div>
      </div>
    </div>
  );
}
