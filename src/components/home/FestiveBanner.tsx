import React from 'react';
import { Link } from 'react-router-dom';

export const FestiveBanner: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="festive-banner" aria-label="Festive Kopra Pak Banner">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <Link
            to="/contact"
            className="block w-full group relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            aria-label="Festive Kopra Pak Celebration Platter - Enquire for Festive Gifting"
          >
            <picture className="w-full h-auto block">
              <source srcSet="/images/kopra-pak-festive-banner.webp" type="image/webp" />
              <img
                src="/images/kopra-pak-festive-banner.jpg"
                alt="Festive celebration platter of fresh Kopra Pak (Coconut Barfi / Nariyal Barfi) sweet cubes with glowing brass diyas and marigold flowers for Diwali, Vrat, and temple bhog"
                width="1200"
                height="670"
                className="w-full h-auto block object-cover select-none transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FestiveBanner;
