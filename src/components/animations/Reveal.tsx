import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { variantMap, easeSmooth, type AnimName } from './variants';

interface RevealProps {
  children: ReactNode;
  /** Which reveal animation to play. */
  anim?: AnimName;
  delay?: number;
  duration?: number;
  /** Fraction of element visible before triggering (0–1). */
  amount?: number;
  /** Replay every time it enters the viewport instead of once. */
  once?: boolean;
  className?: string;
  as?: 'div' | 'section' | 'span' | 'li' | 'article' | 'header';
}

/**
 * Scroll-triggered reveal. The workhorse behind "every section animates".
 * Wraps any content and fades/slides it into view once scrolled to.
 */
export function Reveal({
  children,
  anim = 'fade-up',
  delay = 0,
  duration = 0.7,
  amount = 0.25,
  once = true,
  className,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variantMap[anim]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ duration, ease: easeSmooth, delay }}
    >
      {children}
    </MotionTag>
  );
}
