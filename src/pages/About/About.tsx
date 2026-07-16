import { motion } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTABand } from '@/components/shared/CTABand';
import { Button } from '@/components/buttons/Button';
import { FAQ } from '@/components/shared/FAQ';
import { Icon } from '@/components/shared/Icon';
import {
  Reveal,
  Stagger,
  StaggerItem,
  Bubbles,
  NumberCounter,
} from '@/components/animations';
import { values, stats, faqs } from '@/data/content';
import { site } from '@/data/site';

import office from '@/assets/images/about/office-interior.jpg';
import signage from '@/assets/images/gallery/signage-banner.jpg';
import exterior from '@/assets/images/gallery/site-exterior.jpg';

const timeline = [
  { year: 'The spot', title: 'Right by the Boulevard', text: 'We set up on Paul Sauer Street in Ben Fleur — deliberately next to the shops so a wash fits around your day.' },
  { year: 'The method', title: 'Wash it properly', text: 'Foam-first, clean microfibre, correct technique. In a coal-dust city, how you wash matters as much as that you wash.' },
  { year: 'The menu', title: 'Everything on wheels', text: 'From a quick rinse to a full valet, and specials for boats, caravans, trailers and bikes — all priced on the board.' },
  { year: 'The promise', title: 'Fair, fast, friendly', text: 'A four-star local reputation we protect one car at a time. What you see on the board is what you pay.' },
];

const standards = [
  { icon: 'droplet', title: 'Foam-first washing', text: 'A pH-balanced foam lifts abrasive coal dust off the paint before we touch it — the single biggest thing that keeps a finish scratch-free.' },
  { icon: 'sparkle', title: 'Clean microfibre, always', text: 'Soft, high-pile cloths for drying and finishing. No grimy rags dragged across your clear coat.' },
  { icon: 'protect', title: 'Wax & polish that lasts', text: 'Our deluxe washes seal the surface so soot and fallout have a harder time bonding to the paint.' },
  { icon: 'shield', title: 'Careful with the extras', text: 'Engine and roof-lining cleans are offered at own risk and done with a light, sensible hand.' },
];

export default function About() {
  return (
    <>
      {/* ===================== ABOUT HERO (split, image-led) ===================== */}
      <section className="relative overflow-hidden pb-16 pt-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-grey-light to-carbon" />
        <Bubbles count={10} tint="red" />
        <div className="container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal anim="fade-up">
                <span className="eyebrow">
                  <span className="h-px w-6 bg-brand-red" />
                  Our story
                </span>
              </Reveal>
              <Reveal anim="fade-up" delay={0.06}>
                <h1 className="mt-5 text-display-lg font-display text-ink">
                  A Witbank wash, <span className="text-gradient-brand">done properly</span>
                </h1>
              </Reveal>
              <Reveal anim="fade-up" delay={0.12}>
                <p className="mt-6 max-w-xl text-body-lg text-grey-dark">
                  Smallie&rsquo;s Car Wash is a hands-on, local operation in Ben Fleur. We&rsquo;re not
                  a faceless chain — we&rsquo;re the team on Paul Sauer Street who know that in a
                  coal-mining city, a clean car takes real care, not just a quick spray.
                </p>
              </Reveal>
              <Reveal anim="fade-up" delay={0.18}>
                <p className="mt-4 max-w-xl text-grey-dark">
                  Our whole promise fits on three words painted on the office wall:
                  <span className="font-semibold text-ink"> clean, shine, protect</span>. Everything
                  we do sits under those.
                </p>
              </Reveal>
              <Reveal anim="fade-up" delay={0.24}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button to="/services" variant="primary" iconRight="arrow-right">Our services</Button>
                  <Button to="/contact" variant="ghost" icon="pin">Come say hi</Button>
                </div>
              </Reveal>
            </div>

            <Reveal anim="scale" className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img src={office} alt="Inside the Smallie's Car Wash office" className="h-[420px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-display text-lg font-bold text-white">
                    &ldquo;Clean cars. Fast service. Legendary shine.&rdquo;
                  </p>
                  <p className="mt-1 text-sm text-white/70">— on the wall, and on every ticket</p>
                </div>
              </div>
              <motion.div
                className="glass absolute -left-4 -top-4 hidden rounded-xl px-4 py-3 shadow-lg sm:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="font-display text-2xl font-extrabold text-brand-red">7 days</p>
                <p className="text-xs font-semibold text-grey-dark">open every week</p>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== MISSION + PROMISE ===================== */}
      <Section tone="white">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal anim="fade-right">
            <div className="h-full rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-dark p-8 text-white shadow-lg sm:p-10">
              <Icon name="services" size={32} className="text-white/70" />
              <h2 className="mt-4 font-display text-2xl font-bold">Our mission</h2>
              <p className="mt-3 leading-relaxed text-white/80">
                To give every Witbank driver an easy, affordable way to keep their vehicle clean and
                protected — beating the coal dust with proper technique, fair prices and a friendly
                face, seven days a week.
              </p>
            </div>
          </Reveal>
          <Reveal anim="fade-left">
            <div className="h-full rounded-2xl bg-gradient-to-br from-brand-red to-brand-red-dark p-8 text-white shadow-lg sm:p-10">
              <Icon name="protect" size={32} className="text-white/70" />
              <h2 className="mt-4 font-display text-2xl font-bold">Our promise to you</h2>
              <p className="mt-3 leading-relaxed text-white/90">
                Clear pricing on the board, honest work in the bay, and your vehicle treated like our
                own. If it has wheels, we&rsquo;ll get it clean — and we&rsquo;ll be glad you came.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ===================== VALUES ===================== */}
      <Section tone="grey">
        <SectionHeader
          eyebrow="What we stand for"
          title={<>The values behind every <span className="text-gradient-brand">wash</span></>}
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {values.map((v, i) => (
            <StaggerItem key={v.title}>
              <div className="group h-full rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                <span className="font-display text-4xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_rgba(224,27,36,0.35)]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey-dark">{v.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ===================== STATS ===================== */}
      <Section tone="ink" className="overflow-hidden">
        <Bubbles count={8} tint="blue" />
        <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <Reveal anim="fade-up" key={s.label} className="text-center">
              <p className="font-display text-display-md font-extrabold text-white">
                <NumberCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-white/50">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===================== TIMELINE / HOW WE WORK ===================== */}
      <Section tone="white">
        <SectionHeader
          eyebrow="How we do things"
          title="Four things that make the difference"
          subtitle="Not a company history — the choices that actually shape how your car comes out."
        />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-brand-blue via-brand-red to-transparent sm:left-1/2" />
          <Stagger className="space-y-8" stagger={0.14}>
            {timeline.map((t, i) => (
              <StaggerItem key={t.title}>
                <div className="relative flex">
                  <div className={`ml-12 sm:ml-0 sm:w-[46%] ${i % 2 ? 'sm:ml-auto' : ''}`}>
                    <span className="absolute left-4 top-1.5 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-brand-red ring-4 ring-white sm:left-1/2" />
                    <div className="rounded-xl bg-grey-light p-6 shadow-sm">
                      <span className="text-eyebrow uppercase text-brand-blue">{t.year}</span>
                      <h3 className="mt-1 font-display text-lg font-bold text-ink">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-grey-dark">{t.text}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ===================== PROFESSIONAL STANDARDS ===================== */}
      <Section tone="grey">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal anim="scale" className="order-2 lg:order-1">
            <div className="grid gap-4">
              <img src={signage} alt="Smallie's signage" loading="lazy" className="h-48 w-full rounded-2xl object-cover shadow-md" />
              <img src={exterior} alt="Smallie's wash site" loading="lazy" className="h-48 w-full rounded-2xl object-cover shadow-md" />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              eyebrow="Professional standards"
              title="Care in the detail"
              subtitle="The small habits that protect your paintwork in a coal-dust town."
            />
            <Stagger className="mt-8 space-y-4" stagger={0.1}>
              {standards.map((s) => (
                <StaggerItem key={s.title}>
                  <div className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                      <Icon name={s.icon as never} size={22} />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-ink">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-grey-dark">{s.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      {/* ===================== FAQ PREVIEW ===================== */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Good to know"
          title="Questions we hear a lot"
          subtitle={`Everything from booking to why ${site.location.city} is tough on paint.`}
        />
        <div className="mt-12">
          <FAQ items={faqs.slice(0, 4)} />
        </div>
        <Reveal anim="fade-up" className="mt-8 text-center">
          <Button to="/contact" variant="ghost" iconRight="arrow-right">More questions? Ask us</Button>
        </Reveal>
      </Section>

      <CTABand />
    </>
  );
}
