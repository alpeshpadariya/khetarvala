import { SectionHeading } from '@/components/common/SectionHeading';
import { classNames } from '@/lib/utils';

const qualityPoints = [
  {
    title: 'Direct Farm Sourcing',
    description: 'We work closely with farms to bring you produce straight from the source, reducing intermediaries and ensuring freshness.',
  },
  {
    title: 'Traditional Methods',
    description: 'Our ghee and select products are prepared using time-honored techniques that preserve natural flavor and nutrition.',
  },
  {
    title: 'No Artificial Additives',
    description: 'Our products are free from artificial preservatives, colors, and flavors — just pure, natural ingredients.',
  },
  {
    title: 'Careful Selection',
    description: 'Each batch is inspected for quality, size, and consistency before it reaches your kitchen.',
  },
  {
    title: 'Transparent Information',
    description: 'We provide honest product details without exaggerated claims. Contact us for any specific questions.',
  },
  {
    title: 'Family Trusted',
    description: 'Chosen by families who value authentic ingredients for their daily cooking and traditional recipes.',
  },
];

export function ProductQuality() {
  return (
    <section className="section bg-cream" aria-labelledby="quality-heading">
      <div className="container">
        <SectionHeading
          id="quality-heading"
          title="Product Quality"
          subtitle="What makes our products different"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityPoints.map((point, index) => (
            <article
              key={point.title}
              className="card p-6 h-full animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="text-heading-md font-heading font-medium text-dark mb-2">
                {point.title}
              </h3>
              <p className="text-body text-brown/70">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}