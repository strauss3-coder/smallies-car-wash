import type { SVGProps } from 'react';

export type IconName =
  // service / package icons
  | 'droplet' | 'sparkle' | 'star' | 'mud' | 'engine' | 'shine' | 'seat'
  | 'seat-plus' | 'crown' | 'club' | 'gift' | 'paw' | 'fleet'
  // feature icons
  | 'clean' | 'protect' | 'clock' | 'shield' | 'shop' | 'truck'
  // ui / nav icons
  | 'home' | 'info' | 'services' | 'contact' | 'phone' | 'whatsapp'
  | 'mail' | 'pin' | 'arrow-right' | 'arrow-up' | 'check' | 'plus'
  | 'facebook' | 'instagram' | 'menu' | 'close' | 'quote' | 'car';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

/* Stroke-based line icons on a 24-grid. `paths` are drawn with the SVG's
   currentColor so they inherit text colour and can be animated with CSS. */
const paths: Record<IconName, JSX.Element> = {
  droplet: <path d="M12 3s6 6.5 6 10.5A6 6 0 0 1 6 13.5C6 9.5 12 3 12 3Z" />,
  sparkle: (
    <>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
      <path d="M12 8l1.5 2.5L16 12l-2.5 1.5L12 16l-1.5-2.5L8 12l2.5-1.5Z" />
    </>
  ),
  star: <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9Z" />,
  mud: (
    <>
      <path d="M4 16c2 0 2-1.5 4-1.5S10 16 12 16s2-1.5 4-1.5S18 16 20 16" />
      <path d="M4 20c2 0 2-1.5 4-1.5S10 20 12 20s2-1.5 4-1.5S18 20 20 20" />
      <path d="M7 10c0-2 2-4 5-4s5 2 5 4" />
      <circle cx="9" cy="8" r=".6" fill="currentColor" stroke="none" />
      <circle cx="14" cy="7.5" r=".6" fill="currentColor" stroke="none" />
    </>
  ),
  engine: (
    <>
      <path d="M5 12h2l1-2h4v2h4l2 2v3h-2v2H8v-2H6v-3H5z" />
      <path d="M12 8V6h3M6 12H4" />
    </>
  ),
  shine: (
    <>
      <path d="M12 4l1.4 3.1L16 8.5l-2.6 1.4L12 13l-1.4-3.1L8 8.5l2.6-1.4Z" />
      <path d="M18 14l.7 1.6L20 16l-1.3.7L18 18l-.7-1.3L16 16l1.3-.4Z" />
    </>
  ),
  seat: (
    <>
      <path d="M7 4h4a3 3 0 0 1 3 3v6H7z" />
      <path d="M7 13c-1.5 0-2 1-2 3v2h11v-2c0-1.2.8-2 2-2h1" />
    </>
  ),
  'seat-plus': (
    <>
      <path d="M6 4h4a3 3 0 0 1 3 3v6H6z" />
      <path d="M6 13c-1.5 0-2 1-2 3v2h9v-2" />
      <path d="M18 6v6M15 9h6" />
    </>
  ),
  crown: (
    <>
      <path d="M4 8l3 4 5-6 5 6 3-4-2 11H6z" />
      <path d="M6 19h12" />
    </>
  ),
  club: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
    </>
  ),
  gift: (
    <>
      <path d="M4 11h16v9H4z" />
      <path d="M4 7h16v4H4zM12 7v13" />
      <path d="M12 7S9 3 7.5 4.5 9 7 12 7Zm0 0s3-4 4.5-2.5S15 7 12 7Z" />
    </>
  ),
  paw: (
    <>
      <circle cx="7" cy="9" r="1.6" /><circle cx="12" cy="7.5" r="1.6" />
      <circle cx="17" cy="9" r="1.6" />
      <path d="M8 16c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 3-4 3-4-.8-4-3Z" />
    </>
  ),
  fleet: (
    <>
      <path d="M2 15h9v-4l2-3h4l3 3v4h-2" />
      <circle cx="6" cy="16" r="1.6" /><circle cx="16" cy="16" r="1.6" />
    </>
  ),
  clean: (
    <>
      <path d="M9 3v6M13 3v6" />
      <path d="M7 9h8l-1 11H8z" />
      <path d="M9 13v3M13 13v3" />
    </>
  ),
  protect: (
    <>
      <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" />
      <path d="M12 8v4M12 15.5v.5" />
    </>
  ),
  shop: (
    <>
      <path d="M4 9l1-4h14l1 4M5 9h14v11H5z" />
      <path d="M4 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  truck: (
    <>
      <path d="M2 16V6h11v10M13 9h4l4 3.5V16h-3" />
      <circle cx="7" cy="17" r="1.7" /><circle cx="17" cy="17" r="1.7" />
    </>
  ),
  home: <path d="M4 11l8-7 8 7M6 10v10h12V10" />,
  info: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 11v5M12 8v.5" />
    </>
  ),
  services: (
    <>
      <path d="M14.5 4a4 4 0 0 0-5 5L4 14.5 6.5 17 12 11.5" />
      <path d="M14 10l6 6-2.5 2.5-6-6" />
    </>
  ),
  contact: (
    <>
      <path d="M4 5h16v12H7l-3 3z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  phone: (
    <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2C10 22 2 14 2 6a2 2 0 0 1 3-2Z" />
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.5-4A8 8 0 1 1 9 19.5z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.8 0 1-.6 1.3-1.1l-1.8-1-1 .8c-1-.4-1.8-1.2-2.2-2.2l.8-1-1-1.8c-.5.3-1.1.5-1.6 1z" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <path d="M3 6h18v12H3z" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c5-5.5 7-8.5 7-11.5A7 7 0 0 0 5 9.5C5 12.5 7 15.5 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </>
  ),
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-up': <path d="M12 19V5M6 11l6-6 6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  plus: <path d="M12 5v14M5 12h14" />,
  facebook: (
    <path d="M14 8h2V5h-2c-2 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V8.5c0-.4.2-.5.6-.5Z" fill="currentColor" stroke="none" />
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.5" cy="7.5" r=".6" fill="currentColor" stroke="none" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  quote: (
    <path d="M8 7c-2 1-3 3-3 5v5h5v-5H7c0-1.5 1-2.5 2-3zm9 0c-2 1-3 3-3 5v5h5v-5h-3c0-1.5 1-2.5 2-3z" fill="currentColor" stroke="none" />
  ),
  car: (
    <>
      <path d="M3 14l2-5.5A2 2 0 0 1 6.9 7h10.2a2 2 0 0 1 1.9 1.5L21 14v4h-3v-2H6v2H3z" />
      <circle cx="7" cy="14.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17" cy="14.5" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
