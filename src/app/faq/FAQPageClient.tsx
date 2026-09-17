'use client';

import { useState } from 'react';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA';
import { classNames } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageClientProps {
  faqs: FAQItem[];
}

export function FAQPageClient({ faqs }: FAQPageClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'FAQ' },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions about our products and services"
        className="mb-12"
      />
      <div className="max-w-3xl mx-auto mb-16">
        <dl className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="card overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span className="text-body font-medium text-dark pr-8">
                  {faq.question}
                </span>
                <svg
                  className={classNames(
                    'w-5 h-5 text-brown/60 shrink-0 transition-transform duration-fast',
                    openIndex === index && 'rotate-180'
                  )}
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <dd
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={classNames(
                  'overflow-hidden transition-all duration-fast',
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <div className="px-6 pb-4">
                  <p className="text-body text-brown/70">{faq.answer}</p>
                </div>
              </dd>
            </div>
          ))}
        </dl>

        <div className="text-center mt-10 pt-8 border-t border-brown/10">
          <p className="text-body text-brown/70 mb-4">
            Didn't find your answer?
          </p>
          <WhatsAppCTA
            variant="primary"
            size="lg"
            ctaLocation="faq-page"
          >
            Ask Us on WhatsApp
          </WhatsAppCTA>
        </div>
      </div>
    </>
  );
}