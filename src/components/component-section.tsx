import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import { OpenInV0Button } from './open-in-v0';

type ComponentSectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  api_ref?: string;
  docs_ref?: string;
  v0_url?: string;
  copyButton?: React.ReactNode;
};

export function ComponentSection({
  id,
  title,
  children,
  api_ref,
  docs_ref,
  v0_url,
  copyButton,
}: ComponentSectionProps) {
  return (
    <div
      id={id}
      className="flex flex-col gap-4 px-4 md:px-12"
      data-component-section={id}
    >
      <div className="flex w-full flex-col gap-4 rounded">
        <div className="flex gap-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            <h2 className="rounded bg-secondary px-4 py-3 text-lg text-secondary-foreground w-full">
              {title}
            </h2>
            <div className="flex gap-4 items-center justify-between w-full">
              <div className="flex gap-2 items-center">
                <Button
                  aria-label="API Reference"
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="text-xs h-8 p-0"
                >
                  {api_ref && (
                    <Link
                      href={api_ref}
                      target="_blank"
                      className="flex items-center gap-2 h-8 px-3 justify-center"
                    >
                      API Reference <ExternalLink size={15} />
                    </Link>
                  )}
                </Button>
                <Button
                  aria-label="Docs"
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="text-xs h-8 p-0"
                >
                  {docs_ref && (
                    <Link
                      href={docs_ref}
                      target="_blank"
                      className="flex items-center gap-2 h-8 px-3 justify-center"
                    >
                      Docs <ExternalLink size={15} />
                    </Link>
                  )}
                </Button>
              </div>
              <div className="flex items-center gap-2">
                {copyButton}
                <OpenInV0Button url={`${v0_url}`} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4">{children}</div>
      </div>
    </div>
  );
}
