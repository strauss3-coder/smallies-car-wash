# Smallie's Car Wash — Website

A premium, production-ready marketing site for **Smallie's Car Wash**, Ben Fleur, Witbank (eMalahleni), Mpumalanga.

Built with **Vite + React + TypeScript + TailwindCSS + Framer Motion**.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/
    animations/   Reveal, Stagger, NumberCounter, Bubbles, Floating, HoverGlow
    buttons/      Button (ripple + glow, link/router/anchor aware)
    cards/        FeatureCard, ServiceCard (expandable), PricingCard
    contact/      ContactForm, GoogleMap
    gallery/      GalleryCard
    loading/      LoadingScreen, PageTransition
    navigation/   Navbar, FloatingNav (bottom island)
    shared/       Section, SectionHeader, Icon, FAQ, Footer, CTABand
    testimonials/ Testimonials (auto carousel)
  pages/          Home, About, Services, Contact  (each a unique layout)
  data/           site.ts, services.ts, content.ts  (single source of truth)
  hooks/          useScrollDirection, useScrollToTop
  styles/         globals.css (design-system CSS variables)
  assets/images/  logo, pricing, gallery, about, homepage
```

## Design system

Defined in `tailwind.config.js` and mirrored as CSS variables in `src/styles/globals.css`:
brand red/blue, carbon white, greys, ink, success/warning, glass morphism, radius
scale, container width, spacing rhythm, fluid typography (clamp) and a shadow system.
Light, fresh, trustworthy — no dark theme.

## Content & data decisions

All business facts come from the supplied assets, not invented:

- **Name** — the logo, signage, office wall and price boards all read **Smallie's Car Wash**
  (the strategy document's "Smiley's" refers to a separate US business used only as a model).
- **Pricing** — transcribed verbatim from the **current** (newer/higher) price board in
  `src/data/services.ts`. Prices are in ZAR across Cars / SUV & Bakkie / Mini Bus.
- **Tagline** — "Clean cars. Fast service. Legendary shine." (from the office wall).
- **Hours** — Mon–Sat 08:00–17:00, Sun 08:00–15:00.

### ⚠️ To confirm before launch (`src/data/site.ts`)

- **Phone, WhatsApp, email and social links** were not included in the supplied assets.
  They are intentionally left blank and shown on the Contact page as "coming soon" rather
  than fabricated. Fill in `site.contact` and the socials in `Contact.tsx` once confirmed.
- The **Google Map** is framed on "Ben Fleur Boulevard, Witbank" — swap for the exact pin
  / place ID when available.
- **Coming Soon** items (Unlimited Wash Club, Loyalty Rewards, Pet Wash, Fleet & Corporate)
  are from the strategy document as *future* direction and are clearly labelled "Soon".
  They are not live services.
- **Testimonials** are illustrative (business holds a ~4.0 public rating); replace with
  verified quotes.

## Accessibility & performance

- Mobile-first, responsive across mobile / tablet / laptop / desktop.
- All animations respect `prefers-reduced-motion`.
- Images lazy-loaded; logo optimised; vendor code split (react / framer-motion chunks).
