import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { staggerParent, variantMap, easeSmooth, type AnimName } from './variants';

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  once?: boolean;
  as?: 'div' | 'ul' | 'section';
}

/** Parent that reveals its <StaggerItem> children one after another. */
export function Stagger({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  amount = 0.2,
  once = true,
  as = 'div',
}: StaggerProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={staggerParent(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  anim?: AnimName;
  duration?: number;
  className?: string;
  as?: 'div' | 'li' | 'article';
}

export function StaggerItem({
  children,
  anim = 'fade-up',
  duration = 0.6,
  className,
  as = 'div',
}: StaggerItemProps) {
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
      transition={{ duration, ease: easeSmooth }}
    >
      {children}
    </MotionTag>
  );
}
