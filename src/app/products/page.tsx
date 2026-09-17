import { Metadata } from 'next';
import { ProductsClient } from './ProductsClient';
import { generateOrganizationSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { defaultMetadata, generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Khetar Vala Products | Grains, Pulses, Ghee & Natural Products',
  'Explore Khetar Vala\'s range of organic wheat, bajra, jowar, chana, moong, toor dal, urad dal, moth, rajma, cow ghee, and natural soaps. Contact for prices.',
  '/products',
  ['Khetar Vala products', 'organic wheat', 'bajra', 'jowar', 'chana', 'moong dal', 'toor dal', 'urad dal', 'moth', 'rajma', 'cow ghee', 'natural soap']
);

const organizationSchema = generateOrganizationSchema();

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <div className="container py-16 sm:py-20 lg:py-24">
        <ProductsClient />
      </div>
    </>
  );
}