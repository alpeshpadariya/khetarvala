import { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { WhyKhetarVala } from '@/components/home/WhyKhetarVala';
import { ProductCategories } from '@/components/home/ProductCategories';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { FarmStory } from '@/components/home/FarmStory';
import { ProductQuality } from '@/components/home/ProductQuality';
import { ProductDiscovery } from '@/components/home/ProductDiscovery';
import { HomeFAQ } from '@/components/home/HomeFAQ';
import { FinalCTA } from '@/components/home/FinalCTA';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { defaultMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Khetar Vala | Farm Fresh Organic & Natural Food Products',
  description: 'Discover quality grains, pulses, ghee and natural products from Khetar Vala. From our fields to your family. Contact us on WhatsApp for inquiries.',
};

const organizationSchema = generateOrganizationSchema();
const webSiteSchema = generateWebSiteSchema();

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema, webSiteSchema]} />
      <Hero />
      <WhyKhetarVala />
      <ProductCategories />
      <FeaturedProducts />
      <FarmStory />
      <ProductQuality />
      <ProductDiscovery />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
}