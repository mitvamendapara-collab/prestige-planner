import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto text-center' : 'text-left'} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <span
          className={`reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-royal-600 dark:text-royal-400 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="h-px w-8 bg-royal-500/60" />
          {eyebrow}
          <span className="h-px w-8 bg-royal-500/60" />
        </span>
      )}
      <h2 className="reveal mt-4 font-display text-3xl font-bold leading-tight text-ink-900 dark:text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="reveal mt-4 text-base leading-relaxed text-ink-500 dark:text-ink-300 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
