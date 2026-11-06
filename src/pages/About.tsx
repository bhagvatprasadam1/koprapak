import React from "react";
import { SEOHead } from "../components/seo/SEOHead";
import { seoData } from "../data/seo";
import { getBreadcrumbSchema } from "../lib/seo";
import { SectionHeading } from "../components/common/SectionHeading";
import { Button } from "../components/common/Button";
import { ArrowRight, Heart, Award, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  const schemas = [
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Our Story", path: "/about" },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.about.title}
        description={seoData.about.description}
        keywords={seoData.about.keywords}
        canonicalPath={seoData.about.canonicalPath}
        ogImage={seoData.about.ogImage}
        schema={schemas}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Our Story</span>
        </nav>

        {/* Master Our Story Hero Banner */}
        <div className="mb-8 sm:mb-10 lg:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-light-beige/80 bg-cream-card shadow-sm hover:shadow-md transition-shadow duration-300">
          <picture className="block w-full">
            <source srcSet="/images/kopra-pak-story-banner.webp" type="image/webp" />
            <img
              src="/images/kopra-pak-story-banner.png"
              alt="Our Story banner - Authentic Traditional Kopra Pak (Coconut Barfi / Nariyal Barfi) confectionery heritage handcrafted in Pure Premium Ghee by Bhagvat Prasadam"
              width="1024"
              height="575"
              className="w-full h-auto block select-none transition-transform duration-700 ease-out hover:scale-[1.01]"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="font-jost text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-primary flex items-center justify-center gap-2 mb-3">
            <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
            DEVOTIONAL CRAFTSMANSHIP & SACRED PURITY
            <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-deep-brown font-normal tracking-tight leading-tight">
            Preserving Sacred Purity & Authentic Sweet Tradition
          </h1>
          <p className="mt-4 text-muted-text text-base sm:text-lg leading-relaxed">
            In an era of commercial sweet shops using industrial palm oils, starch fillers, and artificial aromas, we safeguard the sanctified Gujarati tradition of authentic Pure Premium Ghee Kopra Pak (Coconut Barfi) handcrafted by Bhagvat Prasadam.
          </p>
        </div>

        {/* Narrative Block 1: The Origin */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-light-beige mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-dark block">
                THE SACRED ROOTS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-deep-brown font-bold">
                Why We Champion Authentic Pure Premium Ghee Kopra Pak
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Most modern confectionery relies on commercial shortcut ingredients—defatted desiccated coconut powder, palm oil, refined flour binders, and synthetic coconut essence. In this industrial rush, the sacred essence of traditional temple sweets was lost.
              </p>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Inspired by the sanctified prasad traditions of Shri Nilkanthdham Poicha, we dedicated our confectionery to creating the purest festive delight: select mature coconuts hand-grated into tender flakes, gently roasted in <Link to="/ingredients" className="text-primary-dark font-semibold hover:underline">100% Pure Premium Ghee</Link>, simmered with whole milk mawa (khoya) through our <Link to="/process" className="text-primary-dark font-semibold hover:underline">traditional 6-step halwai method</Link>, and bathed in saffron-cardamom syrup. Auspicious, 100% Farali (fasting-friendly), naturally gluten-free, and full of festive joy.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border-2 border-gold/40">
                <img
                  src="/images/kopra-pak-closeup.webp"
                  alt="Handcrafted Gujarati Kopra Pak (Coconut Barfi / Nariyal Barfi) sweet cubes prepared with Pure Premium Ghee and devotional craftsmanship by Bhagvat Prasadam"
                  className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="600"
                  height="450"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Three Guiding Philosophies */}
        <div className="mb-8 sm:mb-10 lg:mb-12" id="philosophy">
          <SectionHeading
            eyebrow="OUR FOUNDING PILLARS"
            title="The Philosophy of Craftsmanship"
            subtitle="The uncompromising standards that guide every single batch we prepare."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-light-beige text-primary flex items-center justify-center mb-4 sm:mb-5 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown mb-2 sm:mb-2.5">
                  Ingredient Sanctity
                </h3>
                <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
                  100% pure clarified premium ghee, fresh grated coconut, slow-cooked whole milk mawa, Kashmiri saffron, stone-pounded green cardamom, and emerald pistachios. Zero palm oil, zero dalda, zero flour fillers.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-light-beige text-primary flex items-center justify-center mb-4 sm:mb-5 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown mb-2 sm:mb-2.5">
                  Patience Over Scale
                </h3>
                <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
                  Gently roasting tender coconut in Pure Premium Ghee over gentle embers requires steady mastery. We never rush the reduction of milk mawa, ensuring every particle binds into a tender, moist fudge that stays juicy for weeks.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-light-beige text-primary flex items-center justify-center mb-4 sm:mb-5 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown mb-2 sm:mb-2.5">
                  Small-Batch Freshness
                </h3>
                <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
                  We prepare our Kopra Pak fresh in small Satvik batches. Each tray is leveled and sliced with devotion, cooled naturally, and sealed in airtight packaging for express pan-India dispatch.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Heritage Grid: 2 columns on all devices */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/40 bg-white">
            <img
              src="/images/kopra-pak-gift-box.jpg"
              alt="Luxury festive Kopra Pak (Coconut Barfi / Nariyal Barfi) keepsake sweet box with brass diyas for Diwali, Farali fasting, and temple prasad by Bhagvat Prasadam"
              className="w-full h-44 sm:h-72 lg:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/40 bg-white">
            <img
              src="/images/kopra-pak-macro-texture.jpg"
              alt="Melt-in-mouth soft fudge texture of authentic Gujarati Kopra Pak (Coconut Barfi / Nariyal Barfi) enriched with tender coconut shreds and pistachios"
              className="w-full h-44 sm:h-72 lg:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* Modern Presentation & D2C Quality */}
        <div className="bg-deep-brown text-cream rounded-3xl p-8 sm:p-12 border border-gold/40 mb-8 sm:mb-10 lg:mb-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-gold font-bold text-xs uppercase tracking-widest">
              HERITAGE MEETS MODERN FESTIVITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
              Bringing Pure Temple Sweetness to Every Celebration
            </h2>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed">
              While our recipe draws from sacred Gujarati culinary heritage inspired by Shri Nilkanthdham Poicha, our packaging is designed for modern celebrations, vrat observances, and corporate gifting. Sealed in moisture-barrier boxes with gold-foil embossing, our Kopra Pak reaches homes across India with guaranteed freshness and divine Pure Premium Ghee aroma.
            </p>
            <div className="pt-4">
              <Button
                to="/"
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Experience Our Kopra Pak
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
