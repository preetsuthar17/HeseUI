'use client';

import { Slider as BaseSlider } from '@base-ui-components/react/slider';
import React from 'react';
import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
  React.ComponentRef<typeof BaseSlider.Root>,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Root>
>(function SliderComponent({ className, ...props }, _ref) {
  return <BaseSlider.Root className={cn('', className)} {...props} />;
});
Slider.displayName = 'Slider';

const SliderValue = React.forwardRef<
  React.ComponentRef<typeof BaseSlider.Value>,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Value>
>(function SliderValueComponent({ className, ...props }, ref) {
  return (
    <BaseSlider.Value
      className={cn('text-foreground text-sm', className)}
      ref={ref}
      {...props}
    />
  );
});
SliderValue.displayName = 'SliderValue';

const SliderControl = React.forwardRef<
  React.ComponentRef<typeof BaseSlider.Control>,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Control>
>(function SliderControlComponent({ className, ...props }, ref) {
  return (
    <BaseSlider.Control
      className={cn(
        'flex w-56 touch-none select-none items-center py-3',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
SliderControl.displayName = 'SliderControl';

const SliderTrack = React.forwardRef<
  React.ComponentRef<typeof BaseSlider.Track>,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Track>
>(function SliderTrackComponent({ className, ...props }, ref) {
  return (
    <BaseSlider.Track
      className={cn(
        'select-none rounded bg-muted shadow-[inset_0_0_0_1px] shadow-border data-[orientation=horizontal]:h-1 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
SliderTrack.displayName = 'SliderTrack';

const SliderIndicator = React.forwardRef<
  React.ComponentRef<typeof BaseSlider.Indicator>,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Indicator>
>(function SliderIndicatorComponent({ className, ...props }, ref) {
  return (
    <BaseSlider.Indicator
      className={cn('rounded bg-primary', className)}
      ref={ref}
      {...props}
    />
  );
});
SliderIndicator.displayName = 'SliderIndicator';

const SliderThumb = React.forwardRef<
  React.ComponentRef<typeof BaseSlider.Thumb>,
  React.ComponentPropsWithoutRef<typeof BaseSlider.Thumb>
>(function SliderThumbComponent({ className, ...props }, ref) {
  return (
    <BaseSlider.Thumb
      className={cn(
        'size-4 select-none rounded-full bg-background outline outline-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
SliderThumb.displayName = 'SliderThumb';

export {
  Slider,
  SliderValue,
  SliderControl,
  SliderTrack,
  SliderIndicator,
  SliderThumb,
};
