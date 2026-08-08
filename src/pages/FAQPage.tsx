import { useMemo, useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Newsletter } from '@/components/ui/Newsletter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { faqs, faqCategories } from '@/data/faqs';

const faqImage =
  'https://images.pexels.com/photos/12689009/pexels-photo-12689009.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function FAQPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchesCat = category === 'All' || f.category === category;
      const matchesSearch =
        !search ||
        f.question.toLowerCase().includes(search.toLowerCase()) ||
        f.answer.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [search, category]);

  return (
    <div ref={revealRef}>
      <PageHeader
        eyebrow="Help Center"
        title={<>Frequently Asked <span className="text-gradient-light">Questions</span></>}
        subtitle="Find answers to the most common questions about planning your event with Prestige Planner."
        image={faqImage}
        breadcrumb="FAQ"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Search */}
          <div className="reveal flex items-center gap-2 rounded-full glass-light p-2 shadow-soft">
            <Search size={18} className="ml-4 shrink-0 text-royal-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="flex-1 bg-transparent px-2 py-2.5 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none dark:text-white"
            />
          </div>

          {/* Category filters */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {faqCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  category === c
                    ? 'bg-gradient-to-r from-royal-600 to-royal-800 text-white shadow-glow'
                    : 'glass-light text-ink-600 hover:bg-royal-500/10 dark:text-ink-300'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="mt-8 space-y-3">
            {filtered.length > 0 ? (
              filtered.map((faq) => (
                <div key={faq.id} className="reveal overflow-hidden rounded-2xl glass-card shadow-soft">
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="flex items-center gap-3 font-display text-base font-semibold text-ink-900 dark:text-white">
                      <HelpCircle size={18} className="shrink-0 text-royal-500" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-royal-500 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={`grid transition-all duration-300 ${openId === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 pl-14 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl glass-card py-16 text-center shadow-soft">
                <p className="font-display text-lg font-bold text-ink-700 dark:text-white">No questions found</p>
                <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">Try a different search or category.</p>
              </div>
            )}
          </div>

          {/* Still have questions */}
          <div className="reveal mt-12 rounded-3xl bg-gradient-to-br from-royal-700 to-ink-950 p-8 text-center shadow-glow-lg sm:p-12">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Still Have Questions?</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-royal-100/80 sm:text-base">
              Our team is here to help. Reach out and we will get you the answers you need.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to="/contact" size="lg">Contact Us</Button>
              <Button to="/booking" variant="secondary" size="lg">Book a Consultation</Button>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
