'use client';

import { NumberField as BaseNumberField } from '@base-ui-components/react/number-field';
import React from 'react';
import { cn } from '@/lib/utils';

const NumberField = React.forwardRef<
  React.ComponentRef<typeof BaseNumberField.Root>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Root>
>(function NumberFieldComponent({ className, ...props }, ref) {
  return (
    <BaseNumberField.Root
      className={cn('flex flex-col items-start gap-1', className)}
      ref={ref}
      {...props}
    />
  );
});
NumberField.displayName = 'NumberField';

const NumberFieldScrubArea = React.forwardRef<
  React.ComponentRef<typeof BaseNumberField.ScrubArea>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.ScrubArea>
>(function NumberFieldScrubAreaComponent({ className, ...props }, ref) {
  return (
    <BaseNumberField.ScrubArea
      className={cn('cursor-ew-resize select-none font-medium', className)}
      ref={ref}
      {...props}
    />
  );
});
NumberFieldScrubArea.displayName = 'NumberFieldScrubArea';

const NumberFieldScrubAreaCursor = React.forwardRef<
  React.ComponentRef<typeof BaseNumberField.ScrubAreaCursor>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.ScrubAreaCursor>
>(function NumberFieldScrubAreaCursorComponent({ className, ...props }, ref) {
  return (
    <BaseNumberField.ScrubAreaCursor
      className={cn('drop-shadow-[0_1px_1px_#0008] filter', className)}
      ref={ref}
      {...props}
    />
  );
});
NumberFieldScrubAreaCursor.displayName = 'NumberFieldScrubAreaCursor';

const NumberFieldGroup = React.forwardRef<
  React.ComponentRef<typeof BaseNumberField.Group>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Group>
>(function NumberFieldGroupComponent({ className, ...props }, ref) {
  return (
    <BaseNumberField.Group
      className={cn('flex', className)}
      ref={ref}
      {...props}
    />
  );
});
NumberFieldGroup.displayName = 'NumberFieldGroup';

const NumberFieldDecrement = React.forwardRef<
  React.ComponentRef<typeof BaseNumberField.Decrement>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Decrement>
>(function NumberFieldDecrementComponent({ className, ...props }, ref) {
  return (
    <BaseNumberField.Decrement
      className={cn(
        'flex size-10 select-none items-center justify-center rounded-tl rounded-bl border border-border bg-background bg-clip-padding text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
NumberFieldDecrement.displayName = 'NumberFieldDecrement';

const NumberFieldInput = React.forwardRef<
  React.ComponentRef<typeof BaseNumberField.Input>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Input>
>(function NumberFieldInputComponent({ className, ...props }, ref) {
  return (
    <BaseNumberField.Input
      className={cn(
        'h-10 w-24 border-border border-y text-center text-base text-foreground tabular-nums focus:z-10 focus:outline-none focus:ring-2 focus:ring-ring',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
NumberFieldInput.displayName = 'NumberFieldInput';

const NumberFieldIncrement = React.forwardRef<
  React.ComponentRef<typeof BaseNumberField.Increment>,
  React.ComponentPropsWithoutRef<typeof BaseNumberField.Increment>
>(function NumberFieldIncrementComponent({ className, ...props }, ref) {
  return (
    <BaseNumberField.Increment
      className={cn(
        'flex size-10 select-none items-center justify-center rounded-tr rounded-br border border-border bg-background bg-clip-padding text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
NumberFieldIncrement.displayName = 'NumberFieldIncrement';

export {
  NumberField,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
  NumberFieldGroup,
  NumberFieldDecrement,
  NumberFieldInput,
  NumberFieldIncrement,
};
