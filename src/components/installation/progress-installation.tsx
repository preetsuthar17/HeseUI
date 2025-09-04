import CodeBlock from "../code-block";
import { ComponentInstallation } from "../component-installation";

export function ProgressInstallation() {
  return (
    <>
      <ComponentInstallation componentName="progress" />
      <p>example usage</p>
      <CodeBlock
        code={`import { Progress } from '@/components/ui/progress';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-sm space-y-2">
      <Progress value={progress} className="w-[60%]" />
      <Progress value={progress} className="w-[60%]" />
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
