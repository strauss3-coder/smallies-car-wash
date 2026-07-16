import { Section } from '@/components/shared/Section';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Icon, type IconName } from '@/components/shared/Icon';
import { ContactForm } from '@/components/contact/ContactForm';
import { GoogleMap } from '@/components/contact/GoogleMap';
import { Reveal, Stagger, StaggerItem, Bubbles } from '@/components/animations';
import { site } from '@/data/site';
import { cn } from '@/utils/cn';

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.location.mapsQuery,
)}`;

/** Quick-action channel. Some links (phone/whatsapp/email/socials) await
 *  confirmed details, so they render as "coming soon" rather than fake data. */
interface Channel {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  tone: 'red' | 'blue' | 'green' | 'ink';
  pending?: boolean;
}

const channels: Channel[] = [
  {
    icon: 'pin',
    label: 'Get directions',
    value: `${site.location.street}, ${site.location.city}`,
    href: mapsHref,
    external: true,
    tone: 'red',
  },
  {
    icon: 'phone',
    label: 'Call us',
    value: 'Phone line — confirmed on request',
    tone: 'blue',
    pending: true,
  },
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: 'Chat — coming soon',
    tone: 'green',
    pending: true,
  },
  {
    icon: 'mail',
    label: 'Email',
    value: 'Email — coming soon',
    tone: 'ink',
    pending: true,
  },
];

const toneMap = {
  red: 'bg-brand-red/10 text-brand-red',
  blue: 'bg-brand-blue/10 text-brand-blue',
  green: 'bg-success/10 text-success',
  ink: 'bg-ink/10 text-ink',
};

const socials: { icon: IconName; label: string }[] = [
  { icon: 'facebook', label: 'Facebook' },
  { icon: 'instagram', label: 'Instagram' },
];

export default function Contact() {
  return (
    <>
      {/* ===================== CONTACT HERO ===================== */}
      <section className="relative overflow-hidden pb-10 pt-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-grey-light to-carbon" />
        <Bubbles count={10} tint="blue" />
        <div className="container relative mx-auto text-center">
          <Reveal anim="fade-up">
            <span className="eyebrow justify-center">
              <span className="h-px w-6 bg-brand-red" />
              Get in touch
            </span>
          </Reveal>
          <Reveal anim="fade-up" delay={0.06}>
            <h1 className="mx-auto mt-5 max-w-3xl text-display-lg font-display text-ink">
              Come see us on <span className="text-gradient-brand">Paul Sauer Street</span>
            </h1>
          </Reveal>
          <Reveal anim="fade-up" delay={0.12}>
            <p className="mx-auto mt-5 max-w-xl text-body-lg text-grey-dark">
              Walk-ins welcome seven days a week — right next to Ben Fleur Boulevard. Drop in, or send
              an enquiry below and we&rsquo;ll help you pick the right wash.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== QUICK CHANNELS ===================== */}
      <Section tone="white" className="!py-section-sm">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {channels.map((c) => {
            const inner = (
              <div
                className={cn(
                  'group flex h-full items-center gap-4 rounded-xl border p-5 transition-all duration-300',
                  c.pending
                    ? 'border-dashed border-ink/15 bg-grey-light/50'
                    : 'border-ink/8 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg',
                )}
              >
                <span className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-xl', toneMap[c.tone])}>
                  <Icon name={c.icon} size={24} />
                </span>
                <div className="min-w-0">
                  <p className="font-display font-bold text-ink">{c.label}</p>
                  <p className="truncate text-xs text-grey-dark">{c.value}</p>
                </div>
              </div>
            );
            return (
              <StaggerItem key={c.label} className="h-full">
                {c.href ? (
                  <a href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener noreferrer' : undefined} className="block h-full">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* ===================== FORM + INFO ===================== */}
      <Section tone="grey">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* form */}
          <div>
            <SectionHeader align="left" eyebrow="Send an enquiry" title="Tell us what you need" className="max-w-md" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* info column */}
          <div className="space-y-6">
            {/* hours */}
            <Reveal anim="fade-left">
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Icon name="clock" size={20} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink">Opening hours</h3>
                </div>
                <ul className="divide-y divide-ink/6">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between py-2.5 text-sm">
                      <span className="font-medium text-ink">{h.day}</span>
                      <span className="font-semibold text-grey-dark">{h.open} – {h.close}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* location */}
            <Reveal anim="fade-left" delay={0.08}>
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                    <Icon name="pin" size={20} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink">Where to find us</h3>
                </div>
                <p className="text-sm leading-relaxed text-grey-dark">
                  {site.location.street}<br />
                  {site.location.city}, {site.location.province}, {site.location.postalCode}<br />
                  <span className="font-semibold text-ink">{site.location.landmark}</span>
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-sm font-semibold text-grey-dark">Follow us</span>
                  {socials.map((s) => (
                    <span
                      key={s.label}
                      title={`${s.label} — coming soon`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-grey-light text-grey-dark transition-colors hover:bg-brand-blue hover:text-white"
                    >
                      <Icon name={s.icon} size={18} />
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ===================== MAP ===================== */}
      <Section tone="white" className="!pt-0">
        <SectionHeader
          eyebrow="On the map"
          title={<>Find us next to the <span className="text-gradient-brand">Boulevard</span></>}
          subtitle="We're easy to reach off the main routes through Ben Fleur."
        />
        <Reveal anim="fade-up" className="mt-10">
          <GoogleMap className="h-[420px]" />
        </Reveal>
      </Section>
    </>
  );
}
