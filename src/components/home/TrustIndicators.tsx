import React from 'react';
import { Flame, Award, HeartHandshake, Clock } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: '100% Pure Premium Ghee',
      description: 'Slow-simmered pure clarified butter imparting the divine, comforting fragrance of Gujarati tradition.',
    },
    {
      icon: <Flame className="w-6 h-6 text-primary" />,
      title: 'Tender Grated Coconut',
      description: 'Selected mature coastal coconuts grated into juicy flakes rich in natural coconut oils.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-primary" />,
      title: 'Fresh Milk Mawa & Kesar',
      description: 'Slow-reduced whole milk khoya infused with royal Kashmiri saffron and stone-pounded cardamom.',
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: 'Farali & Freshly Crafted',
      description: '100% naturally gluten-free and fasting-friendly, dispatched fresh in airtight sealed packaging.',
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" aria-label="Trust and Quality Pillars">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 p-3 sm:p-4 rounded-xl bg-white/70 border border-light-beige hover:border-primary transition-colors"
            >
              <div className="p-2 sm:p-2.5 rounded-lg bg-cream border border-gold/20 flex-shrink-0 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                {pillar.icon}
              </div>
              <div>
                <h3 className="font-serif font-bold text-deep-brown text-sm sm:text-base leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-muted-text text-[11px] sm:text-xs md:text-sm mt-0.5 sm:mt-1 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Express Pan-India Delivery & City Metro Shipping SEO Strip */}
        <div className="mt-4 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-primary/25 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-3 text-deep-brown">
            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-deep-brown flex-shrink-0">
              ✈
            </span>
            <div>
              <span className="font-bold text-deep-brown block sm:inline">
                Express Pan-India Delivery:
              </span>{" "}
              <span className="text-muted-text">
                Fresh dispatch to Mumbai, Ahmedabad, Surat, Delhi NCR, Bengaluru, Hyderabad, Pune, Kolkata, Jaipur & 19,000+ PIN codes across India.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-primary-dark whitespace-nowrap bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/30">
            <span>20–25 Days Room-Temperature Shelf Life</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
