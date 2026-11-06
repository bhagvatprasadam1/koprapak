import { siteConfig } from '../data/siteConfig';
import { kopraPakProduct } from '../data/products';
import { faqsData } from '../data/faqs';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bhagvat Prasadam - Kopra Pak',
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/images/logo.webp`,
    description: siteConfig.subTagline,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Gujarati', 'Hindi'],
    },
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.youtube,
    ],
  };
}

export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Kopra Pak | Coconut Barfi | Nariyal Barfi | Bhagvat Prasadam',
    alternateName: [
      'Coconut Barfi',
      'Nariyal Barfi',
      'Nariyal Ki Barfi',
      'खोपरा पाक',
      'કોપરા પાક',
      'નાળિયેર બરફી',
      'Pure Premium Ghee Kopra Pak',
      'Farali Kopra Pak',
      'Gujarati Kopra Pak',
    ],
    image: kopraPakProduct.galleryImages.map((img) => `${siteConfig.siteUrl}${img}`),
    description: kopraPakProduct.description,
    brand: {
      '@type': 'Brand',
      name: kopraPakProduct.vendor,
    },
    category: 'Food & Beverage > Sweets & Desserts > Traditional Indian Sweets',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1840',
      bestRating: '5',
      worstRating: '1',
    },
    nutrition: {
      '@type': 'NutritionInformation',
      servingSize: '100g (Approx. 2-3 Slices)',
      calories: '445 calories',
      proteinContent: '6.2g',
      fatContent: '22.8g',
      carbohydrateContent: '54.0g',
      fiberContent: '4.5g',
      sugarContent: '42.0g',
    },
    suitableForDiet: [
      'https://schema.org/VegetarianDiet',
      'https://schema.org/GlutenFreeDiet',
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '130.00',
      highPrice: '519.00',
      offerCount: '3',
      availability: 'https://schema.org/InStock',
      url: kopraPakProduct.productUrl,
      seller: {
        '@type': 'Organization',
        name: kopraPakProduct.vendor,
      },
    },
  };
}

export function getFAQPageSchema(category?: string) {
  const items = category
    ? faqsData.filter((f) => f.category === category)
    : faqsData.filter((f) => f.featuredOnHome);

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.brandName,
    image: kopraPakProduct.galleryImages.map((img) => `${siteConfig.siteUrl}${img}`),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '21.2389',
      longitude: '72.8427',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    priceRange: '₹₹',
  };
}
