'use client';

import { ContextMenu as BaseContextMenu } from '@base-ui-components/react/context-menu';
import React from 'react';
import { cn } from '@/lib/utils';

const ContextMenu = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.Root>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Root>
>(({ ...props }, _ref) => <BaseContextMenu.Root {...props} />);
ContextMenu.displayName = 'ContextMenu';

const ContextMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Trigger>
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Trigger className={cn('', className)} ref={ref} {...props} />
));
ContextMenuTrigger.displayName = 'ContextMenuTrigger';

const ContextMenuPortal = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.Portal>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Portal>
>(({ ...props }, _ref) => <BaseContextMenu.Portal {...props} />);
ContextMenuPortal.displayName = 'ContextMenuPortal';

const ContextMenuPositioner = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.Positioner>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Positioner>
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Positioner
    className={cn('z-50', className)}
    ref={ref}
    {...props}
  />
));
ContextMenuPositioner.displayName = 'ContextMenuPositioner';

const ContextMenuContent = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Popup>
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Popup
    className={cn(
      'z-50 min-w-[8rem] origin-top-left overflow-hidden rounded border border-border bg-popover p-1 text-popover-foreground transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0',
      className
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuContent.displayName = 'ContextMenuContent';

const ContextMenuItem = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.Item>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Item>
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Item
    className={cn(
      'relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50',
      className
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuItem.displayName = 'ContextMenuItem';

const ContextMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Separator>
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Separator
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    ref={ref}
    {...props}
  />
));
ContextMenuSeparator.displayName = 'ContextMenuSeparator';

const ContextMenuSub = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.SubmenuRoot>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.SubmenuRoot>
>(({ ...props }, _ref) => <BaseContextMenu.SubmenuRoot {...props} />);
ContextMenuSub.displayName = 'ContextMenuSub';

const ContextMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.SubmenuTrigger>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.SubmenuTrigger>
>(({ className, children, ...props }, ref) => (
  <BaseContextMenu.SubmenuTrigger
    className={cn(
      'relative flex w-full cursor-default select-none items-center justify-between gap-1 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent data-[popup-open]:bg-accent data-[highlighted]:text-accent-foreground data-[popup-open]:text-accent-foreground',
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4 shrink-0" />
  </BaseContextMenu.SubmenuTrigger>
));
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger';

const ContextMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Popup>
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Popup
    className={cn(
      'z-50 min-w-[8rem] origin-[var(--transform-origin)] overflow-hidden rounded border border-border bg-popover p-1 text-popover-foreground transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0',
      className
    )}
    ref={ref}
    {...props}
  />
));
ContextMenuSubContent.displayName = 'ContextMenuSubContent';

const ContextMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.CheckboxItem>
>(({ className, children, ...props }, ref) => (
  <BaseContextMenu.CheckboxItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50',
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <BaseContextMenu.CheckboxItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </BaseContextMenu.CheckboxItemIndicator>
    </span>
    {children}
  </BaseContextMenu.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

const ContextMenuRadioGroup = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.RadioGroup>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.RadioGroup>
>(({ className, ...props }, ref) => (
  <BaseContextMenu.RadioGroup
    className={cn('', className)}
    ref={ref}
    {...props}
  />
));
ContextMenuRadioGroup.displayName = 'ContextMenuRadioGroup';

const ContextMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.RadioItem>
>(({ className, children, ...props }, ref) => (
  <BaseContextMenu.RadioItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50',
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <BaseContextMenu.RadioItemIndicator>
        <div className="h-2 w-2 rounded-full bg-current" />
      </BaseContextMenu.RadioItemIndicator>
    </span>
    {children}
  </BaseContextMenu.RadioItem>
));
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

const ContextMenuGroup = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.Group>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Group>
>(({ className, ...props }, ref) => (
  <BaseContextMenu.Group className={cn('', className)} ref={ref} {...props} />
));
ContextMenuGroup.displayName = 'ContextMenuGroup';

const ContextMenuLabel = React.forwardRef<
  React.ComponentRef<typeof BaseContextMenu.GroupLabel>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.GroupLabel>
>(({ className, ...props }, ref) => (
  <BaseContextMenu.GroupLabel
    className={cn('px-2 py-1.5 font-semibold text-sm', className)}
    ref={ref}
    {...props}
  />
));
ContextMenuLabel.displayName = 'ContextMenuLabel';

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-muted-foreground text-xs tracking-widest',
        className
      )}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = 'ContextMenuShortcut';

function ChevronRightIcon(props: React.ComponentProps<'svg'>) {
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
      <title>Expand submenu</title>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CheckIcon(props: React.ComponentProps<'svg'>) {
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
      <title>Check</title>
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuShortcut,
};
