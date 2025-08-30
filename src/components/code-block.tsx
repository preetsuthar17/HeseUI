'use client';

import { Check, Copy } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { type BundledLanguage, type BundledTheme, codeToHtml } from 'shiki';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';

type CodeBlockProps = {
  code: string;
  lang: BundledLanguage | 'package-install';
  theme?: BundledTheme;
  showLineNumbers?: boolean;
  className?: string;
  filename?: string;
};

const PACKAGE_MANAGERS = {
  npm: {
    name: 'npm',
    logo: '📦',
    command: 'npx',
    color: '#cb3837',
  },
  pnpm: {
    name: 'pnpm',
    logo: '📦',
    command: 'pnpm dlx',
    color: '#f69220',
  },
  yarn: {
    name: 'yarn',
    logo: '🧶',
    command: 'yarn',
    color: '#2c8ebb',
  },
  bun: {
    name: 'bun',
    logo: '🍞',
    command: 'bunx --bun',
    color: '#fbf0df',
  },
} as const;

type PackageManager = keyof typeof PACKAGE_MANAGERS;

function getLineKey(line: string, index: number): string {
  let hash = 0;
  for (let i = 0; i < line.length; i++) {
    hash = (hash << 5) - hash + line.charCodeAt(i);
    hash |= 0;
  }
  return `${hash}_${index}`;
}

function transformPackageInstallCode(
  code: string,
  packageManager: PackageManager
): string {
  const { command } = PACKAGE_MANAGERS[packageManager];
  return code.replace(/pnpm\s+dlx/g, command);
}

function getLanguageLogo(lang: string): string {
  const languageLogos: Record<string, string> = {
    typescript: '🔷',
    javascript: '🟨',
    jsx: '⚛️',
    tsx: '⚛️',
    python: '🐍',
    java: '☕',
    cpp: '⚡',
    c: '⚡',
    csharp: '💜',
    go: '🐹',
    rust: '🦀',
    php: '🐘',
    ruby: '💎',
    swift: '🍎',
    kotlin: '🔷',
    scala: '🔴',
    html: '🌐',
    css: '🎨',
    json: '📄',
    yaml: '📄',
    yml: '📄',
    markdown: '📝',
    bash: '💻',
    shell: '💻',
    sh: '💻',
    sql: '🗄️',
    dockerfile: '🐳',
    docker: '🐳',
    git: '📚',
    'package-install': '📦',
    'package.json': '📦',
    'package-lock.json': '📦',
    'pnpm-lock.yaml': '📦',
    'yarn.lock': '📦',
    'bun.lockb': '📦',
  };
  return languageLogos[lang.toLowerCase()] || '📄';
}

export default function CodeBlock({
  code,
  lang,
  theme: propTheme = 'github-light',
  showLineNumbers = false,
  className = '',
  filename,
}: CodeBlockProps) {
  const { theme: websiteTheme } = useTheme();
  const [highlightedCode, setHighlightedCode] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedPackageManager, setSelectedPackageManager] =
    useState<PackageManager>('pnpm');

  // Determine the theme to use based on website theme
  const theme = websiteTheme === 'dark' ? 'github-dark' : 'github-light';

  const isPackageInstall = lang === 'package-install';
  const displayCode = isPackageInstall
    ? transformPackageInstallCode(code, selectedPackageManager)
    : code;

  useEffect(() => {
    let mounted = true;
    const highlightCode = async () => {
      try {
        const html = await codeToHtml(displayCode, {
          lang: isPackageInstall ? 'bash' : lang,
          theme,
        });
        if (mounted) {
          setHighlightedCode(html);
          setLoading(false);
        }
      } catch {
        if (mounted) setLoading(false);
      }
    };
    highlightCode();
    return () => {
      mounted = false;
    };
  }, [displayCode, lang, theme, isPackageInstall]);

  const COPY_FEEDBACK_DURATION_MS = 2000;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(displayCode);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_FEEDBACK_DURATION_MS);
    } catch {}
  };

  const scrollbarClass =
    'scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-muted-foreground scrollbar-track-transparent';

  if (loading) {
    return (
      <div
        className={`rounded border bg-background border-border text-foreground ${className}`}
      >
        {filename && (
          <div className="flex items-center justify-between rounded-t-lg border-b border-border bg-background px-4 py-2">
            <span className="font-mono text-sm text-muted-foreground">{filename}</span>
          </div>
        )}
        <div className="p-4">
          <div className="animate-pulse">
            <div className="mb-2 h-4 rounded bg-muted" />
            <div className="mb-2 h-4 w-3/4 rounded bg-muted" />
            <div className="h-4 w-1/2 rounded bg-muted" />
          </div>
        </div>
      </div>
    );
  }

  function renderHighlightedCode() {
    if (!highlightedCode) return null;

    if (typeof window === 'undefined') {
      return (
        <pre
          className={`font-mono whitespace-pre overflow-x-auto ${scrollbarClass}`}
        >
          <code className="p-4 font-mono whitespace-pre text-sm">
            {displayCode}
          </code>
        </pre>
      );
    }

    const parser = new window.DOMParser();
    const doc = parser.parseFromString(highlightedCode, 'text/html');
    const pre = doc.body.querySelector('pre');
    if (!pre) {
      return (
        <pre className={`whitespace-pre overflow-x-auto ${scrollbarClass}`}>
          <code className="whitespace-pre">{displayCode}</code>
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
      if (el.className) props.className = el.className;
      const styleAttr = el.getAttribute('style');
      if (styleAttr)
        props.style = {
          ...parseInlineStyle(styleAttr),
        };
      Array.from(el.attributes).forEach((attr) => {
        if (attr.name.startsWith('data-')) {
          props[attr.name] = attr.value;
        }
      });
      if (
        el.tagName.toLowerCase() === 'pre' ||
        el.tagName.toLowerCase() === 'code'
      ) {
        props.className = `${props.className || ''} whitespace-pre overflow-x-auto ${scrollbarClass}`.trim();
      }
      return React.createElement(el.tagName.toLowerCase(), props, ...children);
    }

    return domNodeToReact(pre, 'pre');
  }

  return (
    <div
      className={`relative overflow-hidden rounded border bg-background border-border text-foreground ${className}`}
    >
      {isPackageInstall && (
        <div className="flex border-b border-border bg-background">
          <div className="flex w-full flex-wrap sm:flex-nowrap p-2 gap-1">
            {Object.entries(PACKAGE_MANAGERS).map(([key, manager]) => (
              <Button
                key={key}
                size="sm"
                variant={selectedPackageManager === key ? 'secondary' : 'ghost'}
                onClick={() => setSelectedPackageManager(key as PackageManager)}
                type="button"
              >
                <span className="text-xs">{manager.name}</span>
              </Button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between border-b border-border bg-background px-4 py-2">
        <div className="flex items-center space-x-2">
          {filename && (
            <span className="font-mono text-sm text-muted-foreground">
              {filename}
            </span>
          )}
          <div className="flex items-center gap-2">
            <span className="text-base">{getLanguageLogo(lang)}</span>
            <span className="text-xs tracking-wide uppercase text-muted-foreground">
              {isPackageInstall
                ? `(${PACKAGE_MANAGERS[selectedPackageManager].name})`
                : lang}
            </span>
          </div>
        </div>
        <Button
          aria-label="Copy code"
          variant="ghost"
          size="sm"
          className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100"
          onClick={copyToClipboard}
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
        </Button>
      </div>

      <div className="relative">
        <div className="overflow-x-auto">{renderHighlightedCode()}</div>
      </div>
    </div>
  );
}
