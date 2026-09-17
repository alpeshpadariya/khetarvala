'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { Category } from '@/types/category';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA';
import { ProductCard } from '@/components/products/ProductCard';
import { classNames, truncate } from '@/lib/utils';

interface ProductDetailClientProps {
  product: Product;
  category?: Category;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, category, relatedProducts }: ProductDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: category?.name || product.category, href: `/products/${product.category}` },
    { name: product.name },
  ];

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} className="mb-8" />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mb-16">
        <div className="space-y-4">
          <div className="relative aspect-square rounded-card overflow-hidden">
            <Image
              src={product.images[selectedImageIndex]}
              alt={product.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2" role="list" aria-label="Product images">
              {product.images.map((img, index) => (
                <button
                  key={img}
                  onClick={() => setSelectedImageIndex(index)}
                  className={classNames(
                    'relative flex-shrink-0 w-20 h-20 rounded-button overflow-hidden border-2 transition-all duration-fast',
                    index === selectedImageIndex
                      ? 'border-primary'
                      : 'border-transparent hover:border-brown/30'
                  )}
                  aria-label={`View image ${index + 1} of ${product.images.length}`}
                  aria-current={index === selectedImageIndex ? 'true' : 'false'}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Product image gallery"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close gallery"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={() => setSelectedImageIndex((selectedImageIndex - 1 + product.images.length) % product.images.length)}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="relative max-w-4xl max-h-[80vh]">
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.imageAlt}
                width={800}
                height={800}
                className="object-contain"
                priority
              />
            </div>
            <button
              onClick={() => setSelectedImageIndex((selectedImageIndex + 1) % product.images.length)}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
        <div className="lg:col-span-2 space-y-8">
          <header className="border-b border-brown/10 pb-6">
            {product.category && (
              <Link
                href={`/products/${product.category}`}
                className="inline-block text-caption font-medium text-primary hover:text-primary-dark transition-colors mb-3 link-underline"
              >
                {category?.name || product.category.charAt(0).toUpperCase() + product.category.slice(1).replace('-', ' ')}
              </Link>
            )}
            <h1 className="text-display-md font-heading font-medium text-dark mb-3">
              {product.name}
            </h1>
            <p className="text-body-lg text-brown/70">
              {product.shortDescription}
            </p>
          </header>

          <section aria-labelledby="description-heading">
            <h2 id="description-heading" className="text-heading-lg font-heading font-medium text-dark mb-4">
              About This Product
            </h2>
            <div className="prose prose-brown max-w-none text-body text-brown/70 whitespace-pre-line">
              {product.description}
            </div>
          </section>

          {product.sizes && product.sizes.length > 0 && (
            <section aria-labelledby="sizes-heading">
              <h2 id="sizes-heading" className="text-heading-lg font-heading font-medium text-dark mb-4">
                Available Sizes
              </h2>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <span
                    key={size}
                    className="px-4 py-2 bg-beige text-brown/80 rounded-button text-body-sm font-medium border border-brown/20"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </section>
          )}

          {product.faqs && product.faqs.length > 0 && (
            <section aria-labelledby="faqs-heading">
              <h2 id="faqs-heading" className="text-heading-lg font-heading font-medium text-dark mb-4">
                Frequently Asked Questions
              </h2>
              <dl className="space-y-4">
                {product.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-brown/10 pb-4 last:border-0">
                    <dt className="text-body font-medium text-dark mb-1">
                      {faq.question}
                    </dt>
                    <dd className="text-body text-brown/70">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>

        <aside className="space-y-6">
          <div className="card p-6 sticky top-24">
            <div className="mb-4">
              <span className="text-body-sm font-medium text-brown/60">
                {product.availability === 'available' ? 'Available' : product.availability === 'unavailable' ? 'Unavailable' : 'Contact for Price'}
              </span>
            </div>
            <WhatsAppCTA
              productName={product.name}
              variant="primary"
              size="lg"
              className="w-full mb-4"
              ctaLocation="product-detail-main"
            />
            <WhatsAppCTA
              productName={product.name}
              variant="secondary"
              size="default"
              className="w-full"
              ctaLocation="product-detail-secondary"
            >
              Save for Later
            </WhatsAppCTA>
          </div>

          <div className="card p-6">
            <h3 className="text-heading-md font-heading font-medium text-dark mb-4">
              Product Information
            </h3>
            <dl className="space-y-3 text-body-sm">
              <div className="flex justify-between">
                <dt className="text-brown/60">Category</dt>
                <dd className="font-medium text-dark">{category?.name || product.category}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-brown/60">Availability</dt>
                <dd className="font-medium text-dark">
                  {product.availability === 'available' ? 'Available' : product.availability === 'unavailable' ? 'Unavailable' : 'Contact for Price'}
                </dd>
              </div>
              {product.sizes && product.sizes.length > 0 && (
                <div className="flex justify-between">
                  <dt className="text-brown/60">Sizes</dt>
                  <dd className="font-medium text-dark">{product.sizes.length} option{product.sizes.length !== 1 ? 's' : ''}</dd>
                </div>
              )}
            </dl>
          </div>
        </aside>
      </div>

      {relatedProducts.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 id="related-heading" className="text-heading-lg font-heading font-medium text-dark">
              Related Products
            </h2>
            <Link
              href={`/products/${product.category}`}
              className="btn-outline text-sm"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <ProductCard
                key={relatedProduct.slug}
                product={relatedProduct}
                variant="featured"
                className="animate-slide-up"
                style={{ animationDelay: `${index * 60}ms` }}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}