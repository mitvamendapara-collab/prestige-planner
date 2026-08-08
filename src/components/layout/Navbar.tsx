import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, CalendarHeart } from 'lucide-react';
import { navLinks } from '@/data/site';
import { useTheme } from '@/hooks/useTheme';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-light shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500 to-royal-800 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
            <CalendarHeart size={20} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-ink-900 dark:text-white">
            Prestige<span className="text-gradient">Planner</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-royal-600 dark:text-royal-400'
                    : 'text-ink-600 hover:text-royal-600 dark:text-ink-300 dark:hover:text-royal-400'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-royal-500 to-royal-700" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full glass-light text-ink-700 transition-colors hover:text-royal-600 dark:text-ink-200 dark:hover:text-royal-400"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/login"
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:text-royal-600 dark:text-ink-200 dark:hover:text-royal-400 sm:inline-flex"
          >
            Login
          </Link>
          <Link
            to="/booking"
            className="hidden rounded-full bg-gradient-to-r from-royal-600 to-royal-800 px-5 py-2.5 text-sm font-semibold text-white btn-glow sm:inline-flex"
          >
            Book Event
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full glass-light text-ink-800 dark:text-white lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? 'max-h-[640px]' : 'max-h-0'
        }`}
      >
        <div className="glass-light mx-4 mb-4 rounded-2xl border border-royal-200/40 p-4 dark:border-royal-400/10">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-royal-500/10 text-royal-600 dark:text-royal-400'
                      : 'text-ink-600 hover:bg-royal-500/5 dark:text-ink-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="mt-3 flex gap-2 border-t border-royal-200/30 pt-3 dark:border-royal-400/10">
            <Link
              to="/login"
              className="flex-1 rounded-xl border border-royal-400/40 px-4 py-2.5 text-center text-sm font-semibold text-royal-600 dark:text-royal-400"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="flex-1 rounded-xl bg-gradient-to-r from-royal-600 to-royal-800 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Register
            </Link>
          </div>
          <Link
            to="/booking"
            className="mt-2 block rounded-xl bg-gradient-to-r from-royal-500 to-royal-700 px-4 py-3 text-center text-sm font-bold text-white btn-glow"
          >
            Book an Event
          </Link>
        </div>
      </div>
    </header>
  );
}
