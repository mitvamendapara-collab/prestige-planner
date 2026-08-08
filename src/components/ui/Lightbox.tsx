import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '@/data/gallery';

interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, images.length, onClose, onNavigate]);

  if (index === null) return null;
  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full glass text-white transition-colors hover:bg-white/20"
      >
        <X size={22} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + images.length) % images.length);
        }}
        aria-label="Previous"
        className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full glass text-white transition-colors hover:bg-white/20 sm:left-8"
      >
        <ChevronLeft size={24} />
      </button>

      <figure
        className="max-h-[85vh] max-w-4xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] w-full rounded-2xl object-contain shadow-glow-lg"
        />
        <figcaption className="mt-4 text-center text-sm text-ink-300">
          {image.alt} · <span className="text-royal-400">{image.category}</span>
        </figcaption>
      </figure>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % images.length);
        }}
        aria-label="Next"
        className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full glass text-white transition-colors hover:bg-white/20 sm:right-8"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
