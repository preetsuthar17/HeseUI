'use client';

import { Button } from '@/components/ui/button';
import { ToastToaster, toast } from '@/components/ui/toast';

export function ToastDemo() {
  return (
    <>
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
    </>
  );
}
