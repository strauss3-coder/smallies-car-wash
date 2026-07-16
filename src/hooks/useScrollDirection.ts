import { useEffect, useState } from 'react';

type Dir = 'up' | 'down';

/**
 * Tracks scroll direction for the auto-hiding floating nav.
 * Returns the current direction and whether the page is scrolled past a threshold.
 */
export function useScrollDirection(threshold = 80) {
  const [direction, setDirection] = useState<Dir>('up');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) > 6) {
        setDirection(y > last && y > threshold ? 'down' : 'up');
        last = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return { direction, scrolled };
}
