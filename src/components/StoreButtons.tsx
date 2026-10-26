import React from 'react';
import { StoreLinks } from '../types';

export type StoreTheme = 'dark' | 'light' | 'outline' | 'outline-dark' | 'outline-light';

interface StoreButtonsProps {
  links: StoreLinks;
  onConfigureClick?: () => void;
  onOpenWaitlist?: (platform: 'ios' | 'android') => void;
  className?: string;
  theme?: StoreTheme;
}

export const StoreButtons: React.FC<StoreButtonsProps> = ({
  links,
  onConfigureClick,
  onOpenWaitlist,
  className = '',
  theme = 'dark',
}) => {
  const handleStoreClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string, platformKey: 'ios' | 'android') => {
    // Top-tier pre-launch waitlist experience: intercept store click to show launch waitlist
    if (onOpenWaitlist) {
      e.preventDefault();
      onOpenWaitlist(platformKey);
      return;
    }

    if (!url || url === '#' || url === '') {
      e.preventDefault();
      if (onConfigureClick) {
        onConfigureClick();
      }
    }
  };

  const isConfigured = (url: string) => url && url !== '#' && url !== '';

  const isLight = theme === 'light' || theme === 'outline-light';

  const getContainerStyles = () => {
    switch (theme) {
      case 'light':
        return 'bg-white hover:bg-stone-50 text-stone-900 border border-stone-200 shadow-xs';
      case 'outline-light':
        return 'bg-transparent hover:bg-stone-100 text-stone-900 border border-stone-300';
      case 'outline-dark':
      case 'outline':
        // High-contrast dark badge designed specifically for dark backgrounds
        return 'bg-stone-900/90 hover:bg-stone-800 text-white border border-stone-600 hover:border-[#F28C28] shadow-md ring-1 ring-white/10';
      case 'dark':
      default:
        // Dark badge designed for light backgrounds
        return 'bg-stone-900 hover:bg-stone-800 text-white border border-stone-800 shadow-xs';
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {/* Apple App Store Button */}
      <a
        href={links.appleAppStore || '#'}
        target={isConfigured(links.appleAppStore) ? '_blank' : '_self'}
        rel="noopener noreferrer"
        onClick={(e) => handleStoreClick(e, links.appleAppStore, 'ios')}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-200 ${getContainerStyles()} group cursor-pointer`}
        title="Download on Apple App Store (Launching Soon)"
      >
        <svg
          viewBox="0 0 24 24"
          className={`w-5 h-5 shrink-0 ${isLight ? 'fill-stone-900 text-stone-900' : 'fill-white text-white'}`}
          aria-hidden="true"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.09 1.74-.96 2.77 1 .08 2.05-.52 2.68-1.27z" />
        </svg>
        <div className="flex flex-col text-left">
          <span className={`text-[10px] uppercase tracking-wider leading-none ${isLight ? 'text-stone-500' : 'text-stone-300'}`}>
            Download on the
          </span>
          <span className={`text-xs font-semibold leading-tight font-display tracking-wide mt-0.5 ${isLight ? 'text-stone-900' : 'text-white'}`}>
            App Store
          </span>
        </div>
      </a>

      {/* Google Play Store Button */}
      <a
        href={links.googlePlayStore || '#'}
        target={isConfigured(links.googlePlayStore) && !onOpenWaitlist ? '_blank' : '_self'}
        rel="noopener noreferrer"
        onClick={(e) => handleStoreClick(e, links.googlePlayStore, 'android')}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-200 ${getContainerStyles()} group cursor-pointer`}
        title="Get it on Google Play (Launching Soon)"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 shrink-0"
          aria-hidden="true"
        >
          <path
            d="M3.609 1.814L13.792 12 3.61 22.186c-.378-.344-.61-.83-.61-1.378V3.192c0-.548.232-1.034.61-1.378z"
            fill="#00E676"
          />
          <path
            d="M17.15 8.642L4.698 1.45c-.347-.2-.746-.264-1.089-.136l10.183 10.183 3.358-2.855z"
            fill="#FFD600"
          />
          <path
            d="M3.609 22.686c.343.128.742.064 1.089-.136l12.453-7.192-3.359-2.855-10.183 10.183z"
            fill="#FF3D00"
          />
          <path
            d="M20.697 10.686l-3.547-2.044-3.358 2.855 3.358 2.855 3.547-2.044c.671-.387.671-1.235 0-1.622z"
            fill="#00B0FF"
          />
        </svg>
        <div className="flex flex-col text-left">
          <span className={`text-[10px] uppercase tracking-wider leading-none ${isLight ? 'text-stone-500' : 'text-stone-300'}`}>
            GET IT ON
          </span>
          <span className={`text-xs font-semibold leading-tight font-display tracking-wide mt-0.5 ${isLight ? 'text-stone-900' : 'text-white'}`}>
            Google Play
          </span>
        </div>
      </a>
    </div>
  );
};
