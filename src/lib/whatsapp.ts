import { siteConfig } from '../data/siteConfig';

export type WhatsAppContext = 'general' | 'hero' | 'product' | 'product_weight' | 'gifting' | 'bulk' | 'contact';

export interface WhatsAppOptions {
  context?: WhatsAppContext;
  weight?: string;
  customMessage?: string;
}

export function getWhatsAppUrl(options: WhatsAppOptions = {}): string {
  const phone = siteConfig.whatsappNumber;
  let message = 'Hello! I would like to know more about your authentic Gujarati Kopra Pak (Coconut Barfi) by Bhagvat Prasadam.';

  if (options.customMessage) {
    message = options.customMessage;
  } else if (options.context === 'hero') {
    message = 'Hello! I would like to enquire about ordering your fresh Pure Premium Ghee Kopra Pak.';
  } else if (options.context === 'product') {
    message = 'Hello! I am interested in your Traditional Gujarati Kopra Pak (Coconut Barfi). Please share pricing and dispatch availability.';
  } else if (options.context === 'product_weight') {
    message = `Hello! I am interested in ordering the ${options.weight || '500gm'} pack of your Traditional Pure Premium Ghee Kopra Pak. Please share delivery details.`;
  } else if (options.context === 'gifting') {
    message = 'Hello! I am interested in Kopra Pak festive gift boxes for an upcoming festival / celebration. Please share gift box options.';
  } else if (options.context === 'bulk') {
    message = 'Hello! I am looking to place a bulk Kopra Pak order for a wedding / corporate festive celebration / puja. Please share details and pricing.';
  } else if (options.context === 'contact') {
    message = 'Hello! I would like to enquire about your fresh Kopra Pak sweets from Bhagvat Prasadam.';
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
