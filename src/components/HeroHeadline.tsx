import type { Variants } from 'framer-motion';
import { motion, useReducedMotion } from 'framer-motion';

export const HeroHeadline = () => {
  const shouldReduceMotion = useReducedMotion();

  const lines = [
    'I turn founders’ brain dumps into',
    'LinkedIn posts people actually read.',
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto select-none px-2 sm:px-4">
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="font-normal text-[#080808] text-center leading-[1.08] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-2.5px] text-[28px] sm:text-[40px] md:text-[50px] lg:text-[58px] xl:text-[66px]"
        style={{
          wordBreak: 'break-word',
          lineHeight: '1.08',
        }}
      >
        {lines.map((line, index) => (
          <span key={index} className="block overflow-visible md:whitespace-nowrap">
            <motion.span
              variants={lineVariants}
              className="inline-block"
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.h1>
    </div>
  );
};
