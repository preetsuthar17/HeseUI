import CodeBlock from "../code-block";
import { ComponentInstallation } from "../component-installation";

export function TooltipInstallation() {
  return (
    <>
      <ComponentInstallation componentName="tooltip" />
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
    <TooltipProvider delay={10}>
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
