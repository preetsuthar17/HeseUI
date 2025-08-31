import CodeBlock from '../code-block';

export function ToggleGroupInstallation() {
  return (
    <>
      <p>Adding registry to components.json</p>
      <p>
        Head over to <kbd>components.json</kbd> and add the following:
      </p>
      <CodeBlock
        code={`{
  "tailwind": {
    // code
  },
  "aliases": {
    // code
  },

  // add the following
  "registries": {
    "@heseui": "https://www.heseui.com/r/{name}.json"
  }
}`}
        lang="json"
      />
      <p>Install component using the CLI</p>
      <CodeBlock
        code={'pnpm dlx shadcn@latest add @heseui/toggle-group'}
        lang="package-install"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import { Bold, Italic, Underline } from 'lucide-react';
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/togglegroup';`}
        lang="tsx"
      />

      <CodeBlock
        code={`function getLabel(value: string) {
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
            aria-label={\`Toggle \${getLabel(value)}\`}
            className="flex aspect-square w-8 flex-col items-center justify-center rounded border border-border bg-card transition-colors duration-150 hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            key={value}
            value={value}
          >
            <Icon className="h-6 w-6" />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
