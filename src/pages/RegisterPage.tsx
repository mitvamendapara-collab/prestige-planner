import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, CalendarHeart, ArrowRight, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const registerImage =
  'https://images.pexels.com/photos/12689014/pexels-photo-12689014.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function RegisterPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', agree: false });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // UI-only demo
  };

  const passwordStrength = form.password.length >= 8;

  return (
    <div ref={revealRef} className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28">
      <div className="absolute inset-0">
        <img src={registerImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/70 to-ink-950/90" />
        <div className="absolute inset-0 bg-gradient-to-l from-royal-950/50 to-transparent" />
      </div>

      <div className="reveal-scale relative w-full max-w-md">
        <div className="glass-light rounded-3xl p-8 shadow-glow-lg sm:p-10">
          <Link to="/" className="flex items-center justify-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500 to-royal-800 text-white shadow-glow">
              <CalendarHeart size={22} />
            </span>
            <span className="font-display text-2xl font-bold text-ink-900 dark:text-white">
              Prestige<span className="text-gradient">Planner</span>
            </span>
          </Link>

          <h1 className="mt-8 text-center font-display text-2xl font-bold text-ink-900 dark:text-white">Create Your Account</h1>
          <p className="mt-2 text-center text-sm text-ink-500 dark:text-ink-400">Join the Prestige Circle and start planning unforgettable events.</p>

          <form onSubmit={submit} className="mt-8 space-y-5">
            <div>
              <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Full Name</label>
              <div className="relative mt-1.5">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-ink-200 bg-white/60 py-3 pl-11 pr-4 text-sm text-ink-900 outline-none transition-colors focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white"
                  placeholder="Your full name"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Email</label>
              <div className="relative mt-1.5">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-ink-200 bg-white/60 py-3 pl-11 pr-4 text-sm text-ink-900 outline-none transition-colors focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-ink-700 dark:text-ink-200">Password</label>
              <div className="relative mt-1.5">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full rounded-xl border border-ink-200 bg-white/60 py-3 pl-11 pr-11 text-sm text-ink-900 outline-none transition-colors focus:border-royal-500 dark:border-ink-700 dark:bg-ink-900/50 dark:text-white"
                  placeholder="At least 8 characters"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-400 hover:text-royal-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {form.password.length > 0 && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-200 dark:bg-ink-700">
                    <div className={`h-full rounded-full transition-all duration-300 ${passwordStrength ? 'bg-green-500' : 'bg-amber-500'}`} style={{ width: passwordStrength ? '100%' : '50%' }} />
                  </div>
                  <span className={`text-xs ${passwordStrength ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
                    {passwordStrength ? 'Strong' : 'Weak'}
                  </span>
                </div>
              )}
            </div>

            <label className="flex items-start gap-2.5 text-sm text-ink-600 dark:text-ink-300">
              <input
                type="checkbox"
                required
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                className="mt-0.5 h-4 w-4 rounded border-ink-300 text-royal-600 focus:ring-royal-500"
              />
              <span>I agree to the <a href="#" className="font-medium text-royal-600 dark:text-royal-400">Terms of Service</a> and <a href="#" className="font-medium text-royal-600 dark:text-royal-400">Privacy Policy</a>.</span>
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-royal-600 to-royal-800 px-6 py-3.5 text-sm font-semibold text-white btn-glow"
            >
              Create Account <ArrowRight size={16} />
            </button>
          </form>

          {/* Benefits */}
          <div className="mt-6 space-y-2 rounded-2xl bg-royal-500/5 p-4">
            {['Save and track your bookings', 'Exclusive member-only packages', 'Priority event consultation'].map((b) => (
              <div key={b} className="flex items-center gap-2 text-xs text-ink-600 dark:text-ink-300">
                <Check size={14} className="text-royal-500" /> {b}
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-ink-500 dark:text-ink-400">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-royal-600 hover:text-royal-700 dark:text-royal-400">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
