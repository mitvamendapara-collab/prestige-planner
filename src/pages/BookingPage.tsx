import { useState, type FormEvent } from 'react';
import { Calendar, Users, MapPin, DollarSign, CheckCircle2, ArrowRight, ChevronRight, AlertCircle, Loader2 } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Newsletter } from '@/components/ui/Newsletter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { pricingPlans } from '@/data/pricing';
import { categories, type Category } from '@/data/events';
import { supabase } from '@/lib/supabase';

const bookingImage =
  'https://images.pexels.com/photos/12689028/pexels-photo-12689028.jpeg?auto=compress&cs=tinysrgb&w=1920';

const steps = ['Event Details', 'Package', 'Contact', 'Confirm'];

export function BookingPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({
    eventType: '' as Category | '',
    title: '',
    date: '',
    guests: '',
    location: '',
    budget: '',
    package: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const canProceed = () => {
    if (step === 0) return form.eventType && form.title && form.date && form.guests;
    if (step === 1) return form.package;
    if (step === 2) return form.name && form.email;
    return true;
  };

  const next = () => {
    if (step < steps.length - 1) setStep((s) => s + 1);
  };
  const back = () => setStep((s) => Math.max(0, s - 1));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const { error } = await supabase.from('bookings').insert({
      event_type: form.eventType,
      title: form.title,
      event_date: form.date,
      guests: parseInt(form.guests, 10) || 0,
      location: form.location || null,
      budget: form.budget || null,
      package_tier: form.package || null,
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      notes: form.notes || null,
    });

    if (error) {
      setSubmitting(false);
      setSubmitError('Something went wrong while submitting your booking. Please try again.');
      return;
    }

    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    return (
      <div ref={revealRef}>
        <PageHeader eyebrow="Booking Confirmed" title={<>Your Event is <span className="text-gradient-light">On Its Way</span></>} subtitle="Thank you for choosing Prestige Planner. We have received your booking request and will contact you within 24 hours." image={bookingImage} breadcrumb="Booking" />
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="reveal-scale rounded-3xl glass-card p-10 text-center shadow-glow">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white shadow-glow">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold text-ink-900 dark:text-white">Booking Request Received!</h2>
              <p className="mt-3 text-sm text-ink-500 dark:text-ink-300">
                We have sent a confirmation to <span className="font-semibold text-royal-600 dark:text-royal-400">{form.email || 'your email'}</span>. Our team will reach out shortly to finalize the details.
              </p>
              <div className="mt-6 rounded-2xl bg-royal-500/5 p-5 text-left">
                <p className="text-xs uppercase tracking-wider text-royal-600 dark:text-royal-400">Booking Summary</p>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between"><dt className="text-ink-500 dark:text-ink-400">Event</dt><dd className="font-medium text-ink-800 dark:text-white">{form.title || 'N/A'}</dd></div>
                  <div className="flex justify-between"><dt className="text-ink-500 dark:text-ink-400">Type</dt><dd className="font-medium text-ink-800 dark:text-white">{form.eventType || 'N/A'}</dd></div>
                  <div className="flex justify-between"><dt className="text-ink-500 dark:text-ink-400">Date</dt><dd className="font-medium text-ink-800 dark:text-white">{form.date || 'N/A'}</dd></div>
                  <div className="flex justify-between"><dt className="text-ink-500 dark:text-ink-400">Guests</dt><dd className="font-medium text-ink-800 dark:text-white">{form.guests || 'N/A'}</dd></div>
                  <div className="flex justify-between"><dt className="text-ink-500 dark:text-ink-400">Package</dt><dd className="font-medium text-ink-800 dark:text-white">{form.package || 'N/A'}</dd></div>
                </dl>
              </div>
              <a href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-royal-600 to-royal-800 px-6 py-3 text-sm font-semibold text-white btn-glow">
                Back to Home <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
        <Newsletter />
      </div>
    );
  }

  return (
    <div ref={revealRef}>
      <PageHeader
        eyebrow="Reserve Your Date"
        title={<>Book Your <span className="text-gradient-light">Dream Event</span></>}
        subtitle="Complete the form below to request a booking. Our team will confirm availability and reach out within 24 hours."
        image={bookingImage}
        breadcrumb="Booking"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Stepper */}
          <div className="mb-10 flex items-center justify-center">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                    i <= step ? 'bg-gradient-to-br from-royal-600 to-royal-800 text-white shadow-glow' : 'glass-light text-ink-400'
                  }`}>
                    {i < step ? <CheckCircle2 size={18} /> : i + 1}
                  </div>
                  <span className={`mt-2 text-xs font-medium ${i <= step ? 'text-royal-600 dark:text-royal-400' : 'text-ink-400'}`}>{s}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`mx-2 h-0.5 w-12 rounded-full transition-colors duration-300 sm:w-20 ${i < step ? 'bg-royal-500' : 'bg-ink-200 dark:bg-ink-700'}`} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={submit} className="rounded-3xl glass-card p-8 shadow-soft">
            {/* Step 0: Event Details */}
            {step === 0 && (
              <div className="animate-fade-up space-y-5">
                <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">Tell Us About Your Event</h3>
                <div>
                  <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Event Type *</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => update('eventType', c.name)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                          form.eventType === c.name ? 'bg-gradient-to-r from-royal-600 to-royal-800 text-white shadow-glow' : 'glass-light text-ink-600 hover:bg-royal-500/10 dark:text-ink-300'
                        }`}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Event Title *</label>
                    <input type="text" value={form.title} onChange={(e) => update('title', e.target.value)} className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white/60 px-4 py-3 text-sm text-ink-900 outline-none focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white" placeholder="e.g. Sarah & James Wedding" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Event Date *</label>
                    <div className="relative mt-1.5">
                      <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
                      <input type="date" value={form.date} onChange={(e) => update('date', e.target.value)} className="w-full rounded-xl border border-ink-200 bg-white/60 py-3 pl-11 pr-4 text-sm text-ink-900 outline-none focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white" />
                    </div>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Number of Guests *</label>
                    <div className="relative mt-1.5">
                      <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
                      <input type="number" min="1" value={form.guests} onChange={(e) => update('guests', e.target.value)} className="w-full rounded-xl border border-ink-200 bg-white/60 py-3 pl-11 pr-4 text-sm text-ink-900 outline-none focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white" placeholder="100" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Location</label>
                    <div className="relative mt-1.5">
                      <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
                      <input type="text" value={form.location} onChange={(e) => update('location', e.target.value)} className="w-full rounded-xl border border-ink-200 bg-white/60 py-3 pl-11 pr-4 text-sm text-ink-900 outline-none focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white" placeholder="City or venue" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Estimated Budget</label>
                  <div className="relative mt-1.5">
                    <DollarSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
                    <select value={form.budget} onChange={(e) => update('budget', e.target.value)} className="w-full rounded-xl border border-ink-200 bg-white/60 py-3 pl-11 pr-4 text-sm text-ink-900 outline-none focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white">
                      <option value="">Select range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 – $15,000</option>
                      <option value="15k-50k">$15,000 – $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Package */}
            {step === 1 && (
              <div className="animate-fade-up space-y-5">
                <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">Choose Your Package</h3>
                <div className="grid gap-4">
                  {pricingPlans.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => update('package', p.name)}
                      className={`flex items-center justify-between rounded-2xl border p-5 text-left transition-all ${
                        form.package === p.name ? 'border-royal-500 bg-royal-500/5 shadow-glow' : 'border-ink-200 dark:border-ink-700 hover:border-royal-400'
                      }`}
                    >
                      <div>
                        <p className="font-display text-lg font-bold text-ink-900 dark:text-white">{p.name}</p>
                        <p className="mt-0.5 text-sm text-ink-500 dark:text-ink-400">{p.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-display text-xl font-bold text-royal-600 dark:text-royal-400">{p.price}</p>
                        <p className="text-xs text-ink-400">{p.period}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Contact */}
            {step === 2 && (
              <div className="animate-fade-up space-y-5">
                <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">Your Contact Information</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Full Name *</label>
                    <input type="text" value={form.name} onChange={(e) => update('name', e.target.value)} className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white/60 px-4 py-3 text-sm text-ink-900 outline-none focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Email *</label>
                    <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white/60 px-4 py-3 text-sm text-ink-900 outline-none focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white/60 px-4 py-3 text-sm text-ink-900 outline-none focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Additional Notes</label>
                  <textarea rows={4} value={form.notes} onChange={(e) => update('notes', e.target.value)} className="mt-1.5 w-full resize-none rounded-xl border border-ink-200 bg-white/60 px-4 py-3 text-sm text-ink-900 outline-none focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white" placeholder="Tell us anything special about your event..." />
                </div>
              </div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <div className="animate-fade-up space-y-5">
                <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">Review & Confirm</h3>
                <div className="rounded-2xl bg-royal-500/5 p-6">
                  <dl className="space-y-3 text-sm">
                    {[
                      ['Event Title', form.title], ['Event Type', form.eventType], ['Date', form.date],
                      ['Guests', form.guests], ['Location', form.location || 'TBD'], ['Budget', form.budget || 'TBD'],
                      ['Package', form.package], ['Name', form.name], ['Email', form.email], ['Phone', form.phone || 'N/A'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-royal-200/20 pb-2 last:border-0 dark:border-royal-400/10">
                        <dt className="text-ink-500 dark:text-ink-400">{k}</dt>
                        <dd className="font-medium text-ink-800 dark:text-white">{v || '—'}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <p className="text-xs text-ink-500 dark:text-ink-400">By submitting, you agree to our terms. Our team will confirm availability and send a detailed proposal within 24 hours.</p>
                {submitError && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400">
                    <AlertCircle size={16} className="shrink-0" />
                    {submitError}
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {step > 0 ? (
                <button type="button" onClick={back} className="rounded-full px-5 py-2.5 text-sm font-medium text-ink-600 transition-colors hover:bg-royal-500/10 dark:text-ink-300">
                  Back
                </button>
              ) : <span />}

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canProceed()}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-royal-600 to-royal-800 px-6 py-3 text-sm font-semibold text-white btn-glow disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-royal-600 to-royal-800 px-6 py-3 text-sm font-semibold text-white btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                  ) : (
                    <>Confirm Booking <CheckCircle2 size={16} /></>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
