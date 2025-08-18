'use client';

import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui-components/react/checkbox-group';
import React from 'react';
import { cn } from '@/lib/utils';

const CheckboxGroup = React.forwardRef<
  React.ComponentRef<typeof BaseCheckboxGroup>,
  React.ComponentPropsWithoutRef<typeof BaseCheckboxGroup>
>(({ className, ...props }, ref) => (
  <BaseCheckboxGroup
    className={cn('flex flex-col items-start gap-1', className)}
    ref={ref}
    {...props}
  />
));
CheckboxGroup.displayName = 'CheckboxGroup';

export { CheckboxGroup };
