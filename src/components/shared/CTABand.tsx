import { Reveal, Bubbles } from '@/components/animations';
import { Button } from '@/components/buttons/Button';
import { site } from '@/data/site';

/** Full-width call-to-action band reused near the foot of most pages. */
export function CTABand() {
  return (
    <section className="relative overflow-hidden py-section-sm">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue via-brand-blue-dark to-ink px-6 py-14 text-center shadow-xl sm:px-12 sm:py-20">
          <Bubbles count={12} tint="blue" />
          {/* red sweep */}
          <div className="pointer-events-none absolute -right-16 top-0 h-full w-1/2 bg-brand-red/20 blur-3xl" />

          <div className="relative">
            <Reveal anim="fade-up">
              <span className="eyebrow justify-center text-brand-red-light">
                <span className="h-px w-6 bg-brand-red-light" />
                Ready when you are
              </span>
            </Reveal>
            <Reveal anim="fade-up" delay={0.05}>
              <h2 className="mx-auto mt-4 max-w-2xl text-display-md font-display text-white">
                Bring us your dirtiest car.
                <span className="block text-brand-red-light">We&rsquo;ll hand it back gleaming.</span>
              </h2>
            </Reveal>
            <Reveal anim="fade-up" delay={0.12}>
              <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/70">
                No booking needed — drive in on Paul Sauer Street, {site.location.suburb}. Open
                seven days a week, right next to the Boulevard.
              </p>
            </Reveal>
            <Reveal anim="fade-up" delay={0.18}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button to="/services" variant="primary" size="lg" iconRight="arrow-right">
                  See all washes
                </Button>
                <Button to="/contact" variant="white" size="lg" icon="pin">
                  Find us
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
