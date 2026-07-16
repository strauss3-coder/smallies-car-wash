import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { nav } from '@/data/content';
import { site } from '@/data/site';
import { Button } from '@/components/buttons/Button';
import { Icon } from '@/components/shared/Icon';
import { cn } from '@/utils/cn';
import logo from '@/assets/images/logo/smallies-logo.png';

/** Sticky top navigation. Turns to glass once scrolled; collapses on mobile. */
export function Navbar() {
  const { scrolled } = useScrollDirection();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled ? 'py-2' : 'py-4',
        )}
      >
        <div className="container mx-auto">
          <div
            className={cn(
              'flex items-center justify-between rounded-pill px-4 transition-all duration-500 md:px-6',
              scrolled
                ? 'glass py-2.5 shadow-md'
                : 'bg-transparent py-2',
            )}
          >
            <Link to="/" className="flex items-center gap-2.5" aria-label="Smallie's Car Wash home">
              <img src={logo} alt="" className="h-11 w-11 object-contain" />
              <span className="hidden font-display text-lg font-extrabold leading-none tracking-tight text-ink sm:block">
                Smallie&rsquo;s
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Car Wash
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'link-underline text-sm font-semibold tracking-tight transition-colors',
                      isActive ? 'text-brand-red' : 'text-ink/80 hover:text-ink',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button to="/contact" size="sm" variant="primary" iconRight="arrow-right">
                Get a wash
              </Button>
            </div>

            <button
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="menu" size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[78%] max-w-xs flex-col bg-carbon p-6 shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            >
              <div className="flex items-center justify-between">
                <img src={logo} alt="" className="h-11 w-11 object-contain" />
                <button
                  className="flex h-11 w-11 items-center justify-center rounded-full text-ink"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <Icon name="close" size={24} />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-1">
                {nav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-3 rounded-lg px-4 py-3.5 text-base font-semibold transition-colors',
                        isActive
                          ? 'bg-brand-red/10 text-brand-red'
                          : 'text-ink hover:bg-grey-light',
                      )
                    }
                  >
                    <Icon name={item.icon} size={20} />
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-auto">
                <Button to="/contact" full variant="primary" iconRight="arrow-right"
                  className="!justify-center"
                >
                  Get a wash
                </Button>
                <p className="mt-4 text-center text-xs text-grey-dark">
                  {site.location.landmark}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
