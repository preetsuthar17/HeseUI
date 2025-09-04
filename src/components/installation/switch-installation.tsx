import CodeBlock from "../code-block";
import { ComponentInstallation } from "../component-installation";

export function SwitchInstallation() {
  return (
    <>
      <ComponentInstallation componentName="switch" />
      <p>example usage</p>
      <CodeBlock
        code={`import { Switch } from '@/components/ui/switch';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
