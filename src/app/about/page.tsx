import { Metadata } from 'next';
import { AboutPageClient } from './AboutPageClient';
import { generateOrganizationSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'About Khetar Vala | Our Story & Philosophy',
  'Learn about Khetar Vala\'s farm-to-family philosophy, commitment to quality, and traditional Indian food values.',
  '/about',
  ['Khetar Vala about', 'farm to family', 'organic food philosophy', 'traditional Indian food']
);

const organizationSchema = generateOrganizationSchema();

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <div className="container py-16 sm:py-20 lg:py-24">
        <AboutPageClient />
      </div>
    </>
  );
}