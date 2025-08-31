import CodeBlock from '../code-block';

export function SliderInstallation() {
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
        code={'pnpm dlx shadcn@latest add @heseui/slider'}
        lang="package-install"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import { Slider } from '@/components/ui/slider';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function SliderDemo() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Slider
        defaultValue={[33]}
        max={100}
        step={1}
        className="w-[60%]"
      />
      <Slider
        defaultValue={[33, 66]}
        max={100}
        step={1}
        className="w-[60%]"
      />
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
