import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
  className?: string;
}

export function StarRating({ rating, size = 16, className = '' }: StarRatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-ink-200 text-ink-200 dark:fill-ink-700 dark:text-ink-700'
          }
        />
      ))}
    </div>
  );
}
