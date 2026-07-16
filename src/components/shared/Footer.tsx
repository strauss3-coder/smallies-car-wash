import { Link } from 'react-router-dom';
import { Icon } from '@/components/shared/Icon';
import { nav } from '@/data/content';
import { site } from '@/data/site';
import logo from '@/assets/images/logo/smallies-logo.png';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* decorative gradient blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl" />

      <div className="container relative mx-auto pb-28 pt-16 md:pb-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-14 w-14 object-contain" />
              <div>
                <p className="font-display text-xl font-extrabold leading-none">Smallie&rsquo;s Car Wash</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
                  Clean · Shine · Protect
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {site.tagline} A hands-on, local car wash on Paul Sauer Street in Ben Fleur — right
              next to the Boulevard, and open seven days a week.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-sm text-white/75 transition-colors hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">Visit</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-brand-red-light" />
                <span>{site.location.street}<br />{site.location.city}, {site.location.postalCode}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-brand-red-light" />
                <span>Mon–Sat 08:00–17:00<br />Sun 08:00–15:00</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="shop" size={18} className="mt-0.5 shrink-0 text-brand-red-light" />
                <span>{site.location.landmark}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Smallie&rsquo;s Car Wash, Ben Fleur, Witbank. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Clean cars. Fast service. Legendary shine.</p>
        </div>
      </div>
    </footer>
  );
}
