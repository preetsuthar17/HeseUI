"use client";

import { Toggle as BaseToggle } from "@base-ui-components/react/toggle";
import React from "react";
import { cn } from "@/lib/utils";

const Toggle = React.forwardRef<
  React.ComponentRef<typeof BaseToggle>,
  React.ComponentPropsWithoutRef<typeof BaseToggle>
>(function ToggleComponent({ className, ...props }, ref) {
  return (
    <BaseToggle
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-medium text-sm outline-none transition-[color,box-shadow] hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[pressed]:bg-accent data-[state=on]:bg-accent data-[pressed]:text-accent-foreground data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg:not([class*="size-"])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Toggle.displayName = "Toggle";

export { Toggle };
