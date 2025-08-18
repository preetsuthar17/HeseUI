'use client';

import { NavigationMenu as BaseNav } from '@base-ui-components/react/navigation-menu';
import React from 'react';
import { cn } from '@/lib/utils';

const NavigationMenu = React.forwardRef<
  React.ComponentRef<typeof BaseNav.Root>,
  React.ComponentPropsWithoutRef<typeof BaseNav.Root>
>(function NavigationMenuComponent({ className, ...props }, ref) {
  return (
    <BaseNav.Root
      className={cn(
        'min-w-max rounded bg-secondary p-1 text-foreground',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
NavigationMenu.displayName = 'NavigationMenu';

const NavigationMenuList = React.forwardRef<
  React.ComponentRef<typeof BaseNav.List>,
  React.ComponentPropsWithoutRef<typeof BaseNav.List>
>(function NavigationMenuListComponent({ className, ...props }, ref) {
  return (
    <BaseNav.List
      className={cn('relative flex', className)}
      ref={ref}
      {...props}
    />
  );
});
NavigationMenuList.displayName = 'NavigationMenuList';

const NavigationMenuItem = React.forwardRef<
  React.ComponentRef<typeof BaseNav.Item>,
  React.ComponentPropsWithoutRef<typeof BaseNav.Item>
>(function NavigationMenuItemComponent({ className, ...props }, ref) {
  return <BaseNav.Item className={cn('', className)} ref={ref} {...props} />;
});
NavigationMenuItem.displayName = 'NavigationMenuItem';

const NavigationMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseNav.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseNav.Trigger>
>(function NavigationMenuTriggerComponent({ className, ...props }, ref) {
  return (
    <BaseNav.Trigger
      className={cn(
        'inline-flex h-10 select-none items-center justify-center gap-1.5 rounded bg-secondary px-3 font-medium text-secondary-foreground text-sm no-underline ring-offset-background hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[popup-open]:bg-accent',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

const NavigationMenuIcon = React.forwardRef<
  React.ComponentRef<typeof BaseNav.Icon>,
  React.ComponentPropsWithoutRef<typeof BaseNav.Icon>
>(function NavigationMenuIconComponent({ className, ...props }, ref) {
  return (
    <BaseNav.Icon
      className={cn(
        'transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
NavigationMenuIcon.displayName = 'NavigationMenuIcon';

const NavigationMenuContent = React.forwardRef<
  React.ComponentRef<typeof BaseNav.Content>,
  React.ComponentPropsWithoutRef<typeof BaseNav.Content>
>(function NavigationMenuContentComponent({ className, ...props }, ref) {
  return (
    <BaseNav.Content
      className={cn(
        'data-[starting-style]:data-[activation-direction=left]:-translate-x-1/2 data-[ending-style]:data-[activation-direction=right]:-translate-x-1/2 box-border h-full w-[calc(100vw-2.5rem)] p-6 transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] [--duration:0.35s] [--easing:cubic-bezier(0.22,1,0.36,1)] data-[ending-style]:data-[activation-direction=left]:translate-x-1/2 data-[starting-style]:data-[activation-direction=right]:translate-x-1/2 data-[ending-style]:opacity-0 sm:w-max sm:min-w-[24rem]',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
NavigationMenuContent.displayName = 'NavigationMenuContent';

const NavigationMenuLink = React.forwardRef<
  React.ComponentRef<typeof BaseNav.Link>,
  React.ComponentPropsWithoutRef<typeof BaseNav.Link>
>(function NavigationMenuLinkComponent({ className, ...props }, ref) {
  return (
    <BaseNav.Link
      className={cn('no-underline', className)}
      ref={ref}
      {...props}
    />
  );
});
NavigationMenuLink.displayName = 'NavigationMenuLink';

const NavigationMenuPortal = React.forwardRef<
  React.ComponentRef<typeof BaseNav.Portal>,
  React.ComponentPropsWithoutRef<typeof BaseNav.Portal>
>(function NavigationMenuPortalComponent(props, _ref) {
  return <BaseNav.Portal {...props} />;
});
NavigationMenuPortal.displayName = 'NavigationMenuPortal';

const NavigationMenuPositioner = React.forwardRef<
  React.ComponentRef<typeof BaseNav.Positioner>,
  React.ComponentPropsWithoutRef<typeof BaseNav.Positioner>
>(function NavigationMenuPositionerComponent(
  { className, style, ...props },
  ref
) {
  const mergedStyle: React.CSSProperties = {
    ...(style as React.CSSProperties),
    ['--duration' as string]: '0.35s',
    ['--easing' as string]: 'cubic-bezier(0.22, 1, 0.36, 1)',
  };
  return (
    <BaseNav.Positioner
      className={cn(
        'z-50 box-border h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] before:absolute before:content-["""] data-[instant]:transition-none data-[side=bottom]:before:top-[-10px] data-[side=left]:before:top-0 data-[side=right]:before:top-0 data-[side=bottom]:before:right-0 data-[side=left]:before:right-[-10px] data-[side=top]:before:right-0 data-[side=left]:before:bottom-0 data-[side=right]:before:bottom-0 data-[side=top]:before:bottom-[-10px] data-[side=bottom]:before:left-0 data-[side=right]:before:left-[-10px] data-[side=top]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=top]:before:h-2.5 data-[side=left]:before:w-2.5 data-[side=right]:before:w-2.5',
        className
      )}
      ref={ref}
      style={mergedStyle}
      {...props}
    />
  );
});
NavigationMenuPositioner.displayName = 'NavigationMenuPositioner';

const NavigationMenuPopup = React.forwardRef<
  React.ComponentRef<typeof BaseNav.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseNav.Popup>
>(function NavigationMenuPopupComponent({ className, ...props }, ref) {
  return (
    <BaseNav.Popup
      className={cn(
        'relative z-50 h-[var(--popup-height)] w-[var(--popup-width)] origin-[var(--transform-origin)] rounded border border-border bg-popover text-popover-foreground transition-[opacity,transform,width,height,scale,translate] duration-[var(--duration)] ease-[var(--easing)] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
NavigationMenuPopup.displayName = 'NavigationMenuPopup';

const NavigationMenuArrow = React.forwardRef<
  React.ComponentRef<typeof BaseNav.Arrow>,
  React.ComponentPropsWithoutRef<typeof BaseNav.Arrow>
>(function NavigationMenuArrowComponent({ className, ...props }, ref) {
  return (
    <BaseNav.Arrow
      className={cn(
        'data-[side=right]:-rotate-90 flex transition-[left] duration-[var(--duration)] ease-[var(--easing)] data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=top]:bottom-[-8px] data-[side=right]:left-[-13px] data-[side=left]:rotate-90 data-[side=top]:rotate-180',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
NavigationMenuArrow.displayName = 'NavigationMenuArrow';

const NavigationMenuViewport = React.forwardRef<
  React.ComponentRef<typeof BaseNav.Viewport>,
  React.ComponentPropsWithoutRef<typeof BaseNav.Viewport>
>(function NavigationMenuViewportComponent({ className, ...props }, ref) {
  return (
    <BaseNav.Viewport
      className={cn('relative h-full w-full overflow-hidden', className)}
      ref={ref}
      {...props}
    />
  );
});
NavigationMenuViewport.displayName = 'NavigationMenuViewport';

function navigationMenuTriggerStyle() {
  return 'inline-flex h-10 items-center justify-center gap-1.5 rounded bg-secondary px-3 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background data-[popup-open]:bg-accent';
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuIcon,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuPopup,
  NavigationMenuArrow,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
