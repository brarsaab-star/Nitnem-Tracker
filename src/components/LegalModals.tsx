import React, { useState } from 'react';
import { X, Shield, FileText, Mail, CheckCircle, Smartphone, Loader2 } from 'lucide-react';
import { ModalType, StoreLinks, LegalTabType } from '../types';
import { StoreButtons } from './StoreButtons';

interface LegalModalsProps {
  activeModal: ModalType;
  onClose: () => void;
  links: StoreLinks;
  onOpenStoreConfig: () => void;
  onOpenFullLegalPage?: (tab: LegalTabType) => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  activeModal,
  onClose,
  links,
  onOpenStoreConfig,
  onOpenFullLegalPage,
}) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  if (!activeModal || activeModal === 'config-links') return null;

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@nitnemtracker.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          _subject: `New Nitnem Tracker Inquiry from ${contactName}`,
          message: contactMessage,
          _replyto: contactEmail,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setContactSubmitted(true);
        setContactName('');
        setContactEmail('');
        setContactMessage('');
      } else {
        throw new Error('Delivery API non-200');
      }
    } catch {
      // Direct mailto fallback in case network or ad-blocker blocks third-party endpoints
      const mailtoUrl = `mailto:info@nitnemtracker.com?subject=${encodeURIComponent(
        `Nitnem Tracker Inquiry: ${contactName}`
      )}&body=${encodeURIComponent(
        `Name: ${contactName}\nEmail: ${contactEmail}\n\nMessage:\n${contactMessage}`
      )}`;
      window.location.href = mailtoUrl;
      setContactSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 text-stone-900 relative max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Privacy Policy */}
        {activeModal === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-stone-100">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF7ED] text-[#F28C28] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-stone-900">
                  Privacy Policy
                </h3>
                <span className="text-xs text-stone-500">
                  Last updated: October 2026
                </span>
              </div>
            </div>

            <div className="text-xs text-stone-600 space-y-3 leading-relaxed">
              <p>
                <strong>1. Sanctity of Your Spiritual Practice:</strong> Nitnem Tracker was created with utmost respect for your spiritual journey. We believe your prayer habits and devotion to Waheguru are deeply personal.
              </p>
              <p>
                <strong>2. Local-First Data:</strong> Your Nitnem checklists, streak records, and routine schedules are stored securely on your local device. We do not sell or monetize personal devotion metrics.
              </p>
              <p>
                <strong>3. Screen Time & Accessibility Permissions:</strong> To provide app-blocking functionality, the app requests standard OS screen-time permissions (Apple Family Controls / Screen Time API, and Android Accessibility / Usage Stats). These permissions are strictly used to lock or unlock the distracting apps you choose, never to read your messages, browsing data, or keystrokes.
              </p>
              <p>
                <strong>4. Children's Privacy:</strong> Nitnem Tracker does not track children's identities, location, or private communications. Supervised modes are controlled locally via parental device settings.
              </p>
              <p>
                <strong>5. Questions & Data Requests:</strong> For any privacy concerns, reach out directly to info@nitnemtracker.com.
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-stone-100">
              {onOpenFullLegalPage && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenFullLegalPage('privacy');
                  }}
                  className="text-xs font-semibold text-[#D9771A] hover:underline cursor-pointer"
                >
                  View Full Official Policy (Store Version) →
                </button>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold text-white bg-stone-900 rounded-xl hover:bg-stone-800 transition-colors cursor-pointer ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Terms of Use */}
        {activeModal === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-stone-100">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF7ED] text-[#F28C28] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-stone-900">
                  Terms of Use
                </h3>
                <span className="text-xs text-stone-500">
                  Effective: October 2026
                </span>
              </div>
            </div>

            <div className="text-xs text-stone-600 space-y-3 leading-relaxed">
              <p>
                <strong>1. Intended Purpose:</strong> Nitnem Tracker is a personal habit and discipline companion designed to assist users in prioritizing their daily Nitnem prayers before smartphone distractions.
              </p>
              <p>
                <strong>2. Reverence for Gurbani:</strong> Users are encouraged to maintain cleanliness, head covering, and respect as per the Sikh Rehat Maryada when reciting Banis.
              </p>
              <p>
                <strong>3. Device Compatibility:</strong> App restriction features depend upon individual mobile operating systems, manufacturer power-saving profiles, and permissions granted by the user. While we strive for seamless enforcement, system updates may occasionally require re-enabling permissions.
              </p>
              <p>
                <strong>4. No Emergency Interference:</strong> Nitnem Tracker never restricts emergency calling, 911/112 services, or basic phone calls.
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-stone-100">
              {onOpenFullLegalPage && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenFullLegalPage('terms');
                  }}
                  className="text-xs font-semibold text-[#D9771A] hover:underline cursor-pointer"
                >
                  View Full Terms of Use (Store EULA) →
                </button>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold text-white bg-stone-900 rounded-xl hover:bg-stone-800 transition-colors cursor-pointer ml-auto"
              >
                Accept & Close
              </button>
            </div>
          </div>
        )}

        {/* Contact Us */}
        {activeModal === 'contact' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-stone-100">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF7ED] text-[#F28C28] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-stone-900">
                  Contact Us
                </h3>
                <span className="text-xs text-stone-500">
                  Have feedback, questions, or ideas for Nitnem Tracker?
                </span>
              </div>
            </div>

            {contactSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-[#F28C28] mx-auto stroke-[2]" />
                <h4 className="text-base font-bold text-stone-900">Fateh! Message Delivered</h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Your inquiry has been sent directly to <strong className="text-stone-800">info@nitnemtracker.com</strong>. We will review your message and reply to your email address promptly.
                </p>
                <div className="pt-3 flex justify-center gap-3">
                  <button
                    onClick={() => setContactSubmitted(false)}
                    className="px-4 py-2 text-xs font-medium text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <button
                    onClick={onClose}
                    className="px-5 py-2 text-xs font-semibold text-white bg-stone-900 rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Harpreet Singh"
                    className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28C28] text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28C28] text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Message or Suggestion
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Share any thoughts, requests, or questions regarding Nitnem Tracker..."
                    className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28C28] text-stone-900 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
                  <span className="text-[11px] text-stone-500">
                    Direct recipient: <a href="mailto:info@nitnemtracker.com" className="underline text-stone-800 font-medium">info@nitnemtracker.com</a>
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#F28C28] hover:bg-[#D9771A] disabled:opacity-60 rounded-xl transition-all cursor-pointer shadow-xs whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending to info@nitnemtracker.com...</span>
                      </>
                    ) : (
                      <span>Send to info@nitnemtracker.com</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
