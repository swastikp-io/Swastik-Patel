import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site-shell";
import { CONTACT_EMAIL, MAILTO_CONTACT } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Swastik Patel — Marketing for AI Companies" },
      {
        name: "description",
        content:
          "Meet Swastik Patel, a digital marketer in Lucknow, India, turning complex AI products into clear, well-designed content people actually read.",
      },
      {
        property: "og:title",
        content: "About Swastik Patel — Marketing for AI Companies",
      },
      {
        property: "og:description",
        content: "The marketer who makes AI make sense.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-intro">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
          <Eyebrow>A bit about the person who makes AI make sense</Eyebrow>
          <h1 className="about-title mt-5 font-display">
            Hey, it’s me.
            <br />
            <em>Swastik.</em>
          </h1>
          <p className="about-deck">
            I’m a digital marketer who gets a little too excited about
            explaining complicated things simply, especially when the
            complicated thing is AI.
          </p>
        </div>
      </section>

      <section className="about-copy-section">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[220px_1fr] lg:gap-20">
          <div className="about-side-note">
            <Eyebrow>What I bring</Eyebrow>
            <p>
              Clear writing, good design instincts, and a healthy curiosity
              about the numbers.
            </p>
          </div>
          <div className="about-copy">
            <article className="about-block">
              <h2>Why AI companies</h2>
              <p>
                AI products are some of the most impressive things being built
                right now, and some of the hardest to explain. Too many launch
                posts read like a research paper wearing a blazer. Founders know
                exactly what they’ve built, but the people who’d love it can’t
                tell what it does or why it matters.
              </p>
              <p>
                That gap is what I like working on. I take what the team knows
                and turn it into content people actually understand, remember,
                and talk about.
              </p>
            </article>

            <article className="about-block">
              <h2>What I actually do</h2>
              <p>Content is my main gig. For AI companies, that looks like:</p>
              <ul className="side-quests">
                <li>
                  <strong>LinkedIn content for founders and teams</strong>
                  <span>
                    I turn what AI CEOs know into posts that sound like them, not
                    like a press release or a product changelog.
                  </span>
                </li>
                <li>
                  <strong>Content writing</strong>
                  <span>
                    Posts, captions, launch copy, and explainers that say
                    something instead of filling space.
                  </span>
                </li>
                <li>
                  <strong>Social media management</strong>
                  <span>
                    Your pages stay consistent, clear, and not weirdly silent
                    for three weeks after a launch.
                  </span>
                </li>
              </ul>
            </article>

            <article className="about-block about-open">
              <h2>Currently open to</h2>
              <p className="font-medium text-foreground">
                Marketing roles and internships at AI companies, and to working
                with AI founders and teams on content.
              </p>
              <p className="mt-3">
                Email me at <a href={MAILTO_CONTACT}>{CONTACT_EMAIL}</a> if
                you’d like to chat or you want to offer me a role in your
                company.
              </p>
              <Button asChild className="mt-5 h-11 rounded-full px-5">
                <a href={MAILTO_CONTACT}>
                  Say hello <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </article>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[220px_1fr] lg:gap-20">
          <div>
            <Eyebrow>On paper</Eyebrow>
            <h2 className="experience-title mt-3 font-display">
              The experience.
            </h2>
          </div>
          <div>
            <article className="experience-row">
              <div>
                <h3>Content Writer</h3>
                <p>Freelance</p>
              </div>
              <span>July 2026 — Present</span>
              <p>
                LinkedIn content strategy, founder storytelling, personal
                branding, planning, and scheduling. Now focused on AI companies.
              </p>
            </article>
            <article className="experience-row">
              <div>
                <h3>Digital Marketing Intern</h3>
                <p>Hindtech IT Solutions</p>
              </div>
              <span>March 2026 — June 2026</span>
              <p>
                Social media strategy and operations across platforms, content
                planning, publishing, and lead generation.
              </p>
            </article>
            <article className="experience-row education-row">
              <div>
                <h3>Education</h3>
                <p>Bachelor of Computer Application, Computer Science</p>
              </div>
              <span>Expected July 2027</span>
              <p>Shri Ramswaroop Memorial University</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
