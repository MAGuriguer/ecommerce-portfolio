'use client';

import { useCart } from '@/store/cart';
import type { Product } from '@/types/product';

export default function AddToCartButton({ product }: { product: Product }) {
  const add = useCart((s) => s.add);

  return (
    <button
      className="px-4 py-2 rounded-xl bg-black text-white hover:opacity-90"
      onClick={() =>
        add({
          id: product.id,
          slug: product.slug,
          title: product.title,
          priceCents: product.priceCents,
          image: product.image,
          qty: 1,
        })
      }
    >
      Aggiungi al carrello
    </button>
  );
}
