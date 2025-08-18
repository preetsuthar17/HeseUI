'use client';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio';

export function RadioGroupDemo() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Basic</h3>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center gap-3">
            <RadioGroupItem id="r1" value="default" />
            <label className="font-medium text-sm leading-none" htmlFor="r1">
              Default
            </label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem id="r2" value="comfortable" />
            <label className="font-medium text-sm leading-none" htmlFor="r2">
              Comfortable
            </label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem id="r3" value="compact" />
            <label className="font-medium text-sm leading-none" htmlFor="r3">
              Compact
            </label>
          </div>
        </RadioGroup>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">States</h3>
        <RadioGroup defaultValue="b" disabled>
          <div className="flex items-center gap-3">
            <RadioGroupItem id="s1" value="a" />
            <label
              className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="s1"
            >
              Option A
            </label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem id="s2" value="b" />
            <label
              className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="s2"
            >
              Option B
            </label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
