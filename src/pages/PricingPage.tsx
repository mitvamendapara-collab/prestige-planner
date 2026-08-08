import { Check, Crown, Sparkles, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Newsletter } from '@/components/ui/Newsletter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { pricingPlans } from '@/data/pricing';

const pricingImage =
  'https://images.pexels.com/photos/12689009/pexels-photo-12689009.jpeg?auto=compress&cs=tinysrgb&w=1920';

const addons = [
  { name: 'Professional Photography & Videography', price: '$1,500+' },
  { name: 'Live Streaming & Virtual Attendance', price: '$800+' },
  { name: 'Custom Stage & Lighting Design', price: '$3,000+' },
  { name: 'Celebrity or Headline Entertainment', price: 'Custom' },
  { name: 'Luxury Transportation & Valet', price: '$500+' },
  { name: 'Bespoke Floral Installations', price: '$2,000+' },
];

export function PricingPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <PageHeader
        eyebrow="Transparent Pricing"
        title={<>Packages for <span className="text-gradient-light">Every Vision</span></>}
        subtitle="Clear, flexible pricing with no hidden fees. Choose a package or customize one to fit your dream event."
        image={pricingImage}
        breadcrumb="Pricing"
      />

      {/* Plans */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Choose Your Tier"
            title={<>Event <span className="text-gradient">Packages</span></>}
            subtitle="From intimate celebrations to grand productions — find the perfect fit."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`reveal relative flex flex-col overflow-hidden rounded-3xl p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow ${
                  plan.popular
                    ? 'bg-gradient-to-br from-royal-700 to-ink-950 text-white'
                    : 'glass-card'
                }`}
              >
                {plan.popular && (
                  <>
                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-royal-400/30 blur-3xl" />
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      <Crown size={12} /> Popular
                    </span>
                  </>
                )}
                <div className="relative">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${plan.popular ? 'bg-white/15' : 'bg-royal-600/10'} text-royal-500`}>
                    <Sparkles size={22} />
                  </div>
                  <h3 className={`mt-5 font-display text-2xl font-bold ${plan.popular ? 'text-white' : 'text-ink-900 dark:text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-2 text-sm ${plan.popular ? 'text-royal-200' : 'text-ink-500 dark:text-ink-400'}`}>
                    {plan.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className={`font-display text-4xl font-bold ${plan.popular ? 'text-white' : 'text-ink-900 dark:text-white'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? 'text-royal-200' : 'text-ink-500'}`}>{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.popular ? 'bg-white/15 text-white' : 'bg-royal-600/15 text-royal-600 dark:text-royal-400'}`}>
                          <Check size={12} />
                        </span>
                        <span className={plan.popular ? 'text-royal-100' : 'text-ink-600 dark:text-ink-300'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex-1" />
                  <Button
                    to="/booking"
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                    icon={<ArrowRight size={16} />}
                  >
                    Choose {plan.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-ink-50/50 px-4 py-20 dark:bg-ink-950/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Enhance Your Event"
            title={<>Optional <span className="text-gradient">Add-Ons</span></>}
            subtitle="Take your event to the next level with these premium enhancements."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {addons.map((a) => (
              <div key={a.name} className="reveal flex items-center justify-between rounded-2xl glass-card p-5 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-royal-600/15 text-royal-600 dark:text-royal-400">
                    <Check size={16} />
                  </span>
                  <span className="text-sm font-medium text-ink-700 dark:text-ink-200">{a.name}</span>
                </div>
                <span className="font-display text-sm font-bold text-royal-600 dark:text-royal-400">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl glass-card p-10 text-center shadow-soft">
          <h2 className="font-display text-3xl font-bold text-ink-900 dark:text-white">
            Have Questions About Pricing?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink-500 dark:text-ink-300 sm:text-base">
            Check our FAQ for detailed answers, or reach out — we are happy to help you find the right package.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/faq" variant="outline">View FAQ</Button>
            <Button to="/contact" icon={<ArrowRight size={16} />}>Contact Us</Button>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
