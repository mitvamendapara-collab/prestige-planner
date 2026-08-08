import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Newsletter } from '@/components/ui/Newsletter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { supabase } from '@/lib/supabase';

const contactImage =
  'https://images.pexels.com/photos/17294749/pexels-photo-17294749.jpeg?auto=compress&cs=tinysrgb&w=1920';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);

    const { error } = await supabase.from('contact_messages').insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      subject: form.subject || null,
      message: form.message,
    });

    if (error) {
      setSubmitting(false);
      setSubmitError('Something went wrong while sending your message. Please try again.');
      return;
    }

    setSubmitting(false);
    setSent(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const update = (key: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key as keyof FormErrors]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const contactInfo = [
    { icon: MapPin, label: 'Visit Us', value: '24 Prestige Avenue, Manhattan, New York, NY 10001' },
    { icon: Phone, label: 'Call Us', value: '+1 (212) 555-0199' },
    { icon: Mail, label: 'Email Us', value: 'hello@prestigeplanner.com' },
  ];

  return (
    <div ref={revealRef}>
      <PageHeader
        eyebrow="Get in Touch"
        title={<>Let's Start <span className="text-gradient-light">a Conversation</span></>}
        subtitle="Whether you have a question, a vision, or are ready to book — we would love to hear from you."
        image={contactImage}
        breadcrumb="Contact"
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* Info */}
          <div className="reveal-left">
            <SectionHeading
              align="left"
              eyebrow="Contact Details"
              title={<>We Are Here <span className="text-gradient">to Help</span></>}
              subtitle="Reach out through any of these channels, or fill out the form and we will get back to you within 24 hours."
            />
            <div className="mt-8 space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4 rounded-2xl glass-card p-5 shadow-soft">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500 to-royal-800 text-white shadow-glow">
                    <info.icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-royal-600 dark:text-royal-400">{info.label}</p>
                    <p className="mt-1 text-sm text-ink-700 dark:text-ink-200">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-6 overflow-hidden rounded-2xl shadow-soft">
              <div className="relative h-56 bg-gradient-to-br from-royal-900 to-ink-950">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto text-royal-400" size={32} />
                    <p className="mt-2 text-sm text-royal-200">Manhattan, New York</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <form onSubmit={submit} className="rounded-3xl glass-card p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-ink-900 dark:text-white">Send Us a Message</h3>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">Fields marked with * are required.</p>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className={`mt-1.5 w-full rounded-xl border bg-white/50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-royal-500 dark:bg-ink-900/50 dark:text-white ${
                      errors.name ? 'border-red-400' : 'border-ink-200 dark:border-ink-700'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500"><AlertCircle size={12} />{errors.name}</p>
                  )}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={`mt-1.5 w-full rounded-xl border bg-white/50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-royal-500 dark:bg-ink-900/50 dark:text-white ${
                        errors.email ? 'border-red-400' : 'border-ink-200 dark:border-ink-700'
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-500"><AlertCircle size={12} />{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white/50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => update('subject', e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-ink-200 bg-white/50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Message *</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className={`mt-1.5 w-full resize-none rounded-xl border bg-white/50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-royal-500 dark:bg-ink-900/50 dark:text-white ${
                      errors.message ? 'border-red-400' : 'border-ink-200 dark:border-ink-700'
                    }`}
                    placeholder="Tell us about your event..."
                  />
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-500"><AlertCircle size={12} />{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-royal-600 to-royal-800 px-6 py-3.5 text-sm font-semibold text-white btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : sent ? (
                    <><CheckCircle2 size={18} /> Message Sent!</>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>

                {sent && (
                  <p className="flex items-center justify-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <CheckCircle2 size={16} /> Thank you! We will be in touch within 24 hours.
                  </p>
                )}

                {submitError && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400">
                    <AlertCircle size={16} className="shrink-0" />
                    {submitError}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
