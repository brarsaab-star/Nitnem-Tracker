import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { KeyFeatures } from './components/KeyFeatures';
import { ForParents } from './components/ForParents';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { StoreConfigModal } from './components/StoreConfigModal';
import { ModalType, StoreLinks } from './types';

const DEFAULT_STORE_LINKS: StoreLinks = {
  appleAppStore: '#',
  googlePlayStore: '#',
};

export default function App() {
  const [storeLinks, setStoreLinks] = useState<StoreLinks>(() => {
    try {
      const saved = localStorage.getItem('nitnem_store_links');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return DEFAULT_STORE_LINKS;
  });

  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const handleSaveStoreLinks = (newLinks: StoreLinks) => {
    setStoreLinks(newLinks);
    localStorage.setItem('nitnem_store_links', JSON.stringify(newLinks));
  };

  const scrollToDownload = () => {
    const el = document.getElementById('download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-[#F28C28] selection:text-white flex flex-col font-sans antialiased">
      {/* Navbar with 3-Zone contract */}
      <Navbar
        onPutNitnemFirstClick={scrollToDownload}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section: Start With the Problem */}
        <HeroSection
          links={storeLinks}
          onPutNitnemFirstClick={scrollToDownload}
          onConfigureStoreClick={() => setIsConfigOpen(true)}
        />

        {/* 2. How It Works: 3 simple steps */}
        <HowItWorks />

        {/* 3. Key Features: 4 clean cards */}
        <KeyFeatures />

        {/* 4. For Parents: Respectful family photo & routine guidance */}
        <ForParents />

        {/* 5. Final Call to Action */}
        <FinalCTA
          links={storeLinks}
          onPutNitnemFirstClick={scrollToDownload}
          onConfigureStoreClick={() => setIsConfigOpen(true)}
        />
      </main>

      {/* 6. Footer: App logo, legal, contact, and store links */}
      <Footer
        links={storeLinks}
        onOpenModal={(type) => setActiveModal(type)}
        onConfigureStoreClick={() => setIsConfigOpen(true)}
      />

      {/* Interactive Modals: Privacy Policy, Terms of Use, Contact Us */}
      <LegalModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        links={storeLinks}
        onOpenStoreConfig={() => {
          setActiveModal(null);
          setIsConfigOpen(true);
        }}
      />

      {/* Store Link & Logo Configuration Modal */}
      <StoreConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        links={storeLinks}
        onSave={handleSaveStoreLinks}
      />
    </div>
  );
}
