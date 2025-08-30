import CodeBlock from '../code-block';

export function SwitchInstallation() {
  return (
    <>
      <p>Install component using the CLI</p>
      <CodeBlock
        code={
          'pnpm dlx shadcn@latest add @heseui/switch'
        }
        lang="bash"
      />
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
