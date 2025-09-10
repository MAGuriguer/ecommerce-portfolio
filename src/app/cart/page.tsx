'use client';

import { useCart } from '@/store/cart';
import { subtotalCents } from '@/lib/cart';
import { formatPrice } from '@/lib/currency';
import Link from 'next/link';

export default function CartPage() {
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);

  const subtotal = subtotalCents(items);

  if (items.length === 0) {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Carrello</h1>
        <p className="text-gray-700">Il tuo carrello è vuoto.</p>
        <Link href="/products" className="inline-block px-4 py-2 rounded-lg border hover:bg-gray-50">
          Vai ai prodotti
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Carrello</h1>

      <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
        {/* Lista articoli */}
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.id} className="flex gap-4 border rounded-xl p-3">
              <img
                src={it.image}
                alt={it.title}
                className="w-24 h-24 object-cover rounded-lg border"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <Link href={`/products/${it.slug}`} className="font-medium hover:underline">
                      {it.title}
                    </Link>
                    <div className="text-sm text-gray-600">
                      {formatPrice(it.priceCents, 'EUR')}
                    </div>
                  </div>
                  <button
                    className="text-sm text-red-600 hover:underline"
                    onClick={() => remove(it.id)}
                    aria-label={`Rimuovi ${it.title}`}
                  >
                    Rimuovi
                  </button>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <label className="text-sm text-gray-600">Qty</label>
                  <input
                    type="number"
                    min={1}
                    value={it.qty}
                    onChange={(e) => setQty(it.id, Number(e.target.value || 1))}
                    className="w-20 border rounded-lg px-2 py-1"
                  />
                </div>
              </div>
            </div>
          ))}
          <button className="text-sm text-gray-600 hover:underline" onClick={clear}>
            Svuota carrello
          </button>
        </div>

        {/* Riepilogo */}
        <aside className="border rounded-xl p-4 h-fit space-y-3">
          <h2 className="font-medium">Riepilogo</h2>
          <div className="flex justify-between text-sm text-gray-700">
            <span>Subtotale</span>
            <span>{formatPrice(subtotal, 'EUR')}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-700">
            <span>Spedizione</span>
            <span>—</span>
          </div>
          <hr />
          <div className="flex justify-between text-lg font-semibold">
            <span>Totale</span>
            <span>{formatPrice(subtotal, 'EUR')}</span>
          </div>

          <Link
            href="/checkout"
            className="block text-center px-4 py-2 rounded-xl bg-black text-white hover:opacity-90"
          >
            Procedi al checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}
