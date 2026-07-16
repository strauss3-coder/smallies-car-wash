import { useState, type ReactNode, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { Icon, type IconName } from '@/components/shared/Icon';

type Variant = 'primary' | 'secondary' | 'ghost' | 'white';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconRight?: IconName;
  className?: string;
  full?: boolean;
}

interface ButtonAsButton extends BaseProps {
  to?: undefined;
  href?: undefined;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
}
interface ButtonAsLink extends BaseProps {
  to: string;
  href?: undefined;
}
interface ButtonAsAnchor extends BaseProps {
  href: string;
  to?: undefined;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const base =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-pill font-display font-semibold tracking-tight transition-all duration-300 ease-smooth focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/30 disabled:opacity-60 disabled:pointer-events-none';

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-[0.95rem] px-6 py-3',
  lg: 'text-base px-8 py-4',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-red text-white shadow-glow hover:shadow-[0_20px_50px_rgba(224,27,36,0.35)] hover:-translate-y-0.5',
  secondary:
    'bg-brand-blue text-white shadow-glow-blue hover:shadow-[0_20px_50px_rgba(29,78,216,0.35)] hover:-translate-y-0.5',
  ghost:
    'bg-white/70 text-ink ring-1 ring-ink/10 backdrop-blur hover:bg-white hover:ring-ink/20 hover:-translate-y-0.5',
  white:
    'bg-white text-brand-blue shadow-md hover:shadow-lg hover:-translate-y-0.5',
};

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconRight,
    className,
    full,
  } = props;
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const spawnRipple = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [
      ...r,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
  };

  const classes = cn(base, sizes[size], variants[variant], full && 'w-full', className);

  const inner = (
    <>
      {icon && <Icon name={icon} size={size === 'lg' ? 20 : 18} />}
      <span>{children}</span>
      {iconRight && (
        <Icon
          name={iconRight}
          size={size === 'lg' ? 20 : 18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 animate-ripple"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </>
  );

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={spawnRipple}>
        {inner}
      </Link>
    );
  }
  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel ?? (props.target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={classes}
        onClick={spawnRipple}
      >
        {inner}
      </a>
    );
  }

  const { onClick, type = 'button' } = props as ButtonAsButton;
  return (
    <button
      type={type}
      className={classes}
      onClick={(e) => {
        spawnRipple(e);
        onClick?.(e);
      }}
    >
      {inner}
    </button>
  );
}
