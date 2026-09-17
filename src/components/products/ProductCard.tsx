'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { getProductWhatsAppLink } from '@/lib/whatsapp';
import { classNames, truncate } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured';
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function ProductCard({ product, variant = 'default', priority = false, className, style }: ProductCardProps) {
  const whatsappLink = getProductWhatsAppLink(product.name);

  return (
    <article className={classNames("card group", className)} style={style}>
      <Link
        href={`/products/${product.category}/${product.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-card overflow-hidden"
        aria-label={`View ${product.name} details`}
      >
        <div className="relative aspect-square overflow-hidden bg-beige">
          <Image
            src={product.images[0]}
            alt={product.imageAlt}
            fill
            sizes={variant === 'featured' ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
            className="object-cover transition-transform duration-slow group-hover:scale-105"
            priority={priority}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
          {product.availability === 'unavailable' && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-body-sm font-medium px-3 py-1 bg-primary rounded-button">
                Unavailable
              </span>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-heading-md font-heading font-medium text-dark group-hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
            {product.category && (
              <span className="text-caption font-medium text-brown/60 bg-beige px-2 py-0.5 rounded-full shrink-0">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1).replace('-', ' ')}
              </span>
            )}
          </div>

          <p className="text-body-sm text-brown/70 mb-3 line-clamp-2">
            {truncate(product.shortDescription, 100)}
          </p>

          {product.sizes && product.sizes.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3" aria-label="Available sizes">
              {product.sizes.slice(0, 4).map(size => (
                <span key={size} className="text-caption text-brown/60 bg-beige px-2 py-0.5 rounded-full">
                  {size}
                </span>
              ))}
              {product.sizes.length > 4 && (
                <span className="text-caption text-brown/60 bg-beige px-2 py-0.5 rounded-full">
                  +{product.sizes.length - 4} more
                </span>
              )}
            </div>
          )}

          <div className="flex items-center justify-between gap-3 pt-3 border-t border-brown/10">
            <span className="text-body-sm font-medium text-brown/60">
              {product.availability === 'available' ? 'Available' : 'Contact for Price'}
            </span>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-button px-4 py-2 text-sm whitespace-nowrap"
              aria-label={`Inquire about ${product.name} on WhatsApp`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(whatsappLink, '_blank', 'noopener,noreferrer');
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'whatsapp_inquiry_click', {
                    product: product.name,
                    category: product.category,
                    page: window.location.pathname,
                    ctaLocation: 'product-card',
                  });
                }
              }}
            >
              <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a39.07 39.07 0 0 1-1.647-.29c-.633-.147-1.184-.43-1.605-.792a45.815 45.815 0 0 1-4.92-4.815c-.36-.42-.645-.97-.79-1.604-.146-.634-.287-1.185-.29-1.647a.38.38 0 0 1 .114-.394 45.63 45.63 0 0 1 3.422-4.287.404.404 0 0 1 .483-.01c1.23.727 2.58 1.37 4.07 1.894a.386.386 0 0 1 .213.566c-.282.998-.83 1.953-1.654 2.792a40.366 40.366 0 0 1-4.702 3.34c-.42.19-.908.283-1.302.283-.393 0-.88-.09-1.303-.283z" />
              </svg>
              Inquire
            </a>
          </div>
        </div>
      </Link>
    </article>
  );
}