import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Award, Heart, Layers, CheckCircle, PackageCheck, Flame } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Flame className="w-6 h-6 text-primary" />,
      title: '100% Pure Premium Ghee',
      description: 'Roasted and simmered exclusively in pure clarified cow butter. Zero dalda, zero palm oil, or hydrogenated vegetable fats.',
    },
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: 'Tender Grated Fresh Coconut',
      description: 'Crafted from select mature coastal coconuts grated into tender flakes retaining their natural coconut milk and rich aroma.',
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: 'Slow-Cooked Fresh Milk Mawa',
      description: 'Simmered with pure whole-milk khoya, delivering an authentic velvety fudge texture that melts smoothly on your palate.',
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: 'Royal Kashmiri Kesar & Cardamom',
      description: 'Infused with real Grade-1 Kashmiri saffron threads and stone-pounded green cardamom with zero synthetic food aromas.',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: 'Farali & Naturally Gluten-Free',
      description: '100% compliant with religious fasting (Vrat, Ekadashi, Navratri), handcrafted in a pristine Satvik temple-inspired kitchen.',
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-primary" />,
      title: 'Luxury Keepsake Gift Packaging',
      description: 'Vacuum-sealed in protective food-grade trays inside gold-foiled gift boxes, available at ₹130 (250g), ₹260 (500g), and ₹519 (1kg) with express pan-India delivery.',
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="why-choose-us">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DISTINCTIVE EXCELLENCE"
          title="Why Choose Our Kopra Pak?"
          subtitle="Every slice embodies devotional purity, Pure Premium Ghee roasting, rich milk mawa, and authentic melt-in-the-mouth Gujarati tradition."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {reasons.map((item, index) => (
            <Card key={index} className="!p-3.5 sm:!p-6 lg:!p-7 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-light-beige flex items-center justify-center mb-3 sm:mb-4 border border-gold/30 text-primary [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-lg lg:text-xl text-deep-brown mb-1 sm:mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-text text-xs sm:text-sm lg:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
