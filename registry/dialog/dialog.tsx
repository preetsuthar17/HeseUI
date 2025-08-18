'use client';

import { Dialog as BaseDialog } from '@base-ui-components/react/dialog';
import React from 'react';
import { cn } from '@/lib/utils';

const Dialog = React.forwardRef<
  React.ComponentRef<typeof BaseDialog.Root>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Root>
>(({ ...props }, _ref) => <BaseDialog.Root {...props} />);
Dialog.displayName = 'Dialog';

const DialogTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseDialog.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Trigger>
>(({ className, ...props }, ref) => (
  <BaseDialog.Trigger
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    ref={ref}
    {...props}
  />
));
DialogTrigger.displayName = 'DialogTrigger';

const DialogPortal = React.forwardRef<
  React.ComponentRef<typeof BaseDialog.Portal>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Portal>
>(({ ...props }, _ref) => <BaseDialog.Portal {...props} />);
DialogPortal.displayName = 'DialogPortal';

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof BaseDialog.Backdrop>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>
>(({ className, ...props }, ref) => (
  <BaseDialog.Backdrop
    className={cn(
      'fixed inset-0 bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70',
      className
    )}
    ref={ref}
    {...props}
  />
));
DialogOverlay.displayName = 'DialogOverlay';

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof BaseDialog.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <BaseDialog.Popup
      className={cn(
        '-mt-8 -translate-x-1/2 -translate-y-1/2 fixed top-[calc(50%+1.25rem*var(--nested-dialogs))] left-1/2 w-96 max-w-[calc(100vw-3rem)] scale-[calc(1-0.1*var(--nested-dialogs))] rounded bg-background p-6 text-foreground outline outline-border transition-all duration-150 data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[nested-dialog-open]:after:absolute data-[nested-dialog-open]:after:inset-0 data-[nested-dialog-open]:after:rounded-[inherit] data-[nested-dialog-open]:after:bg-black/5',
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseDialog.Popup>
  </DialogPortal>
));
DialogContent.displayName = 'DialogContent';

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col gap-1.5 text-center sm:text-left', className)}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2',
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof BaseDialog.Title>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Title>
>(({ className, ...props }, ref) => (
  <BaseDialog.Title
    className={cn('-mt-1.5 mb-1 font-medium text-lg', className)}
    ref={ref}
    {...props}
  />
));
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof BaseDialog.Description>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Description>
>(({ className, ...props }, ref) => (
  <BaseDialog.Description
    className={cn('mb-6 text-base text-muted-foreground', className)}
    ref={ref}
    {...props}
  />
));
DialogDescription.displayName = 'DialogDescription';

const DialogClose = React.forwardRef<
  React.ComponentRef<typeof BaseDialog.Close>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Close>
>(({ className, ...props }, ref) => (
  <BaseDialog.Close
    className={cn(
      'inline-flex h-10 items-center justify-center whitespace-nowrap rounded bg-secondary px-4 py-2 font-medium text-secondary-foreground text-sm ring-offset-background transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    ref={ref}
    {...props}
  />
));
DialogClose.displayName = 'DialogClose';

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
