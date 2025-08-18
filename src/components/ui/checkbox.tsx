'use client';

import { Checkbox as BaseCheckbox } from '@base-ui-components/react/checkbox';
import React from 'react';
import { cn } from '@/lib/utils';

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof BaseCheckbox.Root>,
  React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>
>(({ className, ...props }, ref) => (
  <BaseCheckbox.Root
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:border-primary data-[unchecked]:border-border data-[checked]:bg-primary',
      className
    )}
    ref={ref}
    {...props}
  >
    <BaseCheckbox.Indicator
      className={cn(
        'flex items-center justify-center text-primary-foreground data-[unchecked]:hidden'
      )}
    >
      <CheckIcon className="h-3 w-3" />
    </BaseCheckbox.Indicator>
  </BaseCheckbox.Root>
));
Checkbox.displayName = 'Checkbox';

function CheckIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Check</title>
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );
}

export { Checkbox };
