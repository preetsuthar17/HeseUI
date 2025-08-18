'use client';

import type React from 'react';
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectPositioner,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectInstallation } from '../installation/select-installation';
import { Separator } from '../ui/separator';

const fontItems = {
  sans: 'Sans-serif',
  serif: 'Serif',
  mono: 'Monospace',
  cursive: 'Cursive',
};

export function SelectDemo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-8">
        <div className="item-center flex w-fit flex-col justify-start gap-2">
          <h3 className="font-medium text-lg">Single Select</h3>
          <Select items={fontItems}>
            <SelectTrigger>
              <SelectValue />
              <SelectIcon>
                <ChevronUpDownIcon />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectPositioner
                className="z-50 select-none outline-none"
                sideOffset={8}
              >
                <SelectScrollUpArrow className="top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded bg-popover text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full before:w-full before:content-['']" />
                <SelectContent>
                  {Object.entries(fontItems).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      <SelectItemIndicator>
                        <CheckIcon className="size-3" />
                      </SelectItemIndicator>
                      <SelectItemText>{label}</SelectItemText>
                    </SelectItem>
                  ))}
                </SelectContent>
                <SelectScrollDownArrow className="bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded bg-popover text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full before:w-full before:content-['']" />
              </SelectPositioner>
            </SelectPortal>
          </Select>
        </div>

        <div className="item-center flex w-fit flex-col justify-start gap-2">
          <h3 className="font-medium text-lg">Multiple Select</h3>
          <Select defaultValue={['javascript', 'typescript']} multiple>
            <SelectTrigger className="min-w-[14rem]">
              <SelectValue>{renderLanguages}</SelectValue>
              <SelectIcon>
                <ChevronUpDownIcon />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectPositioner
                alignItemWithTrigger={false}
                className="z-50 outline-none"
                sideOffset={8}
              >
                <SelectContent>
                  {values.map((value) => (
                    <SelectItem key={value} value={value}>
                      <SelectItemIndicator>
                        <CheckIcon className="size-3" />
                      </SelectItemIndicator>
                      <SelectItemText>{languages[value]}</SelectItemText>
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectPositioner>
            </SelectPortal>
          </Select>
        </div>
      </div>
      <Separator />
      <SelectInstallation />
    </div>
  );
}

const languages = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
  java: 'Java',
  csharp: 'C#',
  php: 'PHP',
  cpp: 'C++',
  rust: 'Rust',
  go: 'Go',
  swift: 'Swift',
} as const;

type Language = keyof typeof languages;

const values = Object.keys(languages) as Language[];

function renderLanguages(value: Language[]) {
  if (value.length === 0) {
    return 'Select languages...';
  }
  const firstLanguage = languages[value[0]];
  const additional = value.length > 1 ? ` (+${value.length - 1} more)` : '';
  return firstLanguage + additional;
}

function ChevronUpDownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      height="12"
      stroke="currentcolor"
      strokeWidth="1.5"
      viewBox="0 0 8 12"
      width="8"
      {...props}
    >
      <title>Toggle</title>
      <path d="M0.5 4.5L4 1.5L7.5 4.5" />
      <path d="M0.5 7.5L4 10.5L7.5 7.5" />
    </svg>
  );
}

function CheckIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentcolor"
      height="10"
      viewBox="0 0 10 10"
      width="10"
      {...props}
    >
      <title>Selected</title>
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
}
