'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { Category } from '@/types/category';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA';
import { ProductCard } from '@/components/products/ProductCard';
import { classNames } from '@/lib/utils';

interface ProductDetailClientProps {
  product: Product;
  category?: Category;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, category, relatedProducts }: ProductDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'faqs'>('description');

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

  const getAvailabilityBadge = () => {
    switch (product.availability) {
      case 'available':
        return { label: 'In Stock', className: 'bg-primary/10 text-primary border-primary/20' };
      case 'unavailable':
        return { label: 'Out of Stock', className: 'bg-red-50 text-red-600 border-red-100' };
      default:
        return { label: 'Contact for Availability', className: 'bg-amber-50 text-amber-700 border-amber-100' };
    }
  };

  const availability = getAvailabilityBadge();

  return (
    <>
      <Breadcrumbs items={breadcrumbs} className="mb-8" />

      {/* Hero Gallery Section */}
      <section className="mb-12 lg:mb-16" aria-labelledby="product-gallery">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Image + Thumbnails */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square max-w-[480px] mx-auto rounded-xl overflow-hidden bg-beige/50">
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-opacity duration-300"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
              {/* Availability Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-caption font-medium border ${availability.className}`}>
                  {availability.label}
                </span>
              </div>
              {/* Category Tag */}
              <div className="absolute top-4 right-4 z-10">
                <Link
                  href={`/products/${product.category}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-caption font-medium bg-white/90 backdrop-blur-sm text-brown/70 hover:text-primary transition-colors shadow-sm"
                >
                  {category?.name || product.category.charAt(0).toUpperCase() + product.category.slice(1).replace('-', ' ')}
                </Link>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" role="list" aria-label="Product images">
                {product.images.map((img, index) => (
                  <button
                    key={img}
                    onClick={() => setSelectedImageIndex(index)}
                    className={classNames(
                      'relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 transition-all duration-200',
                      index === selectedImageIndex
                        ? 'border-primary ring-2 ring-primary/20'
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

            {/* View Gallery Button */}
            {product.images.length > 1 && (
              <button
                onClick={() => openLightbox(selectedImageIndex)}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-button font-medium text-brown/70 hover:text-primary transition-colors border border-brown/20 rounded-button hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Open fullscreen gallery"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                View Fullscreen Gallery
              </button>
            )}
          </div>

          {/* Sticky Info Panel */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="sticky top-24 space-y-6">
              {/* Product Header */}
              <div className="border-b border-brown/10 pb-6">
                <h1 className="text-display-sm font-heading font-medium text-dark mb-3">{product.name}</h1>
                <p className="text-body-lg text-brown/70 leading-relaxed">{product.shortDescription}</p>
              </div>

              {/* Price/Availability + Primary CTA */}
              <div className="space-y-4 p-6 bg-beige/30 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-caption font-medium border ${availability.className}`}>
                    {availability.label}
                  </span>
                </div>

                <WhatsAppCTA
                  productName={product.name}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  ctaLocation="product-detail-main"
                >
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a39.07 39.07 0 0 1-1.647-.29c-.633-.147-1.184-.43-1.605-.792a45.815 45.815 0 0 1-4.92-4.815c-.36-.42-.645-.97-.79-1.604-.146-.634-.287-1.185-.29-1.647a.38.38 0 0 1 .114-.394 45.63 45.63 0 0 1 3.422-4.287.404.404 0 0 1 .483-.01c1.23.727 2.58 1.37 4.07 1.894a.386.386 0 0 1 .213.566c-.282.998-.83 1.953-1.654 2.792a40.366 40.366 0 0 1-4.702 3.34c-.42.19-.908.283-1.302.283-.393 0-.88-.09-1.303-.283z" />
                  </svg>
                  Inquire on WhatsApp
                </WhatsAppCTA>

                <WhatsAppCTA
                  productName={product.name}
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  ctaLocation="product-detail-secondary"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Share via Email
                </WhatsAppCTA>

                <p className="text-caption text-brown/50 text-center">
                  We typically respond within a few hours during business hours
                </p>
              </div>

              {/* Product Meta */}
              <div className="border-t border-brown/10 pt-6 space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-brown/10 last:border-0">
                  <span className="text-body-sm text-brown/60">Category</span>
                  <span className="font-medium text-dark">{category?.name || product.category}</span>
                </div>
                {product.sizes && product.sizes.length > 0 && (
                  <div className="flex items-center justify-between py-2 border-b border-brown/10 last:border-0">
                    <span className="text-body-sm text-brown/60">Available Sizes</span>
                    <span className="font-medium text-dark">{product.sizes.join(', ')}</span>
                  </div>
                )}
                <div className="flex items-center justify-between py-2 border-b border-brown/10 last:border-0">
                  <span className="text-body-sm text-brown/60">Brand</span>
                  <span className="font-medium text-dark">Khetar Vala</span>
                </div>
                <div className="flex items-center justify-between py-2 last:border-0">
                  <span className="text-body-sm text-brown/60">Origin</span>
                  <span className="font-medium text-dark">India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
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
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hidden sm:block"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="relative max-w-5xl max-h-[85vh]">
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.imageAlt}
                width={1200}
                height={1200}
                className="object-contain"
                priority
              />
            </div>
            <button
              onClick={() => setSelectedImageIndex((selectedImageIndex + 1) % product.images.length)}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hidden sm:block"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {/* Mobile swipe hints */}
            <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
              <button
                onClick={() => setSelectedImageIndex((selectedImageIndex - 1 + product.images.length) % product.images.length)}
                className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => setSelectedImageIndex((selectedImageIndex + 1) % product.images.length)}
                className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Tabbed Content Section */}
      <section className="mb-16" aria-labelledby="product-details">
        <div className="border border-brown/10 rounded-xl overflow-hidden">
          {/* Tab Navigation */}
          <nav className="flex border-b border-brown/10 bg-beige/30" aria-label="Product details tabs">
            <button
              onClick={() => setActiveTab('description')}
              className={classNames(
                'flex-1 px-6 py-4 text-body font-medium transition-colors border-b-2 -mb-px',
                activeTab === 'description'
                  ? 'border-primary text-primary bg-white'
                  : 'text-brown/50 hover:text-brown/70 hover:bg-white/50'
              )}
              aria-selected={activeTab === 'description'}
              aria-controls="tab-description"
              id="tab-btn-description"
              role="tab"
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={classNames(
                'flex-1 px-6 py-4 text-body font-medium transition-colors border-b-2 -mb-px',
                activeTab === 'details'
                  ? 'border-primary text-primary bg-white'
                  : 'text-brown/50 hover:text-brown/70 hover:bg-white/50'
              )}
              aria-selected={activeTab === 'details'}
              aria-controls="tab-details"
              id="tab-btn-details"
              role="tab"
            >
              Details
            </button>
            {product.faqs && product.faqs.length > 0 && (
              <button
                onClick={() => setActiveTab('faqs')}
                className={classNames(
                  'flex-1 px-6 py-4 text-body font-medium transition-colors border-b-2 -mb-px',
                  activeTab === 'faqs'
                    ? 'border-primary text-primary bg-white'
                    : 'text-brown/50 hover:text-brown/70 hover:bg-white/50'
                )}
                aria-selected={activeTab === 'faqs'}
                aria-controls="tab-faqs"
                id="tab-btn-faqs"
                role="tab"
              >
                FAQs
              </button>
            )}
          </nav>

          {/* Tab Panels */}
          <div className="p-6 lg:p-8">
            {/* Description Tab */}
            <div
              id="tab-description"
              role="tabpanel"
              aria-labelledby="tab-btn-description"
              hidden={activeTab !== 'description'}
              className="animate-fade-in"
            >
              <h2 className="text-heading-lg font-heading font-medium text-dark mb-6">About This Product</h2>
              <div className="prose prose-brown max-w-none text-body text-brown/70 leading-relaxed whitespace-pre-line">
                {product.description}
              </div>
            </div>

            {/* Details Tab */}
            <div
              id="tab-details"
              role="tabpanel"
              aria-labelledby="tab-btn-details"
              hidden={activeTab !== 'details'}
              className="animate-fade-in"
            >
              <h2 className="text-heading-lg font-heading font-medium text-dark mb-6">Product Details</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <dl className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-brown/10">
                    <dt className="text-body text-brown/60">Category</dt>
                    <dd className="font-medium text-dark">{category?.name || product.category}</dd>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-brown/10">
                    <dt className="text-body text-brown/60">Brand</dt>
                    <dd className="font-medium text-dark">Khetar Vala</dd>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-brown/10">
                    <dt className="text-body text-brown/60">Origin</dt>
                    <dd className="font-medium text-dark">India</dd>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-brown/10">
                    <dt className="text-body text-brown/60">Availability</dt>
                    <dd className="font-medium text-dark">{availability.label}</dd>
                  </div>
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="flex items-start justify-between py-3">
                      <dt className="text-body text-brown/60">Available Sizes</dt>
                      <dd className="font-medium text-dark text-right max-w-[60%]">{product.sizes.join(', ')}</dd>
                    </div>
                  )}
                </dl>

                {/* Additional Info Cards */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-beige/30 rounded-lg border border-brown/10">
                    <h3 className="font-medium text-dark mb-2">Storage Instructions</h3>
                    <p className="text-body-sm text-brown/70">
                      Store in a cool, dry place in an airtight container. Keep away from direct sunlight and moisture to maintain freshness.
                    </p>
                  </div>
                  <div className="p-4 bg-beige/30 rounded-lg border border-brown/10">
                    <h3 className="font-medium text-dark mb-2">Quality Assurance</h3>
                    <p className="text-body-sm text-brown/70">
                      Each batch is carefully selected for quality and consistency. Sourced from trusted farms following traditional cultivation practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Tab */}
            {product.faqs && product.faqs.length > 0 && (
              <div
                id="tab-faqs"
                role="tabpanel"
                aria-labelledby="tab-btn-faqs"
                hidden={activeTab !== 'faqs'}
                className="animate-fade-in"
              >
                <h2 className="text-heading-lg font-heading font-medium text-dark mb-6">Frequently Asked Questions</h2>
                <dl className="space-y-4">
                  {product.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-brown/10 pb-4 last:border-0">
                      <dt className="text-body font-medium text-dark mb-2">{faq.question}</dt>
                      <dd className="text-body text-brown/70 leading-relaxed">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section aria-labelledby="related-heading" className="mb-16">
          <div className="flex items-center justify-between mb-10">
            <h2 id="related-heading" className="text-heading-lg font-heading font-medium text-dark">
              You May Also Like
            </h2>
            <Link
              href={`/products/${product.category}`}
              className="btn-outline text-sm hidden sm:inline-flex"
            >
              View All {category?.name || product.category}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
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

      {/* Trust Section */}
      <section className="py-12 bg-beige/30 rounded-xl mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">
          <div className="py-4">
            <svg className="w-10 h-10 mx-auto text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="font-medium text-dark mb-1">Quality Assured</h3>
            <p className="text-body-sm text-brown/60">Carefully selected from trusted farms</p>
          </div>
          <div className="py-4">
            <svg className="w-10 h-10 mx-auto text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-medium text-dark mb-1">Direct Inquiry</h3>
            <p className="text-body-sm text-brown/60">Connect directly via WhatsApp</p>
          </div>
          <div className="py-4">
            <svg className="w-10 h-10 mx-auto text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-medium text-dark mb-1">Farm Fresh</h3>
            <p className="text-body-sm text-brown/60">From our fields to your family</p>
          </div>
          <div className="py-4">
            <svg className="w-10 h-10 mx-auto text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="font-medium text-dark mb-1">Traditional Goodness</h3>
            <p className="text-body-sm text-brown/60">Preserving Indian food heritage</p>
          </div>
        </div>
      </section>
    </>
  );
}