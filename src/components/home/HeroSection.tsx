import React from "react";
import { motion } from "framer-motion";
import { Star, Truck, ShieldCheck, ExternalLink } from "lucide-react";
import { kopraPakProduct } from "../../data/products";
import { WhatsAppButton } from "../common/WhatsAppButton";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-cream pt-3 sm:pt-5 lg:pt-6 pb-6 sm:pb-8 lg:pb-9 flex items-center">
      <div className="max-w-7xl xl:max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* Left Column: Focused SEO Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-3 sm:space-y-4 text-center lg:text-left flex flex-col justify-center"
          >
            {/* Elegant Text Kicker */}
            <div className="flex items-center justify-center lg:justify-start gap-2 font-jost text-xs sm:text-sm font-bold tracking-[0.22em] text-gold-dark uppercase">
              <span className="w-6 h-px bg-gold/60" />
              <span>100% Pure Premium Ghee • Farali & Vrat Special</span>
            </div>

            {/* Primary SEO Heading */}
            <div className="space-y-1">
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-deep-brown font-normal tracking-tight leading-[1.15]">
                Traditional{" "}
                <span className="block text-primary-dark italic font-serif">
                  Kopra Pak (Coconut Barfi)
                </span>
              </h1>
              <p className="font-serif italic text-primary-dark text-xs sm:text-sm tracking-wide">
                Fresh • 100% Pure Premium Ghee & Milk Mawa • Authentic Nariyal
                Barfi • Bhagvat Prasadam
              </p>
            </div>

            {/* High-Impact SEO Description */}
            <p className="text-muted-text text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Savor fresh authentic{" "}
              <strong className="text-deep-brown font-semibold">
                Kopra Pak (Coconut Barfi / Nariyal Barfi)
              </strong>
              , a pure Gujarati royal sweet handcrafted with devotion by Bhagvat
              Prasadam. Made from sun-ripened grated coconut, 100% Pure Premium
              Ghee, rich slow-cooked milk mawa, and royal Kashmiri saffron, this
              sacred Farali delicacy melts softly on your tongue.
            </p>

            {/* Clean Keyword Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-deep-brown pt-0.5">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary-dark" />
                100% Pure Premium Ghee
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Fresh Tender Grated Coconut (Kopra)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Farali & 100% Gluten-Free
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Slow-Simmered Mawa, Kesar & Cardamom
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                Sacred Bhog, Diwali & Gifting
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <WhatsAppButton
                context="hero"
                size="md"
                className="w-full sm:w-auto font-semibold justify-center"
              >
                Order on WhatsApp
              </WhatsAppButton>

              <a
                href={kopraPakProduct.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-deep-brown font-bold text-sm px-6 py-3 rounded-full shadow-sm hover:shadow transition-all active:scale-95"
              >
                <span>Buy on Bhagvat Prasadam</span>
                <ExternalLink className="w-4 h-4 text-deep-brown" />
              </a>

              <a
                href={kopraPakProduct.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-dark font-bold hover:underline py-1 sm:py-0 inline-flex items-center gap-1"
              >
                <span>View 250g, 500g & 1kg Packs</span>
                <ExternalLink className="w-3 h-3 text-primary-dark" />
              </a>
            </div>

            {/* Reassurance & Social Proof */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-xs text-muted-text">
              <div className="flex items-center gap-1">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-deep-brown">4.9/5 Rating</span>
                <span>(1,840+ Reviews)</span>
              </div>
              <span className="hidden sm:inline text-gold/60">•</span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-primary-dark" />
                Pan-India Express Dispatch (Mumbai, Delhi, Bengaluru, Surat &
                19,000+ PIN Codes)
              </span>
            </div>
          </motion.div>

          {/* Right Column: Magnified Showcase Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex items-center justify-center relative"
          >
            <div className="w-full flex items-center justify-center relative group">
              <div className="relative rounded-3xl overflow-hidden p-1.5 sm:p-2 max-w-[340px] sm:max-w-md lg:max-w-lg">
                <img
                  src="/images/kopra-pak-hero2.webp"
                  alt="Authentic Gujarati Kopra Pak (Coconut Barfi / Nariyal Barfi) sweet cubes garnished with slivered pistachios and traditional festive gift box by Bhagvat Prasadam"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                  width="1000"
                  height="880"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
