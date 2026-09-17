'use client';

import Image from 'next/image';
import { WHATSAPP_DISPLAY, getGeneralWhatsAppLink, trackWhatsAppClick } from '@/lib/whatsapp';
import { classNames } from '@/lib/utils';

export function Hero() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick({
      page: '/',
      ctaLocation: 'hero',
    });
  };

  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/50 to-dark/30" />
      </div>

      <div className="container relative z-10 py-16 sm:py-24">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-display-xl font-heading font-medium text-white mb-6 text-balance animate-fade-in">
            From Our Fields to Your Family
          </h1>
          <p className="text-body-lg sm:text-display-sm text-white/90 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '100ms' }}>
            Discover quality grains, pulses, ghee and natural products inspired by the goodness of traditional Indian farming.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <a
              href="/products"
              className="btn-primary w-full sm:w-auto text-center"
            >
              Explore Products
            </a>
            <a
              href={getGeneralWhatsAppLink('hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto text-center border-2 border-white/30 hover:bg-white/10"
              onClick={handleWhatsAppClick}
            >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a39.07 39.07 0 0 1-1.647-.29c-.633-.147-1.184-.43-1.605-.792a45.815 45.815 0 0 1-4.92-4.815c-.36-.42-.645-.97-.79-1.604-.146-.634-.287-1.185-.29-1.647a.38.38 0 0 1 .114-.394 45.63 45.63 0 0 1 3.422-4.287.404.404 0 0 1 .483-.01c1.23.727 2.58 1.37 4.07 1.894a.386.386 0 0 1 .213.566c-.282.998-.83 1.953-1.654 2.792a40.366 40.366 0 0 1-4.702 3.34c-.42.19-.908.283-1.302.283-.393 0-.88-.09-1.303-.283z" />
              </svg>
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
          <p className="mt-6 text-body-sm text-white/70 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <span className="font-medium">{WHATSAPP_DISPLAY}</span> &nbsp;|&nbsp; Available on WhatsApp for inquiries
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" aria-hidden="true" />
    </section>
  );
}