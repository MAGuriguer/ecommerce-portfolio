import type { CartItem } from '@/store/cart';

export function subtotalCents(items: CartItem[]) {
  return items.reduce((acc, it) => acc + it.priceCents * it.qty, 0);
}
