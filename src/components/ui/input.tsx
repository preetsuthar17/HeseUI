'use client';

import { Input as BaseInput } from '@base-ui-components/react/input';
import React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef<
  React.ComponentRef<typeof BaseInput>,
  React.ComponentPropsWithoutRef<typeof BaseInput>
>(function InputComponent({ className, ...props }, ref) {
  return (
    <BaseInput
      className={cn(
        'flex h-9 w-full min-w-0 rounded border border-border bg-transparent px-3 py-1 text-base text-foreground outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[2px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
