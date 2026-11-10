import type { ReactNode } from "react";
import { DottedGrid } from "./dotted-grid";

interface SteppedFrameProps {
  children: ReactNode;
  variant?: "hero" | "project1" | "project2" | "contact";
  className?: string;
}

export function SteppedFrame({
  children,
  variant = "hero",
  className = "",
}: SteppedFrameProps) {
  if (variant === "hero") {
    return (
      <div className={`relative ${className}`}>
        {/* Top-right dotted grid matrix */}
        <div className="absolute -top-3 right-0 z-10 hidden sm:block">
          <DottedGrid rows={6} cols={9} gap={10} dotColor="#443D36" />
        </div>

        {/* Stepped black architectural cutout */}
        <div className="relative overflow-hidden bg-[#1E1A17] stepped-hero-shape aspect-[4/3] sm:aspect-[16/11] w-full border border-[#38322B]">
          {children}

          {/* Stepped overlay cutouts matching inverted background */}
          {/* Top-left stepped cutout */}
          <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 bg-[#151311]" />
          <div className="absolute top-0 left-8 sm:left-12 w-6 h-6 sm:w-8 sm:h-8 bg-[#1E1A17]" />
          <div className="absolute top-8 sm:top-12 left-0 w-6 h-6 sm:w-8 sm:h-8 bg-[#1E1A17]" />

          {/* Bottom-right stepped cutout */}
          <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-16 sm:h-16 bg-[#151311]" />
          <div className="absolute bottom-10 sm:bottom-16 right-0 w-6 h-6 sm:w-10 sm:h-10 bg-[#151311]" />
          <div className="absolute bottom-0 right-10 sm:right-16 w-8 h-6 sm:w-12 sm:h-10 bg-[#151311]" />

          {/* Bottom-right interior subtle dot grid */}
          <div className="absolute bottom-12 right-14 sm:bottom-20 sm:right-24 z-10 opacity-30 pointer-events-none">
            <DottedGrid rows={4} cols={6} gap={8} dotColor="#A59E96" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "project1") {
    return (
      <div className={`relative ${className}`}>
        {/* Top-left subtle dotted grid */}
        <div className="absolute -top-3 -left-2 z-10 hidden sm:block">
          <DottedGrid rows={5} cols={7} gap={10} dotColor="#443D36" />
        </div>

        {/* Dark container with stepped bottom-right notch */}
        <div className="relative overflow-hidden bg-[#1E1A17] aspect-[16/11] w-full border border-[#38322B]">
          {children}
          {/* Bottom-right stepped cutout */}
          <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 bg-[#151311]" />
          <div className="absolute bottom-0 right-8 sm:right-12 w-6 h-4 sm:w-8 sm:h-6 bg-[#151311]" />
        </div>
      </div>
    );
  }

  if (variant === "project2") {
    return (
      <div className={`relative ${className}`}>
        {/* Bottom-left subtle dotted grid */}
        <div className="absolute -bottom-3 left-4 z-10 hidden sm:block">
          <DottedGrid rows={5} cols={8} gap={10} dotColor="#443D36" />
        </div>

        {/* Dark container with stepped side ears */}
        <div className="relative overflow-hidden bg-[#1E1A17] aspect-[16/11] w-full border border-[#38322B]">
          {children}
          {/* Top-left stepped cutout */}
          <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#151311]" />
          {/* Bottom-right stepped cutout */}
          <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#151311]" />
        </div>
      </div>
    );
  }

  // contact variant
  return (
    <div className={`relative ${className}`}>
      {/* Left dotted grid matrix */}
      <div className="absolute bottom-6 -left-12 z-10 hidden sm:block">
        <DottedGrid rows={6} cols={6} gap={10} dotColor="#443D36" />
      </div>

      {/* Dark container with stepped staircase top-left profile */}
      <div className="relative overflow-hidden bg-[#1E1A17] aspect-[16/11] w-full border border-[#38322B]">
        {children}
        {/* Stepped staircase cutouts in top-left */}
        <div className="absolute top-0 left-0 w-10 h-10 sm:w-14 sm:h-14 bg-[#151311]" />
        <div className="absolute top-0 left-10 sm:left-14 w-8 h-6 sm:w-12 sm:h-8 bg-[#151311]" />
        <div className="absolute top-10 sm:top-14 left-0 w-6 h-8 sm:w-8 sm:h-12 bg-[#151311]" />
      </div>
    </div>
  );
}
