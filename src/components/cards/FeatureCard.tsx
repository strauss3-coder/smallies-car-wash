import { HoverGlow } from '@/components/animations';
import { Icon, type IconName } from '@/components/shared/Icon';

interface FeatureCardProps {
  icon: IconName;
  title: string;
  text: string;
  accent?: 'red' | 'blue';
}

/** Glass feature card with an animated icon chip. */
export function FeatureCard({ icon, title, text, accent = 'blue' }: FeatureCardProps) {
  const chip =
    accent === 'red'
      ? 'from-brand-red to-brand-red-light shadow-glow'
      : 'from-brand-blue to-brand-blue-light shadow-glow-blue';

  return (
    <HoverGlow glow={accent} className="h-full rounded-xl">
      <article className="glass group h-full rounded-xl p-7">
        <div
          className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${chip} text-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}
        >
          <Icon name={icon} size={26} />
        </div>
        <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-grey-dark">{text}</p>
      </article>
    </HoverGlow>
  );
}
