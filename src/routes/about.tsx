import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site-shell";
import { CONTACT_EMAIL, MAILTO_CONTACT } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me" },
      {
        name: "description",
        content:
          "Meet Swastik Patel: LinkedIn content marketer, founder storyteller, social media manager, and performance marketer based in Lucknow, India.",
      },
      {
        property: "og:title",
        content: "About Swastik Patel — Content Marketer & Storyteller",
      },
      {
        property: "og:description",
        content:
          "The person behind the LinkedIn posts you didn’t realise you were enjoying.",
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
          <Eyebrow>A bit about the person behind the posts</Eyebrow>
          <h1 className="about-title mt-5 font-display">
            Hey, it’s me.
            <br />
            <em>Swastik.</em>
          </h1>
          <p className="about-deck">
            I’m the person behind the LinkedIn posts you didn’t realise you were
            enjoying.
          </p>
        </div>
      </section>

      <section className="about-copy-section">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[220px_1fr] lg:gap-20">
          <div className="about-side-note">
            <Eyebrow>What I bring</Eyebrow>
            <p>
              Clear stories, consistent content, and a little healthy curiosity
              about the numbers.
            </p>
          </div>
          <div className="about-copy">
            <article className="about-block">
              <h2>What I actually do</h2>
              <p>
                LinkedIn is my main gig. Founders usually know a lot more than
                they post, so I take the stories and lessons they’ve been
                meaning to share and turn them into posts that sound like them,
                not like a press release. Nobody’s thrilled to announce
                anything.
              </p>
            </article>
            <article className="about-block">
              <h2>The side quests</h2>
              <p>
                LinkedIn is the main character, but I also play a few supporting
                roles:
              </p>
              <ul className="side-quests">
                <li>
                  <strong>Social media management</strong>
                  <span>
                    I keep your pages alive, consistent, and not weirdly silent
                    for three weeks.
                  </span>
                </li>
                <li>
                  <strong>Content writing</strong>
                  <span>
                    Posts, captions, and copy that say something instead of just
                    filling space.
                  </span>
                </li>
              </ul>
            </article>
            <article className="about-block">
              <h2>Now, performance marketing</h2>
              <p>
                I know. The name sounds like a spreadsheet in a suit.
                <br />
                Here’s the real version: performance marketing is just finding
                out what people actually respond to, then doing more of that.
                Every ad is a tiny experiment. Every number is a customer saying
                “yes, this” or “no, please stop.” I like it because it’s the one
                part of marketing where the audience gives you honest feedback,
                and nobody is polite about it.
              </p>
              <p>
                It also keeps my creative side honest. A post can feel
                brilliant, but the data decides if it actually worked.
              </p>
            </article>
            <article className="about-block">
              <h2>Why this combo works</h2>
              <p>
                Good content gets attention. Good data tells you what to do with
                it. I like having both in one brain.
              </p>
            </article>
            <article className="about-block about-open">
              <h2>
                Currently open to partnering with founders and ambitious teams.
              </h2>
              <p>
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
                branding, planning, and scheduling.
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
