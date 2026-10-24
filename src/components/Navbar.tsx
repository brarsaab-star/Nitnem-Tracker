import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AppLogo } from './AppLogo';

interface NavbarProps {
  onPutNitnemFirstClick: () => void;
  onOpenConfig?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onPutNitnemFirstClick,
  onOpenConfig,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (1 line, single element) */}
          <a
            href="#"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
            aria-label="Nitnem Tracker Home"
          >
            <AppLogo size="md" />
          </a>

          {/* Zone 2: 4 clean single-line navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a
              href="#how-it-works"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              Key Features
            </a>
            <a
              href="#for-parents"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              For Parents
            </a>
            <a
              href="#download"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              Download
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onPutNitnemFirstClick}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-[#F28C28] hover:bg-[#D9771A] active:scale-[0.98] rounded-xl transition-all shadow-xs cursor-pointer whitespace-nowrap shrink-0"
            >
              Put Nitnem First
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
              How It Works
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-stone-700 hover:bg-stone-100"
            >
              Key Features
            </a>
            <a
              href="#for-parents"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-stone-700 hover:bg-stone-100"
            >
              For Parents
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-stone-700 hover:bg-stone-100"
            >
              Download
            </a>
          </nav>
          
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPutNitnemFirstClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#F28C28] hover:bg-[#D9771A] rounded-xl shadow-xs"
            >
              Put Nitnem First
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
