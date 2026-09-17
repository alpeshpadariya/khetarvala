import { classNames } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

export function FeatureCard({ icon, title, description, className, style }: FeatureCardProps) {
  return (
    <article className={classNames('card p-6 sm:p-8 h-full', className)} style={style}>
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-heading-md font-heading font-medium text-dark mb-2">
        {title}
      </h3>
      <p className="text-body text-brown/70">
        {description}
      </p>
    </article>
  );
}