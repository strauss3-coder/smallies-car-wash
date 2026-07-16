import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface GalleryCardProps {
  src: string;
  caption: string;
  tag?: string;
  className?: string;
  /** Overlay tint for brand consistency. */
  tint?: 'blue' | 'red' | 'none';
}

/** Image tile with zoom-on-hover, gradient overlay and caption. */
export function GalleryCard({ src, caption, tag, className, tint = 'none' }: GalleryCardProps) {
  return (
    <motion.figure
      className={cn(
        'group relative overflow-hidden rounded-xl shadow-md',
        className,
      )}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <img
        src={src}
        alt={caption}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-110"
      />
      {/* base darkening for legible captions */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
      {/* brand tint on hover */}
      {tint !== 'none' && (
        <div
          className={cn(
            'absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60',
            tint === 'blue' ? 'bg-brand-blue' : 'bg-brand-red',
          )}
        />
      )}
      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        {tag && (
          <span className="mb-2 inline-block rounded-pill bg-white/20 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur">
            {tag}
          </span>
        )}
        <p className="font-display text-base font-semibold text-white drop-shadow">{caption}</p>
      </figcaption>
    </motion.figure>
  );
}
