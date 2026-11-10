import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { WireframeWave } from "@/components/graphics/wireframe-wave";
import { SteppedFrame } from "@/components/graphics/stepped-frame";
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
    <main className="w-full bg-[#151311] text-[#F8F5F0]">
      {/* Intro Header */}
      <section className="mx-auto max-w-[1240px] px-6 sm:px-10 pt-14 pb-12 sm:pt-20 sm:pb-16 border-b border-[#38322B]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A59E96]">
              A BIT ABOUT THE PERSON WHO MAKES AI MAKE SENSE
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#F8F5F0] mt-6 tracking-tight">
              Hey, it’s me.
              <br />
              Swastik.
            </h1>
            <p className="font-sans text-lg sm:text-xl text-[#A59E96] mt-6 leading-relaxed max-w-2xl">
              I’m a digital marketer who gets a little too excited about
              explaining complicated things simply, especially when the
              complicated thing is AI.
            </p>
          </div>

          <div className="lg:col-span-4">
            <SteppedFrame variant="hero">
              <WireframeWave density={0.8} speed={0.8} />
            </SteppedFrame>
          </div>
        </div>
      </section>

      {/* Main Copy Section */}
      <section className="mx-auto max-w-[1240px] px-6 sm:px-10 py-16 sm:py-20 border-b border-[#38322B]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Side note */}
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A59E96]">
              WHAT I BRING
            </p>
            <p className="font-serif text-2xl text-[#F8F5F0] mt-4 leading-snug">
              Clear writing, good design instincts, and a healthy curiosity about
              the numbers.
            </p>
          </div>

          {/* Copy Blocks */}
          <div className="lg:col-span-8 space-y-12">
            {/* Why AI companies */}
            <article className="border border-[#38322B] p-8 sm:p-10 bg-[#1A1715]">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F5F0]">
                Why AI companies
              </h2>
              <p className="font-sans text-base text-[#A59E96] mt-5 leading-relaxed">
                AI products are some of the most impressive things being built
                right now, and some of the hardest to explain. Too many launch
                posts read like a research paper wearing a blazer. Founders know
                exactly what they’ve built, but the people who’d love it can’t
                tell what it does or why it matters.
              </p>
              <p className="font-sans text-base text-[#A59E96] mt-4 leading-relaxed">
                That gap is what I like working on. I take what the team knows
                and turn it into content people actually understand, remember,
                and talk about.
              </p>
            </article>

            {/* What I actually do */}
            <article className="border border-[#38322B] p-8 sm:p-10 bg-[#1A1715]">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F5F0]">
                What I actually do
              </h2>
              <p className="font-sans text-base text-[#A59E96] mt-3">
                Content is my main gig. For AI companies, that looks like:
              </p>

              <div className="mt-8 space-y-6">
                <div className="border-l-2 border-[#F8F5F0] pl-5">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#F8F5F0] font-semibold">
                    LinkedIn content for founders and teams
                  </h3>
                  <p className="font-sans text-sm text-[#A59E96] mt-1.5 leading-relaxed">
                    I turn what AI CEOs know into posts that sound like them, not
                    like a press release or a product changelog.
                  </p>
                </div>

                <div className="border-l-2 border-[#F8F5F0] pl-5">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#F8F5F0] font-semibold">
                    Content writing
                  </h3>
                  <p className="font-sans text-sm text-[#A59E96] mt-1.5 leading-relaxed">
                    Posts, captions, launch copy, and explainers that say
                    something instead of filling space.
                  </p>
                </div>

                <div className="border-l-2 border-[#F8F5F0] pl-5">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#F8F5F0] font-semibold">
                    Social media management
                  </h3>
                  <p className="font-sans text-sm text-[#A59E96] mt-1.5 leading-relaxed">
                    Your pages stay consistent, clear, and not weirdly silent for
                    three weeks after a launch.
                  </p>
                </div>
              </div>
            </article>

            {/* Availability */}
            <article className="bg-[#F8F5F0] text-[#151311] p-8 sm:p-10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5C554D]">
                CURRENTLY OPEN TO
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#151311] mt-3 leading-snug">
                Marketing roles and internships at AI companies, and to working
                with AI founders and teams on content.
              </h2>
              <p className="font-sans text-sm text-[#5C554D] mt-4 leading-relaxed">
                Email me at{" "}
                <a
                  href={MAILTO_CONTACT}
                  className="text-[#151311] underline underline-offset-4 hover:opacity-70"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                if you’d like to chat or you want to offer me a role in your
                company.
              </p>
              <div className="mt-6">
                <a
                  href={MAILTO_CONTACT}
                  className="inline-flex items-center gap-2 bg-[#151311] text-[#F8F5F0] font-mono text-xs font-semibold uppercase tracking-wider px-5 py-3 hover:bg-[#2A2420] transition-colors"
                >
                  Say hello <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mx-auto max-w-[1240px] px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A59E96]">
              ON PAPER
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F5F0] mt-3">
              The experience.
            </h2>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#38322B] border-t border-b border-[#38322B]">
            <div className="py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl text-[#F8F5F0]">
                  Content Writer
                </h3>
                <p className="font-mono text-xs text-[#A59E96] uppercase mt-1">
                  Freelance
                </p>
                <p className="font-sans text-sm text-[#A59E96] mt-2 max-w-lg leading-relaxed">
                  LinkedIn content strategy, founder storytelling, personal
                  branding, planning, and scheduling. Now focused on AI
                  companies.
                </p>
              </div>
              <span className="font-mono text-xs text-[#A59E96] uppercase shrink-0">
                July 2026 — Present
              </span>
            </div>

            <div className="py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl text-[#F8F5F0]">
                  Digital Marketing Intern
                </h3>
                <p className="font-mono text-xs text-[#A59E96] uppercase mt-1">
                  Hindtech IT Solutions
                </p>
                <p className="font-sans text-sm text-[#A59E96] mt-2 max-w-lg leading-relaxed">
                  Social media strategy and operations across platforms, content
                  planning, publishing, and lead generation.
                </p>
              </div>
              <span className="font-mono text-xs text-[#A59E96] uppercase shrink-0">
                March 2026 — June 2026
              </span>
            </div>

            <div className="py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl text-[#F8F5F0]">Education</h3>
                <p className="font-mono text-xs text-[#A59E96] uppercase mt-1">
                  Bachelor of Computer Application, Computer Science
                </p>
                <p className="font-sans text-sm text-[#A59E96] mt-2 max-w-lg leading-relaxed">
                  Shri Ramswaroop Memorial University
                </p>
              </div>
              <span className="font-mono text-xs text-[#A59E96] uppercase shrink-0">
                Expected July 2027
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
