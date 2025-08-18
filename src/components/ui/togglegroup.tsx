'use client';

import { Toggle as BaseToggle } from '@base-ui-components/react/toggle';
import { ToggleGroup as BaseToggleGroup } from '@base-ui-components/react/toggle-group';
import React from 'react';
import { cn } from '@/lib/utils';

type ToggleGroupShadcnProps = {
  variant?: 'default' | 'outline';
  type?: 'single' | 'multiple';
};

type ToggleGroupProps = React.ComponentPropsWithoutRef<typeof BaseToggleGroup> &
  ToggleGroupShadcnProps;

const ToggleGroup = React.forwardRef<
  React.ComponentRef<typeof BaseToggleGroup>,
  ToggleGroupProps
>(function ToggleGroupComponent(
  { className, variant = 'default', type, ...props },
  ref
) {
  const variantCls =
    variant === 'outline'
      ? 'rounded border border-border bg-secondary p-0.5'
      : '';
  return (
    <BaseToggleGroup
      className={cn('flex gap-1', variantCls, className)}
      ref={ref}
      toggleMultiple={type === 'multiple'}
      {...props}
    />
  );
});
ToggleGroup.displayName = 'ToggleGroup';

const ToggleGroupItem = React.forwardRef<
  React.ComponentRef<typeof BaseToggle>,
  React.ComponentPropsWithoutRef<typeof BaseToggle>
>(function ToggleGroupItemComponent({ className, ...props }, ref) {
  return (
    <BaseToggle
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-medium text-sm outline-none transition-[color,box-shadow] hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[pressed]:bg-accent data-[state=on]:bg-accent data-[pressed]:text-accent-foreground data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg:not([class*="size-"])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
ToggleGroupItem.displayName = 'ToggleGroupItem';

export { ToggleGroup, ToggleGroupItem };
