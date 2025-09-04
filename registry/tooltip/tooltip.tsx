"use client";

import { Tooltip as BaseTooltip } from "@base-ui-components/react/tooltip";
import React from "react";
import { cn } from "@/lib/utils";

const TooltipProvider = React.forwardRef<
  React.ComponentRef<typeof BaseTooltip.Provider>,
  React.ComponentPropsWithoutRef<typeof BaseTooltip.Provider>
>(function TooltipProviderComponent(props, _ref) {
  return <BaseTooltip.Provider {...props} />;
});
TooltipProvider.displayName = "TooltipProvider";

const Tooltip = React.forwardRef<
  React.ComponentRef<typeof BaseTooltip.Root>,
  React.ComponentPropsWithoutRef<typeof BaseTooltip.Root>
>(function TooltipComponent(props, _ref) {
  return <BaseTooltip.Root {...props} />;
});
Tooltip.displayName = "Tooltip";

const TooltipTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseTooltip.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseTooltip.Trigger>
>(function TooltipTriggerComponent({ className, ...props }, ref) {
  return (
    <BaseTooltip.Trigger
      className={cn(
        "flex size-8 select-none items-center justify-center rounded text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:bg-accent data-[popup-open]:bg-accent focus-visible:[&:not(:hover)]:bg-transparent",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipPortal = React.forwardRef<
  React.ComponentRef<typeof BaseTooltip.Portal>,
  React.ComponentPropsWithoutRef<typeof BaseTooltip.Portal>
>(function TooltipPortalComponent(props, _ref) {
  return <BaseTooltip.Portal {...props} />;
});
TooltipPortal.displayName = "TooltipPortal";

const TooltipPositioner = React.forwardRef<
  React.ComponentRef<typeof BaseTooltip.Positioner>,
  React.ComponentPropsWithoutRef<typeof BaseTooltip.Positioner>
>(function TooltipPositionerComponent({ className, ...props }, ref) {
  return (
    <BaseTooltip.Positioner
      className={cn("", className)}
      ref={ref}
      {...props}
    />
  );
});
TooltipPositioner.displayName = "TooltipPositioner";

const TooltipPopup = React.forwardRef<
  React.ComponentRef<typeof BaseTooltip.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseTooltip.Popup>
>(function TooltipPopupComponent({ className, ...props }, ref) {
  return (
    <BaseTooltip.Popup
      className={cn(
        "flex origin-[var(--transform-origin)] flex-col rounded bg-popover px-2 py-1 text-popover-foreground text-sm outline outline-border transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[instant]:duration-0",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TooltipPopup.displayName = "TooltipPopup";

const TooltipContent = TooltipPopup;

const TooltipArrow = React.forwardRef<
  React.ComponentRef<typeof BaseTooltip.Arrow>,
  React.ComponentPropsWithoutRef<typeof BaseTooltip.Arrow>
>(function TooltipArrowComponent({ className, ...props }, ref) {
  return (
    <BaseTooltip.Arrow
      className={cn(
        "data-[side=right]:-rotate-90 data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=top]:bottom-[-8px] data-[side=right]:left-[-13px] data-[side=left]:rotate-90 data-[side=top]:rotate-180",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TooltipArrow.displayName = "TooltipArrow";

export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPortal,
  TooltipPositioner,
  TooltipPopup,
  TooltipContent,
  TooltipArrow,
};
