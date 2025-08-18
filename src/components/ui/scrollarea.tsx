'use client';

import { ScrollArea as BaseScrollArea } from '@base-ui-components/react/scroll-area';
import React from 'react';
import { cn } from '@/lib/utils';

const ScrollArea = React.forwardRef<
  React.ComponentRef<typeof BaseScrollArea.Root>,
  React.ComponentPropsWithoutRef<typeof BaseScrollArea.Root>
>(function ScrollAreaComponent({ className, ...props }, ref) {
  return (
    <BaseScrollArea.Root
      className={cn('relative', className)}
      ref={ref}
      {...props}
    />
  );
});
ScrollArea.displayName = 'ScrollArea';

const ScrollAreaViewport = React.forwardRef<
  React.ComponentRef<typeof BaseScrollArea.Viewport>,
  React.ComponentPropsWithoutRef<typeof BaseScrollArea.Viewport>
>(function ScrollAreaViewportComponent({ className, ...props }, ref) {
  return (
    <BaseScrollArea.Viewport
      className={cn(
        '-outline-offset-1 h-full overscroll-contain rounded outline outline-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
ScrollAreaViewport.displayName = 'ScrollAreaViewport';

const ScrollAreaContent = React.forwardRef<
  React.ComponentRef<typeof BaseScrollArea.Content>,
  React.ComponentPropsWithoutRef<typeof BaseScrollArea.Content>
>(function ScrollAreaContentComponent({ className, ...props }, ref) {
  return (
    <BaseScrollArea.Content
      className={cn('', className)}
      ref={ref}
      {...props}
    />
  );
});
ScrollAreaContent.displayName = 'ScrollAreaContent';

const ScrollAreaScrollbar = React.forwardRef<
  React.ComponentRef<typeof BaseScrollArea.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof BaseScrollArea.Scrollbar>
>(function ScrollAreaScrollbarComponent(
  { className, orientation = 'vertical', ...props },
  ref
) {
  return (
    <BaseScrollArea.Scrollbar
      className={cn(
        'relative m-2 flex justify-center rounded bg-muted opacity-0 transition-opacity delay-300 data-[hovering]:opacity-100 data-[scrolling]:opacity-100 data-[hovering]:delay-0 data-[scrolling]:delay-0 data-[hovering]:duration-75 data-[scrolling]:duration-75',
        orientation === 'vertical' ? 'w-1' : 'h-1',
        orientation === 'vertical'
          ? 'before:absolute before:inset-y-0 before:w-5 before:content-["""]'
          : 'before:absolute before:inset-x-0 before:h-5 before:content-["""]',
        className
      )}
      orientation={orientation}
      ref={ref}
      {...props}
    />
  );
});
ScrollAreaScrollbar.displayName = 'ScrollAreaScrollbar';

const ScrollAreaThumb = React.forwardRef<
  React.ComponentRef<typeof BaseScrollArea.Thumb>,
  React.ComponentPropsWithoutRef<typeof BaseScrollArea.Thumb>
>(function ScrollAreaThumbComponent({ className, ...props }, ref) {
  return (
    <BaseScrollArea.Thumb
      className={cn(
        'rounded bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
ScrollAreaThumb.displayName = 'ScrollAreaThumb';

const ScrollAreaCorner = React.forwardRef<
  React.ComponentRef<typeof BaseScrollArea.Corner>,
  React.ComponentPropsWithoutRef<typeof BaseScrollArea.Corner>
>(function ScrollAreaCornerComponent({ className, ...props }, ref) {
  return (
    <BaseScrollArea.Corner
      className={cn('bg-muted', className)}
      ref={ref}
      {...props}
    />
  );
});
ScrollAreaCorner.displayName = 'ScrollAreaCorner';

export {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
};
