import CodeBlock from '../code-block';

export function ToggleInstallation() {
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
        code={'pnpm dlx shadcn@latest add @heseui/toggle'}
        lang="package-install"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import { Toggle } from '@/components/ui/toggle';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function ToggleDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Toggle aria-label="Toggle italic">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle bold" pressed>
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle strikethrough" disabled>
        <Strikethrough className="h-4 w-4" />
      </Toggle>
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
