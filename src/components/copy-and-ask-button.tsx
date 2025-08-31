'use client';

import { Check, ChevronDown, Copy } from 'lucide-react';
import { useState } from 'react';
import { RiChat3Fill, RiClaudeFill, RiOpenaiFill } from 'react-icons/ri';
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuPortal,
  MenuPositioner,
  MenuTrigger,
} from '@/components/ui/menu';
import { componentConfigs } from '@/lib/component-configs';
import { generateComponentMarkdown } from '@/lib/markdown-generator';
import { Button } from './ui/button';

type CopyAndAskButtonProps = {
  componentId: string;
};

function useComponentLinks(componentId: string) {
  const componentUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/components/${componentId}`
      : `https://www.heseui.com/components/${componentId}`;
  const q = `I'm looking at this heseui documentation ${componentUrl}. Help me to understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.`;
  const gpt = `https://chatgpt.com/?${new URLSearchParams({ hints: 'search', q })}`;
  const claude = `https://claude.ai/new?${new URLSearchParams({ q })}`;
  const t3 = `https://t3.chat/new?${new URLSearchParams({ q })}`;
  const config = componentConfigs[componentId as keyof typeof componentConfigs];
  const v0Url = config?.v0_url
    ? `https://v0.dev/?${new URLSearchParams({
        q: `I'm looking at this documentation: ${componentUrl}. Help me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.`,
      })}`
    : '';
  return { gpt, claude, t3, v0Url };
}

function CopyButton({
  copied,
  onCopy,
}: {
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <Button
      className="flex h-8 items-center gap-2 px-3 text-sm"
      disabled={copied}
      onClick={onCopy}
      size="sm"
      variant="secondary"
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
  );
}

function AskAiMenu({
  gpt,
  claude,
  t3,
  v0Url,
}: {
  gpt: string;
  claude: string;
  t3: string;
  v0Url: string;
}) {
  return (
    <Menu>
      <MenuTrigger className="inline-flex h-8 items-center gap-1 rounded bg-secondary px-3 font-medium text-secondary-foreground text-sm transition-colors hover:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 data-[popup-open]:bg-accent data-[popup-open]:text-accent-foreground">
        Ask AI
        <ChevronDown className="size-3" />
      </MenuTrigger>
      <MenuPortal>
        <MenuPositioner>
          <MenuContent className="mt-2">
            <MenuItem>
              <a
                className="flex w-full items-center justify-start gap-2"
                href={v0Url}
                rel="noreferrer noopener"
                target="_blank"
              >
                <svg
                  className="h-5 w-5 text-current"
                  fill="none"
                  viewBox="0 0 40 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Open in v0</title>
                  <path
                    d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
                    fill="currentColor"
                  />
                  <path
                    d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
                    fill="currentColor"
                  />
                </svg>
                Open in v0
              </a>
            </MenuItem>
            <MenuItem>
              <a
                className="flex w-full items-center justify-start gap-2"
                href={gpt}
                rel="noreferrer noopener"
                target="_blank"
              >
                <RiOpenaiFill className="size-5" />
                Ask ChatGPT
              </a>
            </MenuItem>
            <MenuItem>
              <a
                className="flex w-full items-center justify-start gap-2"
                href={claude}
                rel="noreferrer noopener"
                target="_blank"
              >
                <RiClaudeFill className="size-5" />
                Open in Claude
              </a>
            </MenuItem>
            <MenuItem>
              <a
                className="flex w-full items-center justify-start gap-2"
                href={t3}
                rel="noreferrer noopener"
                target="_blank"
              >
                <RiChat3Fill className="size-4" />
                Open in T3 Chat
              </a>
            </MenuItem>
          </MenuContent>
        </MenuPositioner>
      </MenuPortal>
    </Menu>
  );
}

export function CopyAndAskButton({ componentId }: CopyAndAskButtonProps) {
  const [copied, setCopied] = useState(false);
  const { gpt, claude, t3, v0Url } = useComponentLinks(componentId);

  async function handleCopy() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const markdown = generateComponentMarkdown(componentId);
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <div className="flex items-center gap-2">
      <CopyButton copied={copied} onCopy={handleCopy} />
      <AskAiMenu claude={claude} gpt={gpt} t3={t3} v0Url={v0Url} />
    </div>
  );
}
