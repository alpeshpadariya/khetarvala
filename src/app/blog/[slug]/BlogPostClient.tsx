'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { classNames } from '@/lib/utils';

interface BlogPostClientProps {
  post: BlogPost;
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: post.title },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} className="mb-8" />

      <article className="max-w-3xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-body-sm text-brown/60" dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            {post.updatedAt && (
              <>
                <span className="text-body-sm text-brown/40" aria-hidden="true">·</span>
                <time className="text-body-sm text-brown/60" dateTime={post.updatedAt}>
                  Updated {new Date(post.updatedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </>
            )}
            <span className="text-caption font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full ml-auto">
              {post.category}
            </span>
          </div>
          <h1 className="text-display-md font-heading font-medium text-dark mb-4">
            {post.title}
          </h1>
          {post.author && (
            <p className="text-body-sm text-brown/60">
              By <span className="font-medium text-dark">{post.author}</span>
            </p>
          )}
        </header>

        {post.featuredImage && (
          <div className="relative aspect-[16/9] rounded-card overflow-hidden mb-10">
            <Image
              src={post.featuredImage}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 75vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
          </div>
        )}

        <div className="prose prose-brown max-w-none text-body text-brown/70 leading-relaxed">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {post.tags && post.tags.length > 0 && (
          <footer className="mt-12 pt-8 border-t border-brown/10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-body-sm font-medium text-brown/60">Tags:</span>
              {post.tags.map(tag => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="text-body-sm text-primary hover:text-primary-dark bg-primary/10 px-3 py-1 rounded-full transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </footer>
        )}

        {post.relatedProducts && post.relatedProducts.length > 0 && (
          <section className="mt-12 pt-8 border-t border-brown/10" aria-labelledby="related-products-heading">
            <h2 id="related-products-heading" className="text-heading-lg font-heading font-medium text-dark mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {post.relatedProducts.map(productSlug => (
                <Link
                  key={productSlug}
                  href={`/products/${productSlug}`}
                  className="card p-4 block hover:shadow-card-hover transition-shadow"
                >
                  <p className="text-body font-medium text-dark">{productSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</p>
                  <span className="text-body-sm text-primary mt-2 inline-block link-underline">View Product</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <section className="mt-12 pt-8 border-t border-brown/10" aria-labelledby="related-articles-heading">
            <h2 id="related-articles-heading" className="text-heading-lg font-heading font-medium text-dark mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.relatedPosts.map(relatedSlug => (
                <Link
                  key={relatedSlug}
                  href={`/blog/${relatedSlug}`}
                  className="card p-6 block hover:shadow-card-hover transition-shadow"
                >
                  <p className="text-body font-medium text-dark">{relatedSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</p>
                  <span className="text-body-sm text-primary mt-2 inline-block link-underline">Read Article</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}