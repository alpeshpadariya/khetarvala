'use client';

import { WHATSAPP_DISPLAY, getGeneralWhatsAppLink, trackWhatsAppClick } from '@/lib/whatsapp';
import { classNames } from '@/lib/utils';

export function FinalCTA() {
  const handleClick = () => {
    trackWhatsAppClick({
      page: '/',
      ctaLocation: 'final-cta',
    });
  };

  return (
    <section className="section bg-dark" aria-labelledby="final-cta-heading">
      <div className="container text-center">
        <h2 id="final-cta-heading" className="text-display-md font-heading font-medium text-white mb-4">
          Ready to Experience Farm Fresh Quality?
        </h2>
        <p className="text-body-lg text-brown/40 mb-8 max-w-2xl mx-auto">
          Connect with us directly on WhatsApp for prices, availability, and personalized assistance. We're here to help you find the right products for your family.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getGeneralWhatsAppLink('final-cta')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto text-center text-lg px-8 py-4"
            onClick={handleClick}
          >
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a39.07 39.07 0 0 1-1.647-.29c-.633-.147-1.184-.43-1.605-.792a45.815 45.815 0 0 1-4.92-4.815c-.36-.42-.645-.97-.79-1.604-.146-.634-.287-1.185-.29-1.647a.38.38 0 0 1 .114-.394 45.63 45.63 0 0 1 3.422-4.287.404.404 0 0 1 .483-.01c1.23.727 2.58 1.37 4.07 1.894a.386.386 0 0 1 .213.566c-.282.998-.83 1.953-1.654 2.792a40.366 40.366 0 0 1-4.702 3.34c-.42.19-.908.283-1.302.283-.393 0-.88-.09-1.303-.283z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href="/products"
            className="btn-outline w-full sm:w-auto text-center border-white/30 text-white hover:bg-white/10"
          >
            Browse Products
          </a>
        </div>
        <p className="mt-6 text-body-sm text-brown/50">
          WhatsApp: <a href={getGeneralWhatsAppLink('final-cta-footer')} className="text-white hover:text-primary-light transition-colors underline" target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a>
        </p>
      </div>
    </section>
  );
}