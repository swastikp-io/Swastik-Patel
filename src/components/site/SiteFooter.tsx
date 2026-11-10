import { LINKEDIN_URL, X_URL } from "./links";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-site flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="eyebrow text-dim">© 2026 Swastik Patel</p>
        <div className="flex gap-8">
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            className="eyebrow text-muted-foreground transition-colors hover:text-primary"
          >
            X (Twitter)
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="eyebrow text-muted-foreground transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
