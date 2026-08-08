import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-royal-700 via-royal-800 to-ink-950 px-6 py-14 text-center shadow-glow-lg sm:px-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-royal-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-royal-500/30 blur-3xl" />

        <div className="relative">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Join the Prestige Circle
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-royal-100/80">
            Subscribe for exclusive event inspiration, early access to seasonal packages, and insider
            tips from our master planners.
          </p>

          <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-royal-200/60 backdrop-blur focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-royal-800 transition-all hover:scale-105 hover:shadow-lg"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={16} /> Subscribed
                </>
              ) : (
                <>
                  Subscribe <Send size={14} />
                </>
              )}
            </button>
          </form>
          {sent && (
            <p className="mt-4 text-sm text-royal-100">
              Welcome to the circle! Check your inbox for a confirmation.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
