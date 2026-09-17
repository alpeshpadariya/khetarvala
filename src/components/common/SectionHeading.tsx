import { classNames } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  className?: string;
  id?: string;
}

export function SectionHeading({ title, subtitle, alignment = 'center', className, id }: SectionHeadingProps) {
  return (
    <div id={id} className={classNames('section-heading', alignment === 'left' && 'text-left max-w-none mx-0', className)}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}