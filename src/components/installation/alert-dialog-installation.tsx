import CodeBlock from "../code-block";
import { ComponentInstallation } from "../component-installation";

export function AlertDialogInstallation() {
  return (
    <>
      <ComponentInstallation componentName="alert-dialog" />
      <p>example usage</p>
      <CodeBlock
        code={`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={
          'inline-flex h-10 w-fit items-center justify-center whitespace-nowrap rounded border border-border bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
        }
      >
        Show Dialog
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
