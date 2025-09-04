import CodeBlock from "../code-block";
import { ComponentInstallation } from "../component-installation";

export function ToastInstallation() {
  return (
    <>
      <ComponentInstallation componentName="toast" />
      <p>example usage</p>
      <CodeBlock
        code={`import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 3:00 PM",
          });
        }}
      >
        Add to calendar
      </Button>
      
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show error toast
      </Button>
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
