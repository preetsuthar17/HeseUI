'use client';

import { Tabs as BaseTabs } from '@base-ui-components/react/tabs';
import React from 'react';
import { cn } from '@/lib/utils';

const Tabs = React.forwardRef<
  React.ComponentRef<typeof BaseTabs.Root>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Root>
>(function TabsComponent({ className, ...props }, ref) {
  return (
    <BaseTabs.Root
      className={cn('rounded border border-border', className)}
      ref={ref}
      {...props}
    />
  );
});
Tabs.displayName = 'Tabs';

const TabsList = React.forwardRef<
  React.ComponentRef<typeof BaseTabs.List>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.List>
>(function TabsListComponent({ className, ...props }, ref) {
  return (
    <BaseTabs.List
      className={cn(
        'relative z-0 flex gap-1 px-1 shadow-[inset_0_-1px] shadow-border',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseTabs.Tab>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Tab>
>(function TabsTriggerComponent({ className, ...props }, ref) {
  return (
    <BaseTabs.Tab
      className={cn(
        'before:-outline-offset-1 flex h-8 select-none items-center justify-center whitespace-nowrap break-keep px-2 font-medium text-muted-foreground text-sm outline-none before:inset-x-0 before:inset-y-1 before:rounded before:outline-ring hover:text-foreground focus-visible:relative focus-visible:before:absolute focus-visible:before:outline data-[selected]:text-accent-foreground',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TabsTrigger.displayName = 'TabsTrigger';

const TabsIndicator = React.forwardRef<
  React.ComponentRef<typeof BaseTabs.Indicator>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Indicator>
>(function TabsIndicatorComponent({ className, ...props }, ref) {
  return (
    <BaseTabs.Indicator
      className={cn(
        '-translate-y-1/2 absolute top-1/2 left-[var(--active-tab-left)] z-[-1] h-6 w-[var(--active-tab-width)] rounded bg-accent transition-[left,width] duration-200 ease-in-out',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TabsIndicator.displayName = 'TabsIndicator';

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof BaseTabs.Panel>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Panel>
>(function TabsContentComponent({ className, ...props }, ref) {
  return (
    <BaseTabs.Panel
      className={cn(
        'relative flex h-32 items-center justify-center focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsIndicator, TabsContent };
