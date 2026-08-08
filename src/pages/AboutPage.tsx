import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Newsletter } from '@/components/ui/Newsletter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { stats, whyChooseUs } from '@/data/site';
import { useCountUp } from '@/hooks/useCountUp';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const aboutImage =
  'https://images.pexels.com/photos/13834526/pexels-photo-13834526.jpeg?auto=compress&cs=tinysrgb&w=1920';
const teamImage =
  'https://images.pexels.com/photos/20499528/pexels-photo-20499528.jpeg?auto=compress&cs=tinysrgb&w=1920';

const values = [
  { icon: 'Heart', title: 'Passion', description: 'We pour our hearts into every event, treating each as if it were our own celebration.' },
  { icon: 'Gem', title: 'Excellence', description: 'We hold ourselves to the highest standard — no detail is too small to perfect.' },
  { icon: 'Users', title: 'Partnership', description: 'We work alongside you as trusted partners, not just vendors, throughout your journey.' },
  { icon: 'Lightbulb', title: 'Innovation', description: 'We constantly push creative boundaries to deliver experiences that surprise and delight.' },
];

const team = [
  { name: 'Victoria Sterling', role: 'Founder & Creative Director', avatar: 'https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&h=300&w=300' },
  { name: 'James Whitmore', role: 'Head of Corporate Events', avatar: 'https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&h=300&w=300' },
  { name: 'Sophia Laurent', role: 'Lead Wedding Planner', avatar: 'https://images.pexels.com/photos/38707525/pexels-photo-38707525.jpeg?auto=compress&cs=tinysrgb&h=300&w=300' },
  { name: 'Daniel Okafor', role: 'Concert Production Lead', avatar: 'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&h=300&w=300' },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
        {count}{suffix}
      </div>
      <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{label}</p>
    </div>
  );
}

export function AboutPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <PageHeader
        eyebrow="Our Story"
        title={<>The Art of <span className="text-gradient-light">Event Mastery</span></>}
        subtitle="For over 15 years, Prestige Planner has been transforming ordinary moments into extraordinary memories."
        image={aboutImage}
        breadcrumb="About"
      />

      {/* Story section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="reveal-left relative">
            <div className="overflow-hidden rounded-3xl shadow-glow">
              <img src={teamImage} alt="Our team at work" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl glass-light p-6 shadow-soft">
              <div className="font-display text-3xl font-bold text-gradient">15+</div>
              <p className="text-xs text-ink-500 dark:text-ink-400">Years of Excellence</p>
            </div>
          </div>

          <div className="reveal-right">
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title={<>A Legacy of <span className="text-gradient">Unforgettable Moments</span></>}
            />
            <p className="mt-5 text-sm leading-relaxed text-ink-500 dark:text-ink-300 sm:text-base">
              Founded in 2010 by Victoria Sterling, Prestige Planner began with a simple belief: that
              every event deserves to be a masterpiece. What started as a boutique wedding planning
              service has grown into a full-service event management powerhouse, trusted by clients
              across the globe.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-500 dark:text-ink-300 sm:text-base">
              Today, our team of 40+ planners, designers, and production specialists has orchestrated
              over 680 events — from intimate elopements to 30,000-person festivals. We bring artistry,
              precision, and a relentless commitment to excellence to every single one.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/services" icon={<Icons.ArrowRight size={16} />}>Our Services</Button>
              <Button to="/contact" variant="outline">Get in Touch</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink-50/50 px-4 py-20 dark:bg-ink-950/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What Drives Us"
            title={<>Our Core <span className="text-gradient">Values</span></>}
            subtitle="The principles that guide every decision we make and every event we create."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = (Icons[v.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
              return (
                <div key={v.title} className="reveal group rounded-3xl glass-card p-7 text-center shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-500 to-royal-800 text-white shadow-glow transition-transform duration-500 group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900 dark:text-white">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-900 via-royal-950 to-ink-950" />
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-royal-500/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Prestige Difference"
            title={<>Why Clients <span className="text-gradient">Choose Us</span></>}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => {
              const Icon = (Icons[item.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
              return (
                <div key={item.title} className="reveal group rounded-3xl glass-card p-7 text-center shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-500 to-royal-800 text-white shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-ink-50/50 px-4 py-20 dark:bg-ink-950/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Meet the Team"
            title={<>The Minds Behind <span className="text-gradient">the Magic</span></>}
            subtitle="A passionate team of planners, designers, and production specialists devoted to your event."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="reveal-scale group overflow-hidden rounded-3xl glass-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                <div className="relative h-72 overflow-hidden">
                  <img src={member.avatar} alt={member.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">{member.name}</h3>
                  <p className="mt-1 text-xs text-royal-600 dark:text-royal-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
