import { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface AboutPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutPage = ({ isOpen, onClose }: AboutPageProps) => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="About Swastik Patel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-white text-[#111111] overflow-y-auto"
        >
          {/* Sticky Top Header Bar */}
          <div className="sticky top-0 z-30 bg-white/92 backdrop-blur-md border-b border-[#080808]/5">
            <header className="w-full flex items-center justify-between max-w-[1720px] mx-auto p-4 sm:p-6 lg:p-8 xl:p-10 py-3 sm:py-4">
              <div
                tabIndex={0}
                aria-label="Swastik Patel Home"
                className="inline-flex items-center justify-center h-[38px] sm:h-[42px] px-[16px] sm:px-[19px] rounded-full border border-[#080808] text-[18px] sm:text-[21px] font-normal tracking-[-0.02em] text-[#080808] bg-white select-none cursor-pointer"
                onClick={onClose}
              >
                <span>Swastik Patel</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close about page"
                className="inline-flex items-center justify-center h-[38px] sm:h-[42px] px-[18px] sm:px-[22px] rounded-full border border-[#080808] text-[14px] sm:text-[16px] font-normal tracking-[-0.01em] text-[#080808] bg-white transition-all duration-200 hover:bg-[#080808] hover:text-white active:scale-95 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080808] focus-visible:ring-offset-2"
              >
                Close
              </button>
            </header>
          </div>

          {/* Reading Column Article (using Hero Headline font: Plus Jakarta Sans) */}
          <main className="w-full">
            <article className="max-w-[660px] mx-auto px-6 sm:px-8 pt-10 sm:pt-16 md:pt-20 pb-28 sm:pb-36 font-sans text-[17px] sm:text-[18.5px] md:text-[19.5px] leading-[1.62] text-[#111111] tracking-[-0.01em] space-y-7 sm:space-y-8 select-text">

              {/* Intro paragraph */}
              <p>
                Hey, it’s me. Swastik.
              </p>

              <p>
                I’m the person behind the LinkedIn posts you didn’t realise you were enjoying.
              </p>

              {/* What I actually do */}
              <div className="space-y-3 pt-2">
                <h2 className="font-sans text-[13px] sm:text-[14px] uppercase tracking-wider font-semibold text-[#080808]/75 editorial-mono">
                  What I actually do
                </h2>
                <p>
                  LinkedIn is my main gig. Founders usually know a lot more than they post, so I take the stories and lessons they’ve been meaning to share and turn them into posts that sound like them, not like a press release. Nobody’s thrilled to announce anything.
                </p>
              </div>

              {/* The side quests */}
              <div className="space-y-3 pt-2">
                <h2 className="font-sans text-[13px] sm:text-[14px] uppercase tracking-wider font-semibold text-[#080808]/75 editorial-mono">
                  The side quests
                </h2>
                <p>
                  LinkedIn is the main character, but I also play a few supporting roles:
                </p>
                <div className="space-y-2 pt-1 pl-1">
                  <p>
                    <span className="font-medium underline underline-offset-4 decoration-[#111111]/35">Social media management</span>: I keep your pages alive, consistent, and not weirdly silent for three weeks.
                  </p>
                  <p>
                    <span className="font-medium underline underline-offset-4 decoration-[#111111]/35">Content writing</span>: Posts, captions, and copy that say something instead of just filling space.
                  </p>
                </div>
              </div>

              {/* Now, performance marketing */}
              <div className="space-y-3 pt-2">
                <h2 className="font-sans text-[13px] sm:text-[14px] uppercase tracking-wider font-semibold text-[#080808]/75 editorial-mono">
                  Now, performance marketing
                </h2>
                <p className="italic text-[#333333]">
                  I know. The name sounds like a spreadsheet in a suit.
                </p>
                <p>
                  Here’s the real version: performance marketing is just finding out what people actually respond to, then doing more of that. Every ad is a tiny experiment. Every number is a customer saying “yes, this” or “no, please stop.” I like it because it’s the one part of marketing where the audience gives you honest feedback, and nobody is polite about it.
                </p>
                <p>
                  It also keeps my creative side honest. A post can feel brilliant, but the data decides if it actually worked.
                </p>
              </div>

              {/* Why this combo works */}
              <div className="space-y-3 pt-2">
                <h2 className="font-sans text-[13px] sm:text-[14px] uppercase tracking-wider font-semibold text-[#080808]/75 editorial-mono">
                  Why this combo works
                </h2>
                <p>
                  Good content gets attention. Good data tells you what to do with it. I like having both in one brain.
                </p>
              </div>

              {/* Signoff / Inquiries link */}
              <div className="pt-6 border-t border-[#111111]/15 text-[16px] sm:text-[18px]">
                <p>
                  Currently open to partnering with founders and ambitious teams. Email me at{' '}
                  <a
                    href="mailto:studio@swastikpatel.design"
                    className="font-medium underline underline-offset-4 decoration-[#111111]/50 text-[#080808] hover:opacity-60 transition-opacity"
                  >
                    dev.swastikpatel0305@gmail.com
                  </a>{' '}
                  if you’d like to chat or you want to offer me a role in your company.
                </p>
              </div>

            </article>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
