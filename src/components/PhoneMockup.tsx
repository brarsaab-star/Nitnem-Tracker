import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Lock, 
  Unlock, 
  Flame, 
  Trophy, 
  CheckCircle2, 
  BookOpen, 
  Home, 
  BarChart3, 
  Settings, 
  Sparkles, 
  RefreshCw, 
  SunMedium, 
  Sunset,
  Moon,
  Share2,
  Sparkle
} from 'lucide-react';
import { Language, Translations, translations } from '../translations';

// Custom authentic Mala Icon matching the user's screenshot
const MalaIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Ring of 12 prayer beads */}
    <circle cx="12" cy="3" r="1.15" fill="currentColor" />
    <circle cx="16.2" cy="4.2" r="1.15" fill="currentColor" />
    <circle cx="19.2" cy="7.2" r="1.15" fill="currentColor" />
    <circle cx="20.3" cy="11.4" r="1.15" fill="currentColor" />
    <circle cx="19.2" cy="15.6" r="1.15" fill="currentColor" />
    <circle cx="16.2" cy="18.7" r="1.15" fill="currentColor" />
    <circle cx="7.8" cy="18.7" r="1.15" fill="currentColor" />
    <circle cx="4.8" cy="15.6" r="1.15" fill="currentColor" />
    <circle cx="3.7" cy="11.4" r="1.15" fill="currentColor" />
    <circle cx="4.8" cy="7.2" r="1.15" fill="currentColor" />
    <circle cx="7.8" cy="4.2" r="1.15" fill="currentColor" />
    
    {/* Bottom Guru / Meru bead */}
    <circle cx="12" cy="19.5" r="1.4" fill="currentColor" />
    
    {/* Hanging Tassel */}
    <path 
      d="M12 20.9V23.5M10.8 23.5L11.5 21M13.2 23.5L12.5 21" 
      stroke="currentColor" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
    />
  </svg>
);

interface GoalItem {
  id: 'hukamnama' | 'simran' | 'morning' | 'evening' | 'night';
  titleEn: string;
  titlePa: string;
  subtitleEn: string;
  subtitlePa: string;
  completed: boolean;
  iconType: 'hukamnama' | 'simran' | 'morning' | 'evening' | 'night';
}

const INITIAL_GOALS: GoalItem[] = [
  {
    id: 'hukamnama',
    titleEn: 'Daily Hukamnama',
    titlePa: 'ਰੋਜ਼ਾਨਾ ਹੁਕਮਨਾਮਾ',
    subtitleEn: 'Read today (Ang 694)',
    subtitlePa: 'ਅੱਜ ਪੜ੍ਹਿਆ ਗਿਆ (ਅੰਗ ੬੯੪)',
    completed: true,
    iconType: 'hukamnama',
  },
  {
    id: 'simran',
    titleEn: 'Simran Mala',
    titlePa: 'ਸਿਮਰਨ ਮਾਲਾ',
    subtitleEn: 'One round of 108 beads done.',
    subtitlePa: '੧੦੮ ਮਣਕਿਆਂ ਦੀ ਇੱਕ ਮਾਲਾ ਪੂਰੀ।',
    completed: true,
    iconType: 'simran',
  },
  {
    id: 'morning',
    titleEn: 'Morning Nitnem (5 Banis)',
    titlePa: 'ਸਵੇਰ ਦਾ ਨਿਤਨੇਮ (੫ ਬਾਣੀਆਂ)',
    subtitleEn: 'Japji, Jaap, Savaiye, Chaupai, Anand Sahib',
    subtitlePa: 'ਜਪੁਜੀ, ਜਾਪੁ, ਸਵਯੇ, ਚੌਪਈ, ਅਨੰਦੁ ਸਾਹਿਬ',
    completed: true,
    iconType: 'morning',
  },
  {
    id: 'evening',
    titleEn: 'Evening Nitnem (Rehras Sahib)',
    titlePa: 'ਸੰਧਿਆ ਨਿਤਨੇਮ (ਰਹਰਾਸਿ ਸਾਹਿਬ)',
    subtitleEn: 'Sunset window · 6:00 PM – 8:30 PM',
    subtitlePa: 'ਸੰਧਿਆ ਵੇਲਾ · ਸ਼ਾਮ 6:00 – 8:30 ਵਜੇ',
    completed: false, // Not selected / not completed initially as requested
    iconType: 'evening',
  },
  {
    id: 'night',
    titleEn: 'Night Nitnem (Kirtan Sohila)',
    titlePa: 'ਰਾਤ ਦਾ ਨਿਤਨੇਮ (ਕੀਰਤਨ ਸੋਹਿਲਾ)',
    subtitleEn: 'Bedtime window · Before sleeping',
    subtitlePa: 'ਸੌਣ ਵੇਲਾ · ਸੌਣ ਤੋਂ ਪਹਿਲਾਂ',
    completed: false, // Not selected / not completed initially as requested
    iconType: 'night',
  },
];

interface PhoneMockupProps {
  lang?: Language;
  t?: Translations;
}

function getFormattedCurrentDate(lang: Language): string {
  const now = new Date();
  
  if (lang === 'pa') {
    const punjabiDays = ['ਐਤਵਾਰ', 'ਸੋਮਵਾਰ', 'ਮੰਗਲਵਾਰ', 'ਬੁੱਧਵਾਰ', 'ਵੀਰਵਾਰ', 'ਸ਼ੁੱਕਰਵਾਰ', 'ਸ਼ਨੀਵਾਰ'];
    const punjabiMonths = [
      'ਜਨਵਰੀ', 'ਫ਼ਰਵਰੀ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈਲ', 'ਮਈ', 'ਜੂਨ',
      'ਜੁਲਾਈ', 'ਅਗਸਤ', 'ਸਤੰਬਰ', 'ਅਕਤੂਬਰ', 'ਨਵੰਬਰ', 'ਦਸੰਬਰ'
    ];
    const dayName = punjabiDays[now.getDay()];
    const dateNum = now.getDate();
    const monthName = punjabiMonths[now.getMonth()];
    const yearNum = now.getFullYear();
    return `${dayName}, ${dateNum} ${monthName} ${yearNum}`;
  }

  // English format: e.g. "Monday, 26 October 2026"
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return now.toLocaleDateString('en-GB', options);
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  lang = 'en',
  t,
}) => {
  const [goals, setGoals] = useState<GoalItem[]>(INITIAL_GOALS);
  const [activeTab, setActiveTab] = useState<'home' | 'simran' | 'sggs' | 'progress' | 'settings'>('home');
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);

  // Dynamic live date & time so preview always shows today's live date
  const [currentDateStr, setCurrentDateStr] = useState(() => getFormattedCurrentDate(lang));
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  });

  useEffect(() => {
    setCurrentDateStr(getFormattedCurrentDate(lang));
  }, [lang]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
      setCurrentDateStr(getFormattedCurrentDate(lang));
    }, 15000);
    return () => clearInterval(timer);
  }, [lang]);

  useEffect(() => {
    // Check localStorage for any custom uploaded logo preview URL
    try {
      const saved = localStorage.getItem('nitnem_custom_logo_url');
      if (saved) {
        setCustomLogoUrl(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const logoSrc = customLogoUrl || '/app-logo.png';
  const currentT = t || translations[lang];
  const isPa = lang === 'pa';

  const completedCount = goals.filter((g) => g.completed).length;
  const totalCount = goals.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);
  const allCompleted = completedCount === totalCount;
  const remainingCount = totalCount - completedCount;

  const toggleGoal = (id: string) => {
    setGoals((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const resetDemo = () => {
    setGoals(INITIAL_GOALS);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[365px] select-none font-sans">
      {/* Subtle spiritual ambient background glow behind device */}
      <div 
        className="absolute -inset-4 bg-gradient-to-tr from-[#F28C28]/25 via-[#F28C28]/8 to-transparent rounded-[3.5rem] blur-2xl -z-10 pointer-events-none"
        aria-hidden="true" 
      />

      {/* Realistic Smartphone Chassis (Dark Titanium/Onyx) */}
      <div className="relative rounded-[46px] p-2.5 sm:p-3 bg-[#09080A] border-[3px] border-[#222026] shadow-2xl shadow-black/80 ring-1 ring-white/10">
        
        {/* Dynamic Punch-hole / Speaker Bar */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30 w-20 h-4 bg-black rounded-full flex items-center justify-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#18181B] border border-stone-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#27272A]" />
        </div>

        {/* Screen Area (Deep Dark Mode matching screenshot) */}
        <div className="relative rounded-[36px] bg-[#121115] overflow-hidden text-stone-100 flex flex-col border border-stone-800/60 shadow-inner">
          
          {/* 1. Android Status Bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[11px] font-medium tracking-tight text-stone-300 z-10">
            <div className="flex items-center gap-1.5 font-semibold text-stone-200">
              <span>{currentTime}</span>
              {/* Clover/Status Icon from screenshot */}
              <Sparkle className="w-2.5 h-2.5 text-stone-400 fill-stone-400" />
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              {/* 5G icon */}
              <span className="text-[10px] font-bold tracking-tighter text-stone-400">5G</span>
              {/* Cellular Signal Bars */}
              <div className="flex items-end gap-0.5 h-2.5">
                <span className="w-0.5 h-1 bg-stone-300 rounded-xs" />
                <span className="w-0.5 h-1.5 bg-stone-300 rounded-xs" />
                <span className="w-0.5 h-2 bg-stone-300 rounded-xs" />
                <span className="w-0.5 h-2.5 bg-stone-300 rounded-xs" />
              </div>
              {/* Battery indicator with 48 */}
              <div className="flex items-center gap-1">
                <div className="w-5 h-3 border border-stone-400 rounded-[4px] p-0.5 flex items-center relative">
                  <div className="h-full bg-stone-200 rounded-[1px] w-[48%]" />
                  <span className="absolute -right-1 top-1 w-0.5 h-1 bg-stone-400 rounded-r-xs" />
                </div>
                <span className="text-[10px] font-semibold tabular-nums text-stone-300">48</span>
              </div>
            </div>
          </div>

          {/* 2. App Top Header: Transparent Logo & Name of App (Nitnem Tracker) + Streak Badge */}
          <div className="px-5 pt-2 pb-3 flex items-center justify-between border-b border-[#232128]">
            {/* Transparent Logo (NO opaque box) + App Name */}
            <div className="flex items-center gap-2.5">
              <img
                src={logoSrc}
                alt="Nitnem Tracker"
                className="w-9 h-9 object-contain shrink-0 bg-transparent filter drop-shadow-xs"
              />
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-[#F28C28] leading-none">
                  Nitnem Tracker
                </span>
                <span className="text-[9px] uppercase tracking-wider text-stone-400 font-semibold mt-0.5">
                  {isPa ? 'ਵਾਹਿਗੁਰੂ ਨੂੰ ਪਹਿਲਾਂ ਰੱਖੋ' : 'Put Waheguru First'}
                </span>
              </div>
            </div>

            {/* Streak Pill: 🔥 12 days */}
            <div className="flex items-center gap-1.5 bg-[#1F1D24] border border-[#312E38] px-2.5 py-1 rounded-full shadow-xs">
              <Flame className="w-3.5 h-3.5 text-[#F28C28] fill-[#F28C28]" />
              <span className="text-xs font-bold text-stone-200 tabular-nums">
                {allCompleted ? 13 : 12} {isPa ? 'ਦਿਨ' : 'days'}
              </span>
            </div>
          </div>

          {/* Interactive Hint & Reset bar */}
          <div className="bg-[#F28C28]/10 border-b border-[#F28C28]/20 px-5 py-1.5 flex items-center justify-between text-[10px] text-[#F28C28]">
            <span className="flex items-center gap-1 font-medium">
              <Sparkles className="w-3 h-3 shrink-0" />
              <span>{isPa ? 'ਬਾਣੀਆਂ ਪੂਰੀਆਂ ਕਰਕੇ ਐਪਾਂ ਅਨਲੌਕ ਦੇਖੋ' : 'Check pending Nitnems to unlock apps'}</span>
            </span>
            <button
              onClick={resetDemo}
              className="text-stone-300 hover:text-white underline text-[9px] flex items-center gap-0.5 cursor-pointer"
            >
              <RefreshCw className="w-2.5 h-2.5" /> {isPa ? 'ਮੁੜ ਸੈੱਟ' : 'Reset'}
            </button>
          </div>

          {/* 3. Screen Scrollable Body Content */}
          <div className="px-5 py-4 space-y-4 flex-1 overflow-y-auto max-h-[520px] scrollbar-none">
            
            {/* Greeting & Date Header (NOT very bold, gentle & reverent) */}
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-stone-100 tracking-normal flex items-center gap-2">
                <span>{currentT.phone.greeting || (isPa ? 'ਵਾਹਿਗੁਰੂ ਜੀ 🙏' : 'Waheguru Ji 🙏')}</span>
              </h2>
              <p className="text-xs text-stone-400 mt-0.5 font-medium capitalize">
                {currentDateStr}
              </p>

              {/* Status pill under date */}
              <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold">
                {allCompleted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                    <span className="text-emerald-400 font-medium">
                      {isPa ? 'ਸਾਰੇ ਟੀਚੇ ਪੂਰੇ · ਐਪਾਂ ਖੁੱਲ੍ਹ ਗਈਆਂ' : 'All goals done · your apps are unlocked'}
                    </span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-amber-300 font-medium">
                      {isPa 
                        ? `${completedCount} / ${totalCount} ਪੂਰੇ · ਧਿਆਨ ਭਟਕਾਉਣ ਵਾਲੀਆਂ ਐਪਾਂ ਬੰਦ ਹਨ`
                        : `${completedCount} / ${totalCount} completed · distracting apps restricted`}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Streaks Row with 3 Cards */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white tracking-tight">
                  {currentT.phone.streaksTitle || (isPa ? 'ਲੜੀ (Streaks)' : 'Streaks')}
                </span>
                <span className="text-xs font-semibold text-[#F28C28] hover:underline cursor-pointer">
                  {currentT.phone.seeAll || (isPa ? 'ਸਭ ਦੇਖੋ' : 'See all')}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {/* 1. Day Streak */}
                <div className="bg-[#1C1A21] border border-[#2B2833] rounded-2xl p-2.5 flex flex-col items-center text-center shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-b from-[#F28C28]/20 to-transparent flex items-center justify-center mb-1">
                    <Flame className="w-4 h-4 text-[#F28C28] fill-[#F28C28]" />
                  </div>
                  <span className="text-lg font-black text-white leading-tight tabular-nums">
                    {allCompleted ? 13 : 12}
                  </span>
                  <span className="text-[10px] text-stone-400 font-medium leading-tight mt-0.5">
                    {currentT.phone.dayStreak || (isPa ? 'ਰੋਜ਼ਾਨਾ ਲੜੀ' : 'Day Streak')}
                  </span>
                </div>

                {/* 2. Longest Streak */}
                <div className="bg-[#1C1A21] border border-[#2B2833] rounded-2xl p-2.5 flex flex-col items-center text-center shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-b from-amber-400/20 to-transparent flex items-center justify-center mb-1">
                    <Trophy className="w-4 h-4 text-amber-400 fill-amber-400" />
                  </div>
                  <span className="text-lg font-black text-white leading-tight tabular-nums">
                    12
                  </span>
                  <span className="text-[10px] text-stone-400 font-medium leading-tight mt-0.5">
                    {currentT.phone.longestStreak || (isPa ? 'ਸਭ ਤੋਂ ਲੰਮੀ' : 'Longest Streak')}
                  </span>
                </div>

                {/* 3. Days Completed */}
                <div className="bg-[#1C1A21] border border-[#2B2833] rounded-2xl p-2.5 flex flex-col items-center text-center shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-b from-emerald-500/20 to-transparent flex items-center justify-center mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  </div>
                  <span className="text-lg font-black text-white leading-tight tabular-nums">
                    {allCompleted ? 16 : 15}
                  </span>
                  <span className="text-[10px] text-stone-400 font-medium leading-tight mt-0.5">
                    {currentT.phone.daysCompleted || (isPa ? 'ਪੂਰੇ ਦਿਨ' : 'Days Completed')}
                  </span>
                </div>
              </div>
            </div>

            {/* Today's Progress Card with Interactive Goals including Evening & Night Nitnems */}
            <div className="bg-[#1C1A21] border border-[#2B2833] rounded-2xl p-3.5 space-y-3 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white tracking-tight">
                  {currentT.phone.todaysProgress || (isPa ? 'ਅੱਜ ਦੀ ਤਰੱਕੀ' : "Today's Progress")}
                </span>
                <span className="text-[11px] text-stone-400 font-medium">
                  {allCompleted ? (isPa ? '੧੦੦% ਸੰਪੂਰਨ' : '100% Complete') : (isPa ? `${remainingCount} ਬਾਕੀ` : `${remainingCount} Pending`)}
                </span>
              </div>

              {/* Progress Count & Percent */}
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-stone-300">
                  {completedCount} / {totalCount} {isPa ? 'ਪੂਰੇ ਹੋਏ' : 'Completed'}
                </span>
                <span className="text-stone-200 tabular-nums font-bold">
                  {progressPercent}%
                </span>
              </div>

              {/* Progress Bar (Vibrant Orange from screenshot) */}
              <div className="w-full bg-[#292631] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#F28C28] h-full rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Interactive Goal Items: Hukamnama, Simran, Morning, Evening, Night */}
              <div className="space-y-2 pt-1">
                {goals.map((goal) => {
                  return (
                    <button
                      key={goal.id}
                      onClick={() => toggleGoal(goal.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition-all text-left cursor-pointer group ${
                        goal.completed
                          ? 'bg-[#18161D] border-[#292631] text-stone-200'
                          : 'bg-[#211E27] border-[#F28C28]/40 hover:border-[#F28C28] text-white shadow-xs'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {/* Icon Box */}
                        <div className="w-8 h-8 rounded-lg bg-[#3D2614] text-[#F28C28] flex items-center justify-center shrink-0 border border-[#F28C28]/20">
                          {goal.iconType === 'hukamnama' && <BookOpen className="w-4 h-4 text-[#F28C28]" />}
                          {goal.iconType === 'simran' && <MalaIcon className="w-4 h-4 text-[#F28C28]" />}
                          {goal.iconType === 'morning' && <SunMedium className="w-4 h-4 text-[#F28C28]" />}
                          {goal.iconType === 'evening' && <Sunset className="w-4 h-4 text-[#F28C28]" />}
                          {goal.iconType === 'night' && <Moon className="w-4 h-4 text-[#F28C28]" />}
                        </div>

                        {/* Title & Subtitle */}
                        <div>
                          <div className={`text-xs font-bold leading-tight ${goal.completed ? 'text-stone-200' : 'text-white'}`}>
                            {isPa ? goal.titlePa : goal.titleEn}
                          </div>
                          <div className={`text-[10px] font-medium mt-0.5 ${goal.completed ? 'text-emerald-400' : 'text-stone-400'}`}>
                            {isPa ? goal.subtitlePa : goal.subtitleEn}
                          </div>
                        </div>
                      </div>

                      {/* Green Check Circle for completed, empty circle for pending */}
                      <div 
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                          goal.completed
                            ? 'bg-emerald-500 text-black'
                            : 'border-2 border-stone-600 bg-transparent group-hover:border-[#F28C28]'
                        }`}
                      >
                        {goal.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Distracting Apps Locker Indicator */}
            <div
              className={`rounded-2xl p-3 border transition-all duration-300 ${
                allCompleted
                  ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-200'
                  : 'bg-amber-950/30 border-amber-800/50 text-amber-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold">
                  {allCompleted ? (
                    <>
                      <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 font-bold">
                        {isPa ? 'ਚੁਣੀਆਂ ਹੋਈਆਂ ਐਪਾਂ ਖੁੱਲ੍ਹ ਗਈਆਂ' : 'Selected Apps Unlocked'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-300 font-bold">
                        {isPa ? 'ਧਿਆਨ ਭਟਕਾਉਣ ਵਾਲੀਆਂ ਐਪਾਂ ਬੰਦ ਹਨ' : 'Distracting Apps Restricted'}
                      </span>
                    </>
                  )}
                </div>
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
                  allCompleted ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {allCompleted ? 'UNLOCKED' : 'LOCKED'}
                </span>
              </div>

              {/* Sample restricted app badges */}
              <div className="flex items-center justify-between pt-0.5">
                <div className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-bold ${
                    allCompleted ? 'bg-gradient-to-tr from-pink-500 to-purple-500 text-white' : 'bg-stone-800 text-stone-500 grayscale opacity-60'
                  }`}>
                    IG
                  </div>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-bold ${
                    allCompleted ? 'bg-red-600 text-white' : 'bg-stone-800 text-stone-500 grayscale opacity-60'
                  }`}>
                    YT
                  </div>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-bold ${
                    allCompleted ? 'bg-black border border-stone-700 text-white' : 'bg-stone-800 text-stone-500 grayscale opacity-60'
                  }`}>
                    TT
                  </div>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-bold ${
                    allCompleted ? 'bg-orange-600 text-white' : 'bg-stone-800 text-stone-500 grayscale opacity-60'
                  }`}>
                    RD
                  </div>
                </div>

                <span className="text-[10px] text-stone-400">
                  {allCompleted 
                    ? (isPa ? 'ਸਾਰੀਆਂ ਐਪਾਂ ਵਰਤੋਂ ਲਈ ਤਿਆਰ' : 'Apps ready for use') 
                    : (isPa ? `${remainingCount} ਨੇਮ ਬਾਕੀ` : `${remainingCount} Nitnem${remainingCount > 1 ? 's' : ''} remaining`)}
                </span>
              </div>
            </div>

            {/* Daily Hukamnama Card (Ang 694 from screenshot) with Read & Share Buttons */}
            <div className="bg-[#1C1A21] border border-[#2B2833] rounded-2xl p-3.5 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white tracking-tight">
                  {currentT.phone.dailyHukamnama || (isPa ? 'ਰੋਜ਼ਾਨਾ ਹੁਕਮਨਾਮਾ' : 'Daily Hukamnama')}
                </span>
                <span className="text-[10px] text-stone-400 font-mono">
                  {currentT.phone.angLabel || (isPa ? 'ਅੰਗ ੬੯੪' : 'Ang 694')}
                </span>
              </div>

              {/* Gurmukhi Scripture line */}
              <p className="text-sm font-medium text-stone-100 font-serif leading-relaxed pt-0.5">
                {currentT.phone.hukamnamaGurmukhi || 'ਹਮ ਸਰਿ ਦੀਨੁ ਦਇਆਲੁ ਨ ਤੁਮ ਸਰਿ ਅਬ ਪਤੀਆਰੁ ਕਿਆ ਕੀਜੈ ॥'}
              </p>

              {/* Translation line */}
              <p className="text-[11px] text-stone-400 leading-snug line-clamp-2">
                {isPa 
                  ? (currentT.phone.hukamnamaTranslation || 'ਮੇਰੇ ਵਰਗਾ ਕੋਈ ਦੀਨ-ਦੁਖੀ ਨਹੀਂ ਅਤੇ ਤੇਰੇ ਵਰਗਾ ਕੋਈ ਦਿਆਲੂ ਨਹੀਂ, ਹੁਣ ਹੋਰ ਪਰਖਣ ਦੀ ਕੀ ਲੋੜ ਹੈ?') 
                  : (currentT.phone.hukamnamaTranslation || 'There is none as forlorn as I am, and none as Compassionate as You; what need is there to test You any more?')}
              </p>

              {/* Read & Share Buttons (matching screenshot) */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  className="bg-[#232029] hover:bg-[#2F2C37] border border-[#312E38] text-stone-200 rounded-xl text-xs font-semibold py-2 px-3 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#F28C28]" />
                  <span>{currentT.phone.readButton || (isPa ? 'ਪੜ੍ਹੋ' : 'Read')}</span>
                </button>
                <button
                  type="button"
                  className="bg-[#232029] hover:bg-[#2F2C37] border border-[#312E38] text-stone-200 rounded-xl text-xs font-semibold py-2 px-3 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#F28C28]" />
                  <span>{currentT.phone.shareButton || (isPa ? 'ਸਾਂਝਾ ਕਰੋ' : 'Share')}</span>
                </button>
              </div>
            </div>

            {/* Continue Reading Sri Guru Granth Sahib Ji Card (exact from screenshot) */}
            <div className="bg-[#1C1A21] border border-[#2B2833] rounded-2xl p-3.5 space-y-3 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#3D2614] text-[#F28C28] flex items-center justify-center shrink-0 border border-[#F28C28]/20">
                  <BookOpen className="w-4 h-4 text-[#F28C28]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#F28C28] uppercase tracking-wider block">
                    {currentT.phone.continueReading || (isPa ? 'ਪੜ੍ਹਨਾ ਜਾਰੀ ਰੱਖੋ' : 'Continue Reading')}
                  </span>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {currentT.phone.sggsTitle || 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ'}
                  </h3>
                </div>
              </div>

              {/* Ang 9 of 1430 & 0% read */}
              <div className="flex items-center justify-between text-xs font-semibold text-stone-300">
                <span>{currentT.phone.angProgress || (isPa ? 'ਅੰਗ ੯ / ੧੪੩੦' : 'Ang 9 of 1430')}</span>
                <span className="text-stone-400 font-mono text-[11px]">{currentT.phone.pctRead || (isPa ? '੦% ਪੜ੍ਹਿਆ' : '0% read')}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#292631] h-1.5 rounded-full overflow-hidden">
                <div className="w-[1%] bg-[#F28C28] h-full rounded-full" />
              </div>

              {/* Continue from Ang 9 Button */}
              <button
                type="button"
                className="w-full bg-[#F28C28] hover:bg-[#D9771A] text-stone-950 font-bold text-xs py-2.5 px-4 rounded-xl transition-all shadow-md active:scale-[0.99] cursor-pointer text-center"
              >
                {currentT.phone.continueFromAng || (isPa ? 'ਅੰਗ ੯ ਤੋਂ ਜਾਰੀ ਰੱਖੋ' : 'Continue from Ang 9')}
              </button>
            </div>

            {/* Go to Home Screen Button (matching screenshot) */}
            <button
              type="button"
              onClick={() => setActiveTab('home')}
              className="w-full bg-transparent border border-[#F28C28]/60 hover:bg-[#F28C28]/10 text-[#F28C28] font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Home className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>{currentT.phone.goToHomeScreen || (isPa ? 'ਹੋਮ ਸਕ੍ਰੀਨ \'ਤੇ ਜਾਓ' : 'Go to home screen')}</span>
            </button>

          </div>

          {/* 4. Bottom Tab Navigation Bar with Authentic Mala Icon for Simran */}
          <div className="bg-[#151418] border-t border-[#232128] px-3 py-2 flex items-center justify-around text-stone-400 z-10">
            {/* Home (Active orange) */}
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-0.5 cursor-pointer ${activeTab === 'home' ? 'text-[#F28C28]' : 'hover:text-stone-200'}`}
            >
              <Home className="w-4 h-4" />
              <span className="text-[9px] font-semibold">{currentT.phone.bottomNav?.home || (isPa ? 'ਹੋਮ' : 'Home')}</span>
            </button>

            {/* Simran (Matching Mala Icon from attached screenshot) */}
            <button 
              onClick={() => setActiveTab('simran')}
              className={`flex flex-col items-center gap-0.5 cursor-pointer ${activeTab === 'simran' ? 'text-[#F28C28]' : 'hover:text-stone-200'}`}
            >
              <MalaIcon className="w-4 h-4" />
              <span className="text-[9px] font-medium">{currentT.phone.bottomNav?.simran || (isPa ? 'ਸਿਮਰਨ' : 'Simran')}</span>
            </button>

            {/* SGGS */}
            <button 
              onClick={() => setActiveTab('sggs')}
              className={`flex flex-col items-center gap-0.5 cursor-pointer ${activeTab === 'sggs' ? 'text-[#F28C28]' : 'hover:text-stone-200'}`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-[9px] font-medium">{currentT.phone.bottomNav?.sggs || (isPa ? 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ' : 'SGGS')}</span>
            </button>

            {/* Progress */}
            <button 
              onClick={() => setActiveTab('progress')}
              className={`flex flex-col items-center gap-0.5 cursor-pointer ${activeTab === 'progress' ? 'text-[#F28C28]' : 'hover:text-stone-200'}`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="text-[9px] font-medium">{currentT.phone.bottomNav?.progress || (isPa ? 'ਤਰੱਕੀ' : 'Progress')}</span>
            </button>

            {/* Settings */}
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex flex-col items-center gap-0.5 cursor-pointer ${activeTab === 'settings' ? 'text-[#F28C28]' : 'hover:text-stone-200'}`}
            >
              <Settings className="w-4 h-4" />
              <span className="text-[9px] font-medium">{currentT.phone.bottomNav?.settings || (isPa ? 'ਸੈਟਿੰਗਜ਼' : 'Settings')}</span>
            </button>
          </div>

          {/* 5. Android Bottom 3-Button Navigation Bar (|||  ⬭  ‹) */}
          <div className="bg-[#0C0B0E] py-2 flex items-center justify-around text-stone-500 border-t border-black/40">
            {/* Recents: 3 vertical lines */}
            <div className="flex items-center gap-0.5 cursor-pointer opacity-70 hover:opacity-100">
              <span className="w-0.5 h-3 bg-stone-400 rounded-full" />
              <span className="w-0.5 h-3 bg-stone-400 rounded-full" />
              <span className="w-0.5 h-3 bg-stone-400 rounded-full" />
            </div>

            {/* Home: rounded pill/circle */}
            <div className="w-4 h-4 rounded-full border-[1.5px] border-stone-400 cursor-pointer opacity-70 hover:opacity-100" />

            {/* Back: left chevron */}
            <div className="cursor-pointer opacity-70 hover:opacity-100 text-stone-400 font-bold text-sm">
              ‹
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
