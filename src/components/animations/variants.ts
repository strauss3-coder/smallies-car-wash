import type { Variants } from 'framer-motion';

export const easeSmooth = [0.22, 1, 0.36, 1] as const;

/** Distance presets for directional fades */
const D = 28;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: D },
  show: { opacity: 1, y: 0 },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -D },
  show: { opacity: 1, y: 0 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: D },
  show: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -D },
  show: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(14px)', y: 12 },
  show: { opacity: 1, filter: 'blur(0px)', y: 0 },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export type AnimName =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale'
  | 'blur'
  | 'fade';

export const variantMap: Record<AnimName, Variants> = {
  'fade-up': fadeUp,
  'fade-down': fadeDown,
  'fade-left': fadeLeft,
  'fade-right': fadeRight,
  scale: scaleIn,
  blur: blurIn,
  fade,
};

/** Parent container that staggers its children in. */
export const staggerParent = (stagger = 0.1, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});
