'use client';

import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SectionHeading } from '@/components/common/SectionHeading';
import { WhatsAppCTA } from '@/components/common/WhatsAppCTA';
import { WHATSAPP_DISPLAY, WHATSAPP_URL, getGeneralWhatsAppLink } from '@/lib/whatsapp';
import { classNames } from '@/lib/utils';

export function ContactPageClient() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Contact' },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      <SectionHeading
        title="Get in Touch"
        subtitle="We'd love to hear from you. Connect with us directly on WhatsApp for the fastest response."
        className="mb-12"
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="space-y-8">
          <div className="card p-8">
            <h3 className="text-heading-lg font-heading font-medium text-dark mb-6">
              WhatsApp (Primary)
            </h3>
            <p className="text-body text-brown/70 mb-6">
              For all inquiries — product questions, pricing, availability, bulk orders, or general information — WhatsApp is the fastest way to reach us.
            </p>
            <div className="space-y-4">
              <WhatsAppCTA
                variant="primary"
                size="lg"
                className="w-full"
                ctaLocation="contact-page-primary"
              >
                Start WhatsApp Chat
              </WhatsAppCTA>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-body font-medium text-primary hover:text-primary-dark transition-colors link-underline"
              >
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a39.07 39.07 0 0 1-1.647-.29c-.633-.147-1.184-.43-1.605-.792a45.815 45.815 0 0 1-4.92-4.815c-.36-.42-.645-.97-.79-1.604-.146-.634-.287-1.185-.29-1.647a.38.38 0 0 1 .114-.394 45.63 45.63 0 0 1 3.422-4.287.404.404 0 0 1 .483-.01c1.23.727 2.58 1.37 4.07 1.894a.386.386 0 0 1 .213.566c-.282.998-.83 1.953-1.654 2.792a40.366 40.366 0 0 1-4.702 3.34c-.42.19-.908.283-1.302.283-.393 0-.88-.09-1.303-.283z" />
                </svg>
                <span>{WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="text-heading-lg font-heading font-medium text-dark mb-6">
              What You Can Ask About
            </h3>
            <ul className="space-y-3" role="list">
              {[
                'Product prices and available sizes',
                'Current stock and availability',
                'Bulk quantity inquiries',
                'Delivery options and areas',
                'Product specifications and usage',
                'Wholesale and retail orders',
                'General questions about our products',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-body text-brown/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="card p-8">
            <h3 className="text-heading-lg font-heading font-medium text-dark mb-6">
              Send a Quick Message
            </h3>
            <p className="text-body text-brown/70 mb-6">
              Prefer to start with a message? Use the button below to open WhatsApp with a pre-filled greeting.
            </p>
            <WhatsAppCTA
              variant="primary"
              size="lg"
              className="w-full mb-4"
              ctaLocation="contact-page-quick"
            >
              Message Us on WhatsApp
            </WhatsAppCTA>
            <p className="text-body-sm text-brown/60">
              We typically respond within a few hours during business hours.
            </p>
          </div>

          <div className="card p-8">
            <h3 className="text-heading-lg font-heading font-medium text-dark mb-6">
              Business Information
            </h3>
            <dl className="space-y-4 text-body text-brown/70">
              <div className="flex items-start gap-3">
                <dt className="text-brown/60 shrink-0 w-24 font-medium">Brand</dt>
                <dd>Khetar Vala</dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="text-brown/60 shrink-0 w-24 font-medium">Tagline</dt>
                <dd>From Our Fields to Your Family</dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="text-brown/60 shrink-0 w-24 font-medium">WhatsApp</dt>
                <dd>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark link-underline">
                    {WHATSAPP_DISPLAY}
                  </a>
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="text-brown/60 shrink-0 w-24 font-medium">Focus</dt>
                <dd>Natural & organic food products, traditional Indian grains, pulses, ghee, natural soaps</dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="text-brown/60 shrink-0 w-24 font-medium">Primary Market</dt>
                <dd>India (Gujarat, Maharashtra, Rajasthan, and nationwide)</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <section className="mt-16" aria-labelledby="faq-contact-heading">
        <h2 id="faq-contact-heading" className="text-heading-lg font-heading font-medium text-center text-dark mb-8">
          Before You Contact Us
        </h2>
        <div className="max-w-3xl mx-auto">
          <dl className="space-y-6">
            {[
              {
                q: 'Do you have a price list?',
                a: 'We don\'t publish a fixed price list as prices vary by quantity, location, and market conditions. Contact us on WhatsApp for current pricing.',
              },
              {
                q: 'Can I visit your farm or facility?',
                a: 'We operate through a network of partner farms. For specific visit requests, please contact us directly.',
              },
              {
                q: 'Do you offer samples?',
                a: 'Sample availability depends on the product and current stock. Please inquire on WhatsApp for details.',
              },
              {
                q: 'What is your minimum order quantity?',
                a: 'Minimum quantities vary by product. We cater to both retail and wholesale needs. Contact us for specifics.',
              },
            ].map((faq, index) => (
              <div key={index} className="card p-6">
                <dt className="text-body font-medium text-dark mb-2">{faq.q}</dt>
                <dd className="text-body text-brown/70">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}