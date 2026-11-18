import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { AppStoreBadges } from './AppStoreBadges';

const OFFERS = [
  'FREE SHIPPING ON ORDERS ABOVE ₹999',
  'FREE SHIPPING ON YOUR FIRST ORDER ABOVE ₹599',
];

export const AnnouncementBar: React.FC = () => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');

  useEffect(() => {
    const timer = setInterval(() => {
      // Begin 300ms fade-out
      setFadeState('fade-out');

      setTimeout(() => {
        setCurrentOfferIndex((prev) => (prev + 1) % OFFERS.length);
        setFadeState('fade-in');
      }, 300);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-primary text-deep-brown select-none relative z-50">
      {/* LINE 1: Rotating Free Shipping Announcement Bar (Ultra-slim ~16-20px) */}
      <div className="w-full bg-primary py-0.5 px-3">
        <div className="max-w-[1600px] mx-auto flex items-center justify-center text-center">
          <p
            className={`font-jost text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider text-deep-brown transition-opacity duration-300 ease-in-out ${
              fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {OFFERS[currentOfferIndex]}
          </p>
        </div>
      </div>

      {/* LINE 2: Mobile App Discount Banner (Zero vertical gap, Ultra-slim ~20-24px) */}
      <div className="w-full bg-primary py-0.5 sm:py-1 px-3">
        <div className="max-w-[1600px] mx-auto flex items-center justify-center text-center">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-nowrap whitespace-nowrap overflow-x-hidden">
            {/* Desktop Text */}
            <span className="hidden sm:inline text-[11px] md:text-xs text-deep-brown font-medium">
              Install <strong className="font-bold text-deep-brown">{siteConfig.brandName}</strong> App &amp; Get{' '}
              <span className="text-amber-900 font-black">2% Extra Discount</span> on App! Available on:
            </span>

            {/* Mobile Text (Ultra-compact 1 single line) */}
            <span className="inline sm:hidden text-[10px] text-deep-brown font-medium">
              Install App &amp; Get{' '}
              <span className="text-amber-900 font-black">2% Off</span>:
            </span>

            {/* Play Store & App Store Badges */}
            <AppStoreBadges theme="dark" size="xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
