'use client';

import { Meter as BaseMeter } from '@base-ui-components/react/meter';
import React from 'react';
import { cn } from '@/lib/utils';

const Meter = React.forwardRef<
  React.ComponentRef<typeof BaseMeter.Root>,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Root>
>(function MeterComponent({ className, ...props }, ref) {
  return (
    <BaseMeter.Root
      className={cn('box-border', className)}
      ref={ref}
      {...props}
    />
  );
});
Meter.displayName = 'Meter';

const MeterLabel = React.forwardRef<
  React.ComponentRef<typeof BaseMeter.Label>,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Label>
>(function MeterLabelComponent({ className, ...props }, ref) {
  return (
    <BaseMeter.Label
      className={cn('font-medium text-foreground text-sm', className)}
      ref={ref}
      {...props}
    />
  );
});
MeterLabel.displayName = 'MeterLabel';

const MeterValue = React.forwardRef<
  React.ComponentRef<typeof BaseMeter.Value>,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Value>
>(function MeterValueComponent({ className, ...props }, ref) {
  return (
    <BaseMeter.Value
      className={cn('m-0 text-foreground text-sm leading-5', className)}
      ref={ref}
      {...props}
    />
  );
});
MeterValue.displayName = 'MeterValue';

const MeterTrack = React.forwardRef<
  React.ComponentRef<typeof BaseMeter.Track>,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Track>
>(function MeterTrackComponent({ className, ...props }, ref) {
  return (
    <BaseMeter.Track
      className={cn(
        'relative block h-2 w-full overflow-hidden rounded bg-muted outline outline-border',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
MeterTrack.displayName = 'MeterTrack';

const MeterIndicator = React.forwardRef<
  React.ComponentRef<typeof BaseMeter.Indicator>,
  React.ComponentPropsWithoutRef<typeof BaseMeter.Indicator>
>(function MeterIndicatorComponent({ className, ...props }, ref) {
  return (
    <BaseMeter.Indicator
      className={cn(
        'block h-full bg-primary transition-[width] duration-500',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
MeterIndicator.displayName = 'MeterIndicator';

export { Meter, MeterLabel, MeterValue, MeterTrack, MeterIndicator };
