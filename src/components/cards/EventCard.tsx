import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import type { EventItem } from '@/data/events';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="reveal-scale group relative overflow-hidden rounded-3xl glass-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-royal-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {event.category}
        </span>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-lg font-bold text-white">{event.title}</h3>
        </div>
      </div>

      <div className="p-5">
        <p className="line-clamp-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
          {event.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-500 dark:text-ink-400">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} className="text-royal-500" />
            {formatDate(event.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-royal-500" />
            {event.location}
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-royal-600 dark:text-royal-400">
            {event.price}
          </span>
          <Link
            to="/booking"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 transition-colors group-hover:text-royal-600 dark:text-ink-200 dark:group-hover:text-royal-400"
          >
            Book now
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
