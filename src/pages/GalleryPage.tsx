import { useMemo, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Lightbox } from '@/components/ui/Lightbox';
import { Newsletter } from '@/components/ui/Newsletter';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { galleryImages, galleryFilters } from '@/data/gallery';

const galleryImage =
  'https://images.pexels.com/photos/16120201/pexels-photo-16120201.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function GalleryPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (filter === 'All') return galleryImages;
    return galleryImages.filter((img) => img.category === filter);
  }, [filter]);

  return (
    <div ref={revealRef}>
      <PageHeader
        eyebrow="Visual Portfolio"
        title={<>Moments Worth <span className="text-gradient-light">a Thousand Words</span></>}
        subtitle="Step into our world of beautifully crafted events. Each image tells a story of artistry, emotion, and excellence."
        image={galleryImage}
        breadcrumb="Gallery"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Browse"
            title={<>Our Event <span className="text-gradient">Gallery</span></>}
            subtitle="Filter by category and click any image to view it in full screen."
          />

          {/* Filters */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {galleryFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === f
                    ? 'bg-gradient-to-r from-royal-600 to-royal-800 text-white shadow-glow'
                    : 'glass-light text-ink-600 hover:bg-royal-500/10 dark:text-ink-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5">
            {filtered.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setLightboxIndex(i)}
                className="reveal-scale group relative block w-full overflow-hidden rounded-2xl shadow-soft transition-all duration-500 hover:shadow-glow"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full glass text-white">
                    <ZoomIn size={20} />
                  </span>
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-royal-600/90 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                  {img.category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />

      <Newsletter />
    </div>
  );
}
