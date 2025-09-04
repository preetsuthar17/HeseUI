import CodeBlock from "../code-block";
import { ComponentInstallation } from "../component-installation";

export function ToggleInstallation() {
  return (
    <>
      <ComponentInstallation componentName="toggle" />
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
