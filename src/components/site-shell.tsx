import { useEffect, useState, type ReactNode } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { ArrowUpRight, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MAILTO_CONTACT } from "@/lib/utils";

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
            <a className="nav-link nav-contact" href={MAILTO_CONTACT}>
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
    </>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
