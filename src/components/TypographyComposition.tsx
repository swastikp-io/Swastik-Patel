import { useState } from 'react';
import type { Variants } from 'framer-motion';
import { motion, useReducedMotion } from 'framer-motion';

export const TypographyComposition = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activePanel, setActivePanel] = useState<number | null>(null);

  // Subtle floating motion variants
  const getPanelVariants = (delay: number, customY = 12): Variants => ({
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : customY,
      scale: shouldReduceMotion ? 1 : 0.98,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : delay,
        ease: 'easeOut',
      },
    },
  });

  return (
    <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[580px] xl:h-[620px] flex items-center justify-center select-none overflow-hidden lg:overflow-visible">
      
      {/* Background Architectural Grid Lines & Crosshairs */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <span className="editorial-mono absolute top-2 right-4 text-[10px] tracking-widest text-[#080808]/40">
          + LAT: 47°22'35"N // LON: 8°32'39"E
        </span>
        <span className="editorial-mono absolute top-2 left-6 text-[10px] tracking-widest text-[#080808]/40">
          GRID 12-COL // SPECIMEN 04
        </span>
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8E8E8] to-transparent" />
        <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E8E8E8] to-transparent" />
      </div>

      {/* Layer 0: Massive Typographic Glyphs in the Background */}
      <div 
        className="absolute -top-6 -right-6 lg:-top-10 lg:right-2 text-[200px] sm:text-[280px] lg:text-[340px] font-bold text-[#080808]/[0.035] leading-none pointer-events-none font-sans tracking-tighter"
        aria-hidden="true"
      >
        S
      </div>

      <div 
        className="absolute bottom-4 left-6 lg:bottom-10 lg:left-12 text-[140px] sm:text-[180px] lg:text-[220px] font-serif italic text-[#080808]/[0.04] leading-none pointer-events-none"
        aria-hidden="true"
      >
        &amp;
      </div>

      {/* Vertical Offset Typography Ribbon */}
      <motion.div
        variants={getPanelVariants(0.4)}
        initial="hidden"
        animate="visible"
        className="hidden xl:flex absolute left-4 top-1/4 -translate-y-1/2 items-center gap-3 origin-left rotate-90 pointer-events-none z-20"
      >
        <span className="editorial-mono text-[9px] uppercase tracking-[0.3em] text-[#080808]/60">
          FORM FOLLOWS TENSION — EDITORIAL INQUIRY
        </span>
        <span className="w-12 h-[1px] bg-[#080808]/30" />
        <span className="editorial-mono text-[9px] text-[#080808]/50">
          01 // 25
        </span>
      </motion.div>

      {/* Element 1: Large Translucent Geometric Panel (Soft Blue-Grey #DCE6E8) */}
      <motion.div
        variants={getPanelVariants(0.15, 18)}
        initial="hidden"
        animate="visible"
        onMouseEnter={() => setActivePanel(1)}
        onMouseLeave={() => setActivePanel(null)}
        className="absolute top-4 sm:top-6 right-4 sm:right-10 lg:right-14 w-[280px] sm:w-[350px] lg:w-[410px] h-[260px] sm:h-[310px] lg:h-[350px] rounded-[32px] border border-[#080808]/15 p-6 flex flex-col justify-between transition-all duration-500 z-10"
        style={{
          backgroundColor: 'rgba(220, 230, 232, 0.42)',
          backdropFilter: 'blur(8px)',
          boxShadow: activePanel === 1 ? '0 12px 36px rgba(8, 8, 8, 0.07)' : '0 4px 20px rgba(8, 8, 8, 0.02)',
        }}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-[#080808]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#080808]" />
            <span className="editorial-mono text-[11px] font-semibold tracking-wider text-[#080808] uppercase">
              Specimen No. 01
            </span>
          </div>
          <span className="editorial-mono text-[10px] text-[#080808]/60">
            RATIO 1 : 1.618
          </span>
        </div>

        {/* Center Editorial Visuals: Oversized typographic fragment */}
        <div className="my-auto py-2 relative">
          <div className="flex items-baseline justify-between">
            <span className="text-[52px] sm:text-[68px] lg:text-[76px] font-light tracking-[-0.04em] text-[#080808] leading-none">
              Aa
            </span>
            <div className="text-right">
              <span className="editorial-mono block text-[10px] text-[#080808]/70">KERNING</span>
              <span className="editorial-mono block text-[13px] font-medium text-[#080808]">-0.04 em</span>
            </div>
          </div>
          <p className="mt-2 text-[12px] sm:text-[13px] leading-[1.3] text-[#080808]/80 max-w-[260px] font-normal">
            Typography is not merely a vehicle for language; it is an autonomous spatial architecture.
          </p>
        </div>

        {/* Panel Footer Annotation */}
        <div className="flex items-center justify-between pt-3 border-t border-[#080808]/10">
          <span className="editorial-mono text-[10px] text-[#080808]/60">
            [FOLIO REF. 24-B]
          </span>
          <div className="flex gap-1.5 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#080808]/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#080808]/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#080808]" />
          </div>
        </div>
      </motion.div>

      {/* Element 2: Thin Outlined Structural Wireframe Frame (Black 1px border) */}
      <motion.div
        variants={getPanelVariants(0.25, 24)}
        initial="hidden"
        animate="visible"
        className="absolute top-24 sm:top-28 right-12 sm:right-24 lg:right-32 w-[240px] sm:w-[300px] lg:w-[340px] h-[220px] sm:h-[260px] lg:h-[290px] rounded-[24px] border border-[#080808] p-5 pointer-events-none z-15 flex flex-col justify-between"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.45)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <div className="flex justify-between items-start text-[10px] editorial-mono text-[#080808]/60">
          <span>┌ 1440 × 900</span>
          <span>┐ OPTICAL</span>
        </div>
        
        {/* Subtle center graphic line */}
        <div className="flex items-center justify-center gap-4 py-4">
          <span className="text-[28px] sm:text-[34px] font-serif italic text-[#080808]">§</span>
          <div className="h-[1px] flex-1 bg-[#080808]/20" />
          <span className="editorial-mono text-[11px] font-medium text-[#080808]">AXIS 0.0°</span>
        </div>

        <div className="flex justify-between items-end text-[10px] editorial-mono text-[#080808]/60">
          <span>└ BLEED 3MM</span>
          <span>┘ SCALE 1:1</span>
        </div>
      </motion.div>

      {/* Element 3: Pale Muted Pink Floating Panel (#E9B4C5) */}
      <motion.div
        variants={getPanelVariants(0.35, 16)}
        initial="hidden"
        animate="visible"
        onMouseEnter={() => setActivePanel(3)}
        onMouseLeave={() => setActivePanel(null)}
        className="absolute bottom-6 sm:bottom-10 right-2 sm:right-8 lg:right-16 w-[230px] sm:w-[280px] lg:w-[310px] h-[190px] sm:h-[220px] lg:h-[240px] rounded-[24px] border border-[#080808]/15 p-5 flex flex-col justify-between transition-all duration-500 z-25"
        style={{
          backgroundColor: 'rgba(233, 180, 197, 0.52)',
          backdropFilter: 'blur(8px)',
          boxShadow: activePanel === 3 ? '0 12px 32px rgba(233, 180, 197, 0.35)' : '0 4px 18px rgba(8, 8, 8, 0.03)',
        }}
      >
        <div className="flex items-center justify-between">
          <span className="editorial-mono text-[10px] uppercase tracking-wider text-[#080808] font-semibold">
            Chromatic Index
          </span>
          <span className="editorial-mono text-[10px] text-[#080808]/70">
            #E9B4C5
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[38px] sm:text-[46px] font-bold text-[#080808] leading-none tracking-tight">
            *08
          </span>
          <div className="flex flex-col text-[11px] leading-[1.25] text-[#080808]/80 font-normal">
            <span>Dynamic Balance</span>
            <span className="editorial-mono text-[9px] text-[#080808]/60">OFFSET +18PX</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] editorial-mono text-[#080808]/70 pt-2 border-t border-[#080808]/10">
          <span>SWASTIK PATEL STUDIO ARCHIVE</span>
          <span>VOL. IV</span>
        </div>
      </motion.div>

      {/* Element 4: Soft Yellow Accent Block / Pill (#E9D96D) */}
      <motion.div
        variants={getPanelVariants(0.45, 12)}
        initial="hidden"
        animate="visible"
        className="absolute top-1/2 -translate-y-8 left-4 sm:left-12 lg:left-2 w-[160px] sm:w-[185px] h-[52px] sm:h-[58px] rounded-full border border-[#080808] px-4 flex items-center justify-between z-30 transition-transform duration-300 hover:scale-105 cursor-default shadow-xs"
        style={{
          backgroundColor: 'rgba(233, 217, 109, 0.85)',
        }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#080808] animate-pulse" />
          <span className="editorial-mono text-[11px] font-bold tracking-tight text-[#080808]">
            RELEASE '26
          </span>
        </div>
        <span className="editorial-mono text-[10px] text-[#080808]/75">
          NO. 04
        </span>
      </motion.div>

      {/* Element 5: Light Grey Floating Editorial Card (#E8E8E8) */}
      <motion.div
        variants={getPanelVariants(0.55, 14)}
        initial="hidden"
        animate="visible"
        className="hidden sm:flex absolute bottom-2 left-10 lg:left-14 w-[170px] lg:w-[195px] h-[80px] lg:h-[90px] rounded-[18px] border border-[#080808]/20 p-3.5 flex-col justify-between z-20"
        style={{
          backgroundColor: 'rgba(232, 232, 232, 0.7)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <div className="flex justify-between items-center text-[9px] editorial-mono text-[#080808]/70">
          <span>COUNTERSPACE</span>
          <span>100%</span>
        </div>
        <div className="editorial-mono text-[11px] font-medium text-[#080808] tracking-tighter">
          WHERE FORM BECOMES
        </div>
        <div className="w-full bg-[#080808]/15 h-[2px] rounded-full overflow-hidden">
          <div className="w-3/4 bg-[#080808] h-full" />
        </div>
      </motion.div>

      {/* Decorative Punctuation & Typography Fragment Ticks */}
      <div 
        className="absolute top-12 left-1/3 text-[48px] font-serif text-[#080808]/20 select-none pointer-events-none"
        aria-hidden="true"
      >
        “
      </div>
      <div 
        className="absolute bottom-16 right-1/2 text-[32px] font-sans font-light text-[#080808]/30 select-none pointer-events-none"
        aria-hidden="true"
      >
        /
      </div>

    </div>
  );
};
