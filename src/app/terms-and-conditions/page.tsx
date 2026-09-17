import { Metadata } from 'next';
import { LegalPageClient } from '../privacy-policy/LegalPageClient';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Terms & Conditions | Khetar Vala',
  'Khetar Vala terms and conditions of use.',
  '/terms-and-conditions',
  ['terms and conditions', 'terms of service', 'Khetar Vala terms']
);

export default function TermsPage() {
  return (
    <div className="container py-16 sm:py-20 lg:py-24">
      <LegalPageClient
        title="Terms & Conditions"
        lastUpdated="January 2024"
        sections={[
          {
            heading: 'Acceptance of Terms',
            content: `By accessing and using this website and engaging with Khetar Vala for product inquiries or purchases, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.`
          },
          {
            heading: 'Product Information',
            content: `We strive to provide accurate product descriptions, images, and information. However, natural products may vary in appearance, size, and characteristics. Product images are representative; actual products may differ slightly. We do not guarantee specific outcomes, health benefits, or certifications unless explicitly stated with verifiable evidence.`
          },
          {
            heading: 'Pricing and Availability',
            content: `Prices are not displayed on the website and are provided upon inquiry via WhatsApp. Prices may vary based on quantity, location, market conditions, and product batch. We reserve the right to change prices without prior notice. Product availability is subject to change; contact us for current stock status.`
          },
          {
            heading: 'Orders and Inquiries',
            content: `All orders and inquiries are handled through WhatsApp. An inquiry does not constitute a binding order. Orders are confirmed only after mutual agreement on product, quantity, price, and delivery terms. We reserve the right to decline any order.`
          },
          {
            heading: 'Delivery and Shipping',
            content: `Delivery options, timelines, and costs are discussed and agreed upon via WhatsApp for each order. We do not guarantee specific delivery dates unless explicitly confirmed in writing. Risk of loss transfers to the buyer upon dispatch from our facility or designated pickup point.`
          },
          {
            heading: 'Returns and Refunds',
            content: `Our refund and return policy is handled on a case-by-case basis. Please contact us via WhatsApp for any concerns. Perishable and natural products may not be eligible for return once dispatched.`
          },
          {
            heading: 'Disclaimer',
            content: `This website and its content are provided "as is" without warranties of any kind. We do not warrant that the website will be uninterrupted or error-free. We are not liable for any damages arising from the use of this website or reliance on product information.`
          },
          {
            heading: 'Governing Law',
            content: `These terms are governed by the laws of India. Disputes shall be subject to the jurisdiction of courts in Gujarat, India.`
          },
          {
            heading: 'Contact',
            content: `For questions about these terms, contact us on WhatsApp at +91 84014 77557.`
          },
        ]}
      />
    </div>
  );
}