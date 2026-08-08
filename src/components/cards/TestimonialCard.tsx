import { Quote } from 'lucide-react';
import { StarRating } from '@/components/ui/StarRating';
import type { Testimonial } from '@/data/testimonials';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="reveal group relative h-full overflow-hidden rounded-3xl glass-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
      <Quote className="absolute right-5 top-5 text-royal-500/20" size={48} />
      <StarRating rating={testimonial.rating} />
      <p className="relative mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
        “{testimonial.quote}”
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-royal-200/30 pt-5 dark:border-royal-400/10">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover ring-2 ring-royal-400/40"
        />
        <div>
          <p className="font-display text-sm font-bold text-ink-900 dark:text-white">
            {testimonial.name}
          </p>
          <p className="text-xs text-ink-500 dark:text-ink-400">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
