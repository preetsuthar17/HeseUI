import CodeBlock from '../code-block';

export function RadioInstallation() {
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
        code={'pnpm dlx shadcn@latest add @heseui/radio'}
        lang="package-install"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function RadioDemo() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
