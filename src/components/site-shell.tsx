import { type ReactNode } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import {
  LINKEDIN_URL,
  X_URL,
  NOTION_FORM_URL,
} from "@/lib/utils";

export function SiteShell() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#F2F0ED] flex flex-col selection:bg-[#FF1028] selection:text-[#FFFFFF]">
      {/* SECTION 01 — Navigation */}
      <header className="sticky top-0 z-40 w-full bg-[#111111]/95 backdrop-blur-sm border-b border-[#262626]">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 sm:px-10">
          <Link
            to="/"
            className="font-serif text-2xl tracking-tight text-[#F2F0ED] hover:text-[#FF1028] transition-colors"
          >
            Swastik Patel
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#777777]"
          >
            <a href="/#work" className="hover:text-[#F2F0ED] transition-colors">
              WORK
            </a>
            <a href="/#approach" className="hover:text-[#F2F0ED] transition-colors">
              APPROACH
            </a>
            <Link to="/about" className="hover:text-[#F2F0ED] transition-colors">
              ABOUT
            </Link>
          </nav>

          <a
            href={NOTION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#F2F0ED] text-[#111111] font-mono text-[11px] font-semibold uppercase tracking-wider px-4 py-2 hover:bg-[#FF1028] hover:text-[#FFFFFF] transition-colors"
          >
            LET'S TALK <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </header>

      {/* Main Page Content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* SECTION 10 — Footer */}
      <footer className="w-full border-t border-[#262626] bg-[#111111]">
        <div className="mx-auto flex max-w-[1240px] flex-col sm:flex-row items-center justify-between gap-6 px-6 py-8 sm:px-10 font-mono text-[11px] uppercase tracking-wider text-[#777777]">
          <span>© {new Date().getFullYear()} SWASTIK PATEL</span>

          <nav
            aria-label="Footer links"
            className="flex items-center gap-6"
          >
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2F0ED] transition-colors"
            >
              X (Twitter)
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2F0ED] transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium tracking-[0.2em] text-[#777777] uppercase">
      {children}
    </p>
  );
}
