import { useEffect, useState, type ReactNode } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin, Mail, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MAILTO_CONTACT, LINKEDIN_URL, CV_URL, NOTION_FORM_URL } from "@/lib/utils";

export function SiteShell() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Clear any previous cached theme so loads/reloads always default to dark
    window.localStorage.removeItem("swastik-theme");
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <header className="site-header">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            className="whitespace-nowrap font-display text-2xl leading-none text-foreground"
          >
            Swastik Patel<span className="text-primary">.</span>
          </Link>
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-1 sm:gap-3"
          >
            <Link
              to="/"
              activeOptions={{ exact: true }}
              activeProps={{ className: "nav-link nav-link-active" }}
              className="nav-link"
            >
              Home
            </Link>
            <Link
              to="/about"
              activeProps={{ className: "nav-link nav-link-active" }}
              className="nav-link"
            >
              About
            </Link>
            <a
              className="nav-link nav-contact"
              href={NOTION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let’s talk{" "}
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
            <Button
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              className="ml-1 size-9 rounded-full"
              onClick={() =>
                setTheme((current) => (current === "dark" ? "light" : "dark"))
              }
              size="icon"
              title={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              variant="ghost"
            >
              {theme === "dark" ? (
                <Sun aria-hidden="true" className="size-4" />
              ) : (
                <Moon aria-hidden="true" className="size-4" />
              )}
            </Button>
          </nav>
        </div>
      </header>

      <Outlet />

      {/* Full-width site footer */}
      <footer className="w-full">
        {/* Top vibrant CTA banner */}
        <section className="w-full bg-[#5189FD] text-[#040507]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#040507]/80 sm:text-sm">
              BUILDING SOMETHING IN AI THAT’S HARD TO EXPLAIN?
            </p>
            <a
              href={MAILTO_CONTACT}
              className="group mt-5 inline-block text-left transition-opacity hover:opacity-90"
            >
              <h2 className="font-display text-5xl leading-[0.92] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]">
                Let’s fix
                <br />
                that.
              </h2>
            </a>
          </div>
        </section>

        {/* Bottom dark navigation & info bar */}
        <div className="w-full bg-[#111111] text-white">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              {/* Brand and tagline */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div>
                  <Link
                    to="/"
                    className="font-display text-2xl tracking-tight text-white transition-opacity hover:opacity-85 sm:text-3xl"
                  >
                    Swastik Patel
                  </Link>
                  <p className="mt-1 text-sm text-neutral-400">
                    Marketing for AI companies, from India.
                  </p>
                </div>
                <div
                  aria-hidden="true"
                  className="mx-8 hidden h-10 w-px bg-neutral-800 lg:block"
                />
              </div>

              {/* Center navigation links */}
              <nav
                aria-label="Footer Navigation"
                className="flex flex-wrap items-center gap-6 sm:gap-8"
              >
                <a
                  href="/#selected-work"
                  className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                >
                  Work
                </a>
                <Link
                  to="/about"
                  className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                >
                  About
                </Link>
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                >
                  CV
                </a>
                <a
                  href={MAILTO_CONTACT}
                  className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </nav>

              {/* Action buttons: Email, CV, LinkedIn */}
              <div className="flex items-center gap-2.5">
                <a
                  href={MAILTO_CONTACT}
                  aria-label="Email Swastik"
                  title="Email"
                  className="flex size-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/60 text-neutral-300 transition-all hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
                >
                  <Mail className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download CV"
                  title="CV"
                  className="flex size-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/60 text-neutral-300 transition-all hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
                >
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                  className="flex size-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/60 text-neutral-300 transition-all hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
                >
                  <Linkedin className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Bottom copyright and availability status */}
            <div className="mt-12 flex flex-col gap-4 border-t border-neutral-800/80 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                © {new Date().getFullYear()} SWASTIK PATEL. ALL RIGHTS RESERVED.
              </p>
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5189FD] opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#5189FD]" />
                </span>
                <span>OPEN TO MARKETING ROLES AT AI COMPANIES</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
