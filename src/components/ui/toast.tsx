'use client';

import { Toast as BaseToast } from '@base-ui-components/react/toast';
import React from 'react';
import { cn } from '@/lib/utils';

const ToastProvider = React.forwardRef<
  React.ComponentRef<typeof BaseToast.Provider>,
  React.ComponentPropsWithoutRef<typeof BaseToast.Provider>
>(function ToastProviderComponent(props, _ref) {
  return <BaseToast.Provider {...props} />;
});
ToastProvider.displayName = 'ToastProvider';

const ToastPortal = React.forwardRef<
  React.ComponentRef<typeof BaseToast.Portal>,
  React.ComponentPropsWithoutRef<typeof BaseToast.Portal>
>(function ToastPortalComponent(props, _ref) {
  return <BaseToast.Portal {...props} />;
});
ToastPortal.displayName = 'ToastPortal';

const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof BaseToast.Viewport>,
  React.ComponentPropsWithoutRef<typeof BaseToast.Viewport>
>(function ToastViewportComponent({ className, ...props }, ref) {
  return (
    <BaseToast.Viewport
      className={cn(
        'fixed right-4 bottom-4 z-50 mx-auto flex w-[250px] sm:right-8 sm:bottom-8 sm:w-[300px]',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
ToastViewport.displayName = 'ToastViewport';

const ToastRoot = React.forwardRef<
  React.ComponentRef<typeof BaseToast.Root>,
  React.ComponentPropsWithoutRef<typeof BaseToast.Root>
>(function ToastRootComponent({ className, style, ...props }, ref) {
  const mergedStyle: React.CSSProperties = {
    ...(style as React.CSSProperties),
    ['--gap' as string]: '0.75rem',
    ['--offset-y' as string]: 'var(--toast-offset-y)',
  };
  return (
    <BaseToast.Root
      className={cn(
        'absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] mr-0 w-full select-none rounded border border-border bg-background p-4 text-foreground transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+calc(min(var(--toast-index),10)*-15px)))_scale(calc(max(0,1-(var(--toast-index)*0.1))))] after:absolute after:bottom-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-["""] data-[ending-style]:opacity-0 data-[limited]:opacity-0 data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y)))] data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[starting-style]:[transform:translateY(150%)] data-[ending-style]:[&:not([data-limited])]:[transform:translateY(150%)]',
        className
      )}
      ref={ref}
      style={mergedStyle}
      {...props}
    />
  );
});
ToastRoot.displayName = 'ToastRoot';

const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof BaseToast.Title>,
  React.ComponentPropsWithoutRef<typeof BaseToast.Title>
>(function ToastTitleComponent({ className, ...props }, ref) {
  return (
    <BaseToast.Title
      className={cn('font-medium text-[0.975rem] leading-5', className)}
      ref={ref}
      {...props}
    />
  );
});
ToastTitle.displayName = 'ToastTitle';

const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof BaseToast.Description>,
  React.ComponentPropsWithoutRef<typeof BaseToast.Description>
>(function ToastDescriptionComponent({ className, ...props }, ref) {
  return (
    <BaseToast.Description
      className={cn(
        'text-[0.925rem] text-muted-foreground leading-5',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
ToastDescription.displayName = 'ToastDescription';

const ToastAction = React.forwardRef<
  React.ComponentRef<typeof BaseToast.Action>,
  React.ComponentPropsWithoutRef<typeof BaseToast.Action>
>(function ToastActionComponent({ className, ...props }, ref) {
  return (
    <BaseToast.Action
      className={cn(
        'mt-2 mr-auto inline-flex h-8 w-fit items-center justify-center rounded bg-primary px-3 font-medium text-primary-foreground text-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
ToastAction.displayName = 'ToastAction';

const ToastClose = React.forwardRef<
  React.ComponentRef<typeof BaseToast.Close>,
  React.ComponentPropsWithoutRef<typeof BaseToast.Close>
>(function ToastCloseComponent({ className, ...props }, ref) {
  return (
    <BaseToast.Close
      className={cn(
        'absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
ToastClose.displayName = 'ToastClose';

const useToastManager = BaseToast.useToastManager;
const createToastManager = BaseToast.createToastManager;

const defaultToastManager = createToastManager();

type SimpleToastOptions = {
  description?: string;
  action?: { label: string; onClick: () => void };
  timeout?: number;
  type?: string;
};

function ToastList() {
  const { toasts } = useToastManager();
  return toasts.map((t) => (
    <ToastRoot key={t.id} toast={t}>
      <ToastTitle />
      <ToastDescription />
      {t.actionProps ? <ToastAction /> : null}
      <ToastClose aria-label="Close" />
    </ToastRoot>
  ));
}

function ToastToasterComponent() {
  return (
    <ToastProvider toastManager={defaultToastManager}>
      <ToastPortal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  );
}

function toast(title: string, options?: SimpleToastOptions) {
  defaultToastManager.add({
    title,
    description: options?.description,
    timeout: options?.timeout,
    actionProps: options?.action
      ? { children: options.action.label, onClick: options.action.onClick }
      : undefined,
    type: options?.type,
  });
}

export {
  ToastProvider,
  ToastPortal,
  ToastViewport,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  useToastManager,
  createToastManager,
  ToastToasterComponent as ToastToaster,
  toast,
};
