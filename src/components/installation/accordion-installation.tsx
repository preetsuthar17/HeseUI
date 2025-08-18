import CodeBlock from "../code-block";

export function AccordionInstallation() {
    return(
        <>
            <p>Install component using the CLI</p>
            <CodeBlock
                code={`pnpm dlx shadcn@latest add http://base.hextaui.com/r/accordion.json`}
                lang="bash"
            />
            <p>example usage</p>
            <CodeBlock
                code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';`}
                lang="tsx"
            />
            
            <CodeBlock
                code={`
export function AccordionDemo() {
  return (
    <div className='flex flex-col gap-8'>
      <Accordion
        className="w-full text-base"
        collapsible
        defaultValue={['item-1']}
        type="single"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Separator/>
      <AccordionInstallation/>
    </div>
  );
}`}
                lang="tsx"
            />

        </>
    )
}