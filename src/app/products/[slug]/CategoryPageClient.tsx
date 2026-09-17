'use client';

import { Category } from '@/types/category';
import { getProductsByCategory } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { classNames } from '@/lib/utils';

interface CategoryPageClientProps {
  category: Category;
}

export function CategoryPageClient({ category }: CategoryPageClientProps) {
  const products = getProductsByCategory(category.slug);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: category.name, href: `/products/${category.slug}` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      <div className="mb-12">
        <SectionHeading
          title={category.name}
          subtitle={category.description}
          alignment="left"
        />
      </div>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              priority={index < 4}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 60}ms` }}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-beige mb-4">
            <svg className="w-8 h-8 text-brown/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m16 0l-8 4m8-4v10l-8 4" />
            </svg>
          </div>
          <h3 className="text-heading-md font-heading font-medium text-dark mb-2">
            No products in this category yet
          </h3>
          <p className="text-body text-brown/70 mb-6 max-w-md mx-auto">
            Check back soon or explore our other categories.
          </p>
          <a href="/products" className="btn-primary">
            View All Products
          </a>
        </div>
      )}
    </>
  );
}