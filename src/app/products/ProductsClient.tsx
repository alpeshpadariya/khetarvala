'use client';

import { useState, useMemo, Fragment } from 'react';
import { products, getProductsByCategory, searchProducts } from '@/data/products';
import { categories } from '@/data/categories';
import { ProductCard } from '@/components/products/ProductCard';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { classNames } from '@/lib/utils';

export function ProductsClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      result = searchProducts(searchQuery);
      if (selectedCategory) {
        result = result.filter(p => p.category === selectedCategory);
      }
    }

    return result;
  }, [searchQuery, selectedCategory]);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
  ];

  return (
    <Fragment>
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      <SectionHeading
        title="All Products"
        subtitle={`Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`}
        alignment="left"
      />
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <label htmlFor="product-search" className="sr-only">Search products</label>
          <input
            type="search"
            id="product-search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search wheat, chana, moong, ghee, soap..."
            className="w-full px-4 py-3 border border-brown/20 rounded-button text-body bg-white placeholder:text-brown/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            aria-describedby="search-hint"
          />
        </div>
        <div className="relative">
          <label htmlFor="category-filter" className="sr-only">Filter by category</label>
          <select
            id="category-filter"
            value={selectedCategory || ''}
            onChange={e => setSelectedCategory(e.target.value || null)}
            className="w-full sm:w-64 px-4 py-3 border border-brown/20 rounded-button text-body bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%238D6E63%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22/>')] bg-right-3 bg-center bg-no-repeat pr-10"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name} ({cat.productCount})
              </option>
            ))}
          </select>
        </div>
      </div>

      {searchQuery && (
        <p id="search-hint" className="text-body-sm text-brown/60 mb-6">
          Showing results for &ldquo;{searchQuery}&rdquo;
          {selectedCategory && ` in ${categories.find(c => c.slug === selectedCategory)?.name}`}
        </p>
      )}

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-heading-md font-heading font-medium text-dark mb-2">
            No products found
          </h3>
          <p className="text-body text-brown/70 mb-6 max-w-md mx-auto">
            Try searching for wheat, chana, moong, ghee, or soap. Or browse all categories.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory(null);
            }}
            className="btn-outline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </Fragment>
  );
}