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