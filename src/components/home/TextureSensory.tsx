import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const TextureSensory: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream relative overflow-hidden" id="texture-sensory">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Macro Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gold/40 bg-white">
              <img
                src="/images/kopra-pak-macro-texture.jpg"
                alt="Extreme macro texture of authentic Kopra Pak (Coconut Barfi / Nariyal Barfi) sweet cube, showing moist grated coconut shreds glistening with Pure Premium Ghee, mawa, and Kashmiri saffron"
                className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-primary text-deep-brown p-3.5 rounded-2xl border border-primary-hover shadow-md hidden sm:block max-w-[220px]">
              <span className="font-serif font-bold text-sm block mb-0.5">
                Melt-In-Mouth
              </span>
              <span className="text-[11px] text-deep-brown/85 font-medium">Never dry, never chewy. Moist coconut shreds slow-cooked in Pure Premium Ghee and fresh milk mawa.</span>
            </div>
          </div>

          {/* Right: Dramatic Sensory Copy */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <span className="font-jost text-primary font-bold text-xs uppercase tracking-[0.22em] flex items-center gap-2">
              <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
              THE SENSORY DISTINCTION
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-deep-brown tracking-tight leading-tight">
              The Signature <span className="text-primary italic font-serif">Melt-in-the-Mouth Velvety Coconut Fudge</span>
            </h2>

            <blockquote className="border-l-2 border-primary pl-4 text-primary font-serif italic text-base sm:text-lg">
              "Succulent, soft, and delicately aromatic, the sensation of moist grated coconut melting gently into velvety dairy richness is the hallmark of authentic Kopra Pak."
            </blockquote>

            <p className="text-muted-text text-sm sm:text-base leading-relaxed">
              When you gently part a slice of Kopra Pak, you reveal a glistening mosaic of moist, tender coconut shreds enveloped in rich slow-simmered milk mawa and Pure Premium Ghee. The moment it touches your tongue, the delicate confection melts effortlessly with warm tropical sweetness, elevated by the royal floral warmth of Kashmiri saffron, cardamom aroma, and the crisp nutty crunch of emerald pistachios.
            </p>

            <div className="pt-2">
              <Button
                to="/process"
                variant="outline"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Discover Our Craft
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TextureSensory;
