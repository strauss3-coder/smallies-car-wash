import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@/components/shared/Icon';
import { testimonials } from '@/data/content';
import { cn } from '@/utils/cn';

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          size={18}
          className={i < n ? 'text-warning' : 'text-ink/15'}
          style={i < n ? { fill: 'currentColor' } : undefined}
        />
      ))}
    </div>
  );
}

/** Auto-advancing review carousel with a large quote card + dots. */
export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[i];

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[280px] sm:min-h-[240px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            className="glass rounded-2xl p-8 text-center shadow-lg sm:p-10"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Icon name="quote" size={40} className="mx-auto mb-4 text-brand-red/30" />
            <p className="font-display text-lg font-medium leading-relaxed text-ink sm:text-xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 flex flex-col items-center gap-2">
              <Stars n={t.stars} />
              <div className="mt-1">
                <p className="font-display font-bold text-ink">{t.name}</p>
                <p className="text-sm text-grey-dark">{t.context}</p>
              </div>
            </div>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Review ${idx + 1}`}
            className={cn(
              'h-2 rounded-pill transition-all duration-300',
              idx === i ? 'w-7 bg-brand-red' : 'w-2 bg-ink/20 hover:bg-ink/40',
            )}
          />
        ))}
      </div>
    </div>
  );
}
