import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, CalendarHeart, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const loginImage =
  'https://images.pexels.com/photos/13834526/pexels-photo-13834526.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function LoginPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', remember: false });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // UI-only demo
  };

  return (
    <div ref={revealRef} className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28">
      <div className="absolute inset-0">
        <img src={loginImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/70 to-ink-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-950/50 to-transparent" />
      </div>

      <div className="reveal-scale relative w-full max-w-md">
        <div className="glass-light rounded-3xl p-8 shadow-glow-lg sm:p-10">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500 to-royal-800 text-white shadow-glow">
              <CalendarHeart size={22} />
            </span>
            <span className="font-display text-2xl font-bold text-ink-900 dark:text-white">
              Prestige<span className="text-gradient">Planner</span>
            </span>
          </Link>

          <h1 className="mt-8 text-center font-display text-2xl font-bold text-ink-900 dark:text-white">Welcome Back</h1>
          <p className="mt-2 text-center text-sm text-ink-500 dark:text-ink-400">Sign in to manage your events and bookings.</p>

          <form onSubmit={submit} className="mt-8 space-y-5">
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
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-400 hover:text-royal-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-ink-600 dark:text-ink-300">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                  className="h-4 w-4 rounded border-ink-300 text-royal-600 focus:ring-royal-500"
                />
                Remember me
              </label>
              <a href="#" className="font-medium text-royal-600 hover:text-royal-700 dark:text-royal-400">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-royal-600 to-royal-800 px-6 py-3.5 text-sm font-semibold text-white btn-glow"
            >
              Sign In <ArrowRight size={16} />
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-ink-200 dark:bg-ink-700" />
            <span className="text-xs text-ink-400">or continue with</span>
            <div className="h-px flex-1 bg-ink-200 dark:bg-ink-700" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white/50 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-royal-500/5 dark:border-ink-700 dark:bg-ink-900/50 dark:text-ink-200">
              Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white/50 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-royal-500/5 dark:border-ink-700 dark:bg-ink-900/50 dark:text-ink-200">
              Apple
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-ink-500 dark:text-ink-400">
            New here?{' '}
            <Link to="/register" className="font-semibold text-royal-600 hover:text-royal-700 dark:text-royal-400">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
