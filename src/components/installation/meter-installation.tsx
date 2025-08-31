import CodeBlock from '../code-block';

export function MeterInstallation() {
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
        code={'pnpm dlx shadcn@latest add @heseui/meter'}
        lang="package-install"
      />
      <p>example usage</p>
      <CodeBlock
        code={`import { Meter } from '@/components/ui/meter';`}
        lang="tsx"
      />

      <CodeBlock
        code={`export function MeterDemo() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Basic Meter</h3>
        <Meter className="grid w-48 grid-cols-2 gap-y-2" value={24}>
          <MeterLabel>Storage Used</MeterLabel>
          <MeterValue className="col-start-2 text-right" />
          <MeterTrack className="col-span-2">
            <MeterIndicator />
          </MeterTrack>
        </Meter>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Custom Range</h3>
        <Meter
          className="grid w-48 grid-cols-2 gap-y-2"
          max={200}
          min={0}
          value={150}
        >
          <MeterLabel>Bandwidth</MeterLabel>
          <MeterValue className="col-start-2 text-right" />
          <MeterTrack className="col-span-2">
            <MeterIndicator />
          </MeterTrack>
        </Meter>
      </div>

      <div className="item-center flex w-fit flex-col justify-start gap-2">
        <h3 className="font-medium text-lg">Formatted Value</h3>
        <Meter
          className="grid w-48 grid-cols-2 gap-y-2"
          format={{ style: 'percent' }}
          max={1}
          min={0}
          value={0.42}
        >
          <MeterLabel>Progress</MeterLabel>
          <MeterValue className="col-start-2 text-right" />
          <MeterTrack className="col-span-2">
            <MeterIndicator />
          </MeterTrack>
        </Meter>
      </div>
    </div>
  );
}`}
        lang="tsx"
      />
    </>
  );
}
