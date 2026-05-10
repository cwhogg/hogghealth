export function Footer() {
  return (
    <footer className="border-t border-rule mt-16">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs text-muted">
          &copy; {new Date().getFullYear()} Chris Hogg. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/cwhogg/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-muted hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/cwhogg"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-muted hover:text-foreground transition-colors"
          >
            X / Twitter
          </a>
          <a
            href="https://github.com/cwhogg"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
