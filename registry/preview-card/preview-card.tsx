'use client';

import { PreviewCard as BasePreviewCard } from '@base-ui-components/react/preview-card';
import React from 'react';
import { cn } from '@/lib/utils';

const PreviewCard = React.forwardRef<
  React.ComponentRef<typeof BasePreviewCard.Root>,
  React.ComponentPropsWithoutRef<typeof BasePreviewCard.Root>
>(function PreviewCardComponent(props, _ref) {
  return <BasePreviewCard.Root {...props} />;
});
PreviewCard.displayName = 'PreviewCard';

const PreviewCardTrigger = React.forwardRef<
  React.ComponentRef<typeof BasePreviewCard.Trigger>,
  React.ComponentPropsWithoutRef<typeof BasePreviewCard.Trigger>
>(function PreviewCardTriggerComponent({ className, ...props }, ref) {
  return (
    <BasePreviewCard.Trigger
      className={cn(
        'text-primary no-underline decoration-1 decoration-primary/60 underline-offset-2 outline-none hover:underline focus-visible:rounded focus-visible:no-underline focus-visible:ring-2 focus-visible:ring-ring data-[popup-open]:underline',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
PreviewCardTrigger.displayName = 'PreviewCardTrigger';

const PreviewCardPortal = React.forwardRef<
  React.ComponentRef<typeof BasePreviewCard.Portal>,
  React.ComponentPropsWithoutRef<typeof BasePreviewCard.Portal>
>(function PreviewCardPortalComponent(props, _ref) {
  return <BasePreviewCard.Portal {...props} />;
});
PreviewCardPortal.displayName = 'PreviewCardPortal';

const PreviewCardPositioner = React.forwardRef<
  React.ComponentRef<typeof BasePreviewCard.Positioner>,
  React.ComponentPropsWithoutRef<typeof BasePreviewCard.Positioner>
>(function PreviewCardPositionerComponent({ className, ...props }, ref) {
  return (
    <BasePreviewCard.Positioner
      className={cn('', className)}
      ref={ref}
      {...props}
    />
  );
});
PreviewCardPositioner.displayName = 'PreviewCardPositioner';

const PreviewCardPopup = React.forwardRef<
  React.ComponentRef<typeof BasePreviewCard.Popup>,
  React.ComponentPropsWithoutRef<typeof BasePreviewCard.Popup>
>(function PreviewCardPopupComponent({ className, ...props }, ref) {
  return (
    <BasePreviewCard.Popup
      className={cn(
        'flex w-[240px] origin-[var(--transform-origin)] flex-col gap-2 rounded bg-popover p-2 text-popover-foreground shadow outline outline-border transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
PreviewCardPopup.displayName = 'PreviewCardPopup';

const PreviewCardArrow = React.forwardRef<
  React.ComponentRef<typeof BasePreviewCard.Arrow>,
  React.ComponentPropsWithoutRef<typeof BasePreviewCard.Arrow>
>(function PreviewCardArrowComponent({ className, ...props }, ref) {
  return (
    <BasePreviewCard.Arrow
      className={cn(
        'data-[side=right]:-rotate-90 data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=top]:bottom-[-8px] data-[side=right]:left-[-13px] data-[side=left]:rotate-90 data-[side=top]:rotate-180',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
PreviewCardArrow.displayName = 'PreviewCardArrow';

export {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardPopup,
  PreviewCardArrow,
};
