import React from 'react';
import { siteConfig } from '../../data/siteConfig';

export const AnnouncementBar: React.FC = () => {
  const parts = siteConfig.announcement.split('•').map((s) => s.trim());

  return (
    <aside 
      aria-label="Announcement"
      className="bg-primary text-deep-brown text-xs sm:text-sm py-2 px-4 border-b border-primary-hover shadow-sm tracking-wide select-none"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center font-bold">
        <span className="truncate flex items-center justify-center gap-1.5 sm:gap-2">
          {parts.map((part, index) => (
            <React.Fragment key={index}>
              <span>{part}</span>
              {index < parts.length - 1 && (
                <span className="text-deep-brown/40 font-black select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </span>
      </div>
    </aside>
  );
};

export default AnnouncementBar;
