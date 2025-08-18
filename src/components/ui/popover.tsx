'use client';

import { Popover as BasePopover } from '@base-ui-components/react/popover';
import React from 'react';
import { cn } from '@/lib/utils';

const Popover = React.forwardRef<
  React.ComponentRef<typeof BasePopover.Root>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Root>
>(function PopoverComponent(props, _ref) {
  return <BasePopover.Root {...props} />;
});
Popover.displayName = 'Popover';

const PopoverTrigger = React.forwardRef<
  React.ComponentRef<typeof BasePopover.Trigger>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Trigger>
>(function PopoverTriggerComponent({ className, ...props }, ref) {
  return (
    <BasePopover.Trigger
      className={cn(
        'inline-flex items-center justify-center rounded font-medium text-sm ring-offset-background transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[popup-open]:bg-accent data-[disabled]:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
PopoverTrigger.displayName = 'PopoverTrigger';

const PopoverPortal = React.forwardRef<
  React.ComponentRef<typeof BasePopover.Portal>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Portal>
>(function PopoverPortalComponent(props, _ref) {
  return <BasePopover.Portal {...props} />;
});
PopoverPortal.displayName = 'PopoverPortal';

const PopoverPositioner = React.forwardRef<
  React.ComponentRef<typeof BasePopover.Positioner>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Positioner>
>(function PopoverPositionerComponent({ className, ...props }, ref) {
  return (
    <BasePopover.Positioner
      className={cn('z-50 outline-none', className)}
      ref={ref}
      {...props}
    />
  );
});
PopoverPositioner.displayName = 'PopoverPositioner';

const PopoverPopup = React.forwardRef<
  React.ComponentRef<typeof BasePopover.Popup>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Popup>
>(function PopoverPopupComponent({ className, ...props }, ref) {
  return (
    <BasePopover.Popup
      className={cn(
        'z-50 origin-[var(--transform-origin)] rounded border border-border bg-popover px-6 py-4 text-popover-foreground transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
PopoverPopup.displayName = 'PopoverPopup';

const PopoverArrow = React.forwardRef<
  React.ComponentRef<typeof BasePopover.Arrow>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Arrow>
>(function PopoverArrowComponent({ className, ...props }, ref) {
  return (
    <BasePopover.Arrow
      className={cn(
        'data-[side=right]:-rotate-90 data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=top]:bottom-[-8px] data-[side=right]:left-[-13px] data-[side=left]:rotate-90 data-[side=top]:rotate-180',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
PopoverArrow.displayName = 'PopoverArrow';

const PopoverTitle = React.forwardRef<
  React.ComponentRef<typeof BasePopover.Title>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Title>
>(function PopoverTitleComponent({ className, ...props }, ref) {
  return (
    <BasePopover.Title
      className={cn('font-medium text-base', className)}
      ref={ref}
      {...props}
    />
  );
});
PopoverTitle.displayName = 'PopoverTitle';

const PopoverDescription = React.forwardRef<
  React.ComponentRef<typeof BasePopover.Description>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Description>
>(function PopoverDescriptionComponent({ className, ...props }, ref) {
  return (
    <BasePopover.Description
      className={cn('text-base text-muted-foreground', className)}
      ref={ref}
      {...props}
    />
  );
});
PopoverDescription.displayName = 'PopoverDescription';

const PopoverClose = React.forwardRef<
  React.ComponentRef<typeof BasePopover.Close>,
  React.ComponentPropsWithoutRef<typeof BasePopover.Close>
>(function PopoverCloseComponent({ className, ...props }, ref) {
  return (
    <BasePopover.Close
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
PopoverClose.displayName = 'PopoverClose';

// Alias to match shadcn-style import
const PopoverContent = PopoverPopup;

export {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverPositioner,
  PopoverPopup,
  PopoverContent,
  PopoverArrow,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
};
