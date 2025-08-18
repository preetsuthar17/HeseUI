'use client';

import { Switch, SwitchThumb } from '@/components/ui/switch';

export function SwitchDemo() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Basic</h3>
        <Switch defaultChecked>
          <SwitchThumb />
        </Switch>
      </div>
      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Disabled</h3>
        <Switch disabled>
          <SwitchThumb />
        </Switch>
      </div>
    </div>
  );
}
