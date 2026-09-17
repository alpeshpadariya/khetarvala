import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types/category';
import { classNames } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function CategoryCard({ category, priority = false, className, style }: CategoryCardProps) {
  return (
    <article className={classNames("card group overflow-hidden", className)} style={style}>
      <Link
        href={`/products/${category.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-card overflow-hidden"
        aria-label={`View ${category.name} products`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={category.image}
            alt={category.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-slow group-hover:scale-105"
            priority={priority}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/20 to-transparent" />
        </div>

        <div className="p-6 relative -mt-4 bg-white">
          <div className="relative z-10">
            <h3 className="text-heading-lg font-heading font-medium text-dark mb-2 group-hover:text-primary transition-colors">
              {category.name}
            </h3>
            <p className="text-body-sm text-brown/70 mb-4 line-clamp-2">
              {category.shortDescription}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-body-sm font-medium text-primary">
                {category.productCount} product{category.productCount !== 1 ? 's' : ''}
              </span>
              <span className="inline-flex items-center gap-1.5 text-body-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-fast">
                View Products
                <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}