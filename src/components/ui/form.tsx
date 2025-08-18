'use client';

import { Form as BaseForm } from '@base-ui-components/react/form';
import React from 'react';
import { cn } from '@/lib/utils';

const Form = React.forwardRef<
  React.ComponentRef<typeof BaseForm>,
  React.ComponentPropsWithoutRef<typeof BaseForm>
>(function FormComponent({ className, ...props }, ref) {
  return (
    <BaseForm
      className={cn('flex w-full flex-col gap-4', className)}
      ref={ref}
      {...props}
    />
  );
});
Form.displayName = 'Form';

export { Form };
