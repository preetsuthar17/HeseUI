import CodeBlock from "../code-block";
import { ComponentInstallation } from "../component-installation";

export function ButtonInstallation() {
  return (
    <>
      <ComponentInstallation componentName="button" />
      <p>example usage</p>
      <CodeBlock
        code={`import { Button } from '@/components/ui/button';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
