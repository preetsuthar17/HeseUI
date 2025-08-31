'use client';

import { Button } from '@/components/ui/button';
import { ToastToaster, toast } from '@/components/ui/toast';
import { ToastInstallation } from '../installation/toast-installation';
import { Separator } from '../ui/separator';

export function ToastDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
        variant="outline"
      >
        Show Toast
      </Button>
      <ToastToaster />

      <Separator />
      <ToastInstallation />
    </div>
  );
}
