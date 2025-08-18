'use client';

import { Menu as BaseMenu } from '@base-ui-components/react/menu';
import React from 'react';
import { cn } from '@/lib/utils';

const Menu = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Root>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Root>
>(function MenuComponent(props, _ref) {
  return <BaseMenu.Root {...props} />;
});
Menu.displayName = 'Menu';

const MenuTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Trigger>
>(function MenuTriggerComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.Trigger
      className={cn(
        'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[popup-open]:bg-accent data-[popup-open]:text-accent-foreground data-[disabled]:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
MenuTrigger.displayName = 'MenuTrigger';

const MenuPortal = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Portal>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Portal>
>(function MenuPortalComponent(props, _ref) {
  return <BaseMenu.Portal {...props} />;
});
MenuPortal.displayName = 'MenuPortal';

const MenuPositioner = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Positioner>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Positioner>
>(function MenuPositionerComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.Positioner
      className={cn('z-50 outline-none', className)}
      ref={ref}
      {...props}
    />
  );
});
MenuPositioner.displayName = 'MenuPositioner';

const MenuContent = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Popup>
>(function MenuContentComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.Popup
      className={cn(
        'z-50 min-w-[10rem] origin-[var(--transform-origin)] rounded border border-border bg-popover p-1 text-popover-foreground transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
MenuContent.displayName = 'MenuContent';

const MenuArrow = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Arrow>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Arrow>
>(function MenuArrowComponent({ className, children, ...props }, ref) {
  return (
    <BaseMenu.Arrow className={cn('', className)} ref={ref} {...props}>
      {children ?? <ArrowSvg />}
    </BaseMenu.Arrow>
  );
});
MenuArrow.displayName = 'MenuArrow';

const MenuItem = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Item>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Item>
>(function MenuItemComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.Item
      className={cn(
        'relative flex cursor-default select-none items-center rounded p-1.5 pr-2 pl-4 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
MenuItem.displayName = 'MenuItem';

const MenuSeparator = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Separator>
>(function MenuSeparatorComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.Separator
      className={cn('mx-4 my-1.5 h-px bg-muted', className)}
      ref={ref}
      {...props}
    />
  );
});
MenuSeparator.displayName = 'MenuSeparator';

const MenuGroup = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Group>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Group>
>(function MenuGroupComponent({ className, ...props }, ref) {
  return <BaseMenu.Group className={cn('', className)} ref={ref} {...props} />;
});
MenuGroup.displayName = 'MenuGroup';

const MenuGroupLabel = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.GroupLabel>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.GroupLabel>
>(function MenuGroupLabelComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.GroupLabel
      className={cn(
        'cursor-default select-none p-2 pr-8 pl-7 text-muted-foreground text-sm',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
MenuGroupLabel.displayName = 'MenuGroupLabel';

const MenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.CheckboxItem>
>(function MenuCheckboxItemComponent({ className, children, ...props }, ref) {
  return (
    <BaseMenu.CheckboxItem
      className={cn(
        'relative grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 rounded p-1.5 pr-8 pl-2.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseMenu.CheckboxItem>
  );
});
MenuCheckboxItem.displayName = 'MenuCheckboxItem';

const MenuCheckboxItemIndicator = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.CheckboxItemIndicator>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.CheckboxItemIndicator>
>(function MenuCheckboxItemIndicatorComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.CheckboxItemIndicator
      className={cn('col-start-1 flex items-center justify-center', className)}
      ref={ref}
      {...props}
    />
  );
});
MenuCheckboxItemIndicator.displayName = 'MenuCheckboxItemIndicator';

const MenuRadioGroup = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.RadioGroup>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.RadioGroup>
>(function MenuRadioGroupComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.RadioGroup className={cn('', className)} ref={ref} {...props} />
  );
});
MenuRadioGroup.displayName = 'MenuRadioGroup';

const MenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.RadioItem>
>(function MenuRadioItemComponent({ className, children, ...props }, ref) {
  return (
    <BaseMenu.RadioItem
      className={cn(
        'relative grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 rounded p-1.5 pr-8 pl-2.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseMenu.RadioItem>
  );
});
MenuRadioItem.displayName = 'MenuRadioItem';

const MenuRadioItemIndicator = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.RadioItemIndicator>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.RadioItemIndicator>
>(function MenuRadioItemIndicatorComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.RadioItemIndicator
      className={cn('col-start-1 flex items-center justify-center', className)}
      ref={ref}
      {...props}
    />
  );
});
MenuRadioItemIndicator.displayName = 'MenuRadioItemIndicator';

const MenuSub = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.SubmenuRoot>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.SubmenuRoot>
>(function MenuSubComponent(props, _ref) {
  return <BaseMenu.SubmenuRoot {...props} />;
});
MenuSub.displayName = 'MenuSub';

const MenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.SubmenuTrigger>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.SubmenuTrigger>
>(function MenuSubTriggerComponent({ className, children, ...props }, ref) {
  return (
    <BaseMenu.SubmenuTrigger
      className={cn(
        'relative flex w-full cursor-default select-none items-center justify-between gap-4 rounded p-1.5 pr-4 pl-4 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent data-[popup-open]:bg-accent data-[highlighted]:text-accent-foreground data-[popup-open]:text-accent-foreground',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-3 w-3" />
    </BaseMenu.SubmenuTrigger>
  );
});
MenuSubTrigger.displayName = 'MenuSubTrigger';

const MenuSubContent = React.forwardRef<
  React.ComponentRef<typeof BaseMenu.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Popup>
>(function MenuSubContentComponent({ className, ...props }, ref) {
  return (
    <BaseMenu.Popup
      className={cn(
        'z-50 min-w-[10rem] origin-[var(--transform-origin)] rounded border border-border bg-popover p-1 text-popover-foreground transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
MenuSubContent.displayName = 'MenuSubContent';

function ChevronRightIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg fill="none" height="10" viewBox="0 0 10 10" width="10" {...props}>
      <title>Open submenu</title>
      <path d="M3.5 9L7.5 5L3.5 1" stroke="currentcolor" strokeWidth="1.5" />
    </svg>
  );
}

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg fill="none" height="10" viewBox="0 0 20 10" width="20" {...props}>
      <title>Menu arrow</title>
      <path
        className="fill-[canvas]"
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
      />
      <path
        className="fill-border/70 dark:fill-transparent"
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
      />
      <path
        className="dark:fill-border"
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
      />
    </svg>
  );
}

export {
  Menu,
  MenuTrigger,
  MenuPortal,
  MenuPositioner,
  MenuContent,
  MenuArrow,
  MenuItem,
  MenuSeparator,
  MenuGroup,
  MenuGroupLabel,
  MenuCheckboxItem,
  MenuCheckboxItemIndicator,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRadioItemIndicator,
  MenuSub,
  MenuSubTrigger,
  MenuSubContent,
};
