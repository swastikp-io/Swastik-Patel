import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "./BrandMark";
import { CONTACT_FORM_URL } from "./links";

const navClass =
  "eyebrow text-muted-foreground transition-colors hover:text-foreground";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 whitespace-nowrap font-display text-lg tracking-tight">
          <BrandMark />
          Swastik Patel
        </Link>
        <nav className="flex items-center gap-4 md:gap-9">
          <Link to="/" hash="work" className={`${navClass} hidden sm:inline`}>
            Work
          </Link>
          <Link to="/" hash="approach" className={`${navClass} hidden sm:inline`}>
            Approach
          </Link>
          <Link
            to="/about"
            className={navClass}
            activeProps={{ className: "!text-foreground" }}
          >
            About
          </Link>
          <Button asChild variant="line" size="sm" className="h-9 px-4">
            <a href={CONTACT_FORM_URL} target="_blank" rel="noreferrer">
              Let's talk <ArrowUpRight />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
