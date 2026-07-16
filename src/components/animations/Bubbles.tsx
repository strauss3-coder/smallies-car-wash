import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

interface BubblesProps {
  /** How many bubbles to float. */
  count?: number;
  /** Tint — matches the brand palette. */
  tint?: 'blue' | 'red' | 'mixed';
  className?: string;
}

/**
 * Slow-rising soap bubbles / light particles for hero + section backgrounds.
 * Purely decorative and pointer-transparent. Disabled under reduced-motion.
 */
export function Bubbles({ count = 14, tint = 'mixed', className = '' }: BubblesProps) {
  const reduce = useReducedMotion();

  const bubbles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = 8 + Math.random() * 46;
        const colour =
          tint === 'blue'
            ? 'rgba(59,130,246,0.16)'
            : tint === 'red'
              ? 'rgba(224,27,36,0.14)'
              : i % 3 === 0
                ? 'rgba(224,27,36,0.13)'
                : 'rgba(59,130,246,0.15)';
        return {
          id: i,
          size,
          left: Math.random() * 100,
          delay: Math.random() * 8,
          duration: 12 + Math.random() * 12,
          colour,
          drift: (Math.random() - 0.5) * 60,
        };
      }),
    [count, tint],
  );

  if (reduce) return null;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {bubbles.map((b) => (
        <motion.span
          key={b.id}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: -80,
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), ${b.colour})`,
            boxShadow: `inset 0 0 6px rgba(255,255,255,0.5)`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -700],
            x: [0, b.drift, 0],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
