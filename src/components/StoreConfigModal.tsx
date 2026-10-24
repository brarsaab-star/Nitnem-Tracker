import React, { useState } from 'react';
import { X, Check, ExternalLink, Settings } from 'lucide-react';
import { StoreLinks } from '../types';

interface StoreConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  links: StoreLinks;
  onSave: (newLinks: StoreLinks) => void;
}

export const StoreConfigModal: React.FC<StoreConfigModalProps> = ({
  isOpen,
  onClose,
  links,
  onSave,
}) => {
  const [appleUrl, setAppleUrl] = useState(links.appleAppStore === '#' ? '' : links.appleAppStore);
  const [googleUrl, setGoogleUrl] = useState(links.googlePlayStore === '#' ? '' : links.googlePlayStore);
  const [logoUrl, setLogoUrl] = useState(() => localStorage.getItem('nitnem_custom_logo_url') || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      appleAppStore: appleUrl.trim() || '#',
      googlePlayStore: googleUrl.trim() || '#',
    });

    if (logoUrl.trim()) {
      localStorage.setItem('nitnem_custom_logo_url', logoUrl.trim());
    } else {
      localStorage.removeItem('nitnem_custom_logo_url');
    }

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
      window.location.reload();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-900 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="store-config-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Close settings"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-[#FFF7ED] text-[#F28C28] flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h3 id="store-config-title" className="text-xl font-bold font-display text-stone-900">
              Configure App Store Links
            </h3>
            <p className="text-xs text-stone-500">
              Provide your real store links and custom logo path as you prepare for launch.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
              Apple App Store URL
            </label>
            <input
              type="url"
              placeholder="https://apps.apple.com/app/nitnem-tracker/id..."
              value={appleUrl}
              onChange={(e) => setAppleUrl(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28C28] focus:bg-white text-stone-900"
            />
            <span className="text-[11px] text-stone-400 block mt-1">
              Leave empty if the iOS app review is still pending.
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
              Google Play Store URL
            </label>
            <input
              type="url"
              placeholder="https://play.google.com/store/apps/details?id=com.nitnemtracker.app"
              value={googleUrl}
              onChange={(e) => setGoogleUrl(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28C28] focus:bg-white text-stone-900"
            />
            <span className="text-[11px] text-stone-400 block mt-1">
              Leave empty if the Android release is still in closed testing.
            </span>
          </div>

          <div className="pt-2 border-t border-stone-100">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
              App Logo Image URL or Path
            </label>
            <input
              type="text"
              placeholder="/app-logo.png or https://.../logo.png"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28C28] focus:bg-white text-stone-900"
            />
            <span className="text-[11px] text-stone-400 block mt-1">
              Place your file at <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-700 font-mono">/app-logo.png</code> or paste any direct URL.
            </span>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-stone-600 hover:text-stone-900 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#F28C28] hover:bg-[#D9771A] rounded-xl transition-all shadow-xs cursor-pointer"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" /> Saved
                </>
              ) : (
                'Save Settings'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
