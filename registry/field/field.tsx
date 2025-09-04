"use client";

import { Field as BaseField } from "@base-ui-components/react/field";
import React from "react";
import { cn } from "@/lib/utils";

const Field = React.forwardRef<
  React.ComponentRef<typeof BaseField.Root>,
  React.ComponentPropsWithoutRef<typeof BaseField.Root>
>(function FieldComponent({ className, ...props }, ref) {
  return (
    <BaseField.Root
      className={cn("flex w-full flex-col items-start gap-1", className)}
      ref={ref}
      {...props}
    />
  );
});
Field.displayName = "Field";

const FieldLabel = React.forwardRef<
  React.ComponentRef<typeof BaseField.Label>,
  React.ComponentPropsWithoutRef<typeof BaseField.Label>
>(function FieldLabelComponent({ className, ...props }, ref) {
  return (
    <BaseField.Label
      className={cn("font-medium text-sm", className)}
      ref={ref}
      {...props}
    />
  );
});
FieldLabel.displayName = "FieldLabel";

const FieldControl = React.forwardRef<
  React.ComponentRef<typeof BaseField.Control>,
  React.ComponentPropsWithoutRef<typeof BaseField.Control>
>(function FieldControlComponent({ className, ...props }, ref) {
  return (
    <BaseField.Control
      className={cn(
        "flex h-9 w-full min-w-0 rounded border border-border bg-transparent px-3 py-1 text-base text-foreground outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[2px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
FieldControl.displayName = "FieldControl";

const FieldDescription = React.forwardRef<
  React.ComponentRef<typeof BaseField.Description>,
  React.ComponentPropsWithoutRef<typeof BaseField.Description>
>(function FieldDescriptionComponent({ className, ...props }, ref) {
  return (
    <BaseField.Description
      className={cn("text-muted-foreground text-sm", className)}
      ref={ref}
      {...props}
    />
  );
});
FieldDescription.displayName = "FieldDescription";

const FieldError = React.forwardRef<
  React.ComponentRef<typeof BaseField.Error>,
  React.ComponentPropsWithoutRef<typeof BaseField.Error>
>(function FieldErrorComponent({ className, ...props }, ref) {
  return (
    <BaseField.Error
      className={cn("text-destructive text-sm", className)}
      ref={ref}
      {...props}
    />
  );
});
FieldError.displayName = "FieldError";

const FieldValidity = React.forwardRef<
  React.ComponentRef<typeof BaseField.Validity>,
  React.ComponentPropsWithoutRef<typeof BaseField.Validity>
>(function FieldValidityComponent(props, _ref) {
  return <BaseField.Validity {...props} />;
});
FieldValidity.displayName = "FieldValidity";

export {
  Field,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldValidity,
};
