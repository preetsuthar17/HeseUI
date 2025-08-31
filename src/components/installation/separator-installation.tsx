import CodeBlock from '../code-block';

export function SeparatorInstallation() {
  return (
    <>
      <p>Install component using the CLI</p>
      <CodeBlock
        code={'pnpm dlx shadcn@latest add @heseui/separator'}
        lang="package-install"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import { Separator } from '@/components/ui/separator';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">HeseUI</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
