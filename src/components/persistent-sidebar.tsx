'use client';

import { memo } from 'react';
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '@/components/ui/scrollarea';
import { ComponentNavigation } from './component-navigation';

const PersistentSidebar = memo(function PersistentSidebar() {
  return (
    <aside className="sticky top-0 hidden h-[calc(100dvh-2rem)] w-full overflow-visible lg:block">
      <ScrollArea className="h-full">
        <ScrollAreaViewport className="h-full border-transparent pb-8 outline-transparent">
          <ScrollAreaContent>
            <ComponentNavigation />
          </ScrollAreaContent>
          <ScrollAreaScrollbar className="bg-transparent">
            <ScrollAreaThumb className="bg-secondary" />
          </ScrollAreaScrollbar>
        </ScrollAreaViewport>
      </ScrollArea>
    </aside>
  );
});

export { PersistentSidebar };
