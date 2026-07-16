/**
 * Service & pricing data — transcribed verbatim from the CURRENT
 * Smallie's Car Wash price board (the newer, higher revision).
 * Prices are in South African Rand (ZAR).
 *
 * Three vehicle classes are priced across the board:
 *   car  = Cars
 *   suv  = SUV & Bakkie
 *   bus  = Mini Bus
 */

export type VehicleClass = 'car' | 'suv' | 'bus';

export const vehicleClasses: { key: VehicleClass; label: string; short: string }[] = [
  { key: 'car', label: 'Cars', short: 'Car' },
  { key: 'suv', label: 'SUV & Bakkie', short: 'SUV / Bakkie' },
  { key: 'bus', label: 'Mini Bus', short: 'Mini Bus' },
];

export interface WashPackage {
  id: string;
  name: string;
  summary: string;
  includes: string[];
  prices: Partial<Record<VehicleClass, number>>;
  icon: string; // key resolved by ServiceIcon
  tier: 'everyday' | 'deluxe' | 'premium';
  note?: string;
  featured?: boolean;
}

export const packages: WashPackage[] = [
  {
    id: 'wash-go',
    name: 'Wash & Go',
    summary: 'A quick exterior wash to knock off the daily coal dust and road grime.',
    includes: ['Exterior wash'],
    prices: { car: 80, suv: 100, bus: 110 },
    icon: 'droplet',
    tier: 'everyday',
  },
  {
    id: 'wash-dry',
    name: 'Wash & Dry',
    summary: 'Washed, hand-dried and finished with a fresh tyre shine.',
    includes: ['Wash', 'Dry', 'Tyre shine'],
    prices: { car: 120, suv: 130, bus: 140 },
    icon: 'sparkle',
    tier: 'everyday',
  },
  {
    id: 'smallies-wash',
    name: "Smallie's Wash",
    summary: 'Our signature wash — the full inside-and-out refresh most customers come back for.',
    includes: ['Wash & wax', 'Dry', 'Vacuum', 'Dashboard', 'Trim', 'Tyre shine'],
    prices: { car: 160, suv: 170, bus: 180 },
    icon: 'star',
    tier: 'everyday',
    featured: true,
  },
  {
    id: 'muddy-wash',
    name: 'Muddy Wash',
    summary: "Smallie's Wash plus extra graft for the seriously dirty and muddy vehicles.",
    includes: ["Full Smallie's Wash", 'Extra clean for dirty / muddy vehicles'],
    prices: { car: 210, suv: 240, bus: 260 },
    icon: 'mud',
    tier: 'deluxe',
  },
  {
    id: 'custom-wash',
    name: 'Custom Wash',
    summary: "Smallie's Wash with an engine wash or roof-lining clean added on.",
    includes: ["Full Smallie's Wash", 'Engine wash or roof lining'],
    prices: { car: 210, suv: 220, bus: 230 },
    icon: 'engine',
    tier: 'deluxe',
    note: 'At own risk',
  },
  {
    id: 'ultimate-wash',
    name: 'Ultimate Wash',
    summary: "Smallie's Wash finished with a hand polish for a deeper, longer-lasting shine.",
    includes: ["Full Smallie's Wash", 'Hand polish'],
    prices: { car: 260, suv: 270, bus: 300 },
    icon: 'shine',
    tier: 'deluxe',
  },
  {
    id: 'executive-wash',
    name: 'Executive Wash',
    summary: "Smallie's Wash plus a proper seats-and-doors treatment inside.",
    includes: [
      "Full Smallie's Wash",
      'Seats & doors',
      'Leather clean & cream — or fabric shampoo & wash',
    ],
    prices: { car: 320, suv: 335, bus: 395 },
    icon: 'seat',
    tier: 'premium',
  },
  {
    id: 'executive-wash-extra',
    name: 'Executive Wash Extra',
    summary: 'The Executive Wash with an engine or roof-lining clean on top.',
    includes: ['Full Executive Wash', 'Engine or roof lining'],
    prices: { car: 380, suv: 400, bus: 470 },
    icon: 'seat-plus',
    tier: 'premium',
    note: 'At own risk',
  },
  {
    id: 'full-valet',
    name: 'Full Valet',
    summary: 'The complete detail — every surface inside and out, top to bottom.',
    includes: [
      'Interior & exterior',
      'Hand polish',
      'Engine wash',
      'Door panels',
      'Seats & carpets',
      'Roof lining',
      'Leather treatment',
      'Fabric shampoo & wash',
    ],
    prices: { car: 900, suv: 1100, bus: 1300 },
    icon: 'crown',
    tier: 'premium',
    featured: true,
  },
];

/** Pensioner special — its own row on the board. */
export const pensionerSpecial = {
  name: 'Pensioners Special',
  eligibility: '60+ with ID proof',
  day: 'Wednesdays only',
  summary: "A Smallie's Wash rate reserved for our senior customers.",
  includes: ['Wash & wax', 'Dry', 'Vacuum', 'Dashboard', 'Trim', 'Tyre shine'],
  prices: { car: 115, suv: 125 } as Partial<Record<VehicleClass, number>>,
};

export interface AddOn {
  name: string;
  price: number;
  note?: string;
}

export const addOns: AddOn[] = [
  { name: 'Vacuum only', price: 80 },
  { name: 'Tar spot remove', price: 50 },
  { name: 'Tar removal', price: 120, note: 'Complete vehicle' },
  { name: 'Bakkie cover treatment', price: 50 },
  { name: 'Engine wash', price: 80 },
  { name: 'Roof lining wash', price: 80 },
  { name: 'Carpet wash', price: 140 },
  { name: 'Baby seats', price: 65 },
  { name: 'Leather treatment', price: 75 },
  { name: 'Hand polish', price: 150 },
  { name: 'Motorbike wash', price: 85 },
  { name: 'Venter trailer', price: 80 },
  { name: 'Very dirty', price: 85 },
  { name: 'Transport bus', price: 100, note: '14+ seater' },
];

export interface SpecialWash {
  name: string;
  price: number;
  detail: string;
}

export const specialWashes: SpecialWash[] = [
  { name: 'Bakkie — muddy & dirty', price: 240, detail: 'Heavy-duty wash for the worst of it' },
  { name: 'Boat (small – medium)', price: 250, detail: 'Wash & dry with tyre shine' },
  { name: 'Boat (big)', price: 270, detail: 'Wash & dry with tyre shine' },
  { name: '4x4 camping trailer', price: 150, detail: 'Wash & dry with tyre shine' },
  { name: 'Caravan', price: 300, detail: 'Wash & dry with tyre shine' },
];

/**
 * Planned offerings — NOT yet available.
 * Sourced from the strategy document as future direction and shown on the
 * site strictly under a "Coming Soon" label so nothing is over-promised.
 */
export const comingSoon = [
  {
    name: 'Unlimited Wash Club',
    icon: 'club',
    summary: 'Monthly membership for unlimited washes — keep the coal dust off, every day, one flat fee.',
  },
  {
    name: 'Loyalty Rewards',
    icon: 'gift',
    summary: 'Earn points on every visit and redeem them for discounts on your next detail.',
  },
  {
    name: 'Pet Wash',
    icon: 'paw',
    summary: 'A warm-water dog wash station so your best friend gets cleaned while the car does.',
  },
  {
    name: 'Fleet & Corporate',
    icon: 'fleet',
    summary: 'Scheduled washing and monthly billing for company vehicle fleets in the Witbank area.',
  },
] as const;

export const priceCategories = [
  { id: 'everyday', label: 'Everyday Washes', blurb: 'Quick, honest washes for the daily drive.' },
  { id: 'deluxe', label: 'Deluxe Detailing', blurb: 'A deeper clean when the road has been unkind.' },
  { id: 'premium', label: 'Premium & Valet', blurb: 'The full treatment, inside and out.' },
] as const;
