interface NavigationProps {
  onOpenAbout: () => void;
  onOpenInfo: () => void;
}

export const Navigation = ({ onOpenAbout, onOpenInfo }: NavigationProps) => {
  return (
    <header className="w-full flex items-center justify-between z-30 select-none">
      {/* Studio Name Pill (Left) */}
      <div 
        tabIndex={0}
        aria-label="Swastik Patel Creative Studio Home"
        className="inline-flex items-center justify-center h-[42px] px-[19px] rounded-full border border-[#080808] text-[21px] font-normal tracking-[-0.02em] text-[#080808] bg-white transition-all duration-200 hover:bg-[#080808] hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080808] focus-visible:ring-offset-2"
      >
        <span>Swastik Patel</span>
      </div>

      {/* Right Controls (About pill + Red Info circle) */}
      <nav aria-label="Studio navigation" className="flex items-center gap-[12px]">
        {/* About Pill Button */}
        <button
          type="button"
          onClick={onOpenAbout}
          aria-label="About Swastik Patel Studio"
          className="inline-flex items-center justify-center h-[42px] px-[19px] rounded-full border border-[#080808] text-[16px] sm:text-[17px] font-normal tracking-[-0.01em] text-[#080808] bg-white transition-all duration-200 hover:bg-[#080808] hover:text-white active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080808] focus-visible:ring-offset-2"
        >
          About
        </button>

        {/* Circular Red Information Button */}
        <button
          type="button"
          onClick={onOpenInfo}
          aria-label="Open links: cv, linkedin, mail"
          title="cv, linkedin, mail"
          className="w-[31px] h-[31px] rounded-full bg-[#F00000] text-white flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F00000] focus-visible:ring-offset-2 shadow-xs"
        >
          <span className="font-serif italic font-bold text-[16px] leading-none select-none -translate-y-[0.5px]">
            i
          </span>
        </button>
      </nav>
    </header>
  );
};
