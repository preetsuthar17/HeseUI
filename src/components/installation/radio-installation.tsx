import CodeBlock from "../code-block";

export function RadioInstallation() {
    return(
        <>
            <p>Install component using the CLI</p>
            <CodeBlock
                code={`pnpm dlx shadcn@latest add http://base.hextaui.com/r/radio.json`}
                lang="bash"
            />
            <p>example usage</p>
            <CodeBlock
                code={`import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';`}
                lang="tsx"
            />
            
            <CodeBlock
                code={`export function RadioDemo() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  );
}`}
                lang="tsx"
            />

        </>
    )
}
