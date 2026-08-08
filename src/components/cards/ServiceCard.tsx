import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';
import type { Service } from '@/data/services';

export function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;

  return (
    <article className="reveal group relative overflow-hidden rounded-3xl glass-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-royal-500/10 blur-2xl transition-opacity duration-500 group-hover:bg-royal-500/20" />

      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-500 to-royal-800 text-white shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon size={26} />
        </div>
        <h3 className="mt-5 font-display text-xl font-bold text-ink-900 dark:text-white">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-ink-600 dark:text-ink-300">
              <Check size={15} className="shrink-0 text-royal-500" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
