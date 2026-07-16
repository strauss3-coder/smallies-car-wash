import { motion } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTABand } from '@/components/shared/CTABand';
import { Button } from '@/components/buttons/Button';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { PricingCard } from '@/components/cards/PricingCard';
import { GalleryCard } from '@/components/gallery/GalleryCard';
import { Testimonials } from '@/components/testimonials/Testimonials';
import { Icon } from '@/components/shared/Icon';
import {
  Reveal,
  Stagger,
  StaggerItem,
  Bubbles,
  Floating,
  NumberCounter,
} from '@/components/animations';
import { highlights, whyChoose, processSteps, stats } from '@/data/content';
import { packages } from '@/data/services';
import { site } from '@/data/site';

import logo from '@/assets/images/logo/smallies-logo.png';
import exterior from '@/assets/images/gallery/site-exterior.jpg';
import signage from '@/assets/images/gallery/signage-banner.jpg';
import office from '@/assets/images/about/office-interior.jpg';

const featured = packages.filter((p) => ['smallies-wash', 'ultimate-wash', 'full-valet'].includes(p.id));

export default function Home() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden pb-20 pt-28">
        {/* layered gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-carbon to-grey-light" />
        <div className="absolute inset-0 -z-10 opacity-70 [background:radial-gradient(60%_50%_at_15%_10%,rgba(59,130,246,0.18),transparent),radial-gradient(50%_45%_at_90%_20%,rgba(224,27,36,0.14),transparent)]" />
        <Bubbles count={18} tint="mixed" />

        <div className="container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* copy */}
            <div className="text-center lg:text-left">
              <motion.span
                className="eyebrow justify-center lg:justify-start"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="h-px w-6 bg-brand-red" />
                {site.location.suburb}, {site.location.city}
              </motion.span>

              <h1 className="mt-5 text-display-xl font-display text-ink">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  Clean cars.
                </motion.span>
                <motion.span
                  className="block text-gradient-brand"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  Legendary shine.
                </motion.span>
              </h1>

              <motion.p
                className="mx-auto mt-6 max-w-xl text-body-lg text-grey-dark lg:mx-0"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
              >
                Witbank&rsquo;s hands-on car wash on Paul Sauer Street — from a quick Wash &amp; Go
                to a full valet. Fast, friendly, and right next to the Boulevard.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.54 }}
              >
                <Button to="/services" size="lg" variant="primary" iconRight="arrow-right">
                  Explore our washes
                </Button>
                <Button to="/contact" size="lg" variant="ghost" icon="pin">
                  Find the wash
                </Button>
              </motion.div>

              {/* pills */}
              <motion.div
                className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.66 }}
              >
                {site.pillars.map((p) => (
                  <span
                    key={p}
                    className="glass inline-flex items-center gap-1.5 rounded-pill px-3.5 py-1.5 text-sm font-semibold text-ink"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                    {p}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* animated logo reveal */}
            <div className="relative mx-auto flex max-w-sm items-center justify-center">
              <motion.div
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-red/15 blur-2xl"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              />
              <motion.div
                className="absolute h-72 w-72 rounded-full border border-dashed border-brand-blue/25 sm:h-80 sm:w-80"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <Floating amplitude={14} duration={6}>
                <motion.img
                  src={logo}
                  alt="Smallie's Car Wash logo"
                  className="w-64 object-contain drop-shadow-2xl sm:w-72"
                  initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </Floating>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-grey-mid"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <Icon name="arrow-up" size={22} className="rotate-180" />
        </motion.div>
      </section>

      {/* ===================== STATS STRIP ===================== */}
      <section className="border-y border-ink/8 bg-white">
        <div className="container mx-auto">
          <Stagger className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4" stagger={0.12}>
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <p className="font-display text-display-md font-extrabold text-gradient-brand">
                  <NumberCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-grey-dark">
                  {s.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===================== SERVICE HIGHLIGHTS ===================== */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Why a proper wash matters"
          title={<>Three things every wash <span className="text-gradient-brand">delivers</span></>}
          subtitle="Witbank's coal dust is hard on paintwork. Every Smallie's wash is built around the same promise."
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.14}>
          {highlights.map((h, i) => (
            <StaggerItem key={h.title}>
              <FeatureCard icon={h.icon as never} title={h.title} text={h.text} accent={i === 1 ? 'red' : 'blue'} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <Section tone="grey">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Why Smallie's"
              title={<>The local wash Witbank keeps coming back to</>}
              subtitle="A four-star reputation built one honest wash at a time — with a location that makes it effortless."
            />
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.1}>
              {whyChoose.map((w) => (
                <StaggerItem key={w.title}>
                  <div className="group flex gap-3 rounded-xl bg-white/70 p-4 transition-colors hover:bg-white">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-transform duration-500 group-hover:scale-110">
                      <Icon name={w.icon as never} size={22} />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-ink">{w.title}</h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-grey-dark">{w.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* image collage from real assets */}
          <Reveal anim="scale" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={office} alt="Inside the Smallie's office" loading="lazy"
                className="col-span-2 h-56 w-full rounded-2xl object-cover shadow-lg" />
              <img src={signage} alt="Smallie's signage" loading="lazy"
                className="h-40 w-full rounded-2xl object-cover shadow-md" />
              <img src={exterior} alt="Smallie's wash bays" loading="lazy"
                className="h-40 w-full rounded-2xl object-cover shadow-md" />
            </div>
            <div className="glass absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-pill px-4 py-2 shadow-lg">
              <Icon name="star" size={18} className="text-warning" style={{ fill: 'currentColor' }} />
              <span className="text-sm font-bold text-ink">4.0 / 5 from local drivers</span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ===================== FEATURED PACKAGES ===================== */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Featured packages"
          title={<>Popular washes, <span className="text-gradient-brand">priced up front</span></>}
          subtitle="No surprises — our prices sit right on the board. Here are three favourites; see the full menu for everything."
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.14}>
          {featured.map((p) => (
            <StaggerItem key={p.id} className="h-full">
              <PricingCard pkg={p} highlight={p.id === 'ultimate-wash'} />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal anim="fade-up" className="mt-10 text-center">
          <Button to="/services" variant="secondary" size="lg" iconRight="arrow-right">
            See the full price list
          </Button>
        </Reveal>
      </Section>

      {/* ===================== PROCESS ===================== */}
      <Section tone="ink" className="overflow-hidden">
        <Bubbles count={10} tint="blue" />
        <div className="relative">
          <SectionHeader
            tone="light"
            eyebrow="How it works"
            title="Four easy steps to a spotless car"
            subtitle="Drop the car, run your errands next door, come back to a shine. That simple."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {processSteps.map((s) => (
              <StaggerItem key={s.step}>
                <div className="group relative h-full rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
                  <span className="font-display text-5xl font-extrabold text-white/15 transition-colors group-hover:text-brand-red-light/50">
                    {s.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ===================== REVIEWS ===================== */}
      <Section tone="grey">
        <SectionHeader
          eyebrow="From our customers"
          title={<>What Witbank drivers <span className="text-gradient-brand">are saying</span></>}
        />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      {/* ===================== GALLERY PREVIEW ===================== */}
      <Section tone="white">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeader
            align="left"
            className="max-w-xl"
            eyebrow="On the ground"
            title="A look around the wash"
            subtitle="Our home on Paul Sauer Street, right beside Ben Fleur Boulevard."
          />
          <Reveal anim="fade-up">
            <Button to="/contact" variant="ghost" iconRight="arrow-right">Visit us</Button>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
          <StaggerItem className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <GalleryCard src={office} caption="Our service desk & detailing shop" tag="Inside" tint="blue" className="h-full min-h-[260px]" />
          </StaggerItem>
          <StaggerItem>
            <GalleryCard src={signage} caption="You can't miss the banner" tag="Find us" tint="red" className="h-[260px]" />
          </StaggerItem>
          <StaggerItem>
            <GalleryCard src={exterior} caption="Wash bays on Paul Sauer Street" tag="The site" tint="blue" className="h-[260px]" />
          </StaggerItem>
        </Stagger>
      </Section>

      {/* ===================== CONTACT CTA ===================== */}
      <CTABand />
    </>
  );
}
