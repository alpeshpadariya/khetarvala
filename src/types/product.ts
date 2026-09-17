export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  images: string[];
  imageAlt: string;
  sizes?: string[];
  availability?: 'available' | 'unavailable' | 'contact';
  featured?: boolean;
  seoTitle: string;
  seoDescription: string;
  keywords?: string[];
  relatedProducts?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  imagePrompt?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  productCount: number;
  seoTitle: string;
  seoDescription: string;
  keywords?: string[];
}

export type ProductAvailability = 'available' | 'unavailable' | 'contact';

export interface ProductFilter {
  category?: string;
  search?: string;
  availability?: ProductAvailability;
}