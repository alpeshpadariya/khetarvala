import { Metadata } from 'next';
import { BlogPageClient } from './BlogPageClient';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/seo';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = generatePageMetadata(
  'Blog | Khetar Vala',
  'Read our latest articles on Indian grains, pulses, ghee, traditional cooking, and natural product guides.',
  '/blog',
  ['Khetar Vala blog', 'Indian food blog', 'cooking guides', 'grain storage', 'pulse recipes', 'natural products']
);

const organizationSchema = generateOrganizationSchema();
const webSiteSchema = generateWebSiteSchema();

export default function BlogPage() {
  return (
    <>
      <JsonLd data={[organizationSchema, webSiteSchema]} />
      <div className="container py-16 sm:py-20 lg:py-24">
        <BlogPageClient posts={blogPosts} />
      </div>
    </>
  );
}