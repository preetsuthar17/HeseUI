'use client';

import { Bold } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { ToggleInstallation } from '../installation/toggle-installation';
import { Separator } from '../ui/separator';

export function ToggleDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Toggle aria-label="Toggle bold" className="w-fit p-2">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Separator />
      <ToggleInstallation />
    </div>
  );
}
