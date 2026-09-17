import { Metadata } from 'next';
import { ProductDetailClient } from './ProductDetailClient';
import { getProductBySlug, getRelatedProducts, products } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';
import { generateOrganizationSchema, generateProductSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateProductMetadata, generateCanonicalUrl, SITE_URL } from '@/lib/seo';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ slug: string; productSlug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product) return { title: 'Product Not Found' };
  return generateProductMetadata(product);
}

export async function generateStaticParams() {
  return products.map(product => ({
    slug: product.category,
    productSlug: product.slug,
  }));
}

const organizationSchema = generateOrganizationSchema();

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug: categorySlug, productSlug } = await params;
  const product = getProductBySlug(productSlug);
  const category = getCategoryBySlug(categorySlug);

  if (!product || product.category !== categorySlug) notFound();

  const relatedProducts = getRelatedProducts(productSlug);
  const productSchema = generateProductSchema(product);

  const breadcrumbItems = [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Products', url: `${SITE_URL}/products/` },
    { name: category?.name || categorySlug, url: `${SITE_URL}/products/${categorySlug}/` },
    { name: product.name, url: `${SITE_URL}/products/${categorySlug}/${productSlug}/` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <JsonLd data={[organizationSchema, productSchema, breadcrumbSchema]} />
      <link rel="canonical" href={generateCanonicalUrl(`/products/${categorySlug}/${productSlug}`)} />
      <ProductDetailClient
        product={product}
        category={category}
        relatedProducts={relatedProducts}
      />
    </>
  );
}