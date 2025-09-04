"use client";

import { useState } from "react";
import { ComponentNavigation } from "@/components/component-navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/scrollarea";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`sticky top-6 z-30 rounded bg-accent backdrop-blur supports-[backdrop-filter]:bg-background/90 lg:hidden ${
        open ? "border-border border-b" : ""
      }`}
    >
      <Collapsible className="w-full" onOpenChange={setOpen} open={open}>
        <CollapsibleTrigger className="rounded border-0 px-4 py-3 text-base backdrop-blur supports-[backdrop-filter]:bg-accent/50">
          Components
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ScrollArea>
            <ScrollAreaViewport className="max-h-[calc(30dvh-1.5rem)]">
              <ScrollAreaContent>
                <ComponentNavigation />
              </ScrollAreaContent>
              <ScrollAreaScrollbar className="bg-transparent">
                <ScrollAreaThumb className="bg-secondary" />
              </ScrollAreaScrollbar>
            </ScrollAreaViewport>
          </ScrollArea>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
