import { SectionHeading } from '@/components/common/SectionHeading';
import { ProductCard } from '@/components/products/ProductCard';
import { getFeaturedProducts } from '@/data/products';
import { classNames } from '@/lib/utils';

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="section bg-cream" aria-labelledby="featured-heading">
      <div className="container">
        <SectionHeading
          id="featured-heading"
          title="Featured Products"
          subtitle="Our most popular products, loved by families across India"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              variant="featured"
              priority={index < 4}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/products"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Products
            <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}