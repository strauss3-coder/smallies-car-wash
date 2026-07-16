/** Tiny classname joiner — filters falsy values. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/** Format a Rand price. */
export function rand(amount: number): string {
  return `R${amount.toLocaleString('en-ZA')}`;
}
