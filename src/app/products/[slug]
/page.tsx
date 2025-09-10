import { getProductBySlug, products } from '@/data/products';
import { formatPrice } from '@/lib/currency';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

// Pre-render statico di tutte le pagine prodotto
export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <section className="grid gap-8 md:grid-cols-2">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full aspect-square object-cover rounded-xl border"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <div className="text-xl font-medium">
          {formatPrice(product.priceCents, product.currency ?? 'EUR')}
        </div>
        <p className="text-gray-700">{product.description}</p>

        <button
          className="px-4 py-2 rounded-xl bg-black text-white hover:opacity-90"
          // in M3 collegheremo allo store del carrello
          onClick={() => alert('Mock: aggiunto al carrello (M3)')}
        >
          Aggiungi al carrello
        </button>
      </div>
    </section>
  );
}
