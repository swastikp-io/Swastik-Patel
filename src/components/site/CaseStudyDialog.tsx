import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Item = { label: string; text: string };

export function CaseStudyDialog({
  trigger,
  eyebrow,
  title,
  description,
  listTitle,
  items,
  image,
  ctaLabel,
  ctaHref,
  external = true,
}: {
  trigger: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  listTitle: string;
  items: Item[];
  image: string;
  ctaLabel: string;
  ctaHref: string;
  external?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[92vh] max-w-3xl gap-0 overflow-y-auto rounded-none border-border bg-card p-0 sm:rounded-none">
        <img
          src={image}
          alt=""
          width={1280}
          height={1024}
          loading="lazy"
          className="aspect-[16/8] w-full border-b border-border object-cover"
        />
        <div className="p-6 md:p-10">
          <p className="eyebrow text-primary">{eyebrow}</p>
          <DialogTitle className="display mt-4 text-3xl font-normal leading-tight md:text-4xl">
            {title}
          </DialogTitle>
          <DialogDescription className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </DialogDescription>

          <p className="eyebrow mt-10 text-dim">{listTitle}</p>
          <ul className="mt-4 border-t border-border">
            {items.map((item) => (
              <li
                key={item.label}
                className="grid gap-2 border-b border-border py-4 md:grid-cols-[13rem_1fr] md:gap-6"
              >
                <span className="eyebrow text-foreground">{item.label}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{item.text}</span>
              </li>
            ))}
          </ul>

          <Button asChild variant="signal" size="xl" className="mt-8">
            <a href={ctaHref} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
              {ctaLabel} <ArrowUpRight />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
