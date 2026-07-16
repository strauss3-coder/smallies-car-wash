import { motion } from 'framer-motion';
import logo from '@/assets/images/logo/smallies-logo.png';

interface LoadingScreenProps {
  /** 0–100 progress for the bar. */
  progress: number;
}

/**
 * Branded loading screen: floating logo, a slowly rotating "detailing sponge"
 * ring, water-ripple pulses and a progress indicator. Shown 0.8–1.2s.
 */
export function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-carbon to-grey-light"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      {/* Water ripple rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-blue/30"
            initial={{ width: 120, height: 120, opacity: 0.5 }}
            animate={{ width: 460, height: 460, opacity: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: 'easeOut' }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        {/* Rotating sponge ring around the logo */}
        <div className="relative flex h-40 w-40 items-center justify-center">
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'conic-gradient(from 0deg, #1D4ED8, #3B82F6, #E01B24, #F04A52, #1D4ED8)',
              maskImage: 'radial-gradient(transparent 58%, #000 60%)',
              WebkitMaskImage: 'radial-gradient(transparent 58%, #000 60%)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.img
            src={logo}
            alt="Smallie's Car Wash"
            className="relative h-24 w-24 object-contain drop-shadow-lg"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.p
          className="mt-8 font-display text-lg font-bold tracking-tight text-ink"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Smallie&rsquo;s Car Wash
        </motion.p>
        <p className="mt-1 text-sm font-medium text-grey-dark">Clean · Shine · Protect</p>

        {/* Progress bar */}
        <div className="mt-6 h-1.5 w-52 overflow-hidden rounded-pill bg-ink/10">
          <motion.div
            className="h-full rounded-pill bg-gradient-to-r from-brand-blue to-brand-red"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
