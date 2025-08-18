'use client';

import { Bold, Italic, Underline } from 'lucide-react';
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/togglegroup';
import { ToggleGroupInstallation } from '../installation/togglegroup-installation';
import { Separator } from '../ui/separator';

function getLabel(value: string) {
  if (value === 'bold') {
    return 'Bold';
  }
  if (value === 'italic') {
    return 'Italic';
  }
  if (value === 'underline') {
    return 'Underline';
  }
  return '';
}

const _icons = {
  bold: Bold,
  italic: Italic,
  underline: Underline,
};

const options = [
  { value: 'bold', icon: Bold },
  { value: 'italic', icon: Italic },
  { value: 'underline', icon: Underline },
];

export function ToggleGroupDemo() {
  const [selected, setSelected] = React.useState<string[]>([]);

  function handleChange(values: string[]) {
    setSelected(values);
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <ToggleGroup
          className="w-fit"
          onValueChange={handleChange}
          type="multiple"
          value={selected}
          variant="outline"
        >
          {options.map(({ value, icon: Icon }) => (
            <ToggleGroupItem
              aria-label={`Toggle ${getLabel(value)}`}
              className="flex aspect-square w-8 flex-col items-center justify-center rounded border border-border bg-card transition-colors duration-150 hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              key={value}
              value={value}
            >
              <Icon className="h-6 w-6" />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <Separator />
      <ToggleGroupInstallation />
    </div>
  );
}
