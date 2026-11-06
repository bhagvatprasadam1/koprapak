import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../common/Button";

export const ProductIntro: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="what-is-kopra-pak">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="HERITAGE & ESSENCE"
          title="What Is Kopra Pak (Coconut Barfi / Nariyal Barfi)?"
          subtitle="The iconic traditional sweet handcrafted from fresh tender grated coconut, 100% Pure Premium Ghee, and rich slow-simmered milk mawa."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-gold/30 bg-white">
              <img
                src="/images/kopra-pak-closeup.webp"
                alt="Close-up of authentic Gujarati Kopra Pak (Coconut Barfi / Nariyal Barfi) showing tender grated coconut flakes slow-cooked in 100% Pure Premium Ghee, milk mawa, and pistachio garnish"
                className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
            {/* Cultural caption */}
            <div className="mt-4 p-4 rounded-xl bg-light-beige/70 border border-primary/20 text-xs sm:text-sm text-deep-brown">
              <span className="font-semibold block font-serif text-primary-dark mb-1">
                Temple Tradition & Pure Satvik Sanctity:
              </span>
              <span>
                Inspired by the sanctified prasad traditions of Shri Nilkanthdham Poicha, prepared with 100% Pure Premium Ghee, uncompromised hygiene, and spiritual devotion.
              </span>
            </div>
          </div>

          {/* Detailed SEO Storytelling */}
          <div className="lg:col-span-6 space-y-5 text-muted-text text-base sm:text-lg leading-relaxed">
            {/* Google Featured Snippet Quick Answer Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-primary/10 border-2 border-primary/30 text-deep-brown">
              <span className="font-serif font-bold text-sm sm:text-base text-primary-dark block mb-1">
                Quick Answer: What is Kopra Pak (Nariyal Barfi)?
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-deep-brown/90 font-medium">
                <strong>Kopra Pak</strong> (also known as <em>Coconut Barfi</em> or <em>Nariyal Barfi</em>) is a traditional royal Indian sweet made by roasting fresh tender grated coconut in <strong>100% Pure Premium Ghee</strong>, combined with slow-simmered whole milk mawa (khoya), green cardamom, and Kashmiri saffron. It delivers a succulent, melt-in-the-mouth fudge texture and is 100% Farali (fasting-friendly) and naturally gluten-free.
              </p>
            </div>

            <p>
              <strong className="text-deep-brown font-serif">Kopra Pak</strong>{" "}
              (also famously known across India as <strong className="text-deep-brown">Coconut Barfi</strong> or <strong className="text-deep-brown">Nariyal Barfi</strong>) is Gujarat’s treasured culinary masterpiece. In Vedic tradition, coconut (<em>Shriphal</em>) is revered as the divine fruit of prosperity and auspicious beginnings, making Kopra Pak the foremost blessed sweet for sacred pujas, Diwali celebrations, weddings, and fasts.
            </p>
            <p>
              Unlike mass-produced commercial barfis made from dry defatted coconut powder and hydrogenated palm fats, authentic Kopra Pak demands master halwai dedication: freshly grated mature coconut is gently roasted in 100% Pure Premium Ghee, united with slow-condensed whole milk mawa (khoya), and bathed in single-string cane sugar syrup scented with royal Kashmiri saffron and stone-pounded green cardamom.
            </p>

            <div className="space-y-3 pt-2 text-sm text-dark-text">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-muted-green flex-shrink-0" />
                <span>
                  Fresh tender grated coconut roasted in 100% Pure Premium Ghee (zero palm oil or dalda)
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-muted-green flex-shrink-0" />
                <span>
                  Slow-simmered whole milk mawa providing a velvety, juicy melt-in-the-mouth fudge texture
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-muted-green flex-shrink-0" />
                <span>
                  Infused with certified Kashmiri saffron (kesar), stone-ground green elaichi & slivered pistachios
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-muted-green flex-shrink-0" />
                <span>
                  100% naturally gluten-free & sacred Farali sweet (approved for Ekadashi & Vrat fasting)
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <Button
                to="/ingredients"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                View Pure Ingredients
              </Button>
              <Button
                to="/about"
                variant="outline"
              >
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;
