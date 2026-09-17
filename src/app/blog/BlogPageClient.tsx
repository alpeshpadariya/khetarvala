'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { classNames } from '@/lib/utils';

interface BlogPageClientProps {
  posts: BlogPost[];
}

export function BlogPageClient({ posts }: BlogPageClientProps) {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog' },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      <SectionHeading
        title="Our Blog"
        subtitle="Guides, tips, and knowledge about traditional Indian ingredients and natural living"
        className="mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <article key={post.slug} className="card overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
            <Link
              href={`/blog/${post.slug}`}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-card overflow-hidden"
              aria-label={`Read ${post.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-slow group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <time className="text-caption text-brown/60" dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <span className="text-caption font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-heading-md font-heading font-medium text-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-body-sm text-brown/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-body-sm font-medium text-primary hover:text-primary-dark transition-colors link-underline">
                  Read More
                  <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-beige mb-4">
            <svg className="w-8 h-8 text-brown/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h3 className="text-heading-md font-heading font-medium text-dark mb-2">
            No articles yet
          </h3>
          <p className="text-body text-brown/70">
            Check back soon for new content about Indian grains, pulses, and natural products.
          </p>
        </div>
      )}
    </>
  );
}