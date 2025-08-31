'use client';

import { ExternalLinkIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface AskAIButtonProps {
  componentId: string;
}

export function AskAIButton({ componentId }: AskAIButtonProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const pageTitle = typeof window !== 'undefined' ? document.title : '';
  const q = `Please read the documentation from ${currentUrl} (titled: "${pageTitle}"). I want to discuss or get help with the ${componentId} component.`;
  const gpt = `https://chatgpt.com/?${new URLSearchParams({
    hints: 'search',
    q,
  })}`;
  const claude = `https://claude.ai/new?${new URLSearchParams({ q })}`;
  const t3 = `https://t3.chat/new?${new URLSearchParams({ q })}`;

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="flex w-fit items-center gap-2 rounded border border-border px-2 py-2 text-primary text-sm hover:bg-secondary"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        Ask AI
        <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
          <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-50 mt-2 flex min-w-[160px] flex-col rounded border border-border bg-background p-2 shadow-lg">
          <a
            className="flex items-center justify-between gap-2 rounded px-2 py-3 text-sm hover:bg-secondary"
            href={gpt}
            onClick={() => setOpen(false)}
            rel="noreferrer noopener"
            target="_blank"
          >
            Ask ChatGPT
            <ExternalLinkIcon className="size-4" />
          </a>
          <a
            className="flex items-center justify-between gap-2 rounded px-2 py-3 text-sm hover:bg-secondary"
            href={claude}
            onClick={() => setOpen(false)}
            rel="noreferrer noopener"
            target="_blank"
          >
            Ask Claude
            <ExternalLinkIcon className="size-4" />
          </a>
          <a
            className="flex items-center justify-between gap-2 rounded px-2 py-3 text-sm hover:bg-secondary"
            href={t3}
            onClick={() => setOpen(false)}
            rel="noreferrer noopener"
            target="_blank"
          >
            Ask T3 Chat
            <ExternalLinkIcon className="size-4" />
          </a>
        </div>
      )}
    </div>
  );
}
