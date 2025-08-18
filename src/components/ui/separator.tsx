'use client';

import { Separator as BaseSeparator } from '@base-ui-components/react/separator';
import React from 'react';
import { cn } from '@/lib/utils';

const Separator = React.forwardRef<
  React.ComponentRef<typeof BaseSeparator>,
  React.ComponentPropsWithoutRef<typeof BaseSeparator>
>(({ className, orientation = 'horizontal', ...props }, ref) => (
  <BaseSeparator
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className
    )}
    orientation={orientation}
    ref={ref}
    {...props}
  />
));
Separator.displayName = 'Separator';

export { Separator };
