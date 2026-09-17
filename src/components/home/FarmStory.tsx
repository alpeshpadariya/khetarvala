import Image from 'next/image';
import { SectionHeading } from '@/components/common/SectionHeading';
import { classNames } from '@/lib/utils';

export function FarmStory() {
  return (
    <section className="section" aria-labelledby="story-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-card overflow-hidden">
            <Image
              src="/images/hero/farm-story.svg"
              alt="Khetar Vala farm landscape with golden wheat fields"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            />
          </div>
          <div>
            <SectionHeading
              id="story-heading"
              title="Our Story"
              subtitle="Rooted in tradition, committed to quality"
              alignment="left"
            />
            <div className="prose prose-brown max-w-none">
              <p className="text-body-lg text-brown/80 mb-6">
                Khetar Vala was born from a simple belief: good food begins with good ingredients. Our name, meaning "from the fields" in Gujarati, reflects our deep connection to the land and the farmers who nurture it.
              </p>
              <p className="text-body text-brown/70 mb-6">
                We work directly with farms that share our values — those who understand that the best produce comes from patience, care, and respect for natural cycles. Every grain, every pulse, every jar of ghee carries this philosophy.
              </p>
              <p className="text-body text-brown/70 mb-6">
                Our products aren't just commodities. They're a bridge between the rich agricultural heritage of India and the modern families who value authentic, wholesome food. From the golden wheat fields of the north to the traditional pulses of Gujarat, we bring you ingredients that have nourished generations.
              </p>
              <p className="text-body text-brown/70 mb-6">
                When you choose Khetar Vala, you're not just buying a product. You're supporting a way of life that honors the soil, the farmer, and the family gathered around the table.
              </p>
              <a
                href="/about"
                className="btn-outline inline-flex items-center gap-2"
              >
                Learn More About Us
                <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}