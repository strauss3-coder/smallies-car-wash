import { Reveal } from '@/components/animations';
import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
}

/** Consistent eyebrow + heading + subtitle block used across every section. */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'dark',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <Reveal anim="fade-up">
          <span
            className={cn(
              'eyebrow mb-4',
              align === 'center' && 'justify-center',
            )}
          >
            <span className="h-px w-6 bg-brand-red" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal anim="fade-up" delay={0.05}>
        <h2
          className={cn(
            'text-display-md font-display',
            tone === 'light' ? 'text-white' : 'text-ink',
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal anim="fade-up" delay={0.12}>
          <p
            className={cn(
              'mt-4 text-body-lg',
              tone === 'light' ? 'text-white/70' : 'text-grey-dark',
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
