import { Link } from 'react-router-dom';
import {
  CalendarHeart,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { navLinks } from '@/data/site';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      {/* glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-royal-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500 to-royal-800 text-white shadow-glow">
                <CalendarHeart size={20} />
              </span>
              <span className="font-display text-xl font-bold text-white">
                Prestige<span className="text-gradient">Planner</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              Crafting unforgettable experiences for weddings, corporate events, concerts, and
              festivals. Where prestige meets perfection.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full glass text-ink-300 transition-all duration-300 hover:bg-royal-600 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-sm text-ink-400 transition-colors hover:text-royal-400"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.slice(6).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-sm text-ink-400 transition-colors hover:text-royal-400"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/login"
                  className="text-sm text-ink-400 transition-colors hover:text-royal-400"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-sm text-ink-400 transition-colors hover:text-royal-400"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-ink-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-royal-400" />
                24 Prestige Avenue, Manhattan, New York, NY 10001
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-400">
                <Phone size={16} className="shrink-0 text-royal-400" />
                +1 (212) 555-0199
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-400">
                <Mail size={16} className="shrink-0 text-royal-400" />
                hello@prestigeplanner.com
              </li>
            </ul>
            <Link
              to="/booking"
              className="mt-5 inline-flex rounded-full bg-gradient-to-r from-royal-600 to-royal-800 px-6 py-3 text-sm font-semibold text-white btn-glow"
            >
              Start Planning
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Prestige Planner. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-royal-400">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-royal-400">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-royal-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
