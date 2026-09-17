import { Metadata } from 'next';
import { LegalPageClient } from '../privacy-policy/LegalPageClient';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Shipping Policy | Khetar Vala',
  'Khetar Vala shipping policy — delivery options, areas, and timelines.',
  '/shipping-policy',
  ['shipping policy', 'delivery', 'Khetar Vala shipping']
);

export default function ShippingPolicyPage() {
  return (
    <div className="container py-16 sm:py-20 lg:py-24">
      <LegalPageClient
        title="Shipping Policy"
        lastUpdated="January 2024"
        sections={[
          {
            heading: 'Delivery Areas',
            content: `We primarily serve customers across India, with focus on Gujarat, Maharashtra, Rajasthan, and neighboring states. For other locations, please inquire via WhatsApp for feasibility and costs.`
          },
          {
            heading: 'Shipping Methods',
            content: `We work with trusted logistics partners and can arrange delivery via courier, transport, or pickup as mutually agreed. Specific carriers and methods are confirmed per order based on location, quantity, and urgency.`
          },
          {
            heading: 'Shipping Costs',
            content: `Shipping costs are calculated per order based on weight, volume, destination, and chosen carrier. Costs are communicated and agreed upon before dispatch. We do not offer free shipping as a standard policy.`
          },
          {
            heading: 'Delivery Timelines',
            content: `Estimated delivery times vary by location and carrier. Typical estimates: Gujarat (1-3 business days), Metro cities (3-5 business days), Other locations (5-10 business days). These are estimates, not guarantees. We are not liable for carrier delays.`
          },
          {
            heading: 'Order Processing',
            content: `Orders are processed after confirmation of payment (as agreed). Processing typically takes 1-2 business days. You will receive dispatch confirmation with tracking details (where available) via WhatsApp.`
          },
          {
            heading: 'Packaging',
            content: `Products are packed securely for transit using appropriate materials. Natural products (grains, pulses) are packed in food-grade bags. Ghee jars are bubble-wrapped. Soaps are packed to prevent damage.`
          },
          {
            heading: 'Receiving Your Order',
            content: `Please inspect packages upon delivery. Report any damage or discrepancy within 24 hours via WhatsApp with photos. Claims after 24 hours may not be accepted.`
          },
          {
            heading: 'Contact',
            content: `For shipping questions, contact us on WhatsApp at +91 84014 77557.`
          },
        ]}
      />
    </div>
  );
}