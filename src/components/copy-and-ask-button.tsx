'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Copy, Check, ChevronDown, ExternalLink } from 'lucide-react';
import { generateComponentMarkdown } from '@/lib/markdown-generator';
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  MenuPositioner,
  MenuPortal,
} from '@/components/ui/menu';

interface CopyAndAskButtonProps {
  componentId: string;
}

export function CopyAndAskButton({ componentId }: CopyAndAskButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));

      const markdown = generateComponentMarkdown(componentId);
      await navigator.clipboard.writeText(markdown);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

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
    <div className="flex items-center gap-2">
      {/* Copy Page Button */}
      <Button
        onClick={handleCopy}
        variant="secondary"
        size="sm"
        className="text-xs h-8 px-3 flex items-center gap-1"
        disabled={copied}
      >
        {copied ? (
          <>
            <Check className="size-3" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="size-3" />
            Copy Page
          </>
        )}
      </Button>

      {/* Ask AI Menu */}
      <Menu>
        <MenuTrigger className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[popup-open]:bg-accent data-[popup-open]:text-accent-foreground data-[disabled]:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-8 px-3">
          Ask AI
          <ChevronDown className="size-3" />
        </MenuTrigger>
        <MenuPortal>
          <MenuPositioner>
            <MenuContent className="mt-2">
              <MenuItem>
                <a
                  href={gpt}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center justify-between gap-2 w-full"
                >
                  Ask ChatGPT
                  <ExternalLink className="size-3" />
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href={claude}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center justify-between gap-2 w-full"
                >
                  Ask Claude
                  <ExternalLink className="size-3" />
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href={t3}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center justify-between gap-2 w-full"
                >
                  Ask T3 Chat
                  <ExternalLink className="size-3" />
                </a>
              </MenuItem>
            </MenuContent>
          </MenuPositioner>
        </MenuPortal>
      </Menu>
    </div>
  );
}
