import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export interface NutritionFact {
  nutrient: string;
  amount: string;
  dailyValue?: string;
  benefit: string;
}

export const nutritionFacts: NutritionFact[] = [
  {
    nutrient: 'Energy / Calories',
    amount: '445 kcal',
    dailyValue: '22%',
    benefit: 'Sustained festive energy from Pure Premium Ghee, grated coconut MCTs & rich milk mawa',
  },
  {
    nutrient: 'Coconut & Premium Ghee Fats',
    amount: '22.8 g',
    dailyValue: '29%',
    benefit: 'Wholesome medium-chain triglycerides (MCTs) & 100% pure premium ghee for melt-in-mouth mouthfeel',
  },
  {
    nutrient: 'Dairy Protein',
    amount: '6.2 g',
    dailyValue: '13%',
    benefit: 'Wholesome natural dairy protein from slow-simmered whole milk mawa (khoya)',
  },
  {
    nutrient: 'Total Carbohydrates',
    amount: '54.0 g',
    dailyValue: '18%',
    benefit: 'Balanced sweetness from single-string cane syrup infused with Kashmiri saffron',
  },
  {
    nutrient: 'Dietary Fiber',
    amount: '4.5 g',
    dailyValue: '16%',
    benefit: 'Rich natural prebiotic dietary fiber from unadulterated grated coconut meat',
  },
  {
    nutrient: 'Dairy Calcium & Minerals',
    amount: '140 mg',
    dailyValue: '14%',
    benefit: 'Natural bone-supporting calcium and phosphorus from traditional milk mawa',
  },
  {
    nutrient: 'Pistachios & Almonds',
    amount: '110 mg',
    dailyValue: '12%',
    benefit: 'Plant zinc, magnesium, and antioxidant vitamin E from crunchy nut garnishes',
  },
  {
    nutrient: 'Kashmiri Kesar & Elaichi',
    amount: 'Active Crocin',
    dailyValue: '100% Pure',
    benefit: 'Potent natural antioxidants, carminative digestive soothe, and royal festive aroma',
  },
];

export const NutritionTable: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-10" id="nutrition-facts">
      <div className="bg-white rounded-3xl border border-light-beige p-6 sm:p-10 lg:p-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-light-beige">
          <div className="space-y-2">
            <span className="font-jost text-gold font-bold text-xs uppercase tracking-[0.22em] flex items-center gap-2">
              <span className="inline-block w-3 h-0.5 bg-gold/70"></span>
              AUTHENTIC QUALITY & PURITY PROFILE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-deep-brown font-normal leading-tight">
              Nutritional Facts & premium ghee Purity
            </h3>
            <p className="text-muted-text text-sm sm:text-base max-w-2xl leading-relaxed">
              Serving Size: 100g (Approx. 2-3 Slices). Handcrafted with devotion using pure grated coconut, 100% Pure Premium Ghee, slow-cooked milk mawa, Kashmiri saffron, and stone-pounded green cardamom by Bhagvat Prasadam.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200 self-start md:self-end">
            <ShieldCheck className="w-4 h-4 flex-shrink-0 text-amber-600" />
            <span>100% Pure Premium Ghee • Farali & Gluten-Free</span>
          </div>
        </div>

        {/* Nutrition Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
          {nutritionFacts.map((item, idx) => (
            <div
              key={idx}
              className="bg-cream/60 rounded-2xl p-4 sm:p-5 border border-light-beige hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted-text font-medium mb-1.5">
                  <span>{item.nutrient}</span>
                  {item.dailyValue && (
                    <span className="text-[10px] font-bold text-gold uppercase px-1.5 py-0.5 rounded bg-white border border-light-beige">
                      {item.dailyValue}
                    </span>
                  )}
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-deep-brown mb-2 tracking-tight">
                  {item.amount}
                </div>
              </div>
              <p className="text-xs text-muted-text leading-relaxed border-t border-light-beige/70 pt-2.5">
                {item.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote Trust Badge */}
        <div className="mt-8 pt-5 border-t border-light-beige/70 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-text">
          <div className="flex items-center gap-4 flex-wrap font-medium">
            <span className="flex items-center gap-1.5 text-deep-brown">
              <CheckCircle2 className="w-4 h-4 text-muted-green" />
              100% Pure Premium Ghee
            </span>
            <span className="flex items-center gap-1.5 text-deep-brown">
              <CheckCircle2 className="w-4 h-4 text-muted-green" />
              Naturally Gluten-Free & Farali
            </span>
            <span className="flex items-center gap-1.5 text-deep-brown">
              <CheckCircle2 className="w-4 h-4 text-muted-green" />
              Real Saffron & Fresh Mawa
            </span>
            <span className="flex items-center gap-1.5 text-deep-brown">
              <CheckCircle2 className="w-4 h-4 text-muted-green" />
              100% Satvik Purity
            </span>
          </div>
          <div className="text-[11px] text-muted-text/80 italic">
            *Percent Daily Values (DV) are based on a 2,000 calorie diet.
          </div>
        </div>

      </div>
    </section>
  );
};
