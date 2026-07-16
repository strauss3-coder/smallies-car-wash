import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { nav } from '@/data/content';
import { Icon } from '@/components/shared/Icon';
import { cn } from '@/utils/cn';

/**
 * Bottom floating island navigation (icons only).
 * Hides on scroll down, reappears on scroll up. Glass background.
 */
export function FloatingNav() {
  const { direction, scrolled } = useScrollDirection();
  const hidden = direction === 'down' && scrolled;

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.nav
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
        >
          <div className="glass flex items-center gap-1 rounded-pill p-1.5 shadow-float">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                aria-label={item.label}
                className={({ isActive }) =>
                  cn(
                    'group relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300',
                    isActive
                      ? 'bg-brand-red text-white shadow-glow'
                      : 'text-ink/70 hover:bg-white hover:text-brand-blue',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon name={item.icon} size={22} />
                    <span
                      className={cn(
                        'pointer-events-none absolute -top-9 whitespace-nowrap rounded-full bg-ink px-2.5 py-1 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200',
                        !isActive && 'group-hover:opacity-100',
                      )}
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
