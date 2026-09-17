'use client';

import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { classNames } from '@/lib/utils';

interface LegalSection {
  heading: string;
  content: string;
}

interface LegalPageClientProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalPageClient({ title, lastUpdated, sections }: LegalPageClientProps) {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: title },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      <header className="mb-12">
        <SectionHeading
          title={title}
          subtitle={`Last updated: ${lastUpdated}`}
          alignment="left"
        />
      </header>
      <div className="max-w-3xl mx-auto prose prose-brown">
        {sections.map((section, index) => (
          <section key={section.heading} className="mb-10 animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
            <h2 className="text-heading-lg font-heading font-medium text-dark mb-4">
              {section.heading}
            </h2>
            <div className="text-body text-brown/70 whitespace-pre-line">
              {section.content}
            </div>
          </section>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-brown/10 text-center">
        <p className="text-body text-brown/70 mb-4">
          Have questions about this policy?
        </p>
        <a
          href="/contact"
          className="btn-primary inline-flex items-center gap-2"
        >
          Contact Us
          <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </>
  );
}