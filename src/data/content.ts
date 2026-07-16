/**
 * Editorial content — company story, values, process, reviews and FAQ.
 * Grounded in the supplied assets and the regional context from the
 * strategy document. Reviews are illustrative and generalised (the
 * business holds a ~4.0 star public rating); replace with verified
 * quotes before launch.
 */

export const nav = [
  { label: 'Home', to: '/', icon: 'home' },
  { label: 'About', to: '/about', icon: 'info' },
  { label: 'Services', to: '/services', icon: 'services' },
  { label: 'Contact', to: '/contact', icon: 'contact' },
] as const;

export const highlights = [
  {
    icon: 'clean',
    title: 'Clean',
    text: 'A pH-balanced foam wash that lifts coal dust and grime off the paint — not just around it.',
  },
  {
    icon: 'shine',
    title: 'Shine',
    text: 'Wax, hand polish and a proper tyre finish so your car leaves looking genuinely cared for.',
  },
  {
    icon: 'protect',
    title: 'Protect',
    text: "Witbank's air is hard on paintwork. Our deluxe washes help shield the finish underneath.",
  },
];

export const whyChoose = [
  {
    icon: 'clock',
    title: 'Fast & friendly service',
    text: 'In and out without the fuss — and a team that treats your vehicle like their own.',
  },
  {
    icon: 'shield',
    title: 'Quality you can trust',
    text: 'A 4-star reputation built one honest wash at a time, right here in Ben Fleur.',
  },
  {
    icon: 'shop',
    title: 'Wash while you shop',
    text: 'Right next to Ben Fleur Boulevard — drop the car, run your errands, collect it gleaming.',
  },
  {
    icon: 'truck',
    title: 'Anything on wheels',
    text: 'Cars, bakkies, SUVs, mini buses, boats, caravans, trailers and bikes — all welcome.',
  },
];

export const values = [
  {
    title: 'Honest work',
    text: 'Clear pricing on the board, no surprises at the till. What you see is what you pay.',
  },
  {
    title: 'Real care',
    text: 'Correct wash technique and clean microfibre — because a rushed wash marks the paint.',
  },
  {
    title: 'Local pride',
    text: "We're Witbank people cleaning Witbank cars, and our reputation lives on this street.",
  },
  {
    title: 'Everyone welcome',
    text: 'From the daily commuter to the weekend caravan — and a standing Wednesday rate for pensioners.',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Drive in or drop off',
    text: 'Pull into the bay on Paul Sauer Street. No appointment needed — walk-ins are always welcome.',
  },
  {
    step: '02',
    title: 'Pick your wash',
    text: 'Choose from Wash & Go through to a Full Valet, sized for your vehicle. Add extras any time.',
  },
  {
    step: '03',
    title: 'Shop while we work',
    text: 'Ben Fleur Boulevard is right next door. Grab a coffee while the team gets to work.',
  },
  {
    step: '04',
    title: 'Collect the shine',
    text: 'Come back to a clean, dry, protected vehicle that looks and feels genuinely fresh.',
  },
];

export const stats = [
  { value: 7, suffix: '', label: 'Days a week' },
  { value: 14, suffix: '+', label: 'Wash & valet options' },
  { value: 4, suffix: '.0★', label: 'Public rating' },
  { value: 100, suffix: '%', label: 'Local & hands-on' },
];

export const testimonials = [
  {
    name: 'Thandi M.',
    context: 'Regular customer',
    stars: 5,
    quote:
      'I leave my car and walk over to the Boulevard for shopping — by the time I am done it is spotless. So convenient.',
  },
  {
    name: 'Johan V.',
    context: 'Bakkie owner',
    stars: 5,
    quote:
      'They actually get the coal dust off properly. Other places just smear it around. My bakkie has never looked better.',
  },
  {
    name: 'Precious K.',
    context: 'Executive Wash',
    stars: 4,
    quote:
      'Booked the Executive Wash and the inside came up like new. The leather treatment was worth every rand.',
  },
  {
    name: 'Sipho D.',
    context: 'Weekend visit',
    stars: 5,
    quote:
      'Friendly team, fair prices right there on the board, and a proper shine. This is my regular spot now.',
  },
];

export const faqs = [
  {
    q: 'Do I need to book, or can I just drive in?',
    a: "Just drive in — Smallie's is walk-in friendly seven days a week. For bigger jobs like a Full Valet it helps to arrive earlier in the day, especially on busy Saturdays.",
  },
  {
    q: 'Why does Witbank need special attention for washing?',
    a: "eMalahleni's air carries a lot of coal dust and industrial fallout. Left on the paint it can dull and mark the finish, so a proper foam wash and regular attention really does protect your vehicle.",
  },
  {
    q: 'What does the signature Smallie’s Wash include?',
    a: "It's our most popular option: a wash & wax, hand dry, interior vacuum, dashboard, trim and a tyre shine. From R160 for cars, R170 for SUVs and bakkies, R180 for mini buses.",
  },
  {
    q: 'Do you clean more than just cars?',
    a: 'Plenty more — bakkies, SUVs and mini buses are priced across the board, and we have special washes for boats, caravans, 4x4 camping trailers, motorbikes and trailers too.',
  },
  {
    q: 'Is there a discount for pensioners?',
    a: "Yes. Pensioners (60+ with ID) get a special rate on the Smallie's Wash every Wednesday — R115 for cars and R125 for SUVs and bakkies.",
  },
  {
    q: 'Where exactly are you?',
    a: "On Paul Sauer Street in Ben Fleur, right next to Ben Fleur Boulevard shopping centre in Witbank — easy to find and easy to make part of your errands.",
  },
];
