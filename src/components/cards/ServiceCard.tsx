import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@/components/shared/Icon';
import { rand, cn } from '@/utils/cn';
import type { WashPackage, VehicleClass } from '@/data/services';

interface ServiceCardProps {
  pkg: WashPackage;
  vehicle: VehicleClass;
}

const tierLabel: Record<WashPackage['tier'], string> = {
  everyday: 'Everyday',
  deluxe: 'Deluxe',
  premium: 'Premium',
};

/** Expandable premium service card: icon, title, price, hover lift, details. */
export function ServiceCard({ pkg, vehicle }: ServiceCardProps) {
  const [open, setOpen] = useState(false);
  const price = pkg.prices[vehicle];

  return (
    <motion.article
      layout
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white p-6 transition-shadow duration-300',
        pkg.featured
          ? 'border-brand-red/30 shadow-glow'
          : 'border-ink/8 shadow-sm hover:shadow-lg',
      )}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      {pkg.featured && (
        <span className="absolute right-4 top-4 rounded-pill bg-brand-red px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
          Popular
        </span>
      )}

      <div className="mb-4 flex items-center gap-3">
        <span
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110',
            pkg.tier === 'premium'
              ? 'bg-brand-blue/10 text-brand-blue'
              : pkg.tier === 'deluxe'
                ? 'bg-brand-red/10 text-brand-red'
                : 'bg-grey-light text-grey-dark',
          )}
        >
          <Icon name={pkg.icon as never} size={24} />
        </span>
        <span className="text-eyebrow uppercase text-grey-mid">{tierLabel[pkg.tier]}</span>
      </div>

      <h3 className="font-display text-xl font-bold text-ink">{pkg.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-grey-dark">{pkg.summary}</p>

      <div className="mt-4 flex items-end gap-1.5">
        {price != null ? (
          <>
            <span className="font-display text-3xl font-extrabold text-ink">{rand(price)}</span>
            <span className="mb-1 text-xs text-grey-mid">for this vehicle</span>
          </>
        ) : (
          <span className="text-sm font-semibold text-grey-mid">Ask in-store</span>
        )}
      </div>

      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-5 flex items-center gap-1.5 self-start text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
        aria-expanded={open}
      >
        {open ? 'Hide details' : "What's included"}
        <Icon
          name="arrow-up"
          size={16}
          className={cn('transition-transform duration-300', open ? 'rotate-0' : 'rotate-180')}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-2 border-t border-ink/8 pt-4">
              {pkg.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-grey-dark">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-success" />
                  {item}
                </li>
              ))}
            </ul>
            {pkg.note && (
              <p className="mt-3 text-xs font-medium italic text-grey-mid">{pkg.note}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
