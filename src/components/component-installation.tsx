import CodeBlock from "./code-block";

export function ComponentInstallation({
  componentName,
}: {
  componentName: string;
}) {
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
        code={`pnpm dlx shadcn@latest add @heseui/${componentName}`}
        lang="package-install"
      />
      <p>
        or you can use shadcn@beta to install directly without manual setup:
      </p>
      <CodeBlock
        code={`pnpm dlx shadcn@latest add @heseui/${componentName}`}
        lang="package-install"
      />
    </>
  );
}
