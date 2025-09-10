export function formatPrice(
  cents: number,
  currency: string = 'EUR',
  locale: string = 'it-IT'
) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency })
    .format(cents / 100);
}
