export const WHATSAPP_NUMBER = '918401477557';
export const WHATSAPP_DISPLAY = '+91 84014 77557';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export interface WhatsAppMessageOptions {
  productName?: string;
  category?: string;
  customMessage?: string;
  source?: string;
}

export function createWhatsAppMessage(options: WhatsAppMessageOptions): string {
  const { productName, category, customMessage, source } = options;

  if (customMessage) {
    return customMessage;
  }

  if (productName) {
    return `Hello Khetar Vala,

I am interested in ${productName}.

Please share the price, available sizes and delivery details.`;
  }

  if (category) {
    return `Hello Khetar Vala,

I am interested in your ${category} products.

Please share the product list, prices and delivery details.`;
  }

  return `Hello Khetar Vala,

I am interested in your products.

Please share your product catalogue and pricing details.`;
}

export function createWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `${WHATSAPP_URL}?text=${encodedMessage}`;
}

export function getProductWhatsAppLink(productName: string, source?: string): string {
  const message = createWhatsAppMessage({ productName, source });
  return createWhatsAppLink(message);
}

export function getCategoryWhatsAppLink(categoryName: string, source?: string): string {
  const message = createWhatsAppMessage({ category: categoryName, source });
  return createWhatsAppLink(message);
}

export function getGeneralWhatsAppLink(source?: string): string {
  const message = createWhatsAppMessage({ source });
  return createWhatsAppLink(message);
}

export const WHATSAPP_EVENT_NAME = 'whatsapp_inquiry_click';

export function trackWhatsAppClick(data: {
  product?: string;
  category?: string;
  page: string;
  ctaLocation: string;
}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', WHATSAPP_EVENT_NAME, data);
  }
}