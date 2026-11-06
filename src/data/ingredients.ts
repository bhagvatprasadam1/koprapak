export interface IngredientItem {
  id: string;
  name: string;
  gujaratiName: string;
  category: string;
  shortDesc: string;
  detailedRole: string;
  sourcing: string;
}

export const ingredientsData: IngredientItem[] = [
  {
    id: 'coconut',
    name: 'Selected Grated & Desiccated Coconut (Kopra)',
    gujaratiName: 'પ્રીમિયમ છીણેલું કોપરું',
    category: 'The Tropical Foundation & Body',
    shortDesc: 'Pure sun-ripened coconut grated to precise medium flakes to retain natural coconut milk and moisture.',
    detailedRole: 'Forms the succulent core of Kopra Pak. Naturally sweet, fiber-rich, and laden with wholesome medium-chain fatty acids that impart an unforgettable tropical aroma and juicy chew.',
    sourcing: 'Hand-picked mature coconuts harvested from certified coastal groves and cold-processed to retain pure natural oils.',
  },
  {
    id: 'premium-ghee',
    name: '100% Pure Clarified Butter (Premium Ghee)',
    gujaratiName: 'શુદ્ધ પ્રીમિયમ ઘી',
    category: 'The Soul of Roasting & Aroma',
    shortDesc: 'Slow-simmered golden premium ghee used for roasting the grated coconut to tender perfection.',
    detailedRole: 'Gently blooms the natural flavors of the coconut without caramelizing or drying it out. Imparts the authentic royal Gujarati taste and luscious melt-in-mouth richness.',
    sourcing: 'Traditional bilona-churned pure milk fat sourced from ethical dairy cooperatives in Gujarat.',
  },
  {
    id: 'mawa',
    name: 'Slow-Cooked Milk Mawa (Fresh Khoya)',
    gujaratiName: 'શુદ્ધ દૂધનો તાજો માવો',
    category: 'Velvety Fudge Texture & Creaminess',
    shortDesc: 'Whole dairy milk simmered slowly in iron vessels until condensed into soft, rich milk solids.',
    detailedRole: 'Blends with the grated coconut to transform the mixture into a soft, fudge-like delicacy. Ensures every slice stays tender, creamy, and velvety rather than dry or flaky.',
    sourcing: 'Prepared fresh daily from pure whole milk in our sanctified temple kitchen.',
  },
  {
    id: 'sugar-syrup',
    name: 'Crystal Cane Sugar Syrup (Ek-Taar Chaashni)',
    gujaratiName: 'એક તારની કેસરિયા ચાસણી',
    category: 'Moisture Binder & Gentle Sweetness',
    shortDesc: 'Sulphur-free pharmaceutical cane sugar simmered to an exact single-string consistency.',
    detailedRole: 'Penetrates deeply into the coconut flakes, locking in succulence and delivering balanced, nuanced sweetness that allows the natural coconut flavor to shine.',
    sourcing: 'Refined sulphur-free premium crystal cane sugar from certified non-GMO farms.',
  },
  {
    id: 'saffron',
    name: 'Royal Kashmiri Mongra Saffron (Kesar)',
    gujaratiName: 'કાશ્મીરી કેસર',
    category: 'Royal Golden Glow & Fragrance',
    shortDesc: 'Deep crimson saffron stigmas steeped in warm milk to yield an amber-gold aura.',
    detailedRole: 'Graces the crown of the Kopra Pak with its iconic golden layer and infuses an earthy, royal floral perfume that lingers delightfully on the palate.',
    sourcing: 'Certified Grade-1 pure Mongra saffron harvested from the valleys of Pampore, Kashmir.',
  },
  {
    id: 'cardamom',
    name: 'Stone-Pounded Green Cardamom (Elaichi)',
    gujaratiName: 'લીલી ઈલાયચી પાવડર',
    category: 'Festive Aromatic Harmony',
    shortDesc: 'Freshly de-podded green cardamom seeds crushed gently into a fragrant aromatic spice.',
    detailedRole: 'Cuts through the natural richness of ghee and mawa with an uplifting herbal-citrus sparkle, creating the hallmark festive aroma of traditional Indian sweet-making.',
    sourcing: 'Directly sourced first-crop green cardamom pods from the misty hills of Idukki, Kerala.',
  },
  {
    id: 'pistachios',
    name: 'Emerald Pistachios & Almond Slivers (Pista-Badam)',
    gujaratiName: 'લીલા પિસ્તા અને બદામની કતરણ',
    category: 'Royal Festive Crown & Nutty Crunch',
    shortDesc: 'Hand-slivered vibrant green pistachios and sweet Mamra almonds scattered over every piece.',
    detailedRole: 'Provides an exquisite visual contrast against the coconut and golden kesar layers, while offering a delicate, satisfying nutty crunch with every bite.',
    sourcing: 'Selected high-grade sun-dried green kernel pistachios and sweet Iranian Mamra almonds.',
  },
  {
    id: 'silver-vark',
    name: 'Pure Vegetarian Silver Leaf (Chandi Vark)',
    gujaratiName: 'શુદ્ધ ચાંદીનો વરખ',
    category: 'Sacred Deity Bhog & Royal Finery',
    shortDesc: '100% vegetarian, food-grade beaten silver leaf delicately draped across the set confection.',
    detailedRole: 'Signifies sacred royal offering fit for deity bhog and auspicious festivities. Reflects traditional Indian regal hospitality for auspicious gifting.',
    sourcing: 'Certified machine-beaten 100% vegetarian food-grade pure silver leaf complying with strict safety standards.',
  },
];
