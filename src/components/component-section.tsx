import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

type ComponentSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function ComponentSection({
  id,
  title,
  children,
}: ComponentSectionProps) {
  return (
    <div className="flex flex-col gap-4" data-component-section={id}>
      <Collapsible className="w-full">
        <CollapsibleTrigger className="border-none bg-accent/50">
          <h2 className="text-lg">{title}</h2>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 p-4">{children}</div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
