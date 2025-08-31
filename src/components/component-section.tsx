import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { OpenInV0Button } from './open-in-v0';
import { Button } from './ui/button';

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
      className="flex flex-col gap-4 px-4 md:px-12"
      data-component-section={id}
      id={id}
    >
      <div className="flex w-full flex-col gap-4 rounded">
        <div className="flex w-full gap-4">
          <div className="flex w-full flex-col gap-4">
            <h2 className="w-full rounded bg-secondary px-4 py-3 text-lg text-secondary-foreground">
              {title}
            </h2>
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Button
                  aria-label="API Reference"
                  className="h-8 p-0 text-xs"
                  size="sm"
                  type="button"
                  variant="secondary"
                >
                  {api_ref && (
                    <Link
                      className="flex h-8 items-center justify-center gap-2 px-3"
                      href={api_ref}
                      target="_blank"
                    >
                      API Reference <ExternalLink size={15} />
                    </Link>
                  )}
                </Button>
                <Button
                  aria-label="Docs"
                  className="h-8 p-0 text-xs"
                  size="sm"
                  type="button"
                  variant="secondary"
                >
                  {docs_ref && (
                    <Link
                      className="flex h-8 items-center justify-center gap-2 px-3"
                      href={docs_ref}
                      target="_blank"
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
