import React from 'react';
import { siteConfig } from '../../data/siteConfig';

export interface AppStoreBadgesProps {
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'xs';
}

export const AppStoreBadges: React.FC<AppStoreBadgesProps> = ({
  className = '',
  theme = 'dark',
  size = 'xs',
}) => {
  const isDark = theme === 'dark';

  const badgeBaseClass = isDark
    ? 'bg-deep-brown text-cream hover:bg-deep-brown-dark border border-deep-brown/40 shadow-xs'
    : 'bg-deep-brown text-cream hover:bg-deep-brown-dark border border-deep-brown/30 shadow-xs';

  const sizeClass =
    size === 'xs'
      ? 'h-[20px] px-2 py-0 text-[10px] gap-1'
      : 'h-[24px] px-2.5 py-0 text-[11px] gap-1.5';

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      {/* Play Store Pill Badge */}
      <a
        href={siteConfig.apps.playStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Bhagvat Prasadam App on Google Play Store"
        className={`inline-flex items-center justify-center font-semibold rounded-full tracking-tight transition-transform duration-150 hover:scale-[1.03] active:scale-95 select-none ${badgeBaseClass} ${sizeClass}`}
      >
        {/* Google Play Vector Icon */}
        <svg
          className="w-2.5 h-2.5 flex-shrink-0 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.428V3.242c0-.555.225-1.057.609-1.428z" />
          <path d="M17.483 8.309l-2.617 2.617L3.61 1.814A1.97 1.97 0 0 1 4.542 1.58c.45 0 .882.128 1.258.358l11.683 6.371z" />
          <path d="M14.866 13.074l2.617 2.617-11.683 6.371a2.203 2.203 0 0 1-1.258.358c-.33 0-.648-.083-.932-.234l11.256-9.112z" />
          <path d="M21.579 10.536l-3.022-1.648-2.617 2.617 2.617 2.617 3.022-1.648c.883-.482.883-1.456 0-1.938z" />
        </svg>
        <span className="leading-none whitespace-nowrap">Play Store</span>
      </a>

      {/* App Store Pill Badge */}
      <a
        href={siteConfig.apps.appStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Bhagvat Prasadam App on Apple App Store"
        className={`inline-flex items-center justify-center font-semibold rounded-full tracking-tight transition-transform duration-150 hover:scale-[1.03] active:scale-95 select-none ${badgeBaseClass} ${sizeClass}`}
      >
        {/* Apple Vector Icon */}
        <svg
          className="w-2.5 h-2.5 flex-shrink-0 fill-current mb-[1px]"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.66-.82 1.11-1.96.99-3.11-1 .04-2.18.66-2.88 1.48-.61.71-1.15 1.86-1.01 2.98 1.12.09 2.24-.55 2.9-1.35z" />
        </svg>
        <span className="leading-none whitespace-nowrap">App Store</span>
      </a>
    </div>
  );
};

export default AppStoreBadges;
