import CodeBlock from '../code-block';

export function ProgressInstallation() {
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
        code={'pnpm dlx shadcn@latest add @heseui/progress'}
        lang="package-install"
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
  );
}
