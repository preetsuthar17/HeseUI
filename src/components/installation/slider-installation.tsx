import CodeBlock from "../code-block";
import { ComponentInstallation } from "../component-installation";

export function SliderInstallation() {
  return (
    <>
      <ComponentInstallation componentName="slider" />
      <p>example usage</p>
      <CodeBlock
        code={`import { Slider } from '@/components/ui/slider';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function SliderDemo() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Slider
        defaultValue={[33]}
        max={100}
        step={1}
        className="w-[60%]"
      />
      <Slider
        defaultValue={[33, 66]}
        max={100}
        step={1}
        className="w-[60%]"
      />
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
