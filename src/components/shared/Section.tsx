import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionProps {
  children: ReactNode;
  id?: string;
  /** Background treatment. */
  tone?: 'white' | 'grey' | 'gradient' | 'ink';
  className?: string;
  containerClassName?: string;
  /** Remove the default container so children can go full-bleed. */
  bleed?: boolean;
}

const tones: Record<string, string> = {
  white: 'bg-carbon',
  grey: 'bg-grey-light',
  gradient: 'bg-gradient-to-b from-carbon via-grey-light to-carbon',
  ink: 'bg-ink text-white',
};

export function Section({
  children,
  id,
  tone = 'white',
  className,
  containerClassName,
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative py-section', tones[tone], className)}
    >
      {bleed ? (
        children
      ) : (
        <div className={cn('container mx-auto', containerClassName)}>{children}</div>
      )}
    </section>
  );
}
