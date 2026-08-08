import { CalendarHeart } from 'lucide-react';

export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950">
      <div className="relative">
        <div className="absolute inset-0 animate-ping rounded-2xl bg-royal-500/30" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-500 to-royal-800 shadow-glow-lg">
          <CalendarHeart size={36} className="text-white" />
        </div>
      </div>
      <div className="mt-8 font-display text-2xl font-bold text-white">
        Prestige<span className="text-gradient">Planner</span>
      </div>
      <div className="mt-4 h-1 w-40 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/2 animate-shimmer rounded-full bg-gradient-to-r from-royal-400 to-royal-600" />
      </div>
      <p className="mt-4 text-sm text-ink-400">Crafting your experience...</p>
    </div>
  );
}
