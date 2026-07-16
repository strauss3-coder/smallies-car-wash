import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FloatingProps {
  children: ReactNode;
  /** Vertical travel in px. */
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

/** Gently bobs its child up and down forever — for hero logos & badges. */
export function Floating({
  children,
  amplitude = 12,
  duration = 6,
  delay = 0,
  className,
}: FloatingProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
