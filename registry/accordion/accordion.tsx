'use client';

import { Accordion as BaseAccordion } from '@base-ui-components/react/accordion';
import React from 'react';
import { cn } from '@/lib/utils';

const Accordion = React.forwardRef<
  React.ComponentRef<typeof BaseAccordion.Root>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Root> & {
    type?: 'single' | 'multiple';
    collapsible?: boolean;
    defaultValue?: string[];
    value?: string[];
    onValueChange?: (value: string[]) => void;
  }
>(
  (
    {
      type = 'single',
      collapsible = false,
      defaultValue,
      value,
      onValueChange,
      openMultiple = true,
      ...props
    },
    ref
  ) => {
    const handleValueChange = (newValue: string[]) => {
      if (type === 'single' && !collapsible && newValue.length === 0) {
        return;
      }
      onValueChange?.(newValue);
    };

    return (
      <BaseAccordion.Root
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
        openMultiple={type === 'multiple' ? openMultiple : false}
        ref={ref}
        value={value}
        {...props}
      />
    );
  }
);
Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof BaseAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Item>
>(({ className, ...props }, ref) => (
  <BaseAccordion.Item
    className={cn('border-border border-b', className)}
    ref={ref}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseAccordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Trigger>
>(({ className, children, ...props }, ref) => (
  <BaseAccordion.Header className="flex">
    <BaseAccordion.Trigger
      className={cn(
        'group relative flex w-full items-center justify-between gap-4 py-4 text-left font-medium transition-all hover:underline',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-data-[panel-open]:rotate-180" />
    </BaseAccordion.Trigger>
  </BaseAccordion.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof BaseAccordion.Panel>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Panel>
>(({ className, children, ...props }, ref) => (
  <BaseAccordion.Panel
    className={cn(
      'h-[var(--accordion-panel-height)] overflow-hidden text-sm transition-[height] duration-200 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0',
      className
    )}
    ref={ref}
    {...props}
  >
    <div className="pt-0 pb-4">{children}</div>
  </BaseAccordion.Panel>
));
AccordionContent.displayName = 'AccordionContent';

function ChevronDownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Expand section</title>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
