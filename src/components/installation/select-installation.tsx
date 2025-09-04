import CodeBlock from "../code-block";
import { ComponentInstallation } from "../component-installation";

export function SelectInstallation() {
  return (
    <>
      <ComponentInstallation componentName="select" />
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
