"use client";

import React from "react";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from "@/components/ui/numberfield";
import { NumberFieldInstallation } from "../installation/numberfield-installation";
import { Separator } from "../ui/separator";

export function NumberFieldDemo() {
  const id = React.useId();
  return (
    <div className="flex flex-col gap-8">
      <NumberField
        className="flex flex-col items-start gap-1"
        defaultValue={100}
        id={id}
      >
        <NumberFieldScrubArea className="cursor-ew-resize">
          <label
            className="cursor-ew-resize font-medium text-foreground text-sm"
            htmlFor={id}
          >
            Amount
          </label>
          <NumberFieldScrubAreaCursor className="drop-shadow-[0_1px_1px_#0008] filter">
            <CursorGrowIcon />
          </NumberFieldScrubAreaCursor>
        </NumberFieldScrubArea>

        <NumberFieldGroup className="flex">
          <NumberFieldDecrement className="flex size-10 select-none items-center justify-center rounded-tl-md rounded-bl-md border border-border bg-background bg-clip-padding text-foreground hover:bg-accent active:bg-accent">
            <MinusIcon />
          </NumberFieldDecrement>
          <NumberFieldInput className="h-10 w-24 border-border border-y text-center text-base text-foreground tabular-nums focus:z-10 focus:outline-none focus:ring-2 focus:ring-ring" />
          <NumberFieldIncrement className="flex size-10 select-none items-center justify-center rounded-tr-md rounded-br-md border border-border bg-background bg-clip-padding text-foreground hover:bg-accent active:bg-accent">
            <PlusIcon />
          </NumberFieldIncrement>
        </NumberFieldGroup>
      </NumberField>
      <Separator />
      <NumberFieldInstallation />
    </div>
  );
}

function CursorGrowIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="black"
      height="14"
      stroke="white"
      viewBox="0 0 24 14"
      width="26"
      {...props}
    >
      <title>Scrub cursor</title>
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      height="10"
      stroke="currentcolor"
      strokeWidth="1.6"
      viewBox="0 0 10 10"
      width="10"
      {...props}
    >
      <title>Increment</title>
      <path d="M0 5H5M10 5H5M5 5V0M5 5V10" />
    </svg>
  );
}

function MinusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      fill="none"
      height="10"
      stroke="currentcolor"
      strokeWidth="1.6"
      viewBox="0 0 10 10"
      width="10"
      {...props}
    >
      <title>Decrement</title>
      <path d="M0 5H10" />
    </svg>
  );
}
