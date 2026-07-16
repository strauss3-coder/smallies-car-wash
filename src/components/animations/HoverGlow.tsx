import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface HoverGlowProps {
  children: ReactNode;
  /** Lift distance on hover. */
  lift?: number;
  glow?: 'red' | 'blue' | 'none';
  className?: string;
}

const glowShadow: Record<string, string> = {
  red: '0 0 0 1px rgba(224,27,36,0.14), 0 22px 50px rgba(224,27,36,0.24)',
  blue: '0 0 0 1px rgba(29,78,216,0.16), 0 22px 50px rgba(29,78,216,0.26)',
  none: '0 22px 50px rgba(15,27,51,0.16)',
};

/** Card-lift + glow on hover. Wrap any card-like element. */
export function HoverGlow({ children, lift = 8, glow = 'blue', className }: HoverGlowProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      whileHover={{ y: -lift, boxShadow: glowShadow[glow] }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
