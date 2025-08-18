'use client';

import { Progress as BaseProgress } from '@base-ui-components/react/progress';
import React from 'react';
import { cn } from '@/lib/utils';

const Progress = React.forwardRef<
  React.ComponentRef<typeof BaseProgress.Root>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Root>
>(function ProgressComponent({ className, ...props }, ref) {
  return (
    <BaseProgress.Root
      className={cn('grid w-48 grid-cols-2 gap-y-2', className)}
      ref={ref}
      {...props}
    />
  );
});
Progress.displayName = 'Progress';

const ProgressLabel = React.forwardRef<
  React.ComponentRef<typeof BaseProgress.Label>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Label>
>(function ProgressLabelComponent({ className, ...props }, ref) {
  return (
    <BaseProgress.Label
      className={cn('font-medium text-foreground text-sm', className)}
      ref={ref}
      {...props}
    />
  );
});
ProgressLabel.displayName = 'ProgressLabel';

const ProgressValue = React.forwardRef<
  React.ComponentRef<typeof BaseProgress.Value>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Value>
>(function ProgressValueComponent({ className, ...props }, ref) {
  return (
    <BaseProgress.Value
      className={cn(
        'col-start-2 text-right text-foreground text-sm',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
ProgressValue.displayName = 'ProgressValue';

const ProgressTrack = React.forwardRef<
  React.ComponentRef<typeof BaseProgress.Track>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Track>
>(function ProgressTrackComponent({ className, ...props }, ref) {
  return (
    <BaseProgress.Track
      className={cn(
        'col-span-full h-1 overflow-hidden rounded bg-muted outline outline-border',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
ProgressTrack.displayName = 'ProgressTrack';

const ProgressIndicator = React.forwardRef<
  React.ComponentRef<typeof BaseProgress.Indicator>,
  React.ComponentPropsWithoutRef<typeof BaseProgress.Indicator>
>(function ProgressIndicatorComponent({ className, ...props }, ref) {
  return (
    <BaseProgress.Indicator
      className={cn(
        'block h-full bg-primary transition-[width] duration-500',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
ProgressIndicator.displayName = 'ProgressIndicator';

export {
  Progress,
  ProgressLabel,
  ProgressValue,
  ProgressTrack,
  ProgressIndicator,
};
