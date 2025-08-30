import CodeBlock from '../code-block';

export function CheckboxGroupInstallation() {
  return (
    <>
      <p>Install component using the CLI</p>
      <CodeBlock
        code={'pnpm dlx shadcn@latest add @heseui/checkbox-group'}
        lang="package-install"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxGroup } from '@/components/ui/checkbox-group';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function CheckboxGroupDemo() {
  const [value, setValue] = React.useState<string[]>([]);
  const fruits = ['fuji-apple', 'gala-apple', 'granny-smith-apple'];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 font-medium text-lg">Basic Checkbox Group</h3>
        <CheckboxGroup
          aria-labelledby="apples-caption"
          className="flex flex-col items-start gap-2"
          defaultValue={['fuji-apple']}
        >
          <div className="font-medium" id="apples-caption">
            Apples
          </div>

          <label className="flex items-center gap-2" htmlFor="fuji-apple">
            <Checkbox id="fuji-apple" value="fuji-apple" />
            <span>Fuji</span>
          </label>

          <label className="flex items-center gap-2" htmlFor="gala-apple">
            <Checkbox id="gala-apple" value="gala-apple" />
            <span>Gala</span>
          </label>

          <label
            className="flex items-center gap-2"
            htmlFor="granny-smith-apple"
          >
            <Checkbox id="granny-smith-apple" value="granny-smith-apple" />
            <span>Granny Smith</span>
          </label>
        </CheckboxGroup>
      </div>

      <div>
        <h3 className="mb-4 font-medium text-lg">Parent Checkbox Group</h3>
        <CheckboxGroup
          allValues={fruits}
          aria-labelledby="fruits-caption"
          className="flex flex-col items-start gap-2"
          onValueChange={setValue}
          value={value}
        >
          <label
            className="flex items-center gap-2"
            htmlFor="all-fruits"
            id="fruits-caption"
          >
            <Checkbox id="all-fruits" parent />
            <span>All Fruits</span>
          </label>

          <label
            className="flex items-center gap-2"
            htmlFor="fuji-apple-parent"
          >
            <Checkbox id="fuji-apple-parent" value="fuji-apple" />
            <span>Fuji Apple</span>
          </label>

          <label
            className="flex items-center gap-2"
            htmlFor="gala-apple-parent"
          >
            <Checkbox id="gala-apple-parent" value="gala-apple" />
            <span>Gala Apple</span>
          </label>

          <label
            className="flex items-center gap-2"
            htmlFor="granny-smith-apple-parent"
          >
            <Checkbox
              id="granny-smith-apple-parent"
              value="granny-smith-apple"
            />
            <span>Granny Smith Apple</span>
          </label>
        </CheckboxGroup>
      </div>

      <div>
        <h3 className="mb-4 font-medium text-lg">Disabled Checkbox Group</h3>
        <CheckboxGroup
          aria-labelledby="disabled-caption"
          className="flex flex-col items-start gap-2"
          defaultValue={['fuji-apple']}
          disabled
        >
          <div className="font-medium" id="disabled-caption">
            Disabled Options
          </div>

          <label
            className="flex items-center gap-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="fuji-apple-disabled"
          >
            <Checkbox id="fuji-apple-disabled" value="fuji-apple" />
            <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Fuji
            </span>
          </label>

          <label
            className="flex items-center gap-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="gala-apple-disabled"
          >
            <Checkbox id="gala-apple-disabled" value="gala-apple" />
            <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Gala
            </span>
          </label>

          <label
            className="flex items-center gap-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="granny-smith-apple-disabled"
          >
            <Checkbox
              id="granny-smith-apple-disabled"
              value="granny-smith-apple"
            />
            <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Granny Smith
            </span>
          </label>
        </CheckboxGroup>
      </div>
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
