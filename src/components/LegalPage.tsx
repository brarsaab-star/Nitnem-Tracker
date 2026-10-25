import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, FileText, Lock, Users, Mail, Printer, Check, ChevronRight } from 'lucide-react';
import { AppLogo } from './AppLogo';

export type LegalTab = 'privacy' | 'terms' | 'parental';

interface LegalPageProps {
  initialTab?: LegalTab;
  onBackToHome: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  initialTab = 'privacy',
  onBackToHome,
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update document title for App Store and Play Store review bot checks
    if (activeTab === 'privacy') {
      document.title = 'Privacy Policy — Nitnem Tracker';
    } else if (activeTab === 'terms') {
      document.title = 'Terms of Use — Nitnem Tracker';
    } else {
      document.title = 'Parental Guidance & Child Safety — Nitnem Tracker';
    }
  }, [activeTab]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/#/${activeTab}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col antialiased selection:bg-[#F28C28] selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
              title="Return to Nitnem Tracker Home"
            >
              <ArrowLeft className="w-4 h-4 text-[#F28C28]" />
              <span>Back to Home</span>
            </button>
            <div className="h-4 w-px bg-stone-200 hidden sm:block" />
            <div className="hidden sm:block">
              <AppLogo size="sm" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-xl transition-all cursor-pointer"
              title="Copy shareable link for App Store / Play Store listing"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <ChevronRight className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Copy Direct URL'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
              title="Print document"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Document Header & Tab Selector */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-[#D9771A] font-bold mb-1">
            Official Legal Documentation
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Nitnem Tracker Legal & Compliance
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            Compliant with Apple App Store Review Guidelines (5.1.1 Data Collection & Storage) and Google Play Developer Program Policies (User Data & Prominent Disclosure).
          </p>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 mt-6 p-1 bg-stone-200/60 rounded-2xl w-fit">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === 'privacy'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Shield className="w-4 h-4 text-[#F28C28]" />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === 'terms'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <FileText className="w-4 h-4 text-[#F28C28]" />
              <span>Terms of Use (EULA)</span>
            </button>
            <button
              onClick={() => setActiveTab('parental')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === 'parental'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Users className="w-4 h-4 text-[#F28C28]" />
              <span>Child Safety & Family Mode</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Comprehensive Privacy Policy */}
        {activeTab === 'privacy' && (
          <article className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xs text-stone-800 space-y-8 leading-relaxed">
            <div className="border-b border-stone-100 pb-6">
              <span className="text-xs font-mono text-stone-400 block mb-1">
                Effective Date: October 24, 2026 · Version 1.0.0
              </span>
              <h2 className="text-2xl font-bold font-display text-stone-900">
                Privacy Policy for Nitnem Tracker
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                This Privacy Policy explains how <strong>Nitnem Tracker</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles your data when you use our mobile application across iOS and Android platforms.
              </p>
            </div>

            {/* Quick Summary Card */}
            <div className="bg-[#FFF7ED] border border-[#F28C28]/20 rounded-2xl p-5 text-xs text-stone-800 space-y-2">
              <h3 className="font-bold text-sm text-[#D9771A] flex items-center gap-1.5">
                <Lock className="w-4 h-4" /> Summary of Core Commitments
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-stone-700">
                <li><strong>Zero Telemetry on Prayer Recitation:</strong> We do not track, log, or transmit what prayers you recite, your spiritual frequency, or your personal spiritual reflections.</li>
                <li><strong>Local-First Storage:</strong> All routine schedules, Bani checklists, and streak counters are stored locally on your physical device.</li>
                <li><strong>No Sale of Personal Data:</strong> We never sell, rent, monetize, or broker your personal information.</li>
                <li><strong>No Advertising Trackers:</strong> The app contains no third-party behavioral advertising SDKs or tracking pixels.</li>
                <li><strong>Prominent On-Device OS Permissions:</strong> Screen Time API (iOS) and Accessibility/Usage Access (Android) are utilized strictly on-device to enforce user-configured app restrictions. They never monitor private messages, screen content, or web history.</li>
              </ul>
            </div>

            {/* Section 1 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold font-display text-stone-900">
                1. Data Controller & Developer Information
              </h3>
              <p className="text-sm text-stone-700">
                Nitnem Tracker is developed and operated as a spiritual discipline and digital wellbeing application for the global Sikh Sangat.
              </p>
              <div className="text-xs bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-700 font-mono">
                App Name: Nitnem Tracker<br />
                Support & Privacy Inquiries: info@nitnemtracker.com<br />
                Data Protection Officer / Developer Email: info@nitnemtracker.com
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold font-display text-stone-900">
                2. Information We Collect and Process
              </h3>
              <p className="text-sm text-stone-700">
                We believe in strict data minimization. The app only processes the minimum data necessary to operate its prayer routine tracking and app restriction features:
              </p>
              <ul className="list-disc pl-5 text-xs space-y-2 text-stone-700">
                <li>
                  <strong>Routine & Habit Preferences (Local):</strong> Morning, Evening, and Night prayer windows, selected Banis (e.g. Japji Sahib, Jaap Sahib, Rehras Sahib, Kirtan Sohila), completion timestamps, and consecutive streak counts. This data remains on your device in secure local storage.
                </li>
                <li>
                  <strong>User-Selected Restricted App List (Local):</strong> The list of apps you select for restriction (e.g., social media or entertainment apps). This list is stored in local preferences and never transmitted to our servers.
                </li>
                <li>
                  <strong>Subscription & Purchase Data (Store-Managed):</strong> If you purchase a premium subscription, payment transactions are processed entirely through the Apple App Store (Apple In-App Purchases) or Google Play Store (Google Play Billing). We receive only anonymized receipt tokens to confirm entitlement status. We never see or store your credit card or financial details.
                </li>
              </ul>
            </section>

            {/* Section 3: Critical App Store & Play Store Permission Disclosures */}
            <section className="space-y-4 pt-2 border-t border-stone-100">
              <h3 className="text-lg font-bold font-display text-stone-900">
                3. Device Permissions & Prominent Disclosures (Apple & Google Compliance)
              </h3>
              <p className="text-sm text-stone-700">
                To restrict selected distracting apps until your prayers are completed, Nitnem Tracker requests specific operating system permissions. These permissions are used strictly in compliance with Apple and Google platform policies:
              </p>

              {/* Apple Screen Time API */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 space-y-2">
                <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-stone-900" />
                  Apple iOS Screen Time & FamilyControls Framework
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  On iOS devices, Nitnem Tracker requests permission to use Apple&apos;s <code>FamilyControls</code>, <code>ManagedSettings</code>, and <code>DeviceActivity</code> frameworks.
                </p>
                <ul className="list-disc pl-4 text-xs text-stone-600 space-y-1">
                  <li><strong>Purpose:</strong> Used exclusively to apply shield restrictions to user-selected application tokens until required Nitnem Banis are marked complete.</li>
                  <li><strong>Data Isolation:</strong> Apple&apos;s Screen Time API utilizes cryptographically opaque tokens. Nitnem Tracker cannot read your browsing history, photos, keystrokes, or screen contents. All restriction decisions execute in Apple&apos;s sandboxed OS daemon.</li>
                  <li><strong>Revocation:</strong> You can revoke this permission anytime via iOS Settings &gt; Screen Time &gt; Nitnem Tracker.</li>
                </ul>
              </div>

              {/* Android Accessibility & Usage Access */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 space-y-2">
                <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F28C28]" />
                  Android Accessibility Service & Usage Access Prominent Disclosure
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  On Android devices, Nitnem Tracker may request permission to use <strong>Usage Stats (PACKAGE_USAGE_STATS)</strong> and/or the <strong>Accessibility Services API (BIND_ACCESSIBILITY_SERVICE)</strong>:
                </p>
                <ul className="list-disc pl-4 text-xs text-stone-600 space-y-1">
                  <li><strong>Prominent Disclosure:</strong> The Accessibility Service is used solely to detect the package name of the active foreground app in real time, to determine if it is in your selected restricted apps list during an uncompleted Nitnem prayer window.</li>
                  <li><strong>Strict Prohibitions:</strong> Nitnem Tracker does <em>NOT</em> use Accessibility Services to:
                    <ul className="list-circle pl-4 mt-1 space-y-0.5">
                      <li>Capture, record, or transmit audio or microphone inputs.</li>
                      <li>Record screen contents, photos, or video.</li>
                      <li>Monitor or log keystrokes, passwords, or personal chat messages.</li>
                      <li>Change user settings without permission or prevent users from uninstalling the app.</li>
                    </ul>
                  </li>
                  <li><strong>Immediate Deactivation:</strong> As soon as required prayer commitments are marked complete, app restrictions cease immediately. Emergency services and basic phone functions are never restricted.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-2 border-t border-stone-100">
              <h3 className="text-lg font-bold font-display text-stone-900">
                4. Third-Party Sharing and Data Transfers
              </h3>
              <p className="text-sm text-stone-700">
                Nitnem Tracker does <strong>not</strong> share your personal data with third-party brokers, advertisers, or data collectors. Data processing partners are strictly limited to official platform providers:
              </p>
              <ul className="list-disc pl-5 text-xs space-y-1 text-stone-700">
                <li><strong>Apple App Store / Google Play:</strong> For handling app delivery, updates, and subscription billing.</li>
                <li><strong>No Analytics SDKs:</strong> We do not integrate third-party advertising SDKs (e.g. Meta, AppsFlyer, Adjust).</li>
              </ul>
            </section>

            {/* Section 5: Children's Privacy */}
            <section className="space-y-3 pt-2 border-t border-stone-100">
              <h3 className="text-lg font-bold font-display text-stone-900">
                5. Children&apos;s Privacy (COPPA & Google Play Families Policy)
              </h3>
              <p className="text-sm text-stone-700">
                Nitnem Tracker is family-friendly and offers a <strong>Parental Guidance</strong> mode. We adhere to the Children&apos;s Online Privacy Protection Act (COPPA) and Google Play Families Policy:
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                We do not knowingly collect personal identifiable information (PII) from children under the age of 13 (or applicable age in your jurisdiction). In Parental Guidance mode, settings and prayer routines are managed locally by the parent on the family device. No child profile data or personal identifiers are uploaded to external servers.
              </p>
            </section>

            {/* Section 6: Data Retention & Deletion Rights */}
            <section className="space-y-3 pt-2 border-t border-stone-100">
              <h3 className="text-lg font-bold font-display text-stone-900">
                6. Data Retention, Account Deletion & Your Rights (GDPR & CCPA)
              </h3>
              <p className="text-sm text-stone-700">
                You retain complete sovereignty over your data:
              </p>
              <ul className="list-disc pl-5 text-xs space-y-2 text-stone-700">
                <li>
                  <strong>Data Deletion:</strong> You can erase all prayer records, streaks, and custom routines at any time directly in the app via <em>Settings &gt; Reset All Data</em>, or by uninstalling the application.
                </li>
                <li>
                  <strong>Account Deletion (Apple Guideline 5.1.1(v)):</strong> If an optional account feature is enabled, users can permanently delete their account and associated data directly within the mobile app settings.
                </li>
                <li>
                  <strong>User Rights:</strong> Under GDPR and CCPA, you have the right to access, rectify, or erase any personal data held by us. Since data is stored locally on your device, clearing app storage executes instant, total erasure. For assistance, contact <strong>info@nitnemtracker.com</strong>.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 pt-2 border-t border-stone-100">
              <h3 className="text-lg font-bold font-display text-stone-900">
                7. Security of Your Information
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We employ industry-standard on-device cryptographic sandboxing provided by iOS and Android to safeguard your settings. We encourage users to maintain secure device lockscreen passcodes and biometric security.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 pt-2 border-t border-stone-100">
              <h3 className="text-lg font-bold font-display text-stone-900">
                8. Contact Us
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                If you have questions, feedback, or requests regarding this Privacy Policy, please email us at:
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D9771A]">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@nitnemtracker.com" className="underline hover:text-[#F28C28]">
                  info@nitnemtracker.com
                </a>
              </div>
            </section>
          </article>
        )}

        {/* Tab 2: Terms of Use (EULA) */}
        {activeTab === 'terms' && (
          <article className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xs text-stone-800 space-y-8 leading-relaxed">
            <div className="border-b border-stone-100 pb-6">
              <span className="text-xs font-mono text-stone-400 block mb-1">
                Last Updated: October 24, 2026 · Version 1.0.0
              </span>
              <h2 className="text-2xl font-bold font-display text-stone-900">
                Terms of Use (End User License Agreement)
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                Please read these Terms of Use (&quot;Terms&quot;) carefully before using the Nitnem Tracker mobile application.
              </p>
            </div>

            {/* Section 1 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold font-display text-stone-900">
                1. Acceptance of Terms & Apple Standard EULA
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                By downloading, installing, or using Nitnem Tracker, you agree to be bound by these Terms. If you download the app from the Apple App Store, you also acknowledge and agree to Apple&apos;s Standard Licensed Application End User License Agreement (EULA). In the event of any conflict between these Terms and Apple&apos;s Standard EULA, these Terms shall control.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold font-display text-stone-900">
                2. Purpose of the Application & Reverence for Gurbani
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nitnem Tracker is designed as a personal spiritual habit companion to help Sikhs and spiritual seekers prioritize their daily Nitnem prayers before engaging with smartphone distractions. Users are encouraged to maintain reverence, cleanliness, and head covering in accordance with the Sikh Rehat Maryada when reciting Banis.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold font-display text-stone-900">
                3. Subscriptions, Payments & Free Trials
              </h3>
              <ul className="list-disc pl-5 text-xs space-y-2 text-stone-700">
                <li>
                  <strong>Billing:</strong> Any optional premium features or subscriptions are billed via your Apple ID (App Store) or Google Account (Google Play). Payment will be charged upon confirmation of purchase.
                </li>
                <li>
                  <strong>Auto-Renewal:</strong> Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current billing cycle.
                </li>
                <li>
                  <strong>Cancel Anytime:</strong> You may cancel your subscription at any time directly in your Apple ID or Google Play Account Settings. Cancellation takes effect at the end of the active billing period.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold font-display text-stone-900">
                4. App Blocking Functionality & Device Compatibility
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                App restriction functionality relies on device operating system permissions (Apple Screen Time / Android Accessibility / Usage Stats). While Nitnem Tracker strives for maximum reliability:
              </p>
              <ul className="list-disc pl-5 text-xs space-y-1 text-stone-700">
                <li>Restrictions depend on device manufacturer power management, OS updates, and user-granted permissions.</li>
                <li><strong>No Emergency Block:</strong> Nitnem Tracker never blocks emergency calls, 911 / 112 services, or basic telephony.</li>
                <li>The app is a self-discipline tool; users maintain the ability to disable permissions in system settings if needed in an urgent situation.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold font-display text-stone-900">
                5. Intellectual Property
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                The software, code, logos, visual designs, and interface assets of Nitnem Tracker are the intellectual property of the developer. Sacred Gurbani texts and names belong to the Sikh Panth and are treated with supreme reverence.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold font-display text-stone-900">
                6. Disclaimer of Warranties & Limitation of Liability
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nitnem Tracker is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. Under no circumstances shall the developer be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the application.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold font-display text-stone-900">
                7. Contact for Legal Matters
              </h3>
              <p className="text-xs text-stone-600">
                For questions regarding these Terms, contact <strong>info@nitnemtracker.com</strong>.
              </p>
            </section>
          </article>
        )}

        {/* Tab 3: Child Safety & Parental Guidance Mode */}
        {activeTab === 'parental' && (
          <article className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xs text-stone-800 space-y-8 leading-relaxed">
            <div className="border-b border-stone-100 pb-6">
              <span className="text-xs font-mono text-stone-400 block mb-1">
                Parental Guidance & Family Supervision Disclosure
              </span>
              <h2 className="text-2xl font-bold font-display text-stone-900">
                Child Safety, Digital Habits & Parental Controls
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                Information on how Nitnem Tracker empowers parents to nurture spiritual discipline in children safely and respectfully.
              </p>
            </div>

            <section className="space-y-3">
              <h3 className="text-lg font-bold font-display text-stone-900">
                1. Empowering Spiritual Habits without Surveillance
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nitnem Tracker is built to replace arguments over screen time with clear, spiritual expectations. When configured on a child&apos;s device, entertainment apps remain paused during designated morning or evening hours until Nitnem Banis are marked complete.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-bold font-display text-stone-900">
                2. On-Device Parental PIN Security
              </h3>
              <ul className="list-disc pl-5 text-xs space-y-1.5 text-stone-700">
                <li>Parents can set a 4-digit Parent PIN to lock routine schedules and app restriction lists.</li>
                <li>Child profiles and schedules reside exclusively on the physical device or family iCloud/Google account.</li>
                <li>The app contains no chat rooms, public profiles, social feeds, or interaction with strangers.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-bold font-display text-stone-900">
                3. Store Compliance with Families Policy
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nitnem Tracker complies with Apple Screen Time Family Sharing guidelines and Google Play Families Policy. It does not display targeted advertising, behavioral tracking, or in-app purchases targeted at minors without parental verification.
              </p>
            </section>
          </article>
        )}

        {/* Bottom Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#F28C28]" />
            <span>Return to Nitnem Tracker Home</span>
          </button>
        </div>
      </main>

      {/* Legal Footer */}
      <footer className="border-t border-stone-200/80 bg-white py-6 text-center text-xs text-stone-500">
        <div className="max-w-5xl mx-auto px-4">
          © {new Date().getFullYear()} Nitnem Tracker. All rights reserved. Designed with reverence for the Sikh Sangat worldwide.
        </div>
      </footer>
    </div>
  );
};
