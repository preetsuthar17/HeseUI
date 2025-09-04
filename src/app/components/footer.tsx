import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="px-4 md:px-12">
      <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-muted-foreground text-sm">
          Built by{" "}
          <Link
            className="text-primary underline underline-offset-2"
            href="https://x.com/preetsuthar17"
          >
            Preet Suthar
          </Link>
          . The source code is available on{" "}
          <Link
            className="text-primary underline underline-offset-2"
            href="https://github.com/preetsuthar17/HeseUI"
          >
            GitHub
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 text-sm">
          <Link
            className="text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
            href="https://github.com/preetsuthar17"
          >
            GitHub
          </Link>
          <span className="text-muted-foreground">//</span>
          <Link
            className="text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
            href="https://x.com/preetsuthar17"
          >
            Twitter
          </Link>
          <span className="text-muted-foreground">//</span>
          <Link
            className="text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
            href="https://www.preetsuthar.me/sponsor"
          >
            Sponsor
          </Link>
        </div>
      </div>
    </footer>
  );
};
