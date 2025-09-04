"use client";

import { Toolbar as BaseToolbar } from "@base-ui-components/react/toolbar";
import React from "react";
import { cn } from "@/lib/utils";

const Toolbar = React.forwardRef<
  React.ComponentRef<typeof BaseToolbar.Root>,
  React.ComponentPropsWithoutRef<typeof BaseToolbar.Root>
>(function ToolbarComponent({ className, ...props }, ref) {
  return (
    <BaseToolbar.Root
      className={cn(
        "flex items-center gap-px rounded border border-border p-0.5",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Toolbar.displayName = "Toolbar";

const ToolbarButton = React.forwardRef<
  React.ComponentRef<typeof BaseToolbar.Button>,
  React.ComponentPropsWithoutRef<typeof BaseToolbar.Button>
>(function ToolbarButtonComponent({ className, ...props }, ref) {
  return (
    <BaseToolbar.Button
      className={cn(
        "inline-flex h-8 min-w-8 select-none items-center justify-center rounded px-3 font-medium text-muted-foreground text-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:bg-accent data-[pressed]:bg-accent data-[pressed]:text-foreground",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
ToolbarButton.displayName = "ToolbarButton";

const ToolbarLink = React.forwardRef<
  React.ComponentRef<typeof BaseToolbar.Link>,
  React.ComponentPropsWithoutRef<typeof BaseToolbar.Link>
>(function ToolbarLinkComponent({ className, ...props }, ref) {
  return (
    <BaseToolbar.Link
      className={cn(
        "mr-3 ml-auto flex-none self-center text-muted-foreground text-sm no-underline hover:text-primary focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
ToolbarLink.displayName = "ToolbarLink";

const ToolbarSeparator = React.forwardRef<
  React.ComponentRef<typeof BaseToolbar.Separator>,
  React.ComponentPropsWithoutRef<typeof BaseToolbar.Separator>
>(function ToolbarSeparatorComponent({ className, ...props }, ref) {
  return (
    <BaseToolbar.Separator
      className={cn("m-1 h-4 w-px bg-border", className)}
      ref={ref}
      {...props}
    />
  );
});
ToolbarSeparator.displayName = "ToolbarSeparator";

const ToolbarGroup = React.forwardRef<
  React.ComponentRef<typeof BaseToolbar.Group>,
  React.ComponentPropsWithoutRef<typeof BaseToolbar.Group>
>(function ToolbarGroupComponent({ className, ...props }, ref) {
  return (
    <BaseToolbar.Group
      className={cn("flex gap-1", className)}
      ref={ref}
      {...props}
    />
  );
});
ToolbarGroup.displayName = "ToolbarGroup";

const ToolbarInput = React.forwardRef<
  React.ComponentRef<typeof BaseToolbar.Input>,
  React.ComponentPropsWithoutRef<typeof BaseToolbar.Input>
>(function ToolbarInputComponent({ className, ...props }, ref) {
  return (
    <BaseToolbar.Input
      className={cn(
        "h-8 min-w-24 rounded border border-border bg-background px-2 text-foreground text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
ToolbarInput.displayName = "ToolbarInput";

export {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarGroup,
  ToolbarInput,
};
