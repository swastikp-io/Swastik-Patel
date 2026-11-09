import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import craftDetail from "@/assets/timaraa-craft-detail.jpg";
import brandVoice from "@/assets/timaraa-brand-voice.jpg";
import stylingEditorial from "@/assets/timaraa-styling-editorial.jpg";
import { Eyebrow } from "@/components/site-shell";
import { MAILTO_CONTACT, NOTION_FORM_URL } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swastik Patel" },
      {
        name: "description",
        content:
          "I turn founders’ brain dumps into LinkedIn posts people actually read. Meet Swastik Patel, a content marketer in Lucknow, India.",
      },
      {
        property: "og:title",
        content: "Swastik Patel — LinkedIn Content & Storytelling",
      },
      {
        property: "og:description",
        content:
          "Founder-led LinkedIn content, thoughtful social strategy, and stories worth reading.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const samples = [
  {
    title: "Craft & detail",
    note: "Let the embroidery lead. A close-up, with the full look as its inset.",
    image: craftDetail,
    alt: "Timaraa concept post highlighting the handcrafted detail of a cream outfit",
    number: "01",
    className: "sample-craft",
  },
  {
    title: "Brand voice",
    note: "A small, repeatable conversation built around the label’s point of view.",
    image: brandVoice,
    alt: "Timaraa concept post with a witty conversation about impeccable taste",
    number: "02",
    className: "sample-voice",
  },
  {
    title: "Styling & occasion",
    note: "A hero detail and an everyday styling idea, in one editorial frame.",
    image: stylingEditorial,
    alt: "Timaraa concept post styling an embroidered orange kaftan with denim",
    number: "03",
    className: "sample-style",
  },
];

function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
          <div className="max-w-5xl">
            <Eyebrow>
              LinkedIn content · Founder storytelling · Lucknow, India
            </Eyebrow>
            <h1 className="hero-title mt-6 font-display text-foreground">
              I turn founders’ brain dumps into LinkedIn posts people{" "}
              <em>actually read.</em>
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                className="text-link text-primary hover:text-foreground font-semibold"
                href={NOTION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                [Start a Conversation]
              </a>

            </div>
          </div>
        </div>
        <div className="hero-marquee" aria-hidden="true">
          <div className="hero-marquee-track">
            <div className="hero-marquee-content">
              <span>Good stories sound like you</span>
              <span className="marquee-star">✳</span>
              <span>Not like a press release</span>
              <span className="marquee-star">✳</span>
              <span>Good stories sound like you</span>
              <span className="marquee-star">✳</span>
              <span>Not like a press release</span>
              <span className="marquee-star">✳</span>
            </div>
            <div className="hero-marquee-content" aria-hidden="true">
              <span>Good stories sound like you</span>
              <span className="marquee-star">✳</span>
              <span>Not like a press release</span>
              <span className="marquee-star">✳</span>
              <span>Good stories sound like you</span>
              <span className="marquee-star">✳</span>
              <span>Not like a press release</span>
              <span className="marquee-star">✳</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section" id="selected-work">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="section-heading">
            <div>
              <Eyebrow>A self-initiated social media concept</Eyebrow>
              <h2 className="section-title mt-3 font-display text-foreground">
                Making the feed as <em>handcrafted</em> as the clothes.
              </h2>
            </div>
            <p className="section-intro">
              A content direction for Timaraa, a Lucknow label creating
              handcrafted luxury and custom designer wear. Built from admiration
              for the craft and the people behind it.
            </p>
          </div>

          <div className="project-meta mt-8">
            <span>Timaraa · Social content concept</span>
            <span>Content pillars / Sample posts / Brand voice</span>
            <span className="project-status">
              Independent concept · Not commissioned
            </span>
          </div>

          <div className="sample-grid mt-8">
            {samples.map((sample) => (
              <article
                className={`sample-item ${sample.className}`}
                key={sample.number}
              >
                <div className="sample-image-wrap">
                  <img
                    alt={sample.alt}
                    className="sample-image"
                    loading="lazy"
                    src={sample.image}
                  />
                  <span className="sample-number">{sample.number}</span>
                </div>
                <div className="sample-copy">
                  <h3>{sample.title}</h3>
                  <p>{sample.note}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="project-insight mt-10">
            <p className="project-insight-quote font-display">
              “A handcrafted brand’s feed should look handcrafted.”
            </p>
            <div className="project-insight-detail">
              <p>
                Three repeatable pillars—craft and detail, styling and occasion,
                and brand voice— give every post a place in the same visual
                world.
              </p>
              <p className="proposed-note">
                Proposed measures: saves and shares, profile visits, and
                custom-order enquiries. No performance results are claimed; this
                is an independent concept.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
            <p className="text-sm text-muted-foreground">
              The concept is not affiliated with or commissioned by Timaraa.
            </p>
            <a
              className="text-link"
              href={NOTION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Want a feed with a point of view?{" "}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
