import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="px-4 md:px-12">
      <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-muted-foreground text-sm">
          Built by{' '}
          <Link
            href="https://x.com/preetsuthar17"
            className="underline text-primary underline-offset-2"
          >
            Preet Suthar
          </Link>
          . The source code is available on{' '}
          <Link
            href="https://github.com/preetsuthar17/HeseUI"
            className="underline text-primary underline-offset-2"
          >
            GitHub
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 text-sm">
          <Link
            href="https://github.com/preetsuthar17"
            className="text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-2"
          >
            GitHub
          </Link>
          <span className="text-muted-foreground">//</span>
          <Link
            href="https://x.com/preetsuthar17"
            className="text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-2"
          >
            Twitter
          </Link>
          <span className="text-muted-foreground">//</span>
          <Link
            href="https://www.preetsuthar.me/sponsor"
            className="text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-2"
          >
            Sponsor
          </Link>
        </div>
      </div>
    </footer>
  );
};
