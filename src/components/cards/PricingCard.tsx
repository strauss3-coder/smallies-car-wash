import { Icon } from '@/components/shared/Icon';
import { Button } from '@/components/buttons/Button';
import { rand, cn } from '@/utils/cn';
import type { WashPackage } from '@/data/services';
import { vehicleClasses } from '@/data/services';

interface PricingCardProps {
  pkg: WashPackage;
  highlight?: boolean;
}

/** Full pricing card showing the price across all three vehicle classes. */
export function PricingCard({ pkg, highlight }: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative flex h-full flex-col rounded-xl p-7 transition-all duration-300',
        highlight
          ? 'bg-ink text-white shadow-xl ring-2 ring-brand-red'
          : 'glass text-ink hover:shadow-lg',
      )}
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-brand-red px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-glow">
          Most popular
        </span>
      )}

      <div className="flex items-center gap-3">
        <span
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-xl',
            highlight ? 'bg-white/10 text-white' : 'bg-brand-blue/10 text-brand-blue',
          )}
        >
          <Icon name={pkg.icon as never} size={24} />
        </span>
        <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
      </div>

      <p className={cn('mt-3 text-sm leading-relaxed', highlight ? 'text-white/70' : 'text-grey-dark')}>
        {pkg.summary}
      </p>

      <div className={cn('my-5 space-y-2 border-y py-4', highlight ? 'border-white/15' : 'border-ink/10')}>
        {vehicleClasses.map((v) => {
          const price = pkg.prices[v.key];
          if (price == null) return null;
          return (
            <div key={v.key} className="flex items-center justify-between text-sm">
              <span className={highlight ? 'text-white/70' : 'text-grey-dark'}>{v.label}</span>
              <span className="font-display font-bold">{rand(price)}</span>
            </div>
          );
        })}
      </div>

      <ul className="mb-6 flex-1 space-y-2">
        {pkg.includes.slice(0, 5).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <Icon
              name="check"
              size={16}
              className={cn('mt-0.5 shrink-0', highlight ? 'text-brand-red-light' : 'text-success')}
            />
            <span className={highlight ? 'text-white/85' : 'text-grey-dark'}>{item}</span>
          </li>
        ))}
      </ul>

      <Button
        to="/contact"
        variant={highlight ? 'primary' : 'ghost'}
        full
        className="!justify-center"
        iconRight="arrow-right"
      >
        Book this
      </Button>
    </div>
  );
}
