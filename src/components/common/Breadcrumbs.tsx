'use client';

import Link from 'next/link';
import { classNames } from '@/lib/utils';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      className={classNames('text-body-sm', className)}
      aria-label="Breadcrumb"
      role="navigation"
    >
      <ol className="flex flex-wrap items-center gap-2 text-brown/60" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li key={item.href || item.name} className="flex items-center gap-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {index > 0 && (
              <span aria-hidden="true" className="text-brown/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors font-medium"
                itemProp="item"
              >
                <span itemProp="name">{item.name}</span>
                <meta itemProp="position" content={`${index + 1}`} />
              </Link>
            ) : (
              <span
                className="text-dark font-medium"
                aria-current="page"
                itemProp="name"
              >
                {item.name}
                <meta itemProp="position" content={`${index + 1}`} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}   