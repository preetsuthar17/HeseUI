import CodeBlock from "../code-block";

export function ProgressInstallation() {
    return(
        <>
            <p>Install component using the CLI</p>
            <CodeBlock
                code={`pnpm dlx shadcn@latest add http://base.hextaui.com/r/progress.json`}
                lang="bash"
            />
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
    )
}
