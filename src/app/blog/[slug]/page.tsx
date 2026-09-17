import { Metadata } from 'next';
import { BlogPostClient } from './BlogPostClient';
import { getBlogPostBySlug, blogPosts } from '@/data/blog';
import { generateOrganizationSchema, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBlogMetadata, generateCanonicalUrl, SITE_URL } from '@/lib/seo';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Article Not Found' };
  return generateBlogMetadata(post);
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

const organizationSchema = generateOrganizationSchema();

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const articleSchema = generateArticleSchema(post);

  const breadcrumbItems = [
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Blog', url: `${SITE_URL}/blog/` },
    { name: post.title, url: `${SITE_URL}/blog/${slug}/` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <JsonLd data={[organizationSchema, articleSchema, breadcrumbSchema]} />
      <link rel="canonical" href={generateCanonicalUrl(`/blog/${slug}`)} />
      <div className="container py-16 sm:py-20 lg:py-24">
        <BlogPostClient post={post} />
      </div>
    </>
  );
}