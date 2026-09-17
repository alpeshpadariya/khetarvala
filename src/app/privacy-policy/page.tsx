import { Metadata } from 'next';
import { LegalPageClient } from './LegalPageClient';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Privacy Policy | Khetar Vala',
  'Khetar Vala privacy policy — how we collect, use, and protect your information.',
  '/privacy-policy',
  ['privacy policy', 'data protection', 'Khetar Vala privacy']
);

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-16 sm:py-20 lg:py-24">
      <LegalPageClient
        title="Privacy Policy"
        lastUpdated="January 2024"
        sections={[
          {
            heading: 'Information We Collect',
            content: `We collect information you provide directly to us, such as when you contact us via WhatsApp, inquire about products, or communicate with our team. This may include your name, phone number, email address, and the details of your inquiry.

We do not collect personal information through automated tracking, cookies, or analytics on this website beyond what is necessary for basic functionality.`
          },
          {
            heading: 'How We Use Your Information',
            content: `Your information is used solely to respond to your inquiries, provide product information, process orders (via WhatsApp coordination), and improve our service. We do not sell, rent, or share your personal information with third parties for marketing purposes.`
          },
          {
            heading: 'WhatsApp Communications',
            content: `When you contact us via WhatsApp, your communication is subject to WhatsApp's own privacy policy and terms of service. We retain chat history only as long as necessary for customer service and order management.`
          },
          {
            heading: 'Data Security',
            content: `We implement reasonable measures to protect your information from unauthorized access, alteration, or disclosure. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.`
          },
          {
            heading: 'Your Rights',
            content: `You may request access to, correction of, or deletion of your personal information by contacting us via WhatsApp. We will respond within a reasonable timeframe.`
          },
          {
            heading: 'Changes to This Policy',
            content: `We may update this policy occasionally. Changes will be posted on this page with an updated "Last Updated" date.`
          },
          {
            heading: 'Contact Us',
            content: `For questions about this policy, contact us on WhatsApp at +91 84014 77557.`
          },
        ]}
      />
    </div>
  );
}