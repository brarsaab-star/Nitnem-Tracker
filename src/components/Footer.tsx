import React from 'react';
import { Settings, Globe } from 'lucide-react';
import { AppLogo } from './AppLogo';
import { StoreButtons } from './StoreButtons';
import { ModalType, StoreLinks, LegalTabType } from '../types';
import { Translations, Language } from '../translations';

interface FooterProps {
  links: StoreLinks;
  onOpenModal: (type: ModalType) => void;
  onOpenLegalPage: (tab: LegalTabType) => void;
  onConfigureStoreClick: () => void;
  onOpenWaitlist?: (platform: 'ios' | 'android') => void;
  t: Translations;
  lang: Language;
  onToggleLanguage: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  links,
  onOpenModal,
  onOpenLegalPage,
  onConfigureStoreClick,
  onOpenWaitlist,
  t,
  lang,
  onToggleLanguage,
}) => {
  return (
    <footer className="bg-white border-t border-stone-200/80 text-stone-700 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-200/60">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <AppLogo size="md" lang={lang} />
            <p className="text-xs text-stone-600 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="text-xs text-[#D9771A] font-serif font-medium">
              {t.footer.fatehGreeting}
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-900">
              {t.footer.navHeading}
            </div>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <a href="#how-it-works" className="hover:text-stone-900 transition-colors">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-stone-900 transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#for-parents" className="hover:text-stone-900 transition-colors">
                  {t.nav.forParents}
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-stone-900 transition-colors">
                  {t.nav.download}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-900">
              {t.footer.legalHeading}
            </div>
            
            <StoreButtons
              links={links}
              onConfigureClick={onConfigureStoreClick}
              onOpenWaitlist={onOpenWaitlist}
              theme="dark"
            />

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs text-stone-600">
              <button
                onClick={() => onOpenLegalPage('privacy')}
                className="hover:text-stone-900 transition-colors cursor-pointer underline-offset-2 hover:underline"
              >
                {t.footer.privacyPolicy}
              </button>
              <span>·</span>
              <button
                onClick={() => onOpenLegalPage('terms')}
                className="hover:text-stone-900 transition-colors cursor-pointer underline-offset-2 hover:underline"
              >
                {t.footer.termsOfUse}
              </button>
              <span>·</span>
              <button
                onClick={() => onOpenLegalPage('parental')}
                className="hover:text-stone-900 transition-colors cursor-pointer underline-offset-2 hover:underline"
              >
                {t.footer.childSafety}
              </button>
              <span>·</span>
              <button
                onClick={() => onOpenModal('contact')}
                className="hover:text-stone-900 transition-colors cursor-pointer underline-offset-2 hover:underline"
              >
                {t.footer.contactUs}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Config & Language Switcher */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {t.footer.rightsReserved}
          </div>

          <div className="flex items-center gap-4">
            {/* Footer Language Toggle */}
            <button
              onClick={onToggleLanguage}
              className="inline-flex items-center gap-1.5 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>{lang === 'en' ? 'ਪੰਜਾਬੀ ਵਿੱਚ ਪੜ੍ਹੋ' : 'Read in English'}</span>
            </button>

            <span>·</span>

            <button
              onClick={onConfigureStoreClick}
              className="inline-flex items-center gap-1.5 text-stone-500 hover:text-stone-900 transition-colors text-xs cursor-pointer"
              title="Configure store links and uploaded logo path"
            >
              <Settings className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>{t.footer.configureLinks}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
