/**
 * Central source of truth for business facts.
 * Everything here is taken from the supplied Smallie's Car Wash assets
 * (logo, signage, office wall) and the ground-truth price boards.
 * Contact details flagged `unverified` should be confirmed with the owner.
 */

export const site = {
  name: "Smallie's Car Wash",
  shortName: "Smallie's",
  tagline: 'Clean cars. Fast service. Legendary shine.',
  pillars: ['Clean', 'Shine', 'Protect'] as const,
  location: {
    suburb: 'Ben Fleur',
    city: 'Witbank (eMalahleni)',
    province: 'Mpumalanga',
    country: 'South Africa',
    street: 'Paul Sauer Street, Ben Fleur',
    postalCode: '1049',
    landmark: 'Next to Ben Fleur Boulevard',
    // Approx Ben Fleur, Witbank — used only for the embedded map framing.
    mapsQuery: 'Ben Fleur Boulevard, Witbank, 1049, South Africa',
  },
  // NOTE: no public phone/email/socials were included in the supplied assets.
  // These are placeholders to be replaced once confirmed by the owner.
  contact: {
    phone: '',
    whatsapp: '',
    email: '',
    unverified: true,
  },
  hours: [
    { day: 'Monday', open: '08:00', close: '17:00' },
    { day: 'Tuesday', open: '08:00', close: '17:00' },
    { day: 'Wednesday', open: '08:00', close: '17:00' },
    { day: 'Thursday', open: '08:00', close: '17:00' },
    { day: 'Friday', open: '08:00', close: '17:00' },
    { day: 'Saturday', open: '08:00', close: '17:00' },
    { day: 'Sunday', open: '08:00', close: '15:00' },
  ],
} as const;

export type Weekday = (typeof site.hours)[number]['day'];
