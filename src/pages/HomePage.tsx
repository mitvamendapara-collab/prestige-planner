import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  ChevronDown,
  Sparkles,
  Play,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Newsletter } from '@/components/ui/Newsletter';
import { EventCard } from '@/components/cards/EventCard';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { StarRating } from '@/components/ui/StarRating';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { events, categories } from '@/data/events';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { stats, whyChooseUs } from '@/data/site';
import { faqs } from '@/data/faqs';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/12689028/pexels-photo-12689028.jpeg?auto=compress&cs=tinysrgb&w=1920';

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{label}</p>
    </div>
  );
}

export function HomePage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [search, setSearch] = useState('');
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0].id);

  const featuredEvents = events.filter((e) => e.featured).slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <div ref={revealRef}>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury event venue" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/50 to-ink-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-950/50 via-transparent to-royal-900/30" />
        </div>

        {/* floating orbs */}
        <div className="pointer-events-none absolute left-10 top-1/4 h-40 w-40 animate-float rounded-full bg-royal-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-1/3 h-52 w-52 animate-float rounded-full bg-royal-400/20 blur-3xl" style={{ animationDelay: '2s' }} />

        <div className="relative mx-auto max-w-5xl px-4 py-32 text-center sm:px-6">
          <span className="animate-fade-down inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-royal-200">
            <Sparkles size={14} /> Premium Event Management
          </span>

          <h1 className="mt-6 animate-fade-up font-display text-4xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
            Where Every Moment
            <br />
            <span className="text-gradient-light">Becomes a Masterpiece</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-ink-200 sm:text-lg" style={{ animationDelay: '0.2s' }}>
            From breathtaking weddings to world-class corporate events, Prestige Planner orchestrates
            unforgettable experiences with precision, artistry, and a touch of magic.
          </p>

          <div className="mt-9 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: '0.4s' }}>
            <Button to="/booking" size="lg" icon={<ArrowRight size={18} />}>
              Plan Your Event
            </Button>
            <Button to="/gallery" variant="secondary" size="lg" icon={<Play size={16} />}>
              View Gallery
            </Button>
          </div>

          {/* Search bar */}
          <div className="mx-auto mt-12 max-w-2xl animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass-light flex items-center gap-2 rounded-full p-2">
              <Search size={18} className="ml-4 shrink-0 text-royal-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search events, venues, services..."
                className="flex-1 bg-transparent px-2 py-2.5 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none dark:text-white dark:placeholder:text-ink-400"
              />
              <Link
                to="/events"
                className="rounded-full bg-gradient-to-r from-royal-600 to-royal-800 px-6 py-2.5 text-sm font-semibold text-white btn-glow"
              >
                Search
              </Link>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* ===== FEATURED SERVICES ===== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title={<>Crafted Services for <span className="text-gradient">Every Occasion</span></>}
            subtitle="From intimate gatherings to grand productions, we offer a full spectrum of event services tailored to your vision."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/services" variant="outline" icon={<ArrowRight size={16} />}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="bg-ink-50/50 px-4 py-20 dark:bg-ink-950/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Mark Your Calendar"
            title={<>Upcoming <span className="text-gradient">Signature Events</span></>}
            subtitle="Discover our curated lineup of upcoming events — each one a unique celebration of artistry and excellence."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/events" variant="primary" icon={<ArrowRight size={16} />}>
              Explore All Events
            </Button>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Prestige Difference"
            title={<>Why Clients <span className="text-gradient">Choose Us</span></>}
            subtitle="We are not just planners — we are storytellers, problem-solvers, and perfectionists devoted to your celebration."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => {
              const Icon = (Icons[item.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
              return (
                <div
                  key={item.title}
                  className="reveal group rounded-3xl glass-card p-7 text-center shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-500 to-royal-800 text-white shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== STATISTICS ===== */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-900 via-royal-950 to-ink-950" />
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-royal-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-royal-700/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* ===== EVENT CATEGORIES ===== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Explore by Type"
            title={<>Browse <span className="text-gradient">Event Categories</span></>}
            subtitle="Whatever you are celebrating, we have a dedicated team that specializes in making it extraordinary."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {categories.map((cat) => {
              const Icon = (Icons[cat.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
              return (
                <Link
                  key={cat.name}
                  to="/events"
                  className="reveal-scale group relative h-64 overflow-hidden rounded-3xl shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-600/90 text-white backdrop-blur transition-transform group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-white">{cat.name}</h3>
                    <p className="text-xs text-ink-300">{cat.count} events hosted</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-ink-50/50 px-4 py-20 dark:bg-ink-950/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Client Stories"
            title={<>Words from <span className="text-gradient">Our Clients</span></>}
            subtitle="The trust of our clients is our greatest achievement. Here is what they have to say."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/testimonials" variant="outline" icon={<ArrowRight size={16} />}>
              Read All Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Good to Know"
            title={<>Frequently Asked <span className="text-gradient">Questions</span></>}
            subtitle="Everything you need to know about planning your event with Prestige Planner."
          />
          <div className="mt-10 space-y-3">
            {faqs.slice(0, 5).map((faq) => (
              <div
                key={faq.id}
                className="reveal overflow-hidden rounded-2xl glass-card shadow-soft"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-ink-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-royal-500 transition-transform duration-300 ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openFaq === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/faq" variant="ghost" icon={<ArrowRight size={16} />}>
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <Newsletter />
    </div>
  );
}
