import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Newsletter } from '@/components/ui/Newsletter';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { StarRating } from '@/components/ui/StarRating';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { testimonials } from '@/data/testimonials';
import { Quote } from 'lucide-react';

const testimonialsImage =
  'https://images.pexels.com/photos/17023137/pexels-photo-17023137.jpeg?auto=compress&cs=tinysrgb&w=1920';

const featured = testimonials[0];

export function TestimonialsPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <PageHeader
        eyebrow="Client Stories"
        title={<>Love from <span className="text-gradient-light">Our Clients</span></>}
        subtitle="The trust and admiration of our clients is the truest measure of our success. Here is what they have to say."
        image={testimonialsImage}
        breadcrumb="Testimonials"
      />

      {/* Featured testimonial */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-royal-700 via-royal-800 to-ink-950 p-8 text-center shadow-glow-lg sm:p-14">
            <Quote className="mx-auto text-royal-300/40" size={56} />
            <p className="mx-auto mt-6 max-w-3xl font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
              “{featured.quote}”
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <img
                src={featured.avatar}
                alt={featured.name}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-royal-300/50"
              />
              <div>
                <p className="font-display text-lg font-bold text-white">{featured.name}</p>
                <p className="text-sm text-royal-200">{featured.role}</p>
              </div>
              <StarRating rating={featured.rating} size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* All testimonials */}
      <section className="bg-ink-50/50 px-4 py-20 dark:bg-ink-950/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="All Reviews"
            title={<>What People <span className="text-gradient">Are Saying</span></>}
            subtitle="Every testimonial is a chapter in the Prestige Planner story."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl glass-card p-10 text-center shadow-soft">
          <h2 className="font-display text-3xl font-bold text-ink-900 dark:text-white">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink-500 dark:text-ink-300 sm:text-base">
            Let us create an experience you will be raving about for years to come.
          </p>
          <div className="mt-8">
            <Button to="/booking" size="lg">Start Your Journey</Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
