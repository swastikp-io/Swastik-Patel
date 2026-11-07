'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const greetings = [
  'Hello',
  'Bonjour',
  'Ciao',
  'Olà',
  'やあ',
  'Hallå',
  'Guten tag',
  'হ্যালো',
  'नमस्ते',
  'ਸਤ ਸ੍ਰੀ ਅਕਾਲ ਜੀ',
];

const easing = [0.76, 0, 0.24, 1] as const;

type Dimension = {
  width: number;
  height: number;
};

export const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateDimension = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimension();
    window.addEventListener('resize', updateDimension);
    return () => window.removeEventListener('resize', updateDimension);
  }, []);

  useEffect(() => {
    if (index >= greetings.length - 1) return;

    const timeout = window.setTimeout(
      () => setIndex((currentIndex) => currentIndex + 1),
      index === 0 ? 600 : 110,
    );

    return () => window.clearTimeout(timeout);
  }, [index]);

  const initialPath =
    dimension.width > 0
      ? `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`
      : '';
  const targetPath =
    dimension.width > 0
      ? `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`
      : '';
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: easing },
    },
    exit: {
      d: targetPath,
      transition: shouldReduceMotion
        ? { duration: 0.15 }
        : { duration: 0.7, ease: easing, delay: 0.3 },
    },
  };

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-transparent text-black pointer-events-none will-change-transform"
      initial="initial"
      animate="initial"
      exit="exit"
      variants={{
        initial: { y: '0%' },
        exit: {
          y: shouldReduceMotion ? '0%' : '-100%',
          opacity: shouldReduceMotion ? 0 : 1,
          transition: shouldReduceMotion
            ? { duration: 0.15 }
            : { duration: 0.8, ease: easing, delay: 0.2 },
        },
      }}
      aria-hidden="true"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            className="relative z-10 m-0 font-sans text-4xl font-normal tracking-tight text-black md:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.35 }}
          >
            {greetings[index]}
          </motion.p>
          <svg
            className="pointer-events-none absolute left-0 top-0 z-[-1] block h-[calc(100%+300px)] w-full"
            viewBox={`0 0 ${dimension.width} ${dimension.height + 300}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d={initialPath}
              fill="#ffffff"
              variants={curve}
              initial="initial"
              exit="exit"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
};
