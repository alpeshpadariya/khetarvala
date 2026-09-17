import Link from 'next/link';
import { WHATSAPP_DISPLAY, getGeneralWhatsAppLink } from '@/lib/whatsapp';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-beige mb-6">
          <svg className="w-10 h-10 text-brown/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 7l4 4m-4-4h-11" />
          </svg>
        </div>
        <h1 className="text-display-md font-heading font-medium text-dark mb-3">
          Page Not Found
        </h1>
        <p className="text-body text-brown/70 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/products" className="btn-outline">
            Explore Products
          </Link>
        </div>
        <p className="mt-8 text-body-sm text-brown/60">
          Need help?{' '}
          <a
            href={getGeneralWhatsAppLink('404-page')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark font-medium link-underline"
          >
            Chat on WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </p>
      </div>
    </div>
  );
}