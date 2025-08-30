import CodeBlock from '../code-block';

export function AvatarInstallation() {
  return (
    <>
      <p>Install component using the CLI</p>
      <CodeBlock
        code={
          'pnpm dlx shadcn@latest add @heseui/avatar'
        }
        lang="bash"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar>
        <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          alt="@preetsuthar17"
          src="https://github.com/preetsuthar17.png"
        />
        <AvatarFallback>PS</AvatarFallback>
      </Avatar>
      <Avatar className="rounded">
        <AvatarImage
          alt="@evilrabbit"
          src="https://github.com/evilrabbit.png"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <div className="-space-x-2 flex *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage alt="@leerob" src="https://github.com/leerob.png" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
