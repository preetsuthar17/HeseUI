'use client';

import { Input } from '@/components/ui/input';
import { InputInstallation } from '../installation/input-installation';
import { Separator } from '../ui/separator';

export function InputDemo() {
  return (
    <div className='flex flex-col gap-8'>
      <div className="flex flex-wrap gap-8">
      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Basic Input</h3>
        <Input className="w-full max-w-64" placeholder="Name" />
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Disabled</h3>
        <Input className="w-full max-w-64" disabled placeholder="Disabled" />
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Password</h3>
        <Input
          className="w-full max-w-64"
          placeholder="Password"
          type="password"
        />
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">With Default Value</h3>
        <Input className="w-full max-w-64" defaultValue="John Doe" />
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Validation States</h3>
        <div className="flex w-full max-w-64 flex-col gap-3">
          <Input aria-invalid className="w-full" placeholder="Invalid input" />
          <Input className="w-full" defaultValue="Valid" />
        </div>
      </div>
    </div>
    <Separator/>
    <InputInstallation/>
    </div>
  );
}
