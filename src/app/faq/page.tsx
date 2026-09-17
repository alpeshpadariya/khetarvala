import { Metadata } from 'next';
import { FAQPageClient } from './FAQPageClient';
import { generateOrganizationSchema, generateFAQSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/seo';

const faqs = [
  {
    question: 'What products does Khetar Vala offer?',
    answer: 'Khetar Vala offers grains (organic wheat, bajra, jowar), pulses & kathol (chana, moong, toor dal, urad dal, moth, rajma), ghee (cow ghee), and natural products (handmade soaps).',
  },
  {
    question: 'How can I inquire about a product?',
    answer: 'You can contact Khetar Vala directly through WhatsApp at +91 84014 77557. Each product page has a dedicated WhatsApp button that pre-fills your inquiry with the product name.',
  },
  {
    question: 'Can I ask about bulk quantities?',
    answer: 'Yes, you can inquire about bulk quantities through WhatsApp. Our team will confirm availability and provide details based on your requirements.',
  },
  {
    question: 'How do I know product availability?',
    answer: 'Product availability can vary by season and demand. Please contact us through WhatsApp for current stock status and estimated restock timelines.',
  },
  {
    question: 'Do you ship across India?',
    answer: 'Shipping options and delivery areas can be discussed directly through WhatsApp. Contact us with your location for specific information about delivery.',
  },
  {
    question: 'Are your products certified organic?',
    answer: 'Our products are sourced from farms following natural cultivation practices. For specific certification details, please contact us directly as certifications vary by product and batch.',
  },
  {
    question: 'What is the shelf life of your products?',
    answer: 'Shelf life varies by product. Grains and pulses typically last 6-12 months when stored properly. Ghee can last 12+ months. Natural soaps last 12-18 months. Specific details are available on request.',
  },
  {
    question: 'How should I store grains and pulses?',
    answer: 'Store in a cool, dry place in airtight containers to maintain freshness and prevent moisture and pests. Avoid direct sunlight.',
  },
  {
    question: 'Do you offer wholesale pricing?',
    answer: 'Yes, wholesale pricing is available for bulk orders. Contact us on WhatsApp with your requirements for a customized quote.',
  },
  {
    question: 'Can I return or exchange products?',
    answer: 'Our return and exchange policy can be discussed on a case-by-case basis. Please contact us through WhatsApp for assistance.',
  },
];

export const metadata: Metadata = generatePageMetadata(
  'FAQ | Khetar Vala',
  'Frequently asked questions about Khetar Vala products, ordering, shipping, and more.',
  '/faq',
  ['Khetar Vala FAQ', 'organic food questions', 'pulses FAQ', 'ghee FAQ', 'natural soap FAQ']
);

const organizationSchema = generateOrganizationSchema();
const faqSchema = generateFAQSchema(faqs);

export default function FAQPage() {
  return (
    <>
      <JsonLd data={[organizationSchema, faqSchema]} />
      <div className="container py-16 sm:py-20 lg:py-24">
        <FAQPageClient faqs={faqs} />
      </div>
    </>
  );
}