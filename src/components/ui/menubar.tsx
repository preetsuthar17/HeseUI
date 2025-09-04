"use client";

import { Menu as BaseMenu } from "@base-ui-components/react/menu";
import { Menubar as BaseMenubar } from "@base-ui-components/react/menubar";
import React from "react";
import { cn } from "@/lib/utils";

const Menubar = React.forwardRef<
  React.ComponentRef<typeof BaseMenubar>,
  React.ComponentPropsWithoutRef<typeof BaseMenubar>
>(function MenubarComponent({ className, ...props }, ref) {
  return (
    <BaseMenubar
      className={cn("flex rounded border border-border p-2", className)}
      ref={ref}
      {...props}
    />
  );
});
Menubar.displayName = "Menubar";

const MenubarMenu = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Root>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Root>
>(function MenubarMenuComponent(props, _ref) {
  return <BaseMenu.Root {...props} />;
});
MenubarMenu.displayName = "MenubarMenu";

const MenubarTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Trigger>
>(function MenubarTriggerComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.Trigger
      className={cn(
        "h-8 select-none rounded px-3 text-sm outline-none hover:text-accent-foreground focus-visible:bg-accent data-[popup-open]:bg-accent data-[disabled]:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
MenubarTrigger.displayName = "MenubarTrigger";

const MenubarPortal = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Portal>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Portal>
>(function MenubarPortalComponent(props, _ref) {
  return <BaseMenu.Portal {...props} />;
});
MenubarPortal.displayName = "MenubarPortal";

const MenubarPositioner = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Positioner>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Positioner>
>(function MenubarPositionerComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.Positioner
      className={cn("z-50 outline-none", className)}
      ref={ref}
      {...props}
    />
  );
});
MenubarPositioner.displayName = "MenubarPositioner";

const MenubarContent = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Popup>
>(function MenubarContentComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.Popup
      className={cn(
        "z-50 min-w-[10rem] origin-[var(--transform-origin)] rounded border border-border bg-popover py-1 text-popover-foreground transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
MenubarContent.displayName = "MenubarContent";

const MenubarItem = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Item>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Item>
>(function MenubarItemComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.Item
      className={cn(
        "flex cursor-default select-none items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-primary-foreground data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded data-[highlighted]:before:bg-primary",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
MenubarItem.displayName = "MenubarItem";

const MenubarSeparator = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Separator>
>(function MenubarSeparatorComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.Separator
      className={cn("mx-4 my-1.5 h-px bg-muted", className)}
      ref={ref}
      {...props}
    />
  );
});
MenubarSeparator.displayName = "MenubarSeparator";

const MenubarSub = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.SubmenuRoot>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.SubmenuRoot>
>(function MenubarSubComponent(props, _ref) {
  return <BaseMenu.SubmenuRoot {...props} />;
});
MenubarSub.displayName = "MenubarSub";

const MenubarSubTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.SubmenuTrigger>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.SubmenuTrigger>
>(function MenubarSubTriggerComponent({ className, children, ...props }, ref) {
  return (
    <BaseMenu.SubmenuTrigger
      className={cn(
        "flex w-full cursor-default select-none items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-none data-[highlighted]:relative data-[popup-open]:relative data-[highlighted]:z-0 data-[popup-open]:z-0 data-[highlighted]:text-primary-foreground data-[highlighted]:data-[popup-open]:before:bg-primary data-[highlighted]:before:absolute data-[popup-open]:before:absolute data-[highlighted]:before:inset-x-1 data-[popup-open]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[popup-open]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[popup-open]:before:z-[-1] data-[highlighted]:before:rounded data-[popup-open]:before:rounded data-[highlighted]:before:bg-primary data-[popup-open]:before:bg-accent",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseMenu.SubmenuTrigger>
  );
});
MenubarSubTrigger.displayName = "MenubarSubTrigger";

const MenubarSubContent = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Popup>
>(function MenubarSubContentComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.Popup
      className={cn(
        "z-50 min-w-[10rem] origin-[var(--transform-origin)] rounded border border-border bg-popover py-1 text-popover-foreground transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
MenubarSubContent.displayName = "MenubarSubContent";

const MenubarCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.CheckboxItem>
>(function MenubarCheckboxItemComponent(
  { className, children, ...props },
  ref
) {
  return (
    <BaseMenu.CheckboxItem
      className={cn(
        "grid cursor-default select-none grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-8 pl-2.5 text-sm leading-4 outline-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-primary-foreground data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded data-[highlighted]:before:bg-primary",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseMenu.CheckboxItem>
  );
});
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";

const MenubarRadioGroup = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.RadioGroup>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.RadioGroup>
>(function MenubarRadioGroupComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.RadioGroup className={cn("", className)} ref={ref} {...props} />
  );
});
MenubarRadioGroup.displayName = "MenubarRadioGroup";

const MenubarRadioItem = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.RadioItem>
>(function MenubarRadioItemComponent({ className, children, ...props }, ref) {
  return (
    <BaseMenu.RadioItem
      className={cn(
        "grid cursor-default select-none grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-8 pl-2.5 text-sm leading-4 outline-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-primary-foreground data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded data-[highlighted]:before:bg-primary",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseMenu.RadioItem>
  );
});
MenubarRadioItem.displayName = "MenubarRadioItem";

const MenubarRadioItemIndicator = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.RadioItemIndicator>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.RadioItemIndicator>
>(function MenubarRadioItemIndicatorComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.RadioItemIndicator
      className={cn("col-start-1 flex items-center justify-center", className)}
      ref={ref}
      {...props}
    />
  );
});
MenubarRadioItemIndicator.displayName = "MenubarRadioItemIndicator";

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "ml-auto text-muted-foreground text-xs tracking-widest",
      className
    )}
    {...props}
  />
);
MenubarShortcut.displayName = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarPortal,
  MenubarPositioner,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRadioItemIndicator,
  MenubarShortcut,
};
