import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { KeyFeatures } from './components/KeyFeatures';
import { ForParents } from './components/ForParents';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { LegalPage } from './components/LegalPage';
import { StoreConfigModal } from './components/StoreConfigModal';
import { ModalType, StoreLinks, LegalTabType, CurrentView } from './types';

const DEFAULT_STORE_LINKS: StoreLinks = {
  appleAppStore: '#',
  googlePlayStore: '#',
};

function detectInitialView(): { view: CurrentView; legalTab: LegalTabType } {
  if (typeof window === 'undefined') {
    return { view: 'home', legalTab: 'privacy' };
  }
  const hash = window.location.hash.toLowerCase();
  const path = window.location.pathname.toLowerCase();
  const search = window.location.search.toLowerCase();

  if (hash.includes('privacy') || path === '/privacy' || search.includes('privacy')) {
    return { view: 'legal', legalTab: 'privacy' };
  }
  if (hash.includes('terms') || path === '/terms' || search.includes('terms')) {
    return { view: 'legal', legalTab: 'terms' };
  }
  if (hash.includes('parental') || path === '/parental' || search.includes('parental') || hash.includes('child')) {
    return { view: 'legal', legalTab: 'parental' };
  }
  return { view: 'home', legalTab: 'privacy' };
}

export default function App() {
  const initialRouting = detectInitialView();
  const [currentView, setCurrentView] = useState<CurrentView>(initialRouting.view);
  const [legalTab, setLegalTab] = useState<LegalTabType>(initialRouting.legalTab);

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

  // Listen to browser back/forward and hash changes
  useEffect(() => {
    const handleRouteCheck = () => {
      const routing = detectInitialView();
      setCurrentView(routing.view);
      setLegalTab(routing.legalTab);
    };

    window.addEventListener('hashchange', handleRouteCheck);
    window.addEventListener('popstate', handleRouteCheck);
    return () => {
      window.removeEventListener('hashchange', handleRouteCheck);
      window.removeEventListener('popstate', handleRouteCheck);
    };
  }, []);

  const handleSaveStoreLinks = (newLinks: StoreLinks) => {
    setStoreLinks(newLinks);
    localStorage.setItem('nitnem_store_links', JSON.stringify(newLinks));
  };

  const scrollToDownload = () => {
    if (currentView === 'legal') {
      setCurrentView('home');
      window.history.pushState(null, '', '#download');
      setTimeout(() => {
        const el = document.getElementById('download');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById('download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLegalPage = (tab: LegalTabType) => {
    setLegalTab(tab);
    setCurrentView('legal');
    window.history.pushState(null, '', `#/${tab}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    document.title = 'Nitnem Tracker — Block Distractions. Put Waheguru First.';
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dedicated Full Legal Page view (for direct URL linking on App Store & Google Play Console)
  if (currentView === 'legal') {
    return (
      <LegalPage
        initialTab={legalTab}
        onBackToHome={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-[#F28C28] selection:text-white flex flex-col font-sans antialiased">
      {/* Navbar with 3-Zone contract */}
      <Navbar
        onPutNitnemFirstClick={scrollToDownload}
        onOpenConfig={() => setIsConfigOpen(true)}
        onOpenLegalPage={handleOpenLegalPage}
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
        onOpenLegalPage={handleOpenLegalPage}
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
        onOpenFullLegalPage={handleOpenLegalPage}
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
