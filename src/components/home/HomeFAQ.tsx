'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateFAQSchema } from '@/lib/schema';
import { classNames } from '@/lib/utils';

const faqs = [
  {
    question: 'What products does Khetar Vala offer?',
    answer: 'Khetar Vala offers grains (wheat, bajra, jowar), pulses & kathol (chana, moong, toor dal, urad dal, moth, rajma), ghee (cow ghee), and natural products (handmade soaps).',
  },
  {
    question: 'How can I inquire about a product?',
    answer: 'You can contact Khetar Vala directly through WhatsApp at +91 84014 77557. Each product page has a dedicated WhatsApp button that pre-fills your inquiry with the product name.',
  },
  {
    question: 'Can I ask about bulk quantities?',
    answer: 'Yes, you can inquire about bulk quantities through WhatsApp. Our team will confirm availability and provide details based on your requirements.',
  },
  {
    question: 'How do I know product availability?',
    answer: 'Product availability can vary. Please contact us through WhatsApp for current stock status and estimated restock timelines.',
  },
  {
    question: 'Do you ship across India?',
    answer: 'Shipping options and delivery areas can be discussed directly through WhatsApp. Contact us with your location for specific information.',
  },
  {
    question: 'Are your products certified organic?',
    answer: 'Our products are sourced from farms following natural cultivation practices. For specific certification details, please contact us directly as certifications vary by product and batch.',
  },
];

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = generateFAQSchema(faqs);

  return (
    <section className="section bg-cream" aria-labelledby="faq-heading">
      <JsonLd data={faqSchema} />
      <div className="container">
        <SectionHeading
          id="faq-heading"
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions"
        />
        <div className="max-w-3xl mx-auto">
          <dl className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="card overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 80}ms` }}
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
                  className={`overflow-hidden transition-all duration-fast ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-body text-brown/70">{faq.answer}</p>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
          <div className="text-center mt-8">
            <a
              href="/faq"
              className="btn-outline inline-flex items-center gap-2"
            >
              View All FAQs
              <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}