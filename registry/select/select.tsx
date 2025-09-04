"use client";

import { Select as BaseSelect } from "@base-ui-components/react/select";
import React from "react";
import { cn } from "@/lib/utils";

const Select = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Root>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Root>
>(function SelectComponent(props, _ref) {
  return <BaseSelect.Root {...props} />;
});
Select.displayName = "Select";

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Trigger>
>(function SelectTriggerComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.Trigger
      className={cn(
        "flex h-10 min-w-36 select-none items-center justify-between gap-3 rounded border border-border bg-background pr-3 pl-3.5 text-base text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[popup-open]:bg-accent",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Value>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Value>
>(function SelectValueComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.Value className={cn("", className)} ref={ref} {...props} />
  );
});
SelectValue.displayName = "SelectValue";

const SelectIcon = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Icon>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Icon>
>(function SelectIconComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.Icon className={cn("flex", className)} ref={ref} {...props} />
  );
});
SelectIcon.displayName = "SelectIcon";

const SelectPortal = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Portal>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Portal>
>(function SelectPortalComponent(props, _ref) {
  return <BaseSelect.Portal {...props} />;
});
SelectPortal.displayName = "SelectPortal";

const SelectBackdrop = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Backdrop>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Backdrop>
>(function SelectBackdropComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.Backdrop
      className={cn(
        "fixed inset-0 z-40 bg-black/30 transition-opacity data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:bg-black/60",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
SelectBackdrop.displayName = "SelectBackdrop";

const SelectPositioner = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Positioner>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Positioner>
>(function SelectPositionerComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.Positioner
      className={cn("z-50 select-none outline-none", className)}
      ref={ref}
      {...props}
    />
  );
});
SelectPositioner.displayName = "SelectPositioner";

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Popup>
>(function SelectContentComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.Popup
      className={cn(
        "group max-h-[var(--available-height)] origin-[var(--transform-origin)] overflow-y-auto rounded bg-popover p-1 text-popover-foreground outline outline-border transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
SelectContent.displayName = "SelectContent";

const SelectArrow = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Arrow>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Arrow>
>(function SelectArrowComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.Arrow
      className={cn(
        "data-[side=right]:-rotate-90 flex data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=top]:bottom-[-8px] data-[side=right]:left-[-13px] data-[side=bottom]:rotate-0 data-[side=left]:rotate-90 data-[side=top]:rotate-180",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
SelectArrow.displayName = "SelectArrow";

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Item>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Item>
>(function SelectItemComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.Item
      className={cn(
        "grid min-w-[var(--anchor-width)] cursor-default select-none grid-cols-[0.75rem_1fr] items-center gap-2 rounded py-2 pr-4 pl-2.5 text-sm leading-4 outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
SelectItem.displayName = "SelectItem";

const SelectItemText = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.ItemText>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.ItemText>
>(function SelectItemTextComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.ItemText
      className={cn("col-start-2", className)}
      ref={ref}
      {...props}
    />
  );
});
SelectItemText.displayName = "SelectItemText";

const SelectItemIndicator = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.ItemIndicator>
>(function SelectItemIndicatorComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.ItemIndicator
      className={cn("col-start-1", className)}
      ref={ref}
      {...props}
    />
  );
});
SelectItemIndicator.displayName = "SelectItemIndicator";

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Separator>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Separator>
>(function SelectSeparatorComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.Separator
      className={cn("mx-2 my-1 h-px bg-border", className)}
      ref={ref}
      {...props}
    />
  );
});
SelectSeparator.displayName = "SelectSeparator";

const SelectGroup = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Group>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Group>
>(function SelectGroupComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.Group className={cn("", className)} ref={ref} {...props} />
  );
});
SelectGroup.displayName = "SelectGroup";

const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.GroupLabel>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.GroupLabel>
>(function SelectLabelComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.GroupLabel
      className={cn("px-3 py-1 text-muted-foreground text-xs", className)}
      ref={ref}
      {...props}
    />
  );
});
SelectLabel.displayName = "SelectLabel";

const SelectScrollUpArrow = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.ScrollUpArrow>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.ScrollUpArrow>
>(function SelectScrollUpArrowComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.ScrollUpArrow
      className={cn(
        'top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded bg-popover text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-["""]',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
SelectScrollUpArrow.displayName = "SelectScrollUpArrow";

const SelectScrollDownArrow = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.ScrollDownArrow>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.ScrollDownArrow>
>(function SelectScrollDownArrowComponent({ className, ...props }, ref) {
  return (
    <BaseSelect.ScrollDownArrow
      className={cn(
        'bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded bg-popover text-center text-xs before:absolute before:left-0 before:h-full before:w-full before:content-["""]',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
SelectScrollDownArrow.displayName = "SelectScrollDownArrow";

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectPositioner,
  SelectContent,
  SelectArrow,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectSeparator,
  SelectGroup,
  SelectLabel,
  SelectScrollUpArrow,
  SelectScrollDownArrow,
};
