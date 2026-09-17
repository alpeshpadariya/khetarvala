import { SectionHeading } from '@/components/common/SectionHeading';
import { CategoryCard } from '@/components/products/CategoryCard';
import { categories } from '@/data/categories';
import { classNames } from '@/lib/utils';

export function ProductCategories() {
  return (
    <section className="section" aria-labelledby="categories-heading">
      <div className="container">
        <SectionHeading
          id="categories-heading"
          title="Our Product Categories"
          subtitle="Explore our range of traditional Indian grains, pulses, ghee and natural products"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.slug}
              category={category}
              priority={index < 2}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="/products"
            className="btn-outline inline-flex items-center gap-2"
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