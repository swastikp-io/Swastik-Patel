import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignalDot } from "@/components/site/SignalDot";
import { CaseStudyDialog } from "@/components/site/CaseStudyDialog";
import { ApproachSteps } from "@/components/site/ApproachSteps";
import { CONTACT_FORM_URL, EMAIL_URL } from "@/components/site/links";
import timaraaArt from "@/assets/timaraa-lineart.jpg";
import aiBuildersArt from "@/assets/ai-builders-lineart.jpg";

const TITLE = "Swastik Patel — Marketing for AI Companies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      {
        name: "description",
        content:
          "I make AI products sound like they were built for humans. Founder storytelling, content strategy and distribution that turns complex technology into something people understand.",
      },
      { property: "og:title", content: TITLE },
      {
        property: "og:description",
        content:
          "I make AI products sound like they were built for humans. Marketing for AI companies, founder-led content, and stories worth reading.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const CAPABILITIES = [
  "Founder-led content & storytelling",
  "Content strategy & distribution",
  "Product positioning & messaging",
  "Social media & organic growth",
];

function Index() {
  return (
    <>
      <Hero />
      <StatusBar />
      <Work />
      <Approach />
      <Closing />
    </>
  );
}

function Hero() {
  return (
    <section className="grid-lines relative overflow-hidden">
      <div className="container-site pb-20 pt-20 md:pb-28 md:pt-32">
        <p className="eyebrow flex animate-rise items-center gap-3 text-muted-foreground">
          <SignalDot /> Marketing for AI companies
        </p>
        <h1 className="display mt-8 max-w-5xl animate-rise text-[2.9rem] [animation-delay:80ms] sm:text-6xl md:text-7xl lg:text-[6.4rem]">
          I make AI products <br className="hidden md:block" />
          sound like they were <br className="hidden md:block" />
          <span className="text-dim">built for humans.</span>
        </h1>
        <div className="mt-12 flex animate-rise flex-col gap-8 [animation-delay:160ms] md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Founder storytelling, content strategy and distribution that turns complex technology
            into something people understand.
          </p>
          <Button asChild variant="signal" size="xl" className="self-start md:self-auto">
            <Link to="/" hash="work">
              View work <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function StatusBar() {
  return (
    <div className="border-y border-border">
      <div className="container-site flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="eyebrow flex items-center gap-3 text-foreground">
          <SignalDot live /> Independent marketer — India
        </p>
        <a
          href={CONTACT_FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="eyebrow inline-flex items-center gap-1.5 text-primary transition-colors hover:text-foreground"
        >
          Open to AI marketing opportunities <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </div>
  );
}

function CardCta({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-1.5 text-primary transition-colors group-hover:text-foreground">
      {children} <ArrowUpRight className="size-3.5" />
    </span>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-16 bg-primary py-16 md:py-24">
      <div className="container-site">
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Project 01 */}
          <CaseStudyDialog
            eyebrow="Featured work / 01"
            title="Timaraa — Social Editorial Concept"
            description="A self-initiated social-media editorial direction for Timaraa, a handcrafted luxury label. Built around three repeatable pillars: craft & detail, brand voice, and styling & editorial. (Independent concept, not commissioned)."
            listTitle="Editorial pillars"
            items={[
              {
                label: "01 · Craft & Detail",
                text: "Close-up inspection letting the embroidery and craftsmanship lead.",
              },
              {
                label: "02 · Brand Voice",
                text: "Conversational, repeatable dialogue establishing the label's point of view.",
              },
              {
                label: "03 · Styling & Occasion",
                text: "Hero detail paired with everyday styling applications in a single editorial frame.",
              },
            ]}
            image={timaraaArt}
            ctaLabel="Start a project"
            ctaHref={CONTACT_FORM_URL}
            trigger={
              <button
                type="button"
                className="group flex flex-col bg-background text-left transition-transform hover:-translate-y-1 lg:col-span-2"
              >
                <div className="flex items-start justify-between p-7 md:p-9">
                  <div>
                    <p className="eyebrow text-muted-foreground">Featured work / 01</p>
                    <h2 className="display mt-5 text-5xl md:text-6xl">Timaraa.</h2>
                  </div>
                  <span className="eyebrow text-dim">01</span>
                </div>
                <img
                  src={timaraaArt}
                  alt="Line drawing of an embroidered couture gown on a dress form, with a needle and thread turning into music"
                  width={1280}
                  height={1024}
                  loading="lazy"
                  className="aspect-[16/8] w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                />
                <div className="flex flex-col gap-5 p-7 md:flex-row md:items-end md:justify-between md:p-9">
                  <p className="max-w-md leading-relaxed text-muted-foreground">
                    A creative concept exploring storytelling, brand and community around music and
                    handcrafted couture.
                  </p>
                  <CardCta>View project</CardCta>
                </div>
              </button>
            }
          />

          {/* What I do */}
          <div className="flex flex-col justify-between bg-ivory p-7 text-ivory-foreground md:p-9">
            <div>
              <div className="flex items-start justify-between">
                <p className="eyebrow text-ivory-muted">What I do</p>
                <span className="eyebrow text-ivory-muted">02</span>
              </div>
              <h2 className="display mt-5 text-4xl md:text-[2.7rem]">
                Marketing that makes complex products click.
              </h2>
            </div>
            <ul className="mt-12 border-t border-ivory-border">
              {CAPABILITIES.map((c, i) => (
                <li
                  key={c}
                  className="eyebrow flex items-center gap-4 border-b border-ivory-border py-4"
                >
                  <span className="text-primary">0{i + 1}</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Stat */}
          <div className="flex flex-col justify-between bg-background p-7 md:p-9">
            <div className="flex items-start justify-between">
              <p className="eyebrow text-muted-foreground">By the numbers</p>
              <span className="eyebrow text-dim">03</span>
            </div>
            <div className="mt-16">
              <p className="display text-[7rem] leading-none md:text-[9rem]">
                80<span className="text-primary">+</span>
              </p>
              <p className="mt-6 max-w-xs leading-relaxed text-muted-foreground">
                Pieces of content shipped across projects, experiments and personal brands.
              </p>
            </div>
          </div>

          {/* Project 02 */}
          <CaseStudyDialog
            eyebrow="Selected work / 02"
            title="Content for AI Builders"
            description="A framework for early-stage AI founders to extract their internal technical notes, pull requests, and product architectures, turning them into high-signal LinkedIn storytelling and launch content."
            listTitle="System breakdown"
            items={[
              {
                label: "Stage 01",
                text: "Extraction session (founder brain dumps into structured audio).",
              },
              {
                label: "Stage 02",
                text: "Translation (research jargon decoded into human problems & outcomes).",
              },
              {
                label: "Stage 03",
                text: "Multi-channel distribution across LinkedIn, founder accounts, and developer communities.",
              },
            ]}
            image={aiBuildersArt}
            ctaLabel="Discuss this approach"
            ctaHref={EMAIL_URL}
            external={false}
            trigger={
              <button
                type="button"
                className="group grid bg-background text-left transition-transform hover:-translate-y-1 md:grid-cols-2 lg:col-span-2"
              >
                <div className="flex flex-col justify-between p-7 md:p-9">
                  <div className="flex items-start justify-between">
                    <p className="eyebrow text-muted-foreground">Selected work / 02</p>
                    <span className="eyebrow text-dim md:hidden">04</span>
                  </div>
                  <div className="mt-12">
                    <h2 className="display text-5xl md:text-[3.4rem]">
                      Content for <br />
                      AI builders.
                    </h2>
                    <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
                      A content system and distribution approach for early-stage AI products,
                      translating code and research into customer attention.
                    </p>
                    <div className="mt-8">
                      <CardCta>Case study</CardCta>
                    </div>
                  </div>
                </div>
                <div className="relative border-t border-border md:border-l md:border-t-0">
                  <span className="eyebrow absolute right-7 top-7 hidden text-dim md:block">
                    04
                  </span>
                  <img
                    src={aiBuildersArt}
                    alt="Line drawing of a laptop sending code into documents, a globe and people"
                    width={1280}
                    height={1024}
                    loading="lazy"
                    className="h-full min-h-64 w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                  />
                </div>
              </button>
            }
          />
        </div>

        <div className="mt-4 flex items-center justify-between bg-background px-7 py-6 md:px-9">
          <p className="display text-2xl md:text-4xl">
            Strategy. <span className="text-dim">Content.</span>{" "}
            <span className="text-primary">Systems.</span>
          </p>
          <span className="eyebrow hidden text-dim sm:block">Swastik Patel</span>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="scroll-mt-16 border-b border-border py-20 md:py-28">
      <div className="container-site">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow flex items-center gap-3 text-muted-foreground">
              <SignalDot /> My approach
            </p>
            <h2 className="display mt-6 max-w-2xl text-5xl md:text-7xl">
              From understanding <span className="text-dim">to distribution.</span>
            </h2>
          </div>
        </div>
        <ApproachSteps />
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-site grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col justify-between bg-ivory p-7 text-ivory-foreground md:p-10">
          <div className="flex items-center justify-between">
            <span className="eyebrow border border-ivory-foreground px-3 py-1.5">About</span>
            <Link
              to="/about"
              aria-label="Read more about Swastik"
              className="flex size-11 items-center justify-center bg-ivory-foreground text-ivory transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUpRight className="size-5" />
            </Link>
          </div>
          <div className="mt-20">
            <h2 className="display text-4xl md:text-5xl">
              Curious about technology, interested in how people understand it.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-ivory-muted">
              An independent marketer exploring the intersection of content, technology and AI.
              Based in India, working with ambitious teams building the future.
            </p>
            <p className="eyebrow mt-10 flex items-center gap-3">
              <SignalDot /> Open to AI marketing opportunities
            </p>
          </div>
        </div>

        <div className="grid-lines flex flex-col justify-between border border-border p-7 md:p-10">
          <p className="eyebrow text-primary">Have an AI product that's hard to explain?</p>
          <div className="mt-20">
            <h2 className="display text-5xl md:text-6xl">
              Let’s make people understand <span className="text-dim">why it matters.</span>
            </h2>
            <Button asChild variant="signal" size="xl" className="mt-10">
              <a href={CONTACT_FORM_URL} target="_blank" rel="noreferrer">
                Start a conversation <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
