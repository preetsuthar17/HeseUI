import CodeBlock from "../code-block";

export function CheckboxInstallation() {
    return(
        <>
            <p>Install component using the CLI</p>
            <CodeBlock
                code={`pnpm dlx shadcn@latest add http://base.hextaui.com/r/checkbox.json`}
                lang="bash"
            />
            <p>example usage</p>
            <CodeBlock
                code={`import { Checkbox } from '@/components/ui/checkbox';`}
                lang="tsx"
            />
            
            <CodeBlock
                code={`export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <label htmlFor="terms">Accept terms and conditions</label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox defaultChecked id="terms-2" />
        <div className="flex flex-col gap-1">
          <label htmlFor="terms-2">Accept terms and conditions</label>
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox disabled id="toggle" />
        <label
          className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="toggle"
        >
          Enable notifications
        </label>
      </div>
      <div className="flex items-center gap-3 rounded border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-primary has-[[aria-checked=true]]:bg-primary/10 dark:has-[[aria-checked=true]]:border-primary dark:has-[[aria-checked=true]]:bg-primary/20">
        <Checkbox
          className="data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          defaultChecked
          id="toggle-2"
        />
        <div className="flex flex-col gap-1 font-normal">
          <label
            className="font-medium text-sm leading-none"
            htmlFor="toggle-2"
          >
            Enable notifications
          </label>
          <p className="text-muted-foreground text-sm">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </div>
    </div>
  );
}`}
                lang="tsx"
            />

        </>
    )
}
