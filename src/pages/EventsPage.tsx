import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, CalendarDays } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { EventCard } from '@/components/cards/EventCard';
import { Newsletter } from '@/components/ui/Newsletter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { events, type Category } from '@/data/events';

const eventsImage =
  'https://images.pexels.com/photos/16935913/pexels-photo-16935913.jpeg?auto=compress&cs=tinysrgb&w=1920';

const filters: (Category | 'All')[] = ['All', 'Weddings', 'Corporate', 'Birthdays', 'Concerts', 'Festivals'];

export function EventsPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchesFilter = activeFilter === 'All' || e.category === activeFilter;
      const matchesSearch =
        !search ||
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.location.toLowerCase().includes(search.toLowerCase()) ||
        e.description.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [search, activeFilter]);

  return (
    <div ref={revealRef}>
      <PageHeader
        eyebrow="Discover"
        title={<>Find Your Next <span className="text-gradient-light">Unforgettable Event</span></>}
        subtitle="Browse our curated portfolio of upcoming and signature events. Search, filter, and book with ease."
        image={eventsImage}
        breadcrumb="Events"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Search + filter bar */}
          <div className="sticky top-20 z-30 mb-10 rounded-3xl glass-light p-4 shadow-soft">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="flex flex-1 items-center gap-2 rounded-full bg-royal-500/5 px-4 py-2.5">
                <Search size={18} className="shrink-0 text-royal-500" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title, location, or keyword..."
                  className="w-full bg-transparent text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none dark:text-white"
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                <SlidersHorizontal size={16} className="shrink-0 text-royal-500" />
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeFilter === f
                        ? 'bg-gradient-to-r from-royal-600 to-royal-800 text-white shadow-glow'
                        : 'text-ink-600 hover:bg-royal-500/10 dark:text-ink-300'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6 flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
            <CalendarDays size={16} className="text-royal-500" />
            Showing {filtered.length} event{filtered.length !== 1 ? 's' : ''}
            {activeFilter !== 'All' && ` in ${activeFilter}`}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl glass-card py-20 text-center shadow-soft">
              <p className="font-display text-xl font-bold text-ink-700 dark:text-white">No events found</p>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
                Try adjusting your search or filter to find what you are looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
