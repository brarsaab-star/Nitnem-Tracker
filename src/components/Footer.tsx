import React from 'react';
import { Settings } from 'lucide-react';
import { AppLogo } from './AppLogo';
import { StoreButtons } from './StoreButtons';
import { ModalType, StoreLinks, LegalTabType } from '../types';

interface FooterProps {
  links: StoreLinks;
  onOpenModal: (type: ModalType) => void;
  onOpenLegalPage: (tab: LegalTabType) => void;
  onConfigureStoreClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  links,
  onOpenModal,
  onOpenLegalPage,
  onConfigureStoreClick,
}) => {
  return (
    <footer className="bg-white border-t border-stone-200/80 text-stone-700 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-200/60">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <AppLogo size="md" />
            <p className="text-xs text-stone-600 max-w-sm leading-relaxed">
              Nitnem Tracker helps you build spiritual discipline by holding distracting apps behind your daily prayer commitments. Put Waheguru first every day.
            </p>
            <div className="text-xs text-[#D9771A] font-serif font-medium">
              ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ ॥ ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹਿ ॥
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-900">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <a href="#how-it-works" className="hover:text-stone-900 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-stone-900 transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#for-parents" className="hover:text-stone-900 transition-colors">
                  For Parents
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-stone-900 transition-colors">
                  Download Mobile App
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-900">
              Get the App & Legal
            </div>
            
            <StoreButtons
              links={links}
              onConfigureClick={onConfigureStoreClick}
              theme="dark"
            />

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs text-stone-600">
              <button
                onClick={() => onOpenLegalPage('privacy')}
                className="hover:text-stone-900 transition-colors cursor-pointer underline-offset-2 hover:underline"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                onClick={() => onOpenLegalPage('terms')}
                className="hover:text-stone-900 transition-colors cursor-pointer underline-offset-2 hover:underline"
              >
                Terms of Use
              </button>
              <span>·</span>
              <button
                onClick={() => onOpenLegalPage('parental')}
                className="hover:text-stone-900 transition-colors cursor-pointer underline-offset-2 hover:underline"
              >
                Child Safety
              </button>
              <span>·</span>
              <button
                onClick={() => onOpenModal('contact')}
                className="hover:text-stone-900 transition-colors cursor-pointer underline-offset-2 hover:underline"
              >
                Contact Us
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Config Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Nitnem Tracker. All rights reserved. Built with reverence for the Sangat.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onConfigureStoreClick}
              className="inline-flex items-center gap-1.5 text-stone-500 hover:text-stone-900 transition-colors text-xs cursor-pointer"
              title="Configure store links and uploaded logo path"
            >
              <Settings className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>Configure Links & Logo</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
