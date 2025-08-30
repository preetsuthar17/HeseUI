import CodeBlock from '../code-block';

export function TooltipInstallation() {
  return (
    <>
      <p>Install component using the CLI</p>
      <CodeBlock
        code={
          'pnpm dlx shadcn@latest add @heseui/tooltip'
        }
        lang="bash"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
