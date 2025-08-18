'use client';

import { Radio as BaseRadio } from '@base-ui-components/react/radio';
import { RadioGroup as BaseRadioGroup } from '@base-ui-components/react/radio-group';
import React from 'react';
import { cn } from '@/lib/utils';

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof BaseRadioGroup>,
  React.ComponentPropsWithoutRef<typeof BaseRadioGroup>
>(function RadioGroupComponent({ className, ...props }, ref) {
  return (
    <BaseRadioGroup
      className={cn('flex flex-col items-start gap-1', className)}
      ref={ref}
      {...props}
    />
  );
});
RadioGroup.displayName = 'RadioGroup';

const RadioIndicator = React.forwardRef<
  React.ComponentRef<typeof BaseRadio.Indicator>,
  React.ComponentPropsWithoutRef<typeof BaseRadio.Indicator>
>(function RadioIndicatorComponent({ className, ...props }, ref) {
  return (
    <BaseRadio.Indicator
      className={cn(
        'flex before:size-2 before:rounded-full before:bg-primary-foreground data-[unchecked]:hidden',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
RadioIndicator.displayName = 'RadioIndicator';

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof BaseRadio.Root>,
  React.ComponentPropsWithoutRef<typeof BaseRadio.Root>
>(function RadioGroupItemComponent({ className, children, ...props }, ref) {
  return (
    <BaseRadio.Root
      className={cn(
        'peer flex size-5 items-center justify-center rounded-full border border-border text-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:border-primary data-[checked]:bg-primary data-[unchecked]:bg-transparent',
        className
      )}
      ref={ref}
      {...props}
    >
      {children ?? <RadioIndicator />}
    </BaseRadio.Root>
  );
});
RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroup, RadioGroupItem, RadioIndicator };
