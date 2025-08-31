import CodeBlock from '../code-block';

export function CollapsibleInstallation() {
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
        code={'pnpm dlx shadcn@latest add @heseui/collapsible'}
        lang="package-install"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-4 font-medium text-lg">Basic Collapsible</h3>
        <Collapsible className="w-full max-w-md">
          <CollapsibleTrigger>Recovery keys</CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex flex-col gap-2 rounded bg-muted p-4">
              <div className="font-mono text-sm">alien-bean-pasta</div>
              <div className="font-mono text-sm">wild-irish-burrito</div>
              <div className="font-mono text-sm">horse-battery-staple</div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div>
        <h3 className="mb-4 font-medium text-lg">Controlled Collapsible</h3>
        <Collapsible
          className="w-full max-w-md"
          onOpenChange={setIsOpen}
          open={isOpen}
        >
          <CollapsibleTrigger>
            Click to {isOpen ? 'close' : 'open'}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex flex-col gap-2 rounded bg-muted p-4">
              <p className="text-muted-foreground text-sm">
                This collapsible is controlled by React state. The trigger text
                changes based on the open state.
              </p>
              <p className="text-muted-foreground text-sm">
                Current state: {isOpen ? 'Open' : 'Closed'}
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div>
        <h3 className="mb-4 font-medium text-lg">Default Open Collapsible</h3>
        <Collapsible className="w-full max-w-md" defaultOpen>
          <CollapsibleTrigger>Settings</CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex flex-col gap-3 rounded bg-muted p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Notifications</span>
                <span className="text-muted-foreground text-xs">Enabled</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Auto-save</span>
                <span className="text-muted-foreground text-xs">Enabled</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Dark mode</span>
                <span className="text-muted-foreground text-xs">Disabled</span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div>
        <h3 className="mb-4 font-medium text-lg">Disabled Collapsible</h3>
        <Collapsible className="w-full max-w-md" disabled>
          <CollapsibleTrigger>Disabled Section</CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex flex-col gap-2 rounded bg-muted p-4">
              <p className="text-muted-foreground text-sm">
                This content cannot be accessed because the collapsible is
                disabled.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
