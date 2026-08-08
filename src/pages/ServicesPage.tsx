import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Newsletter } from '@/components/ui/Newsletter';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { services } from '@/data/services';
import { Check, ArrowRight } from 'lucide-react';

const servicesImage =
  'https://images.pexels.com/photos/12689014/pexels-photo-12689014.jpeg?auto=compress&cs=tinysrgb&w=1920';

const process = [
  { step: '01', title: 'Discovery', description: 'We start with a deep-dive consultation to understand your vision, goals, and budget.' },
  { step: '02', title: 'Design', description: 'Our creative team crafts a bespoke concept, mood board, and detailed proposal.' },
  { step: '03', title: 'Planning', description: 'We handle every logistics detail — vendors, timelines, permits, and coordination.' },
  { step: '04', title: 'Execution', description: 'On the day, we manage everything flawlessly so you can be fully present.' },
];

export function ServicesPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <PageHeader
        eyebrow="Our Expertise"
        title={<>Services Built for <span className="text-gradient-light">Excellence</span></>}
        subtitle="A comprehensive suite of event services, each delivered with our signature blend of artistry and precision."
        image={servicesImage}
        breadcrumb="Services"
      />

      {/* Services grid */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Offer"
            title={<>Full-Service <span className="text-gradient">Event Solutions</span></>}
            subtitle="From the first idea to the final toast, we cover every aspect of your event with meticulous care."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink-50/50 px-4 py-20 dark:bg-ink-950/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How We Work"
            title={<>Our Proven <span className="text-gradient">Process</span></>}
            subtitle="A structured approach that ensures every event is planned and executed to perfection."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="reveal relative rounded-3xl glass-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                <div className="font-display text-5xl font-bold text-royal-500/20">{p.step}</div>
                <h3 className="mt-2 font-display text-lg font-bold text-ink-900 dark:text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{p.description}</p>
                {i < process.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-royal-400/30 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Always Included"
            title={<>The Prestige <span className="text-gradient">Standard</span></>}
            subtitle="No matter which service you choose, these come standard with every Prestige Planner event."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              'Dedicated event coordinator',
              '24/7 planning support',
              'Custom timeline management',
              'Vendor negotiation & contracts',
              'Comprehensive insurance coverage',
              'On-site day-of management',
              'Post-event follow-up & reporting',
              'Sustainable event practices',
            ].map((item) => (
              <div key={item} className="reveal flex items-center gap-3 rounded-2xl glass-card p-4 shadow-soft">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-royal-600/15 text-royal-600 dark:text-royal-400">
                  <Check size={16} />
                </span>
                <span className="text-sm font-medium text-ink-700 dark:text-ink-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-royal-700 to-ink-950 px-6 py-14 text-center shadow-glow-lg sm:px-12">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Ready to Plan Your Event?</h2>
          <p className="mx-auto mt-4 max-w-xl text-royal-100/80">
            Let us turn your vision into an unforgettable experience. Book a free consultation today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/booking" size="lg" icon={<ArrowRight size={18} />}>Book Now</Button>
            <Button to="/pricing" variant="secondary" size="lg">View Pricing</Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
