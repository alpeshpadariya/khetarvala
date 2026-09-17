import { Metadata } from 'next';
import { LegalPageClient } from '../privacy-policy/LegalPageClient';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Refund Policy | Khetar Vala',
  'Khetar Vala refund and return policy.',
  '/refund-policy',
  ['refund policy', 'returns', 'Khetar Vala refund']
);

export default function RefundPolicyPage() {
  return (
    <div className="container py-16 sm:py-20 lg:py-24">
      <LegalPageClient
        title="Refund Policy"
        lastUpdated="January 2024"
        sections={[
          {
            heading: 'General Policy',
            content: `We want you to be satisfied with your purchase. Refunds and returns are handled on a case-by-case basis. Please contact us via WhatsApp at +91 84014 77557 within 7 days of receiving your order to discuss any concerns.`
          },
          {
            heading: 'Eligible Situations',
            content: `We may consider refunds or replacements for:
- Products damaged during transit (reported within 24 hours with photos)
- Incorrect items shipped
- Significant quality issues not matching the description provided at time of purchase`
          },
          {
            heading: 'Non-Eligible Situations',
            content: `Refunds are typically not available for:
- Change of mind or incorrect quantity ordered
- Natural variations in agricultural products (color, size, texture)
- Products opened, used, or stored improperly
- Perishable items (grains, pulses, ghee) once dispatched
- Natural soaps once opened or used`
          },
          {
            heading: 'Process',
            content: `1. Contact us via WhatsApp with order details and photos (if applicable)
2. We will assess and respond within 2-3 business days
3. If approved, we will coordinate return/replacement logistics
4. Refunds are issued via the original payment method or as agreed`
          },
          {
            heading: 'Return Shipping',
            content: `Return shipping costs are borne by the customer unless the return is due to our error (wrong item, transit damage). We will provide return address and instructions upon approval.`
          },
          {
            heading: 'Bulk/Wholesale Orders',
            content: `Bulk and wholesale orders are final sale unless a quality issue is documented and reported within 48 hours of receipt. Terms are agreed per order.`
          },
          {
            heading: 'Contact',
            content: `For refund requests or questions, contact us on WhatsApp at +91 84014 77557.`
          },
        ]}
      />
    </div>
  );
}