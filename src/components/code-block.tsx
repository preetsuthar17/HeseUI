'use client';

import { Check, Copy } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { type BundledLanguage, type BundledTheme, codeToHtml } from 'shiki';

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
    hash = (hash << 5) - hash + line.charCodeAt(i);
    hash |= 0;
  }
  return `${hash}_${index}`;
}

export default function CodeBlock({
  code,
  lang,
  theme = 'github-light',
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
    } catch (_error) {}
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

  // Add word wrap styles for code/pre
  const wordWrapStyle: React.CSSProperties = {
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
  };

  if (loading) {
    return (
      <div className={`rounded border ${className}`} style={codeBlockStyle}>
        {filename && (
          <div
            className="flex items-center justify-between rounded-t-lg border-b px-4 py-2"
            style={headerStyle}
          >
            <span className="font-mono text-sm" style={filenameStyle}>
              {filename}
            </span>
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
        <pre className="font-mono" style={wordWrapStyle}>
          <code className="p-4 font-mono" style={wordWrapStyle}>
            {code}
          </code>
        </pre>
      );
    }

    const parser = new window.DOMParser();
    const doc = parser.parseFromString(highlightedCode, 'text/html');
    const pre = doc.body.querySelector('pre');
    if (!pre) {
      return (
        <pre style={wordWrapStyle}>
          <code style={wordWrapStyle}>{code}</code>
        </pre>
      );
    }

    function parseInlineStyle(styleText: string): React.CSSProperties {
      const styleObject: React.CSSProperties = {};
      styleText.split(';').forEach((declaration) => {
        const [rawProp, rawValue] = declaration.split(':');
        if (!(rawProp && rawValue)) return;
        const prop = rawProp.trim();
        const value = rawValue.trim();
        if (!(prop && value)) return;
        const camelProp = prop.replace(/-([a-z])/g, (_m, c: string) =>
          c.toUpperCase()
        );
        // @ts-expect-error: dynamic style keys
        styleObject[camelProp] = value;
      });
      return styleObject;
    }

    function domNodeToReact(
      node: ChildNode,
      key?: string | number
    ): React.ReactNode {
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
      const styleAttr = el.getAttribute('style');
      if (styleAttr)
        props.style = {
          ...parseInlineStyle(styleAttr),
          ...(el.tagName.toLowerCase() === 'pre' ||
          el.tagName.toLowerCase() === 'code'
            ? wordWrapStyle
            : {}),
        };
      else if (
        el.tagName.toLowerCase() === 'pre' ||
        el.tagName.toLowerCase() === 'code'
      )
        props.style = wordWrapStyle;
      // Copy data- attributes
      Array.from(el.attributes).forEach((attr) => {
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
            <span className="font-mono text-sm" style={filenameStyle}>
              {filename}
            </span>
          )}
          <span className="text-xs tracking-wide" style={langStyle}>
            {lang}
          </span>
        </div>

        <button
          aria-label="Copy code"
          className="flex items-center space-x-1 rounded px-2 py-1 text-xs transition-colors"
          onClick={copyToClipboard}
          onMouseOut={(e) => {
            Object.assign(
              (e.currentTarget as HTMLElement).style,
              copyButtonStyle
            );
          }}
          onMouseOver={(e) => {
            Object.assign(
              (e.currentTarget as HTMLElement).style,
              copyButtonHoverStyle
            );
          }}
          style={copyButtonStyle}
          type="button"
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
              <div
                className="px-2 py-0.5 text-right leading-5"
                key={getLineKey(line, index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        )}

        <div
          className={`overflow-x-auto ${showLineNumbers ? 'ml-12' : ''}`}
          style={{ ...wordWrapStyle }}
        >
          {renderHighlightedCode()}
        </div>
      </div>
    </div>
  );
}
