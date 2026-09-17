'use client';

import Image from 'next/image';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { classNames } from '@/lib/utils';

export function AboutPageClient() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'About' },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      <SectionHeading
        title="Our Story"
        subtitle="From our fields to your family — a journey of trust and tradition"
        className="mb-16"
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        <div className="prose prose-brown max-w-none">
          <p className="text-body-lg text-brown/80 mb-6">
            Khetar Vala was born from a simple belief: good food begins with good ingredients. Our name, meaning "from the fields" in Gujarati, reflects our deep connection to the land and the farmers who nurture it.
          </p>
          <p className="text-body text-brown/70 mb-6">
            We work directly with farms that share our values — those who understand that the best produce comes from patience, care, and respect for natural cycles. Every grain, every pulse, every jar of ghee carries this philosophy.
          </p>
          <p className="text-body text-brown/70 mb-6">
            Our products aren't just commodities. They're a bridge between the rich agricultural heritage of India and the modern families who value authentic, wholesome food. From the golden wheat fields of the north to the traditional pulses of Gujarat, we bring you ingredients that have nourished generations.
          </p>
          <p className="text-body text-brown/70 mb-6">
            When you choose Khetar Vala, you're not just buying a product. You're supporting a way of life that honors the soil, the farmer, and the family gathered around the table.
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-card overflow-hidden">
          <Image
            src="/images/hero/about.svg"
            alt="Khetar Vala farm landscape with traditional farming"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        </div>
      </div>

      <section className="mb-20" aria-labelledby="values-heading">
        <SectionHeading
          id="values-heading"
          title="Our Values"
          subtitle="The principles that guide everything we do"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Authenticity',
              description: 'We stay true to traditional ingredients and methods, preserving the genuine flavors of Indian food heritage.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
            {
              title: 'Transparency',
              description: 'We provide honest information about our products without exaggerated claims. What you see is what you get.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ),
            },
            {
              title: 'Quality First',
              description: 'Every product is carefully selected for quality, freshness, and consistency — because your family deserves the best.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
            },
          ].map((value, index) => (
            <article
              key={value.title}
              className="card p-6 h-full animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                {value.icon}
              </div>
              <h3 className="text-heading-md font-heading font-medium text-dark mb-2">
                {value.title}
              </h3>
              <p className="text-body text-brown/70">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream rounded-card p-8 md:p-12" aria-labelledby="commitment-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="commitment-heading" className="text-display-sm font-heading font-medium text-dark mb-6">
            Our Commitment to You
          </h2>
          <p className="text-body-lg text-brown/70 mb-8">
            We believe in building lasting relationships based on trust. That means no hidden additives, no misleading claims, and no compromise on quality.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left mb-8">
            {[
              'No artificial preservatives or colors',
              'No misleading health claims',
              'Direct farm sourcing',
              'Transparent pricing',
              'Responsive customer support',
              'Continuous quality improvement',
            ].map((item, index) => (
              <div key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-body text-brown/80">{item}</span>
              </div>
            ))}
          </div>
          <a
            href="/products"
            className="btn-primary inline-flex items-center gap-2"
          >
            Explore Our Products
            <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}