'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { WHATSAPP_DISPLAY, getGeneralWhatsAppLink } from '@/lib/whatsapp';
import { classNames } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={classNames(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-fast',
        scrolled && 'bg-white/95 backdrop-blur-sm shadow-card border-b border-brown/10'
      )}
      role="banner"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link
            href="/"
            className="flex items-center gap-2 text-display-sm font-heading font-medium text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-button"
            aria-label={`${SITE_NAME} - Home`}
          >
            <span className="text-primary" aria-hidden="true">KV</span>
            <span>Khetar Vala</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <ul className="flex items-center gap-6">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm font-medium text-dark/80 hover:text-primary transition-colors duration-fast link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={getGeneralWhatsAppLink('header')}
              className="btn-whatsapp hidden sm:inline-flex"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'whatsapp_inquiry_click', {
                    page: window.location.pathname,
                    ctaLocation: 'header',
                  });
                }
              }}
            >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a39.07 39.07 0 0 1-1.647-.29c-.633-.147-1.184-.43-1.605-.792a45.815 45.815 0 0 1-4.92-4.815c-.36-.42-.645-.97-.79-1.604-.146-.634-.287-1.185-.29-1.647a.38.38 0 0 1 .114-.394 45.63 45.63 0 0 1 3.422-4.287.404.404 0 0 1 .483-.01c1.23.727 2.58 1.37 4.07 1.894a.386.386 0 0 1 .213.566c-.282.998-.83 1.953-1.654 2.792a40.366 40.366 0 0 1-4.702 3.34c-.42.19-.908.283-1.302.283-.393 0-.88-.09-1.303-.283z" />
              </svg>
              <span>{WHATSAPP_DISPLAY}</span>
            </a>
          </div>

          <button
            className="md:hidden p-2 text-dark hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-brown/10 animate-slide-up">
            <nav role="navigation" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-3">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2 text-body font-medium text-dark/80 hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href={getGeneralWhatsAppLink('mobile-menu')}
              className="btn-whatsapp mt-4 w-full justify-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'whatsapp_inquiry_click', {
                    page: window.location.pathname,
                    ctaLocation: 'mobile-menu',
                  });
                }
              }}
            >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a39.07 39.07 0 0 1-1.647-.29c-.633-.147-1.184-.43-1.605-.792a45.815 45.815 0 0 1-4.92-4.815c-.36-.42-.645-.97-.79-1.604-.146-.634-.287-1.185-.29-1.647a.38.38 0 0 1 .114-.394 45.63 45.63 0 0 1 3.422-4.287.404.404 0 0 1 .483-.01c1.23.727 2.58 1.37 4.07 1.894a.386.386 0 0 1 .213.566c-.282.998-.83 1.953-1.654 2.792a40.366 40.366 0 0 1-4.702 3.34c-.42.19-.908.283-1.302.283-.393 0-.88-.09-1.303-.283z" />
              </svg>
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

const SITE_NAME = 'Khetar Vala';