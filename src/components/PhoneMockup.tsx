import React, { useState } from 'react';
import { Check, Lock, Unlock, Flame, SunMedium, Smartphone, Sparkles, RefreshCw } from 'lucide-react';

interface BaniItem {
  id: string;
  name: string;
  punjabiName: string;
  duration: string;
  completed: boolean;
  completedAt?: string;
}

const INITIAL_BANIS: BaniItem[] = [
  { id: 'japji', name: 'Japji Sahib', punjabiName: 'ਜਪੁਜੀ ਸਾਹਿਬ', duration: '20 min', completed: true, completedAt: '06:15 AM' },
  { id: 'jaap', name: 'Jaap Sahib', punjabiName: 'ਜਾਪੁ ਸਾਹਿਬ', duration: '18 min', completed: true, completedAt: '06:38 AM' },
  { id: 'tavprasad', name: 'Tav-Prasad Savaiye', punjabiName: 'ਤ੍ਵਪ੍ਰਸਾਦਿ ਸਵਯੇ', duration: '5 min', completed: true, completedAt: '06:48 AM' },
  { id: 'chaupai', name: 'Chaupai Sahib', punjabiName: 'ਚੌਪਈ ਸਾਹਿਬ', duration: '6 min', completed: false },
  { id: 'anand', name: 'Anand Sahib', punjabiName: 'ਅਨੰਦੁ ਸਾਹਿਬ', duration: '12 min', completed: false },
];

export const PhoneMockup: React.FC = () => {
  const [banis, setBanis] = useState<BaniItem[]>(INITIAL_BANIS);
  const [streak, setStreak] = useState(28);

  const completedCount = banis.filter(b => b.completed).length;
  const totalCount = banis.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);
  const allCompleted = completedCount === totalCount;

  const toggleBani = (id: string) => {
    setBanis(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextState = !item.completed;
          return {
            ...item,
            completed: nextState,
            completedAt: nextState ? 'Just now' : undefined,
          };
        }
        return item;
      })
    );
  };

  const resetDemo = () => {
    setBanis(INITIAL_BANIS);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px] select-none">
      {/* Glow behind device */}
      <div 
        className="absolute -inset-4 bg-gradient-to-tr from-[#F28C28]/20 via-[#F28C28]/5 to-transparent rounded-[3rem] blur-2xl -z-10"
        aria-hidden="true"
      />

      {/* Realistic Smartphone Chassis */}
      <div className="relative rounded-[48px] p-3 bg-stone-900 border-[3px] border-stone-800 shadow-2xl shadow-stone-900/30 ring-1 ring-stone-700/40">
        
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 w-24 h-5 bg-stone-950 rounded-full flex items-center justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-stone-900 border border-stone-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone-900 border border-stone-800" />
        </div>

        {/* Screen Bezel & Content */}
        <div className="relative rounded-[38px] bg-stone-950 overflow-hidden text-stone-100 flex flex-col font-sans border border-stone-800/80">
          
          {/* Status Bar */}
          <div className="flex items-center justify-between px-7 pt-3.5 pb-2 text-[11px] font-medium tracking-tight text-stone-400">
            <span>06:52</span>
            <div className="flex items-center gap-1.5">
              {/* Cellular */}
              <div className="flex items-end gap-0.5 h-2.5">
                <span className="w-0.5 h-1 bg-stone-300 rounded-xs" />
                <span className="w-0.5 h-1.5 bg-stone-300 rounded-xs" />
                <span className="w-0.5 h-2 bg-stone-300 rounded-xs" />
                <span className="w-0.5 h-2.5 bg-stone-300 rounded-xs" />
              </div>
              {/* Battery */}
              <div className="w-5 h-2.5 border border-stone-400 rounded-[3px] p-0.5 flex items-center">
                <div className="h-full bg-[#F28C28] rounded-[1px] w-[85%]" />
              </div>
            </div>
          </div>

          {/* Phone App Header */}
          <div className="px-4 pt-3 pb-3 border-b border-stone-800/60 flex items-center justify-between bg-stone-900/60">
            <div className="flex items-center gap-2">
              <img
                src="/app-logo.png"
                alt="Nitnem Tracker"
                className="w-8 h-8 object-contain shrink-0"
              />
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  Morning Nitnem
                </div>
                <div className="text-[10px] text-stone-400">
                  Window: 4:00 AM – 9:00 AM
                </div>
              </div>
            </div>

            {/* Streak Counter */}
            <div className="flex items-center gap-1 bg-stone-800/80 border border-stone-700/60 px-2 py-1 rounded-md">
              <Flame className="w-3.5 h-3.5 text-[#F28C28]" />
              <span className="text-[11px] font-bold text-[#F28C28] tabular-nums">
                {allCompleted ? streak + 1 : streak}d
              </span>
            </div>
          </div>

          {/* Interactive hint banner */}
          <div className="bg-[#F28C28]/10 border-b border-[#F28C28]/20 px-4 py-1.5 flex items-center justify-between text-[10px] text-[#F28C28]">
            <span className="flex items-center gap-1 font-medium">
              <Sparkles className="w-3 h-3" /> Tap prayers to test app unlock
            </span>
            {allCompleted && (
              <button
                onClick={resetDemo}
                className="text-stone-300 hover:text-white underline text-[9px] flex items-center gap-0.5 cursor-pointer"
              >
                <RefreshCw className="w-2.5 h-2.5" /> Reset
              </button>
            )}
          </div>

          {/* App Body Content */}
          <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
            
            {/* Progress Card */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-3.5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-300 font-medium">Routine Progress</span>
                <span className="text-stone-100 font-bold tabular-nums">
                  {completedCount} of {totalCount} Banis ({progressPercent}%)
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden p-0.5">
                <div
                  className="bg-gradient-to-r from-[#F28C28] to-[#FFA84D] h-full rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="text-[10px] text-stone-400 flex items-center justify-between pt-0.5">
                <span>{allCompleted ? 'All morning prayers completed' : '2 Banis remaining'}</span>
                <span className="text-[#F28C28] font-medium">
                  {allCompleted ? 'Apps Unlocked' : 'Apps Restricted'}
                </span>
              </div>
            </div>

            {/* Bani Checklist */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider px-1">
                Required Morning Banis
              </div>
              
              <div className="space-y-1.5">
                {banis.map((bani) => (
                  <button
                    key={bani.id}
                    onClick={() => toggleBani(bani.id)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                      bani.completed
                        ? 'bg-stone-900/40 border-stone-800/80 text-stone-300'
                        : 'bg-stone-900 border-[#F28C28]/40 hover:border-[#F28C28] text-white shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                          bani.completed
                            ? 'bg-[#F28C28] text-white'
                            : 'border border-stone-600 bg-stone-800'
                        }`}
                      >
                        {bani.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className={`text-xs font-medium leading-none ${bani.completed ? 'line-through text-stone-400' : 'text-stone-100'}`}>
                          {bani.name}
                        </div>
                        <div className="text-[9px] text-stone-500 mt-1 font-serif">
                          {bani.punjabiName}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-stone-400 tabular-nums">
                        {bani.completed ? bani.completedAt : bani.duration}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Distraction Restriction Status Card */}
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
                      <span className="text-emerald-300">Selected Apps Unlocked</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-300">Distracting Apps Restricted</span>
                    </>
                  )}
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-black/40 font-mono text-stone-300">
                  {allCompleted ? 'ACTIVE' : 'BLOCKED'}
                </span>
              </div>

              {/* Sample restricted app icons */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                    allCompleted ? 'bg-gradient-to-tr from-pink-500 to-purple-500 text-white' : 'bg-stone-800 text-stone-500 grayscale opacity-60'
                  }`}>
                    IG
                  </div>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                    allCompleted ? 'bg-red-600 text-white' : 'bg-stone-800 text-stone-500 grayscale opacity-60'
                  }`}>
                    YT
                  </div>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                    allCompleted ? 'bg-black border border-stone-700 text-white' : 'bg-stone-800 text-stone-500 grayscale opacity-60'
                  }`}>
                    TT
                  </div>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                    allCompleted ? 'bg-orange-600 text-white' : 'bg-stone-800 text-stone-500 grayscale opacity-60'
                  }`}>
                    RD
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-stone-400 leading-tight block">
                    {allCompleted ? 'Ready for use' : 'Pending 2 Banis'}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Home Indicator */}
          <div className="pb-2 pt-1 flex justify-center bg-stone-950">
            <div className="w-28 h-1 bg-stone-700 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
};
