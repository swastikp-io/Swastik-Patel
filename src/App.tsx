import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroHeadline } from './components/HeroHeadline';
import { HeroCTA } from './components/HeroCTA';
import { AboutPage } from './components/AboutPage';
import { InfoModal } from './components/InfoModal';

export default function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="relative min-h-screen lg:h-screen lg:max-h-screen bg-white text-[#080808] flex flex-col justify-between overflow-x-hidden selection:bg-[#080808] selection:text-white">
      
      {/* Editorial Viewport Margins (Approx 20px - 32px padding) */}
      <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 xl:p-10 max-w-[1720px] mx-auto flex-1">
        
        {/* Top Navigation */}
        <Navigation
          onOpenAbout={() => setIsAboutOpen(true)}
          onOpenInfo={() => setIsInfoOpen(true)}
        />

        {/* Main Hero Section: Centered headline with generous editorial negative space */}
        <main 
          role="main" 
          aria-label="Swastik Patel Creative Studio Hero"
          className="relative flex-1 flex flex-col justify-center items-center my-auto py-8 sm:py-12 lg:py-16 z-10 w-full"
        >
          <HeroHeadline />
        </main>

        {/* Bottom Area: Large Outlined Pill CTA aligned to bottom-left */}
        <footer className="w-full flex items-end justify-start pt-2 pb-1 z-20">
          <div className="w-full sm:w-auto">
            <HeroCTA onClick={() => setIsAboutOpen(true)} />
          </div>
        </footer>
      </div>

      {/* Accessible Overlays / Pages */}
      <AboutPage
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <InfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
    </div>
  );
}
