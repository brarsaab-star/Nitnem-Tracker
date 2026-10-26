import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Loader2, 
  ShieldCheck, 
  Smartphone, 
  Mail, 
  ArrowRight,
  BellRing
} from 'lucide-react';
import { Language, Translations, translations } from '../translations';
import { WaitlistPlatform } from '../types';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlatform?: WaitlistPlatform;
  lang?: Language;
  t?: Translations;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  initialPlatform = 'ios',
  lang = 'en',
  t,
}) => {
  const currentT = t || translations[lang];
  const isPa = lang === 'pa';

  const [platform, setPlatform] = useState<WaitlistPlatform>(initialPlatform);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  // Keep platform in sync when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setPlatform(initialPlatform || 'ios');
      setIsSubmitted(false);
    }
  }, [isOpen, initialPlatform]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    const platformLabel = platform === 'ios' ? 'Apple App Store (iOS)' : platform === 'android' ? 'Google Play (Android)' : 'All Devices';

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@nitnemtracker.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim() || 'Nitnem Seeker',
          email: email.trim(),
          device_platform: platformLabel,
          preferred_language: lang === 'pa' ? 'Punjabi' : 'English',
          _subject: `🚀 New Launch Waitlist Signup: [${platformLabel}] - ${email.trim()}`,
          _replyto: email.trim(),
          _template: 'table',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmittedEmail(email.trim());
        setIsSubmitted(true);
        setEmail('');
        setName('');
      } else {
        throw new Error('API non-200');
      }
    } catch {
      // Direct mailto fallback in case network blocks third-party endpoints
      const mailtoUrl = `mailto:info@nitnemtracker.com?subject=${encodeURIComponent(
        `Waitlist Early Access: ${email.trim()} (${platformLabel})`
      )}&body=${encodeURIComponent(
        `Name: ${name.trim() || 'Not provided'}\nEmail: ${email.trim()}\nPlatform: ${platformLabel}\nLanguage: ${lang}\n\nPlease notify me the moment Nitnem Tracker is available on the store.`
      )}`;
      window.location.href = mailtoUrl;
      setSubmittedEmail(email.trim());
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-900 relative max-h-[92vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Confirmation State */
          <div className="py-6 sm:py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#D9771A] uppercase tracking-wider block">
                {currentT.waitlist.badgeLaunchingSoon}
              </span>
              <h3 className="text-2xl font-extrabold text-stone-900 font-display">
                {currentT.waitlist.successTitle}
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                {currentT.waitlist.successMessage(submittedEmail)}
              </p>
              <p className="text-xs text-stone-500 pt-1">
                {currentT.waitlist.successSub}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3 text-sm font-bold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-all cursor-pointer shadow-md"
              >
                {currentT.waitlist.closeButton}
              </button>
            </div>

            <p className="text-[11px] text-stone-400 pt-2">
              Registration received at <span className="font-semibold text-stone-600">info@nitnemtracker.com</span>
            </p>
          </div>
        ) : (
          /* Interactive Form State */
          <div className="space-y-5">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] text-[#D9771A] text-xs font-bold border border-[#F28C28]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>{currentT.waitlist.badgeLaunchingSoon}</span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display tracking-tight leading-tight">
                {currentT.waitlist.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentT.waitlist.description}
              </p>
            </div>

            {/* Platform Selection Chips */}
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-2">
                {currentT.waitlist.platformLabel}
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {/* Apple iOS Chip */}
                <button
                  type="button"
                  onClick={() => setPlatform('ios')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    platform === 'ios'
                      ? 'bg-[#FFF7ED] border-[#F28C28] text-stone-900 shadow-xs ring-1 ring-[#F28C28]'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.09 1.74-.96 2.77 1 .08 2.05-.52 2.68-1.27z" />
                  </svg>
                  <span>{currentT.waitlist.iosBadge}</span>
                </button>

                {/* Google Play Android Chip */}
                <button
                  type="button"
                  onClick={() => setPlatform('android')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    platform === 'android'
                      ? 'bg-[#FFF7ED] border-[#F28C28] text-stone-900 shadow-xs ring-1 ring-[#F28C28]'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.378-.344-.61-.83-.61-1.378V3.192c0-.548.232-1.034.61-1.378z" fill="#00E676" />
                    <path d="M17.15 8.642L4.698 1.45c-.347-.2-.746-.264-1.089-.136l10.183 10.183 3.358-2.855z" fill="#FFD600" />
                    <path d="M3.609 22.686c.343.128.742.064 1.089-.136l12.453-7.192-3.359-2.855-10.183 10.183z" fill="#FF3D00" />
                    <path d="M20.697 10.686l-3.547-2.044-3.358 2.855 3.358 2.855 3.547-2.044c.671-.387.671-1.235 0-1.622z" fill="#00B0FF" />
                  </svg>
                  <span>{currentT.waitlist.androidBadge}</span>
                </button>
              </div>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {currentT.waitlist.emailLabel} <span className="text-[#F28C28]">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={currentT.waitlist.emailPlaceholder}
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28C28] text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {currentT.waitlist.nameLabel}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={currentT.waitlist.namePlaceholder}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28C28] text-stone-900"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#F28C28] hover:bg-[#D9771A] disabled:opacity-60 rounded-xl transition-all shadow-md shadow-[#F28C28]/25 cursor-pointer active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{currentT.waitlist.submittingButton}</span>
                  </>
                ) : (
                  <>
                    <BellRing className="w-4 h-4" />
                    <span>{currentT.waitlist.submitButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Privacy Reassurance Note */}
              <div className="pt-2 flex items-start gap-2 text-[11px] text-stone-500 leading-relaxed border-t border-stone-100">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{currentT.waitlist.noSpamNotice}</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
