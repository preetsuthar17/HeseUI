'use client';

import { Fieldset as BaseFieldset } from '@base-ui-components/react/fieldset';
import React from 'react';
import { cn } from '@/lib/utils';

const Fieldset = React.forwardRef<
  React.ComponentRef<typeof BaseFieldset.Root>,
  React.ComponentPropsWithoutRef<typeof BaseFieldset.Root>
>(function FieldsetComponent({ className, ...props }, ref) {
  return (
    <BaseFieldset.Root
      className={cn('flex w-full flex-col gap-4', className)}
      ref={ref}
      {...props}
    />
  );
});
Fieldset.displayName = 'Fieldset';

const FieldsetLegend = React.forwardRef<
  React.ComponentRef<typeof BaseFieldset.Legend>,
  React.ComponentPropsWithoutRef<typeof BaseFieldset.Legend>
>(function FieldsetLegendComponent({ className, ...props }, ref) {
  return (
    <BaseFieldset.Legend
      className={cn(
        'border-border border-b pb-3 font-medium text-foreground text-lg',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
FieldsetLegend.displayName = 'FieldsetLegend';

export { Fieldset, FieldsetLegend };
