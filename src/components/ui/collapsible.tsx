"use client";

import { Collapsible as BaseCollapsible } from "@base-ui-components/react/collapsible";
import React from "react";
import { cn } from "@/lib/utils";

const Collapsible = React.forwardRef<
  React.ComponentRef<typeof BaseCollapsible.Root>,
  React.ComponentPropsWithoutRef<typeof BaseCollapsible.Root>
>(function CollapsibleComponent({ className, ...props }, ref) {
  return (
    <BaseCollapsible.Root
      className={cn("w-full", className)}
      ref={ref}
      {...props}
    />
  );
});

type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<
  typeof BaseCollapsible.Trigger
> & {
  iconPosition?: "left" | "right";
  icon?: React.ReactNode;
};

const CollapsibleTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseCollapsible.Trigger>,
  CollapsibleTriggerProps
>(function CollapsibleTriggerComponent(
  { className, children, icon, iconPosition = "right", ...props },
  ref
) {
  const iconNode = icon ?? (
    <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200 data-[panel-open]:rotate-180" />
  );
  return (
    <BaseCollapsible.Trigger
      className={cn(
        "flex w-full items-center justify-between rounded border border-border bg-background px-4 py-3 font-medium text-sm transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[panel-open]:bg-accent data-[panel-open]:text-accent-foreground",
        className
      )}
      ref={ref}
      {...props}
      type="button"
    >
      {iconPosition === "left" && iconNode}
      <span className="flex-1 text-left">{children}</span>
      {iconPosition === "right" && iconNode}
    </BaseCollapsible.Trigger>
  );
});

const CollapsibleContent = React.forwardRef<
  React.ComponentRef<typeof BaseCollapsible.Panel>,
  React.ComponentPropsWithoutRef<typeof BaseCollapsible.Panel>
>(function CollapsibleContentComponent({ className, children, ...props }, ref) {
  return (
    <BaseCollapsible.Panel
      className={cn(
        "mt-2 flex h-[var(--collapsible-panel-height)] flex-col justify-end overflow-hidden rounded text-sm transition-all data-[ending-style]:h-0 data-[starting-style]:h-0",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseCollapsible.Panel>
  );
});

function ChevronDownIcon(props: React.ComponentProps<"svg">) {
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
      <title>Expand</title>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
