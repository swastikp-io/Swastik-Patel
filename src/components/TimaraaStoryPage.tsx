import { useEffect } from 'react';

export const TimaraaStoryPage = () => {
  useEffect(() => {
    document.title = 'Social Media Concept';
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#080808] selection:bg-[#080808] selection:text-white">
      <header className="mx-auto flex w-full max-w-[1720px] items-center justify-between p-4 sm:p-6 lg:p-8 xl:p-10">
        <a
          href="/"
          aria-label="Swastik Patel home"
          className="inline-flex h-[42px] items-center justify-center rounded-full border border-[#080808] bg-white px-[19px] text-[18px] font-normal tracking-[-0.02em] text-[#080808] transition-colors hover:bg-[#080808] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080808] focus-visible:ring-offset-2 sm:text-[21px]"
        >
          Swastik Patel
        </a>
        <a
          href="/"
          className="inline-flex h-[42px] items-center justify-center rounded-full border border-[#080808] bg-white px-[19px] text-[15px] font-normal tracking-[-0.01em] text-[#080808] transition-colors hover:bg-[#080808] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080808] focus-visible:ring-offset-2 sm:text-[16px]"
        >
          Back to home
        </a>
      </header>

      <main className="mx-auto w-full max-w-[1720px] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-[700px] pb-8 pt-10 sm:pb-10 sm:pt-12">
          <h1 className="font-sans text-[clamp(2.5rem,7vw,5rem)] font-normal leading-[1.05] tracking-[-0.03em] text-[#080808]">
            A Self Initiated Social Media Concept
          </h1>
        </div>

        <figure className="mx-auto m-0 w-full max-w-[700px]">
          <img
            src="/img-01.png"
            alt="Timaraa social marketing concept displayed in a sunlit pink courtyard"
            className="block h-auto w-full"
          />
        </figure>

        <article className="mx-auto max-w-[700px] pt-12 font-sans text-[17px] leading-[1.7] tracking-[-0.01em] text-[#111111] sm:pt-16 sm:text-[18px] md:pt-20">
          <section aria-labelledby="the-brand" className="mb-14 sm:mb-16">
            <h2 id="the-brand" className="mb-5 font-sans text-3xl font-normal leading-tight tracking-[-0.02em] text-[#080808] sm:text-4xl">
              The Brand
            </h2>
            <p className="mb-5">
              Timaraa is a Lucknow-based label for handcrafted luxury and custom designer wear for women. In the founder&apos;s words:
            </p>
            <blockquote className="my-7 font-serif text-[20px] leading-[1.55] tracking-[-0.01em] text-[#080808] sm:text-[22px]">
              Timaraa is a fashion brand with a heart. Every piece you find here is handcrafted, whether handwoven, hand-embellished, or hand-painted, making each design unique and limited edition. By promoting handcrafted luxury, we also empower local artisans and women, many of whom were homemakers, by teaching them fabric painting, embellishment, designing, and tailoring.
            </blockquote>
            <p>
              Two things make this brand special. The product is made by hand, one piece at a time. And behind each piece is a community of artisans and women the brand is helping build skills and independence. That is a strong story for a social media presence to tell.
            </p>
          </section>

          <section aria-labelledby="whats-already-working" className="mb-14 sm:mb-16">
            <h2 id="whats-already-working" className="mb-5 font-sans text-3xl font-normal leading-tight tracking-[-0.02em] text-[#080808] sm:text-4xl">
              What&apos;s Already Working
            </h2>
            <p className="mb-5">
              The foundation is strong, and this concept builds on it rather than replacing it.
            </p>
            <div className="space-y-5">
              <p>
                <strong className="font-semibold text-[#080808]">Reels.</strong> The video content has movement and energy, and it shows the garments the way they are meant to be seen.
              </p>
              <p>
                <strong className="font-semibold text-[#080808]">Clean product photography.</strong> When a post is just the model and the piece, the clothes do the talking. The embroidery and silhouettes shine.
              </p>
              <p>
                <strong className="font-semibold text-[#080808]">Runway credibility.</strong> Timaraa has been featured on the runway at Times Fashion Week, a milestone that signals design standing and gives the brand a strong proof point to build on.
              </p>
            </div>
          </section>

          <section aria-labelledby="the-opportunity" className="mb-14 sm:mb-16">
            <h2 id="the-opportunity" className="mb-5 font-sans text-3xl font-normal leading-tight tracking-[-0.02em] text-[#080808] sm:text-4xl">
              The Opportunity
            </h2>
            <p>
              Most of Timaraa&apos;s content already carries the brand&apos;s premium feel. Some posts that carry information, such as announcements and brand messaging, use more generic, template-style layouts. These sit a little apart from the texture and richness of the product imagery around them.
            </p>
            <p className="mt-5">
              Every post is a first impression for someone discovering the brand. Consistency across all formats can make the whole feed feel as considered as the clothes.
            </p>
          </section>

          <section aria-labelledby="the-insight" className="mb-14 sm:mb-16">
            <h2 id="the-insight" className="mb-5 font-sans text-3xl font-normal leading-tight tracking-[-0.02em] text-[#080808] sm:text-4xl">
              The Insight
            </h2>
            <p className="mb-5 font-serif text-[22px] leading-[1.45] tracking-[-0.02em] text-[#080808] sm:text-[26px]">
              A handcrafted brand&apos;s feed should look handcrafted.
            </p>
            <p>
              Timaraa&apos;s strongest assets are the ones a template cannot replicate: the embroidery, the fabric texture, the hand-finishing, the people who make it. When these details become the hero of the design, even a post that carries information feels like it belongs to the same world as the product.
            </p>
            <p className="mt-5">
              The principle behind this concept: let the craft lead, and let the layout support it.
            </p>
            <figure className="mt-8">
              <img
                src="/insight.png"
                alt="A tailor cutting beige fabric with shears"
                className="block h-auto w-full"
              />
            </figure>
          </section>

          <section aria-labelledby="system-thinking">
            <h2 id="system-thinking" className="mb-5 font-sans text-3xl font-normal leading-tight tracking-[-0.02em] text-[#080808] sm:text-4xl">
              System Thinking: A Small Content Framework
            </h2>
            <p>
              Instead of designing one-off posts, I mapped three content pillars. Each gives the brand a repeatable format.
            </p>
            <figure className="mt-8">
              <img
                src="/content-framework.png"
                alt="Content Framework"
                className="block h-auto w-full"
              />
            </figure>
            <section aria-labelledby="sample-posts" className="mt-12">
              <h3 id="sample-posts" className="mb-5 font-sans text-2xl font-normal leading-tight tracking-[-0.02em] text-[#080808] sm:text-3xl">
                Sample posts: where each format fits
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-[15px] leading-[1.55] sm:text-base">
                  <thead>
                    <tr>
                      <th scope="col" className="border border-[#080808] px-4 py-3 font-semibold text-[#080808]">Pillar</th>
                      <th scope="col" className="border border-[#080808] px-4 py-3 font-semibold text-[#080808]">Sample Post</th>
                      <th scope="col" className="border border-[#080808] px-4 py-3 font-semibold text-[#080808]">Why it works</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="border border-[#080808] px-4 py-4 font-normal">Craft and Detail</th>
                      <td className="border border-[#080808] px-4 py-4">Beige set collage: embroidery close-up with the full look as an inset</td>
                      <td className="border border-[#080808] px-4 py-4">The viewer sees the craft first and the product second</td>
                    </tr>
                    <tr>
                      <th scope="row" className="border border-[#080808] px-4 py-4 font-normal">Brand Voice</th>
                      <td className="border border-[#080808] px-4 py-4">Chat-bubble post: &quot;She wore TIMARAA.&quot;</td>
                      <td className="border border-[#080808] px-4 py-4">A short exchange that positions the label as a mark of taste, and can become a recurring series</td>
                    </tr>
                    <tr>
                      <th scope="row" className="border border-[#080808] px-4 py-4 font-normal">Styling and Occasion (bonus)</th>
                      <td className="border border-[#080808] px-4 py-4">Orange kaftan post, styled with denim</td>
                      <td className="border border-[#080808] px-4 py-4">Shows the piece in detail and in an everyday-luxe context</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </section>
        </article>
      </main>
    </div>
  );
};
