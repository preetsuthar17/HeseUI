"use client";

import { Switch as BaseSwitch } from "@base-ui-components/react/switch";
import React from "react";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ComponentRef<typeof BaseSwitch.Root>,
  React.ComponentPropsWithoutRef<typeof BaseSwitch.Root>
>(function SwitchComponent({ className, ...props }, ref) {
  return (
    <BaseSwitch.Root
      className={cn(
        "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent bg-input text-foreground outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:bg-primary data-[unchecked]:bg-input dark:data-[unchecked]:bg-input/80",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Switch.displayName = "Switch";

const SwitchThumb = React.forwardRef<
  React.ComponentRef<typeof BaseSwitch.Thumb>,
  React.ComponentPropsWithoutRef<typeof BaseSwitch.Thumb>
>(function SwitchThumbComponent({ className, ...props }, ref) {
  return (
    <BaseSwitch.Thumb
      className={cn(
        "aspect-square h-full rounded-full bg-background shadow transition-transform duration-150 data-[checked]:translate-x-3.5",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
SwitchThumb.displayName = "SwitchThumb";

export { Switch, SwitchThumb };
