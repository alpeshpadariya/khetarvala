'use client';

import { getProductWhatsAppLink, getCategoryWhatsAppLink, getGeneralWhatsAppLink, trackWhatsAppClick } from '@/lib/whatsapp';
import { classNames } from '@/lib/utils';

interface WhatsAppCTAProps {
  productName?: string;
  category?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'inline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  ctaLocation?: string;
  onClick?: () => void;
}

export function WhatsAppCTA({
  productName,
  category,
  children,
  variant = 'primary',
  size = 'default',
  className,
  ctaLocation = 'button',
  onClick,
}: WhatsAppCTAProps) {
  let href: string;

  if (productName) {
    href = getProductWhatsAppLink(productName, ctaLocation);
  } else if (category) {
    href = getCategoryWhatsAppLink(category, ctaLocation);
  } else {
    href = getGeneralWhatsAppLink(ctaLocation);
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackWhatsAppClick({
      product: productName,
      category,
      page: window.location.pathname,
      ctaLocation,
    });
    onClick?.();
  };

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 rounded-button';

  const variantStyles = {
    primary: 'bg-[#25D366] text-white hover:bg-[#1DB954] active:bg-[#128C3E]',
    secondary: 'bg-white text-[#25D366] border-2 border-[#25D366] hover:bg-[#25D366] hover:text-white active:bg-[#1DB954]',
    inline: 'text-[#25D366] hover:text-[#1DB954] underline-offset-2',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-body-sm',
    default: 'px-6 py-3 text-button',
    lg: 'px-8 py-4 text-body',
  };

  if (variant === 'inline') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames(baseStyles, variantStyles.inline, sizeStyles[size], className)}
        aria-label={productName ? `Inquire about ${productName} on WhatsApp` : 'Contact us on WhatsApp'}
        onClick={handleClick}
      >
        <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a39.07 39.07 0 0 1-1.647-.29c-.633-.147-1.184-.43-1.605-.792a45.815 45.815 0 0 1-4.92-4.815c-.36-.42-.645-.97-.79-1.604-.146-.634-.287-1.185-.29-1.647a.38.38 0 0 1 .114-.394 45.63 45.63 0 0 1 3.422-4.287.404.404 0 0 1 .483-.01c1.23.727 2.58 1.37 4.07 1.894a.386.386 0 0 1 .213.566c-.282.998-.83 1.953-1.654 2.792a40.366 40.366 0 0 1-4.702 3.34c-.42.19-.908.283-1.302.283-.393 0-.88-.09-1.303-.283z" />
        </svg>
        {children || (productName ? `Ask About ${productName}` : 'Chat on WhatsApp')}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      aria-label={productName ? `Inquire about ${productName} on WhatsApp` : 'Contact us on WhatsApp'}
      onClick={handleClick}
    >
      <svg className={classNames('shrink-0', size === 'sm' && 'w-4 h-4', size === 'default' && 'w-5 h-5', size === 'lg' && 'w-6 h-6')} aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a39.07 39.07 0 0 1-1.647-.29c-.633-.147-1.184-.43-1.605-.792a45.815 45.815 0 0 1-4.92-4.815c-.36-.42-.645-.97-.79-1.604-.146-.634-.287-1.185-.29-1.647a.38.38 0 0 1 .114-.394 45.63 45.63 0 0 1 3.422-4.287.404.404 0 0 1 .483-.01c1.23.727 2.58 1.37 4.07 1.894a.386.386 0 0 1 .213.566c-.282.998-.83 1.953-1.654 2.792a40.366 40.366 0 0 1-4.702 3.34c-.42.19-.908.283-1.302.283-.393 0-.88-.09-1.303-.283z" />
      </svg>
      {children || (productName ? `Ask About ${productName}` : 'Inquire on WhatsApp')}
    </a>
  );
}