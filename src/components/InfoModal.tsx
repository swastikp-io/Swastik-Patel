import { useEffect } from 'react';
import type { Variants } from 'framer-motion';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfoModal = ({ isOpen, onClose }: InfoModalProps) => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const links = [
    {
      label: 'cv',
      href: 'https://drive.google.com/file/d/1QqpcvjstFPm79bUq8IgaFUcWkIg71rRj/view?usp=sharing',
      ariaLabel: 'Download or view Curriculum Vitae',
      isExternal: true,
    },
    {
      label: 'linkedin',
      href: 'https://www.linkedin.com/in/swastik-patel-515b6138b/',
      ariaLabel: 'Visit LinkedIn Profile',
      isExternal: true,
    },
    {
      label: 'mail',
      href: 'mailto:dev.swastikpatel0305@gmail.com',
      ariaLabel: 'Send email to dev.swastikpatel0305@gmail.com',
      isExternal: false,
    },
  ];

  const linkVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        delay: shouldReduceMotion ? 0 : 0.08 + custom * 0.07,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Direct links: cv, linkedin, mail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-white text-[#080808] flex flex-col justify-between p-4 sm:p-6 lg:p-8 xl:p-10 select-none overflow-hidden"
        >
          {/* Top Bar matching site header */}
          <header className="w-full flex items-center justify-between z-10 max-w-[1720px] mx-auto">
            {/* Studio Name Pill */}
            <div
              tabIndex={0}
              aria-label="Swastik Patel Home"
              className="inline-flex items-center justify-center h-[42px] px-[19px] rounded-full border border-[#080808] text-[21px] font-normal tracking-[-0.02em] text-[#080808] bg-white"
            >
              <span>Swastik Patel</span>
            </div>

            {/* Close Button Pill */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close links page"
              className="inline-flex items-center justify-center h-[42px] px-[22px] rounded-full border border-[#080808] text-[16px] sm:text-[17px] font-normal tracking-[-0.01em] text-[#080808] bg-white transition-all duration-200 hover:bg-[#080808] hover:text-white active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080808] focus-visible:ring-offset-2"
            >
              Close
            </button>
          </header>

          {/* Center Giant Bold Lowercase Links (Matching screenshot aesthetic) */}
          <main className="flex-1 flex flex-col items-center justify-center my-auto py-6">
            <nav
              aria-label="Direct links"
              className="flex flex-col items-center justify-center group/links space-y-1 sm:space-y-2 md:space-y-0"
            >
              {links.map((link, index) => (
                <motion.div
                  key={link.label}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={link.href}
                    {...(link.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={link.ariaLabel}
                    className="block font-bold lowercase text-center text-[#080808] text-[68px] sm:text-[96px] md:text-[124px] lg:text-[144px] leading-[0.94] tracking-[-0.035em] transition-all duration-200 group-hover/links:opacity-30 hover:opacity-100! hover:scale-[1.02] cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#080808] rounded-2xl"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </nav>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
