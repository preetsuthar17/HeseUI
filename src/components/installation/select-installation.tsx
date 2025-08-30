import CodeBlock from '../code-block';

export function SelectInstallation() {
  return (
    <>
      <p>Install component using the CLI</p>
      <CodeBlock
        code={
          'pnpm dlx shadcn@latest add @heseui/select'
        }
        lang="bash"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
