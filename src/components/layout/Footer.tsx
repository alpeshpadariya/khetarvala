import Link from 'next/link';
import { WHATSAPP_DISPLAY, getGeneralWhatsAppLink } from '@/lib/whatsapp';
import { classNames } from '@/lib/utils';

const footerLinks = {
  main: [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ],
  categories: [
    { href: '/products/grains', label: 'Grains' },
    { href: '/products/pulses-kathol', label: 'Pulses & Kathol' },
    { href: '/products/ghee', label: 'Ghee' },
    { href: '/products/natural-products', label: 'Natural Products' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-and-conditions', label: 'Terms & Conditions' },
    { href: '/shipping-policy', label: 'Shipping Policy' },
    { href: '/refund-policy', label: 'Refund Policy' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white" role="contentinfo">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-display-sm font-heading font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-button mb-4"
              aria-label="Khetar Vala - Home"
            >
              <span className="text-primary" aria-hidden="true">KV</span>
              <span>Khetar Vala</span>
            </Link>
            <p className="text-body text-brown/40 mb-6 max-w-xs">
              From Our Fields to Your Family
            </p>
            <p className="text-body-sm text-brown/50 mb-6 max-w-sm">
              Quality grains, pulses, ghee and natural products inspired by India's farming traditions.
            </p>
            <a
              href={getGeneralWhatsAppLink('footer')}
              className="inline-flex items-center gap-2 text-body font-medium text-primary hover:text-primary-light transition-colors link-underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a39.07 39.07 0 0 1-1.647-.29c-.633-.147-1.184-.43-1.605-.792a45.815 45.815 0 0 1-4.92-4.815c-.36-.42-.645-.97-.79-1.604-.146-.634-.287-1.185-.29-1.647a.38.38 0 0 1 .114-.394 45.63 45.63 0 0 1 3.422-4.287.404.404 0 0 1 .483-.01c1.23.727 2.58 1.37 4.07 1.894a.386.386 0 0 1 .213.566c-.282.998-.83 1.953-1.654 2.792a40.366 40.366 0 0 1-4.702 3.34c-.42.19-.908.283-1.302.283-.393 0-.88-.09-1.303-.283z" />
              </svg>
              <span>{WHATSAPP_DISPLAY}</span>
            </a>
          </div>

          <nav aria-label="Main navigation">
            <h3 className="text-heading-sm font-medium text-white mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.main.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-brown/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Product categories">
            <h3 className="text-heading-sm font-medium text-white mb-4">Categories</h3>
            <ul className="space-y-3">
              {footerLinks.categories.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-brown/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal information">
            <h3 className="text-heading-sm font-medium text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-brown/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-brown/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-body-sm text-brown/50">
              © {currentYear} Khetar Vala. All rights reserved.
            </p>
            <p className="text-body-sm text-brown/50">
              Farm fresh organic & natural food products
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}