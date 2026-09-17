import { Metadata } from 'next';
import { Product } from '@/types/product';
import { Category } from '@/types/category';
import { BlogPost } from '@/types/blog';

export const SITE_NAME = 'Khetar Vala';
export const SITE_TAGLINE = 'From Our Fields to Your Family';
export const SITE_DESCRIPTION = 'Quality grains, pulses, ghee and natural products inspired by India\'s farming traditions.';
export const SITE_URL = 'https://khetarvala.com';
export const WHATSAPP_NUMBER = '+91 84014 77557';

export const defaultMetadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Farm Fresh Organic & Natural Food Products`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Khetar Vala',
    'organic food',
    'natural products',
    'Indian grains',
    'pulses',
    'kathol',
    'ghee',
    'natural soap',
    'farm fresh',
    'traditional Indian food',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Farm Fresh Organic & Natural Food Products`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/hero/og-default.webp',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Farm Fresh Organic & Natural Food Products`,
    description: SITE_DESCRIPTION,
    images: ['/images/hero/og-default.webp'],
    creator: '@khetarvala',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export function generateProductMetadata(product: Product): Metadata {
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    keywords: product.keywords,
    authors: [{ name: SITE_NAME }],
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: `${SITE_URL}/products/${product.slug}`,
      siteName: SITE_NAME,
      title: product.seoTitle,
      description: product.seoDescription,
      images: product.images.map(img => ({
        url: `${SITE_URL}${img}`,
        width: 800,
        height: 800,
        alt: product.imageAlt,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seoTitle,
      description: product.seoDescription,
      images: product.images.map(img => `${SITE_URL}${img}`),
    },
    other: {
      'product:brand': SITE_NAME,
      'product:category': product.category,
    },
  };
}

export function generateCategoryMetadata(category: Category): Metadata {
  return {
    title: category.seoTitle,
    description: category.seoDescription,
    keywords: category.keywords,
    authors: [{ name: SITE_NAME }],
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: `${SITE_URL}/products/${category.slug}`,
      siteName: SITE_NAME,
      title: category.seoTitle,
      description: category.seoDescription,
      images: [
        {
          url: `${SITE_URL}${category.image}`,
          width: 800,
          height: 600,
          alt: category.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: category.seoTitle,
      description: category.seoDescription,
      images: [`${SITE_URL}${category.image}`],
    },
  };
}

export function generateBlogMetadata(post: BlogPost): Metadata {
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: SITE_NAME,
      title: post.seoTitle,
      description: post.seoDescription,
      images: [
        {
          url: `${SITE_URL}${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.seoDescription,
      images: [`${SITE_URL}${post.featuredImage}`],
    },
  };
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  keywords?: string[],
  ogImage?: string
): Metadata {
  return {
    title,
    description,
    keywords,
    authors: [{ name: SITE_NAME }],
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      title,
      description,
      images: ogImage
        ? [{ url: `${SITE_URL}${ogImage}`, width: 1200, height: 630, alt: title }]
        : [{ url: `${SITE_URL}/images/hero/og-default.webp`, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [`${SITE_URL}${ogImage}`] : [`${SITE_URL}/images/hero/og-default.webp`],
    },
  };
}

export function generateCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`.replace(/\/+$/, '') + '/';
}