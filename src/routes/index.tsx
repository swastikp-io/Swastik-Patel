import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Layers,
  BarChart3,
  Compass,
  Users,
  X,
} from "lucide-react";

import { WireframeWave } from "@/components/graphics/wireframe-wave";
import { WireframeSphere } from "@/components/graphics/wireframe-sphere";
import { SteppedFrame } from "@/components/graphics/stepped-frame";
import { DottedGrid } from "@/components/graphics/dotted-grid";
import { GeometricMotif } from "@/components/graphics/geometric-motif";
import { MAILTO_CONTACT, NOTION_FORM_URL } from "@/lib/utils";

import craftDetail from "@/assets/timaraa-craft-detail.jpg";
import brandVoice from "@/assets/timaraa-brand-voice.jpg";
import stylingEditorial from "@/assets/timaraa-styling-editorial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swastik Patel — Marketing for AI Companies" },
      {
        name: "description",
        content:
          "I make AI products sound like they were built for humans. Founder storytelling, content strategy and distribution that turns complex technology into something people understand.",
      },
      {
        property: "og:title",
        content: "Swastik Patel — Marketing for AI Companies",
      },
      {
        property: "og:description",
        content:
          "I make AI products sound like they were built for humans. Marketing for AI companies, founder-led content, and stories worth reading.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [selectedProject, setSelectedProject] = useState<"timaraa" | "ai" | null>(null);

  return (
    <main className="w-full bg-[#151311] text-[#F8F5F0]">
      {/* SECTION 02 — Hero */}
      <section className="mx-auto max-w-[1240px] px-6 sm:px-10 pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-[#F8F5F0]">
              <span className="inline-block w-2 h-2 bg-[#F8F5F0]" />
              <span>MARKETING FOR AI COMPANIES</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[3.2rem] sm:text-[4.4rem] lg:text-[5.4rem] leading-[0.93] tracking-tight text-[#F8F5F0] mt-6">
              I make AI products
              <br />
              sound like they were
              <br />
              built for humans.
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg leading-relaxed text-[#A59E96] max-w-lg mt-6">
              Founder storytelling, content strategy and distribution that turns
              complex technology into something people understand.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-[#F8F5F0] text-[#151311] hover:bg-[#E9DED2] font-mono text-xs font-semibold uppercase tracking-wider px-5 py-3 transition-colors"
              >
                VIEW WORK <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Large Stepped Wireframe Wave Graphic */}
          <div className="lg:col-span-5 w-full">
            <SteppedFrame variant="hero">
              <WireframeWave density={1.1} speed={1} />
            </SteppedFrame>
          </div>
        </div>
      </section>

      {/* SECTION 03 — Information Bar */}
      <section className="w-full border-y border-[#38322B] bg-[#151311]">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-10 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#F8F5F0]">
          <div className="flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-[#F8F5F0]" />
            <span>INDEPENDENT MARKETER — INDIA</span>
          </div>

          <a
            href={NOTION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#A59E96] hover:text-[#F8F5F0] transition-colors"
          >
            <span>OPEN TO AI MARKETING OPPORTUNITIES</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </section>

      {/* SECTION 04 — Selected Work & Capability Grid */}
      <section id="work" className="mx-auto max-w-[1240px] px-6 sm:px-10 py-16 sm:py-20">
        <div className="border border-[#38322B] bg-[#1A1715]">
          {/* ROW 1: Project 01 (Timaraa) + What I Do */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#38322B]">
            {/* Project 01: Timaraa (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#38322B] flex flex-col justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#A59E96]">
                  FEATURED WORK / 01
                </p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F5F0] tracking-tight">
                      Timaraa.
                    </h2>
                    <p className="font-sans text-sm text-[#A59E96] mt-4 leading-relaxed">
                      A creative concept exploring storytelling, brand and
                      community around music and handcrafted couture.
                    </p>

                    <button
                      onClick={() => setSelectedProject("timaraa")}
                      className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#F8F5F0] hover:text-[#A59E96] transition-colors cursor-pointer"
                    >
                      VIEW PROJECT <ArrowUpRight className="size-3.5" />
                    </button>
                  </div>

                  <div className="md:col-span-6">
                    <SteppedFrame variant="project1">
                      <WireframeWave density={0.9} speed={0.8} />
                    </SteppedFrame>
                  </div>
                </div>
              </div>
            </div>

            {/* What I Do (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#A59E96]">
                  WHAT I DO
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F8F5F0] mt-3 leading-snug">
                  Marketing that makes complex products click.
                </h2>
              </div>

              <div className="mt-6 space-y-0 divide-y divide-[#38322B] border-t border-[#38322B]">
                {/* Capability 1 */}
                <div className="py-3 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="size-7 bg-[#28231F] flex items-center justify-center text-[#F8F5F0]">
                      <Layers className="size-3.5" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#F8F5F0]">
                      FOUNDER-LED CONTENT & STORYTELLING
                    </span>
                  </div>
                  <ArrowUpRight className="size-3.5 text-[#A59E96] group-hover:text-[#F8F5F0] transition-colors" />
                </div>

                {/* Capability 2 */}
                <div className="py-3 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="size-7 bg-[#28231F] flex items-center justify-center text-[#F8F5F0]">
                      <BarChart3 className="size-3.5" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#F8F5F0]">
                      CONTENT STRATEGY & DISTRIBUTION
                    </span>
                  </div>
                  <ArrowUpRight className="size-3.5 text-[#A59E96] group-hover:text-[#F8F5F0] transition-colors" />
                </div>

                {/* Capability 3 */}
                <div className="py-3 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="size-7 bg-[#28231F] flex items-center justify-center text-[#F8F5F0]">
                      <Compass className="size-3.5" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#F8F5F0]">
                      PRODUCT POSITIONING & MESSAGING
                    </span>
                  </div>
                  <ArrowUpRight className="size-3.5 text-[#A59E96] group-hover:text-[#F8F5F0] transition-colors" />
                </div>

                {/* Capability 4 */}
                <div className="py-3 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="size-7 bg-[#28231F] flex items-center justify-center text-[#F8F5F0]">
                      <Users className="size-3.5" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#F8F5F0]">
                      SOCIAL MEDIA & ORGANIC GROWTH
                    </span>
                  </div>
                  <ArrowUpRight className="size-3.5 text-[#A59E96] group-hover:text-[#F8F5F0] transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2: Project 02 (Content for AI builders) + Statistics (80+) */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Project 02 (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#38322B] flex flex-col justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#A59E96]">
                  SELECTED WORK / 02
                </p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F8F5F0] tracking-tight">
                      Content for
                      <br />
                      AI builders.
                    </h2>
                    <p className="font-sans text-sm text-[#A59E96] mt-4 leading-relaxed">
                      A content system and distribution approach for early-stage
                      AI products, translating code and research into customer
                      attention.
                    </p>

                    <button
                      onClick={() => setSelectedProject("ai")}
                      className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#F8F5F0] hover:text-[#A59E96] transition-colors cursor-pointer"
                    >
                      CASE STUDY <ArrowUpRight className="size-3.5" />
                    </button>
                  </div>

                  <div className="md:col-span-6">
                    <SteppedFrame variant="project2">
                      <WireframeSphere speed={0.9} />
                    </SteppedFrame>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics / Credibility (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between relative">
              {/* Dotted Matrix top right */}
              <div className="absolute top-8 right-8 hidden sm:block">
                <DottedGrid rows={6} cols={9} gap={10} dotColor="#38322B" />
              </div>

              <div>
                <span className="font-serif text-6xl sm:text-7xl lg:text-8xl leading-none text-[#F8F5F0] block">
                  80+
                </span>
                <p className="font-sans text-sm text-[#A59E96] mt-4 max-w-xs leading-relaxed">
                  Pieces of content shipped across projects, experiments and
                  personal brands.
                </p>
              </div>

              <div className="mt-10 border-t border-[#38322B] pt-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A59E96]">
                  STRATEGY. CONTENT. SYSTEMS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — My Approach */}
      <section id="approach" className="mx-auto max-w-[1240px] px-6 sm:px-10 pb-16 sm:pb-20">
        <div className="border border-[#38322B] p-6 sm:p-10 bg-[#1A1715]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Heading + Geometric Motif */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#A59E96]">
                  MY APPROACH
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F8F5F0] mt-3 leading-tight max-w-sm">
                  From understanding to distribution.
                </h2>
              </div>

              <div className="mt-8">
                <GeometricMotif />
              </div>
            </div>

            {/* Right Column: 4 Stages */}
            <div className="lg:col-span-7 divide-y divide-[#38322B] border-t lg:border-t-0 border-[#38322B]">
              {/* Stage 01 */}
              <div className="py-4 sm:py-5 flex items-start justify-between gap-4 group">
                <span className="font-serif text-3xl sm:text-4xl text-[#F8F5F0] w-12 shrink-0">
                  01
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F8F5F0]">
                    Understand
                  </h3>
                  <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#A59E96] mt-1">
                    RESEARCH THE PRODUCT, AUDIENCE AND MARKET.
                  </p>
                </div>
              </div>

              {/* Stage 02 */}
              <div className="py-4 sm:py-5 flex items-start justify-between gap-4 group">
                <span className="font-serif text-3xl sm:text-4xl text-[#F8F5F0] w-12 shrink-0">
                  02
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F8F5F0]">
                    Position
                  </h3>
                  <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#A59E96] mt-1">
                    TURN TECHNICAL COMPLEXITY INTO CLEAR, COMPELLING MESSAGING.
                  </p>
                </div>
              </div>

              {/* Stage 03 */}
              <div className="py-4 sm:py-5 flex items-start justify-between gap-4 group">
                <span className="font-serif text-3xl sm:text-4xl text-[#F8F5F0] w-12 shrink-0">
                  03
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F8F5F0]">
                    Create
                  </h3>
                  <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#A59E96] mt-1">
                    DEVELOP CONTENT THAT SOUNDS HUMAN, NOT JUST TECHNICAL.
                  </p>
                </div>
              </div>

              {/* Stage 04 */}
              <div className="py-4 sm:py-5 flex items-start justify-between gap-4 group">
                <span className="font-serif text-3xl sm:text-4xl text-[#F8F5F0] w-12 shrink-0">
                  04
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F8F5F0]">
                    Distribute
                  </h3>
                  <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#A59E96] mt-1">
                    BUILD CONSISTENT, COMPOUNDING VISIBILITY ACROSS THE RIGHT
                    CHANNELS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — About & Closing Contact */}
      <section id="about" className="mx-auto max-w-[1240px] px-6 sm:px-10 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: About Card (Inverted Ivory Panel) */}
          <div className="lg:col-span-5 bg-[#F8F5F0] text-[#151311] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 border border-[#151311]/40 text-[#151311]">
                  ABOUT
                </span>
                <a
                  href="/about"
                  className="text-[#151311] hover:opacity-60 transition-opacity"
                  aria-label="Read full about page"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#151311] mt-8 leading-snug">
                Curious about technology, interested in how people understand
                it.
              </h2>

              <p className="font-sans text-sm text-[#5C554D] mt-5 leading-relaxed">
                An independent marketer exploring the intersection of content,
                technology and AI. Based in India, working with ambitious teams
                building the future.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-widest text-[#151311]">
              <span className="inline-block w-2 h-2 bg-[#151311]" />
              <span>OPEN TO AI MARKETING OPPORTUNITIES</span>
            </div>
          </div>

          {/* Right: Closing Contact Section */}
          <div className="lg:col-span-7 border border-[#38322B] bg-[#1A1715] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#A59E96]">
                HAVE AN AI PRODUCT THAT'S HARD TO EXPLAIN?
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F8F5F0] mt-4 leading-tight max-w-md">
                Let’s make people understand why it matters.
              </h2>

              <div className="mt-8">
                <a
                  href={NOTION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F8F5F0] text-[#151311] font-mono text-xs font-semibold uppercase tracking-wider px-5 py-3.5 hover:bg-[#E9DED2] transition-colors"
                >
                  START A CONVERSATION <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Stepped Wireframe Wave Graphic at bottom right */}
            <div className="mt-10 sm:mt-12 flex justify-end">
              <div className="w-full sm:w-[320px]">
                <SteppedFrame variant="contact">
                  <WireframeWave density={0.8} speed={0.9} />
                </SteppedFrame>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal: Preserves full visual case study samples */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#1A1715] border border-[#38322B] text-[#F8F5F0] p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 text-[#F8F5F0] hover:text-[#A59E96] transition-colors"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>

            {selectedProject === "timaraa" ? (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#A59E96]">
                  FEATURED WORK / 01
                </p>
                <h2 className="font-serif text-4xl text-[#F8F5F0] mt-2">
                  Timaraa — Social Editorial Concept
                </h2>
                <p className="font-sans text-sm text-[#A59E96] mt-4 leading-relaxed">
                  A self-initiated social-media editorial direction for
                  Timaraa, a handcrafted luxury label. Built around three
                  repeatable pillars: craft & detail, brand voice, and styling &
                  editorial. (Independent concept, not commissioned).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="border border-[#38322B] p-2 bg-[#211D1A]">
                    <img
                      src={craftDetail}
                      alt="Craft and detail close-up"
                      className="w-full aspect-[4/5] object-cover"
                    />
                    <p className="font-mono text-[10px] uppercase mt-2 text-[#A59E96]">
                      01 · Craft & Detail
                    </p>
                  </div>
                  <div className="border border-[#38322B] p-2 bg-[#211D1A]">
                    <img
                      src={brandVoice}
                      alt="Brand voice conversational post"
                      className="w-full aspect-[4/5] object-cover"
                    />
                    <p className="font-mono text-[10px] uppercase mt-2 text-[#A59E96]">
                      02 · Brand Voice
                    </p>
                  </div>
                  <div className="border border-[#38322B] p-2 bg-[#211D1A]">
                    <img
                      src={stylingEditorial}
                      alt="Styling and occasion editorial"
                      className="w-full aspect-[4/5] object-cover"
                    />
                    <p className="font-mono text-[10px] uppercase mt-2 text-[#A59E96]">
                      03 · Styling & Occasion
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href={NOTION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#F8F5F0] text-[#151311] font-mono text-xs font-semibold uppercase px-4 py-2 hover:bg-[#E9DED2]"
                  >
                    Start a project <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#A59E96]">
                  SELECTED WORK / 02
                </p>
                <h2 className="font-serif text-4xl text-[#F8F5F0] mt-2">
                  Content for AI Builders
                </h2>
                <p className="font-sans text-sm text-[#A59E96] mt-4 leading-relaxed">
                  A framework for early-stage AI founders to extract their
                  internal technical notes, pull requests, and product
                  architectures, turning them into high-signal LinkedIn
                  storytelling and launch content.
                </p>

                <div className="border border-[#38322B] p-6 mt-6 bg-[#211D1A] space-y-4 font-mono text-xs text-[#F8F5F0]">
                  <div>
                    <span className="text-[#A59E96]">STAGE 01:</span> Extraction
                    session (founder brain dumps into structured audio).
                  </div>
                  <div>
                    <span className="text-[#A59E96]">STAGE 02:</span> Translation
                    (research jargon decoded into human problems & outcomes).
                  </div>
                  <div>
                    <span className="text-[#A59E96]">STAGE 03:</span> Multi-channel
                    distribution across LinkedIn, founder accounts, and developer
                    communities.
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href={MAILTO_CONTACT}
                    className="inline-flex items-center gap-1.5 bg-[#F8F5F0] text-[#151311] font-mono text-xs font-semibold uppercase px-4 py-2 hover:bg-[#E9DED2]"
                  >
                    Discuss this approach <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
