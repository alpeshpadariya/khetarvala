import { Metadata } from 'next';
import { CategoryPageClient } from './CategoryPageClient';
import { getCategoryBySlug, categories } from '@/data/categories';
import { generateOrganizationSchema, generateCategorySchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateCategoryMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: 'Category Not Found' };
  return generateCategoryMetadata(category);
}

export async function generateStaticParams() {
  return categories.map(category => ({
    slug: category.slug,
  }));
}

const organizationSchema = generateOrganizationSchema();

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const categorySchema = generateCategorySchema(category);

  return (
    <>
      <JsonLd data={[organizationSchema, categorySchema]} />
      <div className="container py-16 sm:py-20 lg:py-24">
        <CategoryPageClient category={category} />
      </div>
    </>
  );
}