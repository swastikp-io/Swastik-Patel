import { cn } from "@/lib/utils";

export function SignalDot({ live = false, className }: { live?: boolean; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block size-2 shrink-0 rounded-full bg-primary",
        live && "animate-signal-pulse",
        className,
      )}
    />
  );
}
