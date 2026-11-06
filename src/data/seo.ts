export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogImage: string;
}

export const seoData: Record<string, PageSEO> = {
  home: {
    title: 'Buy Kopra Pak Online (Coconut Barfi) | Bhagvat Prasadam',
    description: 'Order fresh authentic Kopra Pak (Coconut Barfi / Nariyal Barfi) in 100% Pure Premium Ghee & milk mawa. Fast delivery to Mumbai, Delhi, Bangalore & all India.',
    keywords: 'Buy kopra pak online, coconut barfi online, nariyal barfi buy online, nariyal ki barfi, kopra pak 1kg price ₹519, kopra pak 500g price ₹260, kopra pak 250g price ₹130, pure premium ghee kopra pak, authentic gujarati sweets online, bhagvat prasadam kopra pak, nilkanthdham poicha sweets, farali sweets online delivery, vrat sweet kopra pak, ekadashi fasting sweet, diwali mithai gift box online, mawa coconut barfi, kesar kopra pak online, fresh sweet delivery mumbai, gujarati sweets delivery bangalore, kopra pak surat, खोपरा पाक, કોપરા પાક, નાળિયેર બરફી',
    canonicalPath: '/',
    ogImage: '/images/kopra-pak-product.webp',
  },
  product: {
    title: 'Order Kopra Pak Online (250g, 500g, 1kg) | Bhagvat Prasadam',
    description: 'Fresh authentic Kopra Pak (Coconut Barfi / Nariyal Barfi) in 100% Pure Premium Ghee. 250g (₹130), 500g (₹260), 1kg (₹519). Express delivery across India.',
    keywords: 'Buy kopra pak online, kopra pak price per kg, kopra pak 1kg price ₹519, kopra pak 500gm price ₹260, kopra pak 250gm price ₹130, order fresh coconut barfi online, nariyal barfi online buy, pure ghee coconut mithai online, bhagvat prasadam online order, diwali mithai box online, express sweet delivery india, sacred temple bhog sweet, buy prasad sweets online, farali mithai online delivery, best kopra pak mumbai, sweet courier ahmedabad',
    canonicalPath: '/',
    ogImage: '/images/kopra-pak-product.webp',
  },
  about: {
    title: 'Our Story & Heritage | Sacred Kopra Pak | Bhagvat Prasadam',
    description: 'Discover the sacred Poicha Nilkanthdham tradition behind our authentic Kopra Pak (Coconut Barfi), handcrafted with fresh grated coconut & pure premium ghee.',
    keywords: 'Kopra pak heritage, Poicha Nilkanthdham prasad tradition, authentic Gujarati mithai history, Satvik sweets craftsmanship Gujarat, Pure Premium Ghee coconut confectionery, traditional halwai coconut barfi, artisanal indian sweets, bhagvat prasadam story, surat sweet makers',
    canonicalPath: '/about',
    ogImage: '/images/kopra-pak-story-banner.png',
  },
  ingredients: {
    title: 'Kopra Pak Ingredients & Nutrition Facts | Bhagvat Prasadam',
    description: '100% Pure Premium Ghee, fresh grated coconut, slow-cooked milk mawa, Kashmiri saffron & cardamom. Naturally gluten-free & Farali compliant. Zero palm oil.',
    keywords: 'Kopra pak ingredients, what is kopra pak made of, coconut barfi ingredients, is kopra pak gluten free, is kopra pak farali, Pure Premium Ghee sweets, kashmiri mongra saffron, elaichi green cardamom, coconut barfi calories per piece, zero dalda zero palm oil mithai, kopra pak nutrition facts, how many calories in kopra pak',
    canonicalPath: '/ingredients',
    ogImage: '/images/kopra-pak-ingredients-flatlay.jpg',
  },
  process: {
    title: 'How Kopra Pak Is Made | 6-Step Halwai Method | Bhagvat Prasadam',
    description: 'Explore the 6-step artisanal halwai method of crafting authentic Kopra Pak: slow-roasting fresh coconut in pure premium ghee with cardamom-saffron syrup.',
    keywords: 'How kopra pak is made, kopra pak recipe halwai style, coconut barfi preparation, traditional coconut barfi making, Bhagvat Prasadam recipe, premium ghee roasting coconut, authentic gujarati kopra pak steps, halwai style nariyal barfi, how to make kopra pak at home',
    canonicalPath: '/process',
    ogImage: '/images/kopra-pak-process-craft.jpg',
  },
  faq: {
    title: 'Kopra Pak FAQ: Shelf Life, Fasting & Delivery | Bhagvat Prasadam',
    description: 'Get answers on Kopra Pak shelf life (20-25 days), storage guidelines, 100% Pure Premium Ghee, Farali fasting suitability, pack prices & pan-India courier.',
    keywords: 'Kopra pak FAQ, coconut barfi shelf life, how to store kopra pak, kopra pak storage room temperature, is kopra pak farali for fast, kopra pak fasting vrat sweet, pure ghee sweet faq, diwali corporate bulk orders, pan india express delivery timeline, bhagvat prasadam sweet orders, how long does nariyal barfi last',
    canonicalPath: '/faq',
    ogImage: '/images/kopra-pak-product.webp',
  },
  contact: {
    title: 'Contact Us | Kopra Pak Orders & Bulk Gifting | Bhagvat Prasadam',
    description: 'Connect with Bhagvat Prasadam for personal orders, Diwali corporate gifting hampers, and wedding sweet boxes. Fast express delivery across India via WhatsApp.',
    keywords: 'Contact Kopra Pak, order kopra pak WhatsApp, Bhagvat Prasadam sweet inquiry, bulk kopra pak order, diwali sweet boxes contact, wedding return gift sweets inquiry, corporate sweets gifting india, coconut barfi bulk order, surat sweets shop contact',
    canonicalPath: '/contact',
    ogImage: '/images/kopra-pak-product.webp',
  },
  privacyPolicy: {
    title: 'Privacy Policy | Bhagvat Prasadam Authentic Kopra Pak',
    description: 'Our customer data privacy policy regarding personal orders, WhatsApp inquiries, and website interactions for Bhagvat Prasadam sweets.',
    keywords: 'Privacy policy, customer data protection, Kopra Pak privacy, Bhagvat Prasadam data safety',
    canonicalPath: '/privacy-policy',
    ogImage: '/images/kopra-pak-product.webp',
  },
  terms: {
    title: 'Terms & Conditions | Bhagvat Prasadam Authentic Kopra Pak',
    description: 'Terms of service, inquiry policies, delivery guidelines, and packaging standards for our handcrafted Kopra Pak brand.',
    keywords: 'Terms and conditions, delivery terms, order inquiries terms, Kopra Pak',
    canonicalPath: '/terms',
    ogImage: '/images/kopra-pak-product.webp',
  },
  shippingPolicy: {
    title: 'Shipping & Delivery Policy | Pan-India Express Kopra Pak Dispatch',
    description: 'Information on pan-India courier dispatch, moisture-barrier freshness packaging, shelf life in transit, and delivery timelines for fresh coconut sweets.',
    keywords: 'Kopra pak shipping, sweet delivery timeline, pan India mithai courier, packaging freshness, express delivery sweets india',
    canonicalPath: '/shipping-policy',
    ogImage: '/images/kopra-pak-product.webp',
  },
  returnPolicy: {
    title: 'Return & Refund Policy | Freshness Guarantee | Bhagvat Prasadam',
    description: 'Our transparent return, refund, and transit damage replacement policy for Kopra Pak by Bhagvat Prasadam.',
    keywords: 'Kopra pak return policy, refund policy, transit damage replacement, food safety returns Bhagvat Prasadam, sweet refund guarantee',
    canonicalPath: '/return-policy',
    ogImage: '/images/kopra-pak-product.webp',
  },
  notFound: {
    title: '404: Sweet Not Found | Authentic Gujarati Kopra Pak',
    description: 'The page you were looking for seems to have gone missing. Return home to discover our authentic Gujarati Kopra Pak (Coconut Barfi).',
    keywords: '404, not found, Kopra Pak',
    canonicalPath: '/404',
    ogImage: '/images/kopra-pak-product.webp',
  },
};
