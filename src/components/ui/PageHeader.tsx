import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
}

export function PageHeader({ eyebrow, title, subtitle, image, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/60 to-ink-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-900/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-royal-300">
            <span className="h-px w-8 bg-royal-400/60" />
            {eyebrow}
            <span className="h-px w-8 bg-royal-400/60" />
          </span>
        )}
        <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
            {subtitle}
          </p>
        )}

        <nav className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-300">
          <Link to="/" className="transition-colors hover:text-royal-300">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-royal-300">{breadcrumb ?? (typeof title === 'string' ? title : '')}</span>
        </nav>
      </div>
    </section>
  );
}
