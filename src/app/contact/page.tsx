import { Metadata } from 'next';
import { ContactPageClient } from './ContactPageClient';
import { generateOrganizationSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/seo';
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/whatsapp';

export const metadata: Metadata = generatePageMetadata(
  'Contact Khetar Vala | WhatsApp Inquiry',
  'Contact Khetar Vala for product inquiries, bulk orders, and more. Reach us directly on WhatsApp at +91 84014 77557.',
  '/contact',
  ['Khetar Vala contact', 'WhatsApp inquiry', 'organic food contact', 'bulk order inquiry']
);

const organizationSchema = generateOrganizationSchema();

export default function ContactPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <div className="container py-16 sm:py-20 lg:py-24">
        <ContactPageClient />
      </div>
    </>
  );
}