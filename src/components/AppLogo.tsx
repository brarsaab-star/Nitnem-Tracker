import React, { useState, useEffect } from 'react';

interface AppLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const AppLogo: React.FC<AppLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const [imageError, setImageError] = useState(false);
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    // Check localStorage for any custom uploaded logo preview URL
    const saved = localStorage.getItem('nitnem_custom_logo_url');
    if (saved) {
      setCustomLogoUrl(saved);
    }
  }, []);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
  };

  const textSizeClasses = {
    sm: 'text-base font-semibold',
    md: 'text-lg font-bold tracking-tight',
    lg: 'text-2xl font-bold tracking-tight',
  };

  // Standard path where the transparent logo is stored
  const logoSrc = customLogoUrl || '/app-logo.png';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {!imageError ? (
        <img
          src={logoSrc}
          alt="Nitnem Tracker Logo"
          onError={() => setImageError(true)}
          className={`${sizeClasses[size]} object-contain shrink-0`}
        />
      ) : (
        <div
          className={`${sizeClasses[size].split(' ')[0]} ${sizeClasses[size].split(' ')[1]} rounded-xl bg-gradient-to-br from-[#F28C28] to-[#D9771A] flex items-center justify-center text-white shadow-xs shrink-0 p-1.5`}
          title="Nitnem Tracker"
        >
          {/* Spiritual Khanda / Ik Onkar geometric emblem */}
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-white"
          >
            {/* Central Double-edged sword */}
            <path
              d="M24 6L25.8 19L24 40L22.2 19L24 6Z"
              fill="currentColor"
            />
            {/* Chakkar circle */}
            <circle
              cx="24"
              cy="23"
              r="9.5"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Left curved kirpan */}
            <path
              d="M13.5 14.5C11.5 19 12 26 16.5 32C19.5 36 23.5 38.5 24 38.8C22.5 38 18 34.5 15 29.5C12.5 25.5 12 20 13.5 14.5Z"
              fill="currentColor"
            />
            {/* Right curved kirpan */}
            <path
              d="M34.5 14.5C36.5 19 36 26 31.5 32C28.5 36 24.5 38.5 24 38.8C25.5 38 30 34.5 33 29.5C35.5 25.5 36 20 34.5 14.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
      )}

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display text-stone-900 leading-none ${textSizeClasses[size]}`}>
            Nitnem Tracker
          </span>
          <span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium mt-0.5">
            Put Waheguru First
          </span>
        </div>
      )}
    </div>
  );
};
