import { cn } from "@/lib/utils";

/** Six-spoke asterisk mark, drawn as thin strokes. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("size-5 text-primary", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="square"
    >
      <path d="M12 2v20M3.34 7l17.32 10M3.34 17 20.66 7" />
    </svg>
  );
}
