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
    <div
      className="flex flex-col gap-4 px-4 md:px-12"
      data-component-section={id}
    >
      <div className="w-full rounded flex flex-col gap-6">
        <h2 className="text-lg px-4 py-3 bg-secondary text-secondary-foreground rounded">
          {title}
        </h2>
        <div className="flex flex-col gap-4 p-4">{children}</div>
      </div>
    </div>
  );
}
