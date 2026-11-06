import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { ArrowRight, Heart, Award, Compass } from 'lucide-react';

export const HeritageSection: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream relative" id="gujarati-heritage">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="ANCESTRAL ROOTS"
          title="A Taste Rooted in Devotion & Heritage"
          subtitle="From temple prasad offerings inspired by Shri Nilkanthdham Poicha to joyous Diwali, Rakhi, and sacred fasting days, Kopra Pak has been Gujarat's and India's most cherished coconut sweet."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-light-beige flex items-center justify-center text-primary mb-3.5 sm:mb-5 border border-gold/30 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown mb-2 sm:mb-3">
                Kathiawadi Culinary Pride
              </h3>
              <p className="text-muted-text text-xs sm:text-sm lg:text-base leading-relaxed">
                In Gujarat, sweets are an emblem of warmth, devotion, and hospitality. A festive celebration or auspicious family gathering is incomplete without royal, melt-in-mouth Kopra Pak slow-cooked in 100% Pure Premium Ghee.
              </p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-light-beige flex items-center justify-center text-primary mb-3.5 sm:mb-5 border border-gold/30 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown mb-2 sm:mb-3">
                Festivals & Sacred Naivedyam
              </h3>
              <p className="text-muted-text text-xs sm:text-sm lg:text-base leading-relaxed">
                Coconut (Shriphal) represents supreme purity in Vedic rituals. Revered for Ekadashi vrat, Diwali, Janmashtami, and weddings, each slice carries the auspicious blessings of divine temple prasad.
              </p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-light-beige flex items-center justify-center text-primary mb-3.5 sm:mb-5 border border-gold/30 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown mb-2 sm:mb-3">
                Ancestral Halwai Artistry
              </h3>
              <p className="text-muted-text text-xs sm:text-sm lg:text-base leading-relaxed">
                We preserve the unhurried patience of traditional halwais, gently roasting fresh tender coconut in Pure Premium Ghee, reducing whole milk mawa, and hand-layering with royal saffron and pistachios.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            to="/about"
            variant="outline"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Explore Our Brand Heritage
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
