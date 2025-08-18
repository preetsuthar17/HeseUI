'use client';

import { Bold } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold" className="w-fit p-2">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}
