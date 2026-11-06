export interface ProductWeightOption {
  weight: string;
  price: string;
  originalPrice: string;
  discount: string;
  pieces: string;
  serving: string;
  idealFor: string;
  popular?: boolean;
}

export interface ProductDetail {
  id: string;
  title: string;
  hindiTitle: string;
  regionalName: string;
  vendor: string;
  productUrl: string;
  tagline: string;
  description: string;
  origin: string;
  textureDescription: string;
  weights: ProductWeightOption[];
  shelfLife: string;
  storage: string;
  packaging: string;
  ingredients: string[];
  allergens: string;
  highlights: string[];
  imageUrl: string;
  galleryImages: string[];
  videoUrl?: string;
}

export const kopraPakProduct: ProductDetail = {
  id: 'kopra-pak-coconut-barfi-nariyal-barfi-traditional-indian-sweet',
  title: 'Kopra Pak | Coconut Barfi | Traditional Gujarati Sweet',
  hindiTitle: 'खोपरा पाक (नारियल बर्फी - पारंपरिक गुजराती एवं भारतीय मिठाई)',
  regionalName: 'કોપરા પાક (પરંપરાગત નાળિયેર બરફી)',
  vendor: 'Bhagvat Prasadam',
  productUrl: 'https://www.bhagvatprasadam.com/products/kopra-pak-coconut-barfi-nariyal-barfi-traditional-indian-sweet?variant=45408601669781',
  tagline: 'Handcrafted Fresh Grated Coconut in 100% Pure Premium Ghee & Milk Mawa by Bhagvat Prasadam',
  description: 'Savor fresh authentic Kopra Pak (Coconut Barfi / Nariyal Barfi), a beloved traditional Gujarati royal sweet handcrafted with devotion by Bhagvat Prasadam. Prepared using premium tender grated coconut (kopra), 100% Pure Premium Ghee, rich milk mawa, aromatic green cardamom, and royal Kashmiri saffron, this exquisite confection melts softly in your mouth with an intoxicating tropical aroma and delicate sweetness. Known as an auspicious Satvik & Farali sweet, it is ideal for religious fasting (Vrat, Ekadashi, Navratri), temple deity bhog, Diwali celebrations, weddings, and premium corporate gifting. Available in 250gm (₹130), 500gm (₹260), and 1kg (₹519) luxury airtight gift packs with express pan-India delivery to Mumbai, Ahmedabad, Surat, Delhi NCR, Bengaluru, Pune, Hyderabad, and 19,000+ pincodes.',
  origin: 'Gujarat, India (Inspired by Nilkanthdham Poicha)',
  textureDescription: 'Soft, moist, melt-in-the-mouth coconut fudge texture with a delicate tropical grain. Rich pure ghee and slow-cooked milk mawa provide a velvety richness crowned with crunchy emerald pistachios and aromatic cardamom.',
  weights: [
    {
      weight: '250gm',
      price: '₹130',
      originalPrice: '₹176',
      discount: '26% OFF',
      pieces: '8 - 10 Cubes',
      serving: '2 - 3 Persons',
      idealFor: 'Personal indulgence, daily puja prasad, farali fasting & tea-time treat',
    },
    {
      weight: '500gm',
      price: '₹260',
      originalPrice: '₹352',
      discount: '26% OFF',
      pieces: '16 - 20 Cubes',
      serving: '4 - 6 Persons',
      idealFor: 'Family celebrations, festive gatherings, vrat bhog & temple offering',
    },
    {
      weight: '1kg',
      price: '₹519',
      originalPrice: '₹705',
      discount: '26% OFF',
      pieces: '32 - 40 Cubes',
      serving: '8 - 12 Persons',
      idealFor: 'Grand festivities, Diwali gifting, weddings & corporate luxury sweet hampers',
      popular: true,
    },
  ],
  shelfLife: '20 to 25 days at cool room temperature; up to 45 days when refrigerated',
  storage: 'Store in a cool, dry place away from direct sunlight and heat. Keep sealed in an airtight container after opening. Enjoy at ambient room temperature for optimum melt-in-mouth soft texture.',
  packaging: 'Airtight food-grade freshness vacuum seal with rigid protective inner tray and luxury festive gold-foiled keepsake gift box.',
  ingredients: [
    'Premium Sun-Dried & Tender Grated Coconut (Kopra)',
    '100% Pure Clarified Butter (Premium Ghee)',
    'Traditional Slow-Cooked Milk Mawa (Khoya)',
    'Pure Pharmaceutical-Grade Cane Sugar Syrup',
    'Stone-Pounded Green Cardamom (Elaichi)',
    'Royal Kashmiri Mongra Saffron (Kesar)',
    'Emerald Green Slivered Pistachios (Pista)',
    'Crunchy Golden Almond Slivers (Badam)',
  ],
  allergens: 'Contains Dairy (Pure Premium Ghee, Milk Mawa) and Tree Nuts (Pistachios, Almonds). 100% Naturally Gluten-Free and Satvik. Made in a pure vegetarian facility.',
  highlights: [
    'Handcrafted with Devotional Reverence by Bhagvat Prasadam',
    'Rich Desiccated & Grated Coconut Roasted in 100% Pure Premium Ghee',
    'Infused with Slow-Cooked Milk Mawa, Kashmiri Kesar & Green Elaichi',
    'Naturally Gluten-Free & Sacred Farali (Vrat & Fasting Friendly)',
    'Melt-in-the-Mouth Velvety Soft Coconut Fudge Texture',
    'Zero Palm Oil, Zero Dalda, Zero Artificial Preservatives or Chemicals',
  ],
  imageUrl: '/images/kopra-pak-hero.webp',
  galleryImages: [
    '/images/kopra-pak-hero.webp',
    '/images/kopra-pak-home-banner.jpg',
    '/images/kopra-pak-story-banner.png',
    '/images/kopra-pak-festive-banner.jpg',
    '/images/kopra-pak-gift-box.jpg',
    '/images/kopra-pak-macro-texture.jpg',
    '/images/kopra-pak-ingredients-flatlay.jpg',
    '/images/kopra-pak-process-craft.jpg',
    '/images/kopra-pak-product.webp',
  ],
  videoUrl: '',
};

// Backwards compatibility alias
export const motichurLadduProduct = kopraPakProduct;
