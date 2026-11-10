import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignalDot } from "@/components/site/SignalDot";
import { EMAIL, EMAIL_URL } from "@/components/site/links";

const TITLE = "About Swastik Patel — Marketing for AI Companies";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      {
        name: "description",
        content:
          "Meet Swastik Patel, a digital marketer in Lucknow, India, turning complex AI products into clear, well-designed content people actually read.",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: "The marketer who makes AI make sense." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const OFFERS = [
  {
    title: "LinkedIn content for founders and teams",
    text: "I turn what AI CEOs know into posts that sound like them, not like a press release or a product changelog.",
  },
  {
    title: "Content writing",
    text: "Posts, captions, launch copy, and explainers that say something instead of filling space.",
  },
  {
    title: "Social media management",
    text: "Your pages stay consistent, clear, and not weirdly silent for three weeks after a launch.",
  },
];

const EXPERIENCE = [
  {
    when: "July 2026 — Present",
    role: "Content Writer",
    org: "Freelance",
    text: "LinkedIn content strategy, founder storytelling, personal branding, planning, and scheduling. Now focused on AI companies.",
  },
  {
    when: "March 2026 — June 2026",
    role: "Digital Marketing Intern",
    org: "Hindtech IT Solutions",
    text: "Social media strategy and operations across platforms, content planning, publishing, and lead generation.",
  },
  {
    when: "Expected July 2027",
    role: "Bachelor of Computer Application, Computer Science",
    org: "Shri Ramswaroop Memorial University",
    text: "",
  },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="grid-lines border-b border-border">
        <div className="container-site pb-20 pt-20 md:pb-28 md:pt-32">
          <p className="eyebrow flex animate-rise items-center gap-3 text-muted-foreground">
            <SignalDot /> A bit about the person who makes AI make sense
          </p>
          <h1 className="display mt-8 animate-rise text-6xl [animation-delay:80ms] md:text-8xl lg:text-[8.5rem]">
            Hey, it’s me. <br />
            <span className="text-primary">Swastik.</span>
          </h1>
          <p className="mt-10 max-w-2xl animate-rise text-xl leading-relaxed text-muted-foreground [animation-delay:160ms] md:text-2xl">
            I’m a digital marketer who gets a little too excited about explaining complicated
            things simply, especially when the complicated thing is AI.
          </p>
        </div>
      </section>

      {/* What I bring */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-primary">What I bring</p>
              <p className="display mt-6 text-3xl leading-tight md:text-4xl">
                Clear writing, good design instincts, and a healthy curiosity about the numbers.
              </p>
            </div>
          </aside>

          <div className="space-y-20 lg:col-span-8">
            <article>
              <h2 className="display text-4xl md:text-5xl">Why AI companies</h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  AI products are some of the most impressive things being built right now, and
                  some of the hardest to explain. Too many launch posts read like a research paper
                  wearing a blazer. Founders know exactly what they’ve built, but the people who’d
                  love it can’t tell what it does or why it matters.
                </p>
                <p>
                  That gap is what I like working on. I take what the team knows and turn it into
                  content people actually understand, remember, and talk about.
                </p>
              </div>
            </article>

            <article>
              <h2 className="display text-4xl md:text-5xl">What I actually do</h2>
              <p className="mt-8 text-lg text-muted-foreground">
                Content is my main gig. For AI companies, that looks like:
              </p>
              <ul className="mt-8 border-t border-border">
                {OFFERS.map((o, i) => (
                  <li
                    key={o.title}
                    className="grid gap-3 border-b border-border py-7 md:grid-cols-[3rem_1fr]"
                  >
                    <span className="eyebrow pt-1.5 text-primary">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-2xl tracking-tight">{o.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{o.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <article className="bg-ivory p-7 text-ivory-foreground md:p-10">
              <p className="eyebrow flex items-center gap-3">
                <SignalDot live /> Currently open to
              </p>
              <h2 className="display mt-6 text-3xl leading-tight md:text-4xl">
                Marketing roles and internships at AI companies, and to working with AI founders
                and teams on content.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-ivory-muted">
                Email me at{" "}
                <a
                  href={EMAIL_URL}
                  className="text-ivory-foreground underline decoration-primary decoration-2 underline-offset-4 hover:text-primary"
                >
                  {EMAIL}
                </a>{" "}
                if you’d like to chat or you want to offer me a role in your company.
              </p>
              <Button asChild variant="ink" size="xl" className="mt-8">
                <a href={EMAIL_URL}>
                  Email Swastik <ArrowUpRight />
                </a>
              </Button>
            </article>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <p className="eyebrow flex items-center gap-3 text-muted-foreground">
            <SignalDot /> On paper
          </p>
          <h2 className="display mt-6 text-5xl md:text-7xl">The experience.</h2>

          <ol className="mt-14 border-t border-border">
            {EXPERIENCE.map((e, i) => (
              <li
                key={e.role}
                className="group grid gap-4 border-b border-border py-9 transition-colors hover:bg-card md:grid-cols-12 md:gap-8 md:px-4"
              >
                <div className="flex items-center gap-4 md:col-span-3">
                  <span className="eyebrow text-primary">0{i + 1}</span>
                  <span className="eyebrow text-muted-foreground">{e.when}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl tracking-tight">{e.role}</h3>
                  <p className="eyebrow mt-2 text-dim">{e.org}</p>
                </div>
                <p className="leading-relaxed text-muted-foreground md:col-span-5">{e.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
