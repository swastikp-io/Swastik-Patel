import { motion, useReducedMotion } from 'framer-motion';

interface HeroCTAProps {
  onClick?: () => void;
}

export const HeroCTA = ({ onClick }: HeroCTAProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
      className="w-full sm:w-[480px] max-w-[480px]"
    >
      <button
        type="button"
        onClick={onClick}
        aria-label="Visual design, abstract expression, and experimental aesthetics everywhere - Explore Swastik Patel studio"
        className="w-full h-[80px] rounded-full border border-[#080808] bg-white p-[3px] sm:p-[4px] flex items-center text-left group cursor-pointer transition-all duration-300 hover:shadow-[0_6px_30px_rgba(8,8,8,0.06)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080808] focus-visible:ring-offset-2"
      >
        {/* Left: Large Black Circular Button with Arrow (72px × 72px) */}
        <div className="w-[72px] h-[72px] rounded-full bg-[#080808] text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-[1.02]">
          <svg
            className="w-[28px] h-[28px] text-white transition-transform duration-300 ease-out group-hover:translate-x-[4px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>

        {/* Right: Exact Editorial Text */}
        <div className="flex-1 pl-[14px] sm:pl-[18px] pr-[16px] sm:pr-[20px] overflow-hidden">
          <p className="text-[17px] sm:text-[19px] md:text-[20px] lg:text-[21px] font-normal leading-[1.1] text-[#333333] tracking-[-0.02em] select-none line-clamp-2">
            Story-led marketing for founders building their presence.
          </p>
        </div>
      </button>
    </motion.div>
  );
};
