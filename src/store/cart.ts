'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type CartItem = {
  id: string;
  slug: string;
  title: string;
  priceCents: number;
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  add: (item: Omit<CartItem, 'qty'> & { qty?: number }) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (item) =>
        set((state) => {
          const qty = item.qty ?? 1;
          const idx = state.items.findIndex((i) => i.id === item.id);
          if (idx >= 0) {
            const items = state.items.slice();
            items[idx] = { ...items[idx], qty: items[idx].qty + qty };
            return { items };
          }
          return { items: [...state.items, { ...item, qty }] };
        }),
      remove: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      setQty: (id, qty) =>
        set((state) => ({
          items: state.items.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)),
        })),
      clear: () => set({ items: [] }),
    }),
    {
      name: 'minishop-cart-v1',
      storage: createJSONStorage(() => localStorage),
      // opzionale: versioning/migrate in futuro
    }
  )
);
