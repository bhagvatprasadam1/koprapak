import React from "react";
import { Link } from "react-router-dom";

export const FullWidthBanner: React.FC = () => {
  return (
    <section
      aria-label="Pure Traditional Gujarati Kopra Pak Banner"
      className="py-5 sm:py-7 lg:py-9 bg-cream"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-light-beige/80 bg-cream-card shadow-sm hover:shadow-md transition-shadow duration-300">
          <Link
            to="/about"
            className="block w-full group relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            aria-label="Traditional Kopra-Pak Rich Taste Pure Tradition - Explore Our Story"
          >
            <picture className="block w-full">
              <source srcSet="/images/kopra-pak-home-banner.webp" type="image/webp" />
              <img
                src="/images/kopra-pak-home-banner.jpg"
                alt="Traditional Kopra Pak (Coconut Barfi / Nariyal Barfi) banner - Rich Taste, Pure Tradition, Handcrafted in 100% Pure Premium Ghee by Bhagvat Prasadam"
                width="1024"
                height="576"
                className="w-full h-auto block select-none transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                loading="lazy"
              />
            </picture>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FullWidthBanner;
