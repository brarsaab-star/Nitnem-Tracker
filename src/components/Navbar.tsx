import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { AppLogo } from './AppLogo';
import { LegalTabType } from '../types';
import { Language, Translations } from '../translations';

interface NavbarProps {
  onPutNitnemFirstClick: () => void;
  onOpenConfig?: () => void;
  onOpenLegalPage?: (tab: LegalTabType) => void;
  lang: Language;
  onToggleLanguage: () => void;
  t: Translations;
}

export const Navbar: React.FC<NavbarProps> = ({
  onPutNitnemFirstClick,
  onOpenConfig,
  onOpenLegalPage,
  lang,
  onToggleLanguage,
  t,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          
          {/* Zone 1: Brand Wordmark (1 line, single element) */}
          <a
            href="#"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
            aria-label="Nitnem Tracker Home"
          >
            <AppLogo size="md" lang={lang} />
          </a>

          {/* Zone 2: 4 clean single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a
              href="#how-it-works"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#features"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.features}
            </a>
            <a
              href="#for-parents"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.forParents}
            </a>
            <a
              href="#download"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.download}
            </a>
          </nav>

          {/* Zone 3: Actions - Language switcher & Primary action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher Button */}
            <button
              onClick={onToggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-50 border border-stone-200/90 rounded-xl transition-all cursor-pointer shadow-2xs select-none"
              title={lang === 'en' ? 'ਪੰਜਾਬੀ ਵਿੱਚ ਬਦਲੋ' : 'Switch to English'}
              aria-label={lang === 'en' ? 'Switch to Punjabi' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-[#F28C28]" />
              <span className="font-medium tracking-wide">
                {lang === 'en' ? 'ਪੰਜਾਬੀ' : 'English'}
              </span>
            </button>

            {/* Primary CTA */}
            <button
              onClick={onPutNitnemFirstClick}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-[#F28C28] hover:bg-[#D9771A] active:scale-[0.98] rounded-xl transition-all shadow-xs cursor-pointer whitespace-nowrap shrink-0"
            >
              {t.nav.putNitnemFirst}
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#FAF8F5] px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-stone-700 hover:bg-stone-100"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-stone-700 hover:bg-stone-100"
            >
              {t.nav.features}
            </a>
            <a
              href="#for-parents"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-stone-700 hover:bg-stone-100"
            >
              {t.nav.forParents}
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-stone-700 hover:bg-stone-100"
            >
              {t.nav.download}
            </a>
            {onOpenLegalPage && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLegalPage('privacy');
                }}
                className="text-left px-3 py-2.5 rounded-xl text-sm font-medium text-stone-700 hover:bg-stone-100 cursor-pointer"
              >
                {t.nav.privacyLegal}
              </button>
            )}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => {
                onToggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-stone-800 bg-white border border-stone-200 rounded-xl"
            >
              <Globe className="w-4 h-4 text-[#F28C28]" />
              <span>{lang === 'en' ? 'ਪੰਜਾਬੀ ਵਿੱਚ ਬਦਲੋ' : 'Switch to English'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPutNitnemFirstClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#F28C28] hover:bg-[#D9771A] rounded-xl shadow-xs"
            >
              {t.nav.putNitnemFirst}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
