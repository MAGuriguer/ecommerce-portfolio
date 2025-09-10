import { products } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

export const dynamic = 'force-static'; // per M2 va benissimo statico

export default function ProductsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Prodotti</h1>
      <ProductGrid products={products} />
    </section>
  );
}
