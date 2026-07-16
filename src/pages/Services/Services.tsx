import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTABand } from '@/components/shared/CTABand';
import { Icon } from '@/components/shared/Icon';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Reveal, Stagger, StaggerItem, Bubbles } from '@/components/animations';
import { rand, cn } from '@/utils/cn';
import {
  packages,
  vehicleClasses,
  priceCategories,
  addOns,
  specialWashes,
  pensionerSpecial,
  comingSoon,
  type VehicleClass,
} from '@/data/services';

export default function Services() {
  const [vehicle, setVehicle] = useState<VehicleClass>('car');

  return (
    <>
      {/* ===================== SERVICES HERO (band + selector) ===================== */}
      <section className="relative overflow-hidden pb-14 pt-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink via-brand-blue-dark to-ink" />
        <Bubbles count={14} tint="mixed" />
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-red/25 blur-3xl" />

        <div className="container relative mx-auto text-center">
          <Reveal anim="fade-up">
            <span className="eyebrow justify-center text-brand-red-light">
              <span className="h-px w-6 bg-brand-red-light" />
              Our services
            </span>
          </Reveal>
          <Reveal anim="fade-up" delay={0.06}>
            <h1 className="mx-auto mt-5 max-w-3xl text-display-lg font-display text-white">
              Every wash, <span className="text-brand-red-light">every vehicle</span>, priced up front
            </h1>
          </Reveal>
          <Reveal anim="fade-up" delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-body-lg text-white/70">
              Pick your vehicle type and the whole menu updates. Straight from our price board — no
              hidden extras.
            </p>
          </Reveal>

          {/* vehicle selector */}
          <Reveal anim="fade-up" delay={0.18}>
            <div className="mx-auto mt-9 inline-flex flex-wrap justify-center gap-1.5 rounded-pill bg-white/10 p-1.5 backdrop-blur">
              {vehicleClasses.map((v) => (
                <button
                  key={v.key}
                  onClick={() => setVehicle(v.key)}
                  className={cn(
                    'relative rounded-pill px-5 py-2.5 text-sm font-semibold transition-colors',
                    vehicle === v.key ? 'text-ink' : 'text-white/80 hover:text-white',
                  )}
                >
                  {vehicle === v.key && (
                    <motion.span
                      layoutId="vehicle-pill"
                      className="absolute inset-0 rounded-pill bg-white shadow-md"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <Icon name={v.key === 'bus' ? 'truck' : 'car'} size={18} />
                    {v.label}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== PACKAGES BY CATEGORY ===================== */}
      {priceCategories.map((cat, ci) => {
        const items = packages.filter((p) => p.tier === cat.id);
        return (
          <Section key={cat.id} tone={ci % 2 === 0 ? 'white' : 'grey'}>
            <SectionHeader
              align="left"
              eyebrow={cat.label}
              title={cat.blurb}
              className="max-w-xl"
            />
            <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
              {items.map((p) => (
                <StaggerItem key={p.id} className="h-full">
                  <ServiceCard pkg={p} vehicle={vehicle} />
                </StaggerItem>
              ))}
            </Stagger>
          </Section>
        );
      })}

      {/* ===================== PENSIONER SPECIAL ===================== */}
      <Section tone="white">
        <Reveal anim="scale">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-blue to-brand-blue-dark p-8 text-white shadow-xl sm:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-lg">
                <span className="inline-flex items-center gap-2 rounded-pill bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  <Icon name="gift" size={16} /> {pensionerSpecial.day}
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                  {pensionerSpecial.name}
                </h2>
                <p className="mt-2 text-white/80">
                  {pensionerSpecial.summary} For our senior customers — {pensionerSpecial.eligibility}.
                </p>
              </div>
              <div className="flex gap-4">
                {vehicleClasses.slice(0, 2).map((v) => {
                  const price = pensionerSpecial.prices[v.key];
                  if (price == null) return null;
                  return (
                    <div key={v.key} className="rounded-xl bg-white/10 px-5 py-4 text-center backdrop-blur">
                      <p className="font-display text-3xl font-extrabold">{rand(price)}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/70">{v.short}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ===================== ADD-ONS + SPECIAL WASHES ===================== */}
      <Section tone="grey">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* add-ons */}
          <div>
            <SectionHeader align="left" eyebrow="Extra add-ons" title="Top up any wash" className="max-w-md" />
            <Stagger className="mt-8 grid gap-2.5 sm:grid-cols-2" stagger={0.05}>
              {addOns.map((a) => (
                <StaggerItem key={a.name}>
                  <div className="flex items-center justify-between gap-3 rounded-lg bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md">
                    <span className="text-sm font-medium text-ink">
                      {a.name}
                      {a.note && <span className="ml-1 text-xs text-grey-mid">({a.note})</span>}
                    </span>
                    <span className="font-display text-sm font-bold text-brand-blue">{rand(a.price)}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* special washes */}
          <div>
            <SectionHeader align="left" eyebrow="Special washes" title="Boats, caravans & more" className="max-w-md" />
            <Stagger className="mt-8 space-y-3" stagger={0.08}>
              {specialWashes.map((s) => (
                <StaggerItem key={s.name}>
                  <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                      <Icon name="droplet" size={22} />
                    </span>
                    <div className="flex-1">
                      <p className="font-display font-bold text-ink">{s.name}</p>
                      <p className="text-xs text-grey-dark">{s.detail}</p>
                    </div>
                    <span className="font-display text-lg font-extrabold text-ink">{rand(s.price)}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      {/* ===================== COMING SOON ===================== */}
      <Section tone="white">
        <SectionHeader
          eyebrow="On the way"
          title={<>Coming soon to <span className="text-gradient-brand">Smallie&rsquo;s</span></>}
          subtitle="We're growing. These are planned — not available just yet — but worth watching for."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {comingSoon.map((c) => (
            <StaggerItem key={c.name}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-dashed border-ink/15 bg-grey-light/60 p-6">
                <span className="absolute right-3 top-3 rounded-pill bg-ink/10 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-grey-dark">
                  Soon
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-blue shadow-sm transition-transform duration-500 group-hover:scale-110">
                  <Icon name={c.icon as never} size={24} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey-dark">{c.summary}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal anim="fade-up" className="mt-8 text-center">
          <p className="text-sm text-grey-mid">Want one of these sooner? Let us know when you visit.</p>
        </Reveal>
      </Section>

      <CTABand />
    </>
  );
}
