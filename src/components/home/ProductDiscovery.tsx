import { SectionHeading } from '@/components/common/SectionHeading';
import { classNames } from '@/lib/utils';

const discoveryItems = [
  {
    title: 'Find by Category',
    description: 'Browse our organized categories — Grains, Pulses & Kathol, Ghee, and Natural Products.',
    link: { href: '/products', label: 'Explore Categories' },
  },
  {
    title: 'Search Products',
    description: 'Looking for something specific? Use our search to find wheat, chana, moong, ghee, and more.',
    link: { href: '/products', label: 'Search Products' },
  },
  {
    title: 'Read Our Blog',
    description: 'Learn about storage tips, cooking guides, and traditional ingredient knowledge.',
    link: { href: '/blog', label: 'Read Articles' },
  },
];

export function ProductDiscovery() {
  return (
    <section className="section" aria-labelledby="discovery-heading">
      <div className="container">
        <SectionHeading
          id="discovery-heading"
          title="Discover More"
          subtitle="Different ways to explore Khetar Vala products and knowledge"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {discoveryItems.map((item, index) => (
            <article
              key={item.title}
              className="card p-6 h-full animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-heading-md font-heading font-medium text-dark mb-3">
                {item.title}
              </h3>
              <p className="text-body text-brown/70 mb-4">
                {item.description}
              </p>
              <a
                href={item.link.href}
                className="inline-flex items-center gap-1.5 text-body-sm font-medium text-primary hover:text-primary-dark transition-colors link-underline"
              >
                {item.link.label}
                <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}