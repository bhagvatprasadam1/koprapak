export interface FAQItem {
  id: string;
  category: 'Product' | 'Ingredients' | 'Preparation' | 'Storage' | 'Delivery' | 'Gifting' | 'Bulk Orders';
  question: string;
  answer: string;
  featuredOnHome?: boolean;
}

export const faqsData: FAQItem[] = [
  {
    id: 'what-is-kopra-pak',
    category: 'Product',
    question: 'What is Kopra Pak (Coconut Barfi) and why is it so famous in Gujarat?',
    answer: 'Kopra Pak (also known as Nariyal Barfi, Coconut Barfi, or કોપરા પાક) is one of Gujarat and India’s most revered traditional royal sweets. Made by slow-cooking fresh grated coconut (kopra) in 100% Pure Premium Ghee, rich milk mawa (khoya), and sugar syrup infused with Kashmiri saffron and green cardamom, it features a luscious, soft fudge-like consistency and an intoxicating tropical aroma that melts delicately in your mouth.',
    featuredOnHome: true,
  },
  {
    id: 'is-kopra-pak-farali-for-fasting',
    category: 'Product',
    question: 'Is Kopra Pak suitable for religious fasting (Farali / Vrat)?',
    answer: 'Yes! Kopra Pak is traditionally one of the most popular and sacred Farali (fasting-friendly) sweets in India. Because it contains only coconut, pure milk mawa, Pure Premium Ghee, sugar, cardamom, and nuts—with absolutely no grains, wheat, flour, besan, or artificial fillers—it is widely enjoyed during Hindu fasting observances such as Ekadashi, Navratri, Mahashivratri, Janmashtami, and Shravan month.',
    featuredOnHome: true,
  },
  {
    id: 'is-it-made-in-pure-premium-ghee',
    category: 'Ingredients',
    question: 'Is Bhagvat Prasadam Kopra Pak made in 100% Pure Premium Ghee?',
    answer: 'Yes! Our Kopra Pak is prepared exclusively in 100% pure clarified cow butter (premium ghee). We strictly reject commercial palm oil, dalda, vanaspati, and cheap hydrogenated fats. Pure Premium Ghee is essential for unlocking the authentic rich aroma, succulent moisture, and sacred temple-style flavor of traditional Gujarati sweets.',
    featuredOnHome: true,
  },
  {
    id: 'what-ingredients-used',
    category: 'Ingredients',
    question: 'What ingredients are used in Bhagvat Prasadam Kopra Pak?',
    answer: 'Our Kopra Pak is made with pristine, honest ingredients: selected grated and desiccated coconut flakes (kopra), 100% Pure Premium Ghee, fresh slow-cooked whole milk mawa (khoya), single-string refined cane sugar syrup, stone-ground green cardamom (elaichi), certified Kashmiri Mongra saffron (kesar), slivered emerald pistachios, and almonds. Zero preservatives, zero palm oil, zero synthetic colorants.',
    featuredOnHome: true,
  },
  {
    id: 'taste-and-texture',
    category: 'Product',
    question: 'What does authentic Kopra Pak taste and feel like?',
    answer: 'Authentic Kopra Pak delivers a soft, velvety fudge-like texture with a succulent, juicy coconut grain. It is never dry, rubbery, or chalky. The deep richness of premium ghee and milk mawa melts on your tongue, followed by the refreshing tropical sweetness of coconut, the warm perfume of green cardamom, and the subtle floral notes of royal Kashmiri saffron.',
    featuredOnHome: true,
  },
  {
    id: 'shelf-life-and-storage',
    category: 'Storage',
    question: 'What is the shelf life of Kopra Pak and how should it be stored?',
    answer: 'Kopra Pak retains peak freshness for 20 to 25 days at cool ambient room temperature, and up to 45 days when refrigerated in an airtight container. Keep the box away from direct heat and moisture. When refrigerated, allow the barfi to rest at room temperature for 15 minutes before serving so the premium ghee and mawa regain their tender, melt-in-the-mouth texture.',
    featuredOnHome: true,
  },
  {
    id: 'how-different-from-market-coconut-sweets',
    category: 'Product',
    question: 'How is Bhagvat Prasadam Kopra Pak different from regular commercial coconut sweets?',
    answer: 'Many commercial sweet shops cut costs by using dried coconut powder stripped of its natural oils, thickening with maida or cornstarch, substituting ghee with palm oil, and adding synthetic coconut essence. Bhagvat Prasadam Kopra Pak uses whole oil-rich grated coconut, slow-cooked fresh dairy mawa, 100% Pure Premium Ghee, and real spices. It is prepared in a devotional, 100% Satvik kitchen inspired by Shri Nilkanthdham Poicha.',
    featuredOnHome: true,
  },
  {
    id: 'festivals-and-gifting',
    category: 'Gifting',
    question: 'Can I order Kopra Pak for Diwali, Raksha Bandhan, and festive gifting?',
    answer: 'Yes! Kopra Pak is an auspicious sweet synonymous with Diwali, Rakhi, Ganesh Utsav, and family celebrations. Bhagvat Prasadam offers exquisite royal gold-embossed gift boxes in 250gm, 500gm, and 1kg sizes that make cherished gifts for family, relatives, wedding return favors, and corporate clients.',
    featuredOnHome: true,
  },
  {
    id: 'pan-india-delivery',
    category: 'Delivery',
    question: 'Do you deliver Kopra Pak across India, including Mumbai, Ahmedabad & Delhi?',
    answer: 'Yes! We ship across India through express air and surface courier networks to Mumbai, Ahmedabad, Surat, Vadodara, Pune, Delhi NCR, Bengaluru, Hyderabad, Kolkata, Chennai, and over 20,000+ pin codes. Each sweet box is vacuum sealed with food-grade protective inner trays to ensure your Kopra Pak arrives fresh, moist, and intact.',
    featuredOnHome: true,
  },
  {
    id: 'available-pack-sizes-and-prices',
    category: 'Product',
    question: 'What pack sizes and prices are available for Kopra Pak?',
    answer: 'Our Kopra Pak is available in three convenient options on Bhagvat Prasadam: 250gm at ₹130 (Original ₹176), 500gm at ₹260 (Original ₹352), and 1kg at ₹519 (Original ₹705 - Most Popular). All options offer 100% Pure Premium Ghee and mawa craftsmanship.',
    featuredOnHome: false,
  },
  {
    id: 'bulk-and-corporate-orders',
    category: 'Bulk Orders',
    question: 'How can I place bulk orders for weddings, Diwali corporate gifts, or temple pujas?',
    answer: 'We offer specialized bulk packaging, custom logo branding, and dedicated corporate gifting hampers. You can connect directly with our dispatch coordinators via WhatsApp at +91-8850011652 or submit our online inquiry form for custom bulk quotations and priority delivery schedules.',
    featuredOnHome: false,
  },
  {
    id: 'is-kopra-pak-gluten-free',
    category: 'Ingredients',
    question: 'Is Kopra Pak naturally gluten-free and 100% vegetarian?',
    answer: 'Yes! Kopra Pak is made entirely from coconut, dairy (Pure Premium Ghee, milk mawa), sugar, saffron, cardamom, and nuts. It contains zero wheat, flour, or starch, making it 100% naturally gluten-free and prepared strictly in a vegetarian, Satvik kitchen.',
    featuredOnHome: false,
  },
  {
    id: 'puja-and-temple-prasad',
    category: 'Product',
    question: 'Can this Kopra Pak be offered as sacred temple bhog and deity prasad?',
    answer: 'Absolutely. Coconut (Shriphal) is the supreme sacred offering in Vedic Sanatan tradition representing purity and surrender. Handcrafted with reverence in our Satvik kitchen inspired by Shri Nilkanthdham Poicha, Bhagvat Prasadam Kopra Pak adheres to rigorous standards of purity and hygiene, making it ideal for deity bhog and sacred temple offerings.',
    featuredOnHome: false,
  },
];
