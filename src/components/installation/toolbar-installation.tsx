import CodeBlock from '../code-block';

export function ToolbarInstallation() {
  return (
    <>
      <p>Install component using the CLI</p>
      <CodeBlock
        code={
          'pnpm dlx shadcn@latest add @heseui/toolbar'
        }
        lang="bash"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react';
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
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/togglegroup';
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarLink,
  ToolbarSeparator,
} from '@/components/ui/toolbar';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function ToolbarDemo() {
  return (
    <Toolbar className="w-[600px]">
      <ToggleGroup aria-label="Alignment" className="flex gap-1">
        <ToolbarButton
          aria-label="Align left"
          className="aspect-square"
          render={<ToggleGroupItem />}
          value="align-left"
        >
          <AlignLeft />
        </ToolbarButton>

        <ToolbarButton
          aria-label="Align center"
          className="aspect-square"
          render={<ToggleGroupItem />}
          value="align-center"
        >
          <AlignCenter />
        </ToolbarButton>

        <ToolbarButton
          aria-label="Align right"
          className="aspect-square"
          render={<ToggleGroupItem />}
          value="align-right"
        >
          <AlignRight />
        </ToolbarButton>
      </ToggleGroup>
      <ToolbarSeparator />
      <ToolbarGroup aria-label="Numerical format">
        <ToolbarButton aria-label="Format as currency" className="min-w-8 px-3">
          $
        </ToolbarButton>
        <ToolbarButton aria-label="Format as percent" className="min-w-8 px-3">
          %
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <Select defaultValue="Helvetica">
        <ToolbarButton
          className="min-w-[8rem] justify-between rounded px-3"
          render={<SelectTrigger className="rounded" />}
          role="combobox"
        >
          <SelectValue />
          <SelectIcon>
            <ChevronUpDownIcon />
          </SelectIcon>
        </ToolbarButton>
        <SelectPortal>
          <SelectPositioner className="select-none outline-none" sideOffset={8}>
            <SelectScrollUpArrow />
            <SelectContent>
              <SelectItem value="Helvetica">
                <SelectItemIndicator className="col-start-1">
                  <CheckIcon className="size-3" />
                </SelectItemIndicator>
                <SelectItemText className="col-start-2 text-sm">
                  Helvetica
                </SelectItemText>
              </SelectItem>
              <SelectItem value="Arial">
                <SelectItemIndicator className="col-start-1">
                  <CheckIcon className="size-3" />
                </SelectItemIndicator>
                <SelectItemText className="col-start-2 text-sm">
                  Arial
                </SelectItemText>
              </SelectItem>
            </SelectContent>
            <SelectScrollDownArrow />
          </SelectPositioner>
        </SelectPortal>
      </Select>
      <ToolbarSeparator />
      <ToolbarLink href="#">Edited 51m ago</ToolbarLink>
    </Toolbar>
  );
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
      <title>Toggle menu</title>
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
}`}
        lang="tsx"
      />
    </>
  );
}
